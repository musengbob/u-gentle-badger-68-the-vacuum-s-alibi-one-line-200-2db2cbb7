// The Vacuum's Alibi — one-line entry program (program/v1 harness).
// Writes the vacuum's alibi to /output/entry.txt and validates the gate:
// UTF-8 text, 1–200 characters, not only whitespace.
//
// The line itself, in the machine's own deadpan voice: it logged the crumb,
// mapped it, then formally deprioritised it — smug about its sensors and its
// schedule — and the punch lands at the end, where the battery, at 4%, has
// acquired a union rep and refuses to work for free. Counted in Unicode code
// points (136), well under the 200-character cap, so the gate passes on
// characters and bytes alike (the line is pure ASCII).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "The crumb was logged, mapped, and formally deprioritised: my battery is at 4% and has a union rep now, and neither of us works for free.";

// The gate, checked on read-back so a broken write can never pass silently:
// /output/entry.txt must be UTF-8 text of 1–200 characters, not only whitespace.
function gateCheck(text) {
  // The entry is the file's content with surrounding whitespace trimmed;
  // a single trailing newline is fine, an internal newline is not.
  const entry = text.trim();
  const chars = [...entry];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`Gate failed: entry is ${chars.length} characters (must be 1–200).`);
  }
  if (entry.length === 0) {
    throw new Error("Gate failed: entry is only whitespace.");
  }
  if (entry.includes("\n")) {
    throw new Error("Gate failed: entry must fit on one line.");
  }
  return chars.length;
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");

// Read back what we actually wrote and validate it against the gate.
const written = readFileSync(`${outDir}/entry.txt`, "utf8");
const n = gateCheck(written);
console.log(`Wrote ${n} characters to ${outDir}/entry.txt — gate OK`);
