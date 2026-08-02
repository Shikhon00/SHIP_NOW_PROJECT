"use client";

import { useMemo, useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import {
  Filter,
  Plus,
  Search,
  Truck as TruckIcon,
  Clock,
  PackageCheck,
  CheckCircle2,
} from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { StatCard } from "@/components/ui/StatCard";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { DataTable, createSelectionColumn } from "@/components/ui/DataTable";
import {
  ShipmentFilterTabs,
  type ShipmentTab,
} from "@/components/shipments/ShipmentFilterTabs";
import { getStatusMeta } from "@/lib/status";
import { FREIGHT_ICON, FREIGHT_LABEL } from "@/lib/freight";
import { formatNumber } from "@/lib/utils";
import { SHIPMENTS } from "@/data/shipments";
import type { Shipment } from "@/types/shipment";

const TAB_STATUS_MAP: Record<ShipmentTab, Shipment["status"][]> = {
  All: [],
  Completed: ["completed", "delivered"],
  Delivery: ["delivery", "in_transit", "out_for_delivery"],
  Pending: ["pending", "processing"],
};

export default function ShipmentsPage() {
  const [tab, setTab] = useState<ShipmentTab>("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const statuses = TAB_STATUS_MAP[tab];
    return SHIPMENTS.filter((s) => {
      const matchesTab = statuses.length === 0 || statuses.includes(s.status);
      const query = search.trim().toLowerCase();
      const matchesSearch =
        query === "" ||
        s.id.toLowerCase().includes(query) ||
        s.company.name.toLowerCase().includes(query);
      return matchesTab && matchesSearch;
    });
  }, [tab, search]);

  const columns = useMemo<ColumnDef<Shipment, any>[]>(
    () => [
      createSelectionColumn<Shipment>(),
      {
        accessorKey: "id",
        header: "Shipping ID",
        cell: ({ row }) => {
          const Icon = FREIGHT_ICON[row.original.freightType];
          return (
            <div>
              <p className="text-sm font-bold text-brand-600">{row.original.id}</p>
              <p className="mt-0.5 flex items-center gap-1 text-[10px] text-gray-400">
                <Icon className="h-3 w-3" />
                {FREIGHT_LABEL[row.original.freightType]}
              </p>
            </div>
          );
        },
      },
      {
        accessorKey: "company.name",
        header: "Company",
        cell: ({ row }) => (
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface text-xs font-bold text-white">
              {row.original.company.initial}
            </span>
            <div>
              <p className="text-sm font-bold text-slate-900">{row.original.company.name}</p>
              <p className="text-xs text-gray-400">{row.original.company.category}</p>
            </div>
          </div>
        ),
      },
      { accessorKey: "carrier", header: "Carrier" },
      { accessorKey: "productCategory", header: "Product Category" },
      {
        accessorKey: "weightKg",
        header: "Weight",
        cell: ({ getValue }) => `${formatNumber(getValue<number>())} kg`,
      },
      {
        id: "route",
        header: "Route",
        enableSorting: false,
        cell: ({ row }) => (
          <div className="text-xs">
            <p>
              <span className="font-bold text-slate-900">{row.original.origin.city}</span>{" "}
              <span className="text-gray-400">(Origin)</span>
            </p>
            <p className="font-bold text-brand-600">
              {row.original.destination.city}{" "}
              <span className="font-normal text-gray-400">(Destination)</span>
            </p>
          </div>
        ),
      },
      {
        accessorKey: "progress",
        header: "Progress",
        cell: ({ getValue }) => (
          <ProgressBar value={getValue<number>()} showLabel className="w-32" />
        ),
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ getValue }) => {
          const { label, variant } = getStatusMeta(getValue<string>());
          return (
            <Badge variant={variant} dot>
              {label}
            </Badge>
          );
        },
      },
    ],
    []
  );

  const totals = useMemo(
    () => ({
      total: SHIPMENTS.length,
      pending: SHIPMENTS.filter((s) => s.status === "pending" || s.status === "processing").length,
      delivery: SHIPMENTS.filter(
        (s) => s.status === "delivery" || s.status === "in_transit" || s.status === "out_for_delivery"
      ).length,
      completed: SHIPMENTS.filter((s) => s.status === "completed" || s.status === "delivered").length,
    }),
    []
  );

  return (
    <>
      <PageHeader
        title="Shipments"
        breadcrumb={[{ label: "Dashboard", href: "/dashboard" }, { label: "Shipments" }]}
      >
        <ButtonLink href="/shipments/new" variant="primary">
          <Plus className="h-4 w-4" /> New Shipment
        </ButtonLink>
      </PageHeader>

      <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Total Shipments"
          value={formatNumber(totals.total)}
          icon={TruckIcon}
          trend={{ value: "+4.6%", direction: "up", label: "this week" }}
        />
        <StatCard
          label="Pending"
          value={formatNumber(totals.pending)}
          icon={Clock}
          trend={{ value: "+8.7%", direction: "up", label: "this week" }}
        />
        <StatCard
          label="Delivery"
          value={formatNumber(totals.delivery)}
          icon={PackageCheck}
          trend={{ value: "-4.2%", direction: "down", label: "from last week" }}
        />
        <StatCard
          label="Completed"
          value={formatNumber(totals.completed)}
          icon={CheckCircle2}
          trend={{ value: "+3.9%", direction: "up", label: "this week" }}
        />
      </div>

      <Card>
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-50 p-6">
          <ShipmentFilterTabs value={tab} onChange={setTab} />

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search id, company, etc"
                className="w-64 rounded-xl border-none bg-gray-100 py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4" /> Filter
            </Button>
          </div>
        </div>

        <DataTable
          columns={columns}
          data={filtered}
          pageSize={8}
          getRowId={(row) => row.id}
          emptyMessage="No shipments match your filters."
        />
      </Card>
    </>
  );
}