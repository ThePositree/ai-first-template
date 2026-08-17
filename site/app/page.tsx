import Image from "next/image";
import {
  BookOpen,
  ClipboardText,
  ClockCounterClockwise,
  Files,
  GitBranch,
  Lightbulb,
  Package,
  RocketLaunch,
  TreeStructure,
} from "@phosphor-icons/react/dist/ssr";

import { CopyCommandButton } from "@/components/copy-command-button";
import { AgentLantern3D } from "@/components/agent-lantern-3d";
import { ThemeToggle } from "@/components/theme-toggle";

const installCommand = "curl -fsSL https://ai-first.dev/install | sh";

const bootstrapPrompt = `Read this repository and initialize AI-first context.

Fill .ai-first/context/PROJECT.md, VISION.md, REQUIREMENTS.md, ARCHITECTURE.md, IN_PROGRESS.md, BACKLOG.md, IDEAS.md, and CHANGELOG.md from the codebase and our chat.

Keep assumptions explicit. Do not invent approved tasks. Ask before moving ideas into backlog or changing product direction.`;

const shopDrawers = [
  { label: "Product truth", file: "PROJECT.md", Icon: Package },
  { label: "Current work", file: "IN_PROGRESS.md", Icon: ClipboardText },
  { label: "Approved queue", file: "BACKLOG.md", Icon: Files },
  { label: "Ideas", file: "IDEAS.md", Icon: Lightbulb },
  { label: "System shape", file: "ARCHITECTURE.md", Icon: TreeStructure },
  { label: "Recent trail", file: "CHANGELOG.md", Icon: ClockCounterClockwise },
];

const storySteps = [
  {
    title: "The sign goes up",
    body: "Run the installer once. The repository gets its own handoff files.",
    Icon: RocketLaunch,
  },
  {
    title: "The shelves get stocked",
    body: "Your agent fills memory, tasks, decisions, and recent history.",
    Icon: BookOpen,
  },
  {
    title: "The next visit starts warm",
    body: "Fresh chats read the shop inventory before touching code.",
    Icon: GitBranch,
  },
];

