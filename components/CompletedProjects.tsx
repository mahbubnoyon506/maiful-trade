"use client";

import React from "react";
import { Box } from "lucide-react";
import Image from "next/image";

export default function CompletedProjects() {
  const projectCards = [
    {
      id: "Project 01",
      title: "DIGITAL TRUCK SCALE INSTALLATION",
      description:
        "Every completed project represents our dedication to quality workmanship, technical excellence, and customer satisfaction.",
    },
    {
      id: "Project 02",
      title: "ANALOG TRUCK SCALE INSTALLATION",
      description:
        "Every completed project represents our dedication to quality workmanship, technical excellence, and customer satisfaction.",
    },
    {
      id: "Project 03",
      title: "PLATFORM & FLOOR SCALE SOLUTIONS",
      description:
        "Every completed project represents our dedication to quality workmanship, technical excellence, and customer satisfaction.",
    },
    {
      id: "Project 04",
      title: "LOAD CELL INTEGRATION PROJECTS",
      description:
        "Every completed project represents our dedication to quality workmanship, technical excellence, and customer satisfaction.",
    },
    {
      id: "Project 05",
      title: "WEIGHING INDICATOR & CONTROLLER SETUP",
      description:
        "Every completed project represents our dedication to quality workmanship, technical excellence, and customer satisfaction.",
    },
    {
      id: "Project 06",
      title: "INDUSTRIAL WEIGHING SYSTEM UPGRADES",
      description:
        "Every completed project represents our dedication to quality workmanship, technical excellence, and customer satisfaction.",
    },
  ];

  return (
    <section className="bg-white py-8 sm:py-16 xl:py-24 font-space-grotesk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* 1. HERO / INTRO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
          <div className="lg:col-span-5 relative w-full">
            <Image
              width={500}
              height={400}
              alt=""
              src="/assets/images/completed-project.png"
            />
          </div>

          {/* Right Block: Explanatory Content */}
          <div className="lg:col-span-7 space-y-5">
            <span className="text-sm font-medium tracking-widest uppercase text-secondary">
              COMPLETED PROJECTS
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary tracking-tight leading-tight uppercase">
              PROVEN INSTALLATIONS.
              <br />
              TRUSTED PERFORMANCE.
            </h2>

            <div className="space-y-4 text-sm md:text-lg text-neutral font-roboto font-light leading-relaxed">
              <p>
                Over the years, Maiful Trade has successfully delivered and
                installed industrial weighing solutions for businesses across
                multiple sectors, including logistics, manufacturing,
                construction, agriculture, and warehousing.
              </p>
              <p>
                Our project portfolio reflects our commitment to precision,
                reliability, and long-term performance. From truck scale
                installations to customized weighing systems, every project is
                executed with careful planning, professional installation, and
                ongoing technical support.
              </p>
            </div>
          </div>
        </div>

        {/* SEPARATOR DASHED LINE MATCHING MOCKUP */}
        <div className="w-full border-t border-dashed border-neutral" />

        {/* 2. SUB-PROJECTS PORTFOLIO MATRIX */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {projectCards.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center space-y-4 group max-w-sm mx-auto"
            >
              {/* Project Mini Tag */}
              <span className="text-xs text-primary bg-white border border-slate-200/60 px-2.5 py-1.5 rounded-full uppercase tracking-wider">
                {project.id}
              </span>

              {/* Styled Icon Wrapper Box */}
              <div className="w-20 h-20 bg-secondary rounded-xl flex items-center justify-center text-white shadow-md transition-all duration-300 group-hover:scale-105 group-hover:bg-tertiary">
                <Box className="w-8 h-8 stroke-[1.5]" />
              </div>

              {/* Title Header */}
              <h3 className="text-lg md:text-xl xl:text-2xl font-bold text-primary tracking-wide leading-snug uppercase max-w-60 transition-colors duration-200">
                {project.title}
              </h3>

              {/* Informational Description Text */}
              <p className="text-xs sm:text-base text-neutral font-roboto font-light leading-relaxed max-w-75">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
