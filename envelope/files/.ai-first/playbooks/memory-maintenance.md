# Memory Maintenance Playbook

Use this playbook when the owner asks the agent to update durable AI-first memory, or when completed work clearly changes project context, task state, decisions, changelog history, or incident records.

Do not use this playbook as startup context.

## Owner Boundaries

The owner controls product direction, priorities, scope changes, and approval of trade-offs.

Ask before:

- moving ideas into approved backlog, specs, or code;
- changing priorities;
- replacing owner-authored files;
- treating incident corrective actions as approved backlog work;
- writing to an external tracker.

## Task State

`.ai-first/context/IN_PROGRESS.md` contains only active work. `.ai-first/context/BACKLOG.md` contains approved unfinished work. `.ai-first/context/IDEAS.md` contains saved ideas, not approved tasks.

When task state changes, summarize the task delta to the owner in the same chat turn.

Backlog priorities:

- **P0** - urgent correctness, safety, or install/update trust.
- **P1** - important product or agent-workflow improvement.
- **P2** - useful follow-up after higher-priority work.

Preserve priorities when moving work between active work, backlog, changelog entries, tracker migrations, or incident follow-ups. New backlog entries should use headings like `## P1 - Short Task Name`.

## Ideas

Do not treat every owner thought as backlog. If the owner sounds exploratory, save it as an idea or ask a short clarifying question.

When a saved idea becomes relevant, briefly explain why it fits or why it should wait, then ask before moving it into backlog, specs, or code.

## Memory Hygiene

When behavior changes, check whether the same update belongs in:

- `.ai-first/context` memory;
- root `AGENTS.md`;
- changelog or changelog archive;
- post-mortems or ADRs;
- playbooks;
- public documentation;
- external task trackers, when the owner has approved a tracker as the active task source.

Keep `CHANGELOG.md` focused on recent hot-read history. When it grows past roughly the newest 25 dated entries or becomes too heavy for fresh-chat recovery, move the oldest complete dated sections into `CHANGELOG_ARCHIVE.md`.

## Incidents

For incidents or regressions, reproduce or capture the failure, isolate the smallest credible cause, apply the smallest evidence-based fix, verify it, and record durable history in `.ai-first/context/post_mortems/` when the incident had meaningful impact or follow-ups.
