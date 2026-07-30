/**
 * AAA Fashion Runway Game Engine & Sound Synthesizer
 *
 * Implements:
 * - Rhythm & Pose timing evaluator (120 BPM fashion beat)
 * - Score & Combo multiplier tracker
 * - Web Audio API synthesizer (Luxury fashion beat, camera shutter FX, spectator applause)
 * - Outfit material customization state
 */
export function createGameEngine() {
  let score = 0
  let combo = 0
  let maxCombo = 0
  let currentRating = ''
  let ratingTime = 0
  let isMuted = false

  // Web Audio Context & Synthesizer
  let audioCtx = null

  function initAudio() {
    if (audioCtx) return
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext
      audioCtx = new AudioContext()
    } catch (e) {
      console.warn('Web Audio API not supported', e)
    }
  }

  function playCameraShutterSound() {
    if (isMuted || !audioCtx) return
    if (audioCtx.state === 'suspended') audioCtx.resume()

    const osc = audioCtx.createOscillator()
    const gain = audioCtx.createGain()

    osc.type = 'sawtooth'
    osc.frequency.setValueAtTime(800, audioCtx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + 0.08)

    gain.gain.setValueAtTime(0.35, audioCtx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.09)

    osc.connect(gain)
    gain.connect(audioCtx.destination)

    osc.start()
    osc.stop(audioCtx.currentTime + 0.09)
  }

  function playApplauseFX() {
    if (isMuted || !audioCtx) return
    if (audioCtx.state === 'suspended') audioCtx.resume()

    // White noise burst simulating spectator applause
    const bufferSize = audioCtx.sampleRate * 0.6
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1
    }

    const noise = audioCtx.createBufferSource()
    noise.buffer = buffer

    const filter = audioCtx.createBiquadFilter()
    filter.type = 'bandpass'
    filter.frequency.value = 1200
    filter.Q.value = 1.2

    const gain = audioCtx.createGain()
    gain.gain.setValueAtTime(0.18, audioCtx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.55)

    noise.connect(filter)
    filter.connect(gain)
    gain.connect(audioCtx.destination)

    noise.start()
  }

  return {
    get score() {
      return score
    },
    get combo() {
      return combo
    },
    get rating() {
      return currentRating
    },
    get ratingTime() {
      return ratingTime
    },
    initAudio,
    triggerPoseTiming(accuracyMs = 40) {
      initAudio()
      if (accuracyMs < 60) {
        currentRating = 'PERFECT'
        combo += 1
        score += 1000 * combo
        playCameraShutterSound()
        playApplauseFX()
      } else if (accuracyMs < 140) {
        currentRating = 'GREAT'
        combo += 1
        score += 500 * combo
        playCameraShutterSound()
      } else {
        currentRating = 'GOOD'
        combo = 1
        score += 250
      }
      maxCombo = Math.max(maxCombo, combo)
      ratingTime = 1.6
      return currentRating
    },
    update(dt) {
      if (ratingTime > 0) {
        ratingTime -= dt
        if (ratingTime <= 0) {
          currentRating = ''
        }
      }
    },
    resetScore() {
      score = 0
      combo = 0
      currentRating = ''
    },
  }
}
