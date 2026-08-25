# AI-first Memory

This directory is local Markdown memory for agents working in this repository. It is passive: no daemon, sync loop, script, or setup step is required after installation.

## Startup Route

Read this file first, then load only the files that match the owner's request.

- `.ai-first/context/PROJECT.md` - project identity, direction, constraints, and useful links.
- `.ai-first/context/IN_PROGRESS.md` - active work, if the repository uses local AI-first task state.
- `.ai-first/context/CHANGELOG.md` - recent changes when history matters.
- `.ai-first/context/BACKLOG.md` - approved future work.
- `.ai-first/context/IDEAS.md` - saved ideas that are not approved work.
- `.ai-first/context/REQUIREMENTS.md` - behavior, constraints, and acceptance criteria.
- `.ai-first/context/ARCHITECTURE.md` - system shape, components, and operational notes.
- `.ai-first/context/decisions/` - ADRs and durable trade-offs.
- `.ai-first/context/post_mortems/` - incident records.
- `.ai-first/context/MIGRATION_RECORD.md` - owner-approved task-source migration policy, if one exists.

Read `.ai-first/context/CHANGELOG_ARCHIVE.md` only when current memory points to older history or the task depends on archived entries.

## Playbooks

Playbooks are detailed workflows. Open one only when the current request triggers it:

- `.ai-first/playbooks/memory-maintenance.md` - updating context, task state, changelog, ADRs, or post-mortems.
- `.ai-first/playbooks/tracker-migration.md` - moving local AI-first task state into GitHub, Linear, Jira, Yandex Tracker, or another tracker.

## Boundaries

The owner controls product direction, priorities, scope changes, approval of trade-offs, and writes to external systems.

Agents may update `.ai-first/context` when the owner asks for work that changes durable project memory. Ask before converting ideas into approved work, changing priorities, replacing owner-authored files, or writing to external trackers.
