import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { RevenueCostChart } from "@/components/charts/RevenueCostChart";
import { REVENUE_TREND } from "@/data/analytics";
import { formatCurrency } from "@/lib/utils";

export function RevenueTrendCard() {
  const totalRevenue = REVENUE_TREND.reduce((sum, m) => sum + m.revenue, 0);
  const totalCost = REVENUE_TREND.reduce((sum, m) => sum + m.cost, 0);
  const margin = ((totalRevenue - totalCost) / totalRevenue) * 100;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue &amp; Cost Trend</CardTitle>
        <select className="cursor-pointer rounded-lg border-gray-100 bg-gray-50 py-1.5 pl-3 pr-8 text-xs font-medium text-gray-600 focus:ring-0">
          <option>This Year</option>
        </select>
      </CardHeader>
      <CardContent>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl font-bold text-slate-900">
              {formatCurrency(totalRevenue, { decimals: false })}
            </h2>
            <span className="rounded-md bg-status-success-bg px-2 py-1 text-xs font-bold text-status-success">
              {margin.toFixed(1)}% margin
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-brand-500" /> Revenue
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-surface" /> Cost
            </span>
          </div>
        </div>
        <RevenueCostChart data={REVENUE_TREND} />
      </CardContent>
    </Card>
  );
}
