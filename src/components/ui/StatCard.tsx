import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, ArrowDownRight, MoreHorizontal } from "lucide-react";
import { Card } from "./Card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  /** Pre-formatted display value, e.g. "1,284" or "$82,450" — format with lib/utils before passing in */
  value: string;
  /** Small trailing unit text, e.g. "shipments", "on-time" */
  suffix?: string;
  icon: LucideIcon;
  trend?: {
    value: string; // e.g. "+8.7%"
    direction: "up" | "down";
    label?: string; // e.g. "from last week"
  };
  iconVariant?: "brand" | "dark";
  /** Show a "..." menu button instead of the icon (Product Categories / Shipment Type style cards) */
  showMenu?: boolean;
}

export function StatCard({
  label,
  value,
  suffix,
  icon: Icon,
  trend,
  iconVariant = "brand",
  showMenu = false,
}: StatCardProps) {
  return (
    <Card className="flex flex-col justify-between p-6">
      <div className="mb-4 flex items-start justify-between">
        <p className="text-sm font-medium text-gray-500">{label}</p>
        {showMenu ? (
          <button
            type="button"
            aria-label="More options"
            className="text-gray-400 transition-colors hover:text-gray-600"
          >
            <MoreHorizontal className="h-5 w-5" />
          </button>
        ) : (
          <span
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-xl",
              iconVariant === "brand"
                ? "bg-brand-500 text-white shadow-sm shadow-brand-500/30"
                : "bg-surface text-white"
            )}
          >
            <Icon className="h-5 w-5" />
          </span>
        )}
      </div>

      <div className="mb-3 flex items-baseline gap-2">
        <h2 className="text-3xl font-bold text-slate-900">{value}</h2>
        {suffix && <span className="text-sm font-medium text-gray-400">{suffix}</span>}
      </div>

      {trend && (
        <div className="flex items-center gap-2 text-xs font-semibold">
          <span
            className={cn(
              "flex items-center gap-1 rounded-md px-2 py-1",
              trend.direction === "up"
                ? "bg-status-success-bg text-status-success"
                : "bg-red-50 text-rose-500"
            )}
          >
            {trend.direction === "up" ? (
              <ArrowUpRight className="h-3 w-3" />
            ) : (
              <ArrowDownRight className="h-3 w-3" />
            )}
            {trend.value}
          </span>
          {trend.label && <span className="font-medium text-gray-400">{trend.label}</span>}
        </div>
      )}
    </Card>
  );
}