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

The owner controls final product direction, priorities, scope changes, and
approval of proposed trade-offs.

Agents may challenge unclear or risky direction once with concrete reasoning,
then continue from the owner's decision.

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

### Task Files

`.ai-first/context/IN_PROGRESS.md` must contain only active work.

`.ai-first/context/BACKLOG.md` must contain only approved unfinished work.

`.ai-first/context/IDEAS.md` contains reminders, not tasks. Do not implement,
spec, or move an idea into backlog without explicit owner approval.

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

### Implementation

Prefer established project patterns over new abstractions.

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
5. Update `README.md` only when the public surface changes.
6. In final chat, state what changed, what remains, and the next useful command
   or file to inspect.
