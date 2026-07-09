import AboutUsSection from "@/components/AboutUsSection";
import BrandPartnersSection from "@/components/BrandPartnersSection";
import FeaturedProductsSection from "@/components/FeaturedProductsSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <AboutUsSection />
      <BrandPartnersSection />
      <FeaturedProductsSection />
      <ServicesSection />
    </div>
  );
}
