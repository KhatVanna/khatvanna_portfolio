import ServiceDetailHero from "@/components/ServiceDetailHero";

export default function UiUxHeroSection() {
  return (
    <ServiceDetailHero
      id="ui-ux-hero"
      thumb="/images/ui-ux/thumb.webp"
      hero="/images/ui-ux/hero.webp"
      categories={["User Research", "Wireframing", "Prototyping"]}
      body="I craft immersive digital interfaces that prioritize user clarity and seamless navigation across every touchpoint."
      title={
        <>
          UI/UX
          <br />
          Design
        </>
      }
      alt="UI/UX Design"
    />
  );
}
