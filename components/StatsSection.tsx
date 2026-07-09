"use client";

import React from "react";
import { Truck, Clock, ShieldCheck } from "lucide-react";

export default function StatsSection() {
  const statsFeatures = [
    {
      icon: (
        <Truck className="w-10 h-10 text-primary shrink-0" strokeWidth={1.5} />
      ),
      title: "Fast Delivery",
      description:
        "Quick turnaround times with efficient logistics across Bangladesh",
    },
    {
      icon: (
        <Clock className="w-10 h-10 text-primary shrink-0" strokeWidth={1.5} />
      ),
      title: "Support 24/7",
      description: "Round-the-clock emergency service and technical support",
    },
    {
      icon: (
        <ShieldCheck
          className="w-10 h-10 text-primary shrink-0"
          strokeWidth={1.5}
        />
      ),
      title: "100% Authentic",
      description:
        "ISO certified manufacturing processes and rigorous quality control",
    },
  ];

  return (
    <section className="bg-[#F2F5FF] py-10 md:py-14 border-b border-white/10 font-font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
          {statsFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-2 transition-all hover:translate-y-[-2px] duration-200"
            >
              {/* Icon Slot */}
              <div className="pt-1">{feature.icon}</div>

              {/* Content Block */}
              <div className="space-y-1">
                <h3 className="text-lg md:text-2xl font-semibold text-foreground tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-base text-neutral leading-relaxed font-normal max-w-[280px] md:max-w-none">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
