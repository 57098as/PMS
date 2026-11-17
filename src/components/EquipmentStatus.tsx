import { Settings } from 'lucide-react'
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { equipmentByType, equipmentKpis, equipmentTrend } from '../data/mockData'
import { ChartBox } from './ChartBox'
import { ChartTooltip } from './ChartTooltip'
import { KpiTile } from './KpiTile'
import { Panel } from './Panel'

const axis = { fontSize: 10, fill: '#7dd3fc' }

export function EquipmentStatus({ runningUnits }: { runningUnits: number }) {
  return (
    <Panel title="Equipment Status" icon={<Settings className="h-3.5 w-3.5" />}>
      <div className="flex h-full min-h-0 flex-col gap-2">
        <div className="grid grid-cols-6 gap-1">
          <KpiTile label="Total Units" value={equipmentKpis.totalUnits} unit="units" />
          <KpiTile label="Change" value={equipmentKpis.totalChange} asChange changeTone="good" />
          <KpiTile label="Running Units" value={runningUnits} unit="units" change={equipmentKpis.runningChange} changeTone="good" />
          <KpiTile label="Running Rate" value={equipmentKpis.runningRate} decimals={1} unit="%" />
          <KpiTile label="Idle Units" value={equipmentKpis.idleUnits} unit="units" />
          <KpiTile label="Offline Units" value={equipmentKpis.offlineUnits} unit="units" />
        </div>
        <div className="grid min-h-0 flex-1 grid-cols-2 gap-3">
          <div>
            <div className="mb-1 flex items-center justify-between">
              <p className="text-[11px] text-slate-200">Equipment Running Trend</p>
              <div className="flex items-center gap-2 text-[9px] text-slate-400">
                <span className="flex items-center gap-1">
                  <i className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Running Units
                </span>
                <span className="flex items-center gap-1">
                  <i className="h-1.5 w-1.5 rounded-full bg-red-400" /> Idle Units
                </span>
              </div>
            </div>
            <ChartBox height={168}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={equipmentTrend} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="runFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.75} />
                      <stop offset="100%" stopColor="#22d3ee" stopOpacity={0.05} />
                    </linearGradient>
                    <linearGradient id="idleFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f87171" stopOpacity={0.55} />
                      <stop offset="100%" stopColor="#f87171" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="#1e3a5f" vertical={false} />
                  <XAxis dataKey="date" tick={axis} axisLine={false} tickLine={false} />
                  <YAxis tick={axis} axisLine={false} tickLine={false} width={32} />
                  <Tooltip content={<ChartTooltip />} />
                  <Area type="monotone" dataKey="running" name="Running" stroke="#22d3ee" fill="url(#runFill)" strokeWidth={1.5} />
                  <Area type="monotone" dataKey="idle" name="Idle" stroke="#f87171" fill="url(#idleFill)" strokeWidth={1.5} />
                </AreaChart>
              </ResponsiveContainer>
            </ChartBox>
          </div>
          <div>
            <div className="mb-1 flex items-center justify-between">
              <p className="text-[11px] text-slate-200">Equipment Count by Type</p>
              <div className="flex items-center gap-2 text-[9px] text-slate-400">
                <span className="flex items-center gap-1">
                  <i className="h-1.5 w-1.5 rounded-sm bg-amber-400" /> Running
                </span>
                <span className="flex items-center gap-1">
                  <i className="h-1.5 w-1.5 rounded-sm bg-cyan-400" /> Idle
                </span>
              </div>
            </div>
            <ChartBox height={168}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={equipmentByType} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                  <CartesianGrid stroke="#1e3a5f" vertical={false} />
                  <XAxis dataKey="type" tick={axis} axisLine={false} tickLine={false} />
                  <YAxis tick={axis} axisLine={false} tickLine={false} width={32} />
                  <Tooltip content={<ChartTooltip />} />
                  <Bar dataKey="running" name="Running" fill="#fbbf24" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="idle" name="Idle" fill="#38bdf8" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartBox>
          </div>
        </div>
      </div>
    </Panel>
  )
}
