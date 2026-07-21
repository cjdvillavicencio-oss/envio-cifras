import path from "node:path";
import { fileURLToPath } from "node:url";
import { rm } from "node:fs/promises";
import { build } from "esbuild";
const root = path.dirname(fileURLToPath(import.meta.url));
await rm(path.join(root, "dist"), { recursive: true, force: true });
await build({ entryPoints: [path.join(root, "src/index.ts")], platform: "node", bundle: true, format: "esm", outdir: path.join(root, "dist"), outExtension: { ".js": ".mjs" }, sourcemap: true, external: ["mysql2", "*.node", "nodemailer", "dotenv"] });
