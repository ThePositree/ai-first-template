# Changelog

Recent project history. Newest entries first. Use dates in `YYYY-MM-DD` format.

---

## 2026-08-07

- Added an independent Impeccable redesign for the documentation site using the
  Repository Flight Recorder direction, with `site/PRODUCT.md`, `site/DESIGN.md`,
  and the Impeccable design sidecar recorded.
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
- Added the full `.ai-first/context` memory set to the source repository and
  updated `doctor.js` to verify the required memory files.
- Completed the Local Memory Schema task and moved active work to fresh-chat
  context recovery.
- Separated the installer from installed maintenance scripts: local builds now
  emit `dist/install.js`, while installed `.ai-first/scripts` contains
  `doctor.js` and `repair.js`.
- Added the local installer script and verified installation plus `doctor.js` in
  a temporary target project.
- Refined task memory planning by merging conflict reporting into doctor output,
  removing the existing-repository analyzer idea, and adding backlog/ideas
  stewardship as approved work.
- Reshaped the installable envelope so root `AGENTS.md` is a thin handoff to
  `.ai-first/README.md` and durable project memory lives under
  `.ai-first/context`.
- Reframed `ai-first` as a small repository memory and maintenance workspace
  that reduces repeated owner explanations and helps agents recover context
  across chats.
- Replaced the modular template concept with a single installable envelope to
  keep `ai-first` focused on agent productivity rather than reusable templates.
- Added a task-delta communication rule so agents summarize changes to active
  work, backlog, and ideas instead of silently mutating project state.
- Removed roadmap files from the source project and installable envelope in
  favor of active work, approved backlog, saved ideas, and changelog history.
- Verified `npm install`, `npm run build`, and `node .ai-first/scripts/doctor.js`
  after npm registry access became available.
- Expanded backlog with the next agent-first implementation tasks.
- Bootstrapped the repository as the source project for `ai-first`.
- Preserved the original first-run envelope under `envelope/files`.
- Added the initial `.ai-first` local script-kit manifest and TypeScript sources.
- Documented the decision to use repository-local JavaScript agent scripts.

---

## Template History

- Project template copied.
- First-run scaffold preserved as `envelope/files`.
