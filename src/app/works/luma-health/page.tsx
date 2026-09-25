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
import { lumaCase } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Luma Health — Conax® Studio",
  description:
    "Luma Health case study — brand identity and digital strategy for Northland Studio, recognized by Awwwards Site of the Day.",
};

export default function LumaHealthPage() {
  const c = lumaCase;

  return (
    <main>
      <SiteNav />
      <CaseStudyHero title={c.title} image={c.heroImage} alt={c.heroAlt} />
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
