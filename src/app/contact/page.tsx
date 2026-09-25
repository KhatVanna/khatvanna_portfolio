import type { Metadata } from "next";
import AboutNewsletterSection from "@/components/AboutNewsletterSection";
import ContactFormSection from "@/components/ContactFormSection";
import ContactHeroSection from "@/components/ContactHeroSection";
import FaqSection from "@/components/FaqSection";
import FooterSection from "@/components/FooterSection";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Contact — Conax® Studio",
  description:
    "Ready to be our next success story? Get in touch with Conax for brand, product, and digital work.",
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
