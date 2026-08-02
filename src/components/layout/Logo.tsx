import Link from "next/link";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  href?: string;
  /** "dark" = brand-purple icon chip + slate wordmark (default, used in the sidebar). */
  /** "light" = translucent icon chip + white wordmark (used on the purple auth hero). */
  variant?: "dark" | "light";
  className?: string;
}

/**
 * The "SHIPNOW" wordmark + icon chip. Single source of truth so the
 * sidebar and the login/auth screens never drift out of sync.
 */
export function Logo({ href = "/dashboard", variant = "dark", className }: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link href={href} className={cn("flex items-center gap-2", className)}>
      <span
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-lg",
          isLight ? "bg-white/15" : "bg-brand-500"
        )}
      >
        <Zap className="h-5 w-5 text-white" fill="currentColor" />
      </span>
      <span
        className={cn(
          "text-xl font-bold italic tracking-tight",
          isLight ? "text-white" : "text-slate-900"
        )}
      >
        SHIPNOW
      </span>
    </Link>
  );
}
