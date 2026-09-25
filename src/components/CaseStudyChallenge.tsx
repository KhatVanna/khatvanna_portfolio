import Image from "next/image";

type CaseStudyChallengeProps = {
  image: string;
  imageAlt: string;
  lead: string;
  body: string;
};

export default function CaseStudyChallenge({
  image,
  imageAlt,
  lead,
  body,
}: CaseStudyChallengeProps) {
  return (
    <section id="case-challenge" className="relative overflow-hidden bg-white text-black">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 hidden grid-cols-4 md:grid"
      >
        <div className="border-r border-black/8" />
        <div className="border-r border-black/8" />
        <div className="border-r border-black/8" />
        <div />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-10 px-5 py-10 md:grid-cols-2 md:gap-12 md:px-8 md:py-16 lg:gap-16 lg:px-10 lg:py-20">
        <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-neutral-950 md:rounded-3xl">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="md:py-6">
          <p className="text-[15px] leading-relaxed font-medium tracking-tight md:text-[17px] md:leading-relaxed">
            {lead}
          </p>
          <p className="mt-6 text-[14px] leading-relaxed text-neutral-500 md:mt-8 md:text-[15px]">
            {body}
          </p>
        </div>
      </div>
    </section>
  );
}
