import type { CalendarEventType } from "@/types/calendar";

interface EventTypeMeta {
  label: string;
  dot: string;
  chipBg: string;
  chipText: string;
}

const EVENT_TYPE_META: Record<CalendarEventType, EventTypeMeta> = {
  pickup: { label: "Pickup", dot: "bg-brand-500", chipBg: "bg-brand-50", chipText: "text-brand-600" },
  delivery: {
    label: "Delivery",
    dot: "bg-status-success",
    chipBg: "bg-status-success-bg",
    chipText: "text-status-success",
  },
  maintenance: {
    label: "Maintenance",
    dot: "bg-status-warning",
    chipBg: "bg-status-warning-bg",
    chipText: "text-status-warning",
  },
  meeting: {
    label: "Meeting",
    dot: "bg-status-info",
    chipBg: "bg-status-info-bg",
    chipText: "text-status-info",
  },
};

export const EVENT_TYPES: CalendarEventType[] = ["pickup", "delivery", "maintenance", "meeting"];

export function getEventTypeMeta(type: CalendarEventType): EventTypeMeta {
  return EVENT_TYPE_META[type];
}
