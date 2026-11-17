import { ArrowDown, ArrowUp } from 'lucide-react'
import { useCountUp } from '../hooks/useCountUp'

type KpiTileProps = {
  label: string
  value: number | string
  unit?: string
  change?: number
  changeTone?: 'auto' | 'good' | 'bad'
  decimals?: number
  accent?: string
  asChange?: boolean
}

export function KpiTile({
  label,
  value,
  unit,
  change,
  changeTone = 'auto',
  decimals = 0,
  accent = 'text-white',
  asChange,
}: KpiTileProps) {
  const numeric = typeof value === 'number'
  const animated = useCountUp(numeric ? value : 0, decimals)
  const display = numeric ? animated : value
  const delta = asChange && numeric ? value : change
  const down = typeof delta === 'number' && delta < 0
  const good = changeTone === 'good' || (changeTone === 'auto' && !down)
  const changeColor = good ? 'text-emerald-400' : 'text-red-400'

  return (
    <div className="flex min-w-0 flex-1 flex-col rounded border border-cyan-500/15 bg-[#071428]/80 px-1.5 py-1">
      <span className="truncate text-[9px] leading-tight text-slate-400">{label}</span>
      {asChange && typeof delta === 'number' ? (
        <span className={`flex items-center gap-0.5 text-[15px] font-bold leading-tight tabular-nums ${changeColor}`}>
          {down ? <ArrowDown className="h-3.5 w-3.5" /> : <ArrowUp className="h-3.5 w-3.5" />}
          {Math.abs(delta).toFixed(2)}%
        </span>
      ) : (
        <span className={`text-[17px] font-bold leading-tight tabular-nums ${accent}`}>{display}</span>
      )}
      {unit && !asChange ? <span className="text-[8px] leading-none text-slate-500">{unit}</span> : null}
      {!asChange && change !== undefined ? (
        <span className={`mt-0.5 flex items-center gap-0.5 text-[9px] tabular-nums ${changeColor}`}>
          {down ? <ArrowDown className="h-2.5 w-2.5" /> : <ArrowUp className="h-2.5 w-2.5" />}
          {Math.abs(change).toFixed(2)}%
        </span>
      ) : null}
    </div>
  )
}
