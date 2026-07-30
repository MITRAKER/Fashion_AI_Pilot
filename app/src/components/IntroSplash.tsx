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

  /* Autoplay music on mount */
  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    a.volume = 0.7
    const tryPlay = () => {
      a.play().then(() => setIsPlayingAudio(true)).catch(() => {
        /* browsers block autoplay until first interaction — retry on click */
        const resume = () => {
          a.play().then(() => setIsPlayingAudio(true)).catch(() => {})
          document.removeEventListener('click', resume)
          document.removeEventListener('keydown', resume)
        }
        document.addEventListener('click', resume, { once: true })
        document.addEventListener('keydown', resume, { once: true })
      })
    }
    tryPlay()
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
          fontFamily: "'Orbitron', var(--mono)", fontSize: 11, letterSpacing: '.32em', color: 'var(--gold, #d4af37)',
          textTransform: 'uppercase', marginBottom: 16,
          textShadow: '0 1px 8px rgba(0,0,0,0.5)'
        }}>
          Spring / Summer 2027 Runway Experience
        </div>

        <h1 style={{
          fontFamily: "'Orbitron', sans-serif", fontSize: 52, fontWeight: 700,
          letterSpacing: '.06em', margin: '0 0 16px 0', textShadow: '0 2px 16px rgba(0,0,0,0.6)'
        }}>
          Atelier Pilot
        </h1>

        <p style={{
          fontFamily: "'Exo 2', sans-serif", fontSize: 15, color: 'rgba(255,255,255,0.92)',
          lineHeight: 1.6, marginBottom: 36, fontWeight: 300,
          textShadow: '0 1px 8px rgba(0,0,0,0.5)'
        }}>
          Collection Development · Interactive 3D Dress Form · Museum Rights Clearance · Tape Measure Calendar
        </p>

        <button
          onClick={() => {
            if (audioRef.current && !isPlayingAudio) {
              audioRef.current.play().catch(console.error)
            }
            onEnter()
          }}
          className="btn gold"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            padding: '14px 42px', fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase',
            background: 'linear-gradient(135deg, #e6ca65 0%, #b8932b 100%)', color: '#0f0f12',
            border: 'none', borderRadius: 4, fontWeight: 600, cursor: 'pointer',
            boxShadow: '0 8px 30px rgba(212, 175, 55, 0.4)', transition: 'all 0.3s ease'
          }}
        >
          Enter Runway Platform →
        </button>
      </div>
    </div>
  )
}
