import { useEffect, useState } from 'react'
import { Maximize, ZoomIn, ZoomOut } from 'lucide-react'
import { EquipmentDistribution } from './components/EquipmentDistribution'
import { EquipmentStatus } from './components/EquipmentStatus'
import { IncomingInspection } from './components/IncomingInspection'
import { InstrumentShipments } from './components/InstrumentShipments'
import { LiveCameras } from './components/LiveCameras'
import { ProductionRecords } from './components/ProductionRecords'
import { PanelSelectionProvider } from './components/Panel'
import { PurchasingOverview } from './components/PurchasingOverview'
import { MerilMonitoring } from './components/MerilMonitoring'
import { useLiveMetrics } from './hooks/useLiveMetrics'

const DESIGN_W = 1920
const DESIGN_H = 1080

function TopBar({ scale }: { scale: number }) {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  const date = now.toLocaleDateString('en-GB', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' })
  const time = now.toLocaleTimeString('en-GB', { hour12: false })
  return (
    <header className="flex h-9 shrink-0 items-center justify-between border-b border-cyan-500/20 bg-[#061228]/90 px-4">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
        <h1 className="text-sm font-semibold tracking-[0.18em] text-white">MERIL MANUFACTURING OPERATIONS</h1>
      </div>
      <div
        className="text-xs tabular-nums text-cyan-200/90"
        style={{ paddingRight: `${190 / scale}px` }}
      >
        {date} <span className="ml-3 font-semibold text-white">{time}</span>
      </div>
    </header>
  )
}

export default function App() {
  const metrics = useLiveMetrics()
  const [fitScale, setFitScale] = useState(1)
  const [zoom, setZoom] = useState(1)
  const scale = fitScale * zoom

  useEffect(() => {
    const fit = () => setFitScale(Math.min(window.innerWidth / DESIGN_W, window.innerHeight / DESIGN_H))
    fit()
    window.addEventListener('resize', fit)
    return () => window.removeEventListener('resize', fit)
  }, [])

  return (
    <div className="h-screen w-screen overflow-auto bg-[#050d1f]">
      <div className="flex min-h-full min-w-full w-max items-center justify-center">
      <div style={{ width: DESIGN_W * scale, height: DESIGN_H * scale, flexShrink: 0 }}>
        <div
          className="overflow-hidden"
          style={{
            width: DESIGN_W,
            height: DESIGN_H,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
        >
          <PanelSelectionProvider>
          <div className="flex h-full flex-col bg-[radial-gradient(ellipse_at_top,#0a1a3a_0%,#050d1f_70%)]">
            <TopBar scale={scale} />
            <main className="grid min-h-0 flex-1 grid-rows-[1.12fr_1.38fr_0.92fr] gap-2 p-2">
              <div className="grid min-h-0 grid-cols-3 gap-2">
                <EquipmentStatus runningUnits={metrics.runningUnits} />
                <PurchasingOverview />
                <IncomingInspection />
              </div>
              <div className="grid min-h-0 gap-2" style={{ gridTemplateColumns: '1fr 1.45fr 1fr' }}>
                <InstrumentShipments />
                <MerilMonitoring
                  temperature={metrics.temperature}
                  humidity={metrics.humidity}
                  noise={metrics.noise}
                />
                <ProductionRecords />
              </div>
              <div className="grid min-h-0 gap-2" style={{ gridTemplateColumns: '0.72fr 1.28fr' }}>
                <EquipmentDistribution />
                <LiveCameras />
              </div>
            </main>
          </div>
          </PanelSelectionProvider>
        </div>
      </div>
      </div>
      <div className="fixed right-3 top-3 z-50 flex items-center gap-1 rounded border border-cyan-500/30 bg-[#061228]/95 p-1 shadow-lg backdrop-blur">
        <button
          type="button"
          aria-label="Zoom out"
          title="Zoom out"
          disabled={zoom <= 0.7}
          onClick={() => setZoom(Math.max(0.7, Number((zoom - 0.1).toFixed(2))))}
          className="flex h-8 w-8 items-center justify-center rounded text-cyan-100 transition hover:bg-cyan-400/15 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ZoomOut className="h-4 w-4" />
        </button>
        <span className="w-10 text-center text-[11px] tabular-nums text-white">{Math.round(zoom * 100)}%</span>
        <button
          type="button"
          aria-label="Zoom in"
          title="Zoom in"
          disabled={zoom >= 1.6}
          onClick={() => setZoom(Math.min(1.6, Number((zoom + 0.1).toFixed(2))))}
          className="flex h-8 w-8 items-center justify-center rounded text-cyan-100 transition hover:bg-cyan-400/15 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ZoomIn className="h-4 w-4" />
        </button>
        <button
          type="button"
          aria-label="Reset zoom"
          title="Reset zoom"
          onClick={() => setZoom(1)}
          className="flex h-8 w-8 items-center justify-center rounded text-cyan-100 transition hover:bg-cyan-400/15"
        >
          <Maximize className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}
