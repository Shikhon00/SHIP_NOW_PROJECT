import type {
  MonthlyValue,
  RevenueCostPoint,
  ShipmentTypeSlice,
  ProductCategorySlice,
  ShipmentAlert,
  ActivityItem,
} from "@/types/dashboard";

export const SHIPMENT_STATISTIC: MonthlyValue[] = [
  { month: "Jan", value: 1100 },
  { month: "Feb", value: 1550 },
  { month: "Mar", value: 1950 },
  { month: "Apr", value: 1550 },
  { month: "May", value: 3124 },
  { month: "Jun", value: 2450 },
  { month: "Jul", value: 2850 },
  { month: "Aug", value: 3280 },
];

export const PROFIT_SUMMARY: RevenueCostPoint[] = [
  { month: "Jan", revenue: 32000, cost: 18000 },
  { month: "Feb", revenue: 45000, cost: 24000 },
  { month: "Mar", revenue: 40000, cost: 22000 },
  { month: "Apr", revenue: 55000, cost: 30000 },
  { month: "May", revenue: 87524, cost: 45680 },
  { month: "Jun", revenue: 60000, cost: 34000 },
  { month: "Jul", revenue: 50000, cost: 28000 },
  { month: "Aug", revenue: 65000, cost: 36000 },
];

export const SHIPMENT_TYPE_BREAKDOWN: ShipmentTypeSlice[] = [
  { label: "Road Freight", value: 46, count: 1150, color: "#6366f1" },
  { label: "Air Freight", value: 28, count: 700, color: "#111827" },
  { label: "Ocean Freight", value: 17, count: 425, color: "#64748b" },
  { label: "Rail Freight", value: 9, count: 225, color: "#cbd5e1" },
];

export const PRODUCT_CATEGORIES: ProductCategorySlice[] = [
  { label: "Electronics", count: 240, percent: 24, color: "#6366f1" },
  { label: "Home & Kitchen", count: 200, percent: 20, color: "#e0e4ff" },
  { label: "Apparel", count: 180, percent: 18, color: "#111827" },
  { label: "Beauty & Health", count: 140, percent: 14, color: "#64748b" },
  { label: "Sports & Outdoors", count: 120, percent: 12, color: "#cbd5e1" },
  { label: "Automotive", count: 120, percent: 12, color: "#e5e7eb" },
];

export const SHIPMENT_ALERTS: ShipmentAlert[] = [
  { id: "1", type: "Customs Clearance Delay", shipmentId: "#SH8743921", freightType: "Ocean Freight", date: "Mar 20", icon: "customs" },
  { id: "2", type: "Incorrect Address Provided", shipmentId: "#SH8725810", freightType: "Road Freight", date: "Mar 20", icon: "address" },
  { id: "3", type: "Weather-Related Hold", shipmentId: "#SH8790043", freightType: "Air Freight", date: "Mar 19", icon: "weather" },
  { id: "4", type: "Incorrect Address Provided", shipmentId: "#SH8716654", freightType: "Rail Freight", date: "Mar 18", icon: "address" },
];

export const RECENT_ACTIVITY: ActivityItem[] = [
  { id: "1", actor: "@TechGuru99", action: "submitted a bulk shipment request", time: "12:00 PM", icon: "copy" },
  { id: "2", actor: "@SupportKen", action: "added a priority tag to Order ID 77889JKL", time: "11:30 AM", icon: "tag" },
  { id: "3", actor: "@SallyMae88", action: "initiated a return process for Order ID 44556GHI", time: "11:00 AM", icon: "undo" },
  { id: "4", actor: "@AdminLisa", action: "resolved a delivery issue for Order ID 12345XYZ", time: "10:15 AM", icon: "check" },
];