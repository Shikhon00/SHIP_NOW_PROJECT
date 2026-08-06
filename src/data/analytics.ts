import type { MonthlyValue, RevenueCostPoint } from "@/types/dashboard";
import type {
  ShipmentStatusSlice,
  FreightPerformance,
  CarrierPerformanceRow,
  TopRoute,
} from "@/types/analytics";

export const ANALYTICS_KPIS = {
  totalRevenue: 1096024,
  totalRevenueTrend: "+14.2%",
  totalShipments: 2500,
  totalShipmentsTrend: "+9.1%",
  onTimeRate: 94.3,
  onTimeRateTrend: "+1.8%",
  avgDeliveryDays: 3.1,
  avgDeliveryDaysTrend: "-0.4 days",
};

export const REVENUE_TREND: RevenueCostPoint[] = [
  { month: "Jan", revenue: 58000, cost: 32000 },
  { month: "Feb", revenue: 62000, cost: 34500 },
  { month: "Mar", revenue: 71000, cost: 39000 },
  { month: "Apr", revenue: 68000, cost: 37500 },
  { month: "May", revenue: 87524, cost: 45680 },
  { month: "Jun", revenue: 79000, cost: 43000 },
  { month: "Jul", revenue: 84000, cost: 46000 },
  { month: "Aug", revenue: 91500, cost: 49000 },
  { month: "Sep", revenue: 88000, cost: 47500 },
  { month: "Oct", revenue: 95000, cost: 51000 },
  { month: "Nov", revenue: 102000, cost: 55500 },
  { month: "Dec", revenue: 110500, cost: 59000 },
];

export const ON_TIME_TREND: MonthlyValue[] = [
  { month: "Jan", value: 91 },
  { month: "Feb", value: 92 },
  { month: "Mar", value: 90 },
  { month: "Apr", value: 93 },
  { month: "May", value: 95 },
  { month: "Jun", value: 94 },
  { month: "Jul", value: 93 },
  { month: "Aug", value: 94.3 },
];

export const SHIPMENT_STATUS_BREAKDOWN: ShipmentStatusSlice[] = [
  { label: "Delivered", value: 52, count: 1300, color: "#6366f1" },
  { label: "In Transit", value: 27, count: 675, color: "#111827" },
  { label: "Processing", value: 14, count: 350, color: "#818cf8" },
  { label: "Delayed", value: 7, count: 175, color: "#e5e7eb" },
];

export const FREIGHT_PERFORMANCE: FreightPerformance[] = [
  { label: "Road Freight", onTimePercent: 96, shipments: 1150 },
  { label: "Air Freight", onTimePercent: 93, shipments: 700 },
  { label: "Rail Freight", onTimePercent: 91, shipments: 225 },
  { label: "Ocean Freight", onTimePercent: 88, shipments: 425 },
];

export const CARRIER_PERFORMANCE: CarrierPerformanceRow[] = [
  { carrier: "FedEx", shipments: 412, onTimePercent: 96, avgCost: 84.5, rating: 4.8 },
  { carrier: "DHL", shipments: 358, onTimePercent: 94, avgCost: 91.2, rating: 4.6 },
  { carrier: "UPS", shipments: 301, onTimePercent: 92, avgCost: 78.9, rating: 4.5 },
  { carrier: "USPS", shipments: 145, onTimePercent: 88, avgCost: 52.3, rating: 4.1 },
  { carrier: "Aramex", shipments: 68, onTimePercent: 90, avgCost: 96.7, rating: 4.3 },
];

export const TOP_ROUTES: TopRoute[] = [
  { origin: "Los Angeles, CA", destination: "Chicago, IL", shipments: 84, avgTransitDays: 3.2, onTimePercent: 95 },
  { origin: "New York, NY", destination: "Atlanta, GA", shipments: 71, avgTransitDays: 2.8, onTimePercent: 93 },
  { origin: "Dallas, TX", destination: "Miami, FL", shipments: 63, avgTransitDays: 3.5, onTimePercent: 91 },
  { origin: "Seattle, WA", destination: "Denver, CO", shipments: 52, avgTransitDays: 2.4, onTimePercent: 96 },
  { origin: "Detroit, MI", destination: "San Diego, CA", shipments: 47, avgTransitDays: 4.1, onTimePercent: 89 },
];
