import type { UseFormRegister, FieldErrors } from "react-hook-form";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import type { CreateShipmentFormValues } from "@/lib/validations/shipment";

interface PackageDetailsFieldsProps {
  register: UseFormRegister<CreateShipmentFormValues>;
  errors: FieldErrors<CreateShipmentFormValues>;
}

export function PackageDetailsFields({ register, errors }: PackageDetailsFieldsProps) {
  const packageErrors = errors.package;

  return (
    <div className="space-y-6">
      <h4 className="font-semibold text-gray-800">Package Details</h4>

      <Input
        label="Item Description"
        placeholder="e.g. Premium Garden Tool Set"
        error={packageErrors?.description?.message}
        {...register("package.description")}
      />

      <div className="grid grid-cols-2 gap-6">
        <Input
          label="Quantity"
          type="number"
          min={1}
          step={1}
          error={packageErrors?.quantity?.message}
          {...register("package.quantity")}
        />
        <Input
          label="Value"
          type="number"
          min={0}
          step="0.01"
          placeholder="0.00"
          leftElement={<span className="text-sm text-gray-400">$</span>}
          error={packageErrors?.value?.message}
          {...register("package.value")}
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Input
          label="Weight"
          type="number"
          min={0}
          step="0.01"
          error={packageErrors?.weight?.message}
          {...register("package.weight")}
        />
        <Select
          label="Units"
          options={[
            { label: "Kg", value: "kg" },
            { label: "Lb", value: "lb" },
          ]}
          {...register("package.weightUnit")}
        />
      </div>

      <div>
        <span className="mb-1.5 block text-xs font-medium text-gray-500">Dimensions</span>
        <div className="grid grid-cols-3 gap-3">
          <Input
            type="number"
            min={0}
            placeholder="ex. 80"
            rightElement={<span className="text-xs text-gray-400">cm</span>}
            error={packageErrors?.length?.message}
            {...register("package.length")}
          />
          <Input
            type="number"
            min={0}
            placeholder="ex. 60"
            rightElement={<span className="text-xs text-gray-400">cm</span>}
            error={packageErrors?.width?.message}
            {...register("package.width")}
          />
          <Input
            type="number"
            min={0}
            placeholder="ex. 20"
            rightElement={<span className="text-xs text-gray-400">cm</span>}
            error={packageErrors?.height?.message}
            {...register("package.height")}
          />
        </div>
        <div className="mt-1.5 grid grid-cols-3 gap-3 text-center text-[10px] text-gray-400">
          <span>Length</span>
          <span>Width</span>
          <span>Height</span>
        </div>
      </div>
    </div>
  );
}
