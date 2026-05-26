import { useEffect, useState } from 'react'

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const position = window.scrollY
      const height = document.body.scrollHeight - window.innerHeight
      setProgress(Math.min(100, Math.max(0, (position / height) * 100)))
    }

    window.addEventListener('scroll', updateProgress)
    updateProgress()
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <div className="fixed left-0 top-0 z-50 h-1 w-full bg-white/10">
      <div className="h-full bg-gradient-to-r from-emerald-300 via-emerald-500 to-gold" style={{ width: `${progress}%` }} />
    </div>
  )
}

export default ScrollProgress
