"use client";

import { useState } from "react";
import { Filter, ArrowUpDown, ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { WAREHOUSE_STORAGE } from "@/data/warehouse";

const SORT_OPTIONS = ["Section", "Floor", "Category", "Percentage"] as const;
type SortOption = (typeof SORT_OPTIONS)[number];

export function WarehouseStorageTable() {
  const [sortBy, setSortBy] = useState<SortOption>("Section");

  return (
    <Card>
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-50 p-6">
        <h3 className="text-lg font-bold text-slate-900">Warehouse Storage</h3>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-3.5 w-3.5" /> Filter
          </Button>

          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span>Sort by:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="appearance-none rounded-lg border border-gray-200 bg-gray-50 py-1.5 pl-3 pr-7 text-xs font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                {SORT_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-3 w-3 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      <CardContent className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-100 text-left text-[10px] font-bold uppercase tracking-wider text-gray-400">
              <th className="pb-4 pr-4">
                <span className="inline-flex items-center gap-1">
                  Floor <ArrowUpDown className="h-2.5 w-2.5" />
                </span>
              </th>
              <th className="pb-4 pr-4">
                <span className="inline-flex items-center gap-1">
                  Section <ArrowUpDown className="h-2.5 w-2.5" />
                </span>
              </th>
              <th className="pb-4 pr-4">
                <span className="inline-flex items-center gap-1">
                  Category <ArrowUpDown className="h-2.5 w-2.5" />
                </span>
              </th>
              <th className="w-48 pb-4 pr-4">Storage Used</th>
              <th className="pb-4 pr-4">Percentage</th>
              <th className="pb-4">Available Space</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 text-sm">
            {WAREHOUSE_STORAGE.map((row) => (
              <tr key={row.section}>
                <td className="py-4 pr-4">{row.floor}</td>
                <td className="py-4 pr-4 font-semibold text-slate-900">{row.section}</td>
                <td className="py-4 pr-4 text-gray-500">{row.category}</td>
                <td className="py-4 pr-4">
                  <ProgressBar value={row.percentUsed} />
                </td>
                <td className="py-4 pr-4 font-bold text-gray-700">{row.percentUsed}%</td>
                <td className="py-4 font-bold text-slate-900">
                  {row.availableSpace}
                  <span className="font-normal text-gray-400">/{row.totalSpace}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
