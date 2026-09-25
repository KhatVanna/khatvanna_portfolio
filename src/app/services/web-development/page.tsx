import type { Metadata } from "next";
import FaqSection from "@/components/FaqSection";
import FooterSection from "@/components/FooterSection";
import ServiceDetailHero from "@/components/ServiceDetailHero";
import SiteNav from "@/components/SiteNav";
import WhatWeDoSection from "@/components/WhatWeDoSection";

export const metadata: Metadata = {
  title: "Web Development — Conax® Studio",
  description:
    "Our team translates high-end designs into high-performance digital products using clean, scalable code.",
};

export default function WebDevelopmentPage() {
  return (
    <main>
      <SiteNav />
      <ServiceDetailHero
        id="web-development-hero"
        thumb="/images/web-development/thumb.webp"
        hero="/images/web-development/hero.webp"
        categories={["React/Next.js", "CMS Integration", "E-Commerce"]}
        body="Our team translates high-end designs into high-performance digital products using clean, scalable code."
        title={
          <>
            Web
            <br />
            Development
          </>
        }
        alt="Web Development"
      />
      <WhatWeDoSection />
      <FaqSection />
      <FooterSection />
    </main>
  );
}
