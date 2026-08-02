import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { formatNumber } from "@/lib/utils";
import { WAREHOUSE_STATS } from "@/data/warehouse";

interface KpiRowProps {
  label: string;
  value: string;
  suffix?: string;
  trend: string;
}

function KpiRow({ label, value, suffix, trend }: KpiRowProps) {
  return (
    <Card className="p-6">
      <p className="mb-2 text-xs font-medium text-gray-500">{label}</p>
      <div className="flex items-end justify-between">
        <div className="flex items-baseline gap-1">
          <h2 className="text-3xl font-bold text-slate-900">{value}</h2>
          {suffix && <span className="text-xs text-gray-400">{suffix}</span>}
        </div>
        <span className="flex items-center gap-1 rounded-lg bg-status-success-bg px-2 py-1 text-[10px] font-bold text-status-success">
          <ArrowUpRight className="h-3 w-3" />
          {trend}
        </span>
      </div>
    </Card>
  );
}

export function WarehouseKpiCards() {
  return (
    <div className="space-y-6">
      <KpiRow label="Total SKU" value={formatNumber(WAREHOUSE_STATS.totalSku)} trend={WAREHOUSE_STATS.totalSkuTrend} />
      <KpiRow
        label="Quantity on Hand"
        value={formatNumber(WAREHOUSE_STATS.quantityOnHand)}
        suffix="units"
        trend={WAREHOUSE_STATS.quantityOnHandTrend}
      />
      <KpiRow
        label="Capacity Usage"
        value={`${WAREHOUSE_STATS.capacityUsagePercent}%`}
        suffix="Full"
        trend={WAREHOUSE_STATS.capacityUsageTrend}
      />
    </div>
  );
}
