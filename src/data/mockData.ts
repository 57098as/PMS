export const equipmentKpis = {
  totalUnits: 14,
  totalChange: -33.33,
  runningUnits: 157,
  runningChange: 246.89,
  runningRate: 71.2,
  idleUnits: 13,
  offlineUnits: 144,
}

export const equipmentTrend = [
  { date: '3/1', running: 180, idle: 90 },
  { date: '4/1', running: 320, idle: 70 },
  { date: '5/1', running: 620, idle: 80 },
  { date: '6/1', running: 410, idle: 95 },
  { date: '7/1', running: 90, idle: 40 },
]

export const equipmentByType = [
  { type: 'A', running: 520, idle: 180 },
  { type: 'B', running: 310, idle: 90 },
  { type: 'C', running: 80, idle: 40 },
  { type: 'D', running: 430, idle: 70 },
  { type: 'E', running: 250, idle: 60 },
  { type: 'F', running: 140, idle: 50 },
  { type: 'G', running: 360, idle: 110 },
  { type: 'H', running: 290, idle: 80 },
]

export const purchasingKpis = {
  totalOrders: 214,
  change: -46.17,
  received: 189,
  onTimeRate: 92.0,
  onTimeChange: -60.64,
  pending: 2,
  suppliers: 59,
  totalAmount: '130.4M',
}

export const purchaseOrders = [
  { date: '2024-06-01', product: 'Material A', quantity: '1,200', status: 'Received' },
  { date: '2024-06-03', product: 'Material B', quantity: '600', status: 'Received' },
  { date: '2024-06-05', product: 'Material C', quantity: '800', status: 'In Transit' },
  { date: '2024-06-07', product: 'Material D', quantity: '450', status: 'Received' },
  { date: '2024-06-10', product: 'Material E', quantity: '1,000', status: 'Received' },
]

export const purchaseAmountTrend = [
  { date: '4/1', amount: 780 },
  { date: '4/15', amount: 820 },
  { date: '5/1', amount: 900 },
  { date: '5/15', amount: 1100 },
  { date: '6/1', amount: 1750 },
  { date: '6/15', amount: 2850 },
  { date: '7/1', amount: 620 },
]

export const inspectionKpis = {
  inspectionBatches: 0,
  defectiveBatches: 5,
  inspectionQuantity: 310,
  totalQuantity: 17557,
  defectRate: 100,
}

export const inspectionTrend = [
  { date: '3/1', accepted: 420, rejected: 180 },
  { date: '4/1', accepted: 900, rejected: 380 },
  { date: '5/1', accepted: 620, rejected: 1080 },
  { date: '6/1', accepted: 1480, rejected: 420 },
  { date: '7/1', accepted: 380, rejected: 1620 },
  { date: '8/1', accepted: 120, rejected: 80 },
]

export const shipmentKpis = {
  onTimeRate: 98.55,
  defectRate: 1.45,
  totalShipments: 204,
  pending: 3,
  returned: 1,
  customers: 50,
  products: 7,
}

export const recentShipments = [
  { date: '2024-06-01', product: 'Product A', quantity: 10, status: 'Shipped' },
  { date: '2024-06-02', product: 'Product B', quantity: 12, status: 'Shipped' },
  { date: '2024-06-03', product: 'Product C', quantity: 8, status: 'In Transit' },
  { date: '2024-06-04', product: 'Product D', quantity: 15, status: 'Shipped' },
  { date: '2024-06-05', product: 'Product E', quantity: 10, status: 'Shipped' },
]

export const shipmentStatus = [
  { name: 'Shipped', value: 186, color: '#38bdf8' },
  { name: 'In Transit', value: 14, color: '#22d3ee' },
  { name: 'Pending', value: 3, color: '#a78bfa' },
  { name: 'Returned', value: 1, color: '#f87171' },
]

export const topProducts = [
  { name: 'Product A', qty: 48 },
  { name: 'Product B', qty: 36 },
  { name: 'Product C', qty: 28 },
  { name: 'Product D', qty: 18 },
  { name: 'Product E', qty: 12 },
]

export const envMetrics = {
  water: 153,
  power: 2,
  gas: 124,
  temperature: 39,
  humidity: 48,
  noise: 58,
}

export const resourceUsage = [
  { name: 'Used', value: 68, color: '#22d3ee' },
  { name: 'Rest', value: 32, color: '#123154' },
]

