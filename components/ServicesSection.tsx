"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Box } from "lucide-react";
import Button from "./Button";
import QuoteModal from "./QuoteModal";

export default function ServicesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const services = [
    {
      title: "INSTALLATION & SETUP",
      description:
        "Professional installation to ensure your weighing system is correctly set up for accurate and stable performance from day one.",
      isHighlighted: true, // Matches the dark blue highlighted card look in the image
    },
    {
      title: "MAINTENANCE & REPAIR",
      description:
        "Quick and reliable repair services to reduce downtime and keep your operations running without interruption.",
      isHighlighted: false,
    },
    {
      title: "SYSTEM INSPECTION & TESTING",
      description:
        "Detailed inspection of equipment to detect issues early and ensure long-term reliability.",
      isHighlighted: false,
    },
    {
      title: "UPGRADES & REPLACEMENT SUPPORT",
      description:
        "Assistance with upgrading old systems or replacing components for improved efficiency and performance.",
      isHighlighted: false,
    },
    {
      title: "FAST RESPONSE ASSISTANCE",
      description:
        "Quick support for technical issues and product-related inquiries.",
      isHighlighted: false,
    },
    {
      title: "EXPERT TECHNICAL TEAM",
      description:
        "Experienced professionals ready to guide you with troubleshooting and solutions.",
      isHighlighted: false,
    },
  ];

  return (
    <section className="bg-white py-8 sm:py-16 xl:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 xl:space-y-6 flex flex-col items-center">
        {/* HEADER BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center space-y-2"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-secondary">
            OUR SERVICES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary tracking-tight leading-tight uppercase">
            COMPLETE AFTER-SALES SUPPORT AND PROFESSIONAL WEIGHING SERVICES
          </h2>
        </motion.div>

        {/* SERVICES ITEMS MATRIX GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 w-full">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between min-h-70 group ${
                service.isHighlighted
                  ? "bg-primary text-white shadow-xl -translate-y-1"
                  : "bg-white text-foreground hover:shadow-md"
              }`}
            >
              <div className="space-y-6">
                {/* Custom Box Icon Container */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm bg-secondary text-white`}
                >
                  <Box className="w-5 h-5 stroke-2" />
                </div>

                {/* Typography Block */}
                <div className="space-y-3">
                  <h3
                    className={`text-lg md:text-xl xl:text-2xl font-bold tracking-tight uppercase ${
                      service.isHighlighted ? "text-white" : "text-primary "
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-sm sm:text-base font-normal leading-relaxed ${
                      service.isHighlighted ? "text-white" : "text-neutral"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM ACTION CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.15 }}
        >
          <Button
            variant="solid"
            colorScheme="tertiary"
            className="px-8 py-4 rounded-md text-lg font-medium shadow-lg"
            onClick={() => setIsModalOpen(true)}
          >
            GET A FREE QUOTE
          </Button>
        </motion.div>
      </div>
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
