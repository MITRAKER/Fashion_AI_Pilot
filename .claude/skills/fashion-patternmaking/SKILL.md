---
name: fashion-patternmaking
description: Reason about flat patternmaking — block/sloper development, dart manipulation, seam and ease allocation, and pattern-to-flat consistency checks. Use when reviewing pattern logic or checking whether a design is constructible. Advisory only; the pilot does not produce production-authoritative patterns.
---

# Flat Patternmaking

**Scope limit first:** PRD §1.2 lists automated pattern drafting and production-authoritative
digital patterns as an explicit pilot **non-goal**. This skill reasons, checks, and advises.
It does not emit a pattern a factory should cut from.

## What it is for in the pilot

1. **Constructibility review** — can this design be made from flat pattern pieces at all?
2. **Piece-count and seam sanity** — does the flat's seam story imply a coherent set of pieces?
3. **Ease and allowance reasoning** — is the intended fit achievable in the chosen fabric?
4. **Vocabulary** — giving the tech pack correct, unambiguous pattern language.

## Core principles the reasoning rests on

**Blocks and slopers**
- A sloper is a fitted, seam-allowance-free base shape with only wearing ease. A block is a
  working pattern derived from it for a garment type. Style patterns come from blocks; blocks
  do not come from style patterns.
- A brand's blocks are proprietary and accumulate fit history. This is the moat the risk brief
  is pointing at — brand-specific blocks and measurement history are not copyable.

**Dart manipulation**
- Dart excess is conserved. Pivoting or slashing moves shaping to a new location; it never
  removes the need for it. Shaping can be relocated, split across multiple darts, converted
  to gathers, tucks, seams, or eased in — but the volume must go somewhere.
- All darts on a bodice point toward the bust apex and stop short of it (typically 1.5–2.5 cm
  for a woven bodice) so the point does not read as a cone.

**Ease**
- *Wearing ease* is what makes movement possible. *Design ease* is what makes the silhouette.
  They are different numbers, and a tech pack that confuses them produces a fit argument.
- Ease is fabric-dependent. Knit blocks may carry negative ease; the same numbers on a stable
  woven produce an unwearable garment.

**Seams and grain**
- Every seamline must have a mate of equal length, or a documented ease/gather plan for the
  difference.
- Grainline is a production instruction, not a drafting detail. Straight, cross, and bias
  behave differently in drape, stretch, and recovery — a bias-cut piece needs different
  handling and hang time.
- Notches and drill holes carry alignment intent; a pattern without matched notches is an
  ambiguity the factory will ask about.

**Curves**
- Armhole and neckline curves must walk smoothly across the seam when pieces are joined.
  Check that the sleeve cap length matches the armhole plus intended ease for the sleeve type.

## Validation rules this skill contributes

Feed these into the deterministic validation engine (PRD §6.1):

| Check | Severity |
|---|---|
| Seam length mismatch with no documented ease/gather plan | Blocker |
| Closure specified without a corresponding opening in the piece plan | Blocker |
| Grainline unspecified on any piece | Blocker |
| Dart excess unaccounted for between block and style pattern | Warning |
| Ease type (wearing vs. design) not distinguished in POM notes | Warning |
| Fabric stretch/recovery incompatible with stated ease | Warning; blocker when deterministic |

## Technique reference

Cite via [[fashion-reference-catalog]] — Armstrong (*Patternmaking for Fashion Design*),
Rohr (*Pattern Drafting & Grading*, 1981), Aldrich (*Metric Pattern Cutting*),
Gilewska, Amaden-Crawford, Assembil (*How Patterns Work*). All `rights_status: unverified`:
cite them as human-verifiable sources; do not reproduce their drafting instructions.

## Related

[[fashion-draping]] for the three-dimensional route to the same shapes.
[[fashion-grading]] for taking one size to a range. [[fashion-technical-flat]] upstream.
