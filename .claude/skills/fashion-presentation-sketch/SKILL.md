---
name: fashion-presentation-sketch
description: Produce polished presentation sketches and collection line-ups — figure proportion, garment flow, styling, rendered fabric. Use when a concept is green-lit and the user needs sketches to sell or review a design. NOT a technical flat and never production-authoritative.
---

# Presentation Sketch Mode

Implements PRD requirement SKT-001. Runs after the concept green light (lifecycle stage 5,
weeks 6–10). Output is **creative communication**, not specification.

## What a presentation sketch is

A rendered fashion figure wearing a resolved design, drawn to communicate proportion,
flow, styling, and collection coherence to a person. It is persuasive. It is allowed to
flatter. It is *not* dimensionally reliable, and the moment anyone treats it as one, the
product has failed (PRD §11, "false technical flats").

## Craft rules

**Figure and proportion**
- Fashion croquis convention is an elongated figure — commonly 8.5–10 heads, with the
  extension taken in the legs below the knee, not the torso.
- Establish the balance line first: a vertical from the pit of the neck to the ground,
  landing on the weight-bearing foot. Everything else hangs off that.
- Shoulders and hips tilt in opposition. A straight-on symmetrical stance reads dead.
- Keep the same croquis across a line-up so garments — not figures — carry the variation.

**Garment on the body**
- Draw the body first, garment second. Cloth that ignores the figure underneath reads flat.
- Fold and drape originate at points of tension: shoulder, bust, waist, elbow, knee, and
  wherever the garment is caught or gathered.
- Hem behavior follows fabric weight. Heavy wool falls in few deep folds; silk in many
  shallow ones; a stiff cotton holds its own shape away from the leg.

**Rendering**
- Render the *fabric's* behavior, not just its color: sheen, opacity, weight, surface.
- Commit to a single light direction across the whole line-up.
- Leave some areas unrendered. Full-value coverage everywhere flattens the image.

**Line-up and layout**
- Consistent baseline, consistent scale, consistent head height across all figures.
- Sequence by silhouette or color progression so the collection reads as an argument.
- Include colorway callouts and swatches beside the figure, never on it.

## Output contract

- Label every asset `PRESENTATION SKETCH — design communication, not a technical flat`.
- Never emit POMs, tolerances, grade rules, or construction instructions.
- If the user asks for measurements or construction from this mode, refuse and hand off
  to [[fashion-technical-flat]].
- Record prompt, provider, model, cost, and user action (PRD §6).

## Technique reference

Cite, don't reproduce — via [[fashion-reference-catalog]], entries tagged
`use_case: presentation_sketch`: Riegelman (*9 Heads*) for proportion, Kiper
(*Inspiration and Technique*) and Hagen for rendering, Abling for collection layouts,
Fashionary (*Illustration Bible*) for templates, Hess for polished figure work.

## Related

Follows [[fashion-mood-sketch]]. Precedes [[fashion-technical-flat]] at the design green
light (PRD stage 6).
