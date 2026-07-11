"use client";

import React, { useState } from "react";
import Button from "./Button";
import Image from "next/image";
import QuoteModal from "./QuoteModal";

export default function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="bg-white pt-8 sm:pt-16 md:pt-0 font-space-grotesk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid col-span-1 md:grid-cols-12 items-center gap-6">
          <div className="md:col-span-7 space-y-6 lg:text-left">
            <h2 className="text-xl sm:text-3xl xl:text-5xl font-bold tracking-tight uppercase text-primary">
              NOT SURE WHICH SCALE YOU NEED?
            </h2>

            <p className="text-xl xl:text-2xl text-black font-semibold font-poppins leading-relaxed">
              We help you choose the right weighing system based on your
              business type, load capacity, and budget.
            </p>

            {/* ACTION INTERFACE ELEMENTS */}
            <div className="mt-3 md:mt-16">
              {/* Phone / Whatsapp Contact Badge Block */}
              <a href="tel:01711706366">
                <Button
                  variant="solid"
                  colorScheme="primary"
                  className="min-w-88.25 rounded-lg flex items-center justify-center gap-3 font-poppins tracking-normal"
                >
                  <Image
                    width={24}
                    height={24}
                    alt=""
                    src="/assets/images/whatsapp-icon.png"
                  />
                  <span>Talk to Expert : 01711-706366</span>
                </Button>
              </a>

              {/* Consultation Accent Trigger Button */}
              <Button
                variant="solid"
                colorScheme="tertiary"
                className="mt-4 min-w-88.25 rounded-lg flex items-center justify-center gap-3 normal-case font-poppins tracking-wider"
                onClick={() => setIsModalOpen(true)}
              >
                <Image
                  width={24}
                  height={24}
                  alt=""
                  src="/assets/images/support.png"
                />
                Get Free Consultation
              </Button>
            </div>
          </div>

          <div className="md:col-span-5">
            <Image
              width={517}
              height={789}
              alt="Truck scale illustration"
              src="/assets/images/customer-care.png"
              className=""
            />
          </div>
        </div>
      </div>
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
