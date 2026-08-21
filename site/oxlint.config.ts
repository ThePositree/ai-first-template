import { defineConfig } from "oxlint";
import core from "ultracite/oxlint/core";
import jsPlugins from "ultracite/oxlint/js-plugins";
import next from "ultracite/oxlint/next";
import nextJsPlugins from "ultracite/oxlint/next/js-plugins";
import react from "ultracite/oxlint/react";

const jsPluginSettings = {
  "react-doctor": {
    portedRuleMode: "curated",
  },
};

export default defineConfig({
  extends: [core, react, next, jsPlugins, nextJsPlugins],
  ignorePatterns: core.ignorePatterns,
  settings: jsPluginSettings,
});
