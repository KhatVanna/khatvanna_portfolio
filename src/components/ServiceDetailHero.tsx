import Image from "next/image";
import type { ReactNode } from "react";

type ServiceDetailHeroProps = {
  id?: string;
  thumb: string;
  hero: string;
  categories: string[];
  body: string;
  title: ReactNode;
  alt: string;
};

export default function ServiceDetailHero({
  id = "service-detail-hero",
  thumb,
  hero,
  categories,
  body,
  title,
  alt,
}: ServiceDetailHeroProps) {
  return (
    <section id={id} className="relative overflow-hidden bg-white text-black">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 hidden grid-cols-4 md:grid"
      >
        <div className="border-r border-black/8" />
        <div className="border-r border-black/8" />
        <div className="border-r border-black/8" />
        <div />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-5 pt-28 pb-16 md:grid-cols-12 md:gap-8 md:px-8 md:pt-32 md:pb-20 lg:px-10 lg:pt-36 lg:pb-24">
        <div className="flex flex-col md:col-span-4">
          <div className="relative mb-8 aspect-video w-full max-w-[280px] overflow-hidden rounded-xl bg-neutral-200 md:mb-10 md:max-w-none md:rounded-2xl">
            <Image src={thumb} alt="" fill sizes="280px" className="object-cover" priority />
          </div>

          <p className="text-sm font-semibold tracking-tight">Categories</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <li
                key={cat}
                className="rounded-full bg-[#ececec] px-3.5 py-1.5 text-[11px] font-medium tracking-[0.06em] text-black uppercase"
              >
                {cat}
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-[36ch] text-[14px] leading-relaxed text-neutral-500 md:mt-10 md:text-[15px]">
            {body}
          </p>

          <h1 className="mt-auto pt-14 text-[clamp(2.75rem,6vw,5rem)] font-semibold leading-[0.95] tracking-[-0.04em] md:pt-20">
            {title}
          </h1>
        </div>

        <div className="md:col-span-8">
          <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-neutral-200 sm:aspect-square md:aspect-auto md:h-full md:min-h-[560px] md:rounded-[1.25rem] lg:min-h-[640px]">
            <Image
              src={hero}
              alt={alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
