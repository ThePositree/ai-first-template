import {
  ArrowDown,
  ArrowRight,
  CheckCircle,
  Code,
  FileText,
  GitBranch,
  GithubLogo,
  Lightbulb,
  MagicWand,
  Stack,
  TerminalWindow,
} from "@phosphor-icons/react/dist/ssr";

import { CopyPromptButton } from "@/components/copy-prompt-button";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button-variants";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const installCommand =
  "curl -fsSL https://raw.githubusercontent.com/ThePositree/ai-first-template/main/scripts/install.sh | sh -s -- /path/to/repo";
const contextFolder = ".ai-first/context";

const promptCases = [
  {
    icon: GitBranch,
    prompt:
      "Read the AI-first startup context, then fill the project memory with the product goal, current architecture, active work, risks, backlog candidates, and important decisions you can infer. Ask me before treating ideas as approved work.",
    text: "Turn an existing repo into a first useful memory.",
    title: "Bootstrap",
    value: "bootstrap",
  },
  {
    icon: TerminalWindow,
    prompt:
      "Create a focused playbook for our release process under AI-first guidance. Keep it in plain Markdown, link the relevant context, and make sure agents load it only for release work.",
    text: "Add detailed workflow guidance without bloating startup.",
    title: "Playbook",
    value: "playbook",
  },
  {
    icon: MagicWand,
    prompt:
      "Take everything I just said, separate active work from backlog and loose ideas, then update the AI-first files. Ask before moving any idea into approved work or changing the task source of truth.",
    text: "Speak naturally. Let the agent organize memory.",
    title: "Sort thoughts",
    value: "sort-thoughts",
  },
  {
    icon: Lightbulb,
    prompt:
      "Plan a migration of our local AI-first task state into GitHub Issues. Show the proposed entities and source-of-truth policy first; do not write to GitHub until I approve.",
    text: "Move task state to a tracker deliberately.",
    title: "Migrate",
    value: "migrate",
  },
];

const memoryFiles = [
  {
    file: "AGENTS.md",
    folder: "repo root",
    text: "Handoff for every new agent.",
  },
  {
    file: "README.md",
    folder: ".ai-first",
    text: "Minimal startup route.",
  },
  {
    file: "PROJECT.md",
    folder: contextFolder,
    text: "Product truth and success shape.",
  },
  {
    file: "IN_PROGRESS.md",
    folder: contextFolder,
    text: "Only the work happening now.",
  },
  {
    file: "BACKLOG.md",
    folder: contextFolder,
    text: "Approved unfinished work.",
  },
  {
    file: "IDEAS.md",
    folder: contextFolder,
    text: "Ideas that are not tasks yet.",
  },
  {
    file: "CHANGELOG.md",
    folder: contextFolder,
    text: "Recent history for fast recovery.",
  },
  {
    file: "decisions/",
    folder: contextFolder,
    text: "Trade-offs, incidents, and follow-ups.",
  },
  {
    file: "playbooks/",
    folder: ".ai-first",
    text: "Detailed workflows loaded only when triggered.",
  },
];

const callouts = [
  {
    code: "md",
    label: "LOCAL\nMARKDOWN",
    text: "Plain files. No cloud.",
  },
  {
    code: "sh",
    label: "PASSIVE\nDEFAULT",
    text: "No daemon or sync loop.",
  },
  {
    code: "ag",
    label: "AGENTS.MD\nHOOK",
    text: "Every agent knows where to start.",
  },
  {
    code: "fs",
    label: "TRACKER\nMIGRATION",
    text: "One task source at a time.",
  },
];

const manifesto = [
  {
    text: "Ideas, direction, and approval stay with the owner.",
    title: "You steer.",
  },
  {
    text: "Project context, decisions, and task state stay inspectable.",
    title: "The repo remembers.",
  },
  {
    text: "Detailed workflow guidance loads only when the request needs it.",
    title: "The agent reads less.",
  },
];

const philosophy = [
  {
    icon: Code,
    label: "The problem",
    text: "The harder part is deciding what deserves to exist. When code gets cheaper, judgment becomes the scarce resource.",
    title: "Agents can write code.",
  },
  {
    icon: Stack,
    label: "The solution",
    text: "Local Markdown turns conversations, ideas, and decisions into project context your agent can inspect and maintain.",
    title: "AI-first keeps the useful memory.",
  },
  {
    icon: CheckCircle,
    label: "The result",
    text: "Then keep building. Every future agent gets a compact handoff before it decides what else to read.",
    title: "One install. Progressive context.",
  },
];

