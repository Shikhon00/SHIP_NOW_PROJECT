import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  breadcrumb?: BreadcrumbItem[];
  /** Right-aligned slot: search box, "New Shipment" button, freight-type tabs, etc. */
  children?: ReactNode;
}

export function PageHeader({ title, breadcrumb, children }: PageHeaderProps) {
  return (
    <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">{title}</h1>

        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="mt-1 flex items-center gap-1 text-xs font-medium text-gray-400">
            {breadcrumb.map((crumb, i) => (
              <span key={crumb.label} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="h-3 w-3" />}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-brand-600">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gray-600">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
      </div>

      {children && <div className="flex items-center gap-3">{children}</div>}
    </header>
  );
}
