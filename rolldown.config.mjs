export default {
  input: "src/installer/install.ts",
  output: {
    banner: "#!/usr/bin/env node",
    file: "dist/install.js",
    format: "esm",
  },
  platform: "node",
};
