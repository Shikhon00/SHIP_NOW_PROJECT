"use client";

import { NavItem } from "./NavItem";
import { UserProfileMenu } from "./UserProfileMenu";
import { PromoCard } from "./PromoCard";
import { Logo } from "./Logo";
import { MAIN_NAV, UTILITY_NAV } from "@/lib/constants";

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-20 flex h-screen w-64 flex-col border-r border-gray-100 bg-white">
      <Logo className="p-6" />

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