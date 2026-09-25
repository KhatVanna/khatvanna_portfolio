import type { Metadata } from "next";
import AboutNewsletterSection from "@/components/AboutNewsletterSection";
import BlogArchiveSection from "@/components/BlogArchiveSection";
import BlogHeroSection from "@/components/BlogHeroSection";
import FooterSection from "@/components/FooterSection";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Blog — Khat Vanna",
  description:
    "Notes on design, development, and digital craft from Khat Vanna.",
};

export default function BlogPage() {
  return (
    <main>
      <SiteNav />
      <BlogHeroSection />
      <BlogArchiveSection />
      <AboutNewsletterSection />
      <FooterSection />
    </main>
  );
}
