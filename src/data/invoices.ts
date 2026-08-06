import type { Invoice, InvoiceParty, InvoiceLineItem, InvoiceStatus } from "@/types/invoice";

const SHIPNOW_LOGISTICS: InvoiceParty = {
  name: "ShipNow Logistics",
  email: "accounts@shipnow.com",
  addressLines: ["901 Distribution Ave, Charlotte, NC", "28217, USA"],
  phone: "+1 704-555-9911",
};

const NOTE =
  "Please process payment by the due date to avoid delivery disruption. Late fees may apply after 3 business days past due.";

function slug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

/** Placeholder sender profile — real billing addresses will come from the customer API later. */
function billFrom(name: string, addressLines: string[], phone: string): InvoiceParty {
  return { name, email: `billing@${slug(name)}.com`, addressLines, phone };
}

function singleLineItem(company: string, amount: number, shipmentType: string): InvoiceLineItem[] {
  return [{ description: `${company} Shipment`, shipmentType, price: amount, quantity: 1 }];
}

interface InvoiceSeed {
  id: string;
  companyName: string;
  initial: string;
  color: string;
  shippingId: string;
  issueDate: string;
  dueDate: string;
  amount: number;
  status: InvoiceStatus;
  city: string;
  phone: string;
  freightType: string;
}

const SEEDS: InvoiceSeed[] = [
  { id: "INV-1001", companyName: "TechGear Inc.", initial: "T", color: "#111827", shippingId: "#SH9283746", issueDate: "Mar 15, 2035", dueDate: "Mar 22, 2035", amount: 1250, status: "paid", city: "220 Innovation Way, San Jose,\nCA 95110, USA", phone: "+1 408-555-3310", freightType: "Air Freight" },
  { id: "INV-1002", companyName: "StyleHub Co.", initial: "S", color: "#818cf8", shippingId: "#SH9182635", issueDate: "Mar 16, 2035", dueDate: "Mar 23, 2035", amount: 980, status: "unpaid", city: "44 Garment District, New York,\nNY 10018, USA", phone: "+1 212-555-6621", freightType: "Road Freight" },
  { id: "INV-1003", companyName: "FreshNest", initial: "F", color: "#1f2937", shippingId: "#SH9037821", issueDate: "Mar 14, 2035", dueDate: "Mar 21, 2035", amount: 1320, status: "paid", city: "12 Harborview Rd, Dallas,\nTX 75201, USA", phone: "+1 214-555-7742", freightType: "Ocean Freight" },
  { id: "INV-1004", companyName: "FitPlus Gear", initial: "F", color: "#6366f1", shippingId: "#SH9374652", issueDate: "Mar 17, 2035", dueDate: "Mar 24, 2035", amount: 1150, status: "unpaid", city: "78 Trailhead Ave, Seattle,\nWA 98101, USA", phone: "+1 206-555-8813", freightType: "Rail Freight" },
  { id: "INV-1005", companyName: "AutoParts Pro", initial: "A", color: "#111827", shippingId: "#SH9457830", issueDate: "Mar 15, 2035", dueDate: "Mar 22, 2035", amount: 1480, status: "overdue", city: "560 Motor Pkwy, Detroit,\nMI 48201, USA", phone: "+1 313-555-9924", freightType: "Road Freight" },
  { id: "INV-1006", companyName: "EcoLights", initial: "E", color: "#818cf8", shippingId: "#SH8821349", issueDate: "Mar 13, 2035", dueDate: "Mar 20, 2035", amount: 790, status: "paid", city: "9 Solar Cir, Austin,\nTX 73301, USA", phone: "+1 512-555-1187", freightType: "Air Freight" },
  { id: "INV-1007", companyName: "GreenHaven", initial: "G", color: "#4f46e5", shippingId: "#SH8967432", issueDate: "Mar 14, 2035", dueDate: "Mar 21, 2035", amount: 875, status: "paid", city: "1120 Birch Street, Portland,\nOR 97205, USA", phone: "+1 503-555-4471", freightType: "Road Freight" },
  { id: "INV-1009", companyName: "SunCore Panels", initial: "S", color: "#374151", shippingId: "#SH9018723", issueDate: "Mar 17, 2035", dueDate: "Mar 24, 2035", amount: 1600, status: "unpaid", city: "301 Panel Row, San Diego,\nCA 92101, USA", phone: "+1 619-555-2256", freightType: "Rail Freight" },
  { id: "INV-1010", companyName: "VitaFresh", initial: "V", color: "#6366f1", shippingId: "#SH8881190", issueDate: "Mar 15, 2035", dueDate: "Mar 22, 2035", amount: 1120, status: "overdue", city: "88 Orchard Ln, Nashville,\nTN 37201, USA", phone: "+1 615-555-3392", freightType: "Road Freight" },
  { id: "INV-1011", companyName: "SmartAppliance", initial: "S", color: "#1f2937", shippingId: "#SH8923752", issueDate: "Mar 18, 2035", dueDate: "Mar 25, 2035", amount: 1050, status: "paid", city: "245 Factory Blvd, Minneapolis,\nMN 55401, USA", phone: "+1 612-555-6674", freightType: "Air Freight" },
];

