import { MapPin } from 'lucide-react'
import { equipmentDistribution } from '../data/mockData'
import { ChinaMap } from './ChinaMap'
import { DataTable } from './DataTable'
import { Panel } from './Panel'

export function EquipmentDistribution() {
  return (
    <Panel title="Equipment Distribution" icon={<MapPin className="h-3.5 w-3.5" />} iconLeft light>
      <div className="flex h-full min-h-0 flex-col gap-1">
        <div className="min-h-0 flex-[1.05]">
          <DataTable
            dense
            light
            rows={equipmentDistribution}
            columns={[
              { key: 'no', label: 'No.' },
              { key: 'location', label: 'Location' },
              { key: 'units', label: 'Units' },
              { key: 'running', label: 'Running' },
              { key: 'idle', label: 'Idle' },
              { key: 'offline', label: 'Offline' },
              { key: 'total', label: 'Total' },
            ]}
          />
        </div>
        <div className="relative min-h-0 flex-1">
          <ChinaMap />
          <div className="absolute bottom-0 left-1 flex items-center gap-1 text-[9px] text-slate-600">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" /> Equipment Location
          </div>
        </div>
      </div>
    </Panel>
  )
}
