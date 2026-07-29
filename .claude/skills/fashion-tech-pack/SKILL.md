---
name: fashion-tech-pack
description: Assemble, review, or audit a garment tech pack — the eleven required sections, per-field provenance, units, revision identity, and factory legibility. Use when drafting a tech pack, checking one for completeness before factory handoff, or deciding whether a field is production-critical. Every field starts as Draft.
---

# Tech Pack

The tech pack is the contract between the brand and the factory. Everything the factory
must know that is not obvious from the sample lives here, and anything ambiguous in it
becomes either a clarification question or a wrong garment.

Implements PRD requirements TEC-001, TEC-002, TEC-003.

## The golden sample rule

The pack plus the agreed **golden sample** together define what the factory is obligated to
produce. A factory that deviates from agreed fabric, trims, or measurements without written
approval carries liability for it — which cuts both ways: *the pack must be precise enough
to be held to.* A vague pack transfers risk back to the brand, because nothing was actually
agreed.

This is why `unresolved` is a legitimate output and a guess never is. An unresolved field
is a question. A guessed field is a false agreement.

## The eleven sections

Every pack must account for all eleven. A section may be marked *not applicable* with a
reason; it may not be silently absent.

| # | Section | Contents |
|---|---|---|
| 1 | **Cover / identity** | Style ID, style name, season, category, brand, base size, units, designer, tech designer, version number, date, factory |
| 2 | **Technical drawings** | Front and back orthographic flats, detail views at larger scale, callouts keyed to construction notes |
| 3 | **Fabric / material breakdown** | Composition by percentage, weight (gsm or oz/yd²), width, finish, supplier, reference, placement. Example format: `72% nylon, 28% elastane, 170gsm` |
| 4 | **BOM** | Every material and component with quantity, unit, placement, supplier, and reference number |
| 5 | **Measurements (POM)** | Point-of-measure code, description, **how it is measured**, base-size value, tolerance ± |
| 6 | **Size range & grading** | Sizes produced, base size declared, grade increment per POM per size break |
| 7 | **Colour & colourways** | Colour name, code (Pantone or lab dip reference), per-component mapping, approval status per colourway |
| 8 | **Trims & labels** | Zips, buttons, snaps, drawcords, elastic, thread, plus main label, care label, size label, hangtag — each with size, type, colour, quantity, exact placement |
| 9 | **Construction** | Seam types, stitch type and SPI, seam allowances, finishes, hems, closures, pressing, special operations |
| 10 | **Packaging** | Individual garment bagging (poly bag size, folding method, hangtag placement) *and* carton/shipping spec (carton size, ratio, labelling, weight) |
| 11 | **Lead time & samples** | Required sample types (proto, fit, PPS, TOP), quantity, dates, and production lead time expected |

Costing notes and revision history sit alongside as pack metadata.

## Rules that make a pack legible

**Units.** Declare the unit once at pack level, then never mix. A pack containing both cm
and inches is a blocker, not a style choice. Same for gsm vs. oz.

**Measurement method is not optional.** "Chest 52" means nothing without "measured 2.5 cm
below armhole, across, garment flat." Two people measuring the same garment differently is
the single most common source of a rejected sample.

**Tolerance is a spec, not a courtesy.** Every POM carries a ± value. A POM with no
tolerance is an argument waiting to happen.

**Placement must be dimensioned.** "Label at back neck" is ambiguous; "main label centered
at back neck, 1 cm below neckline seam" is not. Every trim and label gets a measured
position.

**Version identity travels with the export.** The factory must be able to tell, from the
document alone, exactly which version they are holding and who approved it (EXP-002). A
pack without version identity cannot be audited when something goes wrong.

**More detail beats less.** Anything the factory has to decide for you, they will decide
cheaply.

## Per-field provenance (TEC-002)

Every production-critical field carries:

```json
{
  "value": 52.0, "unit": "cm",
  "source": "ai" | "human" | "imported",
  "created_by": "user_id", "created_at": "iso8601",
  "ai_involved": true, "confidence": "low" | "medium" | "high",
  "approval": "suggested" | "unverified" | "human_edited" | "approved" | "overridden",
  "critical": true
}
```

**Production-critical** = any value whose error could change material, fit, construction,
quantity, cost, quality, or manufacturing outcome. Measurements, tolerances, grade rules,
composition, closures, and construction instructions are always critical.

AI may draft any of them. AI-drafted critical fields stay `suggested` until a named human
approves (TEC-003). No AI-drafted critical field may be exported as Production Authorized.

## Behavior when drafting

1. Fill what the input determines. Cite where each value came from.
2. Mark what the input does not determine as `unresolved` with the specific question.
3. Never infer a measurement from an image. A sketch is not a dimension.
4. Never carry a value forward from a similar style without saying you did.
5. Run [[fashion-grading]] anomaly checks on any graded table before presenting it.
6. Emit blockers for the validation engine rather than resolving them yourself.

## Related

[[fashion-technical-flat]] supplies section 2. [[fashion-grading]] supplies section 6.
[[fashion-patternmaking]] and [[fashion-draping]] supply constructibility checks against
section 9.
