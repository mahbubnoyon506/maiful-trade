"use client";

import React from "react";
import { motion } from "motion/react";
import Button from "./Button";
import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section className="bg-white py-8 sm:py-16 xl:py-24 font-space-grotesk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 xl:space-y-12">
        {/* TOP LAYOUT GRID: Content + Image */}
        <div className="flex flex-col-reverse lg:flex-row gap-3 lg:gap-5 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex-1 space-y-6"
          >
            <span className="text-sm font-medium tracking-widest uppercase text-secondary">
              ABOUT US
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary tracking-tight leading-tight uppercase">
              EMPOWERING YOUR BUSINESS WITH TAILORED WEIGHING SOLUTIONS
            </h2>

            <div className="space-y-4 text-sm md:text-base xl:text-lg text-neutral font-normal leading-relaxed">
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
                className="px-8 py-3.5 text-lg font-medium rounded-sm"
                onClick={() => console.log("Learn More Clicked")}
              >
                LEARN MORE
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Image and Overlapping Experience Card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <Image
              width={800}
              height={800}
              src="/assets/images/handshake.png"
              alt=""
            />
          </motion.div>
        </div>

        {/* BOTTOM LAYOUT GRID: Core Strengths Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-6 pt-4">
          {/* Card 01 - Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            // whileHover={{ y: -6, scale: 1.01 }}
            className="bg-[#090E23] text-white p-2 md:p-3 xl:p-8 rounded-xl flex items-center gap-2 xl:gap-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="text-xl md:text-2xl xl:text-5xl font-medium xl:font-bold tracking-tight text-white/90">
              01
            </div>
            <div className="h-8 border-l border-dotted border-white/30" />
            <h3 className="text-lg md:text-xl xl:text-2xl font-medium xl:font-bold tracking-wider uppercase leading-snug">
              EXPERTISE AND <br /> EXPERIENCE
            </h3>
          </motion.div>

          {/* Card 02 - Quality */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            // whileHover={{ y: -6, scale: 1.01 }}
            className="bg-tertiary text-white p-2 md:p-3 xl:p-8 rounded-xl flex items-center gap-2 xl:gap-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="text-xl md:text-2xl xl:text-5xl font-medium xl:font-bold tracking-tight text-white/90">
              02
            </div>
            <div className="h-8 border-l border-dotted border-white/30" />
            <h3 className="text-lg md:text-xl xl:text-2xl font-medium xl:font-bold tracking-wider uppercase leading-snug">
              COMMITTED TO <br /> QUALITY
            </h3>
          </motion.div>

          {/* Card 03 - Comprehensive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            // whileHover={{ y: -6, scale: 1.01 }}
            className="bg-[#090E23] text-white p-2 md:p-3 xl:p-8 rounded-xl flex items-center gap-2 xl:gap-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="text-xl md:text-2xl xl:text-5xl font-medium xl:font-bold tracking-tight text-white/90">
              03
            </div>
            <div className="h-8 border-l border-dotted border-white/30" />
            <h3 className="text-lg md:text-xl xl:text-2xl font-medium xl:font-bold tracking-wider uppercase leading-snug">
              COMPREHENSIVE <br /> SERVICES
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