function ShopPanel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[1.35rem] border border-[var(--shop-line)] bg-[var(--shop-paper)] ${className}`}
    >
      {children}
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-svh bg-[var(--shop-bg)] text-[var(--shop-ink)] selection:bg-[var(--shop-amber)] selection:text-[var(--shop-amber-ink)]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--shop-line)] bg-[var(--shop-nav)]/84 text-[var(--shop-nav-ink)] backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3 text-sm font-black">
            <span className="grid size-10 place-items-center rounded-xl bg-[var(--shop-chip)] text-[var(--shop-ink)] shadow-[inset_0_-3px_0_var(--shop-inset)]">
              <Package size={22} weight="duotone" />
            </span>
            AI-first
          </a>
          <div className="hidden items-center gap-7 text-sm font-bold text-[var(--shop-nav-muted)] md:flex">
            <a href="#existing" className="hover:text-[var(--shop-nav-ink)]">
              Existing repo
            </a>
            <a href="#inside" className="hover:text-[var(--shop-nav-ink)]">
              Inside
            </a>
            <a href="#details" className="hover:text-[var(--shop-nav-ink)]">
              Details
            </a>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <CopyCommandButton command={installCommand} />
          </div>
        </nav>
      </header>

      <section id="home" className="relative min-h-svh overflow-hidden">
        <Image
          src="/illustrations/wooden-shop-hero.png"
          alt="A cozy wooden shop counter with repository memory bundles and a glowing agent lantern."
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--shop-hero-shade)_0%,rgba(0,0,0,0.24)_48%,rgba(0,0,0,0.04)_100%)]" />
        <AgentLantern3D />
        <div className="relative mx-auto flex min-h-svh max-w-7xl items-end px-4 pb-12 pt-28 lg:px-8 lg:pb-16">
          <div className="max-w-2xl">
            <h1 className="text-balance text-6xl font-black leading-[0.9] tracking-[-0.035em] text-[var(--shop-hero-ink)] md:text-8xl">
              One command is enough.
            </h1>
            <ShopPanel className="mt-8 max-w-xl bg-[var(--shop-paper-strong)]/94 p-3 shadow-[var(--shop-shadow)] backdrop-blur-sm">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <code className="min-w-0 flex-1 overflow-x-auto rounded-2xl bg-[var(--shop-code)] px-4 py-3 font-mono text-sm font-bold text-[var(--shop-code-ink)]">
                  {installCommand}
                </code>
                <CopyCommandButton command={installCommand} />
              </div>
            </ShopPanel>
          </div>
        </div>
      </section>

      <section id="existing" className="relative overflow-hidden px-4 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-[1.75rem] shadow-[var(--shop-image-shadow)]">
              <Image
                src="/illustrations/wooden-shop-prompt.png"
                alt="An open instruction card on a wooden shop counter with repository file bundles."
                width={1536}
                height={1024}
                className="aspect-[3/2] object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="max-w-xl text-balance text-5xl font-black leading-[0.96] tracking-[-0.03em] md:text-6xl">
              Already have a repo?
            </h2>
            <p className="mt-5 max-w-xl text-lg font-semibold leading-8 text-[var(--shop-muted)]">
              Install AI-first, then ask your agent to stock the shelves.
            </p>
            <ShopPanel className="mt-8 overflow-hidden shadow-[var(--shop-shadow)]">
              <div className="border-b border-[var(--shop-line)] bg-[var(--shop-wood)] px-5 py-4 text-sm font-black text-[var(--shop-wood-ink)]">
                Prompt for your agent
              </div>
              <pre className="max-h-[22rem] overflow-auto whitespace-pre-wrap p-5 font-mono text-sm font-bold leading-6 text-[var(--shop-ink)]">
                {bootstrapPrompt}
              </pre>
              <div className="border-t border-[var(--shop-line)] p-4">
                <CopyCommandButton
                  command={bootstrapPrompt}
                  label="Copy prompt"
                  copiedLabel="Prompt copied"
                />
              </div>
            </ShopPanel>
          </div>
        </div>
      </section>

      <section
        id="inside"
        className="relative overflow-hidden bg-[var(--shop-band)] px-4 py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <h2 className="text-balance text-5xl font-black leading-[0.96] tracking-[-0.03em] md:text-6xl">
                What gets placed inside.
              </h2>
              <p className="mt-5 max-w-xl text-lg font-semibold leading-8 text-[var(--shop-muted)]">
                Plain Markdown files, organized for the next agent visit.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {shopDrawers.map(({ label, file, Icon }) => (
                <ShopPanel
                  key={file}
                  className="group p-4 shadow-[var(--shop-small-shadow)] transition duration-200 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-3">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[var(--shop-chip)] text-[var(--shop-ink)] shadow-[inset_0_-3px_0_var(--shop-inset)]">
                      <Icon size={24} weight="duotone" />
                    </span>
                    <span>
                      <span className="block text-lg font-black leading-tight">{label}</span>
                      <span className="mt-1 block font-mono text-xs font-bold text-[var(--shop-muted)]">
                        {file}
                      </span>
                    </span>
                  </div>
                </ShopPanel>
              ))}
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-[1.75rem] shadow-[var(--shop-image-shadow)]">
            <Image
              src="/illustrations/wooden-shop-shelves.png"
              alt="Wooden shop shelves filled with organized repository memory drawers and paper bundles."
              width={1536}
              height={1024}
              className="aspect-[16/8] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="details" className="px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <h2 className="max-w-xl text-balance text-5xl font-black leading-[0.96] tracking-[-0.03em] md:text-6xl">
                Want the full tour? Keep scrolling.
              </h2>
              <p className="mt-5 max-w-xl text-lg font-semibold leading-8 text-[var(--shop-muted)]">
                The rest is just the shop inventory: what AI-first installs, why agents read it, and
                how tasks stay local.
              </p>
            </div>
            <div className="grid gap-4">
              {storySteps.map(({ title, body, Icon }) => (
                <ShopPanel key={title} className="p-5 shadow-[var(--shop-small-shadow)]">
                  <div className="grid gap-4 sm:grid-cols-[3.5rem_1fr]">
                    <span className="grid size-12 place-items-center rounded-xl bg-[var(--shop-chip)] text-[var(--shop-ink)] shadow-[inset_0_-3px_0_var(--shop-inset)]">
                      <Icon size={26} weight="duotone" />
                    </span>
                    <span>
                      <span className="block text-2xl font-black tracking-[-0.015em]">{title}</span>
                      <span className="mt-2 block text-base font-semibold leading-7 text-[var(--shop-muted)]">
                        {body}
                      </span>
                    </span>
                  </div>
                </ShopPanel>
              ))}
            </div>
          </div>

          <ShopPanel className="mt-12 overflow-hidden shadow-[var(--shop-shadow)]">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
              <div className="bg-[var(--shop-wood)] p-6 text-[var(--shop-wood-ink)] lg:p-8">
                <h3 className="text-4xl font-black leading-none tracking-[-0.025em]">
                  Local files. No permanent command surface.
                </h3>
              </div>
              <div className="grid gap-3 p-5 font-mono text-sm font-bold lg:p-8">
                {[
                  "AGENTS.md -> read first",
                  ".ai-first/context -> memory",
                  "BACKLOG.md -> approved work",
                  "IDEAS.md -> reminders only",
                ].map((item) => (
                  <div key={item} className="rounded-xl bg-[var(--shop-chip)] px-4 py-3">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </ShopPanel>
        </div>
      </section>
    </main>
  );
}