export const resourceRings = [
  { label: 'Water', value: 72, color: '#22d3ee' },
  { label: 'Power', value: 55, color: '#4ade80' },
  { label: 'Gas', value: 63, color: '#fbbf24' },
]

export const envStatus = [
  { name: 'Normal', value: 78, color: '#38bdf8' },
  { name: 'Warning', value: 14, color: '#fbbf24' },
  { name: 'Alarm', value: 8, color: '#f87171' },
]

export const energyTrend = [
  { date: '3/1', water: 980, power: 720, gas: 640 },
  { date: '4/1', water: 1180, power: 820, gas: 760 },
  { date: '5/1', water: 1320, power: 900, gas: 880 },
  { date: '6/1', water: 1100, power: 760, gas: 1020 },
  { date: '7/1', water: 1240, power: 840, gas: 900 },
]

export const environmentTrend = [
  { date: '3/1', temp: 34, humidity: 52 },
  { date: '4/1', temp: 36, humidity: 48 },
  { date: '5/1', temp: 39, humidity: 44 },
  { date: '6/1', temp: 41, humidity: 50 },
  { date: '7/1', temp: 38, humidity: 46 },
]

export const productionRecords = [
  { date: '2024-06-01', product: 'Product A', wo: 'WO-20240601-001', qty: '1,000', pass: 990, fail: 10, yield: '99.0%' },
  { date: '2024-06-02', product: 'Product B', wo: 'WO-20240602-001', qty: '800', pass: 790, fail: 10, yield: '98.8%' },
  { date: '2024-06-03', product: 'Product C', wo: 'WO-20240603-001', qty: '1,200', pass: 1180, fail: 20, yield: '98.3%' },
  { date: '2024-06-04', product: 'Product D', wo: 'WO-20240604-001', qty: '600', pass: 590, fail: 10, yield: '98.3%' },
  { date: '2024-06-05', product: 'Product E', wo: 'WO-20240605-001', qty: '900', pass: 880, fail: 20, yield: '97.8%' },
]

export const yieldTrend = [
  { date: '3/1', yield: 99.4 },
  { date: '4/1', yield: 98.9 },
  { date: '5/1', yield: 97.2 },
  { date: '6/1', yield: 96.1 },
  { date: '7/1', yield: 97.8 },
]

export const defectTypes = [
  { name: 'Material', value: 42, color: '#38bdf8' },
  { name: 'Process', value: 35, color: '#22d3ee' },
  { name: 'Other', value: 23, color: '#64748b' },
]

export const productionLines = [
  { name: 'Line 1', qty: 780, color: '#4ade80' },
  { name: 'Line 2', qty: 620, color: '#22d3ee' },
  { name: 'Line 3', qty: 410, color: '#38bdf8' },
  { name: 'Line 4', qty: 290, color: '#60a5fa' },
]

export const equipmentDistribution = [
  { no: 1, location: 'North China', units: 21, running: 15, idle: 3, offline: 3, total: 21 },
  { no: 2, location: 'East China', units: 47, running: 42, idle: 2, offline: 3, total: 47 },
  { no: 3, location: 'South China', units: 36, running: 28, idle: 6, offline: 2, total: 36 },
  { no: 4, location: 'Central China', units: 32, running: 29, idle: 2, offline: 1, total: 32 },
  { no: 5, location: 'West China', units: 24, running: 18, idle: 4, offline: 2, total: 24 },
]

export const mapDots = [
  { x: 58, y: 28 },
  { x: 62, y: 32 },
  { x: 66, y: 38 },
  { x: 70, y: 42 },
  { x: 74, y: 46 },
  { x: 68, y: 48 },
  { x: 72, y: 52 },
  { x: 64, y: 44 },
  { x: 78, y: 50 },
  { x: 54, y: 42 },
  { x: 48, y: 38 },
  { x: 60, y: 56 },
  { x: 56, y: 62 },
  { x: 50, y: 58 },
]

export const cameras = [
  { id: 'CAM 01', src: '/cams/01.jpg' },
  { id: 'CAM 02', src: '/cams/02.jpg' },
  { id: 'CAM 03', src: '/cams/03.jpg' },
  { id: 'CAM 04', src: '/cams/04.jpg' },
  { id: 'CAM 05', src: '/cams/05.jpg' },
  { id: 'CAM 06', src: '/cams/06.jpg' },
  { id: 'CAM 07', src: '/cams/07.jpg' },
  { id: 'CAM 08', src: '/cams/08.jpg' },
]

export const factoryPhoto = '/cams/factory.jpg'
