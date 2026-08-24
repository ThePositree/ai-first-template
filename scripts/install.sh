#!/usr/bin/env sh
set -eu

target="${AI_FIRST_TARGET:-${1:-$(pwd)}}"
source_dir="${AI_FIRST_SOURCE_DIR:-}"
repo_url="${AI_FIRST_REPO_URL:-https://github.com/ThePositree/ai-first-template}"
ref="${AI_FIRST_REF:-main}"
tmp_dir=""
needs_install=0

cleanup() {
  if [ -n "$tmp_dir" ]; then
    rm -rf "$tmp_dir"
  fi
}
trap cleanup EXIT

run_pnpm() {
  if command -v pnpm >/dev/null 2>&1; then
    pnpm "$@"
    return
  fi

  if command -v corepack >/dev/null 2>&1; then
    corepack pnpm "$@"
    return
  fi

  echo "pnpm or corepack is required to build the AI-first installer."
  exit 1
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

if [ -z "$source_dir" ] || [ ! -f "$source_dir/src/installer/install.ts" ]; then
  echo "AI-first install"
  echo ""
  echo "Fetching AI-first from $repo_url@$ref..."

  if ! command -v curl >/dev/null 2>&1; then
    echo "curl is required for hosted AI-first installs."
    exit 1
  fi

  if ! command -v tar >/dev/null 2>&1; then
    echo "tar is required for hosted AI-first installs."
    exit 1
  fi

  tmp_dir=$(mktemp -d "${TMPDIR:-/tmp}/ai-first.XXXXXX")
  curl -fsSL "$repo_url/archive/$ref.tar.gz" | tar -xz -C "$tmp_dir"
  source_dir=$(find "$tmp_dir" -mindepth 1 -maxdepth 1 -type d | sed -n '1p')
  needs_install=1

  if [ -z "$source_dir" ] || [ ! -f "$source_dir/src/installer/install.ts" ]; then
    echo "Downloaded AI-first source is missing the installer."
    exit 1
  fi
fi

cd "$source_dir"
if [ "$needs_install" -eq 1 ] || [ ! -d node_modules ]; then
  run_pnpm install --frozen-lockfile
fi
run_pnpm build
node dist/install.js --target "$target"
