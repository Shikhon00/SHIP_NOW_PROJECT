"use client";

import { useState } from "react";
import { Truck, TrainFront, Ship, Plane } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FreightType } from "@/types/shipment";
import { FREIGHT_LABEL } from "@/lib/freight";

const TABS: FreightType[] = ["road", "rail", "ocean", "air"];

const ICONS: Record<FreightType, typeof Truck> = {
  road: Truck,
  rail: TrainFront,
  ocean: Ship,
  air: Plane,
};

/**
 * Presentational freight-type filter in the Warehouse header. Not wired to
 * the data below yet (all cards currently show combined/road-freight mock
 * data) — swap in a shared filter state once the API distinguishes by
 * freight type.
 */
export function FreightTypeTabs() {
  const [active, setActive] = useState<FreightType>("road");

  return (
    <div className="flex items-center gap-1 rounded-xl border border-gray-100 bg-white p-1.5">
      {TABS.map((type) => {
        const Icon = ICONS[type];
        const isActive = active === type;
        return (
          <button
            key={type}
            type="button"
            onClick={() => setActive(type)}
            className={cn(
              "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
              isActive ? "bg-surface text-white" : "text-gray-600 hover:bg-gray-50"
            )}
          >
            <Icon className="h-4 w-4" />
            {FREIGHT_LABEL[type]}
          </button>
        );
      })}
    </div>
  );
}
