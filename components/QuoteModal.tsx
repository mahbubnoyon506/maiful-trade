"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import { X } from "lucide-react";

type QuoteFormValues = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
};

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormValues>();

  useEffect(() => {
    if (!isOpen) {
      setSubmitStatus("idle");
      setSubmitMessage("");
      reset();
    }
  }, [isOpen, reset]);

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
      reset();

      window.setTimeout(() => {
        onClose();
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

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-white p-6 text-slate-900 shadow-2xl sm:p-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold text-primary">
              Request a Free Quote
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Share your details and we will contact you shortly.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
            aria-label="Close form"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Full Name
            </label>
            <input
              {...register("fullName", {
                required: "Full name is required",
              })}
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none ring-0 transition focus:border-tertiary"
              placeholder="John Doe"
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-500">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
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
                className="w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none transition focus:border-tertiary"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Phone
              </label>
              <input
                {...register("phone", {
                  required: "Phone number is required",
                })}
                className="w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none transition focus:border-tertiary"
                placeholder="01711-706366"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea
              rows={4}
              {...register("message", {
                required: "Message is required",
              })}
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none transition focus:border-tertiary"
              placeholder="Tell us about your requirements..."
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">
                {errors.message.message}
              </p>
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

          <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              colorScheme="primary"
              className="border-neutral text-tertiary hover:bg-white/10 hover:text-tertiary rounded-sm"
              onClick={onClose}
            >
              Cancel
            </Button>
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
      </div>
    </div>
  );
}
