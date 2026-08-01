import {
  LayoutGrid,
  BarChart3,
  CalendarDays,
  Truck,
  MapPin,
  Warehouse,
  Car,
  IdCard,
  Receipt,
  MessageCircle,
  Bell,
  Settings,
} from "lucide-react";
import type { NavLinkItem } from "@/types/nav";

/** Primary navigation — top section of the sidebar */
export const MAIN_NAV: NavLinkItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutGrid },
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
  { label: "Calendar", href: "/calendar", icon: CalendarDays },
  { label: "Shipments", href: "/shipments", icon: Truck },
  { label: "Tracking", href: "/tracking", icon: MapPin },
  { label: "Warehouse", href: "/warehouse", icon: Warehouse },
  { label: "Fleets", href: "/fleets", icon: Car },
  { label: "Drivers", href: "/drivers", icon: IdCard },
  { label: "Invoices & Billing", href: "/invoices", icon: Receipt },
];

/** Secondary navigation — below the divider, with unread badges */
export const UTILITY_NAV: NavLinkItem[] = [
  { label: "Message", href: "/messages", icon: MessageCircle, badge: 19 },
  { label: "Notification", href: "/notifications", icon: Bell, badge: 5 },
  { label: "Settings", href: "/settings", icon: Settings },
];
