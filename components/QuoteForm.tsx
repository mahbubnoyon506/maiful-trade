"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";

export type QuoteFormValues = {
  fullName: string;
  companyName: string;
  product: string;
  service: string;
  projectLocation: string;
  email: string;
  phone: string;
  message: string;
};

type QuoteFormProps = {
  color?: string;
  defaultProduct?: string;
  showCancel?: boolean;
  onCancel?: () => void;
  onSuccess?: () => void;
  resetKey?: boolean | string | number;
};

export default function QuoteForm({
  color,
  defaultProduct = "",
  showCancel = false,
  onCancel,
  onSuccess,
  resetKey,
}: QuoteFormProps) {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormValues>({
    defaultValues: {
      fullName: "",
      companyName: "",
      product: defaultProduct,
      service: "",
      projectLocation: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  useEffect(() => {
    setSubmitStatus("idle");
    setSubmitMessage("");
    reset({
      fullName: "",
      companyName: "",
      product: defaultProduct,
      service: "",
      projectLocation: "",
      email: "",
      phone: "",
      message: "",
    });
  }, [resetKey, defaultProduct, reset]);

  const onSubmit = async (data: QuoteFormValues) => {
    setSubmitStatus("idle");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.error || "Unable to send your message.");
      }

      setSubmitStatus("success");
      setSubmitMessage("Thank you! Your message has been sent successfully.");
      reset({
        fullName: "",
        companyName: "",
        product: defaultProduct,
        service: "",
        projectLocation: "",
        email: "",
        phone: "",
        message: "",
      });

      window.setTimeout(() => {
        onSuccess?.();
        setSubmitStatus("idle");
        setSubmitMessage("");
      }, 1600);
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(
        error instanceof Error ? error.message : "Unable to send your message.",
      );
    }
  };

  const labelClass = color
    ? "mb-1 block text-xs font-medium"
    : "mb-1 block text-xs font-medium text-slate-700";
  const labelStyle = color ? { color } : undefined;

  const fieldClass = color
    ? "w-full rounded-lg border border-white/30 bg-transparent px-2 py-2.5 outline-none ring-0 transition focus:border-white placeholder:text-[color:var(--form-placeholder)] placeholder:opacity-60"
    : "w-full rounded-lg border border-slate-300 px-2 py-2.5 outline-none ring-0 transition focus:border-tertiary placeholder:text-slate-400";
  const fieldStyle = color
    ? ({
        color,
        ["--form-placeholder" as string]: color,
      } as React.CSSProperties)
    : undefined;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} style={labelStyle}>
            Full Name
          </label>
          <input
            {...register("fullName", {
              required: "Full name is required",
            })}
            className={fieldClass}
            style={fieldStyle}
            placeholder="John Doe"
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.fullName.message}
            </p>
          )}
        </div>
        <div>
          <label className={labelClass} style={labelStyle}>
            Company Name
          </label>
          <input
            {...register("companyName", {
              required: "Company name is required",
            })}
            className={fieldClass}
            style={fieldStyle}
            placeholder="ABC Industries"
          />
          {errors.companyName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.companyName.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} style={labelStyle}>
            Email
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email",
              },
            })}
            className={fieldClass}
            style={fieldStyle}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className={labelClass} style={labelStyle}>
            Phone
          </label>
          <input
            {...register("phone", {
              required: "Phone number is required",
            })}
            className={fieldClass}
            style={fieldStyle}
            placeholder="01711-706366"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <label className={labelClass} style={labelStyle}>
            Select Product
          </label>
          <select
            {...register("product", {
              required: "Please select a product",
            })}
            className={fieldClass}
            style={fieldStyle}
          >
            <option value="" disabled>
              Choose product
            </option>
            {defaultProduct &&
            ![
              "Truck Scale",
              "Platform Scale",
              "Floor Scale",
              "Bench Scale",
              "Load Cell",
              "Indicator",
            ].includes(defaultProduct) ? (
              <option value={defaultProduct}>{defaultProduct}</option>
            ) : null}
            <option value="Truck Scale">Truck Scale</option>
            <option value="Platform Scale">Platform Scale</option>
            <option value="Floor Scale">Floor Scale</option>
            <option value="Bench Scale">Bench Scale</option>
            <option value="Load Cell">Load Cell</option>
            <option value="Indicator">Indicator</option>
          </select>
          {errors.product && (
            <p className="mt-1 text-sm text-red-500">
              {errors.product.message}
            </p>
          )}
        </div>

        <div>
          <label className={labelClass} style={labelStyle}>
            Select Service
          </label>
          <select
            {...register("service", {
              required: "Please select a service",
            })}
            className={fieldClass}
            style={fieldStyle}
          >
            <option value="" disabled>
              Choose service
            </option>
            <option value="Installation">Installation</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Calibration">Calibration</option>
            <option value="Repair">Repair</option>
            <option value="Consultation">Consultation</option>
          </select>
          {errors.service && (
            <p className="mt-1 text-sm text-red-500">
              {errors.service.message}
            </p>
          )}
        </div>

        <div>
          <label className={labelClass} style={labelStyle}>
            Select Project Location
          </label>
          <select
            {...register("projectLocation", {
              required: "Please select a project location",
            })}
            className={fieldClass}
            style={fieldStyle}
          >
            <option value="" disabled>
              Choose location
            </option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chattogram">Chattogram</option>
            <option value="Khulna">Khulna</option>
            <option value="Rajshahi">Rajshahi</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Sylhet">Sylhet</option>
            <option value="Barishal">Barishal</option>
            <option value="Mymensingh">Mymensingh</option>
          </select>
          {errors.projectLocation && (
            <p className="mt-1 text-sm text-red-500">
              {errors.projectLocation.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className={labelClass} style={labelStyle}>
          Message
        </label>
        <textarea
          rows={4}
          {...register("message", {
            required: "Message is required",
          })}
          className={fieldClass}
          style={fieldStyle}
          placeholder="Tell us about your requirements..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {submitMessage ? (
        <div
          className={`rounded-lg px-3 py-2 text-sm ${
            submitStatus === "success"
              ? "bg-green-50 text-green-700"
              : "bg-red-50 text-red-700"
          }`}
        >
          {submitMessage}
        </div>
      ) : null}

      <div className="flex flex-wrap items-center justify-end gap-3 pt-0">
        {showCancel ? (
          <Button
            type="button"
            variant="outline"
            colorScheme="primary"
            className="border-neutral text-tertiary hover:bg-white/10 hover:text-tertiary rounded-sm"
            onClick={onCancel}
          >
            Cancel
          </Button>
        ) : null}
        <Button
          type="submit"
          variant="solid"
          colorScheme="tertiary"
          className="rounded-sm"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Request"}
        </Button>
      </div>
    </form>
  );
}
