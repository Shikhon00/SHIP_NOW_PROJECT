"use client";

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { MonthlyValue } from "@/types/dashboard";
import { formatNumber } from "@/lib/utils";

function ChartTooltip({ active, payload, label, valueSuffix }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg bg-brand-100 px-3 py-2 text-center shadow-sm">
      <p className="mb-0.5 text-[10px] font-medium text-gray-500">{label}</p>
      <p className="text-sm font-bold text-slate-900">
        {formatNumber(payload[0].value)}
        {valueSuffix}
      </p>
    </div>
  );
}

interface BarTrendChartProps {
  data: MonthlyValue[];
  /**
   * Text appended after the formatted number in the tooltip, e.g. "%".
   * A plain string (not a function) so this can be passed from a Server
   * Component into this Client Component without a serialization error.
   */
  valueSuffix?: string;
}

export function BarTrendChart({ data, valueSuffix = "" }: BarTrendChartProps) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data} barCategoryGap="30%">
        <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 10, fill: "#9ca3af" }} />
        <YAxis tickLine={false} axisLine={false} width={36} tick={{ fontSize: 10, fill: "#9ca3af" }} />
        <Tooltip
          content={<ChartTooltip valueSuffix={valueSuffix} />}
          cursor={{ fill: "rgba(99,102,241,0.06)" }}
        />
        <Bar dataKey="value" radius={[6, 6, 0, 0]} fill="#e5e7eb" activeBar={{ fill: "#6366f1" }} />
      </BarChart>
    </ResponsiveContainer>
  );
}