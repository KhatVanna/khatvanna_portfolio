import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import ServicesSection from "@/components/ServicesSection";
import SiteNav from "@/components/SiteNav";
import TeamSection from "@/components/TeamSection";
import TechStackSection from "@/components/TechStackSection";
import WorksSection from "@/components/WorksSection";

export default function Home() {
  return (
    <main>
      <SiteNav />
      {/* 01 Hero */}
      <HeroSection />
      {/* 02 About */}
      <AboutSection />
      {/* 03 Skills */}
      <ServicesSection />
      {/* 04 Tech Stack */}
      <TechStackSection />
      {/* 05 Experience */}
      <ExperienceSection />
      {/* 06 Education & Languages */}
      <EducationSection />
      {/* 07 Projects */}
      <WorksSection />
      {/* 08 Team */}
      <TeamSection />
      {/* 09 Mission */}
      <MissionSection />
      {/* 10 Contact */}
      <FooterSection />
    </main>
  );
}
