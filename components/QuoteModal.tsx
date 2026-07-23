"use client";

import React from "react";
import { X } from "lucide-react";
import QuoteForm from "./QuoteForm";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export default function QuoteModal({
  isOpen,
  onClose,
  defaultProduct,
}: QuoteModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-60 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-white p-3 text-slate-900 shadow-2xl sm:p-5">
        <div className="mb-3 flex items-start justify-between gap-4">
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

        <QuoteForm
          defaultProduct={defaultProduct}
          showCancel
          onCancel={onClose}
          onSuccess={onClose}
          resetKey={isOpen}
        />
      </div>
    </div>
  );
}
