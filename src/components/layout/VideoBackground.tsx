import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const location = useLocation()

  useEffect(() => {
    if (videoRef.current) {
      // Force playback in case autoPlay is blocked by browser policies
      videoRef.current.play().catch((err) => {
        console.warn("Video autoplay blocked or failed:", err)
      })
    }
  }, [])

  if (location.pathname === '/privacy' || location.pathname === '/terms') return null

  return (
    <div className="video-bg" aria-hidden="true">
      <video
        ref={videoRef}
        src="/images/bg.mp4"
        autoPlay={true}
        muted={true}
        loop={true}
        playsInline={true}
      />
    </div>
  )
}
