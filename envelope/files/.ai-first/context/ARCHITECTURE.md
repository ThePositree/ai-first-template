# Architecture

Status: uninitialized.

## System Shape

TBD.

## Major Components

TBD.

## Data Flow

TBD.

## External Services

GitHub export starts with a fresh owner briefing recorded in `.ai-first/context/github-sync.md` unless the owner explicitly asks to reuse an existing recorded policy. AI-first provides instructions and policy memory, not a prepared exporter script. GitHub Issues and labels are the portable baseline for active/backlog work. Projects, Wiki, and Discussions are optional surfaces when the owner selects them and the repository supports them. Disabled or inaccessible selected surfaces require an owner question before fallback. GitHub remains a projection until the owner approves ongoing sync.

## Operational Notes

TBD.

## Memory Hygiene

When project behavior changes after bootstrap, check whether the update belongs in:

- `.ai-first/context` memory;
- root `AGENTS.md`;
- changelog or changelog archive;
- post-mortems or ADRs;
- public documentation;
- external task trackers or exports, if the owner later approves them.

For larger projects, the memory may later evolve from a flat first-read set into a progressive graph where compact root memory points to domain-specific memory files. Keep any such references owner-visible Markdown links, and do not hide important project state in generated indexes.
