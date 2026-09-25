import type { Metadata } from "next";
import FooterSection from "@/components/FooterSection";
import SiteNav from "@/components/SiteNav";
import TermsOfServiceSections from "@/components/TermsOfServiceSections";

export const metadata: Metadata = {
  title: "Terms Of Service — Conax® Studio",
  description:
    "Terms of Service agreement for engaging Conax creative and digital services.",
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
