/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 18/12/2025 - 00:39:06
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 18/12/2025
    * - Author          : fortu
    * - Modification    : 
**/
import { useState, useEffect } from 'react'

const Sparkle = ({ x, y, id }) => {
  return (
    <div
      className="pointer-events-none fixed animate-sparkle"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: '6px',
        height: '6px',
      }}
    >
      <div className="w-full h-full bg-gradient-to-r from-teal-600 to-teal-700 dark:from-teal-400 dark:to-teal-300 rounded-full blur-sm" />
    </div>
  )
}

export default function PageSparkles() {
  const [sparkles, setSparkles] = useState([])
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    if (!enabled) return

    const handleMouseMove = (e) => {
      const x = e.clientX
      const y = e.clientY
      const newSparkle = { id: Date.now() + Math.random(), x, y }
      setSparkles((prev) => [...prev, newSparkle])
      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id))
      }, 600)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [enabled])

  return (
    <>
      <button
        onClick={() => setEnabled(!enabled)}
        className="fixed bottom-6 left-6 z-40 px-4 py-2 rounded-xl border border-teal-200/30 dark:border-teal-700/50 bg-gradient-to-br from-white/80 to-cream-50/50 dark:from-teal-900/80 dark:to-teal-950/80 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-teal-700 dark:hover:text-teal-400 hover:border-teal-300/60 dark:hover:border-teal-500 transition duration-300 cursor-pointer backdrop-blur-sm shadow-sm"
        title="Toggle sparkles"
      >
        ✨ {enabled ? 'On' : 'Off'}
      </button>
      {sparkles.map((sparkle) => (
        <Sparkle key={sparkle.id} x={sparkle.x} y={sparkle.y} id={sparkle.id} />
      ))}
    </>
  )
}
