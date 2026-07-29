# Two data asks — the only pilot inputs we can't build ourselves

Everything else in the pilot is now built: authenticated routes, durable persistence, the
deterministic rule engine, approval gates, versioning, export authorization, and the
factory-correction pipeline. Two inputs are missing, and neither can be invented without
becoming exactly the kind of plausible-but-wrong content the whole product exists to prevent.

---

## Ask 1 — One real tech pack

**Why:** the field schema is currently our reconstruction. One real pack replaces guesswork
with the pilot's export authority (**D-03**).

**What would help, in order of preference:**

1. A complete pack for one style, in whatever format you already use — PDF, Excel, or the
   PLM export. Redacted supplier names are fine.
2. If nothing can leave the building: a screen share where you walk one pack section by
   section while we take notes. We do not need to keep the file.
3. Failing both: mark up [tech-pack-template.md](tech-pack-template.md) and send it back.

**Rights note:** if the pack contains a brand's confidential development data, we need
written permission from that brand before it goes into the workspace, per PRD §11 and
D-06. Until then, mark-up on our template is the safe path.

---

## Ask 2 — Real factory questions

**Why:** this is the moat. A factory question that becomes a permanent rule is the only part
of the system that gets harder to copy over time. The pipeline is built and tested — resolve
a question in the app, promote it to a rule, and it fires on every future style, including
ones that never had the original problem. What it lacks is real questions.

**What would help:** 5–20 real clarification threads. Email, WhatsApp, WeChat, spreadsheet
comments — the messier the better, because the mess is the signal.

For each one, we need four things. A forwarded email chain usually contains all four:

| Field | Example |
|---|---|
| What the factory asked | "Hip at L reads smaller than M — which is correct?" |
| What was wrong or missing in the pack | Non-monotonic grade on POM C |
| What the answer was | L should be 106 cm |
| Whether it caused a delay or an extra sample | 1 extra proto round, 9 days |

**A machine-readable version, if that's easier than forwarding:**

```json
[
  {
    "style": "any identifier, or 'redacted'",
    "category": "woven dress",
    "question": "verbatim if possible",
    "root_cause": "what the pack failed to say",
    "answer": "what you told them",
    "cost": "extra sample | delay in days | none",
    "would_a_rule_have_caught_it": "yes / no / maybe"
  }
]
```

That last field is the important one. Every "yes" is a rule we can write, and every rule we
write is a question that never gets asked again.

---

## What we're not asking for yet

Not brand names, not factory contracts, not pricing, not anything under NDA. The pilot can
start on redacted data. We'd rather have five redacted real questions than fifty invented
clean ones.

---

## And one decision only you can make

**D-01 — which single garment category defines the pilot schema and rule set?**

We've seeded `woven-dress` and `woven-top` as working templates so nothing is blocked
waiting on this, and the category is data rather than code, so switching is cheap. But the
rule set only gets sharp once it's aimed at one category you know cold. Name it and we'll
tune the schema to it.
