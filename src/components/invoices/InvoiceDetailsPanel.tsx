import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { getStatusMeta } from "@/lib/status";
import { formatCurrency } from "@/lib/utils";
import type { Invoice } from "@/types/invoice";

interface InvoiceDetailsPanelProps {
  invoice: Invoice;
}

export function InvoiceDetailsPanel({ invoice }: InvoiceDetailsPanelProps) {
  const { label, variant } = getStatusMeta(invoice.status);

  const subTotal = invoice.lineItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subTotal * invoice.taxRate;
  const total = subTotal + tax + invoice.fee;

  return (
    <Card className="flex h-full flex-col overflow-hidden">
      <div className="flex items-center justify-between border-b border-gray-50 p-5">
        <h3 className="font-bold text-gray-900">Invoice Details</h3>
        <div className="flex gap-2">
          <Button variant="subtle" size="sm">
            Edit
          </Button>
          <Button variant="subtle" size="sm">
            Hold
          </Button>
          <Button variant="primary" size="sm">
            Send Invoice
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h4 className="text-xl font-bold text-gray-900">
              Invoice <span className="text-brand-600">#{invoice.id}</span>
            </h4>
            <Badge variant={variant} className="mt-1">
              {label}
            </Badge>
          </div>
          <div className="text-right text-[10px] text-gray-400">
            <p>
              Issue Date <span className="font-medium text-gray-900">{invoice.issueDate}</span>
            </p>
            <p>
              Due Date <span className="font-medium text-gray-900">{invoice.dueDate}</span>
            </p>
          </div>
        </div>

        <div className="mb-8 grid grid-cols-2 gap-8">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-wider text-gray-400">Bill From</p>
            <p className="text-sm font-bold text-gray-900">{invoice.billFrom.name}</p>
            <p className="mb-2 text-xs text-gray-500">{invoice.billFrom.email}</p>
            <p className="text-[10px] leading-relaxed text-gray-400">
              {invoice.billFrom.addressLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
            <p className="mt-2 text-[10px] text-gray-400">{invoice.billFrom.phone}</p>
          </div>

          <div className="text-right">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-wider text-gray-400">Bill To</p>
            <p className="text-sm font-bold text-gray-900">{invoice.billTo.name}</p>
            <p className="mb-2 text-xs text-gray-500">{invoice.billTo.email}</p>
            <p className="text-[10px] leading-relaxed text-gray-400">
              {invoice.billTo.addressLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
            <p className="mt-2 text-[10px] text-gray-400">{invoice.billTo.phone}</p>
          </div>
        </div>

        <div className="mb-6">
          <p className="mb-4 text-sm font-bold text-gray-900">Package Summary</p>
          <div className="overflow-hidden rounded-xl border border-gray-100">
            <table className="w-full text-left text-[10px]">
              <thead className="border-b border-gray-100 bg-gray-50 font-bold uppercase tracking-wider text-gray-400">
                <tr>
                  <th className="px-3 py-2">Description</th>
                  <th className="px-3 py-2">Shipment Type</th>
                  <th className="px-3 py-2">Price</th>
                  <th className="px-3 py-2">Qty</th>
                  <th className="px-3 py-2">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 text-gray-600">
                {invoice.lineItems.map((item, i) => (
                  <tr key={`${item.description}-${i}`}>
                    <td className="px-3 py-3 font-semibold text-gray-800">{item.description}</td>
                    <td className="px-3 py-3">
                      {item.shipmentType}
                      {item.shipmentMethod && (
                        <>
                          <br />
                          <span className="text-[8px] text-gray-400">{item.shipmentMethod}</span>
                        </>
                      )}
                    </td>
                    <td className="px-3 py-3">{formatCurrency(item.price)}</td>
                    <td className="px-3 py-3">{item.quantity}</td>
                    <td className="px-3 py-3 font-bold text-gray-800">
                      {formatCurrency(item.price * item.quantity)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-4 space-y-2 border-b border-gray-50 pb-4">
          <div className="flex justify-between text-[10px]">
            <span className="text-gray-400">Sub Total</span>
            <span className="font-bold text-gray-900">{formatCurrency(subTotal)}</span>
          </div>
          <div className="flex justify-between text-[10px]">
            <span className="text-gray-400">Tax ({Math.round(invoice.taxRate * 100)}%)</span>
            <span className="font-bold text-gray-900">{formatCurrency(tax)}</span>
          </div>
          <div className="flex justify-between text-[10px]">
            <span className="text-gray-400">Fee</span>
            <span className="font-bold text-gray-900">{formatCurrency(invoice.fee)}</span>
          </div>
        </div>

        <div className="mb-6 flex justify-between text-sm">
          <span className="font-bold text-gray-900">Total</span>
          <span className="font-bold text-brand-600">{formatCurrency(total)}</span>
        </div>

        <div className="rounded-xl bg-gray-50 p-4">
          <p className="mb-1 text-[10px] font-bold uppercase text-gray-400">Note</p>
          <p className="text-[10px] leading-relaxed text-gray-500">{invoice.note}</p>
        </div>
      </div>
    </Card>
  );
}
