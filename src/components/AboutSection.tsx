import Image from "next/image";
import { SITE } from "@/data/site";

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 hidden grid-cols-5 md:grid"
      >
        <div className="border-r border-white/8" />
        <div className="border-r border-white/8" />
        <div className="border-r border-white/8" />
        <div className="border-r border-white/8" />
        <div />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1600px] grid-cols-1 gap-12 px-5 py-16 md:grid-cols-12 md:gap-8 md:px-8 md:py-20 lg:gap-10 lg:px-10 lg:py-24">
        <div className="flex flex-col md:col-span-5 lg:col-span-4 lg:col-start-2">
          <div className="mb-4 flex items-center justify-between gap-4 text-[11px] font-medium tracking-[0.16em] uppercase md:mb-5">
            <span className="flex items-center gap-2 text-white">
              <span className="inline-block h-3 w-px bg-white" aria-hidden />
              About Me
            </span>
            <span className="text-white/55">Since {SITE.since}</span>
          </div>

          <div className="relative aspect-4/5 w-full overflow-hidden rounded-[1.25rem] md:rounded-3xl">
            <Image
              src={SITE.photo}
              alt={SITE.photoAlt}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-top"
            />
          </div>

          <p className="mt-5 max-w-[36ch] text-[13px] leading-relaxed text-white/85 md:mt-6 md:text-sm">
            Computer Science @ {SITE.university}. Founder of{" "}
            <a
              href={SITE.teamUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:opacity-80"
            >
              {SITE.teamName}
            </a>
            .
          </p>
        </div>

        <div className="relative flex flex-col justify-between md:col-span-7 lg:col-span-6 lg:col-start-6">
          <h2 className="max-w-[22ch] text-[clamp(1.85rem,4.2vw,3.65rem)] font-semibold leading-[1.12] tracking-[-0.035em]">
            <span className="text-white">{SITE.bio} </span>
            <span className="text-white/25">
              From Phnom Penh to the digital cosmos — I code, I create, I inspire.
            </span>
          </h2>

          <div
            aria-hidden
            className="pointer-events-none mt-16 select-none text-[clamp(8rem,22vw,14rem)] font-semibold leading-none text-white/6 md:mt-24"
          >
            ”
          </div>
        </div>
      </div>
    </section>
  );
}
