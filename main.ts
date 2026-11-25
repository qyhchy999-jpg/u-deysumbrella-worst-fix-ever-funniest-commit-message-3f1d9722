// Worst Fix Ever: Funniest Commit Message — make.fun entry for @yuhao-qiao.
// The program writes one commit message to /output/entry.txt: the message
// for a bug fix that made everything worse. It reads like a real line at
// the top of a repository history — "fix:" prefix, past tense, deadpan —
// and the irony is that the fix worked exactly as described while breaking
// everything else. The line is baked into the code below so the program
// runs with no network and writes the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The commit message (93 characters): "fix: stopped the leak by
// removing the pipes; nobody can log in now, but nothing leaks anymore"
// The fix is technically true — nothing leaks — because there are no
// pipes left, and nobody can log in either. The semicolon splits the
// triumph from the casualty, which is how the worst real commit
// messages read: a small victory, then the damage, stated flatly.
const LINE =
  "fix: stopped the leak by removing the pipes; nobody can log in now, but nothing leaks anymore";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

// Written in full twice in this session; the line and logic are unchanged.
// Second pass: the semicolon is the whole joke — triumph, then casualty.
// Third note: "nothing leaks anymore" is true, which is what makes it a worst fix.
// Fourth note: the "fix:" prefix is load-bearing — without it the line is a confession, not a commit.
