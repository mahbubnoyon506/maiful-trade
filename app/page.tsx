import AboutUsSection from "@/components/AboutUsSection";
import BrandPartnersSection from "@/components/BrandPartnersSection";
import BstiComplianceSection from "@/components/BstiComplianceSection";
import FeaturedProductsSection from "@/components/FeaturedProductsSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import VideoBoxSection from "@/components/VideoBoxSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <AboutUsSection />
      <BrandPartnersSection />
      <FeaturedProductsSection />
      <ServicesSection />
      <BstiComplianceSection />
      <VideoBoxSection />
    </div>
  );
}
