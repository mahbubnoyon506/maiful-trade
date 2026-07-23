"use client";
import Button from "@/components/Button";
import Product from "@/components/Product";
import { categories, products } from "@/utility/data";
import { Terminal } from "lucide-react";
import { useState } from "react";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All Scale");

  return (
    <>
      <section className="bg-white py-8 sm:py-16 xl:py-24 font-space-grotesk">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 xl:space-y-10">
          <div className="flex justify-center flex-wrap gap-3 pb-4 sm:pb-8 xl:pb-16">
            {categories.map((item) => (
              <Button
                onClick={() => setActiveCategory(item.name)}
                className={`${activeCategory === item.name ? "bg-tertiary hover:bg-tertiary text-white hover:text-white" : "bg-[#F7F7F7] text-neutral"} hover:bg-tertiary hover:text-white capitalize rounded-full`}
              >
                {item.name}
              </Button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {products
              .filter((item) =>
                activeCategory === "All Scale"
                  ? item
                  : item.category === activeCategory,
              )
              .map((product) => (
                <Product key={product.id} product={product} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
