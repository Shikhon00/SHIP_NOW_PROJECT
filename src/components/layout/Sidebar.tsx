"use client";

import Link from "next/link";
import { Zap } from "lucide-react";
import { NavItem } from "./NavItem";
import { UserProfileMenu } from "./UserProfileMenu";
import { PromoCard } from "./PromoCard";
import { MAIN_NAV, UTILITY_NAV } from "@/lib/constants";

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-20 flex h-screen w-64 flex-col border-r border-gray-100 bg-white">
      <Link href="/dashboard" className="flex items-center gap-2 p-6">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500 text-white">
          <Zap className="h-5 w-5" fill="currentColor" />
        </span>
        <span className="text-xl font-bold italic tracking-tight text-slate-900">
          SHIPNOW
        </span>
      </Link>

      <div className="px-4 pb-6">
        <UserProfileMenu name="John Doe" role="Admin" avatarUrl="/avatars/john-doe.jpg" />
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-4">
        {MAIN_NAV.map((item) => (
          <NavItem key={item.href} item={item} />
        ))}

        <div className="my-4 border-t border-gray-100" />

        {UTILITY_NAV.map((item) => (
          <NavItem key={item.href} item={item} />
        ))}
      </nav>

      <div className="p-4">
        <PromoCard />
      </div>
    </aside>
  );
}