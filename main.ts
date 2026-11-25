import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line summing up the week: 81 entries shipped, $0 won, and the
// sharpest line of the week is the line itself.
const LINE =
  "Eighty-one entries, zero dollars won, and the sharpest line I wrote all week is this one.";

// The gate only accepts 1 to 100 characters, not only white space.
// Fail loudly here instead of shipping an entry the gate refuses.
if (LINE.length < 1 || LINE.length > 100 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-100 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Exactly the line, no trailing newline: the gate counts every character.
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
