"use client";
import BrandPartnersSection from "@/components/BrandPartnersSection";
import BusinessPartners from "@/components/BusinessPartners";
import Button from "@/components/Button";
import ExpertTechnicians from "@/components/ExpertTechnicians";
import QuoteModal from "@/components/QuoteModal";
import StatsSection from "@/components/StatsSection";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Overview() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 mb-8">
        <div className=" grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start pt-4">
          {/* LEFT COLUMN: TEXT + STATS + CTA */}
          <div className="lg:col-span-6 space-y-8">
            {/* Text Description */}
            <div className="space-y-4">
              <h3 className="text-sm md:text-base font-semibold text-gray-900 tracking-tight leading-snug">
                Engineering Accurate Weighing Solutions for Industrial
                Excellence
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                Delivering reliable truck scales, weighing systems, load cells,
                and industrial measurement solutions that help businesses
                improve operational efficiency, compliance, and profitability.
              </p>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                Maiful Trade is a Bangladesh-based industrial weighing solutions
                provider specializing in the supply, installation, calibration,
                and maintenance of weighing systems for commercial and
                industrial applications.
                <br />
                We work with manufacturers, logistics operators, construction
                companies, agricultural businesses, and industrial facilities to
                deliver dependable weighing technology backed by professional
                technical support.
              </p>
            </div>

            {/* Company At a Glance / Stats Grid */}
            <div className="space-y-6 pt-2">
              <h4 className="text-base sm:text-lg font-semibold text-tertiary">
                Company At a Glance
              </h4>

              <div className="grid grid-cols-2 gap-y-6 gap-x-8">
                {/* Stat 1 */}
                <div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-900 block">
                    Years of Experience :
                  </span>
                  <span className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
                    15+ Years
                  </span>
                </div>

                {/* Stat 2 */}
                <div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-900 block">
                    Projects Completed
                  </span>
                  <span className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
                    1300+
                  </span>
                </div>

                {/* Stat 3 */}
                <div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-900 block">
                    Global Technology Partners
                  </span>
                  <span className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
                    10+
                  </span>
                </div>

                {/* Stat 4 */}
                <div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-900 block">
                    Technical Support Team
                  </span>
                  <span className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
                    24+
                  </span>
                </div>
              </div>
            </div>

            {/* Requirement CTA Button */}
            <div className="pt-2">
              <Button
                variant="solid"
                colorScheme="tertiary"
                className="rounded-sm capitalize"
                onClick={() => setIsModalOpen(true)}
              >
                Tell Us Your Requirement
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </Button>
            </div>
          </div>

          {/* RIGHT COLUMN: 3-IMAGE COLLAGE */}
          <div className="lg:col-span-6 space-y-4">
            {/* Top Row (Two side-by-side images) */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 border border-slate-200/80 shadow-xs">
                <Image
                  src="/assets/images/overview1.png"
                  alt="Steel weighbridge beams fabrication"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 border border-slate-200/80 shadow-xs">
                <Image
                  src="/assets/images/overview2.png"
                  alt="Scale pit foundation site"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Bottom Row (Full width image) */}
            <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 border border-slate-200/80 shadow-xs">
              <Image
                src="/assets/images/overview3.png"
                alt="On-site technical support team working"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      <StatsSection />
      <BrandPartnersSection />
      <BusinessPartners />
      <ExpertTechnicians />
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
