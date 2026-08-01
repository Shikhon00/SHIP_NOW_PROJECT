import { ButtonHTMLAttributes, forwardRef } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Variants observed across the Stitch screens:
 * - "primary"  -> dark slate/zinc buttons ("New Shipment", "Login", "Submit Shipment")
 * - "brand"    -> solid brand-purple buttons
 * - "outline"  -> bordered buttons ("Filter", "This Month")
 * - "ghost"    -> icon-only / borderless buttons (ellipsis menus, pagination arrows)
 * - "subtle"   -> light gray pill buttons ("Edit", "Hold")
 */
type ButtonVariant = "primary" | "brand" | "outline" | "ghost" | "subtle" | "danger";
type ButtonSize = "sm" | "md" | "lg" | "icon";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-surface text-white hover:bg-surface-soft focus-visible:ring-surface",
  brand:
    "bg-brand-500 text-white hover:bg-brand-600 focus-visible:ring-brand-500",
  outline:
    "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 focus-visible:ring-brand-500",
  ghost:
    "bg-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus-visible:ring-brand-500",
  subtle:
    "bg-gray-100 text-gray-700 hover:bg-gray-200 focus-visible:ring-brand-500",
  danger:
    "bg-red-50 text-red-600 hover:bg-red-100 focus-visible:ring-red-500",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-xs gap-1.5",
  md: "h-10 px-4 text-sm gap-2",
  lg: "h-12 px-6 text-sm gap-2",
  icon: "h-10 w-10 p-0 justify-center",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex items-center justify-center rounded-xl font-semibold transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
