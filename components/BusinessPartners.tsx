"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function BusinessPartners() {
  const [activePage, setActivePage] = useState(0);

  const partnersList = [
    "/assets/images/partners/akij.png",
    "/assets/images/partners/bsrm.png",
    "/assets/images/partners/bashundhara.png",
    "/assets/images/partners/akij-ispat.png",
    "/assets/images/partners/kamal.png",
    "/assets/images/partners/crown.png",
    "/assets/images/partners/seven-rings.png",
    "/assets/images/partners/ksrm.png",
    "/assets/images/partners/diamond.png",
    "/assets/images/partners/royel.png",
    "/assets/images/partners/butterfly.png",
    "/assets/images/partners/abul-khayer.png",
    "/assets/images/partners/karnafuly.png",
    "/assets/images/partners/mt.png",
    "/assets/images/partners/padma.png",
    "/assets/images/partners/jhm.png",
    "/assets/images/partners/jmi.png",
    "/assets/images/partners/nz.png",
  ];

  return (
    <section className="bg-[#EFEFEF] py-16 font-space-grotesk overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center">
          <h2 className="text-xl md:text-2xl xl:text-[40px] font-medium text-secondary tracking-widest uppercase">
            OUR BUSINESSES PARTNER:
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {partnersList.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-5 flex flex-col items-center justify-center min-h-22.5 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <Image width={168} height={84} alt="" src={partner} />
            </div>
          ))}
        </div>

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
