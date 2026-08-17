"use client";

import * as React from "react";
import { Moon, Sun } from "@phosphor-icons/react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Button
      type="button"
      variant="ghost"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="size-10 rounded-xl border border-[var(--shop-line)] bg-[var(--shop-chip)] p-0 text-[var(--shop-ink)] hover:bg-[var(--shop-chip-hover)]"
    >
      {mounted && isDark ? <Moon size={19} weight="duotone" /> : <Sun size={19} weight="duotone" />}
    </Button>
  );
}
