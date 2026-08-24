const nodeBundle = (input, file) => ({
  input,
  output: {
    banner: "#!/usr/bin/env node",
    file,
    format: "esm",
  },
  platform: "node",
});

export default [nodeBundle("src/installer/install.ts", "dist/install.js")];
