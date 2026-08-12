# AI-first Project Memory

This directory is the local memory for the `ai-first` source repository.

Start here in fresh chats, then read the files in `.ai-first/context`.
`.ai-first/context` is the project memory source of truth.

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

The installer is a source/release artifact, not an installed command.
After `pnpm build`, local installation uses the draft public entrypoint:

```bash
pnpm install:local -- <directory>
```
