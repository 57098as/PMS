import type { ReactNode } from 'react'

export function ChartBox({ height = 140, children }: { height?: number; children: ReactNode }) {
  return (
    <div className="w-full" style={{ height }}>
      {children}
    </div>
  )
}
