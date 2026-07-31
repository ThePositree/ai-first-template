# AGENTS.md - AI-first operating manual

This repository is developed AI-first. The owner sets direction in chat; agents
own implementation planning, code, documentation, changelog entries, and task
files.

---

## First Run Bootstrap

If `.bootstrap/FIRST_RUN.md` exists, this project has not been initialized yet.

Do not start implementation work immediately.

In the first response, only ask the owner to describe the intended project in
their own words. Do not present a long predefined questionnaire.

Suggested first response:

```text
This project is not initialized yet. Describe in your own words what you want to
build: the product, audience, MVP, constraints, preferred stack if any, and
anything else that matters. It can be messy; I will structure it.
```

After the owner responds:

- extract the product goal, target users, MVP shape, constraints, preferred
  stack, risks, and success criteria;
- ask only the minimum necessary follow-up questions if important information is
  missing, risky, or contradictory;
- if enough context is available, fill the project documents directly;
- create or update the initial roadmap, backlog, and active work files;
- append the first changelog entry;
- remove `.bootstrap/FIRST_RUN.md`;
- remove this `First Run Bootstrap` section from `AGENTS.md`.

After bootstrap is complete, future agents must treat the filled documents as
the project source of truth.

---

## 1. Read This First

At the start of every session, read in this order:

1. `README.md` - public project surface.
2. `AGENTS.md` - operating manual for agents.
3. `docs/product/PROJECT_BRIEF.md` - product source of truth.
4. `docs/product/VISION.md` - product direction and non-goals.
5. `docs/product/REQUIREMENTS.md` - functional and non-functional requirements.
6. `docs/tasks/ROADMAP.md` - owner-defined milestones.
7. `docs/tasks/IN_PROGRESS.md` - active work only.
8. `docs/tasks/IDEAS.md` - owner ideas saved for later, not approved tasks.
9. `docs/tasks/BACKLOG.md` - queued unfinished work.
10. Recent entries in `CHANGELOG.md`.
11. Relevant ADRs in `docs/decisions/`.

If the documents disagree with runtime config, source code, or owner messages,
stop and ask the owner before making assumptions that affect product behavior.

---

## 2. Project Rules

### Owner Control

The owner controls final product direction, priorities, scope changes, and
approval of proposed trade-offs.

Agents may challenge unclear or risky direction once with concrete reasoning,
then continue from the owner's decision.

### Planning

Plan locally. Do not ask the owner to create implementation plans.

For non-trivial work, keep a visible todo list updated while working.

### Documentation

Keep documentation close to behavior:

- update product docs when product behavior changes;
- update architecture docs when module boundaries or data flow changes;
- write or update a spec before or alongside any non-trivial new component;
- write an ADR when a decision commits the project to a trade-off that future
  agents could reasonably question or reverse.

ADRs are append-only: supersede old decisions instead of silently rewriting
history.

### Task Files

`docs/tasks/IN_PROGRESS.md` must contain only active work.

`docs/tasks/BACKLOG.md` must contain only approved unfinished work.

`docs/tasks/IDEAS.md` contains reminders, not tasks. Do not implement, spec, or
move an idea into backlog without explicit owner approval.

When adding active or backlog work, include:

- **What**
- **Why now**
- **Expected gain**
- **Acceptance**
- **Links**

Completed or historical material belongs in `CHANGELOG.md`, archive docs, or
closed ADRs, not in active task files.

### Implementation

Prefer established project patterns over new abstractions.

For non-trivial libraries, frameworks, SDKs, cloud services, or APIs, check
current official documentation before writing code against them.

Prefer maintained dependencies over custom implementations when the dependency
materially reduces risk, complexity, or maintenance cost.

Use custom logic when behavior is project-specific, no suitable maintained
dependency exists, or the dependency creates a clear operational risk.

### Quality

Add tests when behavior changes, a bug is fixed, or the change touches shared
logic.

Run the smallest useful verification first. Broaden verification when the blast
radius is larger.

If verification cannot be run, say why in the final response and record any
remaining risk.

### Incident Response

When the owner says "fix" or pastes an error:

1. Reproduce the failure or state why reproduction is impossible.
2. Isolate the root cause before refactoring.
3. Apply the smallest fix that resolves the cause.
4. Add or update tests when the failure is a regression or logic bug.
5. Update docs, changelog, and task files so the next agent is not blind.

### Git And Local Changes

The working tree may be dirty.

Never revert changes you did not make unless the owner explicitly asks.

If unrelated files are already modified, ignore them. If existing changes affect
your task, work with them and ask only if they make the task impossible.

Do not use destructive git commands unless explicitly requested.

---

## 3. End Of Every Session

Before handing back:

1. Move completed active work out of `IN_PROGRESS.md`.
2. Keep `BACKLOG.md` limited to unfinished work.
3. Leave clear next steps in `IN_PROGRESS.md` if work remains.
4. Append a dated `CHANGELOG.md` entry for meaningful changes.
5. Update `README.md` only when the public surface changes.
6. In final chat, state what changed, what remains, and the next useful command
   or file to inspect.

---

## 4. Communication

Use the owner's language in chat.

Be direct, concrete, and action-oriented. Prefer concise explanations over long
status narratives.

Ask questions only when the answer cannot be discovered from local context and a
reasonable assumption would be risky.
