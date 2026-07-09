"use client";

import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function BrandPartnersSection() {
  // Brand logo data from Brands logo.png
  const basicLogos = [
    { name: "ZEMIC", textStyle: "text-blue-800 font-bold" },
    { name: "KELI", textStyle: "text-red-600 font-extrabold font-mono" },
    { name: "YAOHUA", textStyle: "text-red-500 font-bold tracking-tight" },
    { name: "T-Scale", textStyle: "text-blue-900 italic font-black" },
    { name: "YUBO", textStyle: "text-blue-500 font-black" },
  ];

  return (
    <section className="bg-tertiary text-white py-16 lg:py-20 font-space-grotesk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* SECTION HEADER */}
        <div className="text-center space-y-2">
          <span className="text-sm font-medium tracking-widest uppercase text-white/80">
            OUR BRAND PARTNERS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight uppercase">
            PREMIUM TECHNOLOGY PARTNERS
          </h2>
        </div>

        {/* TOP LAYOUT GRID: Primary Shipping & Premium Technology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: Utilcell / Air Shipping */}
          <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col justify-between text-foreground transition-all duration-300 hover:-translate-y-1">
            <div className="space-y-6">
              {/* Simulated Utilcell Logo Asset Header */}
              <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
                <span className="text-2xl font-black text-emerald-700 tracking-tighter">
                  UTILCELL
                </span>{" "}
                <span className="text-[9px] text-slate-400 font-mono self-end pb-1 uppercase tracking-wider hidden sm:inline">
                  LOAD CELLS
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg md:text-2xl font-black text-primary uppercase tracking-tight">
                  AIR SHIPPING
                </h3>
                <p className="text-xs sm:text-base text-neutral font-normal leading-relaxed">
                  Renowned for precision load cells engineered for industrial
                  weighing, truck scales, and demanding applications worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Sensocar / Truck Shipping */}
          <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col justify-between text-foreground transition-all duration-300 hover:-translate-y-1">
            <div className="space-y-6">
              {/* Simulated Sensocar Logo Asset Header */}
              <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
                <span className="text-2xl font-black text-slate-800 tracking-widest">
                  SENSOCAR
                </span>{" "}
              </div>

              <div className="space-y-2">
                <h3 className="text-lg md:text-2xl font-black text-primary uppercase tracking-tight">
                  TRUCK SHIPPING
                </h3>
                <p className="text-xs sm:text-base text-neutral font-normal leading-relaxed">
                  Advanced weighing technology trusted by industries globally
                  for reliability, stability, and measurement accuracy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW GRID: Core Manufacturing Brand Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-4">
          {basicLogos.map((logo, idx) => (
            <div
              key={idx}
              className={cn(
                "bg-white rounded-xl py-5 px-4 shadow-md flex items-center justify-center min-h-[70px] transition-all duration-200 hover:scale-[1.03]",
                // Centers the final odd element smoothly on mobile viewports
                idx === basicLogos.length - 1 ? "col-span-2 sm:col-span-1" : "",
              )}
            >
              <div className="text-center">
                <span
                  className={cn(
                    "text-base sm:text-lg tracking-wider block select-none",
                    logo.textStyle,
                  )}
                >
                  {logo.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
