# Requirements

Status: uninitialized.

## Functional Requirements

- Keep local `.ai-first/context` memory as the default source of truth.
- Let the owner ask an agent to migrate AI-first task state into GitHub or another tracker without learning a CLI, hook, or skill.
- Run a fresh briefing before tracker migration unless the owner explicitly asks to reuse an existing recorded policy.
- Record the approved policy in `.ai-first/context/github-sync.md` without treating that file as permission for future GitHub writes.
- Show the planned external entities and get explicit apply confirmation before writing.
- Use GitHub Issues as the baseline GitHub migration target for active work and backlog.
- Use the repository's normal labels or fields rather than AI-first-branded tracker metadata.
- Optionally use GitHub Projects, Wiki, and Discussions when the owner selects them and the repository supports them.
- Ask about enabling selected-but-disabled GitHub surfaces and explain required owner-side setup when the agent cannot enable them.
- After migration, ask the owner which task source of truth should remain active.

## Non-Functional Requirements

TBD.

## Constraints

- Do not require persistent installed maintenance scripts.
- Do not require or assume prepared AI-first export scripts.
- Do not treat exported ideas as approved work.
- Do not mirror task state between `.ai-first` and a tracker by default.
- Do not write tracker-only relationship links into normal `.ai-first` memory files unless the owner explicitly approves that tracker as a source of truth.

## Open Questions

TBD.
