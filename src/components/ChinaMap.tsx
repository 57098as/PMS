import { mapDots } from '../data/mockData'

export function ChinaMap() {
  return (
    <svg viewBox="0 0 1000 740" className="h-full w-full">
      <path
        fill="#8fb8dc"
        stroke="#4d7aa3"
        strokeWidth="3"
        d="M612 42c28 6 48 28 78 34 22 4 40-6 62 10 18 14 10 38 8 58-2 16 22 24 16 44-4 16-24 20-28 38-4 16 14 28 6 44-10 22-38 16-54 30-18 16-14 42-36 54-24 14-52 8-78 16-22 6-34 30-60 30-28 0-42-26-70-26-24 0-48 16-74 10-28-6-34-34-56-46-20-12-46-8-62-24-18-18-10-48-4-70 6-22 30-34 36-56 6-22-12-44 2-64 14-20 42-14 62-28 22-14 26-40 52-46 24-6 42 14 66 10 22-4 34-22 56-28z"
      />
      <path fill="#8fb8dc" stroke="#4d7aa3" strokeWidth="2.5" d="M760 268c28 12 46 36 38 58-8 16-30 18-46 10-14-8-20-28-16-44 4-12 14-22 24-24z" />
      <path fill="#8fb8dc" stroke="#4d7aa3" strokeWidth="2" d="M548 548c10 8 22 18 18 28-6 8-22 6-30-4-6-8-2-20 12-24z" />
      {mapDots.map((d, i) => (
        <g key={i}>
          <circle cx={d.x * 9.4} cy={d.y * 9.2} r="8" fill="#ef4444" />
          <circle cx={d.x * 9.4} cy={d.y * 9.2} r="14" fill="#ef4444" opacity="0.28" />
        </g>
      ))}
    </svg>
  )
}
