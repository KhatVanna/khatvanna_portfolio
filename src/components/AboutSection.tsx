"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { SITE } from "@/data/site";

const ABOUT_HEADLINE = `${SITE.name} — Founder & Team Leader of ${SITE.teamName}`;

const ABOUT_BODY =
  "I am a Computer Science student at Norton University and the Founder & Team Leader of Kalapak Code Team. I build full-stack web and mobile products with Python, PHP, Laravel, JavaScript, React, and Flutter — and I lead teams that ship real-world software with purpose. From Phnom Penh to the digital cosmos — I code, I create, I inspire.";

function clamp(n: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, n));
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [progress, setProgress] = useState(0);
  const [entered, setEntered] = useState(false);

  const words = useMemo(() => ABOUT_BODY.split(/\s+/).filter(Boolean), []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setEntered(true);
      setProgress(1);
      return;
    }

    let raf = 0;

    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const vh = window.innerHeight;

        if (rect.top < vh * 0.85) setEntered(true);

        // Word reveal — longer scroll distance = slower light-up (version 2)
        const textEl = textRef.current;
        if (!textEl) return;
        const tRect = textEl.getBoundingClientRect();
        const start = vh * 0.92;
        const end = vh * -0.35;
        const p = clamp((start - tRect.top) / (start - end));
        setProgress(p);
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const reveal = (delayMs: number) =>
    ({
      opacity: entered ? 1 : 0,
      transform: entered ? "translate3d(0, 0, 0)" : "translate3d(0, 36px, 0)",
      transition: entered
        ? `opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms`
        : "none",
    }) as const;

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative z-10 overflow-hidden bg-black text-white"
    >
      {/* Match hero 4-col grid so vertical lines continue across the seam */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 hidden grid-cols-4 md:grid"
      >
        <div className="border-r border-white/10" />
        <div className="border-r border-white/10" />
        <div className="border-r border-white/10" />
        <div />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1600px] grid-cols-1 gap-12 px-5 py-16 pb-28 md:grid-cols-12 md:gap-8 md:px-8 md:py-24 md:pb-36 lg:gap-10 lg:px-10 lg:py-28 lg:pb-44">
        <div className="flex flex-col md:col-span-5 lg:col-span-4 lg:col-start-2">
          <div
            className="mb-4 flex items-center justify-between gap-4 text-[11px] font-medium tracking-[0.16em] uppercase md:mb-5"
            style={reveal(0)}
          >
            <span className="flex items-center gap-2 text-white">
              <span className="inline-block h-3 w-px bg-white" aria-hidden />
              About Me
            </span>
            <span className="text-white/55">Since {SITE.since}</span>
          </div>

          <div
            className="relative aspect-4/5 w-full overflow-hidden rounded-[1.25rem] md:rounded-3xl"
            style={reveal(100)}
          >
            <Image
              src={SITE.photo}
              alt={SITE.photoAlt}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-top"
              style={{
                transform: entered ? `scale(${1.04 - progress * 0.04})` : "scale(1.06)",
                transition: entered ? "transform 0.15s linear" : "none",
              }}
            />
          </div>

          <p
            className="mt-5 max-w-[36ch] text-[13px] leading-relaxed text-white/85 md:mt-6 md:text-sm"
            style={reveal(180)}
          >
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
          <div style={reveal(120)}>
            <p className="mb-5 max-w-[34ch] text-[13px] font-medium tracking-wide text-white/55 md:mb-7 md:text-sm">
              {ABOUT_HEADLINE}
            </p>

            <h2
              ref={textRef}
              className="max-w-[22ch] text-[clamp(1.85rem,4.2vw,3.65rem)] font-semibold leading-[1.2] tracking-[-0.02em]"
            >
              {words.map((word, i) => {
                const start = (i / words.length) * 0.82;
                const window = 0.18;
                const local = clamp((progress - start) / window);
                const opacity = 0.16 + local * 0.84;

                return (
                  <span
                    key={`${word}-${i}`}
                    className="will-change-[opacity]"
                    style={{ opacity }}
                  >
                    {word}
                    {i < words.length - 1 ? " " : ""}
                  </span>
                );
              })}
            </h2>
          </div>

          <div
            aria-hidden
            className="pointer-events-none mt-16 select-none text-[clamp(8rem,22vw,14rem)] font-semibold leading-none text-white/6 md:mt-24"
            style={{
              opacity: entered ? 0.5 + progress * 0.5 : 0,
              transform: entered
                ? `translate3d(0, ${(-1 + progress) * 24}px, 0)`
                : "translate3d(0, 40px, 0)",
              transition: entered ? "opacity 0.6s ease" : "none",
            }}
          >
            ”
          </div>
        </div>
      </div>
    </section>
  );
}
