import type { Metadata } from "next";
import FooterSection from "@/components/FooterSection";
import PrivacyPolicySections from "@/components/PrivacyPolicySections";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Privacy Policy — Conax® Studio",
  description:
    "How Conax collects, uses, and safeguards your information when you visit our website or use our design services.",
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
