# Changelog

Recent project history. Newest entries first.

Keep this file focused on recent hot-read history. When it grows past roughly the newest 25 dated entries or becomes too heavy for fresh-chat recovery, move the oldest complete dated sections into `CHANGELOG_ARCHIVE.md`. Preserve newest-first order in both files.

## 2026-08-20

- Tightened the dark technical `site` homepage after owner review: removed repeated open-source labels, kept hero CTAs in one row on mobile, removed tab scrolling from the use-case selector, made use-case visual blocks fixed-size across tabs, improved the mobile use-case composition, and removed the footer.
- Reworked the `site` homepage into the owner-provided dark technical reference using project-native tooling: Next.js App Router, Tailwind v4 tokens, shadcn/base `Badge`/`Button`/`Card`/`Tabs`, `CopyPromptButton`, and Phosphor icons. The new layout adds a fixed nav, command-first hero, developer callouts, manifesto strip, philosophy cards, tabbed prompt use cases, memory structure list, final CTA, and footer.
- Added the local shadcn `Tabs` primitive for the prompt use-case selector and adjusted the generated component to satisfy project Oxlint/Ultracite rules.
- Updated `site` design memory from the pastel 3D page direction to the dark technical page direction.

## 2026-08-19

- Rebuilt the `site` homepage as a mobile-first layout while preserving the existing palette and copy: the hero now uses a direct vertical phone flow, desktop widens the same structure, prompt cards move into a mobile horizontal rail, file memory cards become a denser responsive list, and the first viewport now leaves the next section visible.
- Removed the project-local UI workflow skill and related site artifacts at owner direction; future site UI work now relies on shadcn workflow, product/design memory, screenshots, and ordinary visual review instead of a separate design skill.
- Stabilized the `site` homepage copy/install interactions so copy buttons no longer resize surrounding blocks, clarified that AI-first memory files live under `.ai-first/context`, replaced the hero image with the selected agent-memory-console concept, reworked the first section into a layered product-stage composition, and softened the prompt-section generated image into a background layer.
- Tightened the `site` homepage responsive behavior across phone, tablet, and laptop widths: complex hero layering now starts at laptop scale, prompt cards no longer enter with text blur, and file cards use separate folder/name labels instead of cramped full-path wrapping.
- Tightened the shadcn workflow rules for `site` UI work: agents must use the shadcn skill and available shadcn MCP/CLI tooling, search registries by functionality, inspect docs/examples/source before reuse or installation, and prefer existing/project/official components before custom markup.

## 2026-08-18

- Reframed the `site` homepage copy around AI-first as a tiny task tracker for coding agents, added the owner-approved manifesto line, replaced generic explainer sections with prompt-powered local-file workflow cases, tightened the copy, added supporting generated imagery, subtle motion, and a final install component, and updated site product/design memory to match.
- Added Ultracite-backed Oxlint/Oxfmt configuration for the source project and Next.js `site`, split root/site lint scopes, and recorded the owner rule that lint violations must be fixed in code instead of disabled without approval.
- Moved root lint/format ownership boundaries out of long `package.json` path lists and into Oxlint/Oxfmt config ignores for external tool state plus the separately linted `site` workspace.
- Rebuilt the `site` homepage into a production-ready pastel cartoon-3D product page using generated PNG imagery, shadcn `Badge`/`Card`/`Separator` primitives, clear OSS/Product Hunt-oriented copy, and no Blender/GLB/Three.js runtime.
- Tightened `site` UI rules so every future layout or component change must scan the current shadcn registry for a suitable primitive before custom Tailwind markup is written.
- Reset the `site` homepage to a clean Next.js + shadcn/ui scaffold, removed page-specific terrarium/3D components from source, and replaced the old site design memory with a fresh-baseline note.
- Added explicit `site` UI guidance requiring agents to inspect local shadcn components plus current shadcn registry/docs, run shadcn CLI dry-runs, and install missing primitives before hand-building Tailwind replacements.

## 2026-08-17

- Replaced the homepage's shelf-only 3D experiment with the approved Repository Memory Terrarium direction: a Blender-authored canonical scene exported into hero, handoff, and archive GLBs, a new `TerrariumScene3D` runtime component, and a 3D-first homepage layout with physical HTML command/prompt/file labels layered into the scenes.
- Replaced the obsolete agent-lantern mascot direction with a Blender-authored Living Memory Shelf 3D scene, exported `site/public/models/memory-shelf.glb`, and integrated it into the homepage hero as the live object anchor.
- Simplified the documentation homepage layout by removing the fixed header, narrowing the Lo-fi Memory Board palette, adding generated lo-fi shelf/handoff illustrations, and introducing command-flow entrance motion.
- Reworked the documentation homepage away from the realistic wooden-shop and agent-lantern direction into a brighter Lo-fi Memory Board design with chunky rounded-square tiles, visible `.ai-first` files, and no 3D mascot in the hero.
- Completed the homepage agent character rework by creating the canonical Blender-authored `agent-lantern.blend`, exporting `site/public/models/agent-lantern.glb`, loading it through the existing Three.js staging component, and verifying light/dark desktop/mobile renders.
- Added active follow-up work to redo the homepage agent character through a proper character brief and Blender MCP workflow before final site integration.
- Removed the accidental persistent npm/Blender generation script from the interrupted attempt; the next agent should not treat that script as project direction.

