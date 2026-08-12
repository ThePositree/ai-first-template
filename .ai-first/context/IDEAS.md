# Ideas

Saved ideas are reminders, not approved tasks.

## Magic Install Completion Screen

The installer should end with a short message that says what was added and
reminds the owner they can keep talking to their agent as usual.

## Guided Ideas Discovery

If the owner asks to fill ideas, for example "let's fill ideas", the agent
should investigate the product and propose possible ideas first.

The agent must not write those ideas into `IDEAS.md` automatically. The owner
approves, edits, rejects, or reprioritizes the suggestions, and only approved
saved ideas are recorded.

This helps owners avoid starting from a blank page while keeping idea memory
under owner control.

## AI-first Task UI

Build a dedicated AI-first UI where the owner can inspect, create, edit, and
delete task memory in a normal task-tracker-like interface.

The UI should make `.ai-first` feel approachable for owners who prefer visual
task management while preserving the files as the durable source of truth.

## Task Tracker Export Integrations

Later, add scripts or external entrypoints that can move tasks from
`.ai-first` into tools such as Jira, Confluence, Linear, or another task
tracker.

This is only a saved direction for now. Do not implement integrations until the
owner approves a concrete tracker, data model, and sync behavior.
