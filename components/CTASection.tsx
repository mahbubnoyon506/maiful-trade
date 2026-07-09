"use client";

import React from "react";
import { Phone, MessageSquare } from "lucide-react";
import Button from "./Button";
// Reusable button created earlier

export default function CTASection() {
  const handleConsultationClick = () => {
    console.log("Free consultation requested");
  };

  return (
    <section className="bg-white py-12 md:py-16 overflow-hidden font-space-grotesk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
          {/* LEFT SIDE: Text Content & Action Buttons (Spans 7 columns on desktop) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left z-10">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight uppercase text-primary">
              NOT SURE WHICH SCALE YOU NEED?
            </h2>

            <p className="text-xl sm:text-2xl text-black font-sembold font-poppins leading-relaxed">
              We help you choose the right weighing system based on your
              business type, load capacity, and budget.
            </p>

            {/* ACTION INTERFACE ELEMENTS */}
            <div className="">
              {/* Phone / Whatsapp Contact Badge Block */}
              <a href="tel:01711706366">
                <Button
                  variant="solid"
                  colorScheme="primary"
                  className="w-full sm:w-auto px-6 py-4 rounded-lg flex items-center justify-center gap-3 shadow-md normal-case font-semibold font-poppins tracking-normal text-2xl"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Talk to Expert : 01711-706366</span>
                </Button>
              </a>

              {/* Consultation Accent Trigger Button */}
              <Button
                variant="solid"
                colorScheme="tertiary"
                className="w-full sm:w-auto px-6 py-4 rounded-lg flex items-center justify-center gap-3 shadow-md normal-case font-semibold font-poppins tracking-normal text-2xl"
              >
                <MessageSquare className="w-4 h-4" />
                Get Free Consultation
              </Button>
            </div>
          </div>

          {/* RIGHT SIDE: Support Specialist Image (Spans 5 columns on desktop) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-none aspect-[4/3] sm:aspect-[16/11] lg:aspect-square flex items-end">
              {/* Outer structural layout box container for the graphic element layout */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-100 to-transparent rounded-full opacity-40 blur-2xl transform scale-75 -z-10" />

              <div className="w-full h-full flex items-center justify-center text-6xl bg-slate-50 border border-slate-200/40 rounded-2xl shadow-inner relative overflow-hidden">
                <span className="absolute bottom-4 animate-pulse select-none">
                  👩‍💼
                </span>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-transparent to-transparent h-12 z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
