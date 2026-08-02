import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { CreateShipmentForm } from "@/components/shipments/CreateShipmentForm";

export const metadata: Metadata = {
  title: "Create New Shipment | ShipNow",
};

export default function CreateShipmentPage() {
  return (
    <>
      <PageHeader
        title="Create New Shipment"
        backHref="/shipments"
        breadcrumb={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Shipments", href: "/shipments" },
          { label: "Create New Shipment" },
        ]}
      />

      <Card className="rounded-3xl p-8">
        <CreateShipmentForm />
      </Card>
    </>
  );
}
