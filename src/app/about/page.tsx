import type { Metadata } from "next";
import AboutTeamSection from "@/components/AboutTeamSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import FooterSection from "@/components/FooterSection";
import MissionSection from "@/components/MissionSection";
import SiteNav from "@/components/SiteNav";
import StudioSection from "@/components/StudioSection";
import TechStackSection from "@/components/TechStackSection";

export const metadata: Metadata = {
  title: "About — Khat Vanna",
  description:
    "About Khat Vanna — Founder & Team Leader of Kalapak Code Team, Computer Science student at Norton University, full-stack developer from Phnom Penh.",
};

export default function AboutUsPage() {
  return (
    <main>
      <SiteNav />
      <StudioSection />
      <ExperienceSection />
      <EducationSection />
      <TechStackSection />
      <AboutTeamSection />
      <MissionSection />
      <FooterSection />
    </main>
  );
}