## 2026-08-16

- Added a live Three.js agent-lantern character to the documentation homepage hero and recorded it in the site design memory and surface brief.
- Reworked the documentation site into the Cozy Wooden Repository Shop direction: a generated full-bleed hero image, one-command first viewport, existing-repository bootstrap prompt, drawer/shelf explanation sections, and light/dark visual QA.
- Locked repository text files and Oxfmt output to LF line endings and added project-local Playwright scripts for WSL dependency checks, browser install, and desktop/mobile site screenshots.
- Replaced the documentation site's durable design-system direction with a cartoon repository garden world for future UI work.
- Added an agent workflow rule that all UI-related work in this repository should automatically route through the then-current dedicated design workflow, including capability scanning and the relevant command/reference, without requiring the owner to remind the agent each time.

## 2026-08-13

- Completed every approved backlog item by adding changelog archive rotation, backlog priority semantics, progressive memory graph design, idea lifecycle metadata, incident response and post-mortem memory, clearer owner-agent boundaries, relevant-idea reminders, richer ADR templates, and memory hygiene guidance.
- Added `CHANGELOG_ARCHIVE.md`, post-mortem templates, a progressive-memory spec, and a source ADR template; synchronized matching installed-envelope guidance under `envelope/files`.
- Added focused installer assertions for the new managed envelope memory files.
- Cleared completed active work and backlog state after the implementation pass.
- Scanned the `crypt` prototype as the original AI-first ancestor and transferred reusable memory/task-system improvements into current project memory.
- Added approved backlog items for changelog archive rotation, backlog priority semantics, progressive memory graph design, idea lifecycle metadata, incident response and post-mortem memory, clearer owner-agent boundaries, relevant-idea reminders, ADR template enrichment, and memory hygiene guidance.
- Removed the proposed one-off command policy and dropped the remaining transferred experimental ideas after owner review.

## 2026-08-07

- Added an independent redesign for the documentation site using the Repository Flight Recorder direction, with `site/PRODUCT.md`, `site/DESIGN.md`, and the design sidecar recorded.
- Completed the backlog implementation pass: installer planning/apply engine, `AGENTS.md` injection, Vitest acceptance tests, draft public install script, pnpm workspace setup, VoidZero tooling, and Next.js documentation site.
- Moved source tooling to mise-pinned Node.js and pnpm, Rolldown, Vitest, Oxlint, and Oxfmt.
- Added a root pnpm workspace with `site` as the Next.js documentation app.
- Cleared the backlog after completing the approved unfinished work.
- Added ideas for guided idea discovery and a dedicated AI-first task UI.
- Added backlog items for dogfooding the future public update script and building a documentation website.
- Removed the old workflow-language idea and saved future task tracker export integrations as the direction instead.
- Expanded test coverage requirements from installer behavior to all source code behavior.
- Clarified that installer acceptance for existing repositories should verify minimal `AGENTS.md` injection, not a hard conflict.
- Expanded Installer Acceptance Fixture to cover both empty targets and existing repositories with owner-authored `AGENTS.md`.
- Added a test coverage requirement for installer behavior.
- Removed installed `doctor.js` and `repair.js`; target repositories now receive no `.ai-first/scripts` directory.
- Added ADR-0002 to supersede the earlier repository-local maintenance scripts decision.
- Completed Backlog And Ideas Stewardship and left no active work recorded.
- Removed installed `update.js`; future updates should run through the public curl installer entrypoint.
- Narrowed installed root file changes to `AGENTS.md`; AI-first-owned files now live under `.ai-first`.
- Removed the legacy root `docs/` directory so `.ai-first/context` is the only project memory source of truth.
- Removed the separate `doctor.js --rehydrate` command; fresh chats recover context by reading `.ai-first/README.md` and `.ai-first/context` directly.
- Completed fresh-chat context recovery docs and moved active work to Backlog And Ideas Stewardship.
- Completed the local memory schema by adding the full `.ai-first/context` set to the source repository and making `doctor.js` verify required context files.
- Moved active work to fresh-chat context recovery.
- Bootstrapped this repository as the `ai-first` source project.
- Preserved the installable envelope under `envelope/files`.
- Replaced roadmap files with active work, backlog, ideas, and changelog history.
- Reframed `ai-first` as local memory plus maintenance scripts, not a new agent interface.
- Moved installable project memory under `.ai-first/context`.
- Added local installer source and separated it from installed maintenance scripts.
- Verified `npm run check`, `npm run build`, local install, and installed `doctor.js`.