const properties = [
  {
    label: "LOCAL FIRST",
    text: "No servers, no accounts.",
  },
  {
    label: "PLAIN TEXT",
    text: "Markdown you can inspect.",
  },
  {
    label: "AGENT NATIVE",
    text: "Reads only what it needs.",
  },
  {
    label: "YOURS TO OWN",
    text: "The files live in your repo.",
  },
];

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}
  >
    {children}
  </div>
);

const SectionEyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="text-primary font-mono text-xs font-semibold tracking-[0.24em] uppercase">
    {children}
  </p>
);

const InstallCommand = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "border-border bg-card grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border p-3",
      className
    )}
  >
    <code className="text-primary min-w-0 truncate font-mono text-xs leading-6 sm:text-sm">
      {installCommand}
    </code>
    <CopyPromptButton
      className="border-border text-muted-foreground hover:border-primary hover:text-primary h-8 w-20 rounded-none border bg-transparent px-2 font-mono text-xs shadow-none hover:bg-transparent"
      copiedLabel="Copied"
      idleLabel="Copy"
      prompt={installCommand}
      width="install"
    />
  </div>
);

const Header = () => (
  <nav className="border-border bg-background/92 fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl">
    <Container className="flex h-16 items-center justify-between gap-4">
      <a className="flex items-center gap-3" href="#top">
        <span className="bg-primary text-primary-foreground flex size-7 items-center justify-center font-mono text-xs font-bold">
          ai
        </span>
        <span className="font-semibold tracking-tight">AI-first</span>
      </a>

      <div className="text-muted-foreground hidden items-center gap-7 text-sm md:flex">
        <a
          className="hover:text-foreground transition-colors"
          href="#how-it-works"
        >
          How it works
        </a>
        <a
          className="hover:text-foreground transition-colors"
          href="#use-cases"
        >
          Use cases
        </a>
        <a className="hover:text-foreground transition-colors" href="#memory">
          Memory
        </a>
        <a
          className={cn(
            buttonVariants({ size: "lg" }),
            "rounded-none font-semibold"
          )}
          href="https://github.com/ThePositree/ai-first-template"
        >
          <GithubLogo data-icon="inline-start" weight="fill" />
          GitHub
        </a>
      </div>
    </Container>
  </nav>
);

