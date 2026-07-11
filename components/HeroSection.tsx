"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import QuoteModal from "./QuoteModal";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
              className="rounded-sm"
              onClick={() => setIsModalOpen(true)}
            >
              GET A FREE QUOTE
            </Button>

            <a
              href="https://wa.me/8801711706366"
              target="_blank"
              rel="noreferrer"
              title="WhatsApp Chat"
            >
              <Button
                variant="outline"
                colorScheme="primary"
                className="border-neutral text-white hover:bg-white/10 rounded-sm "
                onClick={() => console.log("Talk to Expert Clicked")}
              >
                TALK TO EXPERT
              </Button>
            </a>
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

      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
