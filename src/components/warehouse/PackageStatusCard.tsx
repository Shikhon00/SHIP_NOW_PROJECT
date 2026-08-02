"use client";

import { useMemo, useState } from "react";
import { MoreHorizontal, Ship } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge, type BadgeVariant } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { WAREHOUSE_PACKAGES } from "@/data/warehouse";
import type { PackageStatus } from "@/types/warehouse";

const TABS = ["All", "Expected", "Received", "Sent"] as const;
type Tab = (typeof TABS)[number];

const STATUS_META: Record<PackageStatus, { label: string; badge: BadgeVariant }> = {
  expected: { label: "Expected", badge: "neutral" },
  received: { label: "Received", badge: "success" },
  sent: { label: "Sent", badge: "brand" },
};

export function PackageStatusCard() {
  const [tab, setTab] = useState<Tab>("All");

  const filtered = useMemo(() => {
    if (tab === "All") return WAREHOUSE_PACKAGES;
    return WAREHOUSE_PACKAGES.filter((pkg) => STATUS_META[pkg.status].label === tab);
  }, [tab]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Package Status</CardTitle>
        <button type="button" aria-label="More options" className="text-gray-400 hover:text-gray-600">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </CardHeader>

      <CardContent>
        <div className="mb-6 flex rounded-xl bg-gray-50 p-1">
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={cn(
                "flex-1 rounded-lg py-1.5 text-xs font-medium transition-colors",
                tab === t ? "bg-surface font-bold text-white" : "text-gray-500 hover:text-gray-700"
              )}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {filtered.map((pkg) => (
            <div key={pkg.id} className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Ship className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-slate-900">{pkg.id}</p>
                  <Badge variant={STATUS_META[pkg.status].badge}>{STATUS_META[pkg.status].label}</Badge>
                </div>
                <p className="mt-1 text-[10px] text-gray-400">{pkg.datetime}</p>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <p className="py-6 text-center text-xs text-gray-400">No packages in this status.</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
