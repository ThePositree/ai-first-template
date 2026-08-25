# Requirements

Status: not recorded.

## Functional Requirements

- Keep local `.ai-first/context` memory as the default source of truth.
- Let the owner ask an agent to migrate AI-first task state into GitHub Issues, Linear, Jira, Yandex Tracker, or another tracker without learning a CLI, hook, or skill.
- Run a fresh briefing before tracker migration unless the owner explicitly asks to reuse an existing recorded policy.
- Record the approved source-of-truth policy in `.ai-first/context/task-source.md` without treating that file as permission for future tracker writes.
- Show the planned external or local records and get explicit apply confirmation before writing.
- Define local task source and external tracker task source clearly.
- Turn local task files into pointers when an external tracker becomes active.
- Use the repository's normal labels, fields, statuses, queues, teams, projects, or priorities rather than AI-first-branded tracker metadata.
- Support GitHub Issues, Linear, Jira, Yandex Tracker, and other trackers through tracker-neutral, human-readable mapping rules.
- Ask about selected-but-disabled tracker surfaces and explain required owner-side setup when the agent cannot enable them.
- After migration, ask the owner which task source of truth should remain active.

## Non-Functional Requirements

No non-functional requirements recorded yet.

## Constraints

- Do not require persistent installed maintenance scripts.
- Do not require or assume prepared AI-first export scripts.
- Do not treat exported ideas as approved work.
- Do not mirror task state between `.ai-first` and a tracker by default.
- Do not read tracker migration playbooks until the owner asks for migration.
- Do not write tracker-only relationship links into normal `.ai-first` memory files unless the owner explicitly approves that tracker as a source of truth.

## Open Questions

No open questions recorded yet.
