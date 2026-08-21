# Architecture

Status: uninitialized.

## System Shape

TBD.

## Major Components

TBD.

## Data Flow

TBD.

## External Services

TBD.

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
