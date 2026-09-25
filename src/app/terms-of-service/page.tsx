import type { Metadata } from "next";
import FooterSection from "@/components/FooterSection";
import SiteNav from "@/components/SiteNav";
import TermsOfServiceSections from "@/components/TermsOfServiceSections";

export const metadata: Metadata = {
  title: "Terms Of Service — Khat Vanna",
  description:
    "Terms of Service for using this portfolio site and engaging Khat Vanna for creative and digital services.",
};

export default function TermsOfServicePage() {
  return (
    <main>
      <SiteNav />
      <TermsOfServiceSections />
      <FooterSection />
    </main>
  );
}
