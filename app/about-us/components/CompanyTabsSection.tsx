"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Overview from "./Overview";

type TabKey =
  | "overview"
  | "mission"
  | "founder"
  | "what-we-do"
  | "why-us"
  | "certifications";

interface TabItem {
  key: TabKey;
  label: string;
}

export default function CompanyTabsSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("overview");

  const tabs: TabItem[] = [
    { key: "overview", label: "COMPANY OVERVIEW" },
    { key: "mission", label: "COMPANY MISSION & VISION" },
    { key: "founder", label: "FOUNDER MESSAGE" },
    { key: "what-we-do", label: "WHAT WE DO" },
    { key: "why-us", label: "WHY CHOOSE US" },
    { key: "certifications", label: "CERTIFICATIONS" },
  ];

  return (
    <section className="bg-white py-12 lg:py-20 font-space-grotesk text-slate-800">
      <div className="">
        {/* TAB NAVIGATION HEADER */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 border-b border-[#E4E7E9] overflow-x-auto scrollbar-none">
          <div className="-mb-0.5 flex items-center justify-around space-x-6 sm:space-x-10 whitespace-nowrap min-w-max pb-0.5">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`cursor-pointer text-xs sm:text-sm font-semibold uppercase tracking-wide py-3 border-b-2 border-t transition-all duration-200 ${
                  activeTab === tab.key
                    ? "border-b-tertiary border-t-[#E4E7E9]  text-[#191C1F]"
                    : "border-transparent text-[#7D8E96] hover:text-slate-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* TAB CONTENT PANELS */}
        {activeTab === "overview" && <Overview />}

        {/* OTHER TABS PLACEHOLDERS */}
        {activeTab !== "overview" && (
          <div className="py-16 text-center text-slate-500 space-y-2">
            <h3 className="text-lg font-bold text-slate-800 uppercase">
              {tabs.find((t) => t.key === activeTab)?.label}
            </h3>
            <p className="text-sm">Content coming soon...</p>
          </div>
        )}
      </div>
    </section>
  );
}
