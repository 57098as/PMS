import type { ReactNode } from 'react'

export function ChartTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean
  payload?: { name: string; value: number; color: string }[]
  label?: ReactNode
}) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded border border-cyan-400/40 bg-[#071428] px-2 py-1 text-[10px] text-slate-200 shadow-lg">
      {label ? <div className="mb-0.5 text-slate-400">{label}</div> : null}
      {payload.map((p) => (
        <div key={p.name} className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: p.color }} />
          <span>{p.name}</span>
          <span className="tabular-nums text-white">{p.value}</span>
        </div>
      ))}
    </div>
  )
}
