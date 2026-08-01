import { Truck, TrainFront, Ship, Plane, type LucideIcon } from "lucide-react";
import type { FreightType } from "@/types/shipment";

export const FREIGHT_ICON: Record<FreightType, LucideIcon> = {
  road: Truck,
  rail: TrainFront,
  ocean: Ship,
  air: Plane,
};

export const FREIGHT_LABEL: Record<FreightType, string> = {
  road: "Road Freight",
  rail: "Rail Freight",
  ocean: "Ocean Freight",
  air: "Air Freight",
};