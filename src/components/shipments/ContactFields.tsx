import type { UseFormRegister, FieldErrors } from "react-hook-form";
import { Input } from "@/components/ui/Input";
import type { CreateShipmentFormValues } from "@/lib/validations/shipment";

interface ContactFieldsProps {
  title: string;
  prefix: "sender" | "recipient";
  register: UseFormRegister<CreateShipmentFormValues>;
  errors: FieldErrors<CreateShipmentFormValues>;
}

/** Company / Email / Phone / Address block — used for both Sender Info and Recipient Info. */
export function ContactFields({ title, prefix, register, errors }: ContactFieldsProps) {
  const fieldErrors = errors[prefix];

  return (
    <div className="space-y-4">
      <h4 className="font-semibold text-gray-800">{title}</h4>

      <Input
        label="Company"
        placeholder="Company name"
        error={fieldErrors?.company?.message}
        className="bg-white"
        {...register(`${prefix}.company`)}
      />

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Email"
          type="email"
          placeholder="name@company.com"
          error={fieldErrors?.email?.message}
          className="bg-white"
          {...register(`${prefix}.email`)}
        />
        <Input
          label="Phone Number"
          type="tel"
          placeholder="555-555-7210"
          leftElement={<span className="text-xs font-medium text-gray-500">🇺🇸 +1</span>}
          error={fieldErrors?.phone?.message}
          className="bg-white"
          {...register(`${prefix}.phone`)}
        />
      </div>

      <Input
        label={prefix === "sender" ? "Pickup Address" : "Delivery Address"}
        placeholder="Street address, city, state/province, ZIP code"
        error={fieldErrors?.address?.message}
        className="bg-white"
        {...register(`${prefix}.address`)}
      />
    </div>
  );
}