import Image from "next/image";
import { SITE } from "@/data/site";

export default function StudioSection() {
  return (
    <section id="studio" className="relative overflow-hidden bg-white text-black">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 hidden grid-cols-4 md:grid"
      >
        <div className="border-r border-black/8" />
        <div className="border-r border-black/8" />
        <div className="border-r border-black/8" />
        <div />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 pt-28 pb-16 md:px-8 md:pt-32 md:pb-20 lg:px-10 lg:pt-36 lg:pb-24">
        {/* Giant STUDIO watermark */}
        <div className="relative mb-8 overflow-hidden md:mb-10">
          <h1 className="flex items-center text-[clamp(4.5rem,18vw,14rem)] font-semibold leading-none tracking-[-0.05em] text-black/8 uppercase">
            <span>Portfolio</span>
            <span aria-hidden className="ml-2 inline-flex text-[0.55em] leading-none">
              →
            </span>
          </h1>

          <div className="relative z-[1] mt-[-0.6em] grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-[-0.35em] md:grid-cols-4 md:gap-6">
            <p className="flex items-center gap-2 text-[12px] font-medium tracking-tight md:text-[13px]">
              <span className="inline-block h-3 w-px bg-black" aria-hidden />
              {SITE.name}
            </p>
            <p className="text-[12px] leading-snug text-neutral-700 md:text-[13px]">
              {SITE.roleDetail}
            </p>
            <p className="text-[12px] font-medium tracking-tight md:text-[13px]">
              {SITE.teamName}
            </p>
            <div className="hidden md:block" />
          </div>
        </div>

        {/* Photo mosaic — Kalapak crew + workspace */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4 lg:gap-5">
          <div className="relative col-span-1 aspect-3/4 overflow-hidden rounded-2xl bg-neutral-200">
            <Image src="/images/team/kalapak/rom-chamraeun.jpg" alt="Rom Chamraeun" fill sizes="20vw" className="object-cover object-top grayscale" />
          </div>
          <div className="relative col-span-1 aspect-3/4 overflow-hidden rounded-2xl bg-neutral-200">
            <Image src="/images/team/kalapak/phuem-norng.jpg" alt="Phuem Norng" fill sizes="20vw" className="object-cover object-top grayscale" />
          </div>
          <div className="relative col-span-1 aspect-3/4 overflow-hidden rounded-2xl bg-neutral-200">
            <Image src="/images/team/kalapak/pheun-seanghai.jpg" alt="Pheun Seanghai" fill sizes="20vw" className="object-cover object-top grayscale" />
          </div>
          <div className="relative col-span-1 aspect-3/4 overflow-hidden rounded-2xl bg-neutral-200">
            <Image src="/images/studio/studio-0.webp" alt="Workspace" fill sizes="20vw" className="object-cover grayscale" />
          </div>
          <div className="relative col-span-2 row-span-2 min-h-[280px] overflow-hidden rounded-2xl bg-neutral-200 md:min-h-[420px]">
            <Image src={SITE.photo} alt={SITE.photoAlt} fill sizes="40vw" className="object-cover object-top" priority />
          </div>

          <div className="relative col-span-2 aspect-video overflow-hidden rounded-2xl bg-neutral-200">
            <Image src="/images/studio/studio-2.webp" alt="Creative session" fill sizes="33vw" className="object-cover grayscale" />
          </div>
          <div className="relative col-span-1 aspect-3/4 overflow-hidden rounded-2xl bg-neutral-200">
            <Image src="/images/studio/studio-3.webp" alt="Studio collaboration" fill sizes="20vw" className="object-cover grayscale" />
          </div>
          <div className="relative col-span-1 aspect-3/4 overflow-hidden rounded-2xl bg-neutral-200">
            <Image src="/images/studio/studio-6.webp" alt="Focused work" fill sizes="20vw" className="object-cover grayscale" />
          </div>

          <div className="relative col-span-2 aspect-video overflow-hidden rounded-2xl bg-neutral-200 md:col-span-3">
            <Image src="/images/studio/studio-5.webp" alt="Office discussion" fill sizes="50vw" className="object-cover grayscale" />
          </div>
          <div className="relative col-span-2 aspect-video overflow-hidden rounded-2xl bg-neutral-200 md:col-span-3">
            <Image src="/images/team/kalapak/khat-vanna.jpg" alt={SITE.photoAlt} fill sizes="50vw" className="object-cover object-top grayscale" />
          </div>
        </div>
      </div>
    </section>
  );
}
