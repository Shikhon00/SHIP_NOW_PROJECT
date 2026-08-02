import { MoreHorizontal } from "lucide-react";
import { DonutChart } from "@/components/charts/DonutChart";
import { WAREHOUSE_CAPACITY } from "@/data/warehouse";

export function CapacityUsageCard() {
  const data = [
    { label: "Loaded", value: WAREHOUSE_CAPACITY.totalUsagePercent, color: "#6366f1" },
    { label: "Empty", value: 100 - WAREHOUSE_CAPACITY.totalUsagePercent, color: "#374151" },
  ];

  return (
    <div className="flex h-full flex-col rounded-2xl bg-surface p-6 text-white">
      <div className="mb-8 flex items-center justify-between">
        <h3 className="text-lg font-bold">Capacity Usage</h3>
        <button type="button" aria-label="More options" className="text-gray-500 hover:text-gray-300">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center">
        <DonutChart
          data={data}
          size={192}
          variant="dark"
          centerLabel="Total Usage"
          centerValue={`${WAREHOUSE_CAPACITY.totalUsagePercent}%`}
        />

        <div className="mt-8 flex w-full justify-between">
          <div>
            <p className="mb-1 text-[10px] font-semibold text-gray-500">Loaded</p>
            <p className="font-bold">{WAREHOUSE_CAPACITY.loadedShelves} shelves</p>
          </div>
          <div className="text-right">
            <p className="mb-1 text-[10px] font-semibold text-gray-500">Empty</p>
            <p className="font-bold">{WAREHOUSE_CAPACITY.emptyShelves} shelves</p>
          </div>
        </div>
      </div>
    </div>
  );
}
