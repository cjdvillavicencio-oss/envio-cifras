import { build } from "esbuild";
import { rm } from "node:fs/promises";

await rm("dist-electron", { recursive: true, force: true });
await build({ entryPoints: ["electron/main.ts"], bundle: true, platform: "node", format: "cjs", outfile: "dist-electron/main.cjs", external: ["electron", "better-sqlite3", "@azure/msal-node"], sourcemap: true });
await build({ entryPoints: ["electron/preload.ts"], bundle: true, platform: "node", format: "cjs", outfile: "dist-electron/preload.cjs", external: ["electron"], sourcemap: true });
