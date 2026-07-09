"use client";

import React from "react";
import { ShieldAlert } from "lucide-react";

export default function BstiComplianceSection() {
  return (
    <section className="font-k2d">
      <div className="bg-tertiary py-4 sm:py-6 lg:px-8">
        {/* Core Container with Orange Accent Background and White Dashed Border */}
        <div className="bg-tertiary text-white rounded-2xl p-8 md:p-12 shadow-md border-2 border-dashed border-white/60 relative overflow-hidden transition-all duration-300 hover:shadow-lg">
          {/* Content Block Wrapper */}
          <div className="text-center space-y-4 relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold tracking-wide leading-tight">
              We help BSTI Compliance Support
            </h2>

            <p className="text-sm sm:text-xl md:text-[32px] text-white/90 font-bold leading-relaxed">
              Helping businesses maintain accurate, reliable, and
              standards-compliant weighing systems across Bangladesh.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
