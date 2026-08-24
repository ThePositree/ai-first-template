# Requirements

Status: uninitialized.

## Functional Requirements

- Keep local `.ai-first/context` memory as the default source of truth.
- Let the owner ask an agent to export AI-first memory into GitHub without learning a CLI, hook, or skill.
- Run a fresh briefing before GitHub export/sync unless the owner explicitly asks to reuse an existing recorded policy.
- Record the approved policy in `.ai-first/context/github-sync.md` without treating that file as permission for future GitHub writes.
- Show the planned GitHub entities and get explicit apply confirmation before writing.
- Use GitHub Issues and labels as the baseline export for active work and backlog.
- Optionally use GitHub Projects, Wiki, and Discussions when the owner selects them and the repository supports them.
- Ask about enabling selected-but-disabled GitHub surfaces and explain required owner-side setup when the agent cannot enable them.
- After export, ask the owner whether GitHub and `.ai-first` should be kept in ongoing sync.

## Non-Functional Requirements

TBD.

## Constraints

- Do not require persistent installed maintenance scripts.
- Do not require or assume prepared AI-first export scripts.
- Do not treat exported ideas as approved work.
- Do not write GitHub-only relationship links into normal `.ai-first` memory files unless the owner explicitly approves GitHub as a source of truth.

## Open Questions

TBD.
