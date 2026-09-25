import Image from "next/image";

type CaseStudyShowcaseProps = {
  image: string;
  imageAlt: string;
  variant?: "framed" | "full";
  recognition: string;
  body?: string;
  quote?: string;
  quoteAttribution?: string;
};

export default function CaseStudyShowcase({
  image,
  imageAlt,
  variant = "framed",
  recognition,
  body,
  quote,
  quoteAttribution,
}: CaseStudyShowcaseProps) {
  return (
    <section id="case-showcase" className="relative overflow-hidden bg-white text-black">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 hidden grid-cols-4 md:grid"
      >
        <div className="border-r border-black/8" />
        <div className="border-r border-black/8" />
        <div className="border-r border-black/8" />
        <div />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-5 py-10 md:grid-cols-2 md:items-end md:gap-12 md:px-8 md:py-16 lg:gap-16 lg:px-10 lg:py-20">
        {variant === "framed" ? (
          <div className="relative overflow-hidden rounded-2xl bg-neutral-900 md:rounded-3xl">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(180,180,190,0.35),transparent_55%),linear-gradient(145deg,#2a2a2e_0%,#0a0a0a_55%,#1a1a1c_100%)]"
            />
            <div className="relative p-4 sm:p-6 md:p-8">
              <div className="relative aspect-3/4 overflow-hidden rounded-xl bg-white shadow-2xl">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="relative aspect-3/4 overflow-hidden rounded-2xl bg-neutral-200 md:rounded-3xl">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        )}

        <div className="md:pb-4">
          <p className="max-w-[36ch] text-[15px] leading-relaxed font-medium tracking-tight md:text-[17px] md:leading-relaxed">
            {recognition}
          </p>
          {body ? (
            <p className="mt-5 max-w-[40ch] text-[14px] leading-relaxed text-neutral-500 md:mt-6 md:text-[15px]">
              {body}
            </p>
          ) : null}
          {quote ? (
            <blockquote className="mt-8 max-w-[34ch] border-l border-black pl-5 text-[clamp(1.05rem,1.8vw,1.3rem)] font-semibold leading-snug tracking-[-0.02em] italic md:mt-10">
              &ldquo;{quote}&rdquo;
              {quoteAttribution ? (
                <footer className="mt-5 text-[11px] font-medium not-italic tracking-[0.14em] text-neutral-400 uppercase">
                  {quoteAttribution}
                </footer>
              ) : null}
            </blockquote>
          ) : null}
        </div>
      </div>
    </section>
  );
}
