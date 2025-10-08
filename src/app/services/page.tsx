import SafteyAndQuality from "@/components/AboutPage/SafteyAndQuality/SafteyAndQuality";
import FeaturedServices from "@/components/HomePage/FeaturedServices/FeaturedServices";
import ServicePageIntro from "@/components/ServicesPage/ServicePageIntro/ServicePageIntro";

export default function ServicesPage() {
  return (
    <main>
      <ServicePageIntro />
      <FeaturedServices />
      <SafteyAndQuality />
    </main>
  );
}
