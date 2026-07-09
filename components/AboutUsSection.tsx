"use client";

import React from "react";
import Button from "./Button";

export default function AboutUsSection() {
  return (
    <section className="bg-white py-16 lg:py-24 font-space-grotesk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* TOP LAYOUT GRID: Content + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-sm font-medium tracking-widest uppercase text-secondary">
              ABOUT US
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary tracking-tight leading-tight uppercase">
              EMPOWERING YOUR BUSINESS WITH TAILORED WEIGHING SOLUTIONS
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-neutral font-normal leading-relaxed">
              <p>
                Maiful Trade is a Bangladesh-based industrial weighing solutions
                provider specializing in the supply, installation, calibration,
                and maintenance of weighing systems for commercial and
                industrial applications.
              </p>
              <p>
                We work with manufacturers, logistics operators, construction
                companies, agricultural businesses, and industrial facilities to
                deliver dependable weighing technology backed by professional
                technical support.
              </p>
            </div>

            <div className="pt-2">
              <Button
                variant="solid"
                colorScheme="tertiary"
                className="px-8 py-3.5 text-lg rounded-sm"
                onClick={() => console.log("Learn More Clicked")}
              >
                LEARN MORE
              </Button>
            </div>
          </div>

          {/* Right Column: Image and Overlapping Experience Card */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-2xl overflow-visible shadow-xl bg-slate-100 border border-slate-200/60">
              {/* Dynamic Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent flex items-center justify-center rounded-2xl">
                <span className="text-4xl">🤝</span>
              </div>

              {/* Overlapping Floating Badge Block */}
              <div className="absolute -bottom-6 left-6 bg-white rounded-xl shadow-2xl border border-slate-100 w-[140px] sm:w-[160px] overflow-hidden transition-transform hover:scale-105 duration-300">
                <div className="p-4 pt-6 text-center relative">
                  {/* Floating Orange Icon circle anchor asset */}
                  <div className="absolute -top-4 left-4 bg-tertiary text-white p-2 rounded-full shadow-md">
                    <svg
                      className="w-4 h-4 fill-none stroke-current"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253"
                      />
                    </svg>
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-primary tracking-tight">
                    12+
                  </div>
                </div>
                {/* Accent footer label */}
                <div className="bg-tertiary text-center py-2 px-2">
                  <p className="text-[10px] font-extrabold tracking-wider text-white uppercase leading-tight">
                    AWARDS WINNING
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM LAYOUT GRID: Core Strengths Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {/* Card 01 - Expertise */}
          <div className="bg-[#090E23] text-white p-6 sm:p-8 rounded-xl flex items-center gap-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="text-3xl sm:text-5xl font-bold tracking-tight text-white/90">
              01
            </div>
            <div className="h-8 border-l border-dotted border-white/30" />
            <h3 className="text-xl sm:text-2xl font-bold tracking-wider uppercase leading-snug">
              EXPERTISE AND <br /> EXPERIENCE
            </h3>
          </div>

          {/* Card 02 - Quality */}
          <div className="bg-tertiary text-white p-6 sm:p-8 rounded-xl flex items-center gap-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="text-3xl sm:text-5xl font-bold tracking-tight text-white/90">
              02
            </div>
            <div className="h-8 border-l border-dotted border-white/30" />
            <h3 className="text-xl sm:text-2xl font-bold tracking-wider uppercase leading-snug">
              COMMITTED TO <br /> QUALITY
            </h3>
          </div>

          {/* Card 03 - Comprehensive */}
          <div className="bg-[#090E23] text-white p-6 sm:p-8 rounded-xl flex items-center gap-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="text-3xl sm:text-5xl font-bold tracking-tight text-white/90">
              03
            </div>
            <div className="h-8 border-l border-dotted border-white/30" />
            <h3 className="text-xl sm:text-2xl font-bold tracking-wider uppercase leading-snug">
              COMPREHENSIVE <br /> SERVICES
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
