import { useState, useRef } from 'react'

interface IntroSplashProps {
  onEnter: () => void
}

/**
 * Runway Intro Splash — full-screen cinematic landing with the user's actual
 * screen recording as ambient backdrop and epic uplifting soundtrack.
 * Files served from /public via Vite (or /Fashion_AI_Pilot/ on GH Pages).
 */
export function IntroSplash({ onEnter }: IntroSplashProps) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false)

  /* resolve base path so assets work on both localhost and GitHub Pages */
  const base = window.location.pathname.includes('/Fashion_AI_Pilot') ? '/Fashion_AI_Pilot/' : '/'
  const [videoSrc, setVideoSrc] = useState<string>(`${base}intro-video.mp4`)
  const [audioSrc, setAudioSrc] = useState<string>(`${base}intro-music.mp3`)

  const audioRef = useRef<HTMLAudioElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

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

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setVideoSrc(URL.createObjectURL(file))
    }
  }

  const handleAudioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setAudioSrc(url)
      if (audioRef.current) {
        audioRef.current.src = url
        audioRef.current.play().catch(console.error)
        setIsPlayingAudio(true)
      }
    }
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999, background: '#0a0a0c', color: '#fff',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden', fontFamily: 'var(--font-sans, system-ui)'
    }}>
      {/* Background Video */}
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
          opacity: 0.45, filter: 'contrast(1.1) brightness(0.85)'
        }}
      />

      {/* Audio element */}
      <audio ref={audioRef} src={audioSrc} loop />

      {/* Overlay Vignette & Glassmorphism */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at center, rgba(10,10,12,0.35) 0%, rgba(10,10,12,0.85) 85%)',
        pointerEvents: 'none'
      }} />

      {/* Top Bar Controls */}
      <div style={{
        position: 'absolute', top: 24, right: 30, display: 'flex', gap: 14, zIndex: 10
      }}>
        <label className="btn sm ghost" style={{
          background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)', color: '#fff',
          border: '1px solid rgba(255,255,255,0.25)', fontSize: 11, cursor: 'pointer', padding: '6px 12px'
        }}>
          📹 Replace Video
          <input type="file" accept="video/*" onChange={handleVideoUpload} style={{ display: 'none' }} />
        </label>

        <label className="btn sm ghost" style={{
          background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)', color: '#fff',
          border: '1px solid rgba(255,255,255,0.25)', fontSize: 11, cursor: 'pointer', padding: '6px 12px'
        }}>
          🎵 Replace Music
          <input type="file" accept="audio/*" onChange={handleAudioUpload} style={{ display: 'none' }} />
        </label>

        <button
          onClick={toggleAudio}
          className="btn sm"
          style={{
            background: isPlayingAudio ? 'var(--gold, #d4af37)' : 'rgba(255,255,255,0.15)',
            color: isPlayingAudio ? '#000' : '#fff', border: '1px solid rgba(255,255,255,0.3)',
            fontSize: 11, padding: '6px 14px', backdropFilter: 'blur(10px)'
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
          textTransform: 'uppercase', marginBottom: 16
        }}>
          Spring / Summer 2027 Runway Experience
        </div>

        <h1 style={{
          fontFamily: 'var(--display, Georgia, serif)', fontSize: 56, fontWeight: 300,
          letterSpacing: '.04em', margin: '0 0 16px 0', textShadow: '0 4px 20px rgba(0,0,0,0.8)'
        }}>
          Atelier Pilot
        </h1>

        <p style={{
          fontFamily: 'var(--font-sans)', fontSize: 15, color: 'rgba(255,255,255,0.85)',
          lineHeight: 1.6, marginBottom: 36, fontWeight: 300
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
            padding: '14px 42px', fontSize: 13, letterSpacing: '.18em', textTransform: 'uppercase',
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
