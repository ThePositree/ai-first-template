import { CopyCommandButton } from "@/components/copy-command-button";

const installCommand = "curl -fsSL https://ai-first.dev/install | sh";

const memoryFiles = [
  {
    path: "PROJECT.md",
    signal: "product truth",
    detail: "What this repository is building and why it matters.",
  },
  {
    path: "IN_PROGRESS.md",
    signal: "active vector",
    detail: "The work currently in flight.",
  },
  {
    path: "BACKLOG.md",
    signal: "approved queue",
    detail: "Unfinished work the owner has already approved.",
  },
  {
    path: "IDEAS.md",
    signal: "holding pattern",
    detail: "Possibilities remembered without becoming commitments.",
  },
  {
    path: "ARCHITECTURE.md",
    signal: "system map",
    detail: "How the repository is shaped and where changes belong.",
  },
  {
    path: "CHANGELOG.md",
    signal: "last known state",
    detail: "Recent history that keeps a fresh chat oriented.",
  },
];

const sequence = [
  {
    command: "install",
    title: "One command arms the recorder",
    body: "The owner runs the install entrypoint once. The repository receives an AGENTS.md handoff and a local .ai-first memory workspace.",
  },
  {
    command: "handoff",
    title: "The agent reads before it acts",
    body: "Fresh chats start from AGENTS.md, then read .ai-first/README.md and the context files before making changes.",
  },
  {
    command: "continue",
    title: "Work resumes with less re-explaining",
    body: "The owner keeps talking normally. The agent carries more operational memory between sessions.",
  },
];

const recorderTracks = [
  {
    path: "AGENTS.md",
    state: "handoff",
    frames: ["w-10", "w-16", "w-8", "w-20"],
  },
  {
    path: ".ai-first/README.md",
    state: "read order",
    frames: ["w-20", "w-8", "w-12", "w-16"],
  },
  {
    path: ".ai-first/context",
    state: "project memory",
    frames: ["w-12", "w-24", "w-10", "w-14"],
  },
];

