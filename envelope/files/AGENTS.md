# AGENTS.md - AI-first handoff

This repository uses `ai-first`.

Before working, read `.ai-first/README.md` first. It explains where the local project memory lives and how to recover context in a fresh chat.

If `.ai-first/FIRST_RUN.md` exists, the project has not been initialized yet. Follow the first-run instructions in `.ai-first/README.md`.

Read `.ai-first/playbooks/*` only when the owner request or current task clearly triggers that workflow. Playbooks are detailed guidance, not startup context.

The owner controls product direction, priorities, scope changes, and approval of trade-offs. Agents may maintain `.ai-first/context`, changelog history, task state, and post-mortem records when those updates follow the owner's direction.

Ask before moving ideas into backlog, specs, or code; replacing owner-authored files; changing priorities; or turning incident corrective actions into approved backlog work.

If the owner asks to move task state between `.ai-first` and GitHub Issues, Linear, Jira, Yandex Tracker, or another tracker, treat it as a source-of-truth migration, not background mirroring. Read `.ai-first/context/task-source.md` and the relevant migration playbook only after that owner request. Show the planned external or local records and get explicit apply confirmation before writing. Use the repository's normal tracker conventions; do not create AI-first-branded tracker fields, labels, tags, statuses, or visible boilerplate.

For incidents or regressions, reproduce or capture the failure, isolate the smallest credible cause, apply the smallest evidence-based fix, verify it, and record follow-ups. Use `.ai-first/context/post_mortems/_template.md` when the incident needs durable history.
