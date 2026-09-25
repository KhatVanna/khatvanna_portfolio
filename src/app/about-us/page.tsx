import type { Metadata } from "next";
import AboutNewsletterSection from "@/components/AboutNewsletterSection";
import AboutTeamSection from "@/components/AboutTeamSection";
import AwardsSection from "@/components/AwardsSection";
import ConaxFeaturesSection from "@/components/ConaxFeaturesSection";
import FooterSection from "@/components/FooterSection";
import PhilosophySection from "@/components/PhilosophySection";
import SiteNav from "@/components/SiteNav";
import SpeedAdvantageSection from "@/components/SpeedAdvantageSection";
import StudioSection from "@/components/StudioSection";
import WhatSetsUsApartSection from "@/components/WhatSetsUsApartSection";

export const metadata: Metadata = {
  title: "About Us — Conax® Studio",
  description:
    "Conax Studio — the valuable we will provide for you. 76+ projects delivered.",
};

export default function AboutUsPage() {
  return (
    <main>
      <SiteNav />
      <StudioSection />
      <PhilosophySection />
      <ConaxFeaturesSection />
      <WhatSetsUsApartSection />
      <AwardsSection />
      <SpeedAdvantageSection />
      <AboutTeamSection />
      <AboutNewsletterSection />
      <FooterSection />
    </main>
  );
}
