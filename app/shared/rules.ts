import type {
  CategoryTemplate, FactoryCorrection, Style, ValidationFinding,
} from './types.ts'
import { templateFor } from './categories.ts'

// ---------------------------------------------------------------------------
// Deterministic preflight (PRD §6.1 / VAL-001, VAL-002, VAL-003).
//
// Every rule here is arithmetic or presence-checking on the pack itself. No model
// judgement is involved, which is exactly why these are trustworthy enough to block
// an export. Model-based review may ADD warnings; it may never clear a blocker.
//
// Rule sources: fashion-grading (9), fashion-patternmaking (6), fashion-draping (4),
// fashion-tech-pack (section completeness).
// ---------------------------------------------------------------------------

let seq = 0
const f = (
  severity: 'blocker' | 'warning', family: string, ref: string,
  message: string, detail: string,
): ValidationFinding => ({
  id: `v${++seq}`, severity, family, ref, message, detail, source: 'deterministic',
})

export interface PreflightContext {
  /** Category schema (D-01). Falls back to the style's declared categoryKey. */
  template?: CategoryTemplate | null
  /** Accepted factory corrections promoted to rules (FAC-002). */
  corrections?: FactoryCorrection[]
}

export function runPreflight(style: Style, ctx: PreflightContext = {}): ValidationFinding[] {
  seq = 0
  const out: ValidationFinding[] = []
  // Look fields up by label, never by id: ids are per-style and a hardcoded one
  // silently reports on the wrong style.
  const byLabel = (label: string) =>
    style.fields.find(x => x.label.toLowerCase() === label.toLowerCase())
  const template = ctx.template ?? templateFor(style.categoryKey)

  // --- Completeness -------------------------------------------------------
  for (const fl of style.fields) {
    if (fl.approval === 'Unresolved') {
      out.push(f(
        fl.critical ? 'blocker' : 'warning',
        'Completeness', `${fl.section} · ${fl.label}`,
        `${fl.label} is unresolved`,
        fl.note ?? 'Field is required for this category and stage but has no value.',
      ))
    }
  }

  // --- Category schema (D-01) ---------------------------------------------
  // Required fields and POMs come from the category template, not from constants,
  // so changing the pilot category changes data rather than code.
  if (!template) {
    out.push(f('blocker', 'Completeness', 'Category',
      `No category template for "${style.categoryKey || 'unset'}"`,
      'A style cannot be preflighted until its category schema is defined and signed off.'))
  } else {
    for (const rf of template.requiredFields) {
      const present = style.fields.find(x => x.section === rf.section && x.label === rf.label)
      if (!present) {
        out.push(f(rf.critical ? 'blocker' : 'warning', 'Completeness',
          `${rf.section} · ${rf.label}`,
          `Required field "${rf.label}" is absent from the pack`,
          `The ${template.label} template requires this field. Add it, or mark it not applicable with a reason.`))
      } else if (!present.value.trim() && present.approval !== 'Unresolved') {
        out.push(f(rf.critical ? 'blocker' : 'warning', 'Completeness',
          `${rf.section} · ${rf.label}`,
          `Required field "${rf.label}" is empty`,
          `Required by the ${template.label} template.`))
      }
    }
    for (const rp of template.requiredPoms) {
      if (!style.poms.some(pm => pm.code === rp.code)) {
        out.push(f('blocker', 'Completeness', `POM ${rp.code}`,
          `Required point of measure "${rp.name}" (${rp.code}) is missing`,
          `The ${template.label} template requires this measurement.`))
      }
    }
    if (!template.signedOffBy) {
      out.push(f('warning', 'Approval integrity', `Template · ${template.key}`,
        'Category schema has not been signed off by a technical designer',
        'PRD D-01 and the pilot acceptance checklist both require the category schema to be approved before real work runs against it.'))
    }
  }

  // --- Base size / units --------------------------------------------------
  if (!style.baseSize || !byLabel('Base size')?.value.trim()) {
    out.push(f('blocker', 'Measurement integrity', 'Cover · Base size',
      'Base size is not declared',
      'A graded spec without a stated base size is unreadable — nobody can tell which column is drafted truth and which is derived.'))
  }

  const units = new Set(style.poms.map(pm => pm.unit))
  if (units.size > 1) {
    out.push(f('blocker', 'Measurement integrity', 'POM table',
      `Mixed units across the graded spec (${[...units].join(', ')})`,
      'Declare the unit once at pack level and never mix. Mixed units are the most direct route to a wrong garment.'))
  }

  // --- Duplicate POM codes -------------------------------------------------
  const seen = new Map<string, number>()
  for (const pm of style.poms) seen.set(pm.code, (seen.get(pm.code) ?? 0) + 1)
  for (const [code, n] of seen) {
    if (n > 1) {
      out.push(f('blocker', 'Measurement integrity', `POM ${code}`,
        `Duplicate POM code "${code}" appears ${n} times`,
        'The factory cannot tell which row governs. Remove or re-code the duplicate.'))
    }
  }

  // --- Per-POM checks ------------------------------------------------------
  for (const pm of style.poms) {
    if (!pm.tolerance.trim()) {
      out.push(f('warning', 'Measurement integrity', `POM ${pm.code}`,
        `No tolerance on "${pm.name}"`,
        'Every POM carries a ± value. A POM with no tolerance is an argument waiting to happen.'))
    }
    if (!pm.method.trim()) {
      out.push(f('blocker', 'Measurement integrity', `POM ${pm.code}`,
        `No measurement method on "${pm.name}"`,
        'Two people measuring the same garment differently is the most common cause of a rejected sample.'))
    }

    // monotonicity + increment consistency across the size range
    const vals = style.sizeRange.map(s => pm.sizes[s]).filter(v => v != null) as number[]
    for (let i = 1; i < vals.length; i++) {
      if (vals[i] < vals[i - 1]) {
        out.push(f('blocker', 'Measurement integrity', `POM ${pm.code}`,
          `Non-monotonic grade on "${pm.name}"`,
          `${style.sizeRange[i]} (${vals[i]}) is smaller than ${style.sizeRange[i - 1]} (${vals[i - 1]}). A measurement cannot shrink as size grows.`))
        break
      }
    }
    const incs = vals.slice(1).map((v, i) => +(v - vals[i]).toFixed(2))
    const uniq = [...new Set(incs)]
    if (uniq.length > 1 && !incs.some(x => x < 0)) {
      out.push(f('warning', 'Measurement integrity', `POM ${pm.code}`,
        `Inconsistent grade increment on "${pm.name}"`,
        `Increments ${incs.join(', ')} vary across size breaks with no documented reason. Non-linear grading is legitimate for extended sizes but must be stated.`))
    }
  }

  // --- Draping / grain (fashion-draping) -----------------------------------
  const bias = style.fields.find(x => /grain/i.test(x.label) && /bias/i.test(x.value))
  if (bias) {
    const hang = style.fields.find(x => /hang time/i.test(x.label))
    if (!hang || !hang.value.trim()) {
      out.push(f('blocker', 'Construction logic', 'Construction · Bias hang time',
        'Bias-cut piece with no hang-time instruction',
        'Bias elongates under its own weight. Without hang time before hemming, the hem drops unevenly after first wear.'))
    }
  }

  // --- Patternmaking: closure without opening ------------------------------
  const closure = style.fields.find(x => /closure/i.test(x.label))
  if (closure && !closure.value.trim()) {
    out.push(f('blocker', 'Construction logic', 'Construction · Closure',
      'Closure referenced but not specified',
      'The flat shows a placket. Button vs. snap changes placket width, trim BOM, and factory operation.'))
  }

  // --- BOM / trim completeness ---------------------------------------------
  for (const b of style.bom) {
    if (!b.composition.trim() || !b.qty.trim()) {
      out.push(f('blocker', 'Completeness', `BOM · ${b.material || 'unnamed row'}`,
        'Incomplete BOM row',
        'Every BOM line needs composition, weight, placement, supplier, and quantity.'))
    }
  }
  for (const t of style.trims) {
    if (!/\d/.test(t.placement)) {
      out.push(f('warning', 'Completeness', `Trim · ${t.item}`,
        `Placement of "${t.item}" is not dimensioned`,
        '"Left side seam" is ambiguous. Give a measured position from a named reference point.'))
    }
  }

  // --- AI draft restriction (TEC-003) --------------------------------------
  const unapprovedAi = [
    ...style.fields.filter(x => x.critical && x.aiInvolved && x.approval === 'Suggested'),
    ...style.poms.filter(x => x.critical && x.aiInvolved && x.approval === 'Suggested'),
  ]
  if (unapprovedAi.length) {
    out.push(f('blocker', 'Approval integrity', 'Provenance',
      `${unapprovedAi.length} AI-drafted production-critical field(s) awaiting human approval`,
      'No AI-generated production-critical value is authoritative until a qualified human approves it.'))
  }

  // NOTE: an earlier draft blocked here when the technical gate had no named approver.
  // That deadlocks — approving is what names the approver — so accountability is
  // enforced instead by requiring a "Technical designer" on the pack (category
  // template) and by recording the approving user server-side at approval time.

  // --- Open factory questions ----------------------------------------------
  const open = style.thread.filter(m => m.state === 'Open' || m.state === 'Requires Revision')
  if (open.length) {
    out.push(f('warning', 'Version integrity', 'Factory thread',
      `${open.length} unresolved factory question(s)`,
      'Exporting while questions are open reproduces the ambiguity that caused them.'))
  }

  // --- Learned rules (FAC-002) ---------------------------------------------
  // Corrections a factory taught us, accepted by a human, now enforced on every
  // style. This is the only part of the system that gets harder to copy over time.
  for (const c of ctx.corrections ?? []) {
    if (!c.accepted) continue
    let violated = false
    if (c.kind === 'require_field') {
      const fl = style.fields.find(x => x.label.toLowerCase() === c.target.toLowerCase())
      violated = !fl || !fl.value.trim()
    } else if (c.kind === 'require_pom_tolerance') {
      violated = style.poms.some(pm => pm.code === c.target && !pm.tolerance.trim())
    } else if (c.kind === 'require_dimensioned_placement') {
      violated = style.trims.some(
        t => t.item.toLowerCase() === c.target.toLowerCase() && !/\d/.test(t.placement))
    }
    if (violated) {
      out.push(f(c.severity, 'Learned from factory', c.target, c.message,
        `Promoted from a factory correction on ${c.styleId}. Accepted by ${c.acceptedBy ?? 'unknown'}.`))
    }
  }

  return out
}

export const summarise = (findings: ValidationFinding[]) => ({
  blockers: findings.filter(x => x.severity === 'blocker').length,
  warnings: findings.filter(x => x.severity === 'warning').length,
})
