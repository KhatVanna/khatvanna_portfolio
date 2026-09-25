import type { Metadata } from "next";
import AboutNewsletterSection from "@/components/AboutNewsletterSection";
import BlogArchiveSection from "@/components/BlogArchiveSection";
import BlogHeroSection from "@/components/BlogHeroSection";
import FooterSection from "@/components/FooterSection";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Blog — Conax® Studio",
  description:
    "Insights on design, development, and digital craft from the Conax studio.",
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
