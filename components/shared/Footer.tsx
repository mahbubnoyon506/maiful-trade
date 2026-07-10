"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import socialIcons from "@/assets/images/social-media.png";
import whatsApp from "@/assets/images/whatsapp.png";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Phone, Mail, MapPin, ArrowDownToLine } from "lucide-react";
import Button from "../Button";

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
    <footer className=" font-poppins bg-primary text-white pt-12 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. TOP NAV LINKS */}
        <div className="flex flex-wrap justify-between gap-x-2 gap-y-3 pb-8 border-b border-[#1E548A] text-base sm:text-lg font-semibold text-tertiary">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12 border-b border-[#1E548A] relative">
          {/* Column 1: About the Company */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-tertiary">
              Over 15+ years in the industry
            </h3>
            <div className="text-base sm:text-lg text-slate-300 leading-relaxed space-y-3 font-light">
              <p>We Are Trusted Truck Scale Manufacturing Company Since 2007</p>
              <p>
                Maiful Trade Link is a renowned weighing scale manufacturer
                based in Bangladesh. The company was established in 2007 and has
                since grown to become a trusted name in the industry.
              </p>
            </div>

            {/* Social Icons Placeholder Row */}
            <div className="pt-2 flex items-center gap-3">
              <span className="text-2xl font-semibold text-tertiary tracking-wide uppercase">
                Follow us
              </span>

              <Image
                src="/assets/images/social-media.png"
                alt="Social Icons"
                width={200}
                height={50}
              />
            </div>
          </div>

          {/* Column 2: Contact Options */}
          <div className="space-y-6 md:border-x md:border-[#1E548A] md:px-8">
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-tertiary flex items-center gap-2">
                Call Us Now
              </h3>
              <div className="text-base sm:text-lg text-slate-300 space-y-1 font-medium">
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
              <h3 className="text-2xl font-semibold text-tertiary">
                Send a Message
              </h3>
              <div className="text-base sm:text-lg text-slate-300 space-y-1 font-light">
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
            <h3 className="text-2xl font-semibold text-tertiary">Visit Us</h3>

            <div className="space-y-1">
              <h4 className="text-2xl font-semibold text-tertiary">
                Corporate Office
              </h4>
              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
                Plot:07, Road:412, Sector:13
                <br />
                Purbachal New Town, Rupganj
                <br />
                Narayanganj, Bangladesh
              </p>
            </div>

            <div className="space-y-1 pt-2">
              <h4 className="text-2xl font-semibold text-tertiary">
                Factory Office
              </h4>
              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
                Purbagram, Rupganj
                <br />
                Narayanganj, Bangladesh
              </p>
            </div>
          </div>
        </div>

        {/* 3. PRODUCT LINKS SECTION */}
        <div className="py-8 border-b border-[#1E548A] flex flex-col md:flex-row md:items-center justify-between gap-6 relative">
          <div className="space-y-3 ">
            <h3 className="text-2xl font-semibold text-tertiary">
              Our Products
            </h3>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base sm:text-lg font-semibold text-white">
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
              // href="https://wa.me/8801711706366"
              target="_blank"
              rel="noreferrer"
              className="transition-transform hover:scale-110"
              aria-label="Chat on Whatsapp"
            >
              <Image
                src="/assets/images/whatsapp.png"
                alt="WhatsApp"
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>

        {/* 4. COPYRIGHT & DOWNLOAD BUTTON BAR */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm sm:text-base text-slate-400 font-light text-center md:text-left">
            © 2026 Maiful Trade Link. All rights reserved. | Premium Weighing
            Solutions in Bangladesh
          </p>

          <Button
            variant="solid"
            colorScheme="tertiary"
            className="px-6 py-3 rounded-md"
          >
            DOWNLOAD COMPANY PROFILE
          </Button>
        </div>
      </div>
    </footer>
  );
}
