# AI-first Project Memory

This directory is the local memory for the AI agent working on this repository. It does not replace the agent's general skills. It gives the agent durable project context so the owner has to repeat less and new chats can recover the current state.

## First Read

At the start of a fresh chat, read these files in order:

1. `.ai-first/context/PROJECT.md`
2. `.ai-first/context/VISION.md`
3. `.ai-first/context/REQUIREMENTS.md`
4. `.ai-first/context/ARCHITECTURE.md`
5. `.ai-first/context/IN_PROGRESS.md`
6. `.ai-first/context/BACKLOG.md`
7. `.ai-first/context/IDEAS.md`
8. `.ai-first/context/CHANGELOG.md`
9. Relevant files in `.ai-first/context/decisions/`

Read `.ai-first/context/CHANGELOG_ARCHIVE.md` only when current memory links to older history or the task depends on history outside the recent changelog.

## First Run

If `.ai-first/FIRST_RUN.md` exists, this project has not been initialized yet. Ask the owner to describe what they want to build in their own words. Do not present a long questionnaire.

After the owner responds:

- extract the product goal, target users, MVP shape, constraints, preferred stack, risks, and success criteria;
- ask only the minimum necessary follow-up questions if important information is missing, risky, or contradictory;
- fill the context files under `.ai-first/context`;
- create active work, approved backlog entries, and saved ideas when appropriate;
- append the first changelog entry;
- remove `.ai-first/FIRST_RUN.md`.

## Task State

`.ai-first/context/IN_PROGRESS.md` contains only active work. `.ai-first/context/BACKLOG.md` contains approved unfinished work. `.ai-first/context/IDEAS.md` contains saved ideas, not approved tasks.

When changing task state, summarize the task delta to the owner in the same chat turn.

Backlog priorities:

- **P0** - urgent correctness, safety, or install/update trust.
- **P1** - important product or agent-workflow improvement.
- **P2** - useful follow-up after higher-priority work.

Preserve priorities when moving work between active work, backlog, changelog entries, future exports, or incident follow-ups. New backlog entries should use headings like `## P1 - Short Task Name`.

## Backlog And Ideas Stewardship

During onboarding, listen for three kinds of work:

- **Active work:** what the owner wants to do now. Put only this in `.ai-first/context/IN_PROGRESS.md`.
- **Approved backlog:** concrete unfinished work the owner has approved but does not want to do immediately. Put this in `.ai-first/context/BACKLOG.md`.
- **Saved ideas:** loose possibilities, reminders, or "maybe later" thoughts. Put these in `.ai-first/context/IDEAS.md`.

Do not treat every owner thought as backlog. If the owner sounds exploratory, save it as an idea or ask a short clarifying question.

After onboarding:

- the owner can speak naturally;
- the agent keeps task memory current;
- the agent may add obvious active-work updates when work changes;
- the agent must ask before moving an idea into approved backlog;
- stale backlog or ideas should be surfaced during fresh-chat context reading when they matter to the next step;
- when a saved idea becomes relevant, briefly explain why it fits or why it should wait, then ask before moving it into backlog, specs, or code.

## Owner And Agent Boundaries

The owner controls product direction, priorities, scope changes, approval of trade-offs, and whether ideas or incident follow-ups become approved work.

Agents may maintain memory files, changelog entries, task-state moves, post-mortems, and proposed corrective actions when those updates follow clear owner direction.

## Memory Hygiene

When behavior changes, check whether the same update belongs in:

- `.ai-first/context` source memory;
- root `AGENTS.md`;
- changelog or changelog archive;
- post-mortems or ADRs;
- public docs;
- any generated or external tracker export.

Keep `CHANGELOG.md` focused on recent hot-read history. When it grows past roughly the newest 25 dated entries or becomes too heavy for fresh-chat recovery, move the oldest complete dated sections into `CHANGELOG_ARCHIVE.md`.

For incidents, capture the failure, isolate the smallest credible cause, apply the smallest evidence-based fix, verify it, and record durable history in `context/post_mortems/` when the incident had meaningful impact or follow-ups.