function fromSeed(seed: InvoiceSeed): Invoice {
  const [line1, line2] = seed.city.split("\n");
  return {
    id: seed.id,
    company: { name: seed.companyName, initial: seed.initial, color: seed.color },
    shippingId: seed.shippingId,
    issueDate: seed.issueDate,
    dueDate: seed.dueDate,
    amount: seed.amount,
    status: seed.status,
    billFrom: billFrom(seed.companyName, [line1, line2], seed.phone),
    billTo: SHIPNOW_LOGISTICS,
    lineItems: singleLineItem(seed.companyName, seed.amount, seed.freightType),
    taxRate: 0.08,
    fee: 10,
    note: NOTE,
  };
}

/** The one invoice with fully-specified detail from the Stitch mockup (selected by default). */
const INV_1008: Invoice = {
  id: "INV-1008",
  company: { name: "ModaWear", initial: "M", color: "#4f46e5" },
  shippingId: "#SH8893247",
  issueDate: "Mar 16, 2035",
  dueDate: "Mar 23, 2035",
  amount: 910,
  status: "unpaid",
  billFrom: {
    name: "ModaWear",
    email: "billing@modawear.com",
    addressLines: ["89 Franklin St, Boston,", "MA 02110, USA"],
    phone: "+1 617-555-2290",
  },
  billTo: SHIPNOW_LOGISTICS,
  lineItems: [
    { description: "Lightweight Hoodie Pack", shipmentType: "Road Freight", shipmentMethod: "Express", price: 120, quantity: 3 },
    { description: "Autumn Jacket Set", shipmentType: "Road Freight", shipmentMethod: "Standard", price: 180, quantity: 2 },
    { description: "Lightweight Hoodie Pack", shipmentType: "Road Freight", shipmentMethod: "Express", price: 95, quantity: 2 },
  ],
  taxRate: 0.08,
  fee: 10,
  note: NOTE,
};

// Keep table order matching the mockup: ...1007, 1008 (ModaWear), 1009...
export const INVOICES: Invoice[] = [
  ...SEEDS.slice(0, 7).map(fromSeed),
  INV_1008,
  ...SEEDS.slice(7).map(fromSeed),
];

/**
 * Summary totals shown in the KPI cards. These reflect the full invoice
 * ledger, not just the sample rows in INVOICES above — same pattern as
 * "of 1,240 results" on the Shipments table.
 */
export const INVOICE_SUMMARY = {
  paid: { amount: 28890, count: 350 },
  unpaid: { amount: 16700, count: 120 },
  pending: { amount: 8050, count: 80 },
  overdue: { amount: 22110, count: 245 },
};
