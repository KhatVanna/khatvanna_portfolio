import type { Metadata } from "next";
import FaqSection from "@/components/FaqSection";
import FooterSection from "@/components/FooterSection";
import ServiceDetailHero from "@/components/ServiceDetailHero";
import SiteNav from "@/components/SiteNav";
import WhatWeDoSection from "@/components/WhatWeDoSection";

export const metadata: Metadata = {
  title: "Digital Strategy — Conax® Studio",
  description:
    "We provide the data-driven roadmap necessary to navigate the competitive landscape.",
};

export default function DigitalStrategyPage() {
  return (
    <main>
      <SiteNav />
      <ServiceDetailHero
        id="digital-strategy-hero"
        thumb="/images/digital-strategy/thumb.webp"
        hero="/images/digital-strategy/hero.webp"
        categories={["Market Analysis", "SEO Audit", "Growth Hacking"]}
        body="We provide the data-driven roadmap necessary to navigate the competitive landscape."
        title={
          <>
            Digital
            <br />
            Strategy
          </>
        }
        alt="Digital Strategy"
      />
      <WhatWeDoSection />
      <FaqSection />
      <FooterSection />
    </main>
  );
}
