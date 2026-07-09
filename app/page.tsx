import AboutUsSection from "@/components/AboutUsSection";
import BrandPartnersSection from "@/components/BrandPartnersSection";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <AboutUsSection />
      <BrandPartnersSection />
    </div>
  );
}
