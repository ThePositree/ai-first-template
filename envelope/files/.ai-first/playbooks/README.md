# Playbooks

Detailed workflow guidance for this repository.

Agents should not read every playbook at startup. Start from `.ai-first/README.md` and `.ai-first/context`, then open a playbook only when the owner request or current task clearly matches it.

- `memory-maintenance.md` - use when updating durable project memory, local task state, changelog entries, ADRs, or post-mortems.
- `tracker-migration.md` - use when the owner asks to move local AI-first task state into GitHub, Linear, Jira, Yandex Tracker, or another tracker.

When adding a playbook:

- keep it in plain Markdown;
- state when agents should use it;
- link the relevant context files, ADRs, issues, or tracker items;
- keep task state in the active task source, not inside the playbook.
