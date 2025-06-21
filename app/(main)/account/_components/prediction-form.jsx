// components/PredictionForm.jsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { predictionSchema } from "@/app/lib/schema";

export function PredictionForm() {
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(predictionSchema),
    defaultValues: {
      Income: 0,
      Age: 0,
      Dependents: 0,
      Occupation: "Professional",
      City_Tier: "Tier_1",
      Rent: 0,
      Loan_Repayment: 0,
      Insurance: 0,
      Groceries: 0,
      Transport: 0,
      Desired_Savings: 0,
      Disposable_Income: 0,
      Potential_Savings_Groceries: 0,
      Potential_Savings_Transport: 0,
      Potential_Savings_Eating_Out: 0,
      Potential_Savings_Entertainment: 0,
      Potential_Savings_Utilities: 0,
      Potential_Savings_Healthcare: 0,
      Potential_Savings_Education: 0,
      Education: 0,
      Miscellaneous: 0,
      Entertainment: 0,
      Desired_Savings_Percentage: 0,
      Healthcare: 0,
      Utilities: 0,
      Eating_Out: 0,
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setPrediction(null);
    try {
      const res = await fetch("https://my-finance-evje.onrender.com/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      setPrediction(json.prediction);
    } catch (err) {
      console.log(err);
      alert("Unable to fetch prediction. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Expense Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.entries(predictionSchema.shape).map(([field, schema]) => {
            const isEnum = schema._def?.typeName === "ZodEnum";
            const isNumber = schema._def?.typeName === "ZodNumber";
            return (
              <div key={field}>
                <label className="block mb-1 font-medium">{field.replace(/_/g, " ")}</label>
                {isEnum ? (
                  <select {...register(field)} className="w-full border px-2 py-1 rounded">
                    {schema._def.values.map((val) => (
                      <option key={val} value={val}>{val}</option>
                    ))}
                  </select>
                ) : (
                  <Input
                    type={isNumber ? "number" : "text"}
                    step="any"
                    {...register(field, isNumber ? { valueAsNumber: true } : {})}
                  />
                )}
                {errors[field] && (
                  <p className="text-red-500 text-sm mt-1">{errors[field].message}</p>
                )}
              </div>
            );
          })}

          <div className="sm:col-span-2 flex justify-end">
            <Button type="submit" disabled={loading}>
              {loading ? "Predicting…" : "Get Forecast"}
            </Button>
          </div>
        </form>

        {prediction != null && (
          <div className="mt-6 text-center">
            <p className="text-lg">
              Estimated yearly leftover:{" "}
              <span className="font-bold text-green-600">
                ${prediction.toFixed(2)}
              </span>
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
