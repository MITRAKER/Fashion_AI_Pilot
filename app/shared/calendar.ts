import type { Stage } from './types.ts'

/**
 * The 52-week calendar, taken from Natalie's "The 52-Week Fashion Calendar:
 * Market Dates and the Dress Company Development Cycle" (N. Walker, 2026).
 *
 * What was here before was a 15-stage list counting UP from week 1, anchored to
 * nothing, with no owners and no sources. Three things were wrong with it and
 * all three come from the same mistake — treating the calendar as a project
 * plan instead of a delivery schedule:
 *
 *   1. Direction. A season is back-scheduled from its START-SHIP date. Weeks
 *      count DOWN to zero. Counting up from a kick-off means the calendar has
 *      no fixed point, so nothing reflows when a ship date moves.
 *   2. Order. Fabric locks BEFORE the mood board. The old list ran fabric
 *      sourcing (wk 2-6) alongside mood boards (wk 3-6) as parallel activities.
 *      They are not parallel: "a designer sitting down in March to build a mood
 *      board for the following spring is working inside a fabric platform that
 *      was committed months earlier." Mills hold the long lead, not designers.
 *   3. Accountability. Every milestone has an owner and a documented basis.
 *      Invented durations are how a schedule quietly becomes fiction.
 *
 * The milestone table below is hers, row for row, including the citations. The
 * phase grouping follows the nine phases named in her wireframe: Plan →
 * Research → Concept → Design → Development → Sell-in → Pre-production →
 * Production → Logistics.
 */

export type Phase =
  | 'Plan' | 'Research' | 'Concept' | 'Design' | 'Development'
  | 'Sell-in' | 'Pre-production' | 'Production' | 'Logistics'

export interface Milestone {
  n: number
  /** Weeks BEFORE start-ship. Counts down; 0 is the floor set. */
  weeksBeforeShip: number
  name: string
  /** The function accountable, not a person. */
  owner: string
  /** Why this sits where it sits. Never invent one. */
  basis: string
  phase: Phase
  gate?: 'concept' | 'design' | 'technical' | 'handoff'
}

export const MILESTONES: Milestone[] = [
  { n: 1, weeksBeforeShip: 52, phase: 'Plan',
    name: 'Season strategy, line plan and merchandise plan sign-off',
    owner: 'Merch / Planning',
    basis: 'Nine to twelve months of runway before in-store (Skema3D)' },

  { n: 2, weeksBeforeShip: 50, phase: 'Research',
    name: 'Trend and colour direction locked; fabric market attended',
    owner: 'Design + Sourcing',
    basis: 'Fabric fairs sit ~12 months ahead, February for spring and September for autumn (Première Vision)' },

  // The pivot the old calendar got backwards. Everything creative downstream
  // is chosen from what this locks.
  { n: 3, weeksBeforeShip: 46, phase: 'Research',
    name: 'Fabric platform locked — staples confirmed, minimums and greige reserved, lab dips issued',
    owner: 'Sourcing',
    basis: 'Lab dip approval 10–15 days, mill fabric production ~25 days (ScanERP)' },

  { n: 4, weeksBeforeShip: 44, phase: 'Concept',
    name: 'Mood board / concept board presented on the locked fabric platform',
    owner: 'Design',
    basis: 'Concept approval and design brief sign-off precede tech packs (Skema3D)' },

  { n: 5, weeksBeforeShip: 42, phase: 'Concept', gate: 'concept',
    name: 'Concept and colour palette approved; lab dips and strike-offs approved',
    owner: 'Design + Merch',
    basis: 'Lab dip and strike-off approval is a named pre-production gate (Skema3D)' },

  { n: 6, weeksBeforeShip: 40, phase: 'Design',
    name: 'Design begins: silhouette development, sketching, CAD/3D',
    owner: 'Design',
    basis: 'Design phase precedes sampling phase (Skema3D)' },

  { n: 7, weeksBeforeShip: 36, phase: 'Design', gate: 'design',
    name: 'Line review 1 — style-by-style edit against the line plan',
    owner: 'Design + Merch',
    basis: 'Adds and kills before spec release (BlueKaktus)' },

  { n: 8, weeksBeforeShip: 34, phase: 'Development', gate: 'technical',
    name: 'Tech packs / spec packages released; first pattern and block development',
    owner: 'Tech Design',
    basis: 'Pattern making runs from the tech pack, days 1–3 of the factory calendar (ScanERP)' },

  { n: 9, weeksBeforeShip: 32, phase: 'Development',
    name: 'Protos and spec packs sent to the factory',
    owner: 'Tech Design + Sourcing',
    basis: 'Each sample round adds one to two weeks of shipping each way (Skema3D)' },

  { n: 10, weeksBeforeShip: 28, phase: 'Development',
    name: 'Protos in-house; fit session 1; comments returned',
    owner: 'Tech Design',
    basis: 'Minimum two sampling rounds: proto to validate construction, fit to finalise measurements (Skema3D)' },

  { n: 11, weeksBeforeShip: 26, phase: 'Development',
    name: 'Line freeze / line adoption',
    owner: 'Merch',
    basis: 'Style and fit approvals gate PO issuance (Gaurav Mandal)' },

  { n: 12, weeksBeforeShip: 25, phase: 'Sell-in',
    name: 'Salesman samples (SMS) ordered; bulk fabric blanket booked with mills',
    owner: 'Sourcing + Production',
    basis: 'SMS follows fit approval (Gaurav Mandal)' },

  { n: 13, weeksBeforeShip: 21, phase: 'Sell-in',
    name: 'SMS in-house; line sheets, wholesale pricing, look book and e-comm photography',
    owner: 'Sales + Merch',
    basis: 'Salesman samples are the shoot and sell-in set (Gaurav Mandal)' },

  { n: 14, weeksBeforeShip: 20, phase: 'Sell-in',
    name: 'Market opens — showroom appointments and trade shows',
    owner: 'Sales',
    basis: 'Buyers pre-book four to eight months ahead of delivery (AIMS360)' },

  { n: 15, weeksBeforeShip: 14, phase: 'Sell-in',
    name: 'Wholesale order cut-off',
    owner: 'Sales + Planning',
    basis: 'Every season carries a firm order cut-off before manufacturing is planned (AIMS360)' },

  { n: 16, weeksBeforeShip: 13, phase: 'Pre-production', gate: 'handoff',
    name: 'Bulk POs issued; bulk fabric released; trims booked',
    owner: 'Production',
    basis: 'PO issuance then bulk fabric order then trims (Gaurav Mandal)' },

  { n: 17, weeksBeforeShip: 11, phase: 'Pre-production',
    name: 'PP/TOP sample approved; GPT lab testing cleared',
    owner: 'Production + QA',
    basis: 'GPT submission and pilot run approval precede PCD (ScanERP)' },

  { n: 18, weeksBeforeShip: 10, phase: 'Production',
    name: 'PCD — bulk cutting starts',
    owner: 'Production',
    basis: 'PCD is one of the two governing dates (ScanERP)' },

  { n: 19, weeksBeforeShip: 6, phase: 'Production',
    name: 'Ex-factory after sewing, finishing and final QC',
    owner: 'Production',
    basis: 'Cutting to ex-factory runs day 75 to day 120 (ScanERP)' },

  { n: 20, weeksBeforeShip: 2, phase: 'Logistics',
    name: 'Freight transit complete; DC receipt, ticketing, allocation',
    owner: 'Logistics',
    basis: 'China to US West Coast ~34 days, East Coast 50–56 days (Flexport Ocean Timeliness Indicator)' },

  { n: 21, weeksBeforeShip: 0, phase: 'Logistics',
    name: 'Start ship / floor set',
    owner: 'Retail',
    basis: 'Start-ship and cancel window agreed at order (AIMS360)' },
]

