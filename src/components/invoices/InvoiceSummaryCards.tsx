import { CheckCircle2, XCircle, RefreshCw, Clock } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { formatCurrency } from "@/lib/utils";
import { INVOICE_SUMMARY } from "@/data/invoices";

interface SummaryCardProps {
  label: string;
  amount: number;
  count: number;
  icon: LucideIcon;
  iconClassName: string;
}

function SummaryCard({ label, amount, count, icon: Icon, iconClassName }: SummaryCardProps) {
  return (
    <Card className="flex items-center gap-4 p-6">
      <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white ${iconClassName}`}>
        <Icon className="h-6 w-6" />
      </span>
      <div className="text-right">
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-2xl font-bold text-slate-900">{formatCurrency(amount, { decimals: false })}</p>
        <p className="text-[10px] text-gray-400">
          from <span className="font-medium text-green-500">{count}</span> Invoices
        </p>
      </div>
    </Card>
  );
}

export function InvoiceSummaryCards() {
  return (
    <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      <SummaryCard
        label="Paid Invoices"
        amount={INVOICE_SUMMARY.paid.amount}
        count={INVOICE_SUMMARY.paid.count}
        icon={CheckCircle2}
        iconClassName="bg-brand-600"
      />
      <SummaryCard
        label="Unpaid Invoices"
        amount={INVOICE_SUMMARY.unpaid.amount}
        count={INVOICE_SUMMARY.unpaid.count}
        icon={XCircle}
        iconClassName="bg-brand-500"
      />
      <SummaryCard
        label="Pending Invoices"
        amount={INVOICE_SUMMARY.pending.amount}
        count={INVOICE_SUMMARY.pending.count}
        icon={RefreshCw}
        iconClassName="bg-brand-400"
      />
      <SummaryCard
        label="Overdue Invoices"
        amount={INVOICE_SUMMARY.overdue.amount}
        count={INVOICE_SUMMARY.overdue.count}
        icon={Clock}
        iconClassName="bg-brand-600"
      />
    </div>
  );
}
