import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { PRODUCT_CATEGORIES } from "@/data/dashboard";
import { formatNumber } from "@/lib/utils";

export function ProductCategoriesCard() {
  const total = PRODUCT_CATEGORIES.reduce((sum, c) => sum + c.count, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Categories</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6 flex items-end justify-between">
          <p className="text-sm font-medium text-gray-500">Total Products</p>
          <h2 className="text-3xl font-bold text-slate-900">{formatNumber(total)}</h2>
        </div>

        <div className="mb-8 flex h-10 gap-1.5 overflow-hidden rounded-md">
          {PRODUCT_CATEGORIES.map((c) => (
            <div key={c.label} style={{ width: `${c.percent}%`, backgroundColor: c.color }} />
          ))}
        </div>

        <div className="space-y-4">
          {PRODUCT_CATEGORIES.map((c) => (
            <div key={c.label} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: c.color }} />
                <span className="text-sm font-semibold text-slate-800">{c.label}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="whitespace-nowrap rounded-md bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-500">
                  {c.count} products
                </span>
                <span className="w-8 text-right text-sm font-bold">{c.percent}%</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
