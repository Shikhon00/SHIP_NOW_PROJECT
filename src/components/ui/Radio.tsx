import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const Radio = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      type="radio"
      className={cn(
        "h-4 w-4 cursor-pointer border-gray-300 text-brand-600 focus:ring-brand-500",
        className
      )}
      {...props}
    />
  )
);
Radio.displayName = "Radio";
