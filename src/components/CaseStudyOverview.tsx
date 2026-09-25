import Image from "next/image";
import type { CaseMeta } from "@/data/case-studies";

type CaseStudyOverviewProps = {
  meta: CaseMeta[];
  headline: string;
  body: string;
  image: string;
  imageAlt: string;
};

export default function CaseStudyOverview({
  meta,
  headline,
  body,
  image,
  imageAlt,
}: CaseStudyOverviewProps) {
  return (
    <section id="case-overview" className="relative overflow-hidden bg-white text-black">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 hidden grid-cols-4 md:grid"
      >
        <div className="border-r border-black/8" />
        <div className="border-r border-black/8" />
        <div className="border-r border-black/8" />
        <div />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1600px] grid-cols-1 gap-12 px-5 py-16 md:grid-cols-12 md:gap-8 md:px-8 md:py-24 lg:px-10 lg:py-28">
        <dl className="space-y-6 md:col-span-3 lg:col-span-3">
          {meta.map((item) => (
            <div key={item.label}>
              <dt className="text-[11px] tracking-[0.14em] text-neutral-400 uppercase">
                {item.label}
              </dt>
              <dd className="mt-1.5 whitespace-pre-line text-[14px] font-medium tracking-tight md:text-[15px]">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="hidden md:col-span-1 md:block lg:col-span-2" />

        <div className="md:col-span-8 lg:col-span-7">
          <h2 className="max-w-[28ch] text-[clamp(1.35rem,2.4vw,1.85rem)] font-semibold leading-snug tracking-tight">
            {headline}
          </h2>
          <p className="mt-5 max-w-[52ch] text-[15px] leading-relaxed text-neutral-500 md:mt-6 md:text-base">
            {body}
          </p>

          <div className="relative mt-10 aspect-video overflow-hidden rounded-2xl bg-neutral-200 md:mt-12 md:rounded-[1.25rem]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
