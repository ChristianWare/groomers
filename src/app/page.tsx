import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
import Different from "@/components/HomePage/Different/Different";
import FeaturedServices from "@/components/HomePage/FeaturedServices/FeaturedServices";
import Hero from "@/components/HomePage/Hero/Hero";
import Love from "@/components/HomePage/Love/Love";
import PricingPreview from "@/components/HomePage/PricingPreview/PricingPreview";
import RecentWorks from "@/components/HomePage/RecentWorks/RecentWorks";
import ReviewPreview from "@/components/HomePage/ReviewPreview/ReviewPreview";
import ServicesSection from "@/components/HomePage/ServicesSection/ServicesSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <FeaturedServices />
      <AboutUs />
      <ReviewPreview />
      <Different />
      <Love />
      <PricingPreview />
      <RecentWorks />
    </main>
  );
}
