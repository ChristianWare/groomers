// import AboutUsSection from "@/components/HomePage/AboutUsSection/AboutUsSection";
import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
import FeaturedServices from "@/components/HomePage/FeaturedServices/FeaturedServices";
import Hero from "@/components/HomePage/Hero/Hero";
import ServicesSection from "@/components/HomePage/ServicesSection/ServicesSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <FeaturedServices />
      <AboutUs />
      {/* <AboutUsSection /> */}
    </main>
  );
}
