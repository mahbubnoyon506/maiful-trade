"use client";

import React from "react";
import Image from "next/image";

interface ProjectShowcase {
  id: string;
  tagline: string;
  title: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
  reverseLayout?: boolean; // Controls left/right positioning on desktop
}

export default function GalleryCompletedProjects() {
  const projectsData: ProjectShowcase[] = [
    {
      id: "project-1",
      tagline: "COMPLETED PROJECTS 1",
      title: "PROVEN INSTALLATIONS.\nTRUSTED PERFORMANCE.",
      paragraphs: [
        "Over the years, Maiful Trade has successfully delivered and installed industrial weighing solutions for businesses across multiple sectors, including logistics, manufacturing, construction, agriculture, and warehousing.",
        "Our project portfolio reflects our commitment to precision, reliability, and long-term performance. From truck scale installations to customized weighing systems, every project is executed with careful planning, professional installation, and ongoing technical support.",
      ],
      imageSrc: "/assets/images/site-work.png",
      imageAlt: "On-site industrial weighing scale installation project 1",
      reverseLayout: false, // Image Left, Text Right
    },
    {
      id: "project-2",
      tagline: "COMPLETED PROJECTS 2",
      title: "PROVEN INSTALLATIONS.\nTRUSTED PERFORMANCE.",
      paragraphs: [
        "Over the years, Maiful Trade has successfully delivered and installed industrial weighing solutions for businesses across multiple sectors, including logistics, manufacturing, construction, agriculture, and warehousing.",
        "Our project portfolio reflects our commitment to precision, reliability, and long-term performance. From truck scale installations to customized weighing systems, every project is executed with careful planning, professional installation, and ongoing technical support.",
      ],
      imageSrc: "/assets/images/site-work.png",
      imageAlt: "On-site industrial weighing scale installation project 2",
      reverseLayout: true, // Text Left, Image Right
    },
    {
      id: "project-3",
      tagline: "COMPLETED PROJECTS 1",
      title: "PROVEN INSTALLATIONS.\nTRUSTED PERFORMANCE.",
      paragraphs: [
        "Over the years, Maiful Trade has successfully delivered and installed industrial weighing solutions for businesses across multiple sectors, including logistics, manufacturing, construction, agriculture, and warehousing.",
        "Our project portfolio reflects our commitment to precision, reliability, and long-term performance. From truck scale installations to customized weighing systems, every project is executed with careful planning, professional installation, and ongoing technical support.",
      ],
      imageSrc: "/assets/images/site-work.png",
      imageAlt: "On-site industrial weighing scale installation project 3",
      reverseLayout: false, // Image Left, Text Right
    },
  ];

  return (
    <section className="bg-white pb-8 sm:pb-16 xl:pb-24 font-space-grotesk">
      <h1 className="pb-8 sm:pb-16 xl:pb-24 tracking-wide text-center text-black font-bold text-2xl md:text-3xl xl:text-4xl uppercase">
        completed Project{" "}
      </h1>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
        {projectsData.map((project, index) => (
          <React.Fragment key={project.id}>
            {/* PROJECT ROW ITEM */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* IMAGE BLOCK */}
              <div
                className={`lg:col-span-6 w-full ${
                  project.reverseLayout ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 bg-slate-100">
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* TEXT CONTENT BLOCK */}
              <div
                className={`lg:col-span-6 space-y-4 sm:space-y-5 ${
                  project.reverseLayout ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <span className="text-sm font-medium tracking-widest uppercase text-secondary block">
                  {project.tagline}
                </span>

                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary tracking-tight leading-tight uppercase">
                  {project.title}
                </h2>

                <div className="space-y-4 text-sm md:text-lg text-neutral font-roboto font-light leading-relaxed">
                  {project.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* DOTTED SEPARATOR BETWEEN ROWS (EXCEPT LAST ITEM) */}
            {index < projectsData.length - 1 && (
              <div className="w-full border-t-2 border-dashed border-slate-300" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
