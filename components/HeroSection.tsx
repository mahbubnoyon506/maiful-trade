"use client";

import React from "react";
import Image from "next/image";
import { Download, Mail, MessageCircle, QrCode } from "lucide-react";
import Button from "./Button";

export default function HeroSection() {
  return (
    <section className=" font-space-grotesk relative bg-primary text-white overflow-hidden py-8 sm:py-16 xl:py-24 min-h-150 ">
      {/* Container wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-4 xl:space-y-6">
          <p className="text-sm md:text-base xl:text-lg font-medium tracking-widest uppercase text-white/80">
            WE ARE BEST WEIGHING SCALE PROVIDER
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-[64px] font-black tracking-tight leading-tight uppercase">
            COMPLETE INDUSTRIAL & <br className="hidden md:inline" />
            PRECISION WEIGHING SOLUTIONS <br />
            <span className="text-tertiary">IN ONE PLACE</span>
          </h1>

          <p className="text-sm md:text-base xl:text-lg text-slate-300 max-w-xl font-light leading-relaxed">
            From truck scales to laboratory balances—we provide accurate,
            durable, and industry-ready weighing systems for every business need
            in Bangladesh.
          </p>

          {/* STATS COUNT GRID ROW */}
          <div className="flex flex-wrap md:divide-x-2 divide-dashed devide-neutral items-center gap-4 md:gap-0 pt-4 text-white">
            <div className="md:pr-6 min-w-30">
              <div className="text-xl md:text-3xl xl:text-5xl font-black tracking-tight">
                30K
              </div>
              <div className="text-xs md:text-sm xl:text-base uppercase tracking-wider text-slate-400 mt-1">
                Satisfied Clients
              </div>
            </div>

            {/* <div className="border-l-2 border-r-2 border-dashed border-neutral px-6 min-w-30"> */}
            <div className=" md:px-6 min-w-30">
              <div className="text-xl md:text-3xl xl:text-5xl font-black tracking-tight">
                15 +
              </div>
              <div className="text-xs md:text-sm xl:text-base uppercase tracking-wider text-slate-400 mt-1">
                Years of Experience
              </div>
            </div>

            <div className="md:px-6 min-w-30">
              <div className="text-xl md:text-3xl xl:text-5xl font-black tracking-tight">
                12 +
              </div>
              <div className="text-xs md:text-sm xl:text-base uppercase tracking-wider text-slate-400 mt-1">
                Expert Technicians
              </div>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap gap-4 pt-6">
            <Button
              variant="solid"
              colorScheme="tertiary"
              className=" rounded-sm "
              onClick={() => console.log("Get Quote Clicked")}
            >
              GET A FREE QUOTE
            </Button>

            <Button
              variant="outline"
              colorScheme="primary"
              className="border-white/30 text-white hover:bg-white/10 rounded-sm "
              onClick={() => console.log("Talk to Expert Clicked")}
            >
              TALK TO EXPERT
            </Button>
          </div>
        </div>

        <div className="relative w-full max-w-75 sm:max-w-105 md:max-w-130 lg:max-w-150 xl:max-w-175 lg:absolute lg:right-0 lg:bottom-0 mx-auto lg:mx-0 mt-8 lg:mt-0">
          <Image
            width={700}
            height={600}
            alt="Truck scale illustration"
            src="/assets/images/truck.png"
            className="w-full h-auto object-contain"
            sizes="(max-width: 1024px) 100vw, 700px"
          />
        </div>
      </div>

      {/* FLOATING VERTICAL ACCENT NAVIGATION BADGE (Hidden on tiny viewport setups) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-tertiary py-6 px-3 rounded-l-2xl flex-col items-center gap-5 shadow-2xl border border-r-0 border-white/10 hidden md:flex">
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
