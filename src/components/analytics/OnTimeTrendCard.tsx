import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { BarTrendChart } from "@/components/charts/BarTrendChart";
import { ON_TIME_TREND, ANALYTICS_KPIS } from "@/data/analytics";

export function OnTimeTrendCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>On-Time Delivery Rate</CardTitle>
        <select className="cursor-pointer rounded-lg border-gray-100 bg-gray-50 py-1.5 pl-3 pr-8 text-xs font-medium text-gray-600 focus:ring-0">
          <option>Last 8 Months</option>
        </select>
      </CardHeader>
      <CardContent>
        <div className="mb-6 flex items-baseline gap-3">
          <h2 className="text-3xl font-bold text-slate-900">{ANALYTICS_KPIS.onTimeRate}%</h2>
          <span className="rounded-md bg-status-success-bg px-2 py-1 text-xs font-bold text-status-success">
            {ANALYTICS_KPIS.onTimeRateTrend}
          </span>
        </div>
        <BarTrendChart data={ON_TIME_TREND} valueSuffix="%" />
      </CardContent>
    </Card>
  );
}