"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "./Button";
// Reusable button from earlier steps

export default function FeaturedProductsSection() {
  const products = [
    {
      title: "Digital Truck Scale",
      emoji: "🚛",
      href: "#",
    },
    {
      title: "Platform",
      emoji: "🏗️",
      href: "#",
    },
    {
      title: "Animal Scale",
      emoji: "🐄",
      href: "#",
    },
    {
      title: "Floor scale",
      emoji: "🟦",
      href: "#",
    },
    {
      title: "Crane Scale",
      emoji: "🏗️",
      href: "#",
    },
    {
      title: "Bench Scale",
      emoji: "⚖️",
      href: "#",
    },
  ];

  return (
    <section className="bg-[#F4F7FA] py-16 lg:py-24 font-space-grotesk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* HEADER SECTION LAYOUT ROW */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/60 pb-6">
          <div className="space-y-2">
            <span className="text-sm font-medium tracking-widest uppercase text-secondary">
              OUR FEATURED PRODUCTS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight uppercase text-primary">
              OUR COMPLETE WEIGHING SOLUTIONS
            </h2>
          </div>

          <div>
            <Button
              variant="solid"
              colorScheme="tertiary"
              className="px-6 py-3 rounded-md text-lg whitespace-nowrap"
              onClick={() => console.log("View All Products Clicked")}
            >
              VIEW ALL
            </Button>
          </div>
        </div>

        {/* COMPACT PRODUCT CARDS MATRIX GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              {/* Product Visual Container Canvas Box */}
              <div className="bg-[#F8FAFC] rounded-xl aspect-[4/3] w-full flex items-center justify-center relative overflow-hidden group border border-slate-50">
                <span className="text-6xl transition-transform duration-300 group-hover:scale-110 select-none">
                  {product.emoji}
                </span>
                {/* Background Overlay Hint subtle element */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Title and Detailed Action Navigation Row */}
              <div className="pt-5 pb-2 space-y-3">
                <h3 className="font-k2d text-lg sm:text-2xl font-bold tracking-tight text-black">
                  {product.title}
                </h3>

                <Link href={product.href}>
                  <Button
                    variant="solid"
                    className="bg-[#313131] px-6 py-3 rounded-md text-base font-semibold whitespace-nowrap font-poppins"
                  >
                    View Details
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
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
