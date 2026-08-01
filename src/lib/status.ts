import type { BadgeVariant } from "@/components/ui/Badge";

/**
 * Add new statuses here as new pages need them — don't hardcode
 * variant/color logic inside individual table column definitions.
 */
const STATUS_MAP: Record<string, { label: string; variant: BadgeVariant }> = {
  delivered: { label: "Delivered", variant: "success" },
  completed: { label: "Completed", variant: "success" },
  paid: { label: "Paid", variant: "success" },
  received: { label: "Received", variant: "success" },

  in_transit: { label: "In Transit", variant: "info" },
  delivery: { label: "Delivery", variant: "info" },
  out_for_delivery: { label: "Out for Delivery", variant: "brand" },
  sent: { label: "Sent", variant: "brand" },

  processing: { label: "Processing", variant: "warning" },
  pending: { label: "Pending", variant: "warning" },
  unpaid: { label: "Unpaid", variant: "brand" },
  expected: { label: "Expected", variant: "neutral" },

  overdue: { label: "Overdue", variant: "neutral" },
};

export function getStatusMeta(status: string) {
  const key = status.toLowerCase().replace(/\s+/g, "_");
  return STATUS_MAP[key] ?? { label: status, variant: "neutral" as BadgeVariant };
}