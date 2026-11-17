import type { ReactNode } from 'react'

type Col<T> = {
  key: keyof T | string
  label: string
  className?: string
  render?: (row: T) => ReactNode
}

type DataTableProps<T> = {
  columns: Col<T>[]
  rows: T[]
  dense?: boolean
  light?: boolean
}

export function DataTable<T extends object>({ columns, rows, dense, light }: DataTableProps<T>) {
  return (
    <div className="h-full overflow-hidden">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className={`sticky top-0 font-medium ${
                  dense ? 'px-1 py-0.5 text-[9px]' : 'px-1.5 py-1 text-[10px]'
                } ${light ? 'bg-[#c5dcf0] text-slate-600' : 'bg-[#0a1c38] text-slate-400'} ${col.className ?? ''}`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={
                light
                  ? 'border-t border-sky-300/60 even:bg-white/40'
                  : 'border-t border-cyan-900/40 even:bg-white/[0.03]'
              }
            >
              {columns.map((col) => (
                <td
                  key={String(col.key)}
                  className={`${dense ? 'px-1 py-0.5 text-[10px]' : 'px-1.5 py-1 text-[11px]'} tabular-nums ${
                    light ? 'text-slate-700' : 'text-slate-200'
                  } ${col.className ?? ''}`}
                >
                  {col.render ? col.render(row) : String((row as Record<string, unknown>)[String(col.key)] ?? '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function StatusPill({ status }: { status: string }) {
  const color =
    status === 'Received' || status === 'Shipped'
      ? 'text-emerald-400'
      : status === 'In Transit'
        ? 'text-amber-300'
        : 'text-violet-300'
  return <span className={color}>{status}</span>
}
