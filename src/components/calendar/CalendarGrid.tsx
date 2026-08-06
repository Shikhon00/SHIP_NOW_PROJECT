"use client";

import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isToday,
  format,
} from "date-fns";
import { cn } from "@/lib/utils";
import { getEventTypeMeta } from "@/lib/calendar";
import type { CalendarEvent } from "@/types/calendar";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MAX_VISIBLE_EVENTS = 2;

interface CalendarGridProps {
  currentMonth: Date;
  selectedDate: Date;
  eventsByDate: Map<string, CalendarEvent[]>;
  onSelectDate: (date: Date) => void;
}

export function CalendarGrid({ currentMonth, selectedDate, eventsByDate, onSelectDate }: CalendarGridProps) {
  const gridStart = startOfWeek(startOfMonth(currentMonth));
  const gridEnd = endOfWeek(endOfMonth(currentMonth));
  const days = eachDayOfInterval({ start: gridStart, end: gridEnd });

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white">
      <div className="grid grid-cols-7 border-b border-gray-100 bg-gray-50/60">
        {WEEKDAYS.map((day) => (
          <div
            key={day}
            className="px-3 py-3 text-center text-[11px] font-bold uppercase tracking-wider text-gray-400"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7">
        {days.map((day) => {
          const key = format(day, "yyyy-MM-dd");
          const dayEvents = eventsByDate.get(key) ?? [];
          const inMonth = isSameMonth(day, currentMonth);
          const selected = isSameDay(day, selectedDate);
          const today = isToday(day);

          return (
            <button
              key={key}
              type="button"
              onClick={() => onSelectDate(day)}
              className={cn(
                "flex min-h-[104px] flex-col items-start gap-1 border-b border-r border-gray-100 p-2 text-left transition-colors last:border-r-0",
                inMonth ? "bg-white hover:bg-gray-50/70" : "bg-gray-50/40",
                selected && "bg-brand-50/70 ring-1 ring-inset ring-brand-500"
              )}
            >
              <span
                className={cn(
                  "flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold",
                  today ? "bg-surface text-white" : inMonth ? "text-gray-700" : "text-gray-300"
                )}
              >
                {format(day, "d")}
              </span>

              <div className="w-full space-y-1">
                {dayEvents.slice(0, MAX_VISIBLE_EVENTS).map((event) => {
                  const meta = getEventTypeMeta(event.type);
                  return (
                    <p
                      key={event.id}
                      className={cn(
                        "truncate rounded-md px-1.5 py-0.5 text-[10px] font-semibold",
                        meta.chipBg,
                        meta.chipText
                      )}
                    >
                      {event.title}
                    </p>
                  );
                })}
                {dayEvents.length > MAX_VISIBLE_EVENTS && (
                  <p className="px-1.5 text-[10px] font-medium text-gray-400">
                    +{dayEvents.length - MAX_VISIBLE_EVENTS} more
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
