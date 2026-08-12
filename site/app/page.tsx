import { Button } from "@/components/ui/button";

const workflow = [
  {
    title: "Install once",
    description:
      "AI-first adds a small .ai-first memory workspace and an AGENTS.md handoff to the repository.",
  },
  {
    title: "Keep talking normally",
    description:
      "The owner keeps working through natural language. The agent reads local memory before acting.",
  },
  {
    title: "Recover fresh chats",
    description:
      "Project direction, active work, backlog, ideas, decisions, and history survive across sessions.",
  },
];

const memoryFiles = [
  "PROJECT.md",
  "VISION.md",
  "REQUIREMENTS.md",
  "ARCHITECTURE.md",
  "IN_PROGRESS.md",
  "BACKLOG.md",
  "IDEAS.md",
  "CHANGELOG.md",
];

export default function Page() {
  return (
    <main className="min-h-svh bg-background text-foreground">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="flex flex-col gap-7">
            <div className="w-fit rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
              Local memory for AI-assisted repositories
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="max-w-4xl text-balance text-5xl font-medium tracking-tight sm:text-7xl">
                Give your agent a memory it can actually keep.
              </h1>
              <p className="max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
                AI-first installs a small repository memory layer. It does not replace the agent or
                change how the owner works. It helps the next chat understand what the project is,
                what is active, and what should happen next.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg">Install with one command</Button>
              <Button size="lg" variant="outline">
                Read the memory model
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-5 shadow-sm">
            <div className="rounded-2xl bg-muted p-5 font-mono text-sm leading-7">
              <div className="text-muted-foreground">
                $ curl -fsSL https://ai-first.dev/install | sh
              </div>
              <div className="mt-4 text-foreground">Installed AI-first.</div>
              <div className="text-muted-foreground">Keep talking to your agent as usual.</div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {workflow.map((item) => (
            <article key={item.title} className="rounded-3xl border border-border bg-card p-6">
              <h2 className="text-lg font-medium">{item.title}</h2>
              <p className="mt-3 leading-7 text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>

        <section className="grid gap-8 rounded-3xl border border-border bg-card p-6 md:grid-cols-[0.9fr_1.1fr] md:p-8">
          <div>
            <h2 className="text-3xl font-medium tracking-tight">Files are the interface.</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Fresh chats start from AGENTS.md, then read .ai-first/README.md and the context files.
              The owner does not need to learn a CLI or maintain a dashboard just to keep the agent
              informed.
            </p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {memoryFiles.map((file) => (
              <div
                key={file}
                className="rounded-xl border border-border bg-background px-4 py-3 font-mono text-sm"
              >
                .ai-first/context/{file}
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6">
            <h2 className="text-2xl font-medium">Task memory, not blank pages</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Active work, backlog, ideas, and changelog history stay close to the code. Later,
              AI-first can export this task memory into Jira, Linear, Confluence, or another
              tracker.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6">
            <h2 className="text-2xl font-medium">Owner control stays intact</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Agents may propose project ideas after researching the product, but the owner
              approves, edits, or rejects what gets saved. AI-first adds continuity without taking
              product direction away from the owner.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
