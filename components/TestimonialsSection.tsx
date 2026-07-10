"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const leftDarkCards = [
    {
      stars: 5,
      quote:
        "Maiful Trade provided a complete truck scale solution for our logistics operation. The installation was smooth, the system is highly accurate, and their technical support team has been responsive whenever we needed assistance.",
      author: "ENGR. HASAN AHMED",
      title: "FACTORY MANAGER, MANUFACTURING INDUSTRY",
    },
    {
      stars: 5,
      quote:
        "We were looking for a reliable weighing partner for our manufacturing facility, and Maiful Trade exceeded our expectations. Their team demonstrated professionalism from consultation to final installation.",
      author: "MD. RAHMAN",
      title: "OPERATIONS MANAGER, LOGISTICS COMPANY",
    },
  ];

  const rightLightCards = [
    {
      stars: 5,
      quote:
        "The quality of the truck scale and load cells supplied by Maiful Trade has been excellent. The weighing accuracy and system performance have helped us improve operational efficiency significantly.",
      author: "ABDUL KARIM, DIRECTOR,",
      title: "CONSTRUCTION MATERIALS BUSINESS",
    },
    {
      stars: 5,
      quote:
        "Their technical knowledge and after-sales service are outstanding. We appreciate their commitment to ensuring our weighing system operates efficiently without downtime.",
      author: "M. HOSSAIN, PROCUREMENT MANAGER,",
      title: "INDUSTRIAL ENTERPRISE",
    },
    {
      stars: 5,
      quote:
        "The quality of the truck scale and load cells supplied by Maiful Trade has been excellent. The weighing accuracy and system performance have helped us improve operational efficiency significantly.",
      author: "ABDUL KARIM, DIRECTOR,",
      title: "CONSTRUCTION MATERIALS BUSINESS",
    },
  ];

  return (
    <section className="bg-[#EDF0F3] py-8 sm:py-16 xl:py-24 font-space-grotesk overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION ROOT GRID SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 items-start">
          {/* LEFT CONTENT CONTAINER */}
          <div className=" space-y-8 relative">
            <div className="space-y-3">
              <span className="text-sm font-medium tracking-widest uppercase text-secondary">
                TESTIMONIALS
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary tracking-tight leading-tight uppercase">
                OUR CLIENTS SPEAK <br /> FOR US
              </h2>
            </div>

            {/* Render Stack of Dark Blue Primary Accent Cards */}
            <div className="space-y-6 relative pt-4">
              {/* Overlapping Floating Quote Graphic Indicator Icon */}
              <div className="absolute -top-4 -right-4 lg:-right-7 bg-secondary text-white p-6 rounded-md shadow-xl z-20 hidden sm:block animate-bounce-slow">
                <Quote className="w-8 h-8 fill-current rotate-180" />
              </div>

              {leftDarkCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-primary text-white p-6 sm:p-8 rounded-xl shadow-xl space-y-4 border border-white/5 group transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Star row wrapper mapping index items */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(card.stars)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-current stroke-none"
                      />
                    ))}
                  </div>
                  <p className="text-xs sm:text-base text-white font-light leading-relaxed">
                    &quot;{card.quote}&quot;
                  </p>
                  <div className="pt-2 ">
                    <h4 className="text-sm sm:text-[15px] font-medium font-white tracking-wide uppercase">
                      {card.author}
                    </h4>
                    <p className="text-sm sm:text-[15px] font-medium font-white tracking-wide uppercase">
                      {card.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT CONTAINER */}
          <div className="space-y-6 lg:pl-6">
            {rightLightCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white text-[#171717] p-6 sm:p-8 rounded-xl shadow-sm border border-slate-200/50 space-y-4 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              >
                {/* Star Row alignment setup details */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(card.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-current stroke-none"
                    />
                  ))}
                </div>
                <p className="text-xs sm:text-base text-primary font-light leading-relaxed">
                  &quot;{card.quote}&quot;
                </p>
                <div className="pt-2">
                  <h4 className="text-sm sm:text-[15px] font-medium text-primary tracking-wide uppercase">
                    {card.author}
                  </h4>
                  <span className="text-sm sm:text-[15px] font-medium text-primary tracking-wide uppercase">
                    {card.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
