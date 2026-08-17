"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

type CopyCommandButtonProps = {
  command: string;
  copiedLabel?: string;
  label?: string;
};

export function CopyCommandButton({
  command,
  copiedLabel = "Copied",
  label = "Copy command",
}: CopyCommandButtonProps) {
  const [copied, setCopied] = React.useState(false);

  async function onCopy() {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <Button
      type="button"
      onClick={onCopy}
      className="h-10 rounded-xl border border-[var(--shop-amber-edge)] bg-[var(--shop-amber)] px-4 font-mono text-xs font-black text-[var(--shop-amber-ink)] shadow-[0_2px_0_var(--shop-amber-edge),0_10px_18px_rgba(40,22,8,0.2)] hover:-translate-y-0.5 hover:bg-[var(--shop-amber-hover)] active:translate-y-0.5 active:shadow-[0_1px_0_var(--shop-amber-edge),0_5px_10px_rgba(40,22,8,0.16)]"
    >
      {copied ? copiedLabel : label}
    </Button>
  );
}
