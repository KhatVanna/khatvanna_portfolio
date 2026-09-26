import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import PageIntro from "@/components/PageIntro";
import ServicesSection from "@/components/ServicesSection";
import ShowreelSection from "@/components/ShowreelSection";
import SiteNav from "@/components/SiteNav";
import TeamSection from "@/components/TeamSection";
import TechStackSection from "@/components/TechStackSection";
import WorksSection from "@/components/WorksSection";

export default function Home() {
  return (
    <main>
      <PageIntro />
      <SiteNav />

      {/* Conax: sticky Hero, About slides over */}
      <div className="relative">
        <div className="sticky top-0 z-0">
          <HeroSection />
        </div>
        <div className="relative z-10">
          <AboutSection />
        </div>
      </div>

      {/* Skills slides over About */}
      <div className="relative z-10">
        <ServicesSection />
      </div>

      {/* Tech (dark) pinned; Experience (white) slides over */}
      <div className="relative">
        <div className="sticky top-0 z-0">
          <TechStackSection />
        </div>
        <div className="relative z-10">
          <ExperienceSection />
        </div>
      </div>

      {/* Education (gray) over Experience; Showreel (black) over Education */}
      <div className="relative">
        <div className="sticky top-0 z-0">
          <EducationSection />
        </div>
        <div className="relative z-10">
          <ShowreelSection />
        </div>
      </div>

      {/* Projects */}
      <WorksSection />
      {/* Team */}
      <TeamSection />
      {/* Mission */}
      <MissionSection />
      {/* Contact */}
      <FooterSection />
    </main>
  );
}
