export type FreightType = "road" | "rail" | "ocean" | "air";

export type ShipmentStatus =
  | "in_transit"
  | "delivery"
  | "out_for_delivery"
  | "completed"
  | "delivered"
  | "pending"
  | "processing";

export interface Shipment {
  id: string; // "#SH9283746"
  freightType: FreightType;
  company: {
    name: string;
    category: string;
    initial: string;
  };
  carrier: string;
  productCategory: string;
  weightKg: number;
  origin: { city: string; datetime: string };
  destination: { city: string; datetime: string };
  progress: number; // 0-100
  status: ShipmentStatus;
}