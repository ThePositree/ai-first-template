# ADR-0002: Do Not Install Maintenance Scripts

Status: accepted

Date: 2026-08-12

Supersedes: `.ai-first/context/decisions/ADR-0001-repository-local-js-scripts.md`

## Context

The project briefly installed local `doctor.js`, `repair.js`, and earlier `update.js` scripts under `.ai-first/scripts`. The owner clarified that `ai-first` should be a small memory layer, not a local command system. Updates should happen through the public installer entrypoint, not through an installed script.

## Decision

Do not install maintenance scripts into target repositories.

The installed project should contain only:

- root `AGENTS.md`;
- `.ai-first` memory files;
- `.ai-first/manifest.json`;
- `.ai-first/VERSION`.

The installer remains a source/release artifact built to `dist/install.js` and eventually exposed through a command such as:

```bash
curl -fsSL https://ai-first.dev/install | sh
```

## Consequences

Installed repositories stay simpler and contain fewer project-owned executable files. Agents recover context by reading `.ai-first` files, not by running local commands.

Health checks and repairs, if needed later, should be handled by the installer or another external entrypoint rather than persistent installed scripts.

## Alternatives Considered

- Keep `doctor.js` and `repair.js` installed under `.ai-first/scripts`.
- Keep `update.js` installed and use it for updates.
- Install a binary or `npx`-managed command surface.
