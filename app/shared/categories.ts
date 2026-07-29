import type { CategoryTemplate } from './types.ts'

// ---------------------------------------------------------------------------
// D-01 — "Which single garment category will define the pilot schema and rule set?"
//
// The answer is Natalie's, not ours. What we can decide is that the answer must not
// be hardcoded. A category template declares the fields and POMs that category needs
// to be complete, and the preflight engine reads it as data. Switching the pilot
// category becomes an entry in this file, not a rewrite.
//
// `woven-dress` is populated as a working default because it matches the seeded
// pilot style. Every entry needs Natalie's sign-off before it governs real work.
// ---------------------------------------------------------------------------

const req = (section: string, label: string, critical = true) => ({ section, label, critical })

export const CATEGORY_TEMPLATES: CategoryTemplate[] = [
  {
    key: 'woven-dress',
    label: 'Dress — woven',
    signedOffBy: null,
    requiredFields: [
      req('Cover', 'Style ID'), req('Cover', 'Base size'), req('Cover', 'Pack units'),
      req('Cover', 'Technical designer'), req('Cover', 'Factory', false),
      req('Fabric', 'Main fabric'), req('Fabric', 'Finish', false),
      req('Fabric', 'Shrinkage'), req('Fabric', 'Stretch / recovery'),
      req('Construction', 'Side seam'), req('Construction', 'Stitch density'),
      req('Construction', 'Hem'), req('Construction', 'Pressing', false),
      req('Packaging', 'Individual bagging', false), req('Packaging', 'Carton spec', false),
      req('Lead time', 'Production lead time', false),
      req('Lead time', 'Samples required', false),
    ],
    requiredPoms: [
      { code: 'A', name: 'Chest' },
      { code: 'B', name: 'Waist' },
      { code: 'C', name: 'Hip' },
      { code: 'D', name: 'Centre back length' },
      { code: 'E', name: 'Armhole depth' },
    ],
  },
  {
    key: 'woven-top',
    label: 'Top — woven',
    signedOffBy: null,
    requiredFields: [
      req('Cover', 'Style ID'), req('Cover', 'Base size'), req('Cover', 'Pack units'),
      req('Fabric', 'Main fabric'),
      req('Construction', 'Side seam'),
      req('Packaging', 'Individual bagging', false), req('Packaging', 'Carton spec', false),
      req('Lead time', 'Production lead time', false),
    ],
    requiredPoms: [
      { code: 'A', name: 'Chest' },
      { code: 'B', name: 'Body length from HPS' },
    ],
  },
]

export const templateFor = (key: string | null | undefined) =>
  CATEGORY_TEMPLATES.find(t => t.key === key) ?? null
