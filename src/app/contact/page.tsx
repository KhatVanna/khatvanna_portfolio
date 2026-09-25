import type { Metadata } from "next";
import AboutNewsletterSection from "@/components/AboutNewsletterSection";
import ContactFormSection from "@/components/ContactFormSection";
import ContactHeroSection from "@/components/ContactHeroSection";
import FaqSection from "@/components/FaqSection";
import FooterSection from "@/components/FooterSection";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Contact — Khat Vanna",
  description:
    "Open to collaborations and new projects — get in touch with Khat Vanna for design and development work.",
};

export default function ContactPage() {
  return (
    <main>
      <SiteNav />
      <ContactHeroSection />
      <ContactFormSection />
      <AboutNewsletterSection />
      <FaqSection />
      <FooterSection />
    </main>
  );
}
