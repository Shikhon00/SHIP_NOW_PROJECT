import { EVENT_TYPES, getEventTypeMeta } from "@/lib/calendar";

export function EventTypeLegend() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {EVENT_TYPES.map((type) => {
        const meta = getEventTypeMeta(type);
        return (
          <span key={type} className="flex items-center gap-2 text-xs font-medium text-gray-500">
            <span className={`h-2.5 w-2.5 rounded-full ${meta.dot}`} />
            {meta.label}
          </span>
        );
      })}
    </div>
  );
}
