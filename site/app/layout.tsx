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
          data-impeccable-contract="THESIS: AI-first is a repository memory terrarium where real HTML controls sit inside a 3D clay-paper workspace, not a flat SaaS page with a mascot or one decorative model. OWN-WORLD: muted sage canvas, peach paper slabs, mint/sky accents, rare coral, amber command pulses, soft rounded-square UI, foliage edges, and Blender-authored diorama scenes. STORY: the install command stocks a memory shelf, an existing-repo note crosses handoff trays, and local Markdown files become the stable archive. FIRST VIEWPORT: no header, brand stamp and copyable command dock on the left, large hero terrarium scene on the right, HTML file labels and notes pinned into the 3D plate. FORM: Repository Memory Terrarium, user-pinned 3D-first replacement world from root JPG references, seed user-approved-terrarium. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance"
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
