"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const IMAGES = [
  "/images/speed/speed-1.webp",
  "/images/speed/speed-2.webp",
  "/images/speed/speed-3.webp",
  "/images/speed/speed-4.webp",
];

const BODY =
  'In the digital realm, milliseconds matter. I prioritize lean, "clean-code" architecture and advanced caching strategies to ensure social achieves';

function clamp(n: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, n));
}

export default function SpeedAdvantageSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const total = el.offsetHeight - window.innerHeight;
        if (total <= 0) {
          setProgress(0);
          return;
        }
        setProgress(clamp(-rect.top / total));
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const trackX = progress * 55;
  const textY = progress * 55;

  return (
    <section
      id="speed-advantage"
      ref={sectionRef}
      className="relative h-[220vh] bg-[#f4f4f4] text-black"
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 hidden grid-cols-4 md:grid"
        >
          <div className="border-r border-black/8" />
          <div className="border-r border-black/8" />
          <div className="border-r border-black/8" />
          <div />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-1 flex-col px-5 pt-20 md:px-8 md:pt-24 lg:px-10 lg:pt-28">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6 lg:gap-8">
            <div className="md:col-span-2">
              <h2 className="max-w-[14ch] text-[clamp(1.65rem,3.2vw,2.65rem)] font-semibold leading-[1.1] tracking-[-0.03em] uppercase">
                Speed As A Competitive Advantage
              </h2>
            </div>

            <div className="relative h-[140px] overflow-hidden md:col-span-2 md:col-start-3 md:h-[180px]">
              <p className="mb-4 flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase">
                <span className="inline-block h-3 w-px bg-black" aria-hidden />
                Khat Vanna
              </p>
              <div
                className="will-change-transform"
                style={{ transform: `translate3d(0, ${-textY}%, 0)` }}
              >
                <p
                  className="max-w-[42ch] text-[15px] leading-relaxed md:text-[16px] lg:text-[17px]"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, #111 0%, #111 28%, rgba(17,17,17,0.45) 62%, rgba(17,17,17,0.08) 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {BODY}
                </p>
              </div>
            </div>
          </div>

          <div className="relative mt-auto mb-10 overflow-hidden md:mb-14">
            <div
              className="flex w-max gap-4 will-change-transform md:gap-5"
              style={{ transform: `translate3d(-${trackX}%, 0, 0)` }}
            >
              {[...IMAGES, ...IMAGES].map((src, i) => (
                <div
                  key={`${src}-${i}`}
                  className="relative h-[42vh] w-[min(72vw,380px)] shrink-0 overflow-hidden rounded-[1.5rem] bg-neutral-300 md:h-[48vh] md:w-[min(32vw,420px)] md:rounded-[1.75rem]"
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 72vw, 32vw"
                    className="object-cover grayscale"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
