export interface ShipmentStatusSlice {
  label: string;
  value: number; // percent
  count: number;
  color: string;
}

export interface FreightPerformance {
  label: string;
  onTimePercent: number;
  shipments: number;
}

export interface CarrierPerformanceRow {
  carrier: string;
  shipments: number;
  onTimePercent: number;
  avgCost: number;
  rating: number; // out of 5
}

export interface TopRoute {
  origin: string;
  destination: string;
  shipments: number;
  avgTransitDays: number;
  onTimePercent: number;
}
