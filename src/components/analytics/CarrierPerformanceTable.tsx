import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { CARRIER_PERFORMANCE } from "@/data/analytics";
import { formatCurrency, formatNumber } from "@/lib/utils";

export function CarrierPerformanceTable() {
  return (
    <Card>
      <div className="border-b border-gray-50 p-6">
        <h3 className="text-lg font-bold text-slate-900">Carrier Performance</h3>
      </div>

      <CardContent className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-gray-100 text-[11px] font-bold uppercase tracking-wider text-gray-400">
              <th className="pb-4 pr-4">Carrier</th>
              <th className="pb-4 pr-4">Shipments</th>
              <th className="w-48 pb-4 pr-4">On-Time Rate</th>
              <th className="pb-4 pr-4">Avg. Cost / Shipment</th>
              <th className="pb-4">Rating</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {CARRIER_PERFORMANCE.map((carrier) => (
              <tr key={carrier.carrier}>
                <td className="py-4 pr-4 font-semibold text-slate-900">{carrier.carrier}</td>
                <td className="py-4 pr-4 text-gray-500">{formatNumber(carrier.shipments)}</td>
                <td className="py-4 pr-4">
                  <ProgressBar value={carrier.onTimePercent} className="w-40" showLabel />
                </td>
                <td className="py-4 pr-4 font-medium text-gray-700">{formatCurrency(carrier.avgCost)}</td>
                <td className="py-4">
                  <span className="flex items-center gap-1 font-semibold text-slate-900">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    {carrier.rating.toFixed(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
