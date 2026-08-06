export type CalendarEventType = "pickup" | "delivery" | "maintenance" | "meeting";

export interface CalendarEvent {
  id: string;
  title: string;
  /** ISO date, "yyyy-MM-dd" */
  date: string;
  time?: string; // "10:30 AM"
  type: CalendarEventType;
  location?: string;
  relatedShipmentId?: string;
}
