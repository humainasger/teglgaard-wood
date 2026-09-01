#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd -P)"
workspace_root="$(cd "$script_dir/.." && pwd -P)"
cd "$workspace_root"

echo "==> Installing pnpm dependencies"
corepack pnpm install --frozen-lockfile

echo "==> Orca worktree ready"
