import AboutUsSection from "@/components/AboutUsSection";
import BrandPartnersSection from "@/components/BrandPartnersSection";
import BstiComplianceSection from "@/components/BstiComplianceSection";
import BusinessPartnersSection from "@/components/BusinessPartnersSection";
import CompletedProjects from "@/components/CompletedProjects";
import CompletedProjectsSection from "@/components/CompletedProjects";
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
      <BusinessPartnersSection />
      <CompletedProjects />
    </div>
  );
}
