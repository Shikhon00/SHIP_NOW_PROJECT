import { cn } from "@/lib/utils";

interface ProgressBarProps {
  /** 0–100 */
  value: number;
  className?: string;
  barClassName?: string;
  showLabel?: boolean;
}

export function ProgressBar({ value, className, barClassName, showLabel = false }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
        <div
          className={cn("h-full rounded-full bg-brand-500 transition-all", barClassName)}
          style={{ width: `${clamped}%` }}
        />
      </div>
      {showLabel && (
        <span className="whitespace-nowrap text-[10px] font-bold text-slate-600">{clamped}%</span>
      )}
    </div>
  );
}