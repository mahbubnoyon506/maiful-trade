"use client";

import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function BrandPartnersSection() {
  // Brand logo data from Brands logo.png
  const logos = [
    "/assets/images/zemic.png",
    "/assets/images/keli.png",
    "/assets/images/yaohua.png",
    "/assets/images/tscale.png",
    "/assets/images/yubo.png",
  ];

  return (
    <section className="bg-tertiary text-white py-8 sm:py-16 xl:py-24 font-space-grotesk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* SECTION HEADER */}
        <div className="text-center space-y-2">
          <span className="text-sm font-medium tracking-widest uppercase text-white">
            OUR BRAND PARTNERS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight uppercase">
            PREMIUM TECHNOLOGY PARTNERS
          </h2>
        </div>

        {/* TOP LAYOUT GRID: Primary Shipping & Premium Technology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: Utilcell / Air Shipping */}
          <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col justify-between text-foreground transition-all duration-300 hover:-translate-y-1">
            <div className="space-y-6">
              <Image
                width={300}
                height={66}
                alt=""
                src="/assets/images/brand-cell.png"
              />
              <div className="space-y-2">
                <h3 className="text-lg md:text-xl xl:text-2xl font-black text-primary uppercase tracking-tight">
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
              <Image
                width={211}
                height={56}
                alt=""
                src="/assets/images/sensocar.png"
              />
              <div className="space-y-2">
                <h3 className="text-lg md:text-xl xl:text-2xl font-black text-primary uppercase tracking-tight">
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
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className={cn(
                "bg-white rounded-xl shadow-md flex items-center justify-center transition-all duration-200 hover:scale-[1.03]",
                idx === logos.length - 1 ? "col-span-2 sm:col-span-1" : "",
              )}
            >
              <Image width={195} height={85} alt="brand-logo" src={logo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
