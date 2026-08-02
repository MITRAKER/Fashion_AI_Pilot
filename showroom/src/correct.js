import { SCHEMA, get, set, describe } from './garment-spec.js'

/**
 * Talk to the garment.
 *
 * Natalie's ask, in her words: *"there needs to be a panel where you can talk to
 * it and tell it, hey, I like what you did there, but you gotta make it longer,
 * and then correct the flat sketch I gave you."* Her reason is the product
 * thesis in one line — when you are writing the spec, you want to see what the
 * garment will actually be. This closes that loop.
 *
 * Three rules, and they are what separate this from a chat box:
 *
 * 1. It edits the SPEC, never the mesh. The 3D is a view of the document, so
 *    every change is diffable, undoable and exportable.
 * 2. It SHOWS what it understood. A correction that silently does something
 *    other than what was asked is worse than one that refuses.
 * 3. It REFUSES what an instruction cannot determine. "Make the closure a zip"
 *    is a production decision with a trim BOM and a factory operation behind it;
 *    it belongs to a technical designer, not to a sentence typed at a preview.
 *
 * The parser is deterministic — patterns, not a model. That is a deliberate
 * choice while D-05 is open: it means the panel works today, offline, with no
 * vendor. A model would generalise the phrasing, and the interface here is the
 * seam where one drops in: parse() returns intents, and nothing downstream cares
 * whether a rule or a model produced them.
 */

/** How much a hedge word moves a value, as a multiple of the schema step. */
const AMOUNT = [
  [/\b(a lot|much|way|significantly|far)\b/i, 3],
  [/\b(a bit|slightly|a little|touch|bit)\b/i, 1],
  [/\b(a tiny bit|marginally|hair)\b/i, 0.5],
]

/** direction words → [path, sign] */
const INTENTS = [
  [/\b(longer|drop the hem|lengthen|floor.?length|maxi)\b/i, 'skirt.length', +1],
  [/\b(shorter|shorten|raise the hem|mini|above the knee)\b/i, 'skirt.length', -1],
  [/\b(fuller|more volume|wider|more flare|flare it|bigger skirt|voluminous)\b/i, 'skirt.flare', +1],
  [/\b(narrower|less volume|slimmer|columnar|straighter|less flare|pencil)\b/i, 'skirt.flare', -1],
  [/\b(higher neckline|raise the neck|more coverage|modest)\b/i, 'bodice.necklineY', +1],
  [/\b(lower neckline|deeper|drop the neck|plunge|lower the neck)\b/i, 'bodice.necklineY', -1],
  [/\b(stiffer|more structure|structured|architectural|hold its shape|crisper)\b/i, 'fabric.bend', +1],
  [/\b(softer|more fluid|drapier|floppier|less structure|fluid)\b/i, 'fabric.bend', -1],
  [/\b(heavier|more weight|weightier)\b/i, 'fabric.weight', +1],
  [/\b(lighter|less weight|weightless|floatier)\b/i, 'fabric.weight', -1],
]

/** Necklines are named, not nudged. */
const NECKLINE = [
  [/\bsweetheart\b/i, 'sweetheart'],
  [/\b(deep )?v[- ]?neck|\bplunging v\b/i, 'v'],
  [/\bsquare\b/i, 'square'],
  [/\b(bandeau|straight across|strapless)\b/i, 'bandeau'],
]

/**
 * Things a sentence must not decide. Each carries WHY, because "no" without a
 * reason is just an obstacle.
 */
const REFUSE = [
  [/\b(zip|zipper|button|hook|closure|fasten)\b/i,
   'Closure is a production decision — it changes placket width, the trim BOM and the factory operation. A technical designer decides it; it stays unresolved here.'],
  [/\b(size|grade|grading|bust measurement|POM|tolerance)\b/i,
   'Measurements and grading are production-critical. They come from the base size and the graded spec, never from a preview instruction.'],
  [/\b(seam allowance|interlining|lining|hem allowance|finish)\b/i,
   'Construction finishes are spec-sheet content. This panel shapes the concept; it cannot author a spec.'],
  [/\b(price|cost|supplier|factory|lead time)\b/i,
   'Commercial facts are typed by a person on the style sheet — supplier and cost for external work especially.'],
]

/**
 * @returns {{applied:{path,from,to,clamped}[], refused:{text,why}[],
 *            understood:string[], unknown:boolean}}
 */
export function correct(spec, text) {
  const applied = []
  const refused = []
  const understood = []

  for (const [re, why] of REFUSE) {
    const m = text.match(re)
    if (m) refused.push({ text: m[0], why })
  }

  // Explicit amounts win over hedges: "10cm longer" means 10cm.
  const explicit = text.match(/(-?\d+(?:\.\d+)?)\s*(cm|centimet\w*)/i)

  let mult = 1
  for (const [re, m] of AMOUNT) if (re.test(text)) { mult = m; break }

  for (const [re, path, sign] of INTENTS) {
    if (!re.test(text)) continue
    const rule = SCHEMA[path]
    const cur = get(spec, path)
    if (typeof cur !== 'number' || !rule) continue

    const delta = explicit && rule.unit === 'cm'
      ? Math.abs(Number(explicit[1])) * sign
      : rule.step * mult * sign

    const change = set(spec, path, cur + delta)
    understood.push(`${rule.label} ${sign > 0 ? 'increase' : 'decrease'}`)
    if (change) applied.push(change)
  }

  for (const [re, key] of NECKLINE) {
    if (!re.test(text)) continue
    const change = set(spec, 'bodice.neckline', key)
    understood.push(`Neckline → ${key}`)
    if (change) applied.push(change)
  }

  if (applied.length) {
    spec.history.push({
      at: new Date().toISOString(),
      said: text,
      changes: applied.map(describe),
    })
  }

  return {
    applied, refused, understood,
    unknown: applied.length === 0 && refused.length === 0,
  }
}

/** Undo the last instruction that changed anything. */
export function undo(spec, lastChanges) {
  for (const c of [...lastChanges].reverse()) set(spec, c.path, c.from)
  spec.history.pop()
}

export const EXAMPLES = [
  'make it a lot longer',
  '10cm shorter',
  'more volume in the skirt',
  'lower the neckline, deep v',
  'stiffer fabric so it holds its shape',
  'make the closure a zip',
]
