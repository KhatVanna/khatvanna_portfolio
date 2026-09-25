import AboutSection from "@/components/AboutSection";
import ApproachSection from "@/components/ApproachSection";
import AwardsSection from "@/components/AwardsSection";
import BlogSection from "@/components/BlogSection";
import FaqSection from "@/components/FaqSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import ServicesSection from "@/components/ServicesSection";
import ShowreelSection from "@/components/ShowreelSection";
import SiteNav from "@/components/SiteNav";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import WorksSection from "@/components/WorksSection";

export default function Home() {
  return (
    <main>
      <SiteNav />
      <HeroSection />
      <AboutSection />
      <ApproachSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <ShowreelSection />
      <WorksSection />
      <AwardsSection />
      <TestimonialsSection />
      <TeamSection />
      <PricingSection />
      <BlogSection />
      <FaqSection />
      <FooterSection />
    </main>
  );
}
