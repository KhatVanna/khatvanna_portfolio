"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/data/site";

type Phase = "boot" | "brand" | "hold" | "out" | "curtains" | "done";

export default function PageIntro() {
  const [phase, setPhase] = useState<Phase>("boot");
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setPhase("done");
      setMounted(false);
      window.dispatchEvent(new Event("kv-intro-done"));
      return;
    }

    document.body.style.overflow = "hidden";

    const timers = [
      window.setTimeout(() => setPhase("brand"), 80),
      window.setTimeout(() => setPhase("hold"), 900),
      window.setTimeout(() => setPhase("out"), 1600),
      window.setTimeout(() => setPhase("curtains"), 2100),
      window.setTimeout(() => {
        setPhase("done");
        document.body.style.overflow = "";
        window.dispatchEvent(new Event("kv-intro-done"));
      }, 3400),
      window.setTimeout(() => setMounted(false), 3600),
    ];

    return () => {
      timers.forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted) return null;

  const brandVisible = phase === "brand" || phase === "hold";
  const curtainsUp = phase === "curtains" || phase === "done";

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[200]"
      aria-hidden
      aria-busy={phase !== "done"}
    >
      {/* Four curtain columns */}
      <div className="absolute inset-0 flex">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="relative h-full flex-1 overflow-hidden bg-black"
            style={{
              transform: curtainsUp ? "translate3d(0, -101%, 0)" : "translate3d(0, 0, 0)",
              transition: `transform 1.05s cubic-bezier(0.76, 0, 0.24, 1) ${i * 0.09}s`,
            }}
          >
            {i < 3 && (
              <div className="absolute top-0 right-0 h-full w-px bg-white/[0.14]" />
            )}
          </div>
        ))}
      </div>

      {/* Center brand — Conax-style */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p
          className="text-[clamp(1.75rem,4vw,2.75rem)] font-semibold tracking-tight text-white"
          style={{
            opacity: brandVisible ? 1 : 0,
            transform: brandVisible ? "translateY(0) scale(1)" : "translateY(12px) scale(0.98)",
            transition:
              phase === "brand"
                ? "opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)"
                : "opacity 0.45s ease, transform 0.45s ease",
          }}
        >
          {SITE.name}
        </p>
      </div>
    </div>
  );
}
