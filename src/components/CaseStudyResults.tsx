import Image from "next/image";
import type { CaseStat } from "@/data/case-studies";

type CaseStudyResultsProps = {
  image?: string;
  imageAlt?: string;
  body?: string;
  quote?: string;
  quoteAttribution?: string;
  stats: CaseStat[];
  showMedia?: boolean;
};

export default function CaseStudyResults({
  image,
  imageAlt,
  body,
  quote,
  quoteAttribution,
  stats,
  showMedia = true,
}: CaseStudyResultsProps) {
  return (
    <section id="case-results" className="relative overflow-hidden bg-white text-black">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 hidden grid-cols-4 md:grid"
      >
        <div className="border-r border-black/8" />
        <div className="border-r border-black/8" />
        <div className="border-r border-black/8" />
        <div />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 py-10 md:px-8 md:py-16 lg:px-10 lg:py-20">
        {showMedia && image ? (
          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-neutral-200 md:rounded-3xl">
              <Image
                src={image}
                alt={imageAlt ?? ""}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-bottom"
              />
            </div>

            <div className="flex flex-col justify-center md:min-h-full md:py-8">
              {body ? (
                <p className="max-w-[40ch] text-[15px] leading-relaxed text-neutral-600 md:text-base">
                  {body}
                </p>
              ) : null}
              {quote ? (
                <>
                  <blockquote className="mt-8 max-w-[34ch] text-[clamp(1.15rem,2vw,1.45rem)] font-semibold leading-snug tracking-[-0.02em] md:mt-10">
                    &ldquo;{quote}&rdquo;
                  </blockquote>
                  {quoteAttribution ? (
                    <p className="mt-5 text-[11px] tracking-[0.14em] text-neutral-400 uppercase">
                      {quoteAttribution}
                    </p>
                  ) : null}
                </>
              ) : null}
            </div>
          </div>
        ) : null}

        <div
          className={`grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-0 ${
            showMedia && image
              ? "mt-16 border-t border-black/10 pt-12 md:mt-20 md:pt-14 lg:mt-24"
              : ""
          }`}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`md:px-5 lg:px-6 ${i > 0 ? "md:border-l md:border-black/10" : "md:pl-0"}`}
            >
              <p className="text-[clamp(2.5rem,4vw,3.75rem)] font-semibold tracking-[-0.04em]">
                {stat.value}
              </p>
              <p className="mt-3 text-[15px] font-medium tracking-tight md:text-base">
                {stat.label}
              </p>
              <p className="mt-3 max-w-[28ch] text-[13px] leading-relaxed text-neutral-500 md:text-sm">
                {stat.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
