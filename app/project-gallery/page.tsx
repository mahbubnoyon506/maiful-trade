import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import ExpertTechnicians from "@/components/ExpertTechnicians";
import GalleryCompletedProjects from "@/components/GalleryCompletedProjects";
import GallerySection from "@/components/GallerySection";

export default function Home() {
  return (
    <>
      <Breadcrumbs />
      <GallerySection />
      <GalleryCompletedProjects />
      <ExpertTechnicians />
      <CTASection />
    </>
  );
}
