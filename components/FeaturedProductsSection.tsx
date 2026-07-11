"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "./Button";
import Image from "next/image";

export default function FeaturedProductsSection() {
  const products = [
    {
      title: "Digital Truck Scale",
      image: "/assets/images/truck-scale.png",
      href: "#",
    },
    {
      title: "Platform",
      image: "/assets/images/platform.png",
      href: "#",
    },
    {
      title: "Animal Scale",
      image: "/assets/images/animal-scale.png",
      href: "#",
    },
    {
      title: "Floor scale",
      image: "/assets/images/floor-scale.png",
      href: "#",
    },
    {
      title: "Crane Scale",
      image: "/assets/images/crane-scale.png",
      href: "#",
    },
    {
      title: "Bench Scale",
      image: "/assets/images/bench-scale.png",
      href: "#",
    },
  ];

  return (
    <section className="bg-[#EDF0F3] py-8 sm:py-16 xl:py-24 font-space-grotesk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 xl:space-y-10">
        {/* HEADER SECTION LAYOUT ROW */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/60 pb-6">
          <div className="space-y-2">
            <span className="text-sm font-medium tracking-widest uppercase text-secondary">
              OUR FEATURED PRODUCTS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary tracking-tight leading-tight uppercase">
              OUR COMPLETE WEIGHING SOLUTIONS
            </h2>
          </div>

          <div>
            <Button
              variant="solid"
              colorScheme="tertiary"
              className="rounded-md"
              onClick={() => console.log("View All Products Clicked")}
            >
              VIEW ALL
            </Button>
          </div>
        </div>

        {/* COMPACT PRODUCT CARDS MATRIX GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
            >
              <div className=" w-full  group">
                <Image
                  width={377}
                  height={310}
                  src={product.image}
                  alt="product-image"
                  className="w-full object-contain"
                />
              </div>

              {/* Title and Detailed Action Navigation Row */}
              <div className="pt-5 pb-2 space-y-3">
                <h3 className="font-k2d text-lg md:text-xl xl:text-2xl font-bold tracking-tight text-black">
                  {product.title}
                </h3>

                <Link href={product.href}>
                  <Button
                    variant="solid"
                    className="bg-[#313131] hover:bg-tertiary text-white rounded-md text-base font-poppins"
                  >
                    View Details
                    <ArrowRight className="ml-2 w-3.5 h-3.5 stroke-[2.5]" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
