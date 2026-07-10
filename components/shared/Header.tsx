"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Download, Mail, Menu, Phone, X } from "lucide-react";
import Button from "../Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "#", isActive: true },
    { name: "ABOUT US", href: "#" },
    { name: "PRODUCTS", href: "#" },
    { name: "PROJECT GALLERY", href: "#" },
    { name: "SERVICES", href: "#" },
    { name: "BRAND PARTNER", href: "#" },
    { name: "CONTACT US", href: "#" },
  ];

  return (
    <>
      <div className="w-full bg-white font-space-grotesk ">
        {/* Main Bar Wrapper */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between py-3 gap-4 md:gap-0">
            {/* LEFT SIDE: Contact Credentials */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs sm:text-sm font-medium text-primary">
              {/* Email link */}
              <a
                href="mailto:info@maifultradelink.com"
                className="flex items-center gap-2 hover:text-tertiary transition-colors duration-200"
              >
                <Mail className="w-3.5 h-3.5 text-neutral" />
                <span>info@maifultradelink.com</span>
              </a>

              {/* Dotted Vertical Splitter (Hidden on small wrap columns) */}
              <div className="hidden md:block h-4 border-l border-dotted border-slate-400 mx-2" />

              {/* Phone link */}
              <a
                href="tel:+8801711706366"
                className="flex items-center gap-2 hover:text-tertiary transition-colors duration-200"
              >
                <Phone className="w-3.5 h-3.5 text-neutral" />
                <span>
                  +880{" "}
                  <span className="underline decoration-primary hover:decoration-tertiary font-semibold">
                    1711-706366
                  </span>
                </span>
              </a>
            </div>

            {/* RIGHT SIDE: Profile Action Trigger */}
            <div className="w-full sm:w-auto flex justify-center sm:justify-end">
              <Button
                variant="solid"
                colorScheme="tertiary"
                className="rounded-md tracking-wider"
              >
                DOWNLOAD PROFILE
              </Button>
            </div>
          </div>
        </div>
      </div>
      <nav className="font-space-grotesk bg-[#070F33] text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 h-20">
            {/* Logo / Brand Name */}
            <div className="shrink-0">
              <Link
                href="/"
                className="text-lg sm:text-xl xl:text-[32px] font-bold tracking-wider text-white"
              >
                MAIFUL TRADE LINK
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs xl:text-sm font-medium tracking-widest transition-colors duration-200 hover:text-tertiary ${
                    link.isActive ? "text-tertiary" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Hamburger Menu Toggle Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Backdrop & Panel */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-screen opacity-100 visible"
              : "max-h-0 opacity-0 invisible overflow-hidden"
          }`}
          id="mobile-menu"
        >
          <div className="px-4 pt-2 pb-6 space-y-2 bg-primary/95 border-t border-white/5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 text-xs font-bold tracking-widest rounded-md hover:bg-white/5 hover:text-tertiary transition-all ${
                  link.isActive ? "text-tertiary bg-white/5" : "text-white/90"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
