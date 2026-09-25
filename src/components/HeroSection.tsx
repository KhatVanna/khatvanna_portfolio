"use client";

import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/data/site";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a1628] text-white">
      <div className="absolute inset-0">
        <Image
          src={SITE.photo}
          alt={SITE.photoAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_18%] scale-105 md:object-[55%_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] grid grid-cols-4 opacity-[0.12]"
      >
        <div className="border-r border-white/40" />
        <div className="border-r border-white/40" />
        <div className="border-r border-white/40" />
        <div />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col pt-[7.5rem]">
        <div className="relative flex flex-1 flex-col px-5 pb-8 pt-6 md:px-8 md:pb-10 lg:px-10">
          <p className="relative z-[2] text-[11px] font-medium tracking-[0.2em] text-white/70 uppercase">
            Portfolio &amp; CV
          </p>

          <div className="relative z-[2] mt-[4vh] max-w-[14ch] sm:mt-[6vh] md:mt-[8vh]">
            <h1 className="text-[clamp(3.25rem,10vw,8rem)] font-semibold leading-[0.9] tracking-[-0.045em]">
              <span className="block">Khat</span>
              <span className="block">Vanna</span>
            </h1>
            <p className="mt-5 max-w-[28ch] text-[clamp(1rem,1.6vw,1.2rem)] leading-relaxed text-white/85">
              {SITE.role} crafting brands, interfaces, and websites that earn attention.
            </p>
          </div>

          <div className="relative z-[2] mt-auto flex items-end justify-between gap-6 pt-16">
            <div className="text-[11px] leading-relaxed tracking-[0.08em] uppercase">
              <p className="text-white/70">Email at</p>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-0.5 block normal-case tracking-wide hover:opacity-80"
              >
                {SITE.email}
              </a>
            </div>

            <div className="flex flex-col items-end gap-5 md:gap-6">
              <ul className="space-y-1 text-right text-[13px] font-medium tracking-wide text-white/95 md:text-sm">
                {SITE.skills.map((skill) => (
                  <li key={skill}>[{skill}]</li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-flex min-w-[200px] items-center justify-between gap-8 rounded-full bg-white px-7 py-3.5 text-[15px] font-medium text-black transition-transform hover:scale-[1.03] md:min-w-[230px] md:px-8 md:py-4"
              >
                <span>Contact Me</span>
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
