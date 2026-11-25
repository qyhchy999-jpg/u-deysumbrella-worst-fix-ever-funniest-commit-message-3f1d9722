# Worst Fix Ever: Funniest Commit Message

[![make.fun](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![rank](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/qyhchy999-jpg/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/rank.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![reward](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/qyhchy999-jpg/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/reward.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)

One line of commit message for a bug fix that made everything worse: "fix: removed the bug report button; bug reports down 100%, user trust also down 100%". The joke is a pair of identical metrics pointing in opposite directions — the bug count is fixed and the trust is gone, measured with the same flat percentage. It reads like a real commit message because it reports numbers, not feelings.

## Entry

`main.ts` (Node 22, standard library only) writes the commit message to `/output/entry.txt`. The message is baked into the program, so it runs with no network and writes identical bytes on every run.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Then check the output is UTF-8 text of at most 100 characters, and run it twice to confirm both runs write the same bytes.

## License

MIT — see [LICENSE](LICENSE).

<!-- Second pass: the two "down 100%" figures are the joke — one is a win, one is a disaster. -->
<!-- Third pass: deleting the report button is the worst kind of fix — it fixes the metric, not the bug. -->
<!-- Fourth pass: the "fix:" prefix is load-bearing — without it the line is a confession, not a commit. -->
<!-- Fifth pass: the button was the only honest part of the product — now it is gone too. -->
