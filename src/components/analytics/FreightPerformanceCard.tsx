import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { FREIGHT_PERFORMANCE } from "@/data/analytics";
import { formatNumber } from "@/lib/utils";

export function FreightPerformanceCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Freight Type Performance</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {FREIGHT_PERFORMANCE.map((freight) => (
          <div key={freight.label}>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-semibold text-slate-800">{freight.label}</span>
              <span className="text-xs text-gray-400">
                {formatNumber(freight.shipments)} shipments ·{" "}
                <span className="font-bold text-slate-900">{freight.onTimePercent}%</span> on-time
              </span>
            </div>
            <ProgressBar value={freight.onTimePercent} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
