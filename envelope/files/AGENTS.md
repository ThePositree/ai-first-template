# AGENTS.md - AI-first handoff

This repository uses `ai-first`.

Before working, read `.ai-first/README.md` first. It explains where the local project memory lives and how to recover context in a fresh chat.

If `.ai-first/FIRST_RUN.md` exists, the project has not been initialized yet. Follow the first-run instructions in `.ai-first/README.md`.

The owner controls product direction, priorities, scope changes, and approval of trade-offs. Agents may maintain `.ai-first/context`, changelog history, task state, and post-mortem records when those updates follow the owner's direction.

Ask before moving ideas into backlog, specs, or code; replacing owner-authored files; changing priorities; or turning incident corrective actions into approved backlog work.

If the owner asks to move `.ai-first` memory into GitHub, run a fresh briefing first unless the owner explicitly says to reuse an existing recorded policy. Record the approved policy in `.ai-first/context/github-sync.md`, but do not treat that file as permission for future GitHub writes. The owner-facing workflow is a natural-language request, not a required CLI, skill, or prepared script. Issues are the portable baseline; Projects, Wiki, and Discussions are optional when selected. If a selected surface is disabled or inaccessible, ask whether the owner wants it enabled, explain any owner-side setup needed, and wait or fall back only after approval. Show the planned GitHub entities and get explicit apply confirmation before writing. Keep GitHub-only relationship links out of normal `.ai-first` memory files unless the owner explicitly approves GitHub as a source of truth.

For incidents or regressions, reproduce or capture the failure, isolate the smallest credible cause, apply the smallest evidence-based fix, verify it, and record follow-ups. Use `.ai-first/context/post_mortems/_template.md` when the incident needs durable history.
