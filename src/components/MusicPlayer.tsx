import { useState, useRef, useEffect } from 'react'
import { Music, Volume2, VolumeX } from 'lucide-react'
import './MusicPlayer.css'

interface MusicPlayerProps {
  autoplay?: boolean
}

export default function MusicPlayer({ autoplay = true }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (autoplay && audioRef.current) {
      // Try to autoplay (may be blocked by browser)
      audioRef.current.play().catch(() => {
        setIsPlaying(false)
      })
    }
  }, [autoplay])

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    if (!audioRef.current) return
    audioRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  return (
    <div className="music-player">
      <audio
        ref={audioRef}
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        {/* Placeholder - replace with actual wedding music URL */}
        <source src="/audio/wedding.mp3" type="audio/mpeg" />
      </audio>

      <button className="music-toggle" onClick={togglePlay} aria-label="Toggle music">
        <Music size={20} className={isPlaying ? 'playing' : ''} />
      </button>

      <button className="volume-toggle" onClick={toggleMute} aria-label="Toggle mute">
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>

      <div className="music-label">
        {isPlaying ? 'Playing...' : 'Paused'}
      </div>
    </div>
  )
}
