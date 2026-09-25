"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const FRAMES = [
  { src: "/images/showreel/frame-0.webp", alt: "Crystal cube showreel frame", rotate: -18 },
  { src: "/images/services/svc-6.webp", alt: "Desk silhouette showreel frame", rotate: -6 },
  { src: "/images/showreel/frame-2.webp", alt: "Portrait showreel frame", rotate: 4 },
  { src: "/images/services/svc-0.webp", alt: "Golf impact showreel frame", rotate: 14 },
  { src: "/images/services/svc-1.webp", alt: "Brand package showreel frame", rotate: 22 },
];

function clamp(n: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, n));
}

export default function ShowreelSection() {
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
        const p = clamp(-rect.top / total);
        setProgress(p);
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

  // 0–0.45: title splits apart
  const splitT = clamp(progress / 0.45);
  const titleOpacity = clamp(1 - (progress - 0.35) / 0.2);

  // 0.25–1: squares rise and fan
  const cardsT = clamp((progress - 0.22) / 0.55);
  const cardsY = (1 - cardsT) * 40;
  const cardsOpacity = clamp(cardsT * 1.4);
  const fan = cardsT;

  return (
    <section
      id="showreel"
      ref={sectionRef}
      className="relative h-[280vh] bg-black text-white"
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        {/* Collection label — fades in with cards */}
        <div
          className="absolute top-8 left-5 z-20 md:top-10 md:left-8 lg:left-10"
          style={{ opacity: cardsOpacity }}
        >
          <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-[10px] font-semibold tracking-wider">
            AP
          </div>
          <p className="text-[11px] leading-relaxed tracking-[0.12em] text-white/80 uppercase">
            Collection ✦
            <br />
            Sliding Squares X5
            <br />
            1080x1080
            <br />
            <span className="normal-case tracking-normal text-white/55">
              &ldquo;Anagram Template&rdquo;
            </span>
          </p>
        </div>

        {/* SHOW REEL split title */}
        <div
          className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
          style={{ opacity: titleOpacity }}
          aria-hidden={titleOpacity < 0.05}
        >
          <h2 className="flex w-full items-center justify-center overflow-hidden px-2">
            <span
              className="text-[clamp(2.75rem,9vw,7rem)] font-semibold tracking-[0.04em] uppercase will-change-[margin]"
              style={{ marginRight: `${splitT * 42}vw` }}
            >
              Show
            </span>
            <span className="text-[clamp(2.75rem,9vw,7rem)] font-semibold tracking-[0.04em] uppercase">
              Reel
            </span>
          </h2>
        </div>

        {/* Sliding squares fan */}
        <div
          className="relative z-[5] flex flex-1 items-center justify-center px-4"
          style={{
            opacity: cardsOpacity,
            transform: `translateY(${cardsY}vh)`,
          }}
        >
          <div className="relative h-[min(58vw,420px)] w-full max-w-[980px]">
            {FRAMES.map((frame, i) => {
              const mid = (FRAMES.length - 1) / 2;
              const offset = i - mid;
              const x = offset * (72 + fan * 28);
              const y = Math.abs(offset) * (8 - fan * 4) + Math.sin(Math.abs(offset)) * 6;
              const rot = frame.rotate * (0.35 + fan * 0.65);
              const scale = 0.86 + fan * 0.14 - Math.abs(offset) * 0.03;
              const z = 10 - Math.abs(offset);

              return (
                <div
                  key={frame.src}
                  className="absolute top-1/2 left-1/2 aspect-square w-[min(42vw,280px)] overflow-hidden rounded-2xl shadow-2xl will-change-transform"
                  style={{
                    zIndex: z,
                    transform: `translate(-50%, -50%) translate(${x}%, ${y}%) rotate(${rot}deg) scale(${scale})`,
                  }}
                >
                  <Image
                    src={frame.src}
                    alt={frame.alt}
                    fill
                    sizes="280px"
                    className="object-cover"
                    priority={i === 2}
                  />
                </div>
              );
            })}

            {/* Ground glow / dune hint */}
            <div
              aria-hidden
              className="pointer-events-none absolute right-[10%] bottom-[-8%] left-[10%] h-16 rounded-[100%] bg-[#ff6a1a]/20 blur-2xl"
              style={{ opacity: cardsOpacity * 0.8 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
