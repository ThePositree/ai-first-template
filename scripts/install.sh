#!/usr/bin/env sh
set -eu

target="${AI_FIRST_TARGET:-${1:-$(pwd)}}"
source_dir="${AI_FIRST_SOURCE_DIR:-}"
repo_url="${AI_FIRST_REPO_URL:-https://github.com/ThePositree/ai-first-template}"
ref="${AI_FIRST_REF:-main}"
tmp_dir=""

cleanup() {
  if [ -n "$tmp_dir" ]; then
    rm -rf "$tmp_dir"
  fi
}
trap cleanup EXIT

fail() {
  echo "$1"
  exit 1
}

json_escape() {
  sed 's/\\/\\\\/g; s/"/\\"/g'
}

relative_to_envelope() {
  printf '%s\n' "${1#"$envelope_root"/}"
}

target_path() {
  printf '%s/%s\n' "$target" "$1"
}

has_ai_first_handoff() {
  grep -q '.ai-first/README.md' "$1"
}

if [ -z "$source_dir" ]; then
  case "$0" in
    */*)
      script_dir=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
      source_dir=$(CDPATH= cd -- "$script_dir/.." && pwd)
      ;;
    *)
      source_dir=""
      ;;
  esac
fi

if [ -z "$source_dir" ] || [ ! -d "$source_dir/envelope/files" ]; then
  echo "AI-first install"
  echo ""
  echo "Fetching AI-first from $repo_url@$ref..."

  command -v curl >/dev/null 2>&1 ||
    fail "curl is required for hosted AI-first installs."
  command -v tar >/dev/null 2>&1 ||
    fail "tar is required for hosted AI-first installs."

  tmp_dir=$(mktemp -d "${TMPDIR:-/tmp}/ai-first.XXXXXX")
  curl -fsSL "$repo_url/archive/$ref.tar.gz" | tar -xz -C "$tmp_dir"
  source_dir=$(find "$tmp_dir" -mindepth 1 -maxdepth 1 -type d | sed -n '1p')

  if [ -z "$source_dir" ] || [ ! -d "$source_dir/envelope/files" ]; then
    fail "Downloaded AI-first source is missing the installable envelope."
  fi
fi

envelope_root="$source_dir/envelope/files"
version=$(sed -n 's/.*"version":[[:space:]]*"\([^"]*\)".*/\1/p' "$source_dir/package.json" | sed -n '1p')
if [ -z "$version" ]; then
  fail "package.json version must be a string."
fi

target_parent=$(dirname -- "$target")
target_name=$(basename -- "$target")
mkdir -p "$target_parent"
target=$(CDPATH= cd -- "$target_parent" && pwd)/$target_name
if [ -z "$tmp_dir" ]; then
  tmp_dir=$(mktemp -d "${TMPDIR:-/tmp}/ai-first.XXXXXX")
fi
work_dir="$tmp_dir/plan"
mkdir -p "$work_dir"

managed_files="$work_dir/managed-files"
conflicts="$work_dir/conflicts"
: >"$managed_files"
: >"$conflicts"

find "$envelope_root" -type f | sort | while IFS= read -r source_file; do
  relative_path=$(relative_to_envelope "$source_file")

  printf '%s\n' "$relative_path" >>"$managed_files"
  destination=$(target_path "$relative_path")

  if [ ! -e "$destination" ]; then
    continue
  fi

  if [ ! -f "$destination" ]; then
    printf '%s\t%s\t%s\n' \
      "$relative_path" \
      "An existing path is not a regular file." \
      "Move the existing directory or special path, then rerun the installer." \
      >>"$conflicts"
    continue
  fi

  if [ "$relative_path" = "AGENTS.md" ]; then
    continue
  fi

  if ! cmp -s "$source_file" "$destination"; then
    printf '%s\t%s\t%s\n' \
      "$relative_path" \
      "An existing file differs from the AI-first managed file." \
      "Review and merge the existing file manually, then rerun the installer." \
      >>"$conflicts"
  fi
done