/**
 * The in-season loop, which the back-scheduled table above cannot express.
 *
 * "The table is not wrong so much as unfinished." Every milestone above is a
 * fixed offset from start-ship. These are not: they fire on what actually sold.
 * A calendar row cannot say "reorder in week 3" — only "evaluate every Monday,
 * and act when the threshold is crossed". So `when` is deliberately a string
 * and `nature` says whether a date means anything at all.
 */
export interface InSeasonRow {
  when: string
  action: string
  owner: string
  nature: 'Fixed' | 'Recurring' | 'Triggered'
}

export const IN_SEASON: InSeasonRow[] = [
  { when: '0', nature: 'Fixed', owner: 'Planning',
    action: 'Test buy on the floor — the initial commitment, deliberately short of the forecast' },
  { when: '+1', nature: 'Fixed', owner: 'Planning',
    action: 'First full week of sell-through recorded; velocity index seeded per SKU' },
  { when: '+2 to +6', nature: 'Recurring', owner: 'Planning',
    action: 'Rolling four-to-six-week sell-through window matures; thresholds recalculated weekly' },
  { when: 'Any Monday from +2', nature: 'Triggered', owner: 'Planning',
    action: 'Reorder decision: fire when average weekly sales × replenishment lead time in weeks, plus safety stock, exceeds on-hand' },
  { when: 'On reorder', nature: 'Triggered', owner: 'Planning + Sourcing',
    action: "Chase feasibility check against the vendor's replenishment lead time and the fabric platform's reorder lead time" },
  { when: 'On reorder', nature: 'Triggered', owner: 'Fabric',
    action: 'Bulk dye-lot approval for the chase cut, if the colour is not held in stock' },
  { when: 'Cancel date', nature: 'Fixed', owner: 'Sales',
    action: 'Last date goods may be received against the original order' },
  { when: 'End of window', nature: 'Fixed', owner: 'Planning + Merch',
    action: 'Season post-mortem: sell-through by style, chase hit rate, thresholds recalibrated for next season' },
]

/**
 * The seven deliveries an American dress house ships in a selling year. Each is
 * back-scheduled 52 weeks from its own start-ship, so they overlap — several
 * seasons are always live at once.
 */
export const DELIVERIES = [
  { code: 'SP1', label: 'Spring 1' },
  { code: 'SP2', label: 'Spring 2' },
  { code: 'SUM', label: 'Summer' },
  { code: 'FA1', label: 'Fall 1' },
  { code: 'FA2', label: 'Fall 2' },
  { code: 'HOL', label: 'Holiday' },
  { code: 'RES', label: 'Resort' },
] as const

/** Calendar date a milestone falls on, given the season's start-ship date. */
export function milestoneDate(startShip: Date, weeksBeforeShip: number): Date {
  const d = new Date(startShip)
  d.setDate(d.getDate() - weeksBeforeShip * 7)
  return d
}

/**
 * A fresh season: every milestone not started, nothing approved, nothing
 * invented. `weeks` reads as "W-46" so the countdown is legible at a glance
 * rather than looking like an elapsed-week range.
 */
export const newSeasonStages = (): Stage[] =>
  MILESTONES.map(m => ({
    n: m.n,
    name: m.name,
    weeks: m.weeksBeforeShip === 0 ? 'W-0' : `W-${m.weeksBeforeShip}`,
    output: `${m.owner} · ${m.basis}`,
    status: 'Not Started' as const,
    ...(m.gate ? { gate: m.gate } : {}),
  }))
