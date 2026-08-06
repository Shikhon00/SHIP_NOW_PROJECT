"use client";

import { useMemo, useState } from "react";
import { FileText, Search, SlidersHorizontal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn, formatCurrency } from "@/lib/utils";
import { getStatusMeta } from "@/lib/status";
import { INVOICES } from "@/data/invoices";
import type { Invoice } from "@/types/invoice";

interface InvoicesTableProps {
  selectedId: string;
  onSelect: (invoice: Invoice) => void;
}

export function InvoicesTable({ selectedId, onSelect }: InvoicesTableProps) {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return INVOICES;
    return INVOICES.filter(
      (invoice) =>
        invoice.id.toLowerCase().includes(query) ||
        invoice.company.name.toLowerCase().includes(query) ||
        invoice.shippingId.toLowerCase().includes(query)
    );
  }, [search]);

  return (
    <Card className="overflow-hidden">
      <div className="flex items-center justify-between border-b border-gray-50 p-5">
        <h2 className="font-bold text-gray-900">Invoices</h2>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search invoices"
              className="w-56 rounded-lg border border-gray-200 bg-gray-50 py-1.5 pl-9 pr-3 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>
          <button
            type="button"
            aria-label="Filter"
            className="rounded-lg border border-gray-200 bg-gray-50 p-1.5 text-gray-400 hover:bg-gray-100"
          >
            <SlidersHorizontal className="h-5 w-5" />
          </button>
          <Button variant="primary" size="sm">
            New Invoice
          </Button>
        </div>
      </div>

      <CardContent className="overflow-x-auto p-0">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-gray-50/50 text-[11px] font-medium uppercase tracking-wider text-gray-400">
              <th className="w-10 px-5 py-3">
                <input type="checkbox" className="rounded border-gray-300 text-brand-600 focus:ring-brand-500" readOnly />
              </th>
              <th className="px-5 py-3">Invoice ID</th>
              <th className="px-5 py-3">Company</th>
              <th className="px-5 py-3">Shipping ID</th>
              <th className="px-5 py-3">Date</th>
              <th className="px-5 py-3">Amount</th>
              <th className="px-5 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filtered.map((invoice) => {
              const isSelected = invoice.id === selectedId;
              const { label, variant } = getStatusMeta(invoice.status);

              return (
                <tr
                  key={invoice.id}
                  onClick={() => onSelect(invoice)}
                  className={cn(
                    "cursor-pointer hover:bg-gray-50/50",
                    isSelected && "border-l-2 border-brand-600 bg-brand-50/50"
                  )}
                >
                  <td className="px-5 py-4">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      readOnly
                      className="rounded border-gray-300 text-brand-600 focus:ring-brand-500"
                    />
                  </td>
                  <td className="px-5 py-4">
                    <span className="flex items-center gap-2 font-medium text-brand-600">
                      {invoice.id}
                      <FileText className="h-4 w-4 text-gray-300" />
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2 font-semibold text-gray-900">
                      <span
                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded text-[10px] font-bold text-white"
                        style={{ backgroundColor: invoice.company.color }}
                      >
                        {invoice.company.initial}
                      </span>
                      {invoice.company.name}
                    </div>
                  </td>
                  <td className="px-5 py-4 text-gray-500">{invoice.shippingId}</td>
                  <td className="px-5 py-4">
                    <p className="text-xs text-gray-900">
                      {invoice.issueDate} <span className="text-gray-400">(Issued)</span>
                    </p>
                    <p className="text-xs text-gray-400">{invoice.dueDate} (Due)</p>
                  </td>
                  <td className="px-5 py-4 font-bold text-gray-900">
                    {formatCurrency(invoice.amount)}
                  </td>
                  <td className="px-5 py-4">
                    <Badge variant={variant}>{label}</Badge>
                  </td>
                </tr>
              );
            })}

            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} className="px-5 py-10 text-center text-sm text-gray-400">
                  No invoices match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