export default function Page() {
  return (
    <main className="min-h-svh overflow-hidden bg-[#070b10] text-[#eef8ff]">
      <section className="relative min-h-svh border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(54,150,255,0.26),transparent_34%),radial-gradient(circle_at_88%_18%,rgba(255,184,77,0.18),transparent_28%),linear-gradient(135deg,rgba(8,13,19,0.98),rgba(3,7,11,1))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[48px_48px] opacity-[0.18]" />

        <div className="relative mx-auto flex min-h-svh w-full max-w-7xl flex-col px-6 py-7 lg:px-8">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="grid size-9 place-items-center rounded-xl border border-cyan-200/25 bg-cyan-300/10 font-mono text-xs text-cyan-100 shadow-[0_0_32px_rgba(76,201,255,0.2)]">
                AF
              </div>
              <div>
                <div className="font-medium tracking-tight">AI-first</div>
                <div className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-cyan-100/55">
                  repository memory layer
                </div>
              </div>
            </div>
            <div className="hidden items-center gap-6 font-mono text-xs text-cyan-100/65 xl:flex">
              <a href="#memory">memory</a>
              <a href="#sequence">sequence</a>
              <a href="#install">install</a>
            </div>
          </nav>

          <div className="grid flex-1 items-center gap-10 py-16 md:grid-cols-[0.9fr_1.1fr] lg:py-8">
            <div className="max-w-4xl">
              <h1 className="font-mono text-5xl font-medium uppercase leading-[0.88] tracking-[-0.08em] text-white sm:text-6xl lg:text-7xl">
                <span className="block">A flight</span>
                <span className="block">recorder</span>
                <span className="block">for your</span>
                <span className="block">AI agent.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-cyan-50/70">
                AI-first installs a local memory layer that lets fresh chats recover the project
                without asking the owner to repeat the same briefing. One command, then normal agent
                conversation.
              </p>
              <div
                id="install"
                className="mt-9 rounded-2xl border border-cyan-100/15 bg-black/45 p-3 shadow-2xl shadow-cyan-950/40 backdrop-blur"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <code className="min-w-0 flex-1 overflow-x-auto rounded-xl bg-[#020508] px-4 py-3 font-mono text-sm text-cyan-100">
                    {installCommand}
                  </code>
                  <CopyCommandButton command={installCommand} />
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2 font-mono text-xs text-cyan-100/60">
                <span className="rounded-full border border-white/10 px-3 py-1">
                  no installed scripts
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1">no global CLI</span>
                <span className="rounded-full border border-white/10 px-3 py-1">agent-managed</span>
              </div>
              <div className="mt-5 rounded-2xl border border-amber-100/20 bg-amber-100/8 p-3 md:hidden">
                <div className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-amber-100/65">
                  owner signal locked
                </div>
                <p className="mt-2 text-sm leading-6 text-amber-50/80">
                  The repository answers before the owner has to explain again.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-8 rounded-[3rem] bg-cyan-400/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-cyan-100/15 bg-[#0c141d]/95 p-5 shadow-2xl shadow-black/50">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <div className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-100/55">
                      recorder unit
                    </div>
                    <div className="mt-1 text-xl font-medium">Fresh chat recovery</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="size-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
                    <div className="size-2.5 rounded-full bg-amber-300 shadow-[0_0_18px_rgba(252,211,77,0.8)]" />
                    <div className="size-2.5 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.8)]" />
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-amber-100/20 bg-amber-100/8 p-4">
                  <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
                    <div>
                      <div className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-amber-100/60">
                        owner signal
                      </div>
                      <p className="mt-2 text-sm leading-6 text-amber-50/82">
                        "Keep going from where we left off." The repository answers before the owner
                        has to explain.
                      </p>
                    </div>
                    <div className="rounded-xl bg-amber-200 px-3 py-2 font-mono text-xs text-[#2c1900] shadow-[0_0_24px_rgba(252,211,77,0.28)]">
                      signal locked
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-3">
                  {recorderTracks.map((item, index) => (
                    <div
                      key={item.path}
                      className="grid gap-3 rounded-2xl border border-white/10 bg-white/4.5 p-3"
                    >
                      <div className="grid grid-cols-[2rem_1fr_auto] items-center gap-3">
                        <div className="grid size-8 place-items-center rounded-lg bg-cyan-100/10 font-mono text-xs text-cyan-100">
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-mono text-sm text-white">{item.path}</div>
                          <div className="text-xs text-cyan-100/50">{item.state}</div>
                        </div>
                        <div className="font-mono text-[0.65rem] text-cyan-100/45">
                          00:0{index + 1}:1{index}
                        </div>
                      </div>
                      <div className="grid grid-cols-[1fr_auto] items-center gap-3 pl-11">
                        <div className="flex h-7 items-center gap-1 overflow-hidden rounded-lg bg-[#020508] px-2">
                          {item.frames.map((width, frameIndex) => (
                            <span
                              key={`${item.path}-${frameIndex}`}
                              className={`${width} h-px bg-cyan-200/55 shadow-[0_0_10px_rgba(103,232,249,0.5)]`}
                            />
                          ))}
                        </div>
                        <div className="h-px w-10 bg-cyan-200/40" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="memory" className="bg-[#eef8ff] px-6 py-24 text-[#08111a] lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-balance text-5xl font-medium tracking-[-0.045em]">
              The memory is inspectable because it is just files.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#40515f]">
              The design does not ask visitors to trust a black box. It shows the recorder's
              contents: plain Markdown files the agent can read and the owner can inspect.
            </p>
          </div>
          <div className="grid gap-3">
            {memoryFiles.map((file) => (
              <article
                key={file.path}
                className="grid gap-3 rounded-2xl border border-[#b9d1df] bg-white p-4 shadow-[0_18px_60px_rgba(41,80,105,0.08)] md:grid-cols-[13rem_1fr]"
              >
                <div>
                  <div className="font-mono text-sm text-[#006da3]">
                    .ai-first/context/{file.path}
                  </div>
                  <div className="mt-2 w-fit rounded-full bg-[#dff3ff] px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[#23536c]">
                    {file.signal}
                  </div>
                </div>
                <p className="leading-7 text-[#40515f]">{file.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sequence" className="bg-[#070b10] px-6 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl text-balance text-5xl font-medium tracking-[-0.045em]">
            One installation. Then the agent follows the record.
          </h2>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {sequence.map((item) => (
              <article
                key={item.command}
                className="rounded-[1.75rem] border border-white/10 bg-white/4.5 p-6"
              >
                <div className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-100/50">
                  {item.command}
                </div>
                <h3 className="mt-8 text-2xl font-medium tracking-tight">{item.title}</h3>
                <p className="mt-4 leading-7 text-cyan-50/62">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbff] px-6 py-24 text-[#08111a] lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-[#c7dce8] bg-white p-6 shadow-[0_24px_90px_rgba(33,74,101,0.12)] lg:grid-cols-[0.85fr_1.15fr] lg:p-10">
          <div>
            <h2 className="text-balance text-4xl font-medium tracking-[-0.04em]">
              Task memory can leave the recorder later.
            </h2>
            <p className="mt-5 leading-8 text-[#40515f]">
              AI-first keeps active work, backlog, ideas, and history close to the repo. Future
              exports can move that task memory into Jira, Linear, Confluence, or another tracker.
            </p>
          </div>
          <div className="grid gap-3">
            {[
              "IN_PROGRESS.md -> current work",
              "BACKLOG.md -> approved queue",
              "IDEAS.md -> owner-approved memory",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#d6e5ee] bg-[#f7fbff] p-4 font-mono text-sm text-[#244b60]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
