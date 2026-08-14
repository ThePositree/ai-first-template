"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

type CopyCommandButtonProps = {
  command: string;
};

export function CopyCommandButton({ command }: CopyCommandButtonProps) {
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
      className="h-10 rounded-xl bg-cyan-100 px-5 text-sm text-[#061019] hover:bg-white"
    >
      {copied ? "Copied" : "Copy command"}
    </Button>
  );
}
