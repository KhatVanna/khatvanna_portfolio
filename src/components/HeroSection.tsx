"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SHOWREELS = [
  { id: "001", src: "/images/showreel-1.webp", alt: "Showreel crystal cube" },
  { id: "002", src: "/images/showreel-2.webp", alt: "Showreel abstract form" },
  { id: "003", src: "/images/showreel-3.webp", alt: "Showreel landscape" },
];

function ShowreelCard() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % SHOWREELS.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, []);

  const current = SHOWREELS[index];

  return (
    <div className="relative w-[140px] overflow-hidden rounded-2xl bg-black/55 p-3 shadow-2xl backdrop-blur-md sm:w-[160px] md:w-[180px]">
      <div className="mb-2 flex items-center justify-between text-[10px] tracking-[0.14em] text-white/90 uppercase">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-px bg-white/80" />
          Showreel
        </span>
        <span className="tabular-nums">{current.id}</span>
      </div>
      <div className="relative aspect-square overflow-hidden rounded-xl bg-neutral-900">
        {SHOWREELS.map((item, i) => (
          <Image
            key={item.id}
            src={item.src}
            alt={item.alt}
            fill
            sizes="180px"
            className={`object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            priority={i === 0}
          />
        ))}
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#1a0500] text-white">
      {/* Full-bleed cinematic hero background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.webp"
          alt="Conax hero portrait"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_center] md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
      </div>

      {/* Subtle vertical grid lines */}
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
          {/* Decorative 26 quote mark */}
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[18%] left-0 select-none font-semibold leading-none text-[#ff6a1a]/35 mix-blend-screen sm:bottom-[14%] md:bottom-[10%]"
          >
            <span className="absolute -top-8 left-2 text-[clamp(6rem,18vw,14rem)] leading-none opacity-70 md:-top-12 md:left-4">
              “
            </span>
            <span className="block pl-4 text-[clamp(10rem,32vw,26rem)] tracking-[-0.06em] md:pl-6">
              26
            </span>
          </div>

          <div className="relative z-[2] mt-[4vh] max-w-[10ch] sm:mt-[6vh] md:mt-[8vh]">
            <h1 className="text-[clamp(3.5rem,11vw,8.75rem)] font-semibold leading-[0.88] tracking-[-0.045em]">
              <span className="block">Bold®</span>
              <span className="block">Premier</span>
            </h1>
          </div>

          <div className="absolute right-5 top-[32%] z-[3] sm:right-8 md:right-10 lg:top-[28%]">
            <ShowreelCard />
          </div>

          <div className="relative z-[2] mt-auto flex items-end justify-between gap-6 pt-16">
            <div className="text-[11px] leading-relaxed tracking-[0.08em] uppercase">
              <p className="text-white/70">Email at</p>
              <a
                href="mailto:hello@conaxagency.com"
                className="mt-0.5 block normal-case tracking-wide hover:opacity-80"
              >
                hello@conaxagency.com
              </a>
            </div>

            <div className="flex flex-col items-end gap-5 md:gap-6">
              <ul className="space-y-1 text-right text-[13px] font-medium tracking-wide text-white/95 md:text-sm">
                <li>[Design]</li>
                <li>[Production]</li>
                <li>[Motion]</li>
              </ul>

              <Link
                href="/contact"
                className="inline-flex min-w-[200px] items-center justify-between gap-8 rounded-full bg-white px-7 py-3.5 text-[15px] font-medium text-black transition-transform hover:scale-[1.03] md:min-w-[230px] md:px-8 md:py-4"
              >
                <span>Contact Us</span>
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
