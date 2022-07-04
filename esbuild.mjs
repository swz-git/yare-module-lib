import esbuild from "esbuild";

esbuild
  .build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    outdir: "dist",
    sourcemap: "external",
    minify: true,
    splitting: true,
    target: ["esnext"],
    treeShaking: true,
    format: "esm",
  })
  .catch(() => process.exit(1));
