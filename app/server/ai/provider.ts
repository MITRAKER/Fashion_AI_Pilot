import type { CategoryTemplate, Confidence, Style } from '../../shared/types.ts'

// ---------------------------------------------------------------------------
// Provider abstraction (AI-001). The product must not depend on one model vendor,
// so drafting goes through this interface and nothing above it knows which model
// answered. Swapping in a real Claude call means implementing `draft` and changing
// one line in api.ts — the safety rules around the result do not move.
// ---------------------------------------------------------------------------

export interface DraftSuggestion {
  section: string
  label: string
  value: string
  confidence: Confidence
  rationale: string
}

export interface DraftDeclined {
  label: string
  reason: string
}

export interface DraftResult {
  provider: string
  model: string
  latencyMs: number
  costUsd: number
  suggestions: DraftSuggestion[]
  /** Fields the agent refused to invent. This list is a feature, not a shortfall. */
  declined: DraftDeclined[]
}

export interface DraftProvider {
  name: string
  model: string
  draft(style: Style, template: CategoryTemplate | null): Promise<DraftResult>
}

/* -------------------------------------------------------------------------
   The rule that governs every provider, including future real ones.

   A tech-pack field is one of three things:
     1. A convention — something the trade already agrees on. Draftable.
     2. A measurement — something only a test, a mill, or a fitting can produce.
     3. A decision — something only a person with authority can make.

   Only (1) may be drafted. (2) and (3) are declined with the reason, because a
   plausible guess in either category is exactly how a wrong garment gets made.
   ------------------------------------------------------------------------- */

const CONVENTIONS: Record<string, { value: string; confidence: Confidence; why: string }> = {
  'individual bagging': {
    value: 'Poly bag 300 x 400 mm, flat fold, hangtag inside, self-seal with vent holes',
    confidence: 'medium',
    why: 'Standard flat-fold bagging for a mid-weight woven garment. Confirm size against the folded garment.',
  },
  'carton spec': {
    value: '600 x 400 x 400 mm export carton, ratio 1-2-2-2-1, 20 pcs per carton',
    confidence: 'low',
    why: 'A conventional starting point only. Carton ratio depends on the order sheet, which is not in this pack.',
  },
  'bias hang time': {
    value: '24–48 hours hung on the form before hemming',
    confidence: 'medium',
    why: 'Bias elongates under its own weight; hanging before hemming is standard practice, not a guess about this fabric.',
  },
  'pressing': {
    value: 'Press seams open; no shine — use a pressing cloth on the face',
    confidence: 'medium',
    why: 'Conventional for a rigid woven. A finish-specific instruction may override it.',
  },
  'production lead time': {
    value: '90 days ex-factory from approved PPS',
    confidence: 'low',
    why: 'A placeholder based on typical woven lead times. The factory sets the real number.',
  },
  'samples required': {
    value: 'Proto x1, Fit x2, PPS x1, TOP x1',
    confidence: 'medium',
    why: 'Standard sample progression for a first-season style.',
  },
}

const NOT_DRAFTABLE: Record<string, string> = {
  'shrinkage': 'Shrinkage comes from the mill\'s wash test, not from a model. Request it from the supplier.',
  'stretch / recovery': 'A measured fabric property. Request the mill\'s test report.',
  'sleeve placket closure': 'The flat shows a placket but does not determine button vs. snap. This is a designer decision — it changes placket width, the trim BOM, and the factory operation.',
  'technical designer': 'An accountable person, not a specification. Assign it.',
  'base size': 'The drafted size is a decision that governs the whole graded table. A model must not pick it.',
  'main fabric': 'Composition and weight come from the supplier sheet.',
  'finish': 'Set by the mill and the wash house.',
  'target fob': 'A commercial figure, not a construction convention.',
}

/**
 * Local stub provider. Produces no network traffic and calls no model — it exists so
 * the drafting *workflow* (provenance, approval gates, cost ledger, refusals) can be
 * built and tested before a model vendor is chosen (PRD D-05, still open).
 *
 * It is deliberately labelled as a stub everywhere it surfaces. Nothing here should
 * be mistaken for model output.
 */
export const stubProvider: DraftProvider = {
  name: 'local-stub',
  model: 'convention-table-v1',

  async draft(style, template) {
    const started = Date.now()
    const suggestions: DraftSuggestion[] = []
    const declined: DraftDeclined[] = []

    const targets = style.fields.filter(f =>
      f.approval === 'Unresolved' || (!f.value.trim() && f.approval !== 'Approved'))

    for (const f of targets) {
      const key = f.label.toLowerCase()
      const conv = CONVENTIONS[key]
      const refuse = NOT_DRAFTABLE[key]

      if (refuse) {
        declined.push({ label: f.label, reason: refuse })
      } else if (conv) {
        suggestions.push({
          section: f.section, label: f.label, value: conv.value,
          confidence: conv.confidence, rationale: conv.why,
        })
      } else {
        declined.push({
          label: f.label,
          reason: 'No trade convention covers this field. It needs a human decision or a measurement.',
        })
      }
    }

    // Fields the category template requires but the pack does not carry at all.
    for (const rf of template?.requiredFields ?? []) {
      if (style.fields.some(x => x.section === rf.section && x.label === rf.label)) continue
      const conv = CONVENTIONS[rf.label.toLowerCase()]
      if (conv) {
        suggestions.push({
          section: rf.section, label: rf.label, value: conv.value,
          confidence: conv.confidence, rationale: conv.why,
        })
      } else {
        declined.push({
          label: rf.label,
          reason: 'Required by the category template but not draftable from convention.',
        })
      }
    }

    // Cost model mirrors what a real provider would report, so the ledger and the
    // budget cap are exercised for real even while the provider is a stub.
    const units = suggestions.length + declined.length
    return {
      provider: this.name, model: this.model,
      latencyMs: Date.now() - started + 40 * units,
      costUsd: Number((0.004 * Math.max(units, 1)).toFixed(4)),
      suggestions, declined,
    }
  },
}
