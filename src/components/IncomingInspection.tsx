import { Search } from 'lucide-react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { inspectionKpis, inspectionTrend } from '../data/mockData'
import { ChartBox } from './ChartBox'
import { ChartTooltip } from './ChartTooltip'
import { KpiTile } from './KpiTile'
import { Panel } from './Panel'

const axis = { fontSize: 10, fill: '#7dd3fc' }

export function IncomingInspection() {
  return (
    <Panel title="Incoming Material Inspection" icon={<Search className="h-3.5 w-3.5" />}>
      <div className="flex h-full min-h-0 flex-col gap-2">
        <div className="grid grid-cols-5 gap-1">
          <KpiTile label="Inspection Batches" value={inspectionKpis.inspectionBatches} unit="batches" />
          <KpiTile label="Defective Batches" value={inspectionKpis.defectiveBatches} unit="batches" />
          <KpiTile label="Inspection Quantity" value={inspectionKpis.inspectionQuantity} />
          <KpiTile label="Total Quantity" value={inspectionKpis.totalQuantity} unit="units" />
          <KpiTile label="Defect Rate" value={inspectionKpis.defectRate} unit="%" accent="text-red-400" />
        </div>
        <div>
          <div className="mb-1 flex items-center justify-between">
            <p className="text-[11px] text-slate-200">Inspection Quantity Trend</p>
            <div className="flex items-center gap-2 text-[9px] text-slate-400">
              <span className="flex items-center gap-1">
                <i className="h-1.5 w-1.5 rounded-sm bg-sky-400" /> Accepted
              </span>
              <span className="flex items-center gap-1">
                <i className="h-1.5 w-1.5 rounded-sm bg-amber-400" /> Rejected
              </span>
            </div>
          </div>
          <ChartBox height={168}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={inspectionTrend} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                <CartesianGrid stroke="#1e3a5f" vertical={false} />
                <XAxis dataKey="date" tick={axis} axisLine={false} tickLine={false} />
                <YAxis tick={axis} axisLine={false} tickLine={false} width={36} />
                <Tooltip content={<ChartTooltip />} />
                <Bar dataKey="accepted" name="Accepted" fill="#38bdf8" radius={[2, 2, 0, 0]} />
                <Bar dataKey="rejected" name="Rejected" fill="#fbbf24" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartBox>
        </div>
      </div>
    </Panel>
  )
}
