import { Factory } from 'lucide-react'
import { Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { energyTrend, envStatus, environmentTrend, factoryPhoto, resourceRings } from '../data/mockData'
import { useCountUp } from '../hooks/useCountUp'
import { ChartBox } from './ChartBox'
import { ChartTooltip } from './ChartTooltip'
import { Panel } from './Panel'

const axis = { fontSize: 9, fill: '#7dd3fc' }

function MiniRing({ value, color, label }: { value: number; color: string; label: string }) {
  const data = [
    { name: label, value, color },
    { name: 'rest', value: 100 - value, color: '#123154' },
  ]
  return (
    <div className="flex w-14 flex-col items-center">
      <ChartBox height={48}>
        <ResponsiveContainer>
          <PieChart>
            <Pie data={data} dataKey="value" innerRadius={13} outerRadius={20} startAngle={90} endAngle={-270} stroke="none">
              {data.map((d) => (
                <Cell key={d.name} fill={d.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </ChartBox>
      <span className="text-[9px] text-slate-400">{label}</span>
    </div>
  )
}

function Metric({ label, value, unit }: { label: string; value: number; unit: string }) {
  const shown = useCountUp(value, 0, 450)
  return (
    <div className="rounded border border-cyan-500/15 bg-[#071428]/70 px-1.5 py-1 text-center">
      <div className="text-[9px] text-slate-400">{label}</div>
      <div className="text-[18px] font-bold tabular-nums text-white">{shown}</div>
      <div className="text-[8px] text-slate-500">{unit}</div>
    </div>
  )
}

export function SiuiMonitoring({
  temperature,
  humidity,
  noise,
}: {
  temperature: number
  humidity: number
  noise: number
}) {
  return (
    <Panel title="SIUI Production & Environmental Monitoring" icon={<Factory className="h-3.5 w-3.5" />}>
      <div className="flex h-full min-h-0 flex-col gap-1.5">
        <div className="grid grid-cols-6 gap-1">
          <Metric label="Water" value={153} unit="m³/h" />
          <Metric label="Power" value={2} unit="MWh" />
          <Metric label="Gas" value={124} unit="m³/h" />
          <Metric label="Temperature" value={temperature} unit="°C" />
          <Metric label="Humidity" value={humidity} unit="% RH" />
          <Metric label="Noise" value={noise} unit="dB" />
        </div>
        <div className="grid grid-cols-[0.75fr_1.35fr_0.9fr] items-center gap-2">
          <div>
            <p className="text-[11px] text-slate-200">Resource Usage</p>
            <div className="flex items-center justify-around pt-1">
              {resourceRings.map((r) => (
                <MiniRing key={r.label} {...r} />
              ))}
            </div>
          </div>
          <div className="h-[118px] overflow-hidden rounded border border-cyan-500/20">
            <img src={factoryPhoto} alt="Factory campus" className="h-full w-full object-cover" />
          </div>
          <div className="flex items-center">
            <div className="w-[58%]">
              <p className="text-[11px] text-slate-200">Environmental Status</p>
              <ChartBox height={96}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={envStatus} dataKey="value" innerRadius={26} outerRadius={40} paddingAngle={2} stroke="none">
                      {envStatus.map((s) => (
                        <Cell key={s.name} fill={s.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<ChartTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
              </ChartBox>
            </div>
            <ul className="flex flex-col justify-center gap-0.5 text-[10px] text-slate-300">
              {envStatus.map((s) => (
                <li key={s.name} className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: s.color }} />
                  {s.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-[1.45fr_0.55fr] gap-2">
          <div>
            <p className="text-[11px] text-slate-200">Energy Trend</p>
            <ChartBox height={108}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={energyTrend} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                  <XAxis dataKey="date" tick={axis} axisLine={false} tickLine={false} />
                  <YAxis tick={axis} axisLine={false} tickLine={false} width={32} />
                  <Tooltip content={<ChartTooltip />} />
                  <Line type="monotone" dataKey="water" name="Water" stroke="#22d3ee" strokeWidth={1.6} dot={false} />
                  <Line type="monotone" dataKey="power" name="Power" stroke="#fbbf24" strokeWidth={1.6} dot={false} />
                  <Line type="monotone" dataKey="gas" name="Gas" stroke="#f87171" strokeWidth={1.6} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </ChartBox>
          </div>
          <div>
            <p className="text-[11px] text-slate-200">Environment Trend</p>
            <ChartBox height={108}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={environmentTrend} margin={{ top: 8, right: 4, left: 0, bottom: 0 }}>
                  <XAxis dataKey="date" tick={axis} axisLine={false} tickLine={false} />
                  <YAxis tick={axis} axisLine={false} tickLine={false} width={24} />
                  <Tooltip content={<ChartTooltip />} />
                  <Line type="monotone" dataKey="temp" name="Temp" stroke="#38bdf8" strokeWidth={1.5} dot={false} />
                  <Line type="monotone" dataKey="humidity" name="Humidity" stroke="#a78bfa" strokeWidth={1.5} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </ChartBox>
          </div>
        </div>
      </div>
    </Panel>
  )
}
