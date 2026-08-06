import { format, startOfMonth, addDays, getDaysInMonth } from "date-fns";
import type { CalendarEvent } from "@/types/calendar";

const today = new Date();
const monthStart = startOfMonth(today);
const daysInMonth = getDaysInMonth(today);

/** Maps a day-of-month number onto the current month, clamped so short months never break. */
function dayOffset(day: number): string {
  const clamped = Math.min(day, daysInMonth);
  return format(addDays(monthStart, clamped - 1), "yyyy-MM-dd");
}

export const CALENDAR_EVENTS: CalendarEvent[] = [
  { id: "1", title: "Pickup — GreenHaven", date: dayOffset(2), time: "9:00 AM", type: "pickup", location: "Portland, OR", relatedShipmentId: "#SH8967432" },
  { id: "2", title: "Delivery — TechGear Inc.", date: dayOffset(3), time: "2:00 PM", type: "delivery", location: "Chicago, IL", relatedShipmentId: "#SH9283746" },
  { id: "3", title: "Fleet Maintenance", date: dayOffset(5), time: "8:00 AM", type: "maintenance", location: "Main Depot" },
  { id: "4", title: "Carrier Review Meeting", date: dayOffset(5), time: "11:00 AM", type: "meeting", location: "Conference Room B" },
  { id: "5", title: "Pickup — StyleHub Co.", date: dayOffset(8), time: "10:30 AM", type: "pickup", location: "New York, NY", relatedShipmentId: "#SH9182635" },
  { id: "6", title: "Delivery — FreshNest", date: dayOffset(8), time: "4:15 PM", type: "delivery", location: "Miami, FL", relatedShipmentId: "#SH9037821" },
  { id: "7", title: "Warehouse Audit", date: dayOffset(8), time: "1:00 PM", type: "maintenance", location: "Floor 1" },
  { id: "8", title: "Delivery — FitPlus Gear", date: dayOffset(11), time: "3:00 PM", type: "delivery", location: "Denver, CO", relatedShipmentId: "#SH9374652" },
  { id: "9", title: "Pickup — AutoParts Pro", date: dayOffset(13), time: "7:30 AM", type: "pickup", location: "Detroit, MI", relatedShipmentId: "#SH9457830" },
  { id: "10", title: "Quarterly Planning", date: dayOffset(15), time: "10:00 AM", type: "meeting", location: "HQ — Boardroom" },
  { id: "11", title: "Fleet Maintenance", date: dayOffset(17), time: "9:00 AM", type: "maintenance", location: "Main Depot" },
  { id: "12", title: "Pickup — EcoLights", date: dayOffset(19), time: "9:45 AM", type: "pickup", location: "Austin, TX", relatedShipmentId: "#SH8821349" },
  { id: "13", title: "Delivery — ModaWear", date: dayOffset(19), time: "2:30 PM", type: "delivery", location: "Charlotte, NC", relatedShipmentId: "#SH8893247" },
  { id: "14", title: "Carrier Onboarding — Aramex", date: dayOffset(22), time: "1:30 PM", type: "meeting", location: "Conference Room A" },
  { id: "15", title: "Pickup — SunCore Panels", date: dayOffset(24), time: "8:15 AM", type: "pickup", location: "San Diego, CA", relatedShipmentId: "#SH9018723" },
  { id: "16", title: "Delivery — VitaFresh", date: dayOffset(24), time: "5:00 PM", type: "delivery", location: "Jacksonville, FL", relatedShipmentId: "#SH8881190" },
  { id: "17", title: "Safety Inspection", date: dayOffset(27), time: "9:00 AM", type: "maintenance", location: "Main Depot" },
  { id: "18", title: "Delivery — SmartAppliance", date: dayOffset(29), time: "11:45 AM", type: "delivery", location: "Minneapolis, MN", relatedShipmentId: "#SH8923752" },
];
