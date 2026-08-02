"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Search, SlidersHorizontal, MoreHorizontal } from "lucide-react";
import { Card, CardTitle } from "@/components/ui/Card";
import { DataTable } from "@/components/ui/DataTable";
import { Badge } from "@/components/ui/Badge";
import { getStatusMeta } from "@/lib/status";
import { SHIPMENTS } from "@/data/shipments";
import type { Shipment } from "@/types/shipment";

const columns: ColumnDef<Shipment, any>[] = [
  {
    accessorKey: "id",
    header: "Shipping ID",
    cell: ({ getValue }) => (
      <span className="text-sm font-bold text-brand-600">{getValue<string>()}</span>
    ),
  },
  {
    accessorKey: "company.name",
    header: "Company",
    cell: ({ row }) => (
      <div>
        <p className="text-sm font-bold text-slate-800">{row.original.company.name}</p>
        <p className="text-[11px] font-medium text-gray-400">{row.original.company.category}</p>
      </div>
    ),
  },
  { accessorKey: "carrier", header: "Carriers" },
  {
    id: "route",
    header: "Route",
    enableSorting: false,
    cell: ({ row }) => (
      <span className="text-sm font-medium text-slate-600">
        {row.original.origin.city.split(",")[0]} → {row.original.destination.city.split(",")[0]}
      </span>
    ),
  },
  {
    id: "date",
    header: "Shipping Date",
    cell: ({ row }) => (
      <span className="text-sm font-medium text-slate-600">
        {row.original.origin.datetime.split(" – ")[0]}
      </span>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => {
      const { label, variant } = getStatusMeta(getValue<string>());
      return <Badge variant={variant}>{label}</Badge>;
    },
  },
];

export function RecentShipmentsTable() {
  return (
    <Card>
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-50 p-6">
        <CardTitle>Recent Shipments</CardTitle>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
            <input
              placeholder="Search shipment"
              className="w-56 rounded-xl border border-gray-100 bg-gray-50 py-2 pl-9 pr-3 text-xs font-medium outline-none focus:ring-2 focus:ring-brand-500/20"
            />
          </div>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-100 bg-gray-50 text-gray-600 hover:bg-gray-100"
          >
            <SlidersHorizontal className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-100 bg-gray-50 text-gray-400 hover:bg-gray-100"
          >
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>
      </div>

      <DataTable columns={columns} data={SHIPMENTS.slice(0, 5)} emptyMessage="No recent shipments." />
    </Card>
  );
}
