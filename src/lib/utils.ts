import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes safely, resolving conflicts (e.g. "p-2 p-4" -> "p-4").
 * Use this in every component that accepts a `className` prop.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Formats a number as USD currency, e.g. 82450 -> "$82,450" */
export function formatCurrency(value: number, opts?: { decimals?: boolean }) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: opts?.decimals === false ? 0 : 2,
    maximumFractionDigits: opts?.decimals === false ? 0 : 2,
  }).format(value);
}

/** Formats a number with thousand separators, e.g. 1284 -> "1,284" */
export function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

/** Formats a percentage, e.g. 0.876 -> "87.6%" or (8.7, true) -> "8.7%" */
export function formatPercent(value: number) {
  return `${value.toFixed(1).replace(/\.0$/, "")}%`;
}

/** Truncates text with an ellipsis at a max character length */
export function truncate(text: string, max: number) {
  return text.length > max ? `${text.slice(0, max - 1)}…` : text;
}

/** Gets initials from a company/person name for avatar fallbacks, e.g. "TechGear Inc." -> "T" */
export function getInitial(name: string) {
  return name.trim().charAt(0).toUpperCase();
}

/**
 * Generates a placeholder shipment ID for the "auto-generated" field on the
 * Create Shipment form, e.g. "#SH9583742". Call client-side only (after
 * mount) — it's random, so calling it during SSR would cause a hydration
 * mismatch.
 */
export function generateShipmentId() {
  const digits = Math.floor(1_000_000 + Math.random() * 9_000_000);
  return `#SH${digits}`;
}