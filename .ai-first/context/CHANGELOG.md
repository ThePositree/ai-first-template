# Changelog

Recent project history. Newest entries first.

## 2026-08-07

- Completed the backlog implementation pass: installer planning/apply engine,
  `AGENTS.md` injection, Vitest acceptance tests, draft public install script,
  pnpm workspace setup, VoidZero tooling, and Next.js documentation site.
- Moved source tooling to mise-pinned Node.js and pnpm, Rolldown, Vitest,
  Oxlint, and Oxfmt.
- Added a root pnpm workspace with `site` as the Next.js documentation app.
- Cleared the backlog after completing the approved unfinished work.
- Added ideas for guided idea discovery and a dedicated AI-first task UI.
- Added backlog items for dogfooding the future public update script and
  building a documentation website.
- Removed the old workflow-language idea and saved future task tracker
  export integrations as the direction instead.
- Expanded test coverage requirements from installer behavior to all source code
  behavior.
- Clarified that installer acceptance for existing repositories should verify
  minimal `AGENTS.md` injection, not a hard conflict.
- Expanded Installer Acceptance Fixture to cover both empty targets and existing
  repositories with owner-authored `AGENTS.md`.
- Added a test coverage requirement for installer behavior.
- Removed installed `doctor.js` and `repair.js`; target repositories now receive
  no `.ai-first/scripts` directory.
- Added ADR-0002 to supersede the earlier repository-local maintenance scripts
  decision.
- Completed Backlog And Ideas Stewardship and left no active work recorded.
- Removed installed `update.js`; future updates should run through the public
  curl installer entrypoint.
- Narrowed installed root file changes to `AGENTS.md`; AI-first-owned files now
  live under `.ai-first`.
- Removed the legacy root `docs/` directory so `.ai-first/context` is the only
  project memory source of truth.
- Removed the separate `doctor.js --rehydrate` command; fresh chats recover
  context by reading `.ai-first/README.md` and `.ai-first/context` directly.
- Completed fresh-chat context recovery docs and moved active work to Backlog
  And Ideas Stewardship.
- Completed the local memory schema by adding the full `.ai-first/context` set
  to the source repository and making `doctor.js` verify required context files.
- Moved active work to fresh-chat context recovery.
- Bootstrapped this repository as the `ai-first` source project.
- Preserved the installable envelope under `envelope/files`.
- Replaced roadmap files with active work, backlog, ideas, and changelog
  history.
- Reframed `ai-first` as local memory plus maintenance scripts, not a new agent
  interface.
- Moved installable project memory under `.ai-first/context`.
- Added local installer source and separated it from installed maintenance
  scripts.
- Verified `npm run check`, `npm run build`, local install, and installed
  `doctor.js`.
