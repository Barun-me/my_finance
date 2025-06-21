import { z } from "zod";

export const accountSchema = z.object({
  name: z.string().min(1, "Name is required"),
  type: z.enum(["CURRENT", "SAVINGS"]),
  balance: z.string().min(1, "Initial balance is required"),
  isDefault: z.boolean().default(false),
});

export const transactionSchema = z
  .object({
    type: z.enum(["INCOME", "EXPENSE"]),
    amount: z.string().min(1, "Amount is required"),
    description: z.string().optional(),
    date: z.date({ required_error: "Date is required" }),
    accountId: z.string().min(1, "Account is required"),
    category: z.string().min(1, "Category is required"),
    isRecurring: z.boolean().default(false),
    recurringInterval: z
      .enum(["DAILY", "WEEKLY", "MONTHLY", "YEARLY"])
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (data.isRecurring && !data.recurringInterval) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Recurring interval is required for recurring transactions",
        path: ["recurringInterval"],
      });
    }
  });

export const predictionSchema = z.object({
  Income: z.number().min(0),
  Age: z.number().min(0),
  Dependents: z.number().min(0),
  Occupation: z.string().nonempty(),
  City_Tier: z.enum(["Tier_1", "Tier_2", "Tier_3"]),
  Rent: z.number().min(0),
  Loan_Repayment: z.number().min(0),
  Insurance: z.number().min(0),
  Groceries: z.number().min(0),
  Transport: z.number().min(0),
  Desired_Savings: z.number().min(0),
  Disposable_Income: z.number().min(0),
  Potential_Savings_Groceries: z.number().min(0),
  Potential_Savings_Transport: z.number().min(0),
  Potential_Savings_Eating_Out: z.number().min(0),
  Potential_Savings_Entertainment: z.number().min(0),
  Potential_Savings_Utilities: z.number().min(0),
  Potential_Savings_Healthcare: z.number().min(0),
  Potential_Savings_Education: z.number().min(0),
  Education: z.number().min(0),
  Miscellaneous: z.number().min(0),
  Entertainment: z.number().min(0),
  Desired_Savings_Percentage: z.number().min(0).max(100),
  Healthcare: z.number().min(0),
  Utilities: z.number().min(0),
  Eating_Out: z.number().min(0),
});