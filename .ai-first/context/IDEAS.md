# Ideas

Saved ideas are reminders, not approved tasks.

Lifecycle statuses:

- `draft` - saved reminder with no approval to implement.
- `approved` - owner approved preserving the idea as a direction, but not necessarily as backlog work.
- `moved to backlog` - owner approved concrete work and it now lives in `BACKLOG.md`.
- `implemented` - the idea shipped or was otherwise completed.
- `rejected` - the owner decided not to pursue it.

Use lightweight metadata when it helps future agents understand state:

```markdown
Status: draft Links: optional related files, chats, or backlog items
```

Do not move an idea into backlog, a spec, or code without explicit owner approval. When an idea becomes relevant to current work, remind the owner briefly and ask before changing its lifecycle.

## Magic Install Completion Screen

Status: draft

The installer should end with a short message that says what was added and reminds the owner they can keep talking to their agent as usual.

## Guided Ideas Discovery

Status: draft

If the owner asks to fill ideas, for example "let's fill ideas", the agent should investigate the product and propose possible ideas first.

The agent must not write those ideas into `IDEAS.md` automatically. The owner approves, edits, rejects, or reprioritizes the suggestions, and only approved saved ideas are recorded.

This helps owners avoid starting from a blank page while keeping idea memory under owner control.

## AI-first Task UI

Status: draft

Build a dedicated AI-first UI where the owner can inspect, create, edit, and delete task memory in a normal task-tracker-like interface.

The UI should make `.ai-first` feel approachable for owners who prefer visual task management while preserving the files as the durable source of truth.

## Task Tracker Export Integrations

Status: draft

Later, add scripts or external entrypoints that can move tasks from `.ai-first` into tools such as Jira, Confluence, Linear, or another task tracker.

This is only a saved direction for now. Do not implement integrations until the owner approves a concrete tracker, data model, and sync behavior.
