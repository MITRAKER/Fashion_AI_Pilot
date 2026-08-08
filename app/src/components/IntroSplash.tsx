import { useState, useRef, useEffect } from 'react'

interface IntroSplashProps {
  onEnter: () => void
}

export function IntroSplash({ onEnter }: IntroSplashProps) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false)

  const base = window.location.pathname.includes('/Fashion_AI_Pilot') ? '/Fashion_AI_Pilot/' : '/'
  const videoSrc = `${base}intro-video.mp4`
  const audioSrc = `${base}intro-music.mp3`

  const audioRef = useRef<HTMLAudioElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  /**
   * Music is off until asked for, and it stops when this screen goes.
   *
   * The bug this replaces: the splash autoplayed on mount, and when autoplay was
   * blocked it armed a document-wide click/keydown listener that started the
   * music on the next interaction anywhere — so turning it off and then clicking
   * something turned it back on. Worse, Enter force-played it and then unmounted
   * this component a moment later. Removing an <audio loop> element from the DOM
   * does not stop playback in Chrome, so it detached and played forever with no
   * UI attached to it and no way to stop it short of closing the tab. That is
   * why it kept coming back, and why it played while off screen.
   *
   * Nothing here starts audio on its own now. The only cleanup that matters is
   * the one below.
   */
  useEffect(() => {
    const a = audioRef.current
    if (a) a.volume = 0.7
    return () => {
      if (!a) return
      a.pause()
      a.currentTime = 0
      a.src = ''          // detach the source so a detached element cannot resume
      a.load()
    }
  }, [])

  const toggleAudio = () => {
    if (!audioRef.current) return
    if (isPlayingAudio) {
      audioRef.current.pause()
      setIsPlayingAudio(false)
    } else {
      audioRef.current.play().catch(console.error)
      setIsPlayingAudio(true)
    }
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999, background: '#0a0a0c', color: '#fff',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden', fontFamily: 'var(--font-sans, system-ui)'
    }}>
      {/* Background Video — bright, no darkening */}
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
          opacity: 0.92
        }}
      />

      {/* Audio element */}
      <audio ref={audioRef} src={audioSrc} loop />

      {/* Soft vignette — very subtle, just enough for text readability */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at center, rgba(10,10,12,0.08) 0%, rgba(10,10,12,0.45) 90%)',
        pointerEvents: 'none'
      }} />

      {/* Music toggle — top right */}
      <div style={{
        position: 'absolute', top: 24, right: 30, display: 'flex', gap: 14, zIndex: 10
      }}>
        <button
          onClick={toggleAudio}
          className="btn sm"
          style={{
            background: isPlayingAudio ? 'var(--gold, #d4af37)' : 'rgba(255,255,255,0.15)',
            color: isPlayingAudio ? '#000' : '#fff', border: '1px solid rgba(255,255,255,0.3)',
            fontSize: 11, padding: '6px 14px', backdropFilter: 'blur(10px)', cursor: 'pointer'
          }}
        >
          {isPlayingAudio ? '🔊 Music Playing' : '🔇 Play Music'}
        </button>
      </div>

      {/* Content Branding Container */}
      <div style={{
        position: 'relative', zIndex: 5, textAlign: 'center', maxWidth: 640, padding: '0 24px',
        animation: 'fadeIn 1.2s ease-out'
      }}>
        <div style={{
          fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.32em', color: 'var(--gold, #d4af37)',
          textTransform: 'uppercase', marginBottom: 16,
          textShadow: '0 1px 8px rgba(0,0,0,0.5)'
        }}>
          Spring / Summer 2027
        </div>

        <h1 style={{
          fontFamily: 'var(--display)', fontSize: 52, fontWeight: 700,
          letterSpacing: '.06em', margin: '0 0 16px 0', textShadow: '0 2px 16px rgba(0,0,0,0.6)'
        }}>
          Fashion AI
        </h1>

        <p style={{
          fontFamily: 'var(--body)', fontSize: 15, color: 'rgba(255,255,255,0.92)',
          lineHeight: 1.6, marginBottom: 36, fontWeight: 300,
          textShadow: '0 1px 8px rgba(0,0,0,0.5)'
        }}>
          Collection Development · Interactive 3D Dress Form · Museum Rights Clearance · Tape Measure Calendar
        </p>

        <button
          // Entering must never start audio. This used to force-play and then
          // unmount, which is what orphaned the looping element.
          onClick={onEnter}
          className="btn gold"
          style={{
            fontFamily: 'var(--mono)',
            padding: '14px 42px', fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase',
            background: 'linear-gradient(135deg, #e6ca65 0%, #b8932b 100%)', color: '#0f0f12',
            border: 'none', borderRadius: 4, fontWeight: 600, cursor: 'pointer',
            boxShadow: '0 8px 30px rgba(212, 175, 55, 0.4)', transition: 'all 0.3s ease'
          }}
        >
          Enter →
        </button>
      </div>
    </div>
  )
}
