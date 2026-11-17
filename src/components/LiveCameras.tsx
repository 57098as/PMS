import { Camera } from 'lucide-react'
import { cameras } from '../data/mockData'
import { Panel } from './Panel'

export function LiveCameras() {
  return (
    <Panel title="Live Factory Cameras" icon={<Camera className="h-3.5 w-3.5" />} iconLeft>
      <div className="grid h-full grid-cols-4 grid-rows-2 gap-1.5">
        {cameras.map((cam) => (
          <div key={cam.id} className="relative min-h-0 overflow-hidden rounded-sm border border-cyan-900/50 bg-black">
            <img src={cam.src} alt={cam.id} className="h-full w-full object-cover opacity-90" />
            <div className="absolute bottom-1 left-1 rounded bg-black/60 px-1.5 py-0.5 text-[9px] font-semibold tracking-wide text-white">
              {cam.id}
            </div>
            <div className="absolute right-1 top-1 flex items-center gap-1 rounded bg-black/55 px-1 py-0.5 text-[8px] font-bold text-red-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
              LIVE
            </div>
          </div>
        ))}
      </div>
    </Panel>
  )
}
