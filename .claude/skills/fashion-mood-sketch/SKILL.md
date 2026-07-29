---
name: fashion-mood-sketch
description: Generate mood sketches and concept boards for a collection — atmosphere, color story, silhouette direction, and textile feeling. Use when the user asks for a mood board, concept direction, season feeling, or early exploratory sketches. NOT for presentation sketches or technical flats.
---

# Mood Sketch Mode

Implements PRD requirement CRE-002 / CRE-003 (mode-specific generation, mood-board coherence).
Output of this skill is **creative**, never production-critical.

## What a mood sketch is

A mood sketch communicates *atmosphere and direction*, not construction. It is loose,
gestural, and often incomplete on purpose. The garment may be indicated rather than drawn.
Its job is to let a creative director say "yes, that feeling" or "no, colder than that."

A grid of beautiful e-commerce photography is **not** a mood board. That is a reference
wall. A mood board carries a point of view: one color story, one silhouette family, one
textile behavior, one customer, one time of day.

## Required input — the structured brief

Never generate from a bare prompt. Collect or infer, and state what you assumed:

| Field | Example |
|---|---|
| Season / year | Spring/Summer 2027 |
| Customer | 28–40, urban, buys 3–4 elevated pieces a season |
| Mood words | 3–5, e.g. "sun-bleached, unhurried, slightly undone" |
| Color story | 4–6 colors with relationships (dominant / accent / neutral) |
| Silhouette direction | volume, length, waist placement, drape vs. structure |
| Material themes | weight, hand, drape, surface |
| Reference period | optional; era or archive |
| Exclusions | what must NOT appear — as important as what must |

## Coherence rules

Every generated element answers to the *same* brief. Enforce:

1. **One light condition** across the board. Mixed lighting reads as a scrapbook.
2. **Color obedience.** Every garment and prop color traces to the declared story.
3. **Silhouette family.** Volume and proportion stay consistent even as garments vary.
4. **Textile behavior matches the material theme.** A brief calling for fluid drape must
   not render stiff, structured cloth.
5. **The figure serves the mood.** If a brief calls for movement, the figure moves —
   gesture, wind, action — not a catalog stance.
6. **Regenerate one component, not the board** (CRE-004). Boards are iterated tile by tile.

## Output contract

- Label every asset `MOOD SKETCH — creative reference, not production`.
- Never emit measurements, construction notes, or anything a factory could act on.
- Never let a mood output be attached to a tech pack field.
- Record prompt, provider, model, cost, and user action (PRD §6).

## Technique reference

For technique and rendering questions, cite by name and let a human verify — do not
reproduce content. Use [[fashion-reference-catalog]] and prefer entries tagged
`use_case: mood_sketch`, especially Stipelman (*Concept to Creation*), Hagen
(*Fashion Illustration for Designers*), Abling (*Fashion Sketchbook*), and Lafuente
(*Essential Fashion Illustration*). For period atmosphere, the historical entries
(Erté, Fogg, Brubach & McDowell) are the right pointers.

## Related

Escalates to [[fashion-presentation-sketch]] once direction is green-lit (PRD stage 4).
Never escalates directly to [[fashion-technical-flat]].
