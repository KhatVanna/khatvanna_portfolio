import type { Metadata } from "next";
import FooterSection from "@/components/FooterSection";
import SiteNav from "@/components/SiteNav";
import StyleGuideSections from "@/components/StyleGuideSections";

export const metadata: Metadata = {
  title: "Style Guide — Khat Vanna",
  description:
    "Portfolio design system — neutral colors, typography scale, and button styles.",
};

export default function StyleGuidePage() {
  return (
    <main>
      <SiteNav />
      <StyleGuideSections />
      <FooterSection />
    </main>
  );
}
