# Progressive Memory Graph

Status: designed Date: 2026-08-13

## Goal

Reduce fresh-chat reading cost as AI-first projects grow while keeping memory plain, inspectable, and owner-controlled.

## Current Model

Agents start from `.ai-first/README.md` and read a flat set of Markdown files in `.ai-first/context`. This is simple and reliable, but long-lived projects can accumulate enough memory that every fresh chat pays for unrelated context.

## Proposed Model

Keep a compact root memory that points to domain-specific memories through stable Markdown references. The root memory remains the owner-visible map of the project, not a hidden index.

Root memory should include:

- project identity and current direction;
- active work and approved backlog pointers;
- recent changelog pointer;
- domain memory references with short descriptions;
- stale-reference warnings when a linked memory needs review.

Domain memories may cover areas such as product, architecture, operations, incidents, decisions, design, integration notes, or subsystem-specific context.

## Reference Format

Use normal Markdown links and short descriptions:

```markdown
- [Installer architecture](architecture/installer.md) - install flow, conflict handling, envelope ownership.
```

References should be stable relative paths under `.ai-first/context`. Avoid generated IDs unless a future export format requires them.

## Discovery Rules

1. Start with `.ai-first/README.md`.
2. Read the compact root memory files listed there.
3. Follow only the domain memories relevant to the current task.
4. Read `CHANGELOG_ARCHIVE.md` only when current memory points to older history.
5. If a referenced file is missing, stale, or contradictory, stop and ask the owner before making assumptions that affect behavior.

## Stale References

When moving or deleting a memory file:

- update all root references in the same change;
- leave a short note in `CHANGELOG.md`;
- preserve important historical context in the changelog, archive, or an ADR;
- do not silently drop owner-visible state.

## Migration Path

1. Keep the current flat read-order as the default.
2. Introduce optional domain memories only for areas that are too large for the root context files.
3. Update `.ai-first/README.md` to distinguish required hot-read files from task-specific domain memories.
4. Add installer and envelope templates only after the convention proves useful in this source repository.

## Non-Goals

- Hidden databases or generated memory indexes.
- Replacing owner-readable Markdown files.
- Requiring installed repositories to run scripts before agents can recover context.
