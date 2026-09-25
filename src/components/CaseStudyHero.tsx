import Image from "next/image";
import type { ReactNode } from "react";

type CaseStudyHeroProps = {
  title: ReactNode;
  image: string;
  alt: string;
  /** Tall CMS composite with baked partner/about content (Aura) */
  variant?: "cover" | "composite";
};

export default function CaseStudyHero({
  title,
  image,
  alt,
  variant = "cover",
}: CaseStudyHeroProps) {
  if (variant === "composite") {
    return (
      <section id="case-hero" className="relative overflow-hidden bg-black text-white">
        <div className="relative mx-auto w-full max-w-[1600px]">
          <div className="relative aspect-3/4 w-full md:aspect-[5/6] lg:aspect-[4/5]">
            <Image
              src={image}
              alt={alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-top"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-black/20"
            />
            <div className="absolute inset-x-0 top-[42%] z-10 px-5 md:top-[40%] md:px-8 lg:px-10">
              <h1 className="max-w-[14ch] text-[clamp(2.5rem,6.5vw,5.75rem)] font-semibold leading-[0.92] tracking-[-0.04em] uppercase drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)]">
                {title}
              </h1>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="case-hero" className="relative min-h-screen overflow-hidden bg-black text-white">
      <Image src={image} alt={alt} fill priority sizes="100vw" className="object-cover" />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-black/70 via-black/25 to-black/40"
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] flex-col justify-end px-5 pb-12 pt-36 md:px-8 md:pb-16 lg:px-10 lg:pb-20">
        <h1 className="max-w-[12ch] text-[clamp(2.75rem,7vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.04em] uppercase">
          {title}
        </h1>
      </div>
    </section>
  );
}
