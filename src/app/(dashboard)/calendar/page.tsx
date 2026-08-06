import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { CalendarWorkspace } from "@/components/calendar/CalendarWorkspace";

export const metadata: Metadata = {
  title: "Calendar | ShipNow",
};

export default function CalendarPage() {
  return (
    <>
      <PageHeader
        title="Calendar"
        breadcrumb={[{ label: "Dashboard", href: "/dashboard" }, { label: "Calendar" }]}
      />
      <CalendarWorkspace />
    </>
  );
}


