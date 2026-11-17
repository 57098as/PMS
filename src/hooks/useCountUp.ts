import { useEffect, useRef, useState } from 'react'

export function useCountUp(target: number, decimals = 0, duration = 900) {
  const [value, setValue] = useState(0)
  const fromRef = useRef(0)

  useEffect(() => {
    const from = fromRef.current
    let frame = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - (1 - t) ** 3
      const next = from + (target - from) * eased
      setValue(Number(next.toFixed(decimals)))
      if (t < 1) {
        frame = requestAnimationFrame(tick)
      } else {
        fromRef.current = target
      }
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, decimals, duration])

  if (decimals > 0) return value.toFixed(decimals)
  return Math.round(value).toLocaleString()
}
