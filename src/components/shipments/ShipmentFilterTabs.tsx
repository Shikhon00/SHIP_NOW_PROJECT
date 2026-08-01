"use client";

import { cn } from "@/lib/utils";

export const SHIPMENT_TABS = ["All", "Completed", "Delivery", "Pending"] as const;
export type ShipmentTab = (typeof SHIPMENT_TABS)[number];

interface ShipmentFilterTabsProps {
  value: ShipmentTab;
  onChange: (tab: ShipmentTab) => void;
}

export function ShipmentFilterTabs({ value, onChange }: ShipmentFilterTabsProps) {
  return (
    <div className="flex items-center gap-1 rounded-xl bg-gray-100 p-1">
      {SHIPMENT_TABS.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => onChange(tab)}
          className={cn(
            "rounded-lg px-5 py-2 text-sm font-medium transition-colors",
            value === tab
              ? "bg-white font-bold text-slate-900 shadow-sm"
              : "text-slate-500 hover:text-slate-900"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}