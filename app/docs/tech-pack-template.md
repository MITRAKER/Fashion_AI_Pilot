# Canonical tech-pack template — for Natalie to diff against a real pack

**Open decision this resolves: D-03** — "Which current tech-pack format is the pilot export
authority?"

This is our reconstruction of what a factory-ready pack needs, assembled from the eleven
sections, the PRD field requirements, and general practice. **It is not authoritative.**
Please mark it up: strike what your packs don't carry, add what they do, and correct any
field whose name differs from what your factories expect to read.

Once you've marked it up, the corrected list becomes `shared/categories.ts` and governs
what preflight blocks on. Nothing here governs real work until you sign it off in the app
(Governance → Category schemas → Sign off schema).

Marked `*` = production-critical. An error in a starred field can change material, fit,
construction, quantity, cost, quality, or manufacturing outcome.

---

## 1. Cover / identity

| Field | Notes | Ours | Yours? |
|---|---|---|---|
| Style ID * | Unique, stable across versions | ✓ | |
| Style name | | ✓ | |
| Season | | ✓ | |
| Category * | Drives which rule set applies | ✓ | |
| Brand | | ✓ | |
| Base size * | The drafted size. Everything else is derived. | ✓ | |
| Units * | Declared once, never mixed | ✓ | |
| Designer | | ✓ | |
| Technical designer * | The accountable approver | ✓ | |
| Version number * | Must appear on the export | ✓ | |
| Date | | ✓ | |
| Factory | | ✓ | |

## 2. Technical drawings

Front and back orthographic flats, mandatory. Detail views at larger scale for closures,
pockets, cuffs, collar/neckline, vents, and any non-obvious seam. Callouts keyed to the
construction section.

## 3. Fabric / material breakdown

| Field | Notes |
|---|---|
| Composition * | By percentage, e.g. `72% nylon, 28% elastane` |
| Weight * | gsm or oz/yd² — pick one and hold it |
| Width * | |
| Finish * | |
| Supplier / reference * | |
| Placement * | Which parts of the garment |
| Shrinkage * | **Do your packs carry this?** It's decisive for bias work |
| Stretch / recovery * | |

## 4. Bill of materials

Every material and component: quantity, unit, placement, supplier, reference number.

## 5. Measurements (POM)

| Field | Notes |
|---|---|
| POM code * | Unique within the pack |
| Description * | |
| **Method** * | *How* it is measured. Not optional. |
| Base-size value * | |
| Tolerance ± * | Every POM. No exceptions. |

**Question for you:** do your factories use a standard POM code set, or does each factory
have its own? That answer changes whether codes are global or per-factory in the schema.

## 6. Size range & grading

Sizes produced, base size declared, grade increment per POM per size break. Note where the
grade is deliberately non-linear (extended sizes usually are) so preflight doesn't flag it
as an inconsistency.

## 7. Colour & colourways

Colour name, code (Pantone or lab-dip reference), per-component mapping, approval status
per colourway.

## 8. Trims & labels

Zips, buttons, snaps, drawcords, elastic, thread — plus main label, care label, size label,
hangtag. Each with size, type, colour, quantity, and **dimensioned placement** measured from
a named reference point.

## 9. Construction

Seam types, stitch type and SPI, seam allowances, finishes, hems, closures, pressing,
special operations. Grain placement and any hang-time requirement.

## 10. Packaging

Individual bagging (poly bag size, folding method, hangtag placement) **and** carton spec
(size, ratio, labelling, weight).

## 11. Lead time & samples

Sample types required (proto / fit / PPS / TOP), quantity, dates, production lead time.

---

## What we most need you to answer

1. **Which of these sections do your packs actually carry today?** We would rather cut a
   section than pretend we validate something you don't record.
2. **Which fields do your factories ask about most?** Those become blockers. The rest
   become warnings.
3. **Is there a field here you'd never put in a pack?** If so it's noise, and noise in a
   preflight trains people to ignore it.
4. **D-03:** which existing pack format is the export authority — so our PDF matches
   something your factories already read fluently, rather than introducing a new layout
   they have to learn.
