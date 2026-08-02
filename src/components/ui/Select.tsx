import { forwardRef, useId, type SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: SelectOption[];
  /** Shown as a disabled first option when the field has no value yet. */
  placeholder?: string;
  containerClassName?: string;
}

/**
 * Native <select> styled to match Input — used for Carrier, Shipping Method,
 * Units, etc. forwardRef so it plugs directly into react-hook-form's register().
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, containerClassName, label, error, options, placeholder, id, ...props }, ref) => {
    const generatedId = useId();
    const selectId = id ?? generatedId;

    return (
      <div className={cn("space-y-1.5", containerClassName)}>
        {label && (
          <label htmlFor={selectId} className="block text-sm font-semibold text-gray-700">
            {label}
          </label>
        )}

        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            aria-invalid={!!error}
            aria-describedby={error ? `${selectId}-error` : undefined}
            className={cn(
              "block w-full appearance-none rounded-xl border border-transparent bg-gray-50 px-4 py-3 pr-9 text-sm text-gray-800",
              "transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500",
              error && "bg-red-50/40 ring-1 ring-red-300 focus:ring-red-500",
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        </div>

        {error && (
          <p id={`${selectId}-error`} className="text-xs font-medium text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Select.displayName = "Select";
