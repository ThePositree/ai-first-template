# Architecture

Current shape:

- `envelope/files` is the installable file tree for target repositories.
- Installed root `AGENTS.md` tells agents to read `.ai-first/README.md`.
- `.ai-first/context` is durable Markdown memory for product state, tasks,
  decisions, architecture notes, and recent history.
- `src/installer/install.ts` contains the local installer source.
- `src/lib/install-plan.ts` contains shared installer planning and apply logic.
- `rolldown.config.mjs` builds the installer into `dist/install.js`.
- `scripts/install.sh` is the draft public install entrypoint used for local
  dogfooding.
- `site` is a Next.js documentation app in the root pnpm workspace.
- `mise.toml` pins project tool versions, including Node.js and pnpm.

Tooling:

- package manager: pnpm;
- source bundler: Rolldown;
- tests: Vitest;
- lint: Oxlint;
- format: Oxfmt;
- docs: Next.js.

Install flow:

1. Install dependencies with `pnpm install`.
2. Build with `pnpm build`.
3. Run `pnpm install:local -- <directory>`.
4. Installer copies `envelope/files`, `VERSION`, and `manifest.json`.
5. Installed agents start from `AGENTS.md`, then `.ai-first/README.md`.

Updates are expected to use the public install entrypoint again rather than an
installed `update.js` script.
