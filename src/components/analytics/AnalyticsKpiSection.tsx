import { DollarSign, Package, Gauge, Timer } from "lucide-react";
import { StatCard } from "@/components/ui/StatCard";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { ANALYTICS_KPIS } from "@/data/analytics";

export function AnalyticsKpiSection() {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        label="Total Revenue"
        value={formatCurrency(ANALYTICS_KPIS.totalRevenue, { decimals: false })}
        icon={DollarSign}
        trend={{ value: ANALYTICS_KPIS.totalRevenueTrend, direction: "up", label: "vs last year" }}
      />
      <StatCard
        label="Total Shipments"
        value={formatNumber(ANALYTICS_KPIS.totalShipments)}
        suffix="shipments"
        icon={Package}
        trend={{ value: ANALYTICS_KPIS.totalShipmentsTrend, direction: "up", label: "vs last year" }}
      />
      <StatCard
        label="On-Time Delivery"
        value={`${ANALYTICS_KPIS.onTimeRate}%`}
        icon={Gauge}
        trend={{ value: ANALYTICS_KPIS.onTimeRateTrend, direction: "up", label: "vs last quarter" }}
      />
      <StatCard
        label="Avg. Delivery Time"
        value={ANALYTICS_KPIS.avgDeliveryDays.toString()}
        suffix="days"
        icon={Timer}
        trend={{ value: ANALYTICS_KPIS.avgDeliveryDaysTrend, direction: "down", label: "vs last quarter" }}
      />
    </section>
  );
}
