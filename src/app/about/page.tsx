import AboutPageIntro from "@/components/AboutPage/AboutPageInro/AboutPageInro";
import AboutServicesPreview from "@/components/AboutPage/AboutServicesPreview/AboutServicesPreview";
import AboutUsDetails from "@/components/AboutPage/AboutUsDetails/AboutUsDetails";
import Groomers from "@/components/AboutPage/Groomers/Groomers";
import SafteyAndQuality from "@/components/AboutPage/SafteyAndQuality/SafteyAndQuality";

export default function AboutPage() {
  return (
    <main>
      <AboutPageIntro />
      <AboutUsDetails />
      <AboutServicesPreview />
      <Groomers />
      <SafteyAndQuality />
    </main>
  );
}
