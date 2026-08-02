import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { FreightTypeTabs } from "@/components/warehouse/FreightTypeTabs";
import { WarehouseKpiCards } from "@/components/warehouse/WarehouseKpiCards";
import { WarehouseInventoryCard } from "@/components/warehouse/WarehouseInventoryCard";
import { CapacityUsageCard } from "@/components/warehouse/CapacityUsageCard";
import { WarehouseStorageTable } from "@/components/warehouse/WarehouseStorageTable";
import { PackageStatusCard } from "@/components/warehouse/PackageStatusCard";
import { WarehouseMapCard } from "@/components/warehouse/WarehouseMapCard";
import { WarehouseActivityLogCard } from "@/components/warehouse/WarehouseActivityLogCard";

export const metadata: Metadata = {
  title: "Warehouse | ShipNow",
};

export default function WarehousePage() {
  return (
    <>
      <PageHeader
        title="Warehouse"
        breadcrumb={[{ label: "Dashboard", href: "/dashboard" }, { label: "Warehouse" }]}
      >
        <FreightTypeTabs />
      </PageHeader>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <WarehouseKpiCards />
        </div>
        <div className="lg:col-span-6">
          <WarehouseInventoryCard />
        </div>
        <div className="lg:col-span-3">
          <CapacityUsageCard />
        </div>

        <div className="lg:col-span-9">
          <WarehouseStorageTable />
        </div>
        <div className="lg:col-span-3">
          <PackageStatusCard />
        </div>

        <div className="lg:col-span-9">
          <WarehouseMapCard />
        </div>
        <div className="lg:col-span-3">
          <WarehouseActivityLogCard />
        </div>
      </div>
    </>
  );
}
