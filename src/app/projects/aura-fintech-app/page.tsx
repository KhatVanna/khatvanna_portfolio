import type { Metadata } from "next";
import CaseStudyChallenge from "@/components/CaseStudyChallenge";
import CaseStudyGallery from "@/components/CaseStudyGallery";
import CaseStudyHero from "@/components/CaseStudyHero";
import CaseStudyOverview from "@/components/CaseStudyOverview";
import CaseStudyResults from "@/components/CaseStudyResults";
import CaseStudyShowcase from "@/components/CaseStudyShowcase";
import FaqSection from "@/components/FaqSection";
import FooterSection from "@/components/FooterSection";
import RelatedProjectsSection from "@/components/RelatedProjectsSection";
import SiteNav from "@/components/SiteNav";
import { auraCase } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Aura Fintech App — Khat Vanna",
  description:
    "Aura Fintech App case study — digital strategy and brand identity for a high-growth fintech product, recognized by Awwwards Site of the Day.",
};

export default function AuraFintechAppPage() {
  const c = auraCase;

  return (
    <main>
      <SiteNav />
      <CaseStudyHero
        title={c.title}
        image={c.heroImage}
        alt={c.heroAlt}
        variant={c.heroVariant}
      />
      <CaseStudyOverview
        meta={c.meta}
        headline={c.overviewHeadline}
        body={c.overviewBody}
        image={c.overviewImage}
        imageAlt={c.overviewImageAlt}
      />
      <CaseStudyChallenge
        image={c.challengeImage}
        imageAlt={c.challengeImageAlt}
        lead={c.challengeLead}
        body={c.challengeBody}
      />
      <CaseStudyShowcase
        image={c.showcaseImage}
        imageAlt={c.showcaseImageAlt}
        variant={c.showcaseVariant}
        recognition={c.showcaseRecognition}
        body={c.showcaseBody}
        quote={c.quoteInShowcase ? c.quote : undefined}
        quoteAttribution={c.quoteInShowcase ? c.quoteAttribution : undefined}
      />
      <CaseStudyResults stats={c.stats} showMedia={false} />
      <CaseStudyGallery images={c.gallery} />
      <RelatedProjectsSection projects={c.related} />
      <FaqSection />
      <FooterSection />
    </main>
  );
}
