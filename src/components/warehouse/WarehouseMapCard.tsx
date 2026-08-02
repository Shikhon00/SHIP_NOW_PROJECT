"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { WAREHOUSE_ZONES, WAREHOUSE_SMALL_ZONES } from "@/data/warehouse";
import type { WarehouseZone } from "@/types/warehouse";

const FLOORS = ["Floor 1", "Floor 2", "Floor 3"] as const;

function ZoneCard({ zone, compact = false }: { zone: WarehouseZone; compact?: boolean }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-gray-100 bg-white shadow-sm",
        compact ? "p-4" : "p-6",
        zone.span === 2 && "col-span-2"
      )}
    >
      <h4 className={cn("mb-4 font-bold", compact ? "text-xs" : "text-sm")}>{zone.name}</h4>
      <div className="mb-4 flex flex-wrap gap-2 overflow-x-auto">
        {zone.bays.map((bay) => (
          <div
            key={bay.code}
            className={cn(
              "flex shrink-0 items-center justify-center rounded-lg border font-bold",
              compact ? "h-8 w-8 text-[8px]" : "h-10 w-10 text-[10px]",
              bay.available
                ? "border-brand-200 bg-brand-100 text-brand-600"
                : "border-gray-200 bg-gray-100 text-gray-400"
            )}
          >
            {bay.code}
          </div>
        ))}
      </div>
      <p className={cn("font-bold text-gray-400", compact ? "text-[8px]" : "text-[10px]")}>
        Available Space <span className="ml-1 text-slate-900">{zone.availableSpace}/{zone.totalSpace}</span>
      </p>
    </div>
  );
}

export function WarehouseMapCard() {
  const [floor, setFloor] = useState<(typeof FLOORS)[number]>("Floor 1");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Warehouse Map</CardTitle>
        <div className="flex rounded-xl bg-gray-50 p-1">
          {FLOORS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFloor(f)}
              className={cn(
                "rounded-lg px-4 py-1.5 text-xs font-medium transition-colors",
                floor === f ? "bg-surface font-bold text-white" : "text-gray-500 hover:text-gray-700"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </CardHeader>

      <CardContent>
        {floor === "Floor 1" ? (
          <div className="grid grid-cols-3 gap-6 rounded-2xl bg-gray-50 p-8">
            {WAREHOUSE_ZONES.map((zone) => (
              <ZoneCard key={zone.name} zone={zone} />
            ))}

            <div className="grid grid-rows-2 gap-4">
              {WAREHOUSE_SMALL_ZONES.map((zone) => (
                <ZoneCard key={zone.name} zone={zone} compact />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex h-64 items-center justify-center rounded-2xl bg-gray-50 text-sm text-gray-400">
            No layout data for {floor} yet.
          </div>
        )}

        <div className="mt-6 flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm bg-brand-100" />
            <span className="text-[10px] font-bold text-gray-400">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm bg-gray-100" />
            <span className="text-[10px] font-bold text-gray-400">Full</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
