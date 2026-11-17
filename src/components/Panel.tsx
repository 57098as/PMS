import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

const PanelSelectionContext = createContext<{
  selectedPanel: string | null
  selectPanel: (title: string) => void
  closePanel: () => void
} | null>(null)

export function PanelSelectionProvider({ children }: { children: ReactNode }) {
  const [selectedPanel, setSelectedPanel] = useState<string | null>(null)

  useEffect(() => {
    if (!selectedPanel) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedPanel(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedPanel])

  return (
    <PanelSelectionContext.Provider
      value={{ selectedPanel, selectPanel: setSelectedPanel, closePanel: () => setSelectedPanel(null) }}
    >
      <div className="relative h-full w-full">
        {children}
        {selectedPanel ? (
          <button
            type="button"
            aria-label="Close expanded panel"
            className="absolute inset-0 z-30 cursor-default bg-black/70 backdrop-blur-[2px]"
            onClick={() => setSelectedPanel(null)}
          />
        ) : null}
      </div>
    </PanelSelectionContext.Provider>
  )
}

type PanelProps = {
  title: string
  icon?: ReactNode
  iconLeft?: boolean
  light?: boolean
  className?: string
  children: ReactNode
}

export function Panel({ title, icon, iconLeft, light, className = '', children }: PanelProps) {
  const selection = useContext(PanelSelectionContext)
  const isSelected = selection?.selectedPanel === title

  return (
    <section
      aria-label={title}
      tabIndex={0}
      onClick={() => selection?.selectPanel(title)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          selection?.selectPanel(title)
        }
      }}
      className={`${isSelected ? 'absolute inset-3 z-40' : 'cursor-zoom-in'} flex min-h-0 flex-col overflow-hidden rounded-md border px-2.5 py-1.5 ${
        light
          ? 'border-sky-300/70 bg-[#d7e8f8] text-slate-800 shadow-[inset_0_0_18px_rgba(255,255,255,0.35)]'
          : 'border-cyan-400/30 bg-[linear-gradient(180deg,#0c2348_0%,#07162e_100%)] text-white shadow-[inset_0_0_24px_rgba(34,211,238,0.08),0_0_10px_rgba(14,165,233,0.12)]'
      } ${className}`}
    >
      <header className="mb-1 flex shrink-0 items-center justify-between">
        <div className="flex items-center gap-1.5">
          {iconLeft ? icon : null}
          <h2 className={`text-[13px] font-bold tracking-wide ${light ? 'text-slate-800' : 'text-white'}`}>
            {title}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          {!iconLeft ? <span className={light ? 'text-sky-600' : 'text-cyan-300'}>{icon}</span> : null}
          <button
            type="button"
            aria-label={isSelected ? `Close ${title}` : `Expand ${title}`}
            title={isSelected ? 'Close expanded panel' : 'Expand panel'}
            className={`flex h-6 w-6 items-center justify-center rounded-sm transition-colors ${
              light ? 'text-sky-700 hover:bg-sky-300/70' : 'text-cyan-200 hover:bg-cyan-400/15'
            }`}
            onClick={(event) => {
              event.stopPropagation()
              if (isSelected) selection?.closePanel()
              else selection?.selectPanel(title)
            }}
          >
            {isSelected ? <span aria-hidden="true">×</span> : <span aria-hidden="true">↗</span>}
          </button>
        </div>
      </header>
      <div className={`mb-1.5 h-px shrink-0 ${light ? 'bg-sky-400/50' : 'bg-cyan-400/25'}`} />
      <div className="min-h-0 flex-1 overflow-hidden">{children}</div>
    </section>
  )
}
