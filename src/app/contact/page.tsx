import PageIntro from "@/components/shared/PageIntro/PageIntro";
import Img1 from "../../../public/images/contact.jpg";
import ContactSection from "@/components/ContactPage/ContactSection/ContactSection";

export default function ContactPage() {
  return (
    <main>
      <PageIntro
        title='Get in touch with us'
        sectionIntro={"Contact"}
        desc="Have questions or need assistance? We're here to help! Reach out to us through our contact page, and our friendly team will get back to you promptly. Whether you have inquiries about our services, want to provide feedback, or simply want to say hello, we value your communication and look forward to connecting with you."
        src={Img1}
      />
      <ContactSection />
    </main>
  );
}
