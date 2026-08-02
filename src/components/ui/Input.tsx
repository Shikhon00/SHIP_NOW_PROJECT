import { forwardRef, useId, type InputHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  /** Validation message, e.g. from react-hook-form's formState.errors. */
  error?: string;
  /** Icon/text rendered inside the field on the left (currency symbol, phone prefix, etc.) */
  leftElement?: ReactNode;
  /** Icon/button rendered inside the field on the right (password toggle, unit label, etc.) */
  rightElement?: ReactNode;
  containerClassName?: string;
}

/**
 * Base text input used across forms (Login, Create Shipment, etc.).
 * forwardRef so it plugs directly into react-hook-form's register().
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, containerClassName, label, error, leftElement, rightElement, id, ...props },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    return (
      <div className={cn("space-y-1.5", containerClassName)}>
        {label && (
          <label htmlFor={inputId} className="block text-sm font-semibold text-gray-700">
            {label}
          </label>
        )}

        <div className="relative">
          {leftElement && (
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5">
              {leftElement}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            aria-invalid={!!error}
            aria-describedby={error ? `${inputId}-error` : undefined}
            className={cn(
              "block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900",
              "placeholder-gray-400 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500",
              leftElement && "pl-11",
              rightElement && "pr-11",
              error && "bg-red-50/40 ring-1 ring-red-300 focus:ring-red-500",
              className
            )}
            {...props}
          />
          {rightElement && (
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
              {rightElement}
            </span>
          )}
        </div>

        {error && (
          <p id={`${inputId}-error`} className="text-xs font-medium text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";