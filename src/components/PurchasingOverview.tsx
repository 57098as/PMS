import { ShoppingCart } from 'lucide-react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { purchaseAmountTrend, purchaseOrders, purchasingKpis } from '../data/mockData'
import { ChartBox } from './ChartBox'
import { ChartTooltip } from './ChartTooltip'
import { DataTable, StatusPill } from './DataTable'
import { KpiTile } from './KpiTile'
import { Panel } from './Panel'

const axis = { fontSize: 10, fill: '#7dd3fc' }

export function PurchasingOverview() {
  return (
    <Panel title="Purchasing Overview" icon={<ShoppingCart className="h-3.5 w-3.5" />}>
      <div className="flex h-full min-h-0 flex-col gap-2">
        <div className="grid grid-cols-7 gap-1">
          <KpiTile label="Total Orders" value={purchasingKpis.totalOrders} />
          <KpiTile label="Change" value={purchasingKpis.change} asChange changeTone="bad" />
          <KpiTile label="Received" value={purchasingKpis.received} unit="orders" />
          <KpiTile label="On-Time Rate" value={purchasingKpis.onTimeRate} decimals={1} unit="%" change={purchasingKpis.onTimeChange} changeTone="bad" />
          <KpiTile label="Pending" value={purchasingKpis.pending} unit="orders" />
          <KpiTile label="Suppliers" value={purchasingKpis.suppliers} />
          <KpiTile label="Total Amount" value={purchasingKpis.totalAmount} unit="USD" />
        </div>
        <div className="grid min-h-0 flex-1 grid-cols-[1.15fr_0.85fr] gap-3">
          <div className="min-h-0 overflow-hidden">
            <p className="mb-1 text-[11px] text-slate-200">Recent Purchase Orders</p>
            <DataTable
              dense
              rows={purchaseOrders}
              columns={[
                { key: 'date', label: 'Date' },
                { key: 'product', label: 'Product' },
                { key: 'quantity', label: 'Quantity' },
                { key: 'status', label: 'Status', render: (r) => <StatusPill status={r.status} /> },
              ]}
            />
          </div>
          <div>
            <p className="mb-1 text-[11px] text-slate-200">Purchase Amount Trend (USD)</p>
            <ChartBox height={168}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={purchaseAmountTrend} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="poFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity={0.85} />
                      <stop offset="100%" stopColor="#38bdf8" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="#1e3a5f" vertical={false} />
                  <XAxis dataKey="date" tick={axis} axisLine={false} tickLine={false} />
                  <YAxis tick={axis} axisLine={false} tickLine={false} width={36} />
                  <Tooltip content={<ChartTooltip />} />
                  <Area type="monotone" dataKey="amount" name="Amount" stroke="#38bdf8" fill="url(#poFill)" strokeWidth={1.8} />
                </AreaChart>
              </ResponsiveContainer>
            </ChartBox>
          </div>
        </div>
      </div>
    </Panel>
  )
}
