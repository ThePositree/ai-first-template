# ai-first

`ai-first` installs a small repository memory layer for AI-assisted projects. It does not replace the agent's existing skills or change how the owner talks to the agent; it gives the agent durable local context.

The goal is less repeated explanation from the owner and more informed, confident agent work across chats.

The first implementation is intentionally local and inspectable: installed projects get `AGENTS.md` plus `.ai-first` memory. No global CLI, binary, `npx`, or `node_modules` is required inside the target repository.

Installed memory covers project context, active work, backlog, ideas, changelog/archive history, ADRs, and post-mortem templates.

AI-first can also project that memory into GitHub when the owner asks an agent to do it. The agent briefs the owner, checks available GitHub surfaces, asks before using or enabling Projects/Wiki/Discussions, shows a plan, gets confirmation, and then creates the chosen GitHub entities with the tools available in that repository.

## Repository Shape

- `envelope/files` - the preserved first-run envelope installed into other repositories.
- `src/installer` - TypeScript source for the installer.
- `src/lib/install-plan.ts` - shared installer planning and apply logic.
- `scripts/install.sh` - draft public install entrypoint for local development.
- `site` - Next.js documentation website.
- `rolldown.config.mjs` - Rolldown build config for the installer artifact.
- `mise.toml` - pinned project tool versions.

## Source Development Commands

```bash
pnpm install
pnpm build
pnpm test
pnpm docs:build
pnpm install:local -- tmp/demo-project
```

Installed projects do not receive npm scripts for GitHub export. The owner asks their agent to move `.ai-first` memory into GitHub; the agent uses the installed instructions and whatever GitHub tooling is available in that repository.
