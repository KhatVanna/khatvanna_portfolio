import type { Metadata } from "next";
import FaqSection from "@/components/FaqSection";
import FooterSection from "@/components/FooterSection";
import SiteNav from "@/components/SiteNav";
import UiUxHeroSection from "@/components/UiUxHeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";

export const metadata: Metadata = {
  title: "UI/UX Design — Khat Vanna",
  description:
    "We craft immersive digital interfaces that prioritize user clarity and seamless navigation across every touchpoint.",
};

export default function UiUxDesignPage() {
  return (
    <main>
      <SiteNav />
      <UiUxHeroSection />
      <WhatWeDoSection />
      <FaqSection />
      <FooterSection />
    </main>
  );
}
