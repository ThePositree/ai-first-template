# Playbooks

Detailed workflow guidance for this repository.

Agents should not read every playbook at startup. Start from `.ai-first/README.md` and `.ai-first/context`, then open a playbook only when the owner request or current task clearly matches it.

Use playbooks for repeatable workflows that need more detail than the compact startup context, such as releases, incident response, migrations, review processes, or tracker moves.

When adding a playbook:

- keep it in plain Markdown;
- state when agents should use it;
- link the relevant context files, ADRs, issues, or tracker items;
- keep task state in the active task source, not inside the playbook.
