#!/usr/bin/env sh
set -eu

target="${AI_FIRST_TARGET:-${1:-$(pwd)}}"
source_dir="${AI_FIRST_SOURCE_DIR:-}"

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
  echo "Hosted install mode is not published yet."
  echo "For local development, run this script from the ai-first source repository."
  exit 1
fi

if ! command -v pnpm >/dev/null 2>&1; then
  echo "pnpm is required to build the local AI-first installer."
  exit 1
fi

cd "$source_dir"
pnpm build
node dist/install.js --target "$target"
