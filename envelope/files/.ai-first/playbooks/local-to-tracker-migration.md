# Local To Tracker Migration

Use this playbook only when the owner asks to move local AI-first task state into GitHub Issues, Linear, Jira, Yandex Tracker, or another external tracker.

Do not read this playbook during normal startup or ordinary task updates.

## Goal

Move task state from local `.ai-first/context` files into the selected tracker, then leave exactly one active task source of truth.

## Source Files

Read the local task state:

- `.ai-first/context/task-source.md`
- `.ai-first/context/IN_PROGRESS.md`
- `.ai-first/context/BACKLOG.md`
- `.ai-first/context/IDEAS.md`
- `.ai-first/context/PRODUCT.md`
- relevant requirements, decisions, incidents, or changelog entries only when needed to write accurate tracker items.

## Owner Briefing

Run a fresh briefing unless the owner explicitly says to reuse an existing approved policy. Ask naturally for the repository and tracker, and allow custom answers.

Cover:

- tracker and destination workspace, repository, project, queue, team, or board;
- which local task categories to migrate now;
- where active work, backlog, saved ideas, priorities, and relationships should go;
- whether long-form context should stay local or move to a selected documentation surface;
- how to handle existing matching tracker items;
- whether the migration is one-time or establishes the tracker as the active task source;
- conflict policy, visibility/noise preference, and dry-run preference.

Do not write to the tracker during briefing.

## Plan

Before applying, show the owner a concrete plan:

- records to create;
- records to update;
- records to skip;
- local task files that will become pointers if the tracker becomes active;
- any selected surface that is disabled, inaccessible, or requires owner setup.

Wait for explicit apply approval.

## Mapping Rules

Use tracker-neutral, human-readable mappings:

- active work -> active tracker items;
- approved backlog -> backlog or planned tracker items;
- saved ideas -> idea/proposal records that clearly remain unapproved work;
- priorities `P0`, `P1`, and `P2` -> the tracker's normal priority labels or fields;
- relationships -> normal tracker links, parent-child relationships, comments, or body links.

Do not create AI-first-branded tracker fields, labels, tags, components, statuses, or visible boilerplate. Use the repository or organization's existing conventions whenever they exist.

Tracker notes:

- GitHub: Issues are the portable baseline. Projects, Wiki, and Discussions are optional only when selected and enabled.
- Linear: use the selected team/project/cycle/status/priority conventions.
- Jira: use the selected project, issue types, statuses, priorities, components, epics, and issue links.
- Yandex Tracker: use the selected queue, issue types, statuses, priorities, components, and links.

## Apply

Use available tracker tools, MCP tools, APIs, CLIs, temporary scripts, or manual steps appropriate for the repository. AI-first does not provide a prepared exporter script.

When the owner approves the tracker as the active task source:

- update `.ai-first/context/task-source.md` with the selected tracker, active source, migration date, and conflict policy;
- replace local active/backlog/idea task bodies with concise pointers to the tracker source;
- preserve any local context that is not task state;
- do not leave duplicate live task lists in local files.

When the owner approves only a one-time projection and keeps local AI-first as active:

- record the migration result in `.ai-first/context/task-source.md`;
- keep local task files authoritative;
- do not treat the tracker as an active source of truth.

## Report

Summarize:

- created, updated, skipped, and blocked tracker records;
- the active task source after migration;
- local files changed;
- any disabled surfaces, permission gaps, or follow-up decisions.
