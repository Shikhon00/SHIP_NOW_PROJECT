import type {
  WarehouseCategorySlice,
  WarehouseStorageRow,
  WarehousePackage,
  WarehouseZone,
  WarehouseActivityItem,
} from "@/types/warehouse";

export const WAREHOUSE_STATS = {
  totalSku: 285,
  totalSkuTrend: "+2.58%",
  quantityOnHand: 12450,
  quantityOnHandTrend: "+4.37%",
  capacityUsagePercent: 62.5,
  capacityUsageTrend: "+1.54%",
};

export const WAREHOUSE_INVENTORY_TOTAL = 10000;

export const WAREHOUSE_CATEGORIES: WarehouseCategorySlice[] = [
  { label: "Electronics", percent: 25, count: 2500 },
  { label: "Apparel", percent: 20, count: 2000 },
  { label: "Home & Kitchen", percent: 18, count: 1800 },
  { label: "Beauty & Health", percent: 15, count: 1500 },
  { label: "Automotive Parts", percent: 12, count: 1200 },
  { label: "Sports Equipment", percent: 10, count: 1000 },
];

export const WAREHOUSE_CAPACITY = {
  totalUsagePercent: 62.5,
  loadedShelves: 40,
  emptyShelves: 24,
};

export const WAREHOUSE_STORAGE: WarehouseStorageRow[] = [
  { floor: 1, section: "A1 – A10", category: "Electronics", percentUsed: 80, availableSpace: 20, totalSpace: 100 },
  { floor: 2, section: "B1 – B10", category: "Apparel", percentUsed: 60, availableSpace: 40, totalSpace: 100 },
  { floor: 1, section: "C1 – C10", category: "Home & Kitchen", percentUsed: 90, availableSpace: 10, totalSpace: 100 },
  { floor: 3, section: "D1 – D10", category: "Automotive Parts", percentUsed: 50, availableSpace: 50, totalSpace: 100 },
  { floor: 2, section: "E1 – E10", category: "Beauty & Health", percentUsed: 70, availableSpace: 30, totalSpace: 100 },
];

export const WAREHOUSE_PACKAGES: WarehousePackage[] = [
  { id: "PKG-HK77420", status: "sent", datetime: "Mar 20, 2035 — 05:30 PM" },
  { id: "PKG-A50812", status: "received", datetime: "Mar 21, 2035 — 01:45 PM" },
  { id: "PKG-E10293", status: "expected", datetime: "Mar 22, 2035 — 09:00 AM" },
];

/** Floor 1 map — three single-column zones + one wide Apparel zone */
export const WAREHOUSE_ZONES: WarehouseZone[] = [
  {
    name: "Electronics",
    bays: [
      { code: "A1", available: false },
      { code: "A2", available: false },
      { code: "A3", available: true },
    ],
    availableSpace: 20,
    totalSpace: 100,
  },
  {
    name: "Home & Kitchen",
    bays: [
      { code: "C1", available: false },
      { code: "C2", available: false },
      { code: "C3", available: false },
    ],
    availableSpace: 10,
    totalSpace: 100,
  },
  {
    name: "Automotive Parts",
    bays: [
      { code: "D1", available: true },
      { code: "D2", available: false },
      { code: "D3", available: true },
    ],
    availableSpace: 50,
    totalSpace: 100,
  },
  {
    name: "Apparel",
    span: 2,
    bays: [
      { code: "B1", available: true },
      { code: "B2", available: false },
      { code: "B3", available: true },
      { code: "B4", available: true },
      { code: "B5", available: true },
      { code: "B6", available: true },
      { code: "B7", available: true },
      { code: "B8", available: true },
      { code: "B9", available: true },
      { code: "B10", available: false },
    ],
    availableSpace: 20,
    totalSpace: 100,
  },
];

/** Small stacked zones sharing the last map column */
export const WAREHOUSE_SMALL_ZONES: WarehouseZone[] = [
  {
    name: "Sports Equipment",
    bays: [
      { code: "F1", available: true },
      { code: "F2", available: false },
      { code: "F3", available: true },
    ],
    availableSpace: 45,
    totalSpace: 100,
  },
  {
    name: "Beauty & Health",
    bays: [
      { code: "E1", available: true },
      { code: "E2", available: false },
      { code: "E3", available: true },
      { code: "E4", available: true },
    ],
    availableSpace: 30,
    totalSpace: 100,
  },
];

export const WAREHOUSE_ACTIVITY: WarehouseActivityItem[] = [
  {
    id: "1",
    actor: "Leo Fernandez",
    action: "confirmed receipt of 40 units of Winter Jacket Series in Section B3 (Apparel)",
    time: "01:45 PM",
    icon: "check",
  },
  {
    id: "2",
    actor: "Ava Martinez",
    action: "added 25 units of Smart Router Kit to Section A1 (Electronics)",
    time: "09:15 AM",
    icon: "add",
  },
  {
    id: "3",
    actor: "Oscar Liem",
    action: "dispatched 18 units of Stainless Steel Cookware Set from Section C5 (Home & Kitchen)",
    time: "05:30 PM",
    icon: "dispatch",
  },
  {
    id: "4",
    actor: "Dina Choi",
    action: "created a shipment entry for Brake Pad Sets in Section D2 (Automotive Parts)",
    time: "04:10 PM",
    icon: "create",
  },
];
