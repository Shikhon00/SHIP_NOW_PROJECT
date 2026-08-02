"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { Button } from "@/components/ui/Button";
import { ContactFields } from "./ContactFields";
import { PackageDetailsFields } from "./PackageDetailsFields";
import { ShippingDetailsFields } from "./ShippingDetailsFields";
import { createShipmentSchema, type CreateShipmentFormValues } from "@/lib/validations/shipment";
import { generateShipmentId } from "@/lib/utils";

const EMPTY_CONTACT = { company: "", email: "", phone: "", address: "" };

const DEFAULT_VALUES: CreateShipmentFormValues = {
  sender: EMPTY_CONTACT,
  recipient: EMPTY_CONTACT,
  package: {
    description: "",
    quantity: 1,
    value: 0,
    weight: 0,
    weightUnit: "kg",
    length: 0,
    width: 0,
    height: 0,
  },
  shipping: {
    freightType: "road",
    carrier: "FedEx",
    method: "",
    date: format(new Date(), "yyyy-MM-dd"),
    notes: "",
  },
  services: {
    insurance: true,
    signature: true,
    temperatureControl: true,
    fragile: false,
    notifyRecipient: true,
  },
};

export function CreateShipmentForm() {
  const router = useRouter();

  // Generated client-side only, after mount — it's random, so generating it
  // during the server render would cause a hydration mismatch.
  const [shipmentId, setShipmentId] = useState("Generating…");
  useEffect(() => {
    setShipmentId(generateShipmentId());
  }, []);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreateShipmentFormValues>({
    resolver: zodResolver(createShipmentSchema),
    defaultValues: DEFAULT_VALUES,
  });

  async function onSubmit(values: CreateShipmentFormValues) {
    // TODO: replace with the real "create shipment" API call once it exists.
    console.log("create shipment submit", { id: shipmentId, ...values });
    await new Promise((resolve) => setTimeout(resolve, 500));
    router.push("/shipments");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <h3 className="mb-8 text-xl font-semibold text-gray-900">Shipment Form</h3>

      <div className="mb-12 grid grid-cols-1 gap-8 rounded-2xl bg-gray-50 p-8 lg:grid-cols-2">
        <ContactFields title="Sender Info" prefix="sender" register={register} errors={errors} />
        <ContactFields
          title="Recipient Info"
          prefix="recipient"
          register={register}
          errors={errors}
        />
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <PackageDetailsFields register={register} errors={errors} />
        <ShippingDetailsFields
          register={register}
          control={control}
          errors={errors}
          shipmentId={shipmentId}
        />
      </div>

      <div className="mt-12 flex justify-end gap-4 border-t border-gray-100 pt-8">
        <Button type="button" variant="subtle" size="lg" onClick={() => reset(DEFAULT_VALUES)}>
          Delete Form
        </Button>
        <Button type="submit" variant="primary" size="lg" isLoading={isSubmitting}>
          Submit Shipment
        </Button>
      </div>
    </form>
  );
}