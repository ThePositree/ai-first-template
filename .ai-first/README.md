# AI-first Project Memory

This directory is the local memory for the `ai-first` source repository.

Start here in fresh chats, then read the files in `.ai-first/context`. `.ai-first/context` is the project memory source of truth.

## First Read

1. `.ai-first/context/PROJECT.md`
2. `.ai-first/context/VISION.md`
3. `.ai-first/context/REQUIREMENTS.md`
4. `.ai-first/context/ARCHITECTURE.md`
5. `.ai-first/context/IN_PROGRESS.md`
6. `.ai-first/context/BACKLOG.md`
7. `.ai-first/context/IDEAS.md`
8. `.ai-first/context/CHANGELOG.md`
9. Relevant files in `.ai-first/context/decisions/`

Read `.ai-first/context/CHANGELOG_ARCHIVE.md` only when current memory links to older history or a task depends on historical context outside the hot-read changelog.

The installer is a source/release artifact, not an installed command. After `pnpm build`, local installation uses the draft public entrypoint:

```bash
pnpm install:local -- <directory>
```

## Memory Conventions

- Keep `CHANGELOG.md` focused on recent history and rotate older complete dated sections into `CHANGELOG_ARCHIVE.md`.
- Keep approved unfinished work in `BACKLOG.md`, with `P0`, `P1`, or `P2` priority labels in task headings.
- Keep exploratory reminders in `IDEAS.md`; ideas move to backlog, specs, or code only with owner approval.
- Use `context/specs/` for non-trivial designs that should not immediately change runtime behavior.
- Use `context/post_mortems/` for incidents that need durable root-cause and corrective-action history.
