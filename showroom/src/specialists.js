/**
 * The specialists.
 *
 * An earlier version of the engine held a static table of fabrics with reasoning
 * written straight into it — my opinion, unattributed, presented as a system.
 * That is the exact failure this project exists to prevent: a recommendation you
 * cannot trace is a guess wearing a lab coat.
 *
 * So concept generation routes to specialists instead. Each one owns a
 * discipline, mirrors a skill in .claude/skills/, applies that skill's stated
 * principles to the measured source, and returns findings that carry:
 *
 *   specialist  who said it
 *   principle   the rule being applied, in the skill's own words
 *   cites       the reference a human can check it against
 *   confidence  how far the measurement actually supports the claim
 *
 * The source of a claim travels with the claim. A designer can then argue with
 * the specialist rather than with a black box, and a wrong recommendation is
 * traceable to the rule that produced it.
 *
 * NOT production authority. Every specialist here works in the P1 creative lane:
 * concept direction, never a spec. Measurements, tolerances and grade rules stay
 * with the technical designer and the mill.
 */

/** Reference works, mirroring .claude/skills/fashion-reference-catalog. */
const CITE = {
  draping: [
    'Amaden-Crawford, The Art of Fashion Draping',
    'Kiisel, Draping: The Complete Course',
    'Armstrong, Draping for Apparel Design',
  ],
  pattern: [
    'Armstrong, Patternmaking for Fashion Design',
    'Aldrich, Metric Pattern Cutting for Women’s Wear',
    'Rohr, Pattern Drafting & Grading',
  ],
  flat: ['Fashionary, The Fashion Designer’s Illustration Bible'],
  mood: ['Stipelman, Illustrating Fashion: Concept to Creation'],
}

const conf = (v, lo, hi) =>
  v <= lo ? 'low' : v >= hi ? 'high' : 'medium'

/* ----------------------------------------------------- draping specialist */
/**
 * Mirrors .claude/skills/fashion-draping. Its central claim: drape or draft is
 * decided by whether the silhouette depends on how the cloth FALLS, and grain
 * governs behaviour — bias has the most stretch and the most fluid fall.
 */
function drapingSpecialist(a) {
  const out = []
  const fluid = a.edge < 0.14

  out.push({
    specialist: 'Draping',
    title: fluid ? 'Drape it, do not draft it' : 'Draft it, do not drape it',
    principle: fluid
      ? 'Drape when the silhouette depends on how the cloth falls; draft when it is defined by seam geometry.'
      : 'Draft when the silhouette is defined by seam geometry; drape when the fall must be seen to be judged.',
    finding: fluid
      ? `The source is soft-edged (${(a.edge * 100).toFixed(0)}% strong boundaries), so its character is in the fall. Work it on the form in the real cloth, not in muslin — muslin tells you almost nothing about a fluid drape.`
      : `The source is hard-edged (${(a.edge * 100).toFixed(0)}% strong boundaries), so its character is in the geometry. Flat-draft the blocks and true them; draping will only soften what makes it distinctive.`,
    cites: CITE.draping,
    confidence: conf(Math.abs(a.edge - 0.14), 0.02, 0.08),
  })

  if (fluid) {
    out.push({
      specialist: 'Draping',
      title: 'Cut on true bias',
      principle: 'Bias has the most stretch and the most fluid fall. Bias garments elongate under their own weight and must hang before hemming.',
      finding: 'A bias cut will reproduce the source’s soft direction. It carries a hard requirement: hang the garment 24–48 hours before hemming, or the hem drops unevenly after first wear.',
      cites: CITE.draping,
      confidence: 'high',
      blocks: 'Bias hang time must appear in construction notes before this can be exported.',
    })
  }
  return out
}

/* -------------------------------------------------- patternmaking specialist */
/**
 * Mirrors .claude/skills/fashion-patternmaking. Central claims: dart excess is
 * conserved — shaping can be relocated but never removed; and ease is
 * fabric-dependent, with wearing ease and design ease being different numbers.
 */
