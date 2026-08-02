export interface MonthlyValue {
  month: string;
  value: number;
}

export interface RevenueCostPoint {
  month: string;
  revenue: number;
  cost: number;
}

export interface ShipmentTypeSlice {
  label: string;
  value: number; // percent
  count: number;
  color: string;
}

export interface ProductCategorySlice {
  label: string;
  count: number;
  percent: number;
  color: string;
}

export type AlertIconKey = "customs" | "address" | "weather";

export interface ShipmentAlert {
  id: string;
  type: string;
  shipmentId: string;
  freightType: string;
  date: string;
  icon: AlertIconKey;
}

export type ActivityIconKey = "copy" | "tag" | "undo" | "check";

export interface ActivityItem {
  id: string;
  actor: string;
  action: string;
  time: string;
  icon: ActivityIconKey;
}