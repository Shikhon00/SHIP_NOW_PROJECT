import { MoreHorizontal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { WAREHOUSE_CATEGORIES, WAREHOUSE_INVENTORY_TOTAL } from "@/data/warehouse";
import { formatNumber } from "@/lib/utils";

export function WarehouseInventoryCard() {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>Warehouse Inventory</CardTitle>
        <button type="button" aria-label="More options" className="text-gray-400 hover:text-gray-600">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col">
        <p className="mb-8 flex items-baseline gap-1">
          <span className="text-2xl font-bold text-slate-900">
            {formatNumber(WAREHOUSE_INVENTORY_TOTAL)}
          </span>
          <span className="text-xs text-gray-400">packages</span>
        </p>

        <div className="flex flex-1 items-end gap-4">
          {WAREHOUSE_CATEGORIES.map((category, i) => (
            <div key={category.label} className="flex flex-1 flex-col items-center">
              <div className="relative h-40 w-full overflow-hidden rounded-t-lg bg-gray-50">
                <div
                  className={`absolute bottom-0 w-full rounded-t-lg ${i === 0 ? "bg-brand-500" : "bg-brand-500/30"}`}
                  style={{ height: `${category.percent}%` }}
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-[10px] font-semibold text-gray-400">{category.label}</p>
                <p className="text-[10px] font-bold text-slate-900">
                  {category.percent}%{" "}
                  <span className="font-normal text-gray-400">• {formatNumber(category.count)}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
