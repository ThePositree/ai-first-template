"use client";

import { Check, Copy } from "@phosphor-icons/react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CopyPromptButtonProps {
  className?: string;
  copiedLabel?: string;
  idleLabel?: string;
  prompt: string;
  width?: "install" | "prompt";
}

const CopyPromptButton = ({
  className,
  copiedLabel = "Copied",
  idleLabel = "Copy prompt",
  prompt,
  width = "prompt",
}: CopyPromptButtonProps) => {
  const [copied, setCopied] = useState(false);

  const copyPrompt = async () => {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <Button
      aria-label={copied ? copiedLabel : idleLabel}
      className={cn(
        "h-10 shrink-0 rounded-2xl bg-[#24443c] px-4 text-[#fff8e9] shadow-[inset_0_2px_2px_rgba(255,255,255,0.14),0_10px_22px_rgba(36,68,60,0.18)] hover:bg-[#31584f]",
        width === "install" ? "w-20 sm:w-24" : "w-32",
        className
      )}
      onClick={copyPrompt}
      size="lg"
      type="button"
    >
      {copied ? (
        <>
          {copiedLabel}
          <Check data-icon="inline-end" weight="bold" />
        </>
      ) : (
        <>
          {idleLabel}
          <Copy data-icon="inline-end" weight="bold" />
        </>
      )}
    </Button>
  );
};

export { CopyPromptButton };
