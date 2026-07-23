"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ChevronRight } from "lucide-react";

export default function Breadcrumbs() {
  const pathname = usePathname();

  // Split path into individual route segments (filters out empty strings)
  const segments = pathname ? pathname.split("/").filter(Boolean) : [];

  // Helper to format path slugs (e.g. "project-gallery" -> "Project Gallery")
  const formatSegmentName = (segment: string) => {
    return segment
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className="w-full bg-[#F2F4F5] py-5 border-b border-slate-200/60 font-space-grotesk"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <ol className="inline-flex items-center space-x-2.5 text-xs sm:text-sm font-medium text-slate-500">
          {/* HOME LINK */}
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="inline-flex text-xs font-medium items-center gap-1.5 hover:text-slate-900 transition-colors duration-200 uppercase tracking-wider"
            >
              <Home className="w-3.5 h-3.5 stroke-[2] text-slate-600" />
              <span>HOME</span>
            </Link>
          </li>

          {/* DYNAMIC PATH SEGMENTS */}
          {segments.map((segment, index) => {
            // Reconstruct full URL path up to current segment
            const url = `/${segments.slice(0, index + 1).join("/")}`;
            const isLast = index === segments.length - 1;

            return (
              <li key={url} className="inline-flex items-center space-x-2.5">
                {/* Separator Chevron */}
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />

                {isLast ? (
                  /* Active/Current Page Link */
                  <span
                    aria-current="page"
                    className="text-slate-600 font-normal hover:text-slate-900 cursor-pointer"
                  >
                    {formatSegmentName(segment)}
                  </span>
                ) : (
                  /* Intermediate Route Links */
                  <Link
                    href={url}
                    className=" text-sm font-normal hover:text-slate-900 transition-colors duration-200"
                  >
                    {formatSegmentName(segment)}
                  </Link>
                )}
              </li>
            );
          })}

          {/* Trailing chevron matching image design */}
          {segments.length > 0 && (
            <li className="inline-flex items-center">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            </li>
          )}
        </ol>
      </div>
    </nav>
  );
}
