import type { Stage } from './types.ts'

/**
 * The 52-week season plan, as process rather than demo data.
 *
 * This lived inside the seeded synthetic collection, which meant a real season
 * created by a real user had no calendar at all — the plan only existed for the
 * fictional one. It is the same fifteen stages for every season, so it belongs
 * here, and both the seed and a newly created season now read it from one place.
 *
 * Weeks are the standard offsets from season kick-off. Four of the fifteen are
 * approval gates, and a gate is what makes this a plan rather than a list: a
 * stage cannot start until its upstream gate is satisfied or an override is
 * recorded.
 */
export interface StageTemplate {
  n: number
  name: string
  weeks: string
  /** Week the stage opens, used to date a real season from its kick-off. */
  startWeek: number
  output: string
  gate?: 'concept' | 'design' | 'technical' | 'handoff'
}

export const STAGE_PLAN: StageTemplate[] = [
  { n: 1, name: 'Trend research and concept direction', weeks: '1–3', startWeek: 1, output: 'Season, customer, colour, silhouette, fabric themes' },
  { n: 2, name: 'Fabric procurement and sourcing review', weeks: '2–6', startWeek: 2, output: 'Candidate fabrics, trims, suppliers, constraints' },
  { n: 3, name: 'Mood sketches and presentation boards', weeks: '3–6', startWeek: 3, output: 'Creative boards and early sketch directions' },
  { n: 4, name: 'Concept green light', weeks: '6', startWeek: 6, output: 'Approved collection direction', gate: 'concept' },
  { n: 5, name: 'Prototype presentation sketches', weeks: '6–10', startWeek: 6, output: 'Selected concepts with details and styling' },
  { n: 6, name: 'Design green light', weeks: '10', startWeek: 10, output: 'Approved styles entering technical development', gate: 'design' },
  { n: 7, name: 'Technical flats and spec drafting', weeks: '10–14', startWeek: 10, output: 'Factory-legible flats and a drafted spec sheet' },
  { n: 8, name: 'First prototype', weeks: '14–20', startWeek: 14, output: 'First sample cut and sewn against the spec' },
  { n: 9, name: 'First fitting', weeks: '20–22', startWeek: 20, output: 'Fit comments and corrections' },
  { n: 10, name: 'Second prototype', weeks: '22–26', startWeek: 22, output: 'Revised sample against fit comments' },
  { n: 11, name: 'Second fitting and finalisation', weeks: '26–28', startWeek: 26, output: 'Approved fit and finalised measurements' },
  // Two gates back to back, and they are not the same decision: the technical
  // gate locks the pack, the handoff gate commits the money behind it.
  { n: 12, name: 'Final technical package and handoff', weeks: '28–30', startWeek: 28, output: 'Locked pack, grading inputs, factory notes', gate: 'technical' },
  { n: 13, name: 'Production prep and costing', weeks: '30–34', startWeek: 30, output: 'Materials, quantities, costing, capacity, schedule', gate: 'handoff' },
  { n: 14, name: 'Bulk production', weeks: '34–44', startWeek: 34, output: 'Bulk cut, sewn and inspected' },
  { n: 15, name: 'Quality control, packing, and delivery', weeks: '44–52', startWeek: 44, output: 'QC results, issue closure, shipment readiness' },
]

/** A fresh season: every stage not started, nothing approved, nothing invented. */
export const newSeasonStages = (): Stage[] =>
  STAGE_PLAN.map(s => ({
    n: s.n,
    name: s.name,
    weeks: s.weeks,
    output: s.output,
    status: 'Not Started' as const,
    ...(s.gate ? { gate: s.gate } : {}),
  }))

/** Calendar date a stage opens, given the season's kick-off date. */
export function stageStartDate(kickoff: Date, startWeek: number): Date {
  const d = new Date(kickoff)
  d.setDate(d.getDate() + (startWeek - 1) * 7)
  return d
}
