// Angry Judge: The Short Rant Contest — entry program (Node 22, stdlib only).
// Writes one short, funny rant about an everyday annoyance to entry.txt.
// The rant: a one-word reply ("Noted.") to three hours of work — shared office rage,
// specific, economical, and the punch lands on the last word.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const RANT =
  "Noted. One word, no punctuation, no thanks. I poured three hours into that report and you 'noted' it like a parking ticket.";

// Gate guard: the sealed scorer requires UTF-8 text of 1 to 400 characters,
// not only white space. Fail loudly instead of shipping a bad file.
if (RANT.length < 1 || RANT.length > 400 || RANT.trim().length === 0) {
  throw new Error(`rant out of gate: ${RANT.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), RANT, "utf8");
