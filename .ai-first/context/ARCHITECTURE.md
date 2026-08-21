# Architecture

Current shape:

- `envelope/files` is the installable file tree for target repositories.
- Installed root `AGENTS.md` tells agents to read `.ai-first/README.md`.
- `.ai-first/context` is durable Markdown memory for product state, tasks, decisions, architecture notes, and recent history.
- `src/installer/install.ts` contains the local installer source.
- `src/lib/install-plan.ts` contains shared installer planning and apply logic.
- `rolldown.config.mjs` builds the installer into `dist/install.js`.
- `scripts/install.sh` is the draft public install entrypoint used for local dogfooding.
- `site` is a Next.js documentation app in the root pnpm workspace. As of 2026-08-18, its UI has been reset to a clean Next.js + shadcn/ui baseline. Every future site layout or component change must use the shadcn skill and available shadcn MCP/CLI tooling, inspect local shadcn config/components first, search registries by functionality and UI pattern, inspect promising registry items/docs/examples/source before use, and only then compose primitives or write custom Tailwind markup.
- `mise.toml` pins project tool versions, including Node.js and pnpm.

Tooling:

- package manager: pnpm;
- source bundler: Rolldown;
- tests: Vitest;
- lint: Oxlint with Ultracite presets. Root source uses the core preset; `site` uses core, React, Next, and Ultracite's Oxlint JS-plugin presets. Agents must satisfy lint rules by changing owned source code, not by disabling rules or hiding violations. Config-level boundaries are allowed for external tool state and separately linted workspaces, but owned-source exceptions require explicit owner approval with a concrete justification.
- format: Oxfmt with Ultracite formatting presets;
- docs: Next.js.

Install flow:

1. Install dependencies with `pnpm install`.
2. Build with `pnpm build`.
3. Run `pnpm install:local -- <directory>`.
4. Installer copies `envelope/files`, `VERSION`, and `manifest.json`.
5. Installed agents start from `AGENTS.md`, then `.ai-first/README.md`.

Updates are expected to use the public install entrypoint again rather than an installed `update.js` script.

Memory surfaces:

- source project memory lives in `.ai-first/context`;
- installable first-run memory lives in `envelope/files/.ai-first/context`;
- root `AGENTS.md` governs this source repository;
- `envelope/files/AGENTS.md` hands installed repositories to their local `.ai-first/README.md`;
- public-facing documentation lives in `README.md` and `site`.

When project behavior changes, agents must decide whether each surface needs the same update. Source-only behavior does not automatically belong in the installable envelope, and installed-repository behavior should not be documented only in source memory.

Progressive memory graph design is tracked in `.ai-first/context/specs/progressive-memory-graph.md`. The current runtime recovery model remains flat Markdown reading until that design is explicitly implemented.
