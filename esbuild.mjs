import esbuild from "esbuild";

esbuild
  .build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    outfile: "dist/bundle.js",
    sourcemap: "external",
    minify: true,
    treeShaking: true,
    format: "esm",
  })
  .catch(() => process.exit(1));
