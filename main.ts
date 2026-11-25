// Your Week in One Line: sums up the entrant's own week in one line.
// The line: 82 chars, one line, inside the 1-100 char gate.
// Revision: verified output matches the chosen line exactly, byte for byte.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const line = "Shipped five bounties, broke two builds, and Friday paid me in snacks and a shrug.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
