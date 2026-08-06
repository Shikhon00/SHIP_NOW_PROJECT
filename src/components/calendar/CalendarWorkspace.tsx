"use client";

import { useMemo, useState } from "react";
import { addMonths, subMonths, format, parseISO, startOfDay, isBefore } from "date-fns";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CalendarGrid } from "./CalendarGrid";
import { DaySchedulePanel } from "./DaySchedulePanel";
import { UpcomingEventsCard } from "./UpcomingEventsCard";
import { EventTypeLegend } from "./EventTypeLegend";
import { CALENDAR_EVENTS } from "@/data/calendar";
import type { CalendarEvent } from "@/types/calendar";

export function CalendarWorkspace() {
  const [currentMonth, setCurrentMonth] = useState(() => new Date());
  const [selectedDate, setSelectedDate] = useState(() => new Date());

  const eventsByDate = useMemo(() => {
    const map = new Map<string, CalendarEvent[]>();
    for (const event of CALENDAR_EVENTS) {
      const list = map.get(event.date) ?? [];
      list.push(event);
      map.set(event.date, list);
    }
    return map;
  }, []);

  const selectedDateEvents = eventsByDate.get(format(selectedDate, "yyyy-MM-dd")) ?? [];

  const upcomingEvents = useMemo(() => {
    const todayStart = startOfDay(new Date());
    return [...CALENDAR_EVENTS]
      .filter((event) => !isBefore(parseISO(event.date), todayStart))
      .sort((a, b) => a.date.localeCompare(b.date))
      .slice(0, 6);
  }, []);

  function goToToday() {
    const today = new Date();
    setCurrentMonth(today);
    setSelectedDate(today);
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center rounded-xl border border-gray-100 bg-white">
            <button
              type="button"
              onClick={() => setCurrentMonth((m) => subMonths(m, 1))}
              aria-label="Previous month"
              className="p-2.5 text-gray-400 hover:text-gray-700"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="min-w-[140px] text-center text-sm font-bold text-slate-900">
              {format(currentMonth, "MMMM yyyy")}
            </span>
            <button
              type="button"
              onClick={() => setCurrentMonth((m) => addMonths(m, 1))}
              aria-label="Next month"
              className="p-2.5 text-gray-400 hover:text-gray-700"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          <Button variant="outline" size="sm" onClick={goToToday}>
            Today
          </Button>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <EventTypeLegend />
          <Button variant="primary" size="sm">
            <Plus className="h-4 w-4" /> Add Event
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <div className="xl:col-span-8">
          <CalendarGrid
            currentMonth={currentMonth}
            selectedDate={selectedDate}
            eventsByDate={eventsByDate}
            onSelectDate={setSelectedDate}
          />
        </div>
        <div className="space-y-6 xl:col-span-4">
          <DaySchedulePanel date={selectedDate} events={selectedDateEvents} />
          <UpcomingEventsCard events={upcomingEvents} />
        </div>
      </div>
    </div>
  );
}
