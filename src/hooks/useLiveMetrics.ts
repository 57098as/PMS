import { useEffect, useState } from 'react'
import { equipmentKpis, envMetrics } from '../data/mockData'

export function useLiveMetrics() {
  const [runningUnits, setRunningUnits] = useState(equipmentKpis.runningUnits)
  const [temperature, setTemperature] = useState(envMetrics.temperature)
  const [humidity, setHumidity] = useState(envMetrics.humidity)
  const [noise, setNoise] = useState(envMetrics.noise)

  useEffect(() => {
    const id = setInterval(() => {
      const jitter = (base: number, spread: number, min: number, max: number) =>
        Math.min(max, Math.max(min, Math.round(base + (Math.random() * 2 - 1) * spread)))
      setRunningUnits((n) => jitter(n, 3, 150, 165))
      setTemperature((n) => jitter(n, 1, 36, 42))
      setHumidity((n) => jitter(n, 2, 42, 55))
      setNoise((n) => jitter(n, 2, 52, 64))
    }, 5000)
    return () => clearInterval(id)
  }, [])

  return { runningUnits, temperature, humidity, noise }
}
