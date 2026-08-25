# Task Source

```text
Status: local
Active source: .ai-first/context
External tracker: none
Migration mode: none
Conflict policy: ask
Last migration: none
```

## Source Of Truth

AI-first uses one active task source at a time.

- **Local task source:** active work, approved backlog, and saved ideas live in `.ai-first/context/IN_PROGRESS.md`, `.ai-first/context/BACKLOG.md`, and `.ai-first/context/IDEAS.md`.
- **External tracker task source:** active work, approved backlog, and saved ideas live in the selected tracker. Local task files become pointers to the tracker and stop acting as backlog or active-work records.

Do not mirror task state between local files and a tracker by default. Migration is owner-triggered and changes which source is active.

## Migration Policy

Run a fresh owner briefing before any tracker migration unless the owner explicitly asks to reuse an existing approved policy. This file records the approved source-of-truth policy; it is not permission for future external writes.

Before writing to GitHub Issues, Linear, Jira, Yandex Tracker, or another tracker:

- identify the selected tracker and available surfaces;
- show the planned external records to create, update, archive, or link;
- get explicit owner approval to apply the plan.

Use the repository's normal tracker conventions for labels, fields, statuses, priorities, and relationships. Do not create AI-first-branded tracker fields, labels, tags, components, statuses, or visible boilerplate.

## Tracker Mapping

Keep mappings human-readable and tracker-neutral:

- active work -> active tracker items;
- approved backlog -> backlog or planned tracker items;
- saved ideas -> idea/proposal records that clearly remain unapproved work;
- priorities `P0`, `P1`, and `P2` -> the tracker's normal priority labels or fields;
- relationships -> normal tracker links, parent-child relationships, comments, or body links;
- long-form context -> the owner's selected documentation surface, if any.

Tracker-specific notes:

- **GitHub Issues:** use issues as the portable baseline for active and backlog work. Projects, Wiki, and Discussions are optional only when selected and enabled.
- **Linear:** use the selected workspace/team, project, cycle, status, priority, and relation conventions.
- **Jira:** use the selected project, issue types, statuses, priorities, components, epics, and links already normal for that site.
- **Yandex Tracker:** use the selected queue, issue types, statuses, priorities, components, and links already normal for that organization.

If a selected tracker surface is disabled, unavailable, or outside current permissions, explain the exact owner-side setup needed and wait for approval before falling back.
