import { Copy, Tag, Undo2, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { RECENT_ACTIVITY } from "@/data/dashboard";
import type { ActivityIconKey } from "@/types/dashboard";
import { cn } from "@/lib/utils";

const ICONS: Record<ActivityIconKey, typeof Copy> = {
  copy: Copy,
  tag: Tag,
  undo: Undo2,
  check: Check,
};

export function RecentActivityCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative space-y-7">
          <div className="absolute bottom-6 left-5 top-2 w-px bg-gray-100" />
          {RECENT_ACTIVITY.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <div key={item.id} className="relative z-10 flex gap-4">
                <div
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-white shadow-sm",
                    i % 2 === 0 ? "bg-brand-100 text-brand-600" : "bg-gray-100 text-gray-500"
                  )}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-sm font-medium leading-relaxed text-slate-700">
                    <span className="font-bold text-brand-600">{item.actor}</span> {item.action}
                  </p>
                  <p className="mt-1.5 text-[11px] font-semibold text-gray-400">{item.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
