"use client";

import React from "react";
import Image from "next/image";

interface Technician {
  id: string;
  name: string;
  role: string;
  imageSrc?: string;
  isPlaceholder?: boolean;
}

export default function ExpertTechnicians() {
  const technicians: Technician[] = [
    // Row 1
    {
      id: "1",
      name: "MD. ZIAUR RAHMAN",
      role: "SENIOR TECHNICIAN",
      imageSrc: "/assets/images/staff/staff1.png",
    },
    {
      id: "2",
      name: "MD. NAYEEM SHEIKH",
      role: "SENIOR TECHNICIAN",
      imageSrc: "/assets/images/staff/staff2.png",
    },
    {
      id: "3",
      name: "MD HASANUZZAMAN SOHAG",
      role: "TECHNICIAN",
      imageSrc: "/assets/images/staff/staff3.png",
    },
    {
      id: "4",
      name: "MD. MAMUN HOSSAIN",
      role: "TECHNICIAN",
      imageSrc: "/assets/images/staff/staff4.png",
    },

    // Row 2
    {
      id: "5",
      name: "MD. SIYAM HOSSAIN",
      role: "WELDER & FITTER",
      imageSrc: "/assets/images/staff/staff5.png",
    },
    {
      id: "6",
      name: "MD. BADOL MIA",
      role: "WELDER & FITTER",
      imageSrc: "/assets/images/staff/staff6.png",
    },
    {
      id: "7",
      name: "MD. ARIF HOSSAIN",
      role: "WELDER & FITTER",
      imageSrc: "/assets/images/staff/staff7.png",
    },
    {
      id: "8",
      name: "MD. BABUL MIA",
      role: "ASSIST. FITTER",
      imageSrc: "/assets/images/staff/staff8.png",
    },

    // Row 3
    {
      id: "9",
      name: "MD. SHAWPON MIA",
      role: "ASSIST. FITTER",
      imageSrc: "/assets/images/staff/staff5.png",
    },
    {
      id: "10",
      name: "MD. BADOL MIA",
      role: "SENIOR TECHNICIAN",
      imageSrc: "/assets/images/staff/staff-placeholder.png",
    },
    {
      id: "11",
      name: "MD. ARIF HOSSAIN",
      role: "SENIOR TECHNICIAN",
      imageSrc: "/assets/images/staff/staff-placeholder.png",
    },
    {
      id: "12",
      name: "MD. BABUL MIA",
      role: "SENIOR TECHNICIAN",
      imageSrc: "/assets/images/staff/staff-placeholder.png",
    },
  ];

  return (
    <section className="bg-[#EFEFEF] py-8 sm:py-16 xl:py-24 font-space-grotesk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* SECTION HEADER */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl xl:text-[40px] font-medium tracking-wider text-secondary uppercase">
            OUR EXPERT TECHNICIANS
          </h2>
        </div>

        {/* TECHNICIANS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
          {technicians.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center text-center gap-3 group"
            >
              {/* PHOTO CARD WRAPPER */}
              <div className="relative rounded-2xl w-full max-w-[250px] aspect-square overflow-hidden transition-transform duration-300 group-hover:-translate-y-1">
                <Image
                  src={
                    member.imageSrc ||
                    "/assets/images/staff/staff-placeholder.png"
                  }
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover w-full h-full"
                />
              </div>

              {/* NAME & ROLE LABELS */}
              <div className="space-y-1">
                <h3 className="text-base md:text-lg xl:text-[20px] font-black text-black tracking-tight uppercase leading-snug">
                  {member.name}
                </h3>
                <p className="text-[11px] md:text-sm xl:text-[15px] font-medium text-tertiary tracking-wider uppercase">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
