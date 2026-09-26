"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/data/site";

export default function HeroSection() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setReady(true);
      return;
    }

    const onDone = () => setReady(true);
    window.addEventListener("kv-intro-done", onDone);

    // Fallback if intro already finished / skipped
    const fallback = window.setTimeout(() => setReady(true), 3800);

    return () => {
      window.removeEventListener("kv-intro-done", onDone);
      window.clearTimeout(fallback);
    };
  }, []);

  const reveal = (delayMs: number) =>
    ({
      opacity: ready ? 1 : 0,
      transform: ready ? "translate3d(0, 0, 0)" : "translate3d(0, 28px, 0)",
      transition: ready
        ? `opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms, transform 0.85s cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms`
        : "none",
    }) as const;

  return (
    <section className="relative h-svh min-h-[640px] overflow-hidden bg-[#0a1628] text-white">
      <div
        className="absolute inset-0"
        style={{
          transform: ready ? "scale(1)" : "scale(1.06)",
          transition: ready
            ? "transform 1.4s cubic-bezier(0.22, 1, 0.36, 1)"
            : "none",
        }}
      >
        <Image
          src={SITE.photo}
          alt={SITE.photoAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_18%] scale-105 md:object-[55%_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />
      </div>

      {/* Shared vertical grid — continuous into About */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] hidden grid-cols-4 opacity-[0.14] md:grid"
      >
        <div className="border-r border-white/40" />
        <div className="border-r border-white/40" />
        <div className="border-r border-white/40" />
        <div />
      </div>

      <div className="relative z-10 flex h-full flex-col pt-[6.75rem] sm:pt-[7.5rem]">
        <div className="relative flex min-h-0 flex-1 flex-col px-5 pb-6 pt-3 sm:pb-8 sm:pt-4 md:px-8 md:pb-10 lg:px-10">
          <p
            className="relative z-[2] shrink-0 text-[10px] font-medium tracking-[0.16em] text-white/70 uppercase sm:text-[11px] sm:tracking-[0.2em]"
            style={reveal(0)}
          >
            {SITE.teamName} · Since {SITE.since}
          </p>

          <div
            className="relative z-[2] mt-[2.5vh] min-h-0 max-w-[14ch] sm:mt-[4vh] md:mt-[5vh]"
            style={reveal(80)}
          >
            <h1 className="text-[clamp(2.5rem,11vw,7.5rem)] font-semibold leading-[0.9] tracking-[-0.045em]">
              <span className="block">Khat</span>
              <span className="block">Vanna</span>
            </h1>
            <p className="mt-3 max-w-[32ch] text-[clamp(0.9rem,3.6vw,1.15rem)] leading-relaxed text-white/85 sm:mt-4 md:mt-5">
              {SITE.roleDetail}. {SITE.tagline}
            </p>
          </div>

          <div
            className="relative z-[2] mt-auto flex shrink-0 flex-col gap-4 pt-6 sm:flex-row sm:items-end sm:justify-between sm:gap-6 sm:pt-8"
            style={reveal(180)}
          >
            <div className="min-w-0 text-[10px] leading-relaxed tracking-[0.08em] uppercase sm:text-[11px]">
              <p className="text-white/70">Email at</p>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-1 block truncate text-[12px] font-medium normal-case tracking-wide text-white hover:opacity-80 sm:text-[13px] md:text-[15px]"
              >
                {SITE.email}
              </a>
            </div>

            <div className="flex shrink-0 flex-col items-stretch gap-4 sm:items-end sm:gap-5 md:gap-6">
              <ul className="hidden space-y-1 text-right text-[13px] font-medium tracking-wide text-white/95 sm:block md:text-sm">
                {SITE.skills.map((skill) => (
                  <li key={skill}>[{skill}]</li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-between gap-4 whitespace-nowrap rounded-full bg-white px-5 py-3 text-[13px] font-medium text-black transition-transform hover:scale-[1.03] sm:w-auto sm:min-w-[180px] sm:gap-8 sm:px-7 sm:py-3.5 sm:text-[15px] md:min-w-[230px] md:px-8 md:py-4"
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
