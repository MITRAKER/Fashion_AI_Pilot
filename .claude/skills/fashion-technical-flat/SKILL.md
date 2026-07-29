---
name: fashion-technical-flat
description: Produce front and back orthographic technical flats for a garment, with construction callouts and explicit unresolved-detail labels. Use when a design is locked and needs a factory-legible drawing. Output is always Draft until a technical designer approves it.
---

# Technical Flat Mode

Implements PRD requirement SKT-002. Runs at lifecycle stage 7 (weeks 10–14), after the
design green light. **This is the first mode whose output touches production**, so the
draft restriction (TEC-003) applies to everything it produces.

## What a technical flat is

A flat, proportional, orthographic drawing of the garment as it would lie on a table —
no figure, no pose, no perspective, no rendering, no shadow. Its only job is to let a
factory read construction unambiguously.

A flat is wrong if it is beautiful at the expense of being legible.

## Hard requirements

**Views**
- Front and back are both mandatory. A flat delivered without a back view is incomplete.
- Add detail views at larger scale for: closures, pockets, cuffs, collar/neckline
  construction, vents, and any non-obvious seam.
- Symmetric garments are drawn symmetric. Asymmetry must be intentional and called out.

**Line weight convention**
- Heaviest line: garment outline / silhouette edge.
- Medium: structural seams, style lines, panel breaks, darts.
- Light: topstitching (broken/dashed), edgestitch, fold lines.
- Consistent weights are what make a flat readable at factory print size.

**Proportion**
- Proportions follow the actual garment measurements, not the illustration croquis.
  Body length, sleeve length, and width relationships must be believable against the POMs.
- Scale front and back identically.

**Callouts**
- Every construction decision visible in the drawing gets a callout: seam type, stitch
  type and SPI, seam allowance, finish, trim, closure type and count, label placement.
- Anything you cannot determine from the input is labeled **UNRESOLVED**, not guessed.
  This is the single most important behavior in this skill.

## The unresolved-detail rule

When the brief, sketch, or reference does not determine a construction detail, you must
emit it as unresolved rather than inferring a plausible answer. A plausible guess that
reaches a factory is exactly the failure mode PRD §11 calls "technical hallucination."

Emit unresolved items as a structured list the validation engine can consume:

```json
{"field": "cuff_closure", "status": "unresolved",
 "reason": "sketch shows a placket but no closure type; button vs. snap not determinable",
 "needs": "technical designer decision"}
```

## Output contract

- Every flat is `Draft` on creation. It becomes `Approved` only by a named human
  (TEC-003, APR-001).
- Every field carries provenance: source type, creator, timestamp, AI involvement,
  confidence, approval state (TEC-002).
- A flat with any unresolved production-critical detail must **block** export marked
  Approved for Factory (VAL-003).
- Never relabel a presentation sketch as a flat, in either direction.

## Technique reference

Cite via [[fashion-reference-catalog]]: Fashionary (*Illustration Bible*) and Armstrong
(*Technical Sourcebook*) for flat conventions and construction vocabulary.

## Related

Follows [[fashion-presentation-sketch]]. Feeds [[fashion-patternmaking]] and the tech-pack
validation engine.
