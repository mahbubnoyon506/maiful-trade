"use client";

import React from "react";
import Button from "./Button";
import Product from "./Product";
import { products } from "@/utility/data";

export default function FeaturedProductsSection() {
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
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
