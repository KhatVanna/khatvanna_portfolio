import type { Metadata } from "next";
import ChangelogSections from "@/components/ChangelogSections";
import FooterSection from "@/components/FooterSection";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Changelog — Khat Vanna",
  description: "Product updates and version history for the Khat Vanna portfolio site.",
};

export default function ChangelogPage() {
  return (
    <main>
      <SiteNav />
      <ChangelogSections />
      <FooterSection />
    </main>
  );
}
