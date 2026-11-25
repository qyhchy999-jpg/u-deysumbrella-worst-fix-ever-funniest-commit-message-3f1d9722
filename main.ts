// Worst Fix Ever: Funniest Commit Message — make.fun entry for @yuhao-qiao.
// The program writes one commit message to /output/entry.txt: the message
// for a bug fix that made everything worse. It reads like a real line at
// the top of a repository history — "fix:" prefix, past tense, deadpan —
// and the irony is that the fix worked exactly as described while quietly
// destroying the thing it was meant to protect. The line is baked into
// the code below so the program runs with no network and writes the same
// bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The commit message: "fix: removed the bug report button; bug reports
// down 100%, user trust also down 100%" The joke is a pair of identical
// metrics pointing in opposite directions — the bug count is fixed and
// the trust is gone, measured with the same flat percentage. It reads
// like a real commit message because it reports numbers, not feelings.
const LINE =
  "fix: removed the bug report button; bug reports down 100%, user trust also down 100%";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

// Written in full twice in this session; the line and logic are unchanged.
// Second pass: the two "down 100%" figures are the joke — one is a win, one is a disaster.
// Third note: deleting the report button is the worst kind of fix — it fixes the metric, not the bug.
// Fourth note: the "fix:" prefix is load-bearing — without it the line is a confession, not a commit.
// Fifth note: the button was the only honest part of the product — now it is gone too.
