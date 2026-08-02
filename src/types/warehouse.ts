export interface WarehouseCategorySlice {
  label: string;
  percent: number;
  count: number;
}

export interface WarehouseStorageRow {
  floor: number;
  section: string;
  category: string;
  percentUsed: number;
  availableSpace: number;
  totalSpace: number;
}

export type PackageStatus = "expected" | "received" | "sent";

export interface WarehousePackage {
  id: string; // "PKG-HK77420"
  status: PackageStatus;
  datetime: string;
}

export interface WarehouseBay {
  code: string; // "A1"
  available: boolean;
}

export interface WarehouseZone {
  name: string;
  bays: WarehouseBay[];
  availableSpace: number;
  totalSpace: number;
  /** Grid column span within the map's 3-col layout (default 1) */
  span?: 1 | 2;
}

export type WarehouseActivityIconKey = "check" | "add" | "dispatch" | "create";

export interface WarehouseActivityItem {
  id: string;
  actor: string;
  action: string;
  time: string;
  icon: WarehouseActivityIconKey;
}
