export default {
  input: "src/installer/install.ts",
  platform: "node",
  output: {
    file: "dist/install.js",
    format: "esm",
    banner: "#!/usr/bin/env node",
  },
};
