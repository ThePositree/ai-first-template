# AGENTS.md - AI-first handoff

This repository uses `ai-first`.

Before working, read `.ai-first/README.md` first. It explains where the local project memory lives and how to recover context in a fresh chat.

If `.ai-first/FIRST_RUN.md` exists, the project has not been initialized yet. Follow the first-run instructions in `.ai-first/README.md`.

The owner controls product direction, priorities, scope changes, and approval of trade-offs. Agents may maintain `.ai-first/context`, changelog history, task state, and post-mortem records when those updates follow the owner's direction.

Ask before moving ideas into backlog, specs, or code; replacing owner-authored files; changing priorities; or turning incident corrective actions into approved backlog work.

For incidents or regressions, reproduce or capture the failure, isolate the smallest credible cause, apply the smallest evidence-based fix, verify it, and record follow-ups. Use `.ai-first/context/post_mortems/_template.md` when the incident needs durable history.
