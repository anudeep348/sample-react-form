import { z } from "zod";

export const formValidator = z.object({
  firstname: z
    .string()
    .min(1, { message: "First name must be at least 1 characters long" })
    .max(20, { message: "First name must be at most 20 characters long" }),
  lastname: z
    .string()
    .min(1, { message: "Last name must be at least 1 characters long" })
    .max(20, { message: "Last name must be at most 20 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  querytype: z.enum(["general", "support"], {
    message: "Should select either general or support",
  }),
  message: z
    .string()
    .min(1, { message: "Message must be at least 1 characters long" })
    .max(1000, { message: "Message must be at most 1000 characters long" }),
  terms: z.boolean({ message: "You should accept terms & conditions" }),
});

export type FormValues = z.infer<typeof formValidator>;
