# Architecture

Status: not recorded.

## System Shape

No architecture notes recorded yet.

## Major Components

No component notes recorded yet.

## Data Flow

No data-flow notes recorded yet.

## External Services

Tracker migration starts with a fresh owner briefing unless the owner explicitly asks to reuse an existing recorded policy. Record the approved task-source policy in `.ai-first/context/task-source.md`. AI-first provides instructions and policy memory, not a prepared exporter script. Use the repository's normal tracker conventions rather than AI-first-branded tracker metadata. `.ai-first/context` remains the active task source until the owner approves a different source of truth.

## Operational Notes

No operational notes recorded yet.

## Memory Hygiene

When project behavior changes, check whether the update belongs in:

- `.ai-first/context` memory;
- root `AGENTS.md`;
- changelog or changelog archive;
- post-mortems or ADRs;
- playbooks;
- public documentation;
- external task trackers, when the owner has approved a tracker as the active task source.

For larger projects, the memory may later evolve from a flat first-read set into a progressive graph where compact root memory points to domain-specific memory files. Keep any such references owner-visible Markdown links, and do not hide important project state in generated indexes.
