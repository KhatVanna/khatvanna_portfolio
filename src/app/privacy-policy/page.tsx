import type { Metadata } from "next";
import FooterSection from "@/components/FooterSection";
import PrivacyPolicySections from "@/components/PrivacyPolicySections";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Privacy Policy — Khat Vanna",
  description:
    "How Khat Vanna collects, uses, and safeguards your information when you visit this portfolio site or get in touch.",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <SiteNav />
      <PrivacyPolicySections />
      <FooterSection />
    </main>
  );
}
