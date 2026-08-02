"use client";

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

interface DonutSlice {
  label: string;
  value: number;
  color: string;
}

interface DonutChartProps {
  data: DonutSlice[];
  centerLabel?: string;
  centerValue?: string;
  size?: number;
}

export function DonutChart({ data, centerLabel, centerValue, size = 208 }: DonutChartProps) {
  return (
    <div className="relative mx-auto" style={{ width: size, height: size }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="label"
            innerRadius="72%"
            outerRadius="100%"
            paddingAngle={3}
            cornerRadius={8}
            startAngle={90}
            endAngle={-270}
            stroke="none"
          >
            {data.map((slice) => (
              <Cell key={slice.label} fill={slice.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {(centerLabel || centerValue) && (
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
          {centerLabel && (
            <p className="mb-1 text-[10px] font-medium uppercase tracking-wider text-gray-400">
              {centerLabel}
            </p>
          )}
          {centerValue && <p className="text-3xl font-extrabold text-slate-900">{centerValue}</p>}
        </div>
      )}
    </div>
  );
}
