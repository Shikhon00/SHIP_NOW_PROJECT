import { CheckCircle2, PlusCircle, Truck, FilePlus2, type LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { WAREHOUSE_ACTIVITY } from "@/data/warehouse";
import type { WarehouseActivityIconKey } from "@/types/warehouse";
import { cn } from "@/lib/utils";

const ICONS: Record<WarehouseActivityIconKey, LucideIcon> = {
  check: CheckCircle2,
  add: PlusCircle,
  dispatch: Truck,
  create: FilePlus2,
};

const ICON_STYLES: Record<WarehouseActivityIconKey, string> = {
  check: "bg-surface text-white",
  add: "bg-brand-400 text-white",
  dispatch: "bg-slate-800 text-white",
  create: "bg-brand-500 text-white",
};

export function WarehouseActivityLogCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Warehouse Activity Log</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative space-y-8">
          <div className="absolute bottom-4 left-5 top-4 w-px bg-gray-100" />
          {WAREHOUSE_ACTIVITY.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <div key={item.id} className="relative z-10 flex items-start gap-4">
                <div
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                    ICON_STYLES[item.icon]
                  )}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs leading-relaxed">
                    <span className="font-bold text-brand-600">{item.actor}</span> {item.action}
                  </p>
                  <p className="mt-1 text-[10px] font-semibold text-gray-400">{item.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
