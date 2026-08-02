import { Truck, Gauge, DollarSign } from "lucide-react";
import { StatCard } from "@/components/ui/StatCard";
import { formatCurrency, formatNumber } from "@/lib/utils";

export function KpiSection() {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <StatCard
        label="Active Shipments"
        value={formatNumber(1284)}
        suffix="shipments"
        icon={Truck}
        trend={{ value: "+8.7%", direction: "up", label: "from last week" }}
      />
      <StatCard
        label="Delivery Performance"
        value="94.3%"
        suffix="on-time"
        icon={Gauge}
        trend={{ value: "-1.2%", direction: "down", label: "from last week" }}
      />
      <StatCard
        label="Revenue"
        value={formatCurrency(82450, { decimals: false })}
        icon={DollarSign}
        trend={{ value: "+12.4%", direction: "up", label: "from last month" }}
      />
    </section>
  );
}
