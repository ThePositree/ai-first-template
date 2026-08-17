# AGENTS.md - ai-first operating manual

This repository builds `ai-first`, a small local memory and maintenance
workspace for AI-assisted repositories. The installable project envelope lives
in `envelope/files`; do not overwrite it when changing the source repository.

---

## 1. Read This First

At the start of every session, read in this order:

1. `.ai-first/README.md` - local memory index.
2. `.ai-first/context/PROJECT.md` - project source of truth.
3. `.ai-first/context/VISION.md` - product direction.
4. `.ai-first/context/IN_PROGRESS.md` - active work.
5. `.ai-first/context/BACKLOG.md` - approved unfinished work.
6. `README.md` - public project surface.
7. `AGENTS.md` - operating manual for agents.
8. `.ai-first/context/REQUIREMENTS.md` - requirements.
9. `.ai-first/context/ARCHITECTURE.md` - system shape.
10. `.ai-first/context/IDEAS.md` - saved ideas.
11. `.ai-first/context/CHANGELOG.md` - recent history.
12. Relevant ADRs in `.ai-first/context/decisions/`.

If the documents disagree with runtime config, source code, or owner messages,
stop and ask the owner before making assumptions that affect product behavior.

---

## 2. Project Rules

### Owner Control

The owner controls:

- final product direction, priorities, scope changes, and approval of proposed
  trade-offs;
- whether ideas become approved work;
- decisions that create long-term product, architecture, or process
  commitments;
- whether corrective actions from incidents become backlog items.

Agents may challenge unclear or risky direction once with concrete reasoning,
then continue from the owner's decision.

Agents may maintain:

- `.ai-first/context` files that describe current behavior, active work, backlog,
  ideas, decisions, architecture, and changelog history;
- changelog entries and archive rotation;
- task-state moves that follow explicit owner direction;
- post-mortem records and proposed corrective actions after incidents.

Agents must ask before:

- changing owner priorities or product direction;
- moving an idea into backlog, specs, or code;
- replacing owner-authored files or destructive local changes;
- treating a proposed corrective action as approved work.

### Installable Envelope Safety

`envelope/files` is the preserved first-run envelope installed into other
repositories. Before modifying it, decide whether the change is part of the
installable envelope or only part of the `ai-first` source project.

Root-level files describe this repository. Envelope files describe newly
installed user repositories.

### Project Memory

Keep `.ai-first/context` close to behavior:

- update product memory when product behavior changes;
- update architecture memory when module boundaries or data flow changes;
- write or update a spec before or alongside any non-trivial new component;
- write an ADR when a decision commits the project to a trade-off that future
  agents could reasonably question or reverse.

ADRs are append-only: supersede old decisions instead of silently rewriting
history.

Use `.ai-first/context/CHANGELOG.md` as the hot-read recent history. Keep it
newest first. When the changelog grows past roughly the most recent 25 dated
entries or becomes heavy for fresh-chat recovery, move the oldest complete dated
sections into `.ai-first/context/CHANGELOG_ARCHIVE.md`. Preserve newest-first
order in both files. Read the archive only when older context, historical
decisions, or links from current memory require it.

When behavior changes, check whether the same change must be reflected in:

- source memory under `.ai-first/context`;
- installable envelope files under `envelope/files`;
- root or installed `AGENTS.md`;
- installer behavior or tests;
- public docs in `README.md` or `site`;
- changelog and archive history.

### Task Files

`.ai-first/context/IN_PROGRESS.md` must contain only active work.

`.ai-first/context/BACKLOG.md` must contain only approved unfinished work.

`.ai-first/context/IDEAS.md` contains reminders, not tasks. Do not implement,
spec, or move an idea into backlog without explicit owner approval.

Backlog priorities:

- **P0** - urgent correctness, safety, or install/update trust.
- **P1** - important product or agent-workflow improvement.
- **P2** - useful follow-up after higher-priority work.

Preserve priorities when moving work between active work, backlog, changelog
entries, future exports, or corrective-action follow-ups. New backlog entries
should use headings like `## P1 - Short Task Name`.

