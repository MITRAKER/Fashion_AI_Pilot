/**
 * The garment as a SPEC, not as code.
 *
 * My dress was hardcoded: change the length and you edit dress.js. Natalie's
 * engine is spec-driven — a JSON document with a garmentType and components
 * drives the panels — which is the better architecture, because a document can
 * be versioned, diffed, sent to a factory, and edited by something other than a
 * programmer.
 *
 * This mirrors that shape so the two can converge rather than compete. Field
 * names follow her demo (`garmentType`, `components`) where they were visible.
 *
 * Every value carries a unit and a range. The range is not decoration: it is
 * what lets a correction be clamped and refused rather than silently producing
 * a garment nobody could make.
 */

export const UNITS = 'cm'

/** Ranges are concept-plausible bounds, not grade rules. */
export const SCHEMA = {
  'skirt.length':      { min: 30,  max: 145, step: 5,    unit: 'cm', label: 'Skirt length' },
  'skirt.flare':       { min: 0.04, max: 0.55, step: 0.04, unit: '',  label: 'Skirt flare' },
  'bodice.necklineY':  { min: 0.46, max: 0.60, step: 0.015, unit: '', label: 'Neckline height' },
  'sleeve.length':     { min: 0,   max: 62,  step: 5,    unit: 'cm', label: 'Sleeve length' },
  'fabric.bend':       { min: 0.02, max: 0.60, step: 0.05, unit: '',  label: 'Fabric stiffness' },
  'fabric.weight':     { min: 3.0, max: 9.0, step: 0.6,  unit: '',   label: 'Fabric weight' },
}

/** A default spec. Lengths in cm; the 3D scale is 1 unit = 1 m. */
export function defaultSpec() {
  return {
    specVersion: 1,
    garmentType: 'column_dress',
    baseSize: null,                 // D-01 — a human declares this
    units: UNITS,
    components: [
      { id: 'bodice', type: 'bodice', neckline: 'sweetheart', necklineY: 0.545,
        shoulderDetail: 0, bustDetail: 0 },
      { id: 'skirt', type: 'skirt', length: 78, flare: 0.30, hemFinish: 'unresolved' },
      { id: 'fabric', type: 'material', name: 'Silk georgette',
        bend: 0.05, weight: 5.6, colour: null, printMode: 'mixed' },
    ],
    /** Anything a reference image cannot determine. Blocks export by design. */
    unresolved: ['closure', 'seamFinish', 'interlining', 'hemAllowance'],
    history: [],
  }
}

const partOf = (spec, id) => spec.components.find(c => c.id === id)

/** Read a dotted path such as 'skirt.length'. */
export function get(spec, path) {
  const [id, key] = path.split('.')
  return partOf(spec, id)?.[key]
}

/**
 * Write a dotted path, clamped to the schema.
 * @returns {{path,from,to,clamped:boolean}|null} what actually changed
 */
export function set(spec, path, value) {
  const [id, key] = path.split('.')
  const part = partOf(spec, id)
  if (!part) return null
  const rule = SCHEMA[path]
  const from = part[key]
  let to = value
  let clamped = false
  if (rule && typeof to === 'number') {
    const c = Math.min(rule.max, Math.max(rule.min, to))
    clamped = c !== to
    to = +c.toFixed(3)
  }
  if (to === from) return null
  part[key] = to
  return { path, from, to, clamped }
}

/** The spec translated into what the 3D builder needs. */
export function toDressOptions(spec) {
  const bodice = partOf(spec, 'bodice')
  const skirt = partOf(spec, 'skirt')
  const fabric = partOf(spec, 'fabric')
  return {
    neckline: bodice?.neckline ?? 'sweetheart',
    necklineY: bodice?.necklineY,
    length: (skirt?.length ?? 78) / 100,        // cm → metres
    drape: {
      bend: fabric?.bend ?? 0.10,
      gravity: -(fabric?.weight ?? 5.6),
      damp: 0.964,
      flare: skirt?.flare ?? 0.30,
    },
    shoulderDetail: bodice?.shoulderDetail ?? 0,
    bustDetail: bodice?.bustDetail ?? 0,
  }
}

/** Human-readable one-liner for a change, for the history panel. */
export function describe(change) {
  const rule = SCHEMA[change.path]
  const label = rule?.label ?? change.path
  const unit = rule?.unit ?? ''
  const fmt = v => (typeof v === 'number' ? `${+v.toFixed(2)}${unit}` : String(v))
  return `${label}: ${fmt(change.from)} → ${fmt(change.to)}${change.clamped ? ' (clamped to range)' : ''}`
}
