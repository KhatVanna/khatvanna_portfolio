import type { Metadata } from "next";
import FooterSection from "@/components/FooterSection";
import SiteNav from "@/components/SiteNav";
import WorkGridSection from "@/components/WorkGridSection";
import WorkHeroSection from "@/components/WorkHeroSection";

export const metadata: Metadata = {
  title: "Projects — Khat Vanna",
  description:
    "Explore a curated gallery of projects — brand systems, digital products, and high-end craftsmanship.",
};

export default function WorkPage() {
  return (
    <main>
      <SiteNav />
      <WorkHeroSection />
      <WorkGridSection />
      <FooterSection />
    </main>
  );
}
