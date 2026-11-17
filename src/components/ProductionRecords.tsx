import { ClipboardList } from 'lucide-react'
import { Bar, BarChart, Cell, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { defectTypes, productionLines, productionRecords, yieldTrend } from '../data/mockData'
import { ChartBox } from './ChartBox'
import { ChartTooltip } from './ChartTooltip'
import { DataTable } from './DataTable'
import { Panel } from './Panel'

const axis = { fontSize: 9, fill: '#7dd3fc' }

export function ProductionRecords() {
  return (
    <Panel title="Production Records" icon={<ClipboardList className="h-3.5 w-3.5" />}>
      <div className="flex h-full min-h-0 flex-col gap-1.5">
        <div className="min-h-0 overflow-hidden">
          <DataTable
            dense
            rows={productionRecords}
            columns={[
              { key: 'date', label: 'Date' },
              { key: 'product', label: 'Product' },
              { key: 'wo', label: 'Work Order' },
              { key: 'qty', label: 'Quantity' },
              { key: 'pass', label: 'Pass' },
              { key: 'fail', label: 'Fail' },
              { key: 'yield', label: 'Yield' },
            ]}
          />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div>
            <p className="text-[11px] text-slate-200">Yield Trend</p>
            <ChartBox height={118}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={yieldTrend} margin={{ top: 8, right: 6, left: 0, bottom: 0 }}>
                  <XAxis dataKey="date" tick={axis} axisLine={false} tickLine={false} />
                  <YAxis domain={[80, 100]} tick={axis} axisLine={false} tickLine={false} width={28} />
                  <Tooltip content={<ChartTooltip />} />
                  <Line type="monotone" dataKey="yield" name="Yield" stroke="#22d3ee" strokeWidth={1.8} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </ChartBox>
          </div>
          <div>
            <p className="text-[11px] text-slate-200">Defect Type Distribution</p>
            <div className="flex h-[118px] items-center justify-around">
              {defectTypes.map((d) => (
                <div key={d.name} className="flex flex-col items-center">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full text-[11px] font-bold text-white"
                    style={{ background: d.color, boxShadow: `0 0 10px ${d.color}` }}
                  >
                    {d.value}%
                  </div>
                  <span className="mt-1 text-[9px] text-slate-400">{d.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[11px] text-slate-200">Production Quantity</p>
            <ChartBox height={118}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={productionLines} layout="vertical" margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
                  <XAxis type="number" tick={axis} axisLine={false} tickLine={false} />
                  <YAxis type="category" dataKey="name" tick={{ fontSize: 9, fill: '#94a3b8' }} width={40} axisLine={false} tickLine={false} />
                  <Tooltip content={<ChartTooltip />} />
                  <Bar dataKey="qty" name="Qty" radius={[0, 3, 3, 0]} barSize={9}>
                    {productionLines.map((l) => (
                      <Cell key={l.name} fill={l.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartBox>
          </div>
        </div>
      </div>
    </Panel>
  )
}
