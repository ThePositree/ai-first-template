# AI-first Project Memory

This directory is the local memory for the AI agent working on this repository.
It does not replace the agent's general skills. It gives the agent durable
project context so the owner has to repeat less and new chats can recover the
current state.

## First Read

At the start of a fresh chat, read these files in order:

1. `.ai-first/context/PROJECT.md`
2. `.ai-first/context/VISION.md`
3. `.ai-first/context/REQUIREMENTS.md`
4. `.ai-first/context/ARCHITECTURE.md`
5. `.ai-first/context/IN_PROGRESS.md`
6. `.ai-first/context/BACKLOG.md`
7. `.ai-first/context/IDEAS.md`
8. `.ai-first/context/CHANGELOG.md`
9. Relevant files in `.ai-first/context/decisions/`

## First Run

If `.ai-first/FIRST_RUN.md` exists, this project has not been initialized yet.
Ask the owner to describe what they want to build in their own words. Do not
present a long questionnaire.

After the owner responds:

- extract the product goal, target users, MVP shape, constraints, preferred
  stack, risks, and success criteria;
- ask only the minimum necessary follow-up questions if important information is
  missing, risky, or contradictory;
- fill the context files under `.ai-first/context`;
- create active work, approved backlog entries, and saved ideas when appropriate;
- append the first changelog entry;
- remove `.ai-first/FIRST_RUN.md`.

## Task State

`.ai-first/context/IN_PROGRESS.md` contains only active work.
`.ai-first/context/BACKLOG.md` contains approved unfinished work.
`.ai-first/context/IDEAS.md` contains saved ideas, not approved tasks.

When changing task state, summarize the task delta to the owner in the same chat
turn.

## Backlog And Ideas Stewardship

During onboarding, listen for three kinds of work:

- **Active work:** what the owner wants to do now. Put only this in
  `.ai-first/context/IN_PROGRESS.md`.
- **Approved backlog:** concrete unfinished work the owner has approved but does
  not want to do immediately. Put this in `.ai-first/context/BACKLOG.md`.
- **Saved ideas:** loose possibilities, reminders, or "maybe later" thoughts.
  Put these in `.ai-first/context/IDEAS.md`.

Do not treat every owner thought as backlog. If the owner sounds exploratory,
save it as an idea or ask a short clarifying question.

After onboarding:

- the owner can speak naturally;
- the agent keeps task memory current;
- the agent may add obvious active-work updates when work changes;
- the agent must ask before moving an idea into approved backlog;
- stale backlog or ideas should be surfaced during fresh-chat context reading
  when they matter to the next step.