printf '%s\n' ".ai-first/VERSION" ".ai-first/manifest.json" >>"$managed_files"

for generated_path in ".ai-first/VERSION" ".ai-first/manifest.json"; do
  destination=$(target_path "$generated_path")
  if [ -e "$destination" ] && [ ! -f "$destination" ]; then
    printf '%s\t%s\t%s\n' \
      "$generated_path" \
      "An existing path is not a regular file." \
      "Move the existing directory or special path, then rerun the installer." \
      >>"$conflicts"
  fi
done

create_count=0
update_count=0
inject_count=0
skip_count=0

while IFS= read -r relative_path; do
  destination=$(target_path "$relative_path")

  if [ ! -e "$destination" ]; then
    create_count=$((create_count + 1))
    continue
  fi

  if [ "$relative_path" = "AGENTS.md" ]; then
    if has_ai_first_handoff "$destination"; then
      skip_count=$((skip_count + 1))
    else
      inject_count=$((inject_count + 1))
    fi
    continue
  fi

  if [ "$relative_path" = ".ai-first/VERSION" ] ||
    [ "$relative_path" = ".ai-first/manifest.json" ]; then
    update_count=$((update_count + 1))
    continue
  fi

  if [ ! -f "$destination" ]; then
    continue
  fi

  source_file="$envelope_root/$relative_path"
  if cmp -s "$source_file" "$destination"; then
    skip_count=$((skip_count + 1))
  fi
done <"$managed_files"

conflict_count=$(wc -l <"$conflicts" | tr -d ' ')

echo "AI-first install"
echo "Target: $target"
echo ""
echo "Create: $create_count"
echo "Update: $update_count"
echo "Inject: $inject_count"
echo "Skip: $skip_count"
echo "Conflicts: $conflict_count"

if [ "$conflict_count" -gt 0 ]; then
  echo ""
  echo "Conflicting files:"
  while IFS="$(printf '\t')" read -r conflict_path reason action; do
    echo "- $conflict_path"
    echo "  Reason: $reason"
    echo "  Action: $action"
  done <"$conflicts"
  echo ""
  echo "No files were written. Ask the owner before replacing existing files."
  exit 1
fi

mkdir -p "$target"

find "$envelope_root" -type f | sort | while IFS= read -r source_file; do
  relative_path=$(relative_to_envelope "$source_file")

  destination=$(target_path "$relative_path")
  mkdir -p "$(dirname -- "$destination")"

  if [ "$relative_path" = "AGENTS.md" ] && [ -f "$destination" ]; then
    if has_ai_first_handoff "$destination"; then
      continue
    fi
    {
      sed '$a\' "$destination"
      echo ""
      echo "---"
      echo ""
      cat "$source_file"
    } >"$work_dir/AGENTS.md"
    cp "$work_dir/AGENTS.md" "$destination"
    continue
  fi

  cp "$source_file" "$destination"
done

printf '%s\n' "$version" >"$(target_path ".ai-first/VERSION")"

project=$(basename -- "$target" | json_escape)
installed_at=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
manifest_path=$(target_path ".ai-first/manifest.json")
mkdir -p "$(dirname -- "$manifest_path")"

{
  echo "{"
  echo "  \"installedAt\": \"$installed_at\","
  echo "  \"managedFiles\": ["
  sort -u "$managed_files" | sed '/^$/d' | awk '{
    gsub(/\\/,"\\\\");
    gsub(/"/,"\\\"");
    files[++count] = $0;
  }
  END {
    for (item = 1; item <= count; item += 1) {
      suffix = item == count ? "" : ",";
      printf "    \"%s\"%s\n", files[item], suffix;
    }
  }'
  echo "  ],"
  echo "  \"memoryRoot\": \".ai-first/context\","
  echo "  \"project\": \"$project\","
  echo "  \"schemaVersion\": 1,"
  echo "  \"version\": \"$version\""
  echo "}"
} >"$manifest_path"

echo ""
echo "Installed ai-first."
echo "Keep talking to your agent as usual. In a new chat, the agent starts from AGENTS.md."
