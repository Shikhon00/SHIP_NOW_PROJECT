export type InvoiceStatus = "paid" | "unpaid" | "overdue";

export interface InvoiceLineItem {
  description: string;
  shipmentType: string; // "Road Freight"
  shipmentMethod?: string; // "Express" | "Standard"
  price: number;
  quantity: number;
}

export interface InvoiceParty {
  name: string;
  email: string;
  addressLines: string[];
  phone: string;
}

export interface Invoice {
  id: string; // "INV-1008"
  company: { name: string; initial: string; color: string };
  shippingId: string; // "#SH8893247"
  issueDate: string;
  dueDate: string;
  /** Subtotal shown in the table's "Amount" column — before tax/fee. */
  amount: number;
  status: InvoiceStatus;
  billFrom: InvoiceParty;
  billTo: InvoiceParty;
  lineItems: InvoiceLineItem[];
  taxRate: number; // 0.08 = 8%
  fee: number;
  note: string;
}
