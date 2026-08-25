# AI-first Memory

This directory is local Markdown memory for agents working in this repository. It is passive: no daemon, sync loop, script, or setup step is required after installation.

## Startup Route

Read this file first, then load only the files that match the owner's request.

- `.ai-first/context/PRODUCT.md` - product identity, direction, constraints, and useful links.
- `.ai-first/context/IN_PROGRESS.md` - active work, if the repository uses local AI-first task state.
- `.ai-first/context/CHANGELOG.md` - recent changes when history matters.
- `.ai-first/context/BACKLOG.md` - approved future work.
- `.ai-first/context/IDEAS.md` - saved ideas that are not approved work.
- `.ai-first/context/REQUIREMENTS.md` - behavior, constraints, and acceptance criteria.
- `.ai-first/context/ARCHITECTURE.md` - system shape, components, and operational notes.
- `.ai-first/context/task-source.md` - current task source of truth and tracker policy.
- `.ai-first/context/MIGRATION_RECORD.md` - owner-approved task-source migration decisions, if any.
- `.ai-first/context/decisions/` - ADRs and durable trade-offs.
- `.ai-first/context/post_mortems/` - incident records.

Read `.ai-first/context/CHANGELOG_ARCHIVE.md` only when current memory points to older history or the task depends on archived entries.

## Playbooks

Playbooks are detailed workflows. Open one only when the current request triggers it:

- `.ai-first/playbooks/memory-maintenance.md` - updating context, task state, changelog, ADRs, or post-mortems.
- `.ai-first/playbooks/tracker-migration.md` - moving local AI-first task state into GitHub, Linear, Jira, Yandex Tracker, or another tracker.
- `.ai-first/playbooks/local-to-tracker-migration.md` - moving local task state into a tracker with split inbound/outbound guidance.
- `.ai-first/playbooks/tracker-to-local-migration.md` - moving tracker task state back into local AI-first Markdown.

## Boundaries

The owner controls product direction, priorities, scope changes, approval of trade-offs, and writes to external systems.

Agents may update `.ai-first/context` when the owner asks for work that changes durable project memory. Ask before converting ideas into approved work, changing priorities, replacing owner-authored files, or writing to external trackers.

## Task State

`.ai-first/context/IN_PROGRESS.md` contains only active work. `.ai-first/context/BACKLOG.md` contains approved unfinished work. `.ai-first/context/IDEAS.md` contains saved ideas, not approved tasks.

AI-first uses one active task source at a time:

- **Local task source:** task state lives in `.ai-first/context`.
- **External tracker task source:** task state lives in GitHub Issues, Linear, Jira, Yandex Tracker, or another selected tracker. Local task files become pointers and stop acting as backlog or active-work records.

When changing task state, summarize the task delta to the owner in the same chat turn.

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

Read `.ai-first/context/task-source.md` and `.ai-first/context/MIGRATION_RECORD.md`, then read only the matching playbook:

- `.ai-first/playbooks/local-to-tracker-migration.md` when moving local task state into a tracker;
- `.ai-first/playbooks/tracker-to-local-migration.md` when moving tracker task state back into local AI-first Markdown.

Run a fresh briefing first unless the owner explicitly says to reuse an existing approved policy. Before writing to any tracker or local task files, show the planned records and get explicit apply confirmation.

Use the repository's normal tracker conventions for labels, fields, statuses, priorities, queues, teams, projects, and relationships. Do not create AI-first-branded tracker fields, labels, tags, components, statuses, or visible boilerplate.

Until the owner approves a different source of truth, `.ai-first/context` remains the active task source.
