import { Search, Plus, Minus, Send } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";

/**
 * The route line + pin are decorative SVG, not a real map. Swap this
 * inner visual for a Mapbox GL / Google Maps embed when live GPS data
 * is available — the card shell and details panel below can stay as-is.
 */
export function LiveTrackingCard() {
  return (
    <Card className="overflow-hidden">
      <div className="relative flex min-h-[220px] items-center justify-center bg-[#f4f5f9]">
        <div className="absolute left-6 right-6 top-6 flex gap-4">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              placeholder="Search by Shipping ID..."
              className="w-full rounded-xl border-none bg-white/95 py-3 pl-11 pr-4 text-sm font-medium shadow-sm outline-none backdrop-blur focus:ring-2 focus:ring-brand-500/20"
            />
          </div>
          <div className="flex flex-col gap-2">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 text-gray-600 shadow-sm backdrop-blur hover:text-brand-600"
            >
              <Plus className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 text-gray-600 shadow-sm backdrop-blur hover:text-brand-600"
            >
              <Minus className="h-4 w-4" />
            </button>
          </div>
        </div>

        <svg viewBox="0 0 600 300" className="h-full w-full" preserveAspectRatio="none">
          <path
            d="M80,220 Q300,100 520,150"
            fill="none"
            stroke="#e0e4ff"
            strokeWidth={6}
            strokeLinecap="round"
          />
          <path
            d="M80,220 Q300,100 520,150"
            fill="none"
            stroke="#6366f1"
            strokeWidth={6}
            strokeDasharray="500"
            strokeDashoffset="180"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute left-[52%] top-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-brand-500 p-2.5 shadow-lg">
          <Send className="h-3 w-3 text-white" />
        </div>
      </div>

      <div className="p-6">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h4 className="text-lg font-extrabold text-slate-900">#SH8743921</h4>
            <div className="mt-2 flex items-center gap-2">
              <Badge variant="brand">In Transit</Badge>
              <span className="text-xs font-medium text-gray-500">On Schedule</span>
            </div>
          </div>
          <div className="text-right">
            <p className="mb-1 text-[10px] font-medium uppercase tracking-wider text-gray-400">Courier</p>
            <p className="text-sm font-bold text-slate-900">Daniel Cooper</p>
            <p className="text-[11px] font-medium text-gray-500">SkyLogix Express</p>
          </div>
        </div>

        <ProgressBar value={75} className="mb-4" />

        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-bold text-slate-900">San Francisco, CA, USA</p>
            <p className="mt-1 text-xs font-medium text-gray-400">Mar 19, 2035 — 10:30 AM</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold text-slate-900">New York, NY, USA</p>
            <p className="mt-1 text-xs font-medium text-gray-400">
              Mar 23, 2035 — 03:00 PM (estimated)
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
