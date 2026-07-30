import * as THREE from 'three'

/**
 * Procedural 3D Fashion Runway Model Avatar & Locomotion Solver
 *
 * Implements:
 * - Parametric 3D fashion mannequin with head, shoulders, bust, waist, hips, legs & arms
 * - Realistic catwalk gait animation (hips sway, shoulder counter-rotation, arm swing)
 * - T-stage pit pose keyframes (Strike Pose A: Power Stance, Pose B: Shoulder Twist, Pose C: Jacket Flare)
 */
export function createAvatar(envMap) {
  const group = new THREE.Group()

  // Mannequin PBR material (Sleek porcelain/sand satin sheen)
  const skinMat = new THREE.MeshPhysicalMaterial({
    color: 0xe6e1da,
    metalness: 0.05,
    roughness: 0.45,
    clearcoat: 0.35,
    clearcoatRoughness: 0.25,
    sheen: 0.3,
    sheenColor: new THREE.Color(0xffffff),
    envMap,
    envMapIntensity: 1.0,
  })

  // 1. Torso & Hips Group
  const torsoGroup = new THREE.Group()
  group.add(torsoGroup)

  // Head
  const headGeo = new THREE.SphereGeometry(0.088, 32, 24)
  headGeo.scale(0.85, 1.15, 0.92)
  const head = new THREE.Mesh(headGeo, skinMat)
  head.position.set(0, 0.76, 0)
  head.castShadow = true
  torsoGroup.add(head)

  // Neck
  const neckGeo = new THREE.CylinderGeometry(0.045, 0.052, 0.10, 24)
  const neck = new THREE.Mesh(neckGeo, skinMat)
  neck.position.set(0, 0.65, 0)
  torsoGroup.add(neck)

  // Upper Body / Chest
  const chestGeo = new THREE.CylinderGeometry(0.148, 0.125, 0.26, 32)
  chestGeo.scale(1.0, 1.0, 0.76)
  const chest = new THREE.Mesh(chestGeo, skinMat)
  chest.position.set(0, 0.48, 0)
  chest.castShadow = true
  torsoGroup.add(chest)

  // Waist & Hips
  const hipsGeo = new THREE.CylinderGeometry(0.122, 0.152, 0.24, 32)
  hipsGeo.scale(1.0, 1.0, 0.78)
  const hips = new THREE.Mesh(hipsGeo, skinMat)
  hips.position.set(0, 0.24, 0)
  hips.castShadow = true
  torsoGroup.add(hips)

  // 2. Arms (Left Arm & Right Arm)
  const leftArmGroup = new THREE.Group()
  leftArmGroup.position.set(0.165, 0.54, 0)
  torsoGroup.add(leftArmGroup)

  const armGeo = new THREE.CylinderGeometry(0.038, 0.030, 0.38, 16)
  const leftArm = new THREE.Mesh(armGeo, skinMat)
  leftArm.position.set(0, -0.19, 0)
  leftArm.castShadow = true
  leftArmGroup.add(leftArm)

  const rightArmGroup = new THREE.Group()
  rightArmGroup.position.set(-0.165, 0.54, 0)
  torsoGroup.add(rightArmGroup)

  const rightArm = new THREE.Mesh(armGeo, skinMat)
  rightArm.position.set(0, -0.19, 0)
  rightArm.castShadow = true
  rightArmGroup.add(rightArm)

  // 3. Legs (Left Leg & Right Leg)
  const leftLegGroup = new THREE.Group()
  leftLegGroup.position.set(0.078, 0.12, 0)
  group.add(leftLegGroup)

  const legGeo = new THREE.CylinderGeometry(0.052, 0.036, 0.68, 24)
  const leftLeg = new THREE.Mesh(legGeo, skinMat)
  leftLeg.position.set(0, -0.34, 0)
  leftLeg.castShadow = true
  leftLegGroup.add(leftLeg)

  const rightLegGroup = new THREE.Group()
  rightLegGroup.position.set(-0.078, 0.12, 0)
  group.add(rightLegGroup)

  const rightLeg = new THREE.Mesh(legGeo, skinMat)
  rightLeg.position.set(0, -0.34, 0)
  rightLeg.castShadow = true
  rightLegGroup.add(rightLeg)

  // High Heels Boots Hardware Material
  const bootMat = new THREE.MeshPhysicalMaterial({
    color: 0x141416,
    metalness: 0.9,
    roughness: 0.15,
  })
  const bootGeo = new THREE.BoxGeometry(0.065, 0.12, 0.14)

  const leftBoot = new THREE.Mesh(bootGeo, bootMat)
  leftBoot.position.set(0, -0.66, 0.02)
  leftBoot.castShadow = true
  leftLegGroup.add(leftBoot)

  const rightBoot = new THREE.Mesh(bootGeo, bootMat)
  rightBoot.position.set(0, -0.66, 0.02)
  rightBoot.castShadow = true
  rightLegGroup.add(rightBoot)

  // Locomotion & State Machine Parameters
  let walkDistance = 0
  let isWalking = true
  let currentPose = 'walk'
  let poseTime = 0
  const RUNWAY_START_Z = -14.0
  const RUNWAY_PIT_Z = -0.2
  const WALK_SPEED = 1.4

  group.position.set(0.68, 0.04, RUNWAY_START_Z)

  return {
    group,
    torsoGroup,
    get z() {
      return group.position.z
    },
    get isAtPit() {
      return Math.abs(group.position.z - RUNWAY_PIT_Z) < 0.25
    },
    setWalking(walk) {
      isWalking = walk
    },
    strikePose(poseName) {
      currentPose = poseName
      poseTime = 0
    },
    update(dt) {
      if (isWalking) {
        // Advance down runway towards pit (Z = -14 -> Z = -0.2)
        group.position.z += WALK_SPEED * dt
        if (group.position.z > RUNWAY_PIT_Z) {
          group.position.z = RUNWAY_PIT_Z
        }
        walkDistance += WALK_SPEED * dt * 4.5
      }

      const cycle = Math.sin(walkDistance)
      const cosCycle = Math.cos(walkDistance)

      if (currentPose === 'walk') {
        // Catwalk Gait Animation: Hips sway, shoulders counter-rotate, legs & arms swing
        torsoGroup.rotation.z = cycle * 0.08 // Hips sway
        torsoGroup.rotation.y = -cycle * 0.12 // Shoulder counter-rotation
        head.rotation.y = cycle * 0.06 // Head stays focused forward

        leftLegGroup.rotation.x = cycle * 0.38
        rightLegGroup.rotation.x = -cycle * 0.38

        leftArmGroup.rotation.x = -cycle * 0.32
        leftArmGroup.rotation.z = 0.12 + Math.abs(cycle) * 0.06
        rightArmGroup.rotation.x = cycle * 0.32
        rightArmGroup.rotation.z = -0.12 - Math.abs(cycle) * 0.06

        group.position.y = 0.04 + Math.abs(cosCycle) * 0.028
      } else if (currentPose === 'poseA') {
        // Strike Pose A: Power Stance
        poseTime += dt
        const t = Math.min(poseTime * 3, 1.0)
        torsoGroup.rotation.set(0, 0.22 * t, -0.08 * t)
        leftLegGroup.rotation.set(0, 0, 0.18 * t)
        rightLegGroup.rotation.set(0, 0, -0.18 * t)
        leftArmGroup.rotation.set(-0.35 * t, 0, 0.42 * t)
        rightArmGroup.rotation.set(-0.15 * t, 0, -0.25 * t)
      } else if (currentPose === 'poseB') {
        // Strike Pose B: Over-the-Shoulder Twist
        poseTime += dt
        const t = Math.min(poseTime * 3, 1.0)
        torsoGroup.rotation.set(0.06 * t, -0.52 * t, 0.12 * t)
        head.rotation.set(0, 0.65 * t, 0)
        leftArmGroup.rotation.set(0.25 * t, 0, 0.20 * t)
        rightArmGroup.rotation.set(-0.45 * t, 0, -0.38 * t)
      }
    },
    resetPosition() {
      group.position.z = RUNWAY_START_Z
      currentPose = 'walk'
      isWalking = true
    },
  }
}
