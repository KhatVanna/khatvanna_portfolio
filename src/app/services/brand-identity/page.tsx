import type { Metadata } from "next";
import FaqSection from "@/components/FaqSection";
import FooterSection from "@/components/FooterSection";
import ServiceDetailHero from "@/components/ServiceDetailHero";
import SiteNav from "@/components/SiteNav";
import WhatWeDoSection from "@/components/WhatWeDoSection";

export const metadata: Metadata = {
  title: "Brand Identity — Conax® Studio",
  description:
    "We build comprehensive visual systems that capture the core essence and unique personality of your business.",
};

export default function BrandIdentityPage() {
  return (
    <main>
      <SiteNav />
      <ServiceDetailHero
        id="brand-identity-hero"
        thumb="/images/brand-identity/thumb.webp"
        hero="/images/brand-identity/hero.webp"
        categories={["Packaging Design", "Logo Design", "Rebranding"]}
        body="We build comprehensive visual systems that capture the core essence and unique personality of your business."
        title={
          <>
            Brand
            <br />
            Identity
          </>
        }
        alt="Brand Identity"
      />
      <WhatWeDoSection />
      <FaqSection />
      <FooterSection />
    </main>
  );
}
