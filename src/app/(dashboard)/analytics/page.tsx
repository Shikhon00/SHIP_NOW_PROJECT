import type { Metadata } from "next";
import { CalendarDays } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { AnalyticsKpiSection } from "@/components/analytics/AnalyticsKpiSection";
import { RevenueTrendCard } from "@/components/analytics/RevenueTrendCard";
import { ShipmentStatusCard } from "@/components/analytics/ShipmentStatusCard";
import { OnTimeTrendCard } from "@/components/analytics/OnTimeTrendCard";
import { FreightPerformanceCard } from "@/components/analytics/FreightPerformanceCard";
import { CarrierPerformanceTable } from "@/components/analytics/CarrierPerformanceTable";
import { TopRoutesCard } from "@/components/analytics/TopRoutesCard";

export const metadata: Metadata = {
  title: "Analytics | ShipNow",
};

export default function AnalyticsPage() {
  return (
    <>
      <PageHeader
        title="Analytics"
        breadcrumb={[{ label: "Dashboard", href: "/dashboard" }, { label: "Analytics" }]}
      >
        <div className="flex items-center gap-2 rounded-xl border border-gray-100 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 shadow-sm">
          <CalendarDays className="h-4 w-4 text-gray-400" />
          <select className="cursor-pointer bg-transparent focus:outline-none">
            <option>Last 12 Months</option>
            <option>Last Quarter</option>
            <option>Last 30 Days</option>
          </select>
        </div>
      </PageHeader>

      <div className="space-y-6">
        <AnalyticsKpiSection />

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
          <div className="xl:col-span-8">
            <RevenueTrendCard />
          </div>
          <div className="xl:col-span-4">
            <ShipmentStatusCard />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <OnTimeTrendCard />
          <FreightPerformanceCard />
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
          <div className="xl:col-span-7">
            <CarrierPerformanceTable />
          </div>
          <div className="xl:col-span-5">
            <TopRoutesCard />
          </div>
        </div>
      </div>
    </>
  );
}
