import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { TOP_ROUTES } from "@/data/analytics";
import { formatNumber } from "@/lib/utils";

export function TopRoutesCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Shipping Routes</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        {TOP_ROUTES.map((route) => (
          <div key={`${route.origin}-${route.destination}`} className="flex items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-2 text-sm font-semibold text-slate-800">
              <span className="truncate">{route.origin}</span>
              <ArrowRight className="h-3.5 w-3.5 shrink-0 text-gray-300" />
              <span className="truncate">{route.destination}</span>
            </div>
            <div className="flex shrink-0 items-center gap-4 text-right">
              <div>
                <p className="text-xs font-bold text-slate-900">{formatNumber(route.shipments)}</p>
                <p className="text-[10px] text-gray-400">shipments</p>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">{route.avgTransitDays}d</p>
                <p className="text-[10px] text-gray-400">avg transit</p>
              </div>
              <div>
                <p className="text-xs font-bold text-status-success">{route.onTimePercent}%</p>
                <p className="text-[10px] text-gray-400">on-time</p>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
