import { forwardRef, useId, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  containerClassName?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, containerClassName, label, error, id, ...props }, ref) => {
    const generatedId = useId();
    const textareaId = id ?? generatedId;

    return (
      <div className={cn("space-y-1.5", containerClassName)}>
        {label && (
          <label htmlFor={textareaId} className="block text-sm font-semibold text-gray-700">
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          aria-invalid={!!error}
          aria-describedby={error ? `${textareaId}-error` : undefined}
          className={cn(
            "block h-20 w-full resize-none rounded-xl border border-transparent bg-gray-50 p-3 text-sm text-gray-800",
            "placeholder-gray-400 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500",
            error && "bg-red-50/40 ring-1 ring-red-300 focus:ring-red-500",
            className
          )}
          {...props}
        />

        {error && (
          <p id={`${textareaId}-error`} className="text-xs font-medium text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";