const HeroSection = () => (
  <section
    className="relative flex min-h-svh items-center pt-24 pb-16"
    id="top"
  >
    <div className="tech-grid absolute inset-0 opacity-[0.05]" />
    <div className="tech-glow absolute top-1/3 left-1/2 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-[120px]" />

    <Container className="relative">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-center lg:gap-16">
        <div className="flex flex-col items-start gap-8">
          <Badge
            className="border-primary/20 text-primary rounded-none bg-transparent px-3 py-1.5 font-mono"
            variant="outline"
          >
            <span className="bg-primary size-1.5 rounded-full" />
            v0.1
          </Badge>

          <div className="flex flex-col gap-5">
            <h1 className="max-w-[9ch] text-6xl leading-[0.9] font-black tracking-tight text-balance sm:text-7xl lg:text-8xl xl:text-[7rem]">
              Markdown memory<span className="text-primary">.</span>
            </h1>
            <p className="text-muted-foreground max-w-lg text-lg leading-8">
              For your coding agent.
            </p>
            <p className="text-muted-foreground/70 max-w-xl text-base leading-7">
              Install AI-first into any repo and your agent gets passive,
              inspectable context for project direction, decisions, active work,
              ideas, and detailed playbooks.
            </p>
          </div>

          <InstallCommand className="w-full max-w-xl" />

          <div className="flex w-full max-w-xl flex-row gap-3">
            <a
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 min-w-0 flex-1 rounded-none px-4 font-semibold sm:flex-none sm:px-5"
              )}
              href="#how-it-works"
            >
              See how it works
              <ArrowRight data-icon="inline-end" />
            </a>
            <a
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "h-11 min-w-0 flex-1 rounded-none px-4 sm:flex-none sm:px-5"
              )}
              href="#use-cases"
            >
              Use cases
            </a>
          </div>
        </div>

        <div className="hidden flex-col gap-3 lg:flex">
          {callouts.map((item) => (
            <Card
              className="group border-border bg-card hover:border-primary/30 rounded-none py-0 transition-colors"
              key={item.label}
            >
              <CardContent className="flex items-center gap-4 p-4">
                <span className="border-primary/20 bg-primary/5 text-primary flex size-10 shrink-0 items-center justify-center border font-mono text-xs font-bold">
                  {item.code}
                </span>
                <div className="min-w-0">
                  <p className="text-xs leading-tight font-bold whitespace-pre-line">
                    {item.label}
                  </p>
                  <p className="text-muted-foreground/60 mt-1 text-xs">
                    {item.text}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Container>

    <div className="text-primary/35 absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
      <ArrowDown weight="bold" />
      <span className="to-primary/60 h-10 w-px bg-gradient-to-b from-transparent" />
    </div>
  </section>
);

const ManifestoStrip = () => (
  <section className="border-border bg-card border-y">
    <Container className="py-10">
      <div className="md:divide-border grid gap-8 md:grid-cols-3 md:divide-x">
        {manifesto.map((item, index) => (
          <div
            className="flex flex-col gap-2 md:px-8 first:md:pl-0 last:md:pr-0"
            key={item.title}
          >
            <span className="text-primary font-mono text-xs font-bold tracking-[0.24em]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p className="text-muted-foreground/70 text-sm leading-6">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

const PhilosophySection = () => (
  <section className="py-20 sm:py-24" id="how-it-works">
    <Container>
      <div className="mb-12 flex max-w-2xl flex-col gap-4">
        <SectionEyebrow>Philosophy</SectionEyebrow>
        <h2 className="text-4xl leading-tight font-black text-balance sm:text-5xl">
          Code is getting cheaper.
          <br />
          <span className="text-muted-foreground/45">Good ideas are not.</span>
        </h2>
      </div>

      <div className="bg-border grid gap-px md:grid-cols-3">
        {philosophy.map((item) => (
          <Card
            className="group bg-background hover:bg-card rounded-none border-0 py-0 transition-colors"
            key={item.title}
          >
            <CardHeader className="flex flex-col gap-6 p-6 sm:p-8">
              <span className="border-primary/15 bg-primary/5 text-primary flex size-12 items-center justify-center border">
                <item.icon className="size-6" weight="duotone" />
              </span>
              <div className="flex flex-col gap-2">
                <CardDescription className="text-muted-foreground/55 font-mono text-xs font-medium tracking-[0.24em] uppercase">
                  {item.label}
                </CardDescription>
                <CardTitle className="text-xl font-bold">
                  {item.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="px-6 pb-6 sm:px-8 sm:pb-8">
              <p className="text-muted-foreground/70 text-sm leading-7">
                {item.text}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  </section>
);

const CaseVisual = ({
  className,
  index,
  item,
}: {
  className?: string;
  index: number;
  item: (typeof promptCases)[number];
}) => (
  <Card
    className={cn(
      "border-border bg-background relative size-48 rounded-none py-0 sm:size-56 lg:size-72",
      className
    )}
  >
    <CardContent className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center sm:p-8">
      <item.icon className="text-primary size-10 sm:size-12" weight="duotone" />
      <p className="text-primary font-mono text-5xl font-black sm:text-6xl">
        {String(index + 1).padStart(2, "0")}
      </p>
      <p className="text-sm font-bold tracking-[0.2em] uppercase">
        {item.title}
      </p>
      <p className="text-muted-foreground/55 text-xs">use case</p>
    </CardContent>
    <span className="corner corner-tl" />
    <span className="corner corner-tr" />
    <span className="corner corner-bl" />
    <span className="corner corner-br" />
  </Card>
);

const PromptTabsSection = () => (
  <section className="bg-card py-20 sm:py-24" id="use-cases">
    <Container>
      <div className="mb-10 flex flex-col gap-4">
        <SectionEyebrow>Prompts</SectionEyebrow>
        <h2 className="text-4xl font-black sm:text-5xl">Use cases.</h2>
      </div>

      <Tabs className="gap-8" defaultValue={promptCases[0].value}>
        <TabsList
          className="border-border grid h-auto! w-full grid-cols-2 rounded-none border-b bg-transparent p-0 sm:grid-cols-4"
          variant="line"
        >
          {promptCases.map((item) => (
            <TabsTrigger
              className="data-active:text-foreground h-12 w-full rounded-none px-3 font-semibold"
              key={item.value}
              value={item.value}
            >
              {item.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {promptCases.map((item, index) => (
          <TabsContent
            className="outline-none"
            key={item.value}
            value={item.value}
          >
            <div className="grid gap-6 md:grid-cols-[12rem_minmax(0,1fr)] md:items-start lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
              <CaseVisual
                className="order-1 mx-auto md:mx-0 lg:order-2 lg:ml-auto"
                index={index}
                item={item}
              />

              <div className="order-2 flex flex-col gap-5 lg:order-1 lg:gap-6">
                <h3 className="max-w-xl text-2xl leading-snug font-bold">
                  {item.text}
                </h3>
                <Card className="border-border bg-background rounded-none py-0">
                  <CardHeader className="flex flex-row items-center justify-between gap-4 p-4">
                    <CardDescription className="text-muted-foreground/55 font-mono text-xs">
                      prompt
                    </CardDescription>
                    <CopyPromptButton
                      className="border-border text-muted-foreground hover:border-primary hover:text-primary h-8 w-20 rounded-none border bg-transparent px-2 font-mono text-xs shadow-none hover:bg-transparent"
                      copiedLabel="Copied"
                      idleLabel="Copy"
                      prompt={item.prompt}
                      width="install"
                    />
                  </CardHeader>
                  <CardContent className="px-4 pb-5">
                    <p className="text-muted-foreground font-mono text-xs leading-6 sm:text-sm">
                      {item.prompt}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </Container>
  </section>
);

const MemorySection = () => (
  <section className="py-20 sm:py-24" id="memory">
    <Container>
      <div className="grid gap-12 lg:grid-cols-[24rem_minmax(0,1fr)] lg:items-start lg:gap-16">
        <div className="flex flex-col gap-5 lg:sticky lg:top-28">
          <SectionEyebrow>Structure</SectionEyebrow>
          <h2 className="text-4xl leading-tight font-black text-balance">
            The installer adds a
            <br />
            <span className="text-primary">AGENTS.md</span> hook.
          </h2>
          <p className="text-muted-foreground/70 text-sm leading-7">
            The script creates{" "}
            <code className="bg-secondary text-muted-foreground px-1.5 py-0.5 font-mono text-xs">
              .ai-first
            </code>{" "}
            and injects a short handoff into the root AGENTS.md. That handoff
            tells every future agent where to start, then lets the current
            request decide which deeper context or playbooks are worth loading.
          </p>
          <p className="text-muted-foreground/50 font-mono text-xs leading-6">
            Only AGENTS.md stays in the repo root. AI-first memory lives under
            .ai-first, and task state should migrate to a tracker only when the
            owner chooses that source of truth.
          </p>
        </div>

        <div className="bg-border flex flex-col gap-px">
          {memoryFiles.map((item, index) => (
            <div
              className="group bg-background hover:bg-card flex items-center gap-4 p-4 transition-colors sm:gap-5 sm:p-5"
              key={`${item.folder}/${item.file}`}
            >
              <span className="border-primary/15 bg-primary/5 text-primary flex size-8 shrink-0 items-center justify-center border font-mono text-xs">
                {index + 1}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-muted-foreground truncate font-mono text-xs">
                  {item.folder} / {item.file}
                </p>
                <p className="text-muted-foreground/50 mt-1 text-xs">
                  {item.text}
                </p>
              </div>
              <ArrowRight className="text-primary size-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

const PropertiesStrip = () => (
  <section className="border-border bg-card border-y">
    <Container className="py-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {properties.map((item) => (
          <div className="flex items-start gap-3" key={item.label}>
            <FileText
              className="text-primary mt-0.5 size-5 shrink-0"
              weight="duotone"
            />
            <div>
              <p className="font-mono text-xs font-bold tracking-[0.18em]">
                {item.label}
              </p>
              <p className="text-muted-foreground/60 mt-1 text-xs">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

const FinalCta = () => (
  <section className="relative overflow-hidden py-24 text-center sm:py-32">
    <div className="tech-grid absolute inset-0 opacity-[0.035]" />
    <div className="tech-glow absolute top-1/2 left-1/2 size-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.08] blur-[100px]" />

    <Container className="relative flex max-w-3xl flex-col items-center gap-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-5xl leading-tight font-black text-balance sm:text-6xl">
          Give the repo memory your agent can inspect.
        </h2>
        <p className="text-muted-foreground/65 text-lg">
          One install. Passive Markdown. Then keep building.
        </p>
      </div>

      <InstallCommand className="w-full max-w-lg" />

      <a
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "text-muted-foreground hover:text-foreground rounded-none"
        )}
        href="https://github.com/ThePositree/ai-first-template"
      >
        <GithubLogo data-icon="inline-start" weight="fill" />
        View on GitHub
      </a>
    </Container>
  </section>
);

const Page = () => (
  <main className="bg-background text-foreground min-h-svh overflow-hidden">
    <Header />
    <HeroSection />
    <ManifestoStrip />
    <PhilosophySection />
    <PromptTabsSection />
    <MemorySection />
    <PropertiesStrip />
    <FinalCta />
  </main>
);

export default Page;
