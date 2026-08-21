import type { Metadata } from "next";
import { Geist_Mono, Raleway } from "next/font/google";

import "./globals.css";
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
  description: "A tiny task tracker for AI coding agents.",
  title: "AI-first",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html
    lang="en"
    className={cn(
      "antialiased",
      fontMono.variable,
      "font-sans",
      raleway.variable
    )}
  >
    <body>{children}</body>
  </html>
);

export default RootLayout;
