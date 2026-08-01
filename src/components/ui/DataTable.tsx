"use client";

import { useState } from "react";
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Pagination } from "./Pagination";

interface DataTableProps<T> {
  columns: ColumnDef<T, any>[];
  data: T[];
  /** Rows per page. Omit or set to data.length to disable pagination. */
  pageSize?: number;
  className?: string;
  emptyMessage?: string;
}

/**
 * Client-side sorting + pagination over an in-memory array — fine for the
 * mock-data stage. When wiring to a real API, swap getCoreRowModel/slicing
 * for server-driven sorting + pageIndex/pageSize passed to your fetcher,
 * and drop `manualSorting`/`manualPagination` onto useReactTable.
 */
export function DataTable<T>({
  columns,
  data,
  pageSize,
  className,
  emptyMessage = "No results found.",
}: DataTableProps<T>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [page, setPage] = useState(1);

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const rows = table.getRowModel().rows;
  const effectivePageSize = pageSize ?? data.length || 1;
  const totalPages = Math.max(1, Math.ceil(rows.length / effectivePageSize));
  const start = (page - 1) * effectivePageSize;
  const paginatedRows = rows.slice(start, start + effectivePageSize);

  return (
    <div className={className}>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50/50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border-b border-gray-50">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className={cn(
                      "whitespace-nowrap px-4 py-4 text-[11px] font-bold uppercase tracking-wider text-gray-400",
                      header.column.getCanSort() && "cursor-pointer select-none hover:text-brand-600"
                    )}
                  >
                    {header.isPlaceholder ? null : (
                      <div className="flex items-center gap-1.5">
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {header.column.getCanSort() && <ArrowUpDown className="h-3 w-3" />}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-gray-50 text-sm">
            {paginatedRows.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-4 py-10 text-center text-sm text-gray-400">
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              paginatedRows.map((row) => (
                <tr key={row.id} className="transition-colors hover:bg-gray-50/50">
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-4 py-5">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {pageSize && totalPages > 1 && (
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-50 px-6 py-4">
          <p className="text-xs font-medium text-gray-500">
            Showing {start + 1}–{Math.min(start + effectivePageSize, rows.length)} of {rows.length} results
          </p>
          <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
        </div>
      )}
    </div>
  );
}