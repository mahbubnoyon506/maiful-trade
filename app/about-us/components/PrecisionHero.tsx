"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import QuoteModal from "@/components/QuoteModal";

export default function PrecisionHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="relative w-full py-6 sm:py-10 lg:py-20 overflow-hidden bg-slate-900 font-space-grotesk">
      {/* BACKGROUND IMAGE WITH DARK OVERLAY */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="/assets/images/platform.png"
          alt="Precision Weighing Solutions Factory"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark Tint Overlay to ensure text legibility */}
        <div className="absolute inset-0 bg-slate-950/70 backdrop-brightness-75 z-10" />
      </div>

      {/* CONTENT CONTAINER */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
        {/* MAIN HEADING */}
        <h1 className="text-2xl sm:text-4xl md:text-[42px] xl:max-w-2xl mx-auto font-bold font-k2d text-white tracking-tight leading-tight sm:leading-snug">
          Precision Weighing Solutions for Modern Industries
        </h1>

        {/* PARAGRAPH DESCRIPTION */}
        <p className="text-xs sm:text-base md:text-[20px] text-white font-poppins font-normal leading-relaxed max-w-4xl mx-auto">
          Maiful Trade is a trusted provider of industrial weighing systems,
          truck scales, load cells, and weighing automation solutions in
          Bangladesh. We help businesses improve accuracy, efficiency, and
          compliance through reliable weighing technology and professional
          support.
        </p>

        {/* ACTION BUTTONS GROUP */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Button
            variant="solid"
            colorScheme="tertiary"
            className="rounded-sm capitalize"
            onClick={() => setIsModalOpen(true)}
          >
            Tell Us Your Requirement
          </Button>

          {/* OR DIVIDER */}
          <span className="text-white/80 font-medium text-sm lowercase sm:text-base px-1">
            or
          </span>

          <a
            href="https://wa.me/8801711706366"
            target="_blank"
            rel="noreferrer"
            title="WhatsApp Chat"
          >
            <Button
              variant="outline"
              colorScheme="primary"
              className="border-neutral text-white hover:bg-white/10 rounded-sm capitalize"
              onClick={() => console.log("Talk to Expert Clicked")}
            >
              <Image
                width={28}
                height={28}
                alt=""
                src="/assets/images/whatsapp.png"
                className="mr-1"
              />
              Call us : 01711-706366
            </Button>
          </a>
        </div>
      </div>
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
