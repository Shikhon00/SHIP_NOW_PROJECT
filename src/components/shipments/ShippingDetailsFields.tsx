"use client";

import { Controller, type Control, type UseFormRegister, type FieldErrors } from "react-hook-form";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Radio } from "@/components/ui/Radio";
import { Checkbox } from "@/components/ui/Checkbox";
import { Textarea } from "@/components/ui/Textarea";
import { Switch } from "@/components/ui/Switch";
import { FREIGHT_LABEL } from "@/lib/freight";
import { freightTypes, type CreateShipmentFormValues } from "@/lib/validations/shipment";

interface ShippingDetailsFieldsProps {
  register: UseFormRegister<CreateShipmentFormValues>;
  control: Control<CreateShipmentFormValues>;
  errors: FieldErrors<CreateShipmentFormValues>;
  shipmentId: string;
}

const CARRIER_OPTIONS = [
  { label: "FedEx", value: "FedEx" },
  { label: "DHL", value: "DHL" },
  { label: "UPS", value: "UPS" },
  { label: "USPS", value: "USPS" },
  { label: "Aramex", value: "Aramex" },
];

const METHOD_OPTIONS = [
  { label: "Standard", value: "standard" },
  { label: "Express", value: "express" },
  { label: "Overnight", value: "overnight" },
];

export function ShippingDetailsFields({
  register,
  control,
  errors,
  shipmentId,
}: ShippingDetailsFieldsProps) {
  const shippingErrors = errors.shipping;

  return (
    <div className="space-y-6 lg:border-l lg:border-gray-100 lg:pl-12">
      <h4 className="font-semibold text-gray-800">Shipping Details</h4>

      <div>
        <span className="mb-3 block text-xs font-medium text-gray-500">Freight Type</span>
        <div className="flex flex-wrap gap-6">
          {freightTypes.map((type) => (
            <label key={type} className="flex cursor-pointer items-center gap-2">
              <Radio value={type} {...register("shipping.freightType")} />
              <span className="text-xs text-gray-700">{FREIGHT_LABEL[type]}</span>
            </label>
          ))}
        </div>
        {shippingErrors?.freightType && (
          <p className="mt-1 text-xs font-medium text-red-500">
            {shippingErrors.freightType.message}
          </p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Select
          label="Carrier"
          options={CARRIER_OPTIONS}
          error={shippingErrors?.carrier?.message}
          {...register("shipping.carrier")}
        />
        <Select
          label="Shipping Method"
          placeholder="Select Method"
          options={METHOD_OPTIONS}
          error={shippingErrors?.method?.message}
          {...register("shipping.method")}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Input label="Shipment ID" value={shipmentId} disabled readOnly />
          <p className="mt-1 text-[10px] text-gray-400">Auto-generated</p>
        </div>
        <Input
          label="Shipment Date"
          type="date"
          error={shippingErrors?.date?.message}
          {...register("shipping.date")}
        />
      </div>

      <Textarea
        label="Notes"
        placeholder="Add special delivery notes (optional)"
        {...register("shipping.notes")}
      />

      <div className="grid grid-cols-2 gap-8 pt-4">
        <div className="space-y-3">
          <span className="block text-xs font-medium text-gray-500">Additional Services</span>
          <div className="space-y-2">
            <label className="flex cursor-pointer items-center gap-2">
              <Checkbox {...register("services.insurance")} />
              <span className="text-xs text-gray-700">Insurance Coverage</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2">
              <Checkbox {...register("services.signature")} />
              <span className="text-xs text-gray-700">Signature on Delivery</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2">
              <Checkbox {...register("services.temperatureControl")} />
              <span className="text-xs text-gray-700">Temperature Control</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2">
              <Checkbox {...register("services.fragile")} />
              <span className="text-xs text-gray-700">Fragile Item Handling</span>
            </label>
          </div>
        </div>

        <div className="space-y-3">
          <span className="block text-xs font-medium text-gray-500">Tracking &amp; Status Updates</span>
          <Controller
            control={control}
            name="services.notifyRecipient"
            render={({ field }) => (
              <Switch
                id="notify-recipient"
                checked={!!field.value}
                onChange={field.onChange}
                label="Notify Recipient via Email/SMS"
              />
            )}
          />
        </div>
      </div>
    </div>
  );
}
