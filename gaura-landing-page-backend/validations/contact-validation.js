import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name is too long"),

  email: z.string().email("Invalid email address"),

  phoneNumber: z
    .string()
    .regex(/^[0-9+\s-]+$/, "Invalid phone number format")
    .refine((val) => val.replace(/\D/g, "").length >= 10, {
      message: "Phone number must have at least 10 digits",
    }),

  location: z.enum(["haldwani", "dehradun", "bajpur", "rudrapur"], {
    errorMap: () => ({ message: "Please select a valid location" }),
  }),

  message: z
    .string()
    .min(0, "Message must be at least 10 characters")
    .max(1000, "Message is too long"),
});
