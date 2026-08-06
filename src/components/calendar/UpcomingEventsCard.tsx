import { format, isToday, isTomorrow, parseISO } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { getEventTypeMeta } from "@/lib/calendar";
import type { CalendarEvent } from "@/types/calendar";

interface UpcomingEventsCardProps {
  /** Pre-filtered (today onward) and sorted by the caller. */
  events: CalendarEvent[];
}

function relativeDayLabel(dateStr: string) {
  const date = parseISO(dateStr);
  if (isToday(date)) return "Today";
  if (isTomorrow(date)) return "Tomorrow";
  return format(date, "MMM d");
}

export function UpcomingEventsCard({ events }: UpcomingEventsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Events</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {events.length === 0 && <p className="text-xs text-gray-400">No upcoming events.</p>}

        {events.map((event) => {
          const meta = getEventTypeMeta(event.type);
          return (
            <div key={event.id} className="flex min-w-0 items-center gap-3">
              <span className={`h-8 w-1 shrink-0 rounded-full ${meta.dot}`} />
              <div className="min-w-0">
                <p className="truncate text-xs font-semibold text-slate-900">{event.title}</p>
                <p className="text-[10px] text-gray-400">
                  {relativeDayLabel(event.date)} · {event.time}
                </p>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
