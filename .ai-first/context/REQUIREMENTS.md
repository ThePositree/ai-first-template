# Requirements

Core requirements:

- install one small `.ai-first` workspace into a repository;
- keep root `AGENTS.md` as a thin handoff to `.ai-first/README.md`;
- store durable project memory under `.ai-first/context`;
- avoid overwriting user files silently;
- make fresh chats able to recover project state with less repeated owner
  explanation;
- cover source code behavior with tests, including installer behavior, clean
  targets, and existing repositories with owner-authored files;
- keep source tooling on pnpm, mise, Rolldown, Vitest, Oxlint, and Oxfmt;
- provide a documentation website that explains installation, owner workflow,
  agent workflow, and AI-first memory.

Open questions:

- final public install URL;
- release manifest format and checksum strategy;
- exact conflict report shape;
- how much context belongs only in `.ai-first` versus public project docs.
