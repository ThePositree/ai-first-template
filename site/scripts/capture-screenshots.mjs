import { mkdir } from "node:fs/promises";
import path from "node:path";

import { chromium, devices } from "@playwright/test";

const url = process.env.SITE_URL ?? process.argv[2] ?? "http://localhost:3000";
const outputDir = path.resolve(process.env.PLAYWRIGHT_SCREENSHOT_DIR ?? "../tmp/playwright/site");

const targets = [
  {
    name: "desktop",
    options: {
      deviceScaleFactor: 1,
      viewport: { height: 1000, width: 1440 },
    },
  },
  {
    name: "mobile",
    options: devices["iPhone 15"],
  },
];

const themes = ["light", "dark"];

async function capture() {
  await mkdir(outputDir, { recursive: true });

  const browser = await chromium.launch();

  try {
    for (const theme of themes) {
      for (const target of targets) {
        const context = await browser.newContext(target.options);
        await context.addInitScript((nextTheme) => {
          window.localStorage.setItem("theme", nextTheme);
        }, theme);

        const page = await context.newPage();
        await page.goto(url, { timeout: 60_000, waitUntil: "domcontentloaded" });
        await page.waitForLoadState("load", { timeout: 60_000 });
        await page.waitForFunction(
          () => [...document.images].every((image) => image.complete && image.naturalWidth > 0),
          null,
          { timeout: 60_000 },
        );
        await page.locator("html").evaluate((html, nextTheme) => {
          html.classList.toggle("dark", nextTheme === "dark");
          html.style.colorScheme = nextTheme;
        }, theme);

        const screenshotPath = path.join(outputDir, `${target.name}-${theme}.png`);
        await page.screenshot({ fullPage: true, path: screenshotPath });
        await context.close();

        console.log(`${target.name}-${theme}: ${screenshotPath}`);
      }
    }
  } finally {
    await browser.close();
  }
}

capture().catch((error) => {
  console.error(`Playwright screenshot capture failed for ${url}.`);
  console.error("For a first WSL setup, install the browser and Linux dependencies:");
  console.error("  pnpm --filter @ai-first/site exec playwright install chromium");
  console.error("  sudo pnpm --filter @ai-first/site exec playwright install-deps chromium");
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