function patternSpecialist(a) {
  const out = []
  const structured = a.edge >= 0.14

  out.push({
    specialist: 'Patternmaking',
    title: structured ? 'Shaping goes into seams' : 'Shaping goes into gathers',
    principle: 'Dart excess is conserved. Shaping can be relocated, split, converted to gathers, tucks or seams, or eased in — but the volume must go somewhere.',
    finding: structured
      ? 'With hard boundaries, convert the bust and waist excess into panel seams rather than darts. The seam lines then carry the reference’s geometry instead of hiding it.'
      : 'With soft boundaries, convert the excess into gathers or a released dart. A crisp seamed panel would contradict the source’s character.',
    cites: CITE.pattern,
    confidence: conf(Math.abs(a.edge - 0.14), 0.02, 0.08),
  })

  out.push({
    specialist: 'Patternmaking',
    title: 'Ease is fabric-dependent',
    principle: 'Wearing ease makes movement possible; design ease makes the silhouette. They are different numbers, and the same numbers on a knit and a stable woven give different garments.',
    finding: 'Fix the fabric before the ease. A pattern eased for a fluid silk and cut in a stable woven produces a fit argument, not a garment.',
    cites: CITE.pattern,
    confidence: 'high',
  })

  if (structured) {
    out.push({
      specialist: 'Patternmaking',
      title: 'Every seam needs a mate',
      principle: 'Every seamline must have a mate of equal length, or a documented ease or gather plan for the difference.',
      finding: 'A panelled interpretation multiplies seams. Walk each one before the pattern leaves the studio; an unmatched seam is a factory question, and the factory will resolve it cheaply.',
      cites: CITE.pattern,
      confidence: 'high',
    })
  }
  return out
}

/* ------------------------------------------------- technical flat specialist */
/** Mirrors .claude/skills/fashion-technical-flat — the UNRESOLVED rule. */
function flatSpecialist() {
  return [{
    specialist: 'Technical flat',
    title: 'What this concept cannot yet determine',
    principle: 'When the brief does not determine a construction detail, emit it as UNRESOLVED rather than inferring a plausible answer.',
    finding: 'A reference image fixes mood, colour and silhouette direction. It does not fix closure type, seam finish, interlining or hem allowance. Those stay unresolved until a technical designer decides them — a plausible guess that reaches a factory is exactly the hallucination this system exists to stop.',
    cites: CITE.flat,
    confidence: 'high',
    blocks: 'Closure, seam finish and hem allowance are unresolved and block factory export.',
  }]
}

/* -------------------------------------------------- mood/creative specialist */
/** Mirrors .claude/skills/fashion-mood-sketch — coherence over collage. */
function moodSpecialist(a, palette) {
  const dominant = palette?.[0]
  return [{
    specialist: 'Mood',
    title: 'One light, one colour story, one silhouette family',
    principle: 'A grid of beautiful images is a reference wall, not a mood board. Every element answers to the same brief: one light condition, one colour story, one silhouette family.',
    finding: dominant
      ? `Hold the board to ${dominant.name.toLowerCase()} as the dominant (${dominant.share}% of the source) and keep one light condition across every generated frame. Mixed lighting reads as a scrapbook, whatever the individual images are worth.`
      : 'Hold one light condition across every generated frame.',
    cites: CITE.mood,
    confidence: 'high',
  }]
}

/**
 * Run the panel. Order is the lifecycle order from the skills: mood before
 * construction, construction before flats, flats before anything production.
 *
 * @returns {{specialist,title,principle,finding,cites,confidence,blocks?}[]}
 */
export function consultSpecialists(analysis, palette) {
  return [
    ...moodSpecialist(analysis, palette),
    ...drapingSpecialist(analysis),
    ...patternSpecialist(analysis),
    ...flatSpecialist(),
  ]
}
