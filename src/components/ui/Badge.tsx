import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant = "success" | "warning" | "info" | "neutral" | "brand";

const bgTextClasses: Record<BadgeVariant, string> = {
  success: "bg-status-success-bg text-status-success",
  warning: "bg-status-warning-bg text-status-warning",
  info: "bg-status-info-bg text-status-info",
  neutral: "bg-status-neutral-bg text-status-neutral",
  brand: "bg-brand-100 text-brand-600",
};

const dotClasses: Record<BadgeVariant, string> = {
  success: "bg-status-success",
  warning: "bg-status-warning",
  info: "bg-status-info",
  neutral: "bg-status-neutral",
  brand: "bg-brand-500",
};

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
  /** Shows a small colored dot before the label, matching the Shipments table status pills */
  dot?: boolean;
}

export function Badge({ variant = "neutral", children, className, dot = false }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide",
        bgTextClasses[variant],
        className
      )}
    >
      {dot && <span className={cn("h-1.5 w-1.5 rounded-full", dotClasses[variant])} />}
      {children}
    </span>
  );
}