import { format, isToday } from "date-fns";
import { CalendarPlus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { getEventTypeMeta } from "@/lib/calendar";
import type { CalendarEvent } from "@/types/calendar";

interface DaySchedulePanelProps {
  date: Date;
  events: CalendarEvent[];
}

export function DaySchedulePanel({ date, events }: DaySchedulePanelProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{isToday(date) ? "Today's Schedule" : format(date, "EEEE, MMM d")}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {events.length === 0 && (
          <div className="flex flex-col items-center gap-2 py-8 text-center">
            <CalendarPlus className="h-8 w-8 text-gray-300" />
            <p className="text-xs text-gray-400">No events scheduled for this day.</p>
          </div>
        )}

        {events.map((event) => {
          const meta = getEventTypeMeta(event.type);
          return (
            <div key={event.id} className="flex gap-3">
              <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${meta.dot}`} />
              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-900">{event.title}</p>
                <p className="mt-0.5 text-[11px] text-gray-400">
                  {event.time}
                  {event.location && ` · ${event.location}`}
                </p>
                {event.relatedShipmentId && (
                  <p className="mt-1 text-[11px] font-medium text-brand-600">{event.relatedShipmentId}</p>
                )}
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
