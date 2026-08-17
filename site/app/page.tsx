import {
  ArrowRight,
  BookOpen,
  ClipboardText,
  ClockCounterClockwise,
  Files,
  GitBranch,
  Key,
  Package,
  RocketLaunch,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";

import { CopyCommandButton } from "@/components/copy-command-button";
import { TerrariumScene3D } from "@/components/terrarium-scene-3d";

const installCommand = "curl -fsSL https://ai-first.dev/install | sh";

const bootstrapPrompt = `Read this repository and initialize AI-first context.

Fill .ai-first/context/PROJECT.md, VISION.md, REQUIREMENTS.md, ARCHITECTURE.md, IN_PROGRESS.md, BACKLOG.md, IDEAS.md, and CHANGELOG.md from the codebase and our chat.

Keep assumptions explicit. Do not invent approved tasks. Ask before moving ideas into backlog or changing product direction.`;

const memoryFiles = [
  { label: "Project truth", file: "PROJECT.md", Icon: Package, tone: "mint" },
  { label: "Current work", file: "IN_PROGRESS.md", Icon: ClipboardText, tone: "sky" },
  { label: "Approved queue", file: "BACKLOG.md", Icon: Files, tone: "peach" },
  { label: "Recent trail", file: "CHANGELOG.md", Icon: ClockCounterClockwise, tone: "mint" },
];

const steps = [
  {
    title: "Install",
    body: "The command drops a local memory workspace into the repo.",
    Icon: RocketLaunch,
  },
  {
    title: "Stock",
    body: "Your agent records project truth, tasks, ideas, and decisions.",
    Icon: BookOpen,
  },
  {
    title: "Resume",
    body: "The next chat reads the files before it touches code.",
    Icon: GitBranch,
  },
];

function CommandPulses() {
  return (
    <div className="command-pulses" aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}

function MemoryLabels() {
  return (
    <div className="memory-label-strip" aria-label="AI-first memory files">
      {memoryFiles.map(({ file }) => (
        <span key={file}>{file}</span>
      ))}
    </div>
  );
}

function PhysicalCommandCard() {
  return (
    <div className="physical-card command-dock">
      <div className="command-dock__rail">
        <span>AI-first install dock</span>
        <span className="rail-light" />
      </div>
      <div className="command-dock__body">
        <code>{installCommand}</code>
        <CopyCommandButton command={installCommand} />
      </div>
      <CommandPulses />
    </div>
  );
}

function MemoryTiles() {
  return (
    <div className="file-chip-grid">
      {memoryFiles.map(({ label, file, Icon, tone }, index) => (
        <div key={file} className={`file-chip reveal delay-${index + 1} file-chip--${tone}`}>
          <span className="file-chip__icon">
            <Icon size={22} weight="duotone" />
          </span>
          <span>
            <span className="file-chip__label">{label}</span>
            <span className="file-chip__file">{file}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

function PromptTray() {
  return (
    <div className="physical-card prompt-tray">
      <div className="prompt-tray__top">
        <span>Existing repository note</span>
        <span>copyable</span>
      </div>
      <pre>{bootstrapPrompt}</pre>
      <div className="prompt-tray__action">
        <CopyCommandButton
          command={bootstrapPrompt}
          label="Copy prompt"
          copiedLabel="Prompt copied"
        />
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="terrarium-page min-h-svh overflow-hidden text-[var(--terrarium-ink)] selection:bg-[var(--terrarium-coral)] selection:text-[var(--terrarium-ink)]">
      <section className="terrarium-hero px-4 py-5 lg:px-8 lg:py-8">
        <div className="terrarium-workspace mx-auto min-h-[calc(100svh-2.5rem)] max-w-7xl">
          <div className="reveal hero-copy">
            <div className="brand-stamp">
              <span>
                <Package size={20} weight="duotone" />
              </span>
              AI-first
            </div>
            <h1>Repository memory, built like a tiny 3D workspace.</h1>
            <p>
              One command gives your repo local context files, so fresh agent chats stop re-learning
              the same project.
            </p>
            <PhysicalCommandCard />
          </div>

          <div className="reveal delay-2 hero-stage">
            <div className="stage-plate stage-plate--hero">
              <TerrariumScene3D model="hero" />
              <MemoryLabels />
              <div className="scene-note scene-note--left">
                <Key size={19} weight="duotone" />
                <span>AGENTS.md points the next chat here</span>
              </div>
              <div className="scene-note scene-note--right">
                <Sparkle size={18} weight="fill" />
                <span>Amber pulses stock the shelf</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="terrarium-section terrarium-section--handoff px-4 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div className="reveal scene-copy">
            <h2>Existing repos get a handoff tray.</h2>
            <p>
              The prompt stays real HTML for copying, but visually it becomes a paper note moving
              across the same clay desk.
            </p>
            <PromptTray />
          </div>

          <div className="reveal delay-2 stage-plate stage-plate--handoff">
            <TerrariumScene3D model="handoff" />
            <div className="handoff-path">
              <span>chat context</span>
              <ArrowRight size={20} weight="bold" />
              <span>local files</span>
            </div>
          </div>
        </div>
      </section>

      <section className="terrarium-section terrarium-section--archive px-4 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
          <div className="reveal stage-plate stage-plate--archive">
            <TerrariumScene3D model="archive" />
            <MemoryLabels />
          </div>

          <div className="reveal delay-2 scene-copy">
            <h2>The shelf is still just files.</h2>
            <p>
              No dashboard ritual, no permanent local command surface. The 3D garden only makes the
              plain Markdown structure easier to understand.
            </p>
            <MemoryTiles />
            <div className="steps-rail">
              {steps.map(({ title, body, Icon }, index) => (
                <div key={title} className={`step-node reveal delay-${index + 1}`}>
                  <span>
                    <Icon size={24} weight="duotone" />
                  </span>
                  <div>
                    <strong>{title}</strong>
                    <p>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="terrarium-close px-4 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="physical-card close-card reveal">
            <span>
              <Sparkle size={26} weight="fill" />
            </span>
            <h2>Continuity, not process theater.</h2>
            <p>
              You keep talking to your agent normally. The repository carries enough memory for the
              next chat to start with context.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
