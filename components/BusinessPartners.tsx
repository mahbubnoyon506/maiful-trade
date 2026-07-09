"use client";

import React, { useState } from "react";

export default function BusinessPartners() {
  // Simulating active pagination tracking matching the dot states in your design
  const [activePage, setActivePage] = useState(0);

  const partnersList = [
    { name: "Akij Group", logo: "🍂" },
    { name: "BSRM", logo: "⛓️" },
    { name: "Bashundhara Group", logo: "🦅" },
    { name: "Akij Ispat", logo: "🏗️" },
    { name: "Kamal", logo: "🔺" },
    { name: "Crown Cement", logo: "🏛️" },
    { name: "Seven Rings Cement", logo: "⭕" },
    { name: "KSRM", logo: "🔥" },
    { name: "Diamond Cement Ltd", logo: "💎" },
    { name: "Royal Cement", logo: "👑" },
    { name: "Butterfly", logo: "🦋" },
    { name: "Abul Khair Group", logo: "🛡️" },
    { name: "Ananda Shipyard", logo: "⚓" },
    { name: "Mir Cement", logo: "⚙️" },
    { name: "Padma LPG", logo: "💧" },
    { name: "JHM", logo: "☀️" },
    { name: "JMI Group", logo: "🌐" },
    { name: "N2 Group", logo: "🧱" },
  ];

  return (
    <section className="bg-[#EFEFEF] py-16 font-space-grotesk overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* SECTION HEADER TITLE */}
        <div className="text-center">
          <h2 className="text-xl sm:text-[40px] font-medium text-secondary tracking-widest uppercase">
            OUR BUSINESSES PARTNER:
          </h2>
        </div>

        {/* RECYCLING GRID BOX MATRIX CONTAINER */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {partnersList.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-5 flex flex-col items-center justify-center min-h-[90px] shadow-sm border border-slate-100/80 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              title={partner.name}
            >
              {/* Graphic Display Badge Wrapper */}
              <div className="text-2xl mb-1 grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all">
                {partner.logo}
              </div>
              <span className="text-[10px] sm:text-xs font-bold tracking-tight text-slate-500 text-center uppercase">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        {/* SLIDER DOT PAGINATION BAR */}
        <div className="flex items-center justify-center gap-2.5 pt-4">
          {[0, 1, 2].map((pageIndex) => (
            <button
              key={pageIndex}
              onClick={() => setActivePage(pageIndex)}
              className={`h-3.5 transition-all duration-300 rounded-full border-0 cursor-pointer ${
                activePage === pageIndex
                  ? "bg-tertiary w-7 shadow-sm"
                  : "bg-slate-300 w-3.5 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide page ${pageIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
