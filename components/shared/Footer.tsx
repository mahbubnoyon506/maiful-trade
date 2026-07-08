"use client";

import React from "react";
import Link from "next/link";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Phone, Mail, MapPin, ArrowDownToLine } from "lucide-react";

// Inline helper for managing combined conditional classes safely
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Footer() {
  const topLinks = [
    { name: "Home", href: "#" },
    { name: "Featured Products", href: "#" },
    { name: "Our Services", href: "#" },
    { name: "About us", href: "#" },
    { name: "Company Profile", href: "#" },
    { name: "Brand Partners", href: "#" },
    { name: "Gallery", href: "#" },
    { name: "Contact us", href: "#" },
  ];

  const products = [
    "Digital & Analog Truck Scale",
    "Laboratory Balance",
    "Bench Scale",
    "Heavy Duty Scale",
    "Platform Scale",
    "Animal Scale",
  ];

  return (
    <footer className="bg-primary text-white pt-12 pb-8 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. TOP NAV LINKS */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 pb-8 border-b border-white/10 text-xs sm:text-sm font-semibold text-tertiary">
          {topLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="hover:underline transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* 2. CORE INFORMATION GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12 border-b border-white/10 relative">
          {/* Column 1: About the Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-tertiary">
              Over 15+ years in the industry
            </h3>
            <div className="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-3 font-light">
              <p>We Are Trusted Truck Scale Manufacturing Company Since 2007</p>
              <p>
                Maiful Trade Link is a renowned weighing scale manufacturer
                based in Bangladesh. The company was established in 2007 and has
                since grown to become a trusted name in the industry.
              </p>
            </div>

            {/* Social Icons Placeholder Row */}
            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs font-bold text-tertiary tracking-wide uppercase">
                Follow us
              </span>
              <div className="bg-white/95 px-3 py-1.5 rounded-md flex items-center gap-3 shadow-inner">
                {/* Simplified placeholder visual blocks for logo clarity */}
                <span className="text-blue-600 font-black text-sm">f</span>
                <span className="text-pink-600 font-bold text-sm">📸</span>
                <span className="text-black font-extrabold text-xs">𝕏</span>
                <span className="text-red-600 font-bold text-xs">▶</span>
                <span className="text-black font-bold text-xs">🎵</span>
              </div>
            </div>
          </div>

          {/* Column 2: Contact Options */}
          <div className="space-y-6 md:border-x md:border-white/10 md:px-8">
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-tertiary flex items-center gap-2">
                Call Us Now
              </h3>
              <div className="text-xs sm:text-sm text-slate-300 space-y-1 font-medium">
                <p>
                  <span className="text-white/60 font-normal">Mobile</span>{" "}
                  (+880) 1711-706366
                </p>
                <p>
                  <span className="text-white/60 font-normal">Tel</span> +880
                  1711-706366
                </p>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <h3 className="text-base font-bold text-tertiary">
                Send a Message
              </h3>
              <div className="text-xs sm:text-sm text-slate-300 space-y-1 font-light">
                <p>
                  <span className="text-white/60 font-normal">E-mail:</span>{" "}
                  sales@maifultradelink.com
                </p>
                <p>
                  <span className="text-white/60 font-normal">E-mail:</span>{" "}
                  info@maifultradelink.com
                </p>
                <p>
                  <span className="text-white/60 font-normal">Whatsapp:</span>{" "}
                  +880 1711-706366
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: Corporate Locations */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-tertiary">Visit Us</h3>

            <div className="space-y-1">
              <h4 className="text-sm font-bold text-tertiary">
                Corporate Office
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Plot:07, Road:412, Sector:13
                <br />
                Purbachal New Town, Rupganj
                <br />
                Narayanganj, Bangladesh
              </p>
            </div>

            <div className="space-y-1 pt-2">
              <h4 className="text-sm font-bold text-tertiary">
                Factory Office
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Purbagram, Rupganj
                <br />
                Narayanganj, Bangladesh
              </p>
            </div>
          </div>
        </div>

        {/* 3. PRODUCT LINKS SECTION */}
        <div className="py-8 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6 relative">
          <div className="space-y-3 max-w-4xl">
            <h3 className="text-base font-bold text-tertiary">Our Products</h3>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold text-white">
              {products.map((product, idx) => (
                <React.Fragment key={idx}>
                  <Link href="#" className="hover:text-tertiary transition">
                    {product}
                  </Link>
                  {idx < products.length - 1 && (
                    <span className="text-white/30 px-1">›</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Fixed Floating WhatsApp Badge Placeholder Positioning */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
            <a
              href="https://wa.me/8801711706366"
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full block shadow-lg transition-transform hover:scale-110"
              aria-label="Chat on Whatsapp"
            >
              {/* Custom SVG Icon representing WhatsApp */}
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.411 0 11.981 0c3.184.001 6.177 1.242 8.426 3.496 2.249 2.254 3.487 5.252 3.486 8.44-.005 6.657-5.357 12.008-11.93 12.008-1.999-.001-3.962-.505-5.71-1.467L0 24zm6.26-4.516c1.653.98 3.284 1.498 4.904 1.499 5.451 0 9.886-4.432 9.89-9.886.002-2.643-1.03-5.127-2.905-7.005C16.33 2.223 13.849 1.192 11.209 1.19c-5.456 0-9.893 4.434-9.897 9.889-.001 1.745.485 3.447 1.408 4.952l-.983 3.586 3.68-.965z" />
              </svg>
            </a>
          </div>
        </div>

        {/* 4. COPYRIGHT & DOWNLOAD BUTTON BAR */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[11px] sm:text-xs text-slate-400 font-light text-center md:text-left">
            © 2026 Maiful Trade Link. All rights reserved. | Premium Weighing
            Solutions in Bangladesh
          </p>

          <button
            onClick={() => console.log("Download requested...")}
            className="bg-tertiary hover:bg-orange-600 text-white font-bold text-xs sm:text-sm tracking-wider px-6 py-3 rounded-md flex items-center gap-3 shadow transition-all active:scale-[0.98] cursor-pointer"
          >
            DOWNLOAD COMPANY PROFILE
            <div className="bg-white/20 p-1 rounded-full">
              <ArrowDownToLine className="w-4 h-4 text-white" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
