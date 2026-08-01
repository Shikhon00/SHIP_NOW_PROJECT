import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/Card";

export default function DashboardPage() {
  return (
    <>
      <PageHeader title="Dashboard" breadcrumb={[{ label: "Dashboard" }]} />
      <Card>
        <CardContent>Sidebar + layout wiring test</CardContent>
      </Card>
    </>
  );
}