import { Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { KpiSection } from "@/components/dashboard/KpiSection";
import { ShipmentStatisticCard } from "@/components/dashboard/ShipmentStatisticCard";
import { ProfitSummaryCard } from "@/components/dashboard/ProfitSummaryCard";
import { ProductCategoriesCard } from "@/components/dashboard/ProductCategoriesCard";
import { LiveTrackingCard } from "@/components/dashboard/LiveTrackingCard";
import { RecentShipmentsTable } from "@/components/dashboard/RecentShipmentsTable";
import { ShipmentTypeCard } from "@/components/dashboard/ShipmentTypeCard";
import { ShipmentAlertsCard } from "@/components/dashboard/ShipmentAlertsCard";
import { RecentActivityCard } from "@/components/dashboard/RecentActivityCard";

export default function DashboardPage() {
  return (
    <>
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-gray-500">Hello John!</p>
          <h1 className="mt-1 text-3xl font-bold text-slate-900">Good Morning</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              placeholder="Search anything"
              className="w-80 rounded-xl border border-gray-100 bg-white py-3 pl-11 pr-4 text-sm shadow-sm outline-none focus:ring-2 focus:ring-brand-500/20"
            />
          </div>
          <Button variant="primary">
            <Plus className="h-4 w-4" /> Add New Shipping
          </Button>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-4">
        <div className="space-y-6 xl:col-span-3">
          <KpiSection />

          <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ShipmentStatisticCard />
            <ProfitSummaryCard />
          </section>

          <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <ProductCategoriesCard />
            <div className="md:col-span-2">
              <LiveTrackingCard />
            </div>
          </section>

          <RecentShipmentsTable />
        </div>

        <div className="space-y-6 xl:col-span-1">
          <ShipmentTypeCard />
          <ShipmentAlertsCard />
          <RecentActivityCard />
        </div>
      </div>
    </>
  );
}
