"use client";

import React from "react";
import { Box } from "lucide-react";
import Button from "./Button";
// Reusable button from previous steps

export default function ServicesSection() {
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
    <section className="bg-white py-16 lg:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 flex flex-col items-center">
        {/* HEADER BLOCK */}
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="text-sm font-medium tracking-widest uppercase text-secondary">
            OUR SERVICES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight uppercase text-primary">
            COMPLETE AFTER-SALES SUPPORT AND PROFESSIONAL WEIGHING SERVICES
          </h2>
        </div>

        {/* SERVICES ITEMS MATRIX GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 w-full">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between min-h-[280px] ${
                service.isHighlighted
                  ? "bg-primary text-white shadow-xl translate-y-[-4px]"
                  : "bg-white text-foreground hover:shadow-md"
              }`}
            >
              <div className="space-y-6">
                {/* Custom Box Icon Container */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm ${
                    service.isHighlighted
                      ? "bg-secondary text-white"
                      : "bg-secondary text-white"
                  }`}
                >
                  <Box className="w-5 h-5 stroke-[2]" />
                </div>

                {/* Typography Block */}
                <div className="space-y-3">
                  <h3
                    className={`text-lg sm:text-2xl font-bold tracking-tight uppercase ${
                      service.isHighlighted ? "text-white" : "text-primary"
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
            </div>
          ))}
        </div>

        {/* BOTTOM ACTION CTA */}
        <div className="pt-4">
          <Button
            variant="solid"
            colorScheme="tertiary"
            className="px-8 py-4 rounded-md text-lg font-medium shadow-lg"
            onClick={() => console.log("Get a Free Quote clicked")}
          >
            GET A FREE QUOTE
          </Button>
        </div>
      </div>
    </section>
  );
}
