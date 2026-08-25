# AI-first Project Memory

This directory is the local memory for the AI agent working on this repository. It does not replace the agent's general skills. It gives the agent durable project context so the owner has to repeat less and new chats can recover the current state.

## First Read

At the start of a fresh chat, read the smallest useful context first:

1. `.ai-first/context/PROJECT.md`
2. `.ai-first/context/IN_PROGRESS.md`
3. `.ai-first/context/CHANGELOG.md`

Then load more context only when the current request needs it:

- `.ai-first/context/VISION.md` for product direction or audience questions;
- `.ai-first/context/REQUIREMENTS.md` for behavior, constraints, or acceptance criteria;
- `.ai-first/context/ARCHITECTURE.md` for system shape, components, data flow, or operational questions;
- `.ai-first/context/task-source.md` for the current task source of truth or tracker migration policy;
- `.ai-first/context/BACKLOG.md` for approved future work;
- `.ai-first/context/IDEAS.md` for unapproved possibilities;
- relevant files in `.ai-first/context/decisions/` for durable trade-offs.

Read `.ai-first/context/CHANGELOG_ARCHIVE.md` only when current memory links to older history or the task depends on history outside the recent changelog.

Read `.ai-first/playbooks/*` only when the owner request or current task clearly triggers that workflow. Playbooks are detailed guidance, not startup context.

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

AI-first uses one active task source at a time:

- **Local task source:** task state lives in `.ai-first/context`.
- **External tracker task source:** task state lives in GitHub Issues, Linear, Jira, Yandex Tracker, or another selected tracker. Local task files become pointers and stop acting as backlog or active-work records.

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
- playbooks;
- public docs;
- any generated or external tracker export.

Keep `CHANGELOG.md` focused on recent hot-read history. When it grows past roughly the newest 25 dated entries or becomes too heavy for fresh-chat recovery, move the oldest complete dated sections into `CHANGELOG_ARCHIVE.md`.

For incidents, capture the failure, isolate the smallest credible cause, apply the smallest evidence-based fix, verify it, and record durable history in `context/post_mortems/` when the incident had meaningful impact or follow-ups.

## Tracker Migration

When the owner asks to move task state between `.ai-first` and GitHub Issues, Linear, Jira, Yandex Tracker, or another tracker, do it as an agent workflow and a source-of-truth migration. The owner should be able to ask naturally; do not require them to learn a CLI, hook, or skill. Do not expect AI-first to provide a prepared export script.

Read `.ai-first/context/task-source.md`, then read only the matching playbook:

- `.ai-first/playbooks/local-to-tracker-migration.md` when moving local task state into a tracker;
- `.ai-first/playbooks/tracker-to-local-migration.md` when moving tracker task state back into local AI-first Markdown.

Run a fresh briefing first unless the owner explicitly says to reuse an existing approved policy. Before writing to any tracker or local task files, show the planned records and get explicit apply confirmation.

Use the repository's normal tracker conventions for labels, fields, statuses, priorities, queues, teams, projects, and relationships. Do not create AI-first-branded tracker fields, labels, tags, components, statuses, or visible boilerplate.

Until the owner approves a different source of truth, `.ai-first/context` remains the active task source.
