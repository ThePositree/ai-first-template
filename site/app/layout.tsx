import { Geist_Mono, Raleway } from "next/font/google";
import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "AI-first",
  description: "A local memory layer for AI-assisted repositories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", raleway.variable)}
    >
      <body>
        <div
          hidden
          data-impeccable-contract="THESIS: AI-first is a flight recorder for AI agents, not another generic AI SaaS hero. OWN-WORLD: dark recorder console, cyan instrument light, amber owner signal, file strips as telemetry. STORY: install once, agent reads the record, fresh chats recover context. FIRST VIEWPORT: oversized recorder headline left, command and constraints below, active recovery unit right. FORM: Repository Flight Recorder, seed f69040c2. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md"
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
