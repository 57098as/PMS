import { Truck } from 'lucide-react'
import { Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { recentShipments, shipmentKpis, shipmentStatus, topProducts } from '../data/mockData'
import { ChartBox } from './ChartBox'
import { ChartTooltip } from './ChartTooltip'
import { DataTable, StatusPill } from './DataTable'
import { KpiTile } from './KpiTile'
import { Panel } from './Panel'

export function InstrumentShipments() {
  return (
    <Panel title="Instrument Shipments" icon={<Truck className="h-3.5 w-3.5" />}>
      <div className="flex h-full min-h-0 flex-col gap-1.5">
        <div className="grid grid-cols-7 gap-1">
          <KpiTile label="On-Time Rate" value={shipmentKpis.onTimeRate} decimals={2} unit="%" accent="text-cyan-300" />
          <KpiTile label="Defect Rate" value={shipmentKpis.defectRate} decimals={2} unit="%" accent="text-red-400" />
          <KpiTile label="Total Shipments" value={shipmentKpis.totalShipments} />
          <KpiTile label="Pending" value={shipmentKpis.pending} unit="units" />
          <KpiTile label="Returned" value={shipmentKpis.returned} unit="units" />
          <KpiTile label="Customers" value={shipmentKpis.customers} />
          <KpiTile label="Products" value={shipmentKpis.products} />
        </div>
        <div className="grid min-h-0 flex-1 grid-cols-[1.15fr_0.85fr] gap-2">
          <div className="min-h-0 overflow-hidden">
            <p className="mb-1 text-[11px] text-slate-200">Recent Shipments</p>
            <DataTable
              dense
              rows={recentShipments}
              columns={[
                { key: 'date', label: 'Date' },
                { key: 'product', label: 'Product' },
                { key: 'quantity', label: 'Quantity' },
                { key: 'status', label: 'Status', render: (r) => <StatusPill status={r.status} /> },
              ]}
            />
          </div>
          <div className="flex min-h-0 flex-col gap-1">
            <div className="flex items-center">
              <div className="w-[58%]">
                <p className="text-[11px] text-slate-200">Shipment Status</p>
                <ChartBox height={96}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={shipmentStatus} dataKey="value" innerRadius={26} outerRadius={40} paddingAngle={2} stroke="none">
                        {shipmentStatus.map((s) => (
                          <Cell key={s.name} fill={s.color} />
                        ))}
                      </Pie>
                      <Tooltip content={<ChartTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartBox>
              </div>
              <ul className="flex flex-col justify-center gap-0.5 text-[10px] text-slate-300">
                {shipmentStatus.map((s) => (
                  <li key={s.name} className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: s.color }} />
                    {s.name}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] text-slate-200">Top 5 Products by Shipment Quantity</p>
              <ChartBox height={110}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={topProducts} layout="vertical" margin={{ top: 4, right: 8, left: 4, bottom: 0 }}>
                    <XAxis type="number" hide />
                    <YAxis type="category" dataKey="name" tick={{ fontSize: 9, fill: '#94a3b8' }} width={62} axisLine={false} tickLine={false} />
                    <Tooltip content={<ChartTooltip />} />
                    <Bar dataKey="qty" name="Qty" fill="#22d3ee" radius={[0, 3, 3, 0]} barSize={10} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartBox>
            </div>
          </div>
        </div>
      </div>
    </Panel>
  )
}
