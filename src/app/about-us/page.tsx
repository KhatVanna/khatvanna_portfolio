import type { Metadata } from "next";
import AboutNewsletterSection from "@/components/AboutNewsletterSection";
import AboutTeamSection from "@/components/AboutTeamSection";
import AwardsSection from "@/components/AwardsSection";
import FeaturesSection from "@/components/FeaturesSection";
import FooterSection from "@/components/FooterSection";
import PhilosophySection from "@/components/PhilosophySection";
import SiteNav from "@/components/SiteNav";
import SpeedAdvantageSection from "@/components/SpeedAdvantageSection";
import StudioSection from "@/components/StudioSection";
import WhatSetsUsApartSection from "@/components/WhatSetsUsApartSection";

export const metadata: Metadata = {
  title: "About Us — Khat Vanna",
  description:
    "About Khat Vanna — designer and developer portfolio. Selected work and capabilities.",
};

export default function AboutUsPage() {
  return (
    <main>
      <SiteNav />
      <StudioSection />
      <PhilosophySection />
      <FeaturesSection />
      <WhatSetsUsApartSection />
      <AwardsSection />
      <SpeedAdvantageSection />
      <AboutTeamSection />
      <AboutNewsletterSection />
      <FooterSection />
    </main>
  );
}
