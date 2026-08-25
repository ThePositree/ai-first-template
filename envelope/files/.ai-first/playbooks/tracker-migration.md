# Tracker Migration Playbook

Use this playbook when the owner asks to move local AI-first task state into GitHub, Linear, Jira, Yandex Tracker, or another tracker.

Do not use this playbook as startup context. Do not write to external systems without explicit owner approval.

## Model

Treat tracker work as source-of-truth migration, not background mirroring. Until the owner approves a different source of truth, `.ai-first/context` remains the active task source.

The owner-facing workflow is a natural-language request. Do not require the owner to learn a CLI, hook, skill, or prepared AI-first export script. Use the tracker tools, MCP tools, API calls, temporary scripts, or manual steps that fit the repository.

## Briefing

Run a fresh briefing first unless the owner explicitly says to reuse an existing recorded policy in `.ai-first/context/MIGRATION_RECORD.md`.

Phrase questions naturally for the owner, repository, language, and available tracker surfaces. Include a way for the owner to give a custom answer.

Cover:

- target tracker and repository or workspace;
- surfaces, such as issues, projects, wiki, discussions, boards, epics, or labels;
- entity placement for active work, backlog, ideas, ADRs, post-mortems, project overview, requirements, architecture, changelog summaries, and decision-needed items;
- migration scope;
- label, field, priority, relationship, visibility, and conflict policies;
- existing tracker data;
- one-time migration versus ongoing sync;
- source of truth after migration;
- dry-run preference.

Record the approved policy in `.ai-first/context/MIGRATION_RECORD.md`. This file is a policy record, not permission to run future tracker writes without asking.

## GitHub Baseline

Use GitHub Issues as the portable baseline for active work and backlog. Use the repository's normal labels or fields rather than AI-first-branded tracker metadata unless the owner explicitly approves new labels.

Projects, Wiki, and Discussions are optional when the owner selects them and the repository supports them. If a selected surface is disabled or inaccessible, ask whether the owner wants it enabled. If you cannot enable it yourself, explain the exact owner action needed and wait or choose a fallback only after approval.

Ideas must remain clearly marked as not approved work unless the owner promotes them.

## Apply

Before writing to a tracker, show the planned entities and get explicit apply confirmation.

After creating or finding entities, update tracker bodies with useful tracker-native relationship links between issues, discussions, wiki pages, projects, and source `.ai-first` paths.

Do not write tracker-only relationship links back into normal `.ai-first` memory files unless the owner explicitly approves that tracker as a source of truth.
