# The Vacuum's Alibi: One Line, 200 Characters

[![make.fun](https://make.fun/badge/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7.svg)](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)
[![Rank](https://make.fun/badge/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/musengbob/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)
[![Reward](https://make.fun/badge/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/musengbob/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)

One line, at most 200 characters, in which a robot vacuum explains why it
missed a spot — entered in the
[make.fun bounty](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7).

## The line

> The crumb was logged, mapped, and formally deprioritised: my battery is at 4% and has a union rep now, and neither of us works for free.

136 characters. The machine's own deadpan voice: it logged the crumb, mapped
it, then formally deprioritised it — smug about its sensors and its schedule —
and the punch lands at the end, where the battery, at 4%, has acquired a union
rep and refuses to work for free.

## How it works

`main.ts` (Node, ES module) writes the line to `/output/entry.txt`, then reads
it back and validates the competition gate: UTF-8 text of 1–200 characters,
not only whitespace, fitting on one line. It exits non-zero if the gate fails.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
