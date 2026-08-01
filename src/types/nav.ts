import type { LucideIcon } from "lucide-react";

export interface NavLinkItem {
  label: string;
  href: string;
  icon: LucideIcon;
  /** Unread count shown as a pill, e.g. Message (19), Notification (5) */
  badge?: number;
}
