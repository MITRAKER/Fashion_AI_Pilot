# Atelier Showroom — art direction & grading rubric

This document is the contract. Every sub-agent builds against it and the critic grades
against it. Derived from the supplied dark-luxe commerce mockup ("Daylog") and the visual
language of the competitor set (Mercer/CALA, Make the Dot, Fynd Create, Skema3D).

**The target is not "a nice Three.js demo."** The target is a frame that, placed beside a
professionally rendered product mockup, does not read as the amateur one.

---

## 1. The scene, in one sentence

A dark studio in which the fashion app exists as physical, floating glass slabs — a
sidebar panel hovering in front of a larger product panel — with a camel trench coat
suspended in real 3D space behind the hero card, lit like a product photograph.

## 2. Camera & composition

| Property | Value |
|---|---|
| Default framing | Slab rotated ≈ −16° yaw, +7° pitch, slight −3° roll. Never axis-aligned. |
| FOV | 28–35mm equivalent. Long enough to avoid distortion, short enough to keep depth. |
| Composition | Slab occupies ~70% of frame height, offset left of centre. Negative space upper-right. |
| Depth | Sidebar sits 40–70mm in front of the main panel in world space. Real parallax, not a drop shadow. |
| Motion | Slow drift on idle (≤2° amplitude, ≥8s period). Pointer parallax eased, never 1:1. |

## 3. Palette

| Token | Hex | Use |
|---|---|---|
| `void` | `#08080A` | Backdrop, deepest shadow |
| `slab` | `#121214` | Panel body |
| `slab-hi` | `#1B1B1F` | Raised tiles, pills |
| `edge` | `rgba(255,255,255,0.10)` | 1px panel edge highlight |
| `gold` | `#C9A227` | Primary action, active state |
| `gold-hi` | `#E8C766` | Gradient top, specular on gold |
| `gold-ink` | `#241C05` | Text on gold |
| `camel` | `#C8A57E` | Garment mid-tone |
| `camel-hi` | `#E4CDAE` | Garment lit |
| `camel-lo` | `#6E5843` | Garment shadow |
| `text` | `#F2F0ED` | Primary |
| `text-2` | `#A3A0A0` | Secondary |

Gold appears **only** on interactive or active elements. If it is not clickable or not the
current selection, it is not gold. One gold gradient CTA per frame, maximum.

## 4. Typography

- **Display:** high-contrast serif (Didot/Bodoni character). Product name, section titles,
  price. Never below 18px rendered; must stay crisp at slab tilt.
- **UI:** geometric/neo-grotesque sans. Labels, body, prices in cards.
- **Micro-labels:** 10–11px, `letter-spacing: .12em`, uppercase, `text-2`.
- Text must be rendered at ≥2× device pixel ratio into panel textures, or as real geometry.
  **Blurry type is an automatic fail** — it is the single most common tell of a fake 3D UI.

## 5. Materials — the AAA bar

| Surface | Requirement |
|---|---|
| **Panel glass** | Physical material: `transmission` 0.05–0.15, `roughness` 0.28, `thickness` 4mm, `ior` 1.45, `clearcoat` 0.6. Visible **edge light** where the bevel catches the key. Not a flat dark plane. |
| **Gold** | Metalness 1.0, roughness 0.22 with an **anisotropic** streak along the pill's long axis. Must show a moving specular as the camera drifts. Flat yellow is a fail. |
| **Garment (wool gabardine)** | Sheen enabled (`sheen` 0.6, `sheenRoughness` 0.35, warm `sheenColor`). Subtle fibre normal detail. **Rim/backlight must produce a fuzz halo along silhouette edges** — this is what sells cloth. |
| **Floor** | Roughness gradient from 0.15 (under the slab) to 0.6 (far). Blurred reflection of the slab and coat. No mirror. |
| **Tile thumbnails** | Each category tile and "You May Also Like" card holds a real rendered garment, not a coloured rectangle. |

## 6. Lighting

Three-point, studio, all soft:

1. **Key** — large area light, upper-left, ~35° off axis, warm white (5200K). Rakes across
   the coat to reveal the drape.
2. **Rim** — narrow, upper-right behind subject, cool-neutral, intensity high enough to
   separate the coat silhouette from the void. This is the shot.
3. **Fill** — very low, front, cool, ~8% of key. Just enough to keep shadow detail.
4. **Environment** — generated studio IBL (softbox shapes on a dark gradient) driven through
   PMREM. Glass and gold must reflect **recognisable softbox shapes**, not a uniform grey.

Shadows: soft, contact-accurate under the slab. Shadow acne, peter-panning, or a hard
shadow edge is a fail.

## 7. Cloth simulation

- Real solver (XPBD/position-based, ≥3 constraint iterations), not a vertex-shader wobble.
- Structural + shear + bend constraints. Self-collision at least approximated.
- The coat **settles** — it must come to rest naturally, not jitter or breathe forever.
- Belt tie and lapels respond to the settle.
- Gentle air motion (≤0.15 m/s) so the hem is alive without flapping.

## 8. Post-processing

Order matters:

1. ACES Filmic tonemapping, exposure ≈ 1.0
2. GTAO / SSAO — subtle, occlusion in panel crevices and under the coat collar
3. Bloom — threshold high (0.85+), soft, so **only** gold and specular hits bloom
4. Depth of field — focus on the coat, slab slightly soft at extremes. Bokeh must be round.
5. Chromatic aberration — corner-only, ≤0.6px. If you can see it, it's too much.
6. Film grain — animated, ~2% opacity, fine
7. Vignette — soft, elliptical

## 9. Interaction

- Pointer parallax on the slab (eased, clamped).
- Category tiles: hover lifts in Z with a gold edge fade-in.
- Size chips and colour swatches: real selection state, gold fill transition.
- The coat is on a turntable — drag to rotate, with inertia and damping.
- Everything eases. No linear transitions. No pops.

---

## 10. Automatic fails

The critic rejects the frame outright, no discussion, if any of these are true:

1. Text is blurry, aliased, or shimmers under motion.
2. Gold reads as flat yellow with no specular movement.
3. The coat silhouette has no rim separation from the background.
4. Panels look like flat quads — no edge light, no thickness.
5. Bloom is blown out or blooms non-emissive surfaces.
6. Shadows are hard-edged, detached, or absent.
7. The composition is axis-aligned or centred.
8. Any placeholder colour rectangle stands in for a garment.
9. Visible z-fighting, banding in the dark gradient, or clipped blacks.
10. Frame rate below 50fps at 1600×1000 on integrated graphics.

## 11. Grading scale

The critic scores each render 1–10 against this rubric and states the single worst defect.

- **≤6** — reads as a Three.js demo. Reject, name the defect, iterate.
- **7–8** — good, but a professional would spot it. Reject with specifics.
- **9** — would pass in a product deck. Accept only if no automatic fail is present.
- **10** — indistinguishable from a rendered mockup. Requires all of §5, §6, §8 satisfied.

A score is only valid if the critic looked at the actual PNG. Reviewing source code and
inferring the result is not a grade.