Idea lifecycle metadata is lightweight and owner-visible. Use one of these
statuses when it helps preserve context without turning ideas into backlog:
`draft`, `approved`, `moved to backlog`, `implemented`, or `rejected`. Moving an
idea to any status beyond `draft` requires clear owner direction. Rejected or
implemented ideas may stay in `IDEAS.md` when the history is useful; otherwise
summarize them in `CHANGELOG.md` and remove the stale reminder.

When a saved idea becomes relevant to current work, briefly remind the owner,
explain why it fits or why it should wait, and ask before moving it into backlog,
a spec, or code.

The owner communicates direction in chat; agents convert approved direction into
active work, backlog, ideas, changelog entries, and ADRs as appropriate. Keep
task state structured enough that it can later be exported to Jira, Linear,
Confluence, or another tracker.

When adding active or backlog work, include:

- **What**
- **Why now**
- **Expected gain**
- **Acceptance**
- **Links**

When changing `.ai-first/context/IN_PROGRESS.md`,
`.ai-first/context/BACKLOG.md`, or `.ai-first/context/IDEAS.md`, treat the
change as owner-visible project state, not as a silent internal edit. In the same
chat turn, summarize the task delta:

- active work added, completed, or replaced;
- backlog items added, removed, or materially changed;
- ideas added or moved;
- any owner approval assumed.

Completed or historical material belongs in `CHANGELOG.md`, archive docs, or
closed ADRs, not in active task files.

### Incident Response

For bug-fix, regression, data-loss, install-trust, or production-style failure
sessions:

1. Reproduce or capture the observed failure.
2. Isolate the smallest credible cause.
3. Apply the smallest fix that matches the evidence.
4. Run the narrowest useful verification first, then broaden when risk warrants.
5. Record follow-ups as proposed corrective actions.

Create a post-mortem under `.ai-first/context/post_mortems/` when the incident
caused user-visible impact, data loss, repeated failed work, install/update
trust risk, or a decision that future agents should understand. Use
`.ai-first/context/post_mortems/_template.md`. Corrective actions become backlog
items only after owner approval and must include a priority.

### Implementation

Prefer established project patterns over new abstractions.

### UI Work

All UI-related work in this repository goes through Impeccable. Treat any task
that designs, redesigns, edits, critiques, audits, polishes, adapts, animates,
colorizes, typesets, lays out, hardens, clarifies, optimizes, or otherwise
changes frontend interface behavior or presentation as an implicit Impeccable
task.

For UI work, scan the available Impeccable capabilities first, load the
appropriate Impeccable command/reference, and apply the relevant workflow
without waiting for the owner to say "use Impeccable" each time.

For non-trivial libraries, frameworks, SDKs, cloud services, or APIs, check
current official documentation before writing code against them.

Prefer maintained dependencies during source development when they materially
reduce risk, but installed projects must not need `npm install`.

### Quality

Add tests when behavior changes, a bug is fixed, or the change touches shared
logic.

Run the smallest useful verification first. Broaden verification when the blast
radius is larger.

If verification cannot be run, say why in the final response and record any
remaining risk.

### Git And Local Changes

The working tree may be dirty.

Never revert changes you did not make unless the owner explicitly asks.

If unrelated files are already modified, ignore them. If existing changes affect
your task, work with them and ask only if they make the task impossible.

Do not use destructive git commands unless explicitly requested.

---

## 3. End Of Every Session

Before handing back:

1. Move completed active work out of `.ai-first/context/IN_PROGRESS.md`.
2. Keep `.ai-first/context/BACKLOG.md` limited to unfinished work.
3. Leave clear next steps in `.ai-first/context/IN_PROGRESS.md` if work remains.
4. Append a dated `.ai-first/context/CHANGELOG.md` entry for meaningful changes.
5. Rotate older changelog sections into
   `.ai-first/context/CHANGELOG_ARCHIVE.md` when the hot-read changelog is too
   large.
6. Update `README.md` or `site` only when the public surface changes.
7. In final chat, state what changed, what remains, and the next useful command
   or file to inspect.
