import { z } from "zod";

export const freightTypes = ["road", "rail", "ocean", "air"] as const;

const contactSchema = z.object({
  company: z.string().min(1, "Company is required"),
  email: z.string().min(1, "Email is required").email("Enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  address: z.string().min(1, "Address is required"),
});

export const createShipmentSchema = z.object({
  sender: contactSchema,
  recipient: contactSchema,
  package: z.object({
    description: z.string().min(1, "Item description is required"),
    quantity: z.coerce
      .number()
      .int("Must be a whole number")
      .min(1, "Quantity must be at least 1"),
    value: z.coerce.number().min(0, "Value must be a positive number"),
    weight: z.coerce.number().positive("Weight must be greater than 0"),
    weightUnit: z.enum(["kg", "lb"]),
    length: z.coerce.number().positive("Required"),
    width: z.coerce.number().positive("Required"),
    height: z.coerce.number().positive("Required"),
  }),
  shipping: z.object({
    freightType: z.enum(freightTypes),
    carrier: z.string().min(1, "Carrier is required"),
    method: z.string().min(1, "Shipping method is required"),
    date: z.string().min(1, "Shipment date is required"),
    notes: z.string().optional(),
  }),
  services: z.object({
    insurance: z.boolean().optional(),
    signature: z.boolean().optional(),
    temperatureControl: z.boolean().optional(),
    fragile: z.boolean().optional(),
    notifyRecipient: z.boolean().optional(),
  }),
});

export type CreateShipmentFormValues = z.infer<typeof createShipmentSchema>;
