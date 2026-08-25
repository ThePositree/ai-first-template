# ai-first

`ai-first` installs a small Markdown-first memory layer for AI-assisted repositories. It does not replace the agent's existing skills or change how the owner talks to the agent; it gives the agent durable, inspectable local context.

The goal is less repeated explanation from the owner and more informed, confident agent work across chats.

The installed model is passive by default: projects get a root `AGENTS.md` handoff plus a `.ai-first` Markdown workspace. There is no daemon, hosted service, hidden database, global CLI, repeated `npx`, or `node_modules` requirement inside the target repository.

Installed memory covers project context, active work, backlog, ideas, changelog/archive history, ADRs, and post-mortem templates. Agents read the smallest startup context first and load more detailed workflow guidance only when the current request calls for it.

AI-first can also help move task state into GitHub Issues, Linear, Jira, Yandex Tracker, or another tracker when the owner asks an agent to do it. This is migration, not background mirroring: after migration, exactly one task source of truth should remain active. The agent briefs the owner, checks available tracker surfaces, asks before using or enabling optional surfaces, shows a plan, gets confirmation, and then creates the chosen records with the tools available in that repository.

## Documentation Layers

This source repository contains two kinds of Markdown:

- Source project Markdown explains the `ai-first` OSS project itself: `README.md`, `PRODUCT.md`, `AGENTS.md`, the documentation site, changelog, release notes, GitHub Issues, Discussions, and Wiki.
- Installable envelope Markdown lives under `envelope/files` and is copied into user repositories.

Keep those layers separate. Public source docs explain the product and source development workflow; envelope docs explain what installed agents read inside a target repository.

## Repository Shape

- `PRODUCT.md` - the current product model for source documentation.
- `envelope/files` - the installable Markdown envelope copied into other repositories.
- `src/installer` - TypeScript source for the installer.
- `src/lib/install-plan.ts` - shared installer planning and apply logic.
- `scripts/install.sh` - public install entrypoint for local and hosted installs.
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

Installed projects do not receive npm scripts for tracker migration. The owner asks their agent to move `.ai-first` task state into or out of GitHub Issues, Linear, Jira, Yandex Tracker, or another tracker; the agent uses the installed instructions and whatever tracker tooling is available in that repository.
