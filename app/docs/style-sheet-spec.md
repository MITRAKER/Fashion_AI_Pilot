# Style sheet, schematic, spec sheet — from Natalie's voice notes

Captured from three voice notes, 29 July 2026. This corrects a modelling error in the
build: **"tech pack" was treated as one artifact. It is three**, and they are produced at
different stages by different people for different readers.

---

## The correction

| Artifact | What it carries | Who reads it |
|---|---|---|
| **Style sheet** | The style at a glance: company name, style, the garment shown on a model, fabric *names*, trims, embroidery, suppliers, estimated costs | Internal — design, merchandising, costing |
| **Schematic** | The **layout**, true to size — how the pieces are laid out | Internal / cutting |
| **Spec sheet** | Flat sketch **with arrows** measuring shoulder, centre front, centre back, side — plus the measurements | The factory |

> "definitely the factory could never make that based on that" — the style sheet alone is
> not manufacturable. The factory takes the **spec sheet** measurements and makes their own
> paper pattern.

Current build conflates all three into `TechPack`. Splitting them is a schema change, not a
label change: the style sheet is not a draft of the spec sheet, it is a different document.

---

## Style sheet — required content

**Header**
- Company name **on every style sheet** (not optional, not a setting)
- The words "style sheet", style number, season

**Centre: the garment on a model**
- A live model in the **middle** of the sheet — her explicit request, and the reason the
  3D work matters to the product rather than being a demo
- View controls: **front view / side view / back view**
- Side view is not decorative: *"maybe there's a zipper on the side. Not all dresses have
  zippers in the back, or all skirts."* The side view exists to disclose closure placement.

**Fabric**
- Fabric **name** is required.
- Swatches on the sheet are **not** required — *"I think just the name."*
- The physical swatch is a **human** responsibility: someone gathers them and makes sure
  everyone holds a sample and knows what is being discussed. The system records that this
  happened; it does not replace it.

**Trims — its own section**

**Embroidery — its own section**, because the work goes outside the organisation:
- Where it was embroidered
- **Supplier** — who did it
- **Estimated cost** — on the style sheet itself, because it is an external spend

**Material size — typed, specific, human-entered**

Her example, which is the schema:
- sequin **size**: 5 mm / 4 mm / 6 mm
- sequin **type**: *cup* sequin
- sequin **colour**: gold 5 mm, purple 4 mm

So a trim is not `"sequins"`. It is `{ type: 'cup sequin', size_mm: 5, colour: 'gold' }`,
and a sheet carrying several sizes must list each.

**Explicitly typed by a human, never inferred:** embroidery supplier, price, material size.
These are the fields the drafting agent must refuse (they are decisions and commercial
facts, not conventions) — consistent with `server/ai/provider.ts`.

---

## Reference corpus — museum APIs

Designers reference art history or a named house. The system should be able to take
*"I want something like the Callot sisters"* and return **the feeling, not a copy**.

Sources she is gathering:

| Source | Status |
|---|---|
| **The Met** — Metropolitan Museum of Art Collection API | Free, open access |
| **Victoria & Albert Museum**, London | Free API |
| Costume institute, Tokyo (likely Bunka Gakuen Costume Museum) | Unknown — needs checking |

**Why this matters beyond convenience:** museum open-access collections are the cleanest
possible answer to **D-06**. Public-domain and openly-licensed holdings are a reference
corpus with no rights question, unlike the book catalogue where every entry is still
`unverified`.

**Name check:** the house she was reaching for is almost certainly **Callot Soeurs** —
the Parisian couture house run by the Callot sisters, active from the 1890s into the 1930s,
known for lamé, antique lace, and Asian-influenced embroidery. She said she might be saying
it wrong; that is the spelling to search.

---

## Her note on books and AI training

She flagged that AI companies are buying old books, training on them, and destroying the
physical copies. Recording it here because it bears directly on **D-06** and on the
`fashion-reference-catalog` skill: it is an argument for treating physical and archival
sources as things to *cite and preserve*, not ingest. It also strengthens the museum-API
route, where the institution licenses access deliberately.

---

## What to build first

1. **Style sheet page** with the model in the middle and front/side/back controls.
2. Fabric name, trims, embroidery (supplier + estimated cost), material size as typed fields.
3. Schematic and spec sheet as **separate artifacts**, after.
4. Met + V&A reference lookup feeding the creative brief's reference/rights fields.
