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
          data-impeccable-contract="THESIS: AI-first is a one-command warm start for agents inheriting a repository, not a generic SaaS explanation page. OWN-WORLD: cozy wooden shop, walnut shelves, cream paper bundles, brass labels, amber lantern light, tactile cartoon realism, and one live Three.js lantern-keeper character. STORY: one command opens the shop; existing repositories can ask their agent to stock AI-first files with a ready prompt; deeper sections show the shelves inside. FIRST VIEWPORT: full-bleed wooden-shop hero image with the line 'One command is enough' and the install command at bottom left, balanced by an unframed floating 3D agent lantern on the right. FORM: Cozy Wooden Repository Shop, user-pinned playful product-world craft, seed e2ed67b9. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance"
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
