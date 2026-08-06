import type { Metadata } from "next";
import { Search } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { InvoiceSummaryCards } from "@/components/invoices/InvoiceSummaryCards";
import { InvoicesWorkspace } from "@/components/invoices/InvoicesWorkspace";

export const metadata: Metadata = {
  title: "Invoices & Billing | ShipNow",
};

export default function InvoicesPage() {
  return (
    <>
      <PageHeader
        title="Invoices & Billing"
        breadcrumb={[{ label: "Dashboard", href: "/dashboard" }, { label: "Invoices & Billing" }]}
      >
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            placeholder="Search anything"
            className="w-72 rounded-xl border border-gray-200 bg-white py-2.5 pl-11 pr-4 text-sm shadow-sm outline-none focus:ring-2 focus:ring-brand-500/20"
          />
        </div>
      </PageHeader>

      <InvoiceSummaryCards />

      <InvoicesWorkspace />
    </>
  );
}
