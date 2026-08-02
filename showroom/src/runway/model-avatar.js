import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { createRigCoat } from './rig-coat.js'
import { makeWool } from '../materials/library.js'

/**
 * Avatar backed by a real rigged character instead of procedural primitives.
 *
 * The procedural figure hit a ceiling: maths is good at cloth, lighting and
 * staging, and bad at faces, because a face is a thousand small asymmetries a
 * sculptor puts there by hand. This loads a professionally built mesh — proper
 * topology, baked skin textures, a 65-joint skeleton — and drives it with the
 * catwalk gait written for the procedural rig.
 *
 * The shipped clips are SambaDance and TPose, neither of which is a runway walk,
 * so the skeleton is posed directly each frame. Same public API as createAvatar()
 * so wardrobe, hotspots and runway-main need no changes.
 *
 * ASSET PROVENANCE — read before this goes anywhere near a client build:
 *   Michelle.glb, from the three.js repository examples, originally a Mixamo
 *   (Adobe) character. Fine for internal development and this demonstrator.
 *   Commercial redistribution needs the Mixamo terms checked — exactly the D-06
 *   question this project applies to books and images, applied to a mesh.
 */

const MODEL_URL = 'models/Michelle.glb'

const GROUND_Y = -0.56
const RUNWAY_START_Z = -14.0
const RUNWAY_PIT_Z = -0.2
const WALK_SPEED = 1.4

/** Mixamo rigs use these names verbatim. */
const B = {
  hips: 'mixamorigHips',
  spine: 'mixamorigSpine', spine1: 'mixamorigSpine1', spine2: 'mixamorigSpine2',
  neck: 'mixamorigNeck', head: 'mixamorigHead',
  lShoulder: 'mixamorigLeftShoulder', lArm: 'mixamorigLeftArm',
  lFore: 'mixamorigLeftForeArm', lHand: 'mixamorigLeftHand',
  rShoulder: 'mixamorigRightShoulder', rArm: 'mixamorigRightArm',
  rFore: 'mixamorigRightForeArm', rHand: 'mixamorigRightHand',
  lUpLeg: 'mixamorigLeftUpLeg', lLeg: 'mixamorigLeftLeg', lFoot: 'mixamorigLeftFoot',
  rUpLeg: 'mixamorigRightUpLeg', rLeg: 'mixamorigRightLeg', rFoot: 'mixamorigRightFoot',
}

