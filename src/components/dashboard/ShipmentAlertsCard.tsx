import { FileWarning, MapPin, CloudRain, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { SHIPMENT_ALERTS } from "@/data/dashboard";
import type { AlertIconKey } from "@/types/dashboard";

const ICONS: Record<AlertIconKey, typeof FileWarning> = {
  customs: FileWarning,
  address: MapPin,
  weather: CloudRain,
};

export function ShipmentAlertsCard() {
  const counts = {
    customs: SHIPMENT_ALERTS.filter((a) => a.icon === "customs").length,
    address: SHIPMENT_ALERTS.filter((a) => a.icon === "address").length,
    weather: SHIPMENT_ALERTS.filter((a) => a.icon === "weather").length,
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Shipment Alerts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6 flex items-center gap-3">
          <h2 className="text-3xl font-bold text-slate-900">{SHIPMENT_ALERTS.length}</h2>
          <span className="text-sm font-medium text-gray-500">Delays Detected</span>
        </div>

        <div className="mb-8 grid grid-cols-3 gap-3">
          <div className="rounded-xl border border-brand-100 bg-brand-50 p-3 text-center">
            <p className="mb-1 text-xl font-bold text-brand-600">{counts.customs}</p>
            <p className="text-[9px] font-bold uppercase leading-tight text-brand-600">Customs Delay</p>
          </div>
          <div className="rounded-xl border border-purple-100 bg-purple-50 p-3 text-center">
            <p className="mb-1 text-xl font-bold text-purple-600">{counts.address}</p>
            <p className="text-[9px] font-bold uppercase leading-tight text-purple-500">Bad Address</p>
          </div>
          <div className="rounded-xl border border-blue-100 bg-blue-50 p-3 text-center">
            <p className="mb-1 text-xl font-bold text-blue-600">{counts.weather}</p>
            <p className="text-[9px] font-bold uppercase leading-tight text-blue-500">Weather Hold</p>
          </div>
        </div>

        <div className="space-y-5">
          {SHIPMENT_ALERTS.map((alert) => {
            const Icon = ICONS[alert.icon];
            return (
              <div key={alert.id} className="group flex cursor-pointer items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-gray-50 text-gray-500 transition-colors group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 pt-0.5">
                  <div className="mb-1 flex items-center justify-between">
                    <p className="text-sm font-bold text-slate-900 group-hover:text-brand-600">
                      {alert.type}
                    </p>
                    <ArrowUpRight className="h-3 w-3 text-gray-300 group-hover:text-brand-600" />
                  </div>
                  <div className="flex gap-2 text-[11px] font-medium text-gray-400">
                    <span className="font-bold text-brand-600">{alert.shipmentId}</span>
                    <span>•</span>
                    <span>{alert.freightType}</span>
                    <span>•</span>
                    <span>{alert.date}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
