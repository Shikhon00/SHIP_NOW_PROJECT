import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

export default function TestPage() {
  return (
    <Card className="m-8 max-w-sm">
      <CardContent className="space-y-4">
        <p className="text-sm text-gray-500">Token check</p>
        <Button variant="primary">New Shipment</Button>
        <Button variant="brand">Login</Button>
        <Button variant="outline">Filter</Button>
      </CardContent>
    </Card>
  );
}