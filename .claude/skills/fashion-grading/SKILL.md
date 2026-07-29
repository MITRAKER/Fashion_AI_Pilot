---
name: fashion-grading
description: Reason about size grading — base size selection, grade rules, increment distribution, and detecting grading anomalies in a size range. Use when reviewing a size range or checking a graded spec for internal consistency. Detects anomalies; does not generate production-authoritative grades.
---

# Grading

**Scope limit:** automated grading is a pilot non-goal (PRD §1.2). This skill's pilot value
is **anomaly detection** on grades a human produced — which is exactly the kind of
deterministic check the validation engine can own.

## Fundamentals

**Base size**
- One size is drafted and fitted; the rest are derived. The base is usually near the middle
  of the range so error accumulates in both directions rather than piling up at one end.
- The base size must be recorded on the tech pack. A graded spec without a stated base size
  is unreadable — nobody can tell which column is truth and which is derived.

**Grade rules**
- A grade rule is the X/Y movement applied at each pattern point between consecutive sizes.
- Grading scales the *pattern*, not the *design*. Details that should not scale — button
  diameter, topstitch width, zipper gauge, label size, pocket opening on a small garment —
  must be explicitly held or given their own rule.
- Total girth increment distributes around the body. A typical woven bodice splits the
  bust increment across front and back and across the quarter-pattern, so the movement at
  any one point is a fraction of the total, not the whole.
- Length increments are usually smaller than girth increments, and are not always applied
  at every size break.

**Range behavior**
- Grades are frequently non-linear across a wide range. Extended sizes commonly need
  different increments and often a re-fit, not just more of the same rule. A single linear
  rule stretched across the whole range is the most common source of extended-size fit
  complaints.
- Armhole, neckline, and sleeve cap need coordinated grading — grading the armhole without
  the cap breaks the walk.

## Anomaly checks this skill contributes

These are deterministic and belong in the validation engine (PRD §6.1, "measurement integrity"):

| Check | Severity |
|---|---|
| Base size not declared | Blocker |
| Non-monotonic measurement across the size range (a value shrinks as size grows) | Blocker |
| Increment inconsistent between size breaks with no documented reason | Blocker |
| Units mixed across the graded spec (cm and inch in one table) | Blocker |
| Duplicate POM code in the graded table | Blocker |
| Armhole graded without corresponding sleeve cap movement | Blocker |
| Detail that should hold constant scaling with the grade (buttons, trims, labels) | Warning |
| Linear rule applied across an extended range with no re-fit noted | Warning |
| Tolerance missing on a graded POM | Warning |

Every one of these is checkable with arithmetic on the spec table — no model judgment
required, which is precisely why they are trustworthy enough to block an export.

## Output contract

- Report anomalies with POM code, size break, and the observed vs. expected increment.
- Never silently "fix" a grade. Propose; a technical designer approves (TEC-003).
- A grading anomaly at Blocker severity stops Approved for Factory export (VAL-003).

## Technique reference

Cite via [[fashion-reference-catalog]] — Handford (*Professional Pattern Grading*),
Rohr (*Pattern Drafting & Grading*, 1981), Cooklin (*Pattern Grading for Women's Wear*).
Cite; do not reproduce.

## Related

[[fashion-patternmaking]], [[fashion-technical-flat]], [[fashion-reference-catalog]].
