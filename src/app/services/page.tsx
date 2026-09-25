import type { Metadata } from "next";
import FooterSection from "@/components/FooterSection";
import ServicesHeroSection from "@/components/ServicesHeroSection";
import ServicesIntroSection from "@/components/ServicesIntroSection";
import ServicesListSection from "@/components/ServicesListSection";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Services — Conax® Studio",
  description:
    "We specialize in the development of corporate websites, online services and online stores.",
};

export default function ServicesPage() {
  return (
    <main>
      <SiteNav />
      <ServicesHeroSection />
      <ServicesIntroSection />
      <ServicesListSection />
      <FooterSection />
    </main>
  );
}
