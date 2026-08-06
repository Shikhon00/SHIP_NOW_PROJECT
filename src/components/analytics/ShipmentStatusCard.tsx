import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { DonutChart } from "@/components/charts/DonutChart";
import { SHIPMENT_STATUS_BREAKDOWN } from "@/data/analytics";
import { formatNumber } from "@/lib/utils";

export function ShipmentStatusCard() {
  const total = SHIPMENT_STATUS_BREAKDOWN.reduce((sum, s) => sum + s.count, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Shipment Status</CardTitle>
      </CardHeader>
      <CardContent>
        <DonutChart
          data={SHIPMENT_STATUS_BREAKDOWN}
          centerLabel="Total Shipments"
          centerValue={formatNumber(total)}
        />
        <div className="mt-8 grid grid-cols-2 gap-x-2 gap-y-6">
          {SHIPMENT_STATUS_BREAKDOWN.map((slice) => (
            <div key={slice.label} className="flex items-center gap-3">
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[11px] font-bold text-white shadow-sm"
                style={{ backgroundColor: slice.color }}
              >
                {slice.value}%
              </span>
              <div className="min-w-0">
                <p className="truncate text-xs font-bold text-slate-900">{slice.label}</p>
                <p className="mt-0.5 text-[10px] font-medium text-gray-400">
                  {formatNumber(slice.count)} shipments
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