export async function createModelAvatar(envMap) {
  const group = new THREE.Group()
  group.position.set(0.68, GROUND_Y, RUNWAY_START_Z)

  const gltf = await new GLTFLoader().loadAsync(MODEL_URL)
  const root = gltf.scene
  group.add(root)

  const bones = {}
  const rest = {}
  let skinned = null

  root.traverse(o => {
    if (o.isSkinnedMesh) {
      skinned = o
      o.castShadow = true
      o.receiveShadow = true
      o.frustumCulled = false          // the skeleton moves it outside its bounds
      const m = o.material
      if (m) {
        m.envMap = envMap
        m.envMapIntensity = 0.9
        m.roughness = Math.min(m.roughness ?? 0.8, 0.72)
      }
    }
    if (o.isBone) {
      for (const [k, name] of Object.entries(B)) if (o.name === name) bones[k] = o
    }
  })

  // Rest pose is the reference every gait offset is applied against, so a bone
  // never accumulates drift frame to frame.
  for (const [k, bone] of Object.entries(bones)) rest[k] = bone.quaternion.clone()

  // Scale to the same 1.86m figure the camera rig and hotspot anchors were
  // solved against, then drop the soles onto the deck. Measured, not assumed —
  // the same discipline the procedural rig needed.
  root.updateMatrixWorld(true)
  const h = new THREE.Box3().setFromObject(root).getSize(new THREE.Vector3()).y
  if (h > 0.01) {
    root.scale.setScalar(1.86 / h)
    root.updateMatrixWorld(true)
  }
  const worldMinY = new THREE.Box3().setFromObject(root).min.y
  root.position.y += GROUND_Y - worldMinY

  /* ------------------------------------------------------------------ gait */
  const e = new THREE.Euler()
  const q = new THREE.Quaternion()
  /** Apply an offset (radians, XYZ) on top of a bone's rest pose. */
  const set = (k, x, y, z) => {
    const bone = bones[k]
    if (!bone) return
    e.set(x, y, z)
    q.setFromEuler(e)
    bone.quaternion.copy(rest[k]).multiply(q)
  }

  /* ------------------------------------------------------------------ coat */
  // The character's own clothing is baked into one texture, so the wardrobe had
  // nothing real to change. This is an actual garment over the rig.
  // OFF BY DEFAULT (?coat=1 to enable). A pinned cloth cylinder does not read as
  // a coat on this figure — it settles into a barrel from collar to hem and
  // swallows the character, who already wears a properly modelled outfit. Kept
  // because the simulation and the bone re-pinning are correct and reusable; what
  // it lacks is a garment PATTERN (fronts, back, sleeves, lapel) rather than a
  // tube. Shipping it as-is would have made the scene worse, which is the whole
  // reason to look at renders instead of trusting that a feature "works".
  const coatOn = new URLSearchParams(location.search).has('coat')
  const coatMat = makeWool(envMap)
  const coat = createRigCoat(bones, root.scale.x || 1, coatMat)
  coat.mesh.visible = coatOn
  group.add(coat.mesh)

  const ARM_DROP = 1.28        // radians; T-pose arms down to the sides
  let phase = 0
  let walking = false
  let poseName = null
  let poseT = 0

  function gait(dt) {
    // Catwalk cadence: one full cycle is two steps. Narrow tracking, long stride,
    // strong hip sway with the shoulders counter-rotating against it.
    const sp = walking ? 1 : 0
    phase += dt * 2.35 * sp
    const p = phase
    const s = Math.sin(p), c = Math.cos(p)

    set('hips', 0.02 + 0.03 * Math.sin(p * 2), 0.10 * s, 0.09 * s)
    set('spine', 0.015, -0.05 * s, -0.035 * s)
    set('spine1', 0.0, -0.04 * s, -0.03 * s)
    set('spine2', -0.02, -0.03 * s, -0.02 * s)
    set('neck', -0.02, 0.03 * s, 0)
    set('head', -0.03, 0.02 * s, 0)

    // The bind pose is a T — arms horizontal. Everything here is an offset from
    // rest, so the arms must first be brought DOWN to the sides before any swing
    // reads as a walk. ARM_DROP is that correction; the swing rides on top of it.
    const lag = Math.sin(p - 0.5)
    set('lArm', 0.55 * lag, 0, -ARM_DROP)
    set('rArm', -0.55 * lag, 0, ARM_DROP)
    set('lFore', 0.16 + 0.10 * Math.max(0, lag), 0, 0)
    set('rFore', 0.16 + 0.10 * Math.max(0, -lag), 0, 0)

    // Legs: thigh drive, knee flexes only on the swing, foot rolls heel to toe.
    const swingL = Math.max(0, -s), swingR = Math.max(0, s)
    set('lUpLeg', 0.62 * s, 0, 0.03)
    set('rUpLeg', -0.62 * s, 0, -0.03)
    set('lLeg', 0.95 * swingL, 0, 0)
    set('rLeg', 0.95 * swingR, 0, 0)
    set('lFoot', -0.30 * swingL + 0.14 * Math.max(0, s), 0, 0)
    set('rFoot', -0.30 * swingR + 0.14 * Math.max(0, -s), 0, 0)

    // A pose arrests the walk and holds an attitude.
    if (poseName) {
      poseT += dt
      const k = Math.min(poseT / 0.30, 1)
      const w = k * k * (3 - 2 * k)
      if (poseName === 'A') { set('hips', 0.02, 0.16 * w, 0.20 * w); set('lArm', 0.1, 0, 0.55 * w) }
      if (poseName === 'B') { set('spine1', 0, -0.30 * w, 0); set('head', -0.04, -0.35 * w, 0) }
      if (poseName === 'C') { set('lArm', -0.35 * w, 0, 0.30); set('rArm', 0.35 * w, 0, -0.30) }
      if (poseT > 1.6) { poseName = null; poseT = 0 }
    }
  }

  gait(0)
  root.updateMatrixWorld(true)
  if (coatOn) coat.settle(3.2)

  /**
   * Where each garment hotspot lives ON THE RIG. Parenting to a bone rather than
   * to fixed coordinates means a marker tracks the body through the walk and
   * survives any change to proportions — the hardcoded offsets went stale the
   * moment the figure was replaced.
   *
   * Offsets are in bone-local space, scaled by the model's uniform scale.
   */
  const ATTACH = {
    collar:  ['neck',   [0, 0.02, 0.06]],
    closure: ['spine1', [0, 0.06, 0.13]],
    cuff:    ['lFore',  [0, -0.18, 0.02]],
    seam:    ['hips',   [0.14, 0.06, 0]],
    hem:     ['lLeg',   [0, -0.10, 0.06]],
  }

  return {
    group,
    torsoGroup: bones.spine2 ?? root,

    /**
     * An Object3D parented to the right bone for a hotspot id, or null if this
     * rig has no sensible home for it (the caller then falls back).
     */
    attach(id) {
      const spec = ATTACH[id]
      if (!spec) return null
      const bone = bones[spec[0]]
      if (!bone) return null
      const o = new THREE.Object3D()
      // Bone space is unscaled; divide so the offset lands where intended.
      const s = root.scale.x || 1
      o.position.set(spec[1][0] / s, spec[1][1] / s, spec[1][2] / s)
      bone.add(o)
      return o
    },

    coat: skinned,
    get z() { return group.position.z },
    get isAtPit() { return Math.abs(group.position.z - RUNWAY_PIT_Z) < 0.25 },

    setWalking(w) { walking = w },
    strikePose(name) {
      const k = String(name || '').replace(/^pose/i, '').toUpperCase()
      poseName = k === 'B' || k === 'C' ? k : 'A'
      poseT = 0
    },

    /**
     * Dress her. The shell recolours the simulated coat, not the character —
     * tinting the body was only ever a stand-in. Underlayer and shoe entries
     * have no separate mesh on this rig yet, so they are accepted and ignored
     * rather than silently repainting her skin.
     */
    setLook(look = {}) {
      if (look.coat !== undefined) {
        coatMat.color.set(look.coat)
        // Sheen tracks the shell so a backlit silhouette keeps its fuzz halo
        // instead of fringing in the previous colourway (ART-DIRECTION §5).
        coatMat.sheenColor.set(look.coat)
        coatMat.sheenColor.offsetHSL(0, -0.12, 0.20)
      }
      if (look.coatVisible !== undefined) coat.mesh.visible = coatOn && look.coatVisible
    },

    update(dt) {
      const step = Math.min(dt, 1 / 30)
      if (walking && !poseName) {
        group.position.z = Math.min(group.position.z + WALK_SPEED * step, RUNWAY_PIT_Z)
      }
      gait(step)
      // Cloth after the skeleton, so it hangs from where the bones actually are
      // this frame rather than a frame behind.
      if (coatOn) {
        root.updateMatrixWorld(true)
        coat.update(step)
      }
    },
  }
}
