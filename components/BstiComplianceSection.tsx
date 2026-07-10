"use client";

export default function BstiComplianceSection() {
  return (
    <section className="font-k2d">
      <div className="bg-tertiary p-4 md:p-6 xl:p-8">
        {/* Core Container with Orange Accent Background and White Dashed Border */}
        <div className="bg-tertiary text-white rounded-2xl p-8 md:p-12 shadow-md border-2 border-dashed border-white/60 relative overflow-hidden transition-all duration-300 hover:shadow-lg">
          {/* Content Block Wrapper */}
          <div className="text-center space-y-4 relative z-10">
            <h2 className="text-xl md:text-3xl xl:text-[40px] font-bold tracking-wide leading-tight">
              We help BSTI Compliance Support
            </h2>

            <p className="text-lg md:text-2xl xl:text-[32px] font-bold leading-relaxed">
              Helping businesses maintain accurate, reliable, and
              standards-compliant weighing systems across Bangladesh.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
