"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { NavLinkItem } from "@/types/nav";

export function NavItem({ item }: { item: NavLinkItem }) {
  const pathname = usePathname();
  const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
        isActive
          ? "bg-brand-100 text-brand-600"
          : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
      )}
    >
      <span className="flex items-center gap-3">
        <Icon className="h-5 w-5 shrink-0" strokeWidth={isActive ? 2.25 : 2} />
        {item.label}
      </span>

      {typeof item.badge === "number" && (
        <span className="rounded-full bg-brand-100 px-1.5 py-0.5 text-[10px] font-bold text-brand-600">
          {item.badge}
        </span>
      )}
    </Link>
  );
}
