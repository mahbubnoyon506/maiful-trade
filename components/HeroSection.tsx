"use client";

import React from "react";
import Image from "next/image";
import { Download, Mail, MessageCircle, QrCode } from "lucide-react";
import Button from "./Button";

export default function HeroSection() {
  return (
    <section className=" font-space-grotesk relative bg-primary text-white overflow-hidden py-16 lg:py-24 min-h-[600px] flex items-center">
      {/* Container wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT SIDE CONTENT - Spans 7 columns on large desktops */}
          <div className="lg:col-span-7 space-y-6 z-10">
            <p className="text-base sm:text-lg font-medium tracking-widest uppercase text-white/80">
              WE ARE BEST WEIGHING SCALE PROVIDER
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-black tracking-tight leading-tight uppercase">
              COMPLETE INDUSTRIAL & <br className="hidden md:inline" />
              PRECISION WEIGHING SOLUTIONS <br />
              <span className="text-tertiary">IN ONE PLACE</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-light leading-relaxed">
              From truck scales to laboratory balances—we provide accurate,
              durable, and industry-ready weighing systems for every business
              need in Bangladesh.
            </p>

            {/* STATS COUNT GRID ROW */}
            <div className="flex flex-wrap items-center gap-y-4 pt-4 text-white">
              <div className="pr-6 min-w-[120px]">
                <div className="text-3xl sm:text-5xl font-black tracking-tight">
                  30K
                </div>
                <div className="uppercase tracking-wider text-slate-400 mt-1">
                  Satisfied Clients
                </div>
              </div>

              <div className="border-l border-dashed border-white/20 px-6 min-w-[120px]">
                <div className="text-2xl sm:text-5xl font-black tracking-tight">
                  15 +
                </div>
                <div className="uppercase tracking-wider text-slate-400 mt-1">
                  Years of Experience
                </div>
              </div>

              <div className="border-l border-dashed border-white/20 px-6 min-w-[120px]">
                <div className="text-2xl sm:text-5xl font-black tracking-tight">
                  12 +
                </div>
                <div className="uppercase tracking-wider text-slate-400 mt-1">
                  Expert Technicians
                </div>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap gap-4 pt-6">
              <Button
                variant="solid"
                colorScheme="tertiary"
                className="px-6 py-3.5 rounded-sm text-lg"
                onClick={() => console.log("Get Quote Clicked")}
              >
                GET A FREE QUOTE
              </Button>

              <Button
                variant="outline"
                colorScheme="primary"
                className="border-white/30 text-white hover:bg-white/10 px-6 py-3.5 rounded-sm text-lg"
                onClick={() => console.log("Talk to Expert Clicked")}
              >
                TALK TO EXPERT
              </Button>
            </div>
          </div>

          {/* RIGHT SIDE ASSET PANEL - Spans 5 columns */}
          <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
            {/* Truck & Scale Imagery Wrapper */}
            <div className="relative w-full max-w-[500px] lg:max-w-none aspect-[4/3] sm:aspect-[16/10] lg:aspect-square">
              {/* Fallback structure representing the graphic element placement dynamically */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none transform scale-110 lg:translate-x-10">
                <span className="text-[180px] opacity-5 select-none font-black tracking-tighter absolute -top-10">
                  SCALE
                </span>
                {/* Simulated Truck Render Container mapping dimensions */}
                <div className="relative w-full h-full min-h-[300px] flex items-end">
                  <div className="w-full h-6 bg-slate-400/30 rounded border border-white/10 relative shadow-2xl">
                    <div className="absolute -top-32 right-4 text-[120px] leading-none filter drop-shadow-2xl">
                      🚛
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FLOATING VERTICAL ACCENT NAVIGATION BADGE (Hidden on tiny viewport setups) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-tertiary py-6 px-3 rounded-l-2xl flex flex-col items-center gap-5 shadow-2xl border border-r-0 border-white/10 hidden md:flex">
        <a
          href="#"
          className="text-white hover:scale-110 transition-transform"
          title="Download Profile"
        >
          <Download className="w-5 h-5 stroke-[2.5]" />
        </a>
        <a
          href="mailto:sales@maifultradelink.com"
          className="text-white hover:scale-110 transition-transform"
          title="Email Us"
        >
          <Mail className="w-5 h-5 stroke-[2.5]" />
        </a>
        <a
          href="https://wa.me/8801711706366"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:scale-110 transition-transform"
          title="WhatsApp Chat"
        >
          <MessageCircle className="w-5 h-5 stroke-[2.5]" />
        </a>
        <a
          href="#"
          className="text-white hover:scale-110 transition-transform"
          title="Scan QR Code"
        >
          <QrCode className="w-5 h-5 stroke-[2.5]" />
        </a>
      </div>
    </section>
  );
}
