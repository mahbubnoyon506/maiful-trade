"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

import {
  Star,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Truck,
  RotateCcw,
  Headphones,
  CreditCard,
  MessageCircle,
} from "lucide-react";
import { Product } from "@/utility/types";
import { products } from "@/utility/data";
import Button from "@/components/Button";

type ActiveTab =
  | "DESCRIPTION"
  | "ADDITIONAL INFORMATION"
  | "SPECIFICATION"
  | "REVIEW";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const productId = Number(params?.id);

  // Find target product or fallback to first product
  const product: Product =
    products.find((p) => p.id === productId) || products[0];

  // Gallery Active Image Index
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

  // Quantity Selector State
  const [quantity, setQuantity] = useState(1);

  // Active Tab State
  const [activeTab, setActiveTab] = useState<ActiveTab>("DESCRIPTION");

  // Quantity Handlers
  const handleDecreaseQty = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };
  const handleIncreaseQty = () => setQuantity((prev) => prev + 1);

  // Thumbnail Scroll/Navigation
  const handlePrevImage = () => {
    setSelectedImgIndex((prev) =>
      prev === 0 ? product.gallery.length - 1 : prev - 1,
    );
  };

  const handleNextImage = () => {
    setSelectedImgIndex((prev) =>
      prev === product.gallery.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <>
      <div className="bg-white min-h-screen py-8 lg:py-14 font-space-grotesk text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* TOP SECTION: GALLERY + PRODUCT HEADER / PURCHASE */}
          <div className=" grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* LEFT: GALLERY CAROUSEL */}
            <div className="lg:col-span-6 space-y-4">
              {/* Main Active Image Display */}
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                <Image
                  src={product.gallery[selectedImgIndex] || product.image}
                  alt={product.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover w-full h-full"
                />
                {/* Date Stamp Tag (Simulated from original photo frame) */}
                <div className="absolute bottom-3 right-3 text-[10px] font-mono text-amber-300 bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                  17/12/2024 09:58
                </div>
              </div>

              {/* Thumbnail Carousel Slider */}
              <div className="relative flex items-center">
                <button
                  onClick={handlePrevImage}
                  aria-label="Previous image"
                  className="absolute -left-3 z-10 p-1.5 rounded-full bg-slate-900/80 text-white hover:bg-black transition-colors shadow-md"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-3 overflow-x-auto scrollbar-none py-1 px-1 w-full">
                  {product.gallery.map((imgSrc, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImgIndex(idx)}
                      className={`relative shrink-0 w-20 aspect-[4/3] rounded-md overflow-hidden border-2 transition-all ${
                        selectedImgIndex === idx
                          ? "border-amber-500 ring-2 ring-amber-500/20"
                          : "border-slate-200 opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={imgSrc}
                        alt={`Thumbnail ${idx + 1}`}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleNextImage}
                  aria-label="Next image"
                  className="absolute -right-3 z-10 p-1.5 rounded-full bg-slate-900/80 text-white hover:bg-black transition-colors shadow-md"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* RIGHT: DETAILS & ACTIONS */}
            <div className="lg:col-span-6 space-y-6">
              {/* Rating & Sold count */}
              <div className="flex items-center gap-2">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-amber-400 text-amber-400"
                          : "text-slate-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-semibold text-slate-500">
                  {product.soldCount} Sold
                </span>
              </div>

              {/* Product Main Title */}
              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                {product.title}
              </h1>

              {/* Meta Information Key-Value Grid */}
              <div className="grid grid-cols-2 gap-y-2 gap-x-6 text-xs sm:text-sm py-2 border-y border-slate-100">
                <div>
                  <span className="text-slate-400">Sku: </span>
                  <span className="font-semibold text-slate-800">
                    {product.sku}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400">Availability: </span>
                  <span className="font-bold text-emerald-600">
                    {product.availability}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400">Brand: </span>
                  <span className="font-semibold text-slate-800">
                    {product.brand}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400">Model: </span>
                  <span className="font-semibold text-slate-800">
                    {product.model}
                  </span>
                </div>
                <div className="col-span-2">
                  <span className="text-slate-400">Certificates: </span>
                  <span className="font-semibold text-slate-800">
                    {product.certificates}
                  </span>
                </div>
              </div>

              {/* Quantity Controls & Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {/* Quantity Counter */}
                <div className="px-3 py-2.5 flex items-center border border-slate-200 rounded-md bg-slate-50">
                  <button
                    onClick={handleDecreaseQty}
                    className="text-slate-600 hover:bg-slate-200 transition-colors font-bold text-lg"
                  >
                    −
                  </button>
                  <span className=" font-semibold text-sm min-w-[40px] text-center">
                    {quantity < 10 ? `0${quantity}` : quantity}
                  </span>
                  <button
                    onClick={handleIncreaseQty}
                    className="text-slate-600 hover:bg-slate-200 transition-colors font-bold text-lg"
                  >
                    +
                  </button>
                </div>

                {/* Request For Quotation Button */}
                <Button
                  variant="solid"
                  className=" rounded-md tracking-wider bg-[#313131] hover:bg-[#313131]"
                >
                  REQUEST FOR QUOTATION
                </Button>
                <Button
                  variant="outline"
                  colorScheme="tertiary"
                  className=" rounded-md tracking-wider hover:bg-transparent hover:text-tertiary"
                >
                  INQUIRY
                </Button>
              </div>

              {/* WhatsApp Contact Direct Button */}
              <a
                href="https://wa.me/8801711706366"
                target="_blank"
                rel="noreferrer"
                title="WhatsApp Chat"
              >
                <Button
                  variant="solid"
                  colorScheme="tertiary"
                  className="rounded-md tracking-wider"
                >
                  <Image
                    width={28}
                    height={28}
                    alt=""
                    src="/assets/images/whatsapp.png"
                  />
                  <span className="ml-1">
                    What's app : {product.whatsappNumber}
                  </span>
                </Button>
              </a>
            </div>
          </div>

          {/* BOTTOM SECTION: TABS & FULL DESCRIPTION/FEATURES */}
          <div className=" rounded-xl border border-slate-200/80 overflow-hidden">
            {/* TAB HEADER STRIP */}
            <div className="flex items-center border-b border-slate-200 overflow-x-auto">
              {(
                [
                  "DESCRIPTION",
                  "ADDITIONAL INFORMATION",
                  "SPECIFICATION",
                  "REVIEW",
                ] as ActiveTab[]
              ).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 sm:px-8 py-4 font-bold text-xs tracking-wider uppercase whitespace-nowrap transition-all border-b-2 ${
                    activeTab === tab
                      ? "border-amber-500 text-slate-900 bg-white"
                      : "border-transparent text-slate-400 hover:text-slate-600 bg-slate-50/50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* TAB CONTENT PANELS */}
            <div className="p-6 sm:p-8 lg:p-10">
              {activeTab === "DESCRIPTION" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  {/* Description Column */}
                  <div className="lg:col-span-6 space-y-4">
                    <h3 className="text-sm font-bold text-slate-800 uppercase">
                      Description
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {product.description.overview}
                    </p>

                    {/* Key Features Bullet List */}
                    <div className="space-y-2 pt-2">
                      <h4 className="text-xs font-bold text-slate-700">
                        Key Features:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-600">
                        {product.description.keyFeatures.map((feat, idx) => (
                          <li key={idx} className="leading-relaxed">
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
                      {product.description.summary}
                    </p>
                  </div>

                  {/* Features Column */}
                  <div className="lg:col-span-3 space-y-4 border-t lg:border-t-0 lg:border-l border-slate-100 pt-6 lg:pt-0 lg:pl-8">
                    <h3 className="text-sm font-bold text-slate-800 uppercase">
                      Feature
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                        <span className="text-xs text-slate-600 font-medium">
                          Free 1 Year Warranty
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Truck className="w-5 h-5 text-emerald-500 shrink-0" />
                        <span className="text-xs text-slate-600 font-medium">
                          Free Shipping & Fasted Delivery
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <RotateCcw className="w-5 h-5 text-emerald-500 shrink-0" />
                        <span className="text-xs text-slate-600 font-medium">
                          100% Money-back guarantee
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Headphones className="w-5 h-5 text-emerald-500 shrink-0" />
                        <span className="text-xs text-slate-600 font-medium">
                          24/7 Customer support
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CreditCard className="w-5 h-5 text-emerald-500 shrink-0" />
                        <span className="text-xs text-slate-600 font-medium">
                          Secure payment method
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Shipping Info Column */}
                  <div className="lg:col-span-3 space-y-4 border-t lg:border-t-0 lg:border-l border-slate-100 pt-6 lg:pt-0 lg:pl-8">
                    <h3 className="text-sm font-bold text-slate-800 uppercase">
                      Shipping Information
                    </h3>
                    <div className="space-y-2 text-xs text-slate-600">
                      <p>
                        <strong className="text-slate-800">Courier:</strong>{" "}
                        {product.shippingInfo.courier}
                      </p>
                      <p>
                        <strong className="text-slate-800">
                          Local Shipping:
                        </strong>{" "}
                        {product.shippingInfo.localShipping}
                      </p>
                      <p>
                        <strong className="text-slate-800">
                          UPS Ground Shipping:
                        </strong>{" "}
                        {product.shippingInfo.upsGround}
                      </p>
                      <p>
                        <strong className="text-slate-800">
                          Unishop Global Export:
                        </strong>{" "}
                        {product.shippingInfo.unishopExport}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "ADDITIONAL INFORMATION" && (
                <div className="space-y-4 max-w-2xl text-xs sm:text-sm text-slate-600">
                  <h3 className="text-sm font-bold text-slate-800 uppercase">
                    Additional Information
                  </h3>
                  <p>
                    Designed for multi-sector industrial deployment including
                    logistics hubs, heavy manufacturing, construction, and
                    agriculture.
                  </p>
                </div>
              )}

              {activeTab === "SPECIFICATION" && (
                <div className="max-w-3xl">
                  <h3 className="text-sm font-bold text-slate-800 uppercase mb-4">
                    Technical Specifications
                  </h3>
                  <div className="border border-slate-200 rounded-lg overflow-hidden divide-y divide-slate-200 text-xs sm:text-sm">
                    {product.specifications.map((spec, idx) => (
                      <div
                        key={idx}
                        className="grid grid-cols-2 p-3.5 bg-white odd:bg-slate-50"
                      >
                        <span className="font-bold text-slate-700">
                          {spec.label}
                        </span>
                        <span className="text-slate-600">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "REVIEW" && (
                <div className="max-w-3xl space-y-6">
                  <h3 className="text-sm font-bold text-slate-800 uppercase">
                    Customer Reviews
                  </h3>
                  {product.reviews.length === 0 ? (
                    <p className="text-xs text-slate-500 italic">
                      No reviews submitted yet.
                    </p>
                  ) : (
                    product.reviews.map((rev) => (
                      <div
                        key={rev.id}
                        className="border-b border-slate-100 pb-4 space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs text-slate-800">
                            {rev.author}
                          </span>
                          <span className="text-[10px] text-slate-400">
                            {rev.date}
                          </span>
                        </div>
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${i < rev.rating ? "fill-current" : "text-slate-200"}`}
                            />
                          ))}
                        </div>
                        <p className="text-xs text-slate-600 pt-1">
                          {rev.comment}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
