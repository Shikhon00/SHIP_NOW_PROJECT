"use client";

import { useState } from "react";
import { InvoicesTable } from "./InvoicesTable";
import { InvoiceDetailsPanel } from "./InvoiceDetailsPanel";
import { INVOICES } from "@/data/invoices";
import type { Invoice } from "@/types/invoice";

const DEFAULT_INVOICE = INVOICES.find((i) => i.id === "INV-1008") ?? INVOICES[0];

export function InvoicesWorkspace() {
  const [selected, setSelected] = useState<Invoice>(DEFAULT_INVOICE);

  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
      <div className="xl:col-span-8">
        <InvoicesTable selectedId={selected.id} onSelect={setSelected} />
      </div>
      <div className="xl:col-span-4">
        <InvoiceDetailsPanel invoice={selected} />
      </div>
    </div>
  );
}
