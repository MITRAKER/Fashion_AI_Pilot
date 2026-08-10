/**
 * Stand-in for garment-engine when it is not installed.
 *
 * The real package is a local `file:` link to a folder outside this repository,
 * so it exists on one machine and nowhere else. vite.config.js aliases this
 * module in when the package cannot be resolved, which keeps the import
 * statement valid and turns a build failure into a null check.
 *
 * Null rather than a fake engine on purpose: a stub that quietly produced a
 * garment would be worse than none, because the page would look like it worked.
 */
export const GarmentEngine = null
export const ThreeGarmentMesh = null
