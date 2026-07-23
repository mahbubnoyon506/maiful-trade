"use client";

import Image from "next/image";
import React from "react";

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  colSpanDesktop: string;
}

export default function GallerySection() {
  const galleryItems: GalleryItem[] = [
    // ROW 1: Wide + Narrow
    {
      id: "1",
      title: "PLATFORM SCALE INSTALLATION",
      description:
        "Versatile platform scales for warehouses, shipping, and general industrial weighing needs.",
      image: "/assets/images/gallery/image1.png",
      colSpanDesktop: "lg:col-span-2",
    },
    {
      id: "2",
      title: "SCALE INSTALLATION",
      description:
        "Versatile platform scales for warehouses, shipping, and general industrial weighing needs.",
      image: "/assets/images/gallery/image2.png",
      colSpanDesktop: "lg:col-span-1",
    },

    // ROW 2: Three Equal Columns
    {
      id: "3",
      title: "SCALE INSTALLATION",
      description:
        "Versatile platform scales for warehouses, shipping, and general industrial weighing needs.",
      image: "/assets/images/gallery/image3.png",
      colSpanDesktop: "lg:col-span-1",
    },
    {
      id: "4",
      title: "SCALE INSTALLATION",
      description:
        "Versatile platform scales for warehouses, shipping, and general industrial weighing needs.",
      image: "/assets/images/gallery/image4.png",
      colSpanDesktop: "lg:col-span-1",
    },
    {
      id: "5",
      title: "CRANE SCALE",
      description:
        "Versatile platform scales for warehouses, shipping, and general industrial weighing needs.",
      image: "/assets/images/gallery/image5.png",
      colSpanDesktop: "lg:col-span-1",
    },

    // ROW 3: Narrow + Wide
    {
      id: "6",
      title: "BENCH SCALE INSTALLATION",
      description:
        "Versatile platform scales for warehouses, shipping, and general industrial weighing needs.",
      image: "/assets/images/gallery/image6.png",
      colSpanDesktop: "lg:col-span-1",
    },
    {
      id: "7",
      title: "FLOOR SCALE INSTALLATION",
      description:
        "Versatile platform scales for warehouses, shipping, and general industrial weighing needs.",
      image: "/assets/images/gallery/image7.png",
      colSpanDesktop: "lg:col-span-2",
    },
  ];

  return (
    <section className="bg-white py-8 sm:py-16 xl:py-24 font-space-grotesk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ASYMMETRIC GRID CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`relative group rounded-2xl overflow-hidden min-h-[320px] sm:min-h-[380px] transition-all duration-300 hover:shadow-2xl ${item.colSpanDesktop}`}
            >
              {/* Full Cover Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* Dark Gradient Bottom Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10 pointer-events-none" />

              {/* Bottom Overlay Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-20 space-y-1.5">
                <h3 className="text-lg sm:text-xl font-black text-white tracking-wide uppercase leading-tight drop-shadow-sm">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-200 font-light leading-relaxed max-w-lg drop-shadow-sm">
                  {item.description}
                </p>
              </div>
            </div>
            // <div
            //   key={item.id}
            //   className={`relative group rounded-2xl overflow-hidden min-h-[320px] sm:min-h-[380px] transition-all duration-300 hover:shadow-2xl ${item.colSpanDesktop}`}
            // >

            //   <div className="absolute flex items-center justify-center text-4xl transition-transform duration-500 group-hover:scale-105">

            //     <Image
            //       className="object-cover"
            //       src={item.image}
            //       width={1000}
            //       height={700}
            //       alt=""
            //     />
            //   </div>

            //   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

            //   <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-20 space-y-2">
            //     <h3 className="text-lg sm:text-xl font-black text-white tracking-wide uppercase leading-tight">
            //       {item.title}
            //     </h3>
            //     <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed max-w-lg">
            //       {item.description}
            //     </p>
            //   </div>
            // </div>
          ))}
        </div>
      </div>
    </section>
  );
}
