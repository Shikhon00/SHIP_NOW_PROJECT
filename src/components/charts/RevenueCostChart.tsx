"use client";

import {
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { RevenueCostPoint } from "@/types/dashboard";
import { formatCurrency } from "@/lib/utils";

function ChartTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  const revenue = payload.find((p: any) => p.dataKey === "revenue")?.value ?? 0;
  const cost = payload.find((p: any) => p.dataKey === "cost")?.value ?? 0;

  return (
    <div className="w-40 rounded-xl bg-surface p-3 text-white shadow-xl">
      <p className="mb-2 text-[10px] text-gray-400">{label}</p>
      <div className="mb-1.5 flex items-center justify-between text-xs">
        <span className="flex items-center gap-2 text-gray-300">
          <span className="h-2 w-2 rounded-full bg-brand-500" /> Revenue
        </span>
        <span className="font-bold">{formatCurrency(revenue, { decimals: false })}</span>
      </div>
      <div className="flex items-center justify-between text-xs">
        <span className="flex items-center gap-2 text-gray-300">
          <span className="h-2 w-2 rounded-full bg-gray-400" /> Cost
        </span>
        <span className="font-bold">{formatCurrency(cost, { decimals: false })}</span>
      </div>
    </div>
  );
}

export function RevenueCostChart({ data }: { data: RevenueCostPoint[] }) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <ComposedChart data={data}>
        <CartesianGrid vertical={false} stroke="#f1f5f9" />
        <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 10, fill: "#9ca3af" }} />
        <YAxis
          tickLine={false}
          axisLine={false}
          width={44}
          tick={{ fontSize: 10, fill: "#9ca3af" }}
          tickFormatter={(v) => `$${Math.round(v / 1000)}K`}
        />
        <Tooltip content={<ChartTooltip />} />
        <Line type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={3} dot={false} />
        <Line type="monotone" dataKey="cost" stroke="#111827" strokeWidth={3} dot={false} />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
