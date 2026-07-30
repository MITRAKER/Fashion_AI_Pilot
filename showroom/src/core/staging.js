import * as THREE from 'three'

/**
 * OWNED BY: composition agent. See ART-DIRECTION §2.
 *
 * Camera framings. The capture harness requests these by name, and the critic
 * grades them, so a pose is a deliverable — not a debug convenience.
 *
 * Rules that must hold in every pose:
 *   - the slab is never axis-aligned to the camera
 *   - the sidebar never occludes the hero product name
 *   - negative space sits upper-right
 *   - the coat silhouette is separated from the background by rim light
 */
export const POSES = {
  /** The money shot. If only one frame is graded, it is this one. */
  hero:    { pos: [0.05, 0.16, 3.30], look: [0.02, -0.02, 0], fov: 32 },
  /** Tight on the hero card — type crispness and gold specular are judged here. */
  detail:  { pos: [0.62, 0.30, 1.95], look: [0.30, 0.02, 0], fov: 30 },
  /** The garment alone — cloth drape, sheen and rim separation. */
  garment: { pos: [0.95, 0.18, 2.05], look: [0.44, 0.04, -0.25], fov: 34 },
  /** Establishing shot — floor reflection, falloff, overall staging. */
  wide:    { pos: [-0.35, 0.42, 4.35], look: [0.05, -0.10, 0], fov: 30 },
}

export function applyPose(camera, name) {
  const p = POSES[name] ?? POSES.hero
  camera.position.set(...p.pos)
  camera.lookAt(new THREE.Vector3(...p.look))
  camera.fov = p.fov
  camera.updateProjectionMatrix()
  return p
}
