"use client";

import { useState } from "react";
import Image from "next/image";

const TESTIMONIALS = [
  {
    headline: "The team at Conax is world-class. They understood our vision instantly.",
    body: "The team at Conax is truly world-class, operating less like an outside agency and more like a core part of our internal leadership. They possessed a rare ability to grasp our complex technical vision instantly, translating abstract ideas into a high-fidelity digital reality that exceeded our highest expectations.",
    rating: "5.0/5",
    name: "Mark T. - Cto At Flow",
    avatar: "/images/avatar-1.webp",
  },
  {
    headline: "A rare blend of artistic talent and technical prowess.",
    body: "Finding a partner that balances high-level creative direction with rigorous engineering is incredibly rare, but Conax delivers exactly that—a rare blend of artistic talent and technical prowess. They didn't just make our platform look beautiful; they built a robust, scalable system that has completely redefined how our customers interact with the Bloom brand.",
    rating: "5.0/5",
    name: "Elena R. - Founder Of Bloom",
    avatar: "/images/avatar-2.webp",
  },
  {
    headline: "The ROI on our redesign was evident within the first month.",
    body: "We approached Conax with a need for a visual refresh, but what we received was a complete strategic overhaul of our user journey. The ROI on our redesign was evident within the very first month, as we saw a measurable spike in conversion rates and a significant decrease in user friction across the board.",
    rating: "5.0/5",
    name: "David K. - Marketing Director At Orbit",
    avatar: "/images/avatar-3.webp",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-0.5" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-3 w-3" fill="#111">
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.52L10 14.9l-4.94 2.83.94-5.52-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const item = TESTIMONIALS[index];

  const prev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#f4f4f4] text-black"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 hidden grid-cols-4 md:grid"
      >
        <div className="border-r border-black/8" />
        <div className="border-r border-black/8" />
        <div className="border-r border-black/8" />
        <div />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[70vh] max-w-[1600px] grid-cols-1 gap-10 px-5 py-16 md:grid-cols-4 md:gap-6 md:px-8 md:py-20 lg:gap-8 lg:px-10 lg:py-24">
        <div className="flex flex-col justify-between gap-10 md:col-span-1">
          <p className="flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase">
            <span className="inline-block h-3 w-px bg-black" aria-hidden />
            Testimonials
          </p>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e4e4e4] text-lg transition-colors hover:bg-[#d8d8d8]"
            >
              ←
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e4e4e4] text-lg transition-colors hover:bg-[#d8d8d8]"
            >
              →
            </button>
          </div>
        </div>

        <div className="relative hidden md:col-span-1 md:block" aria-hidden>
          <span className="absolute top-[12%] left-0 select-none text-[clamp(6rem,14vw,11rem)] font-semibold leading-none text-black/7">
            “
          </span>
        </div>

        <div className="flex flex-col justify-between gap-10 md:col-span-2">
          <div key={index}>
            <h2 className="max-w-[18ch] text-[clamp(1.65rem,3.2vw,2.75rem)] font-semibold leading-[1.15] tracking-[-0.03em]">
              {item.headline}
            </h2>
            <p className="mt-6 max-w-[52ch] text-[14px] leading-relaxed text-neutral-500 md:mt-8 md:text-[15px]">
              &ldquo;{item.body}&rdquo;
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-neutral-300">
              <Image
                src={item.avatar}
                alt={item.name}
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold">{item.rating}</span>
                <Stars />
              </div>
              <p className="mt-0.5 text-[11px] tracking-[0.08em] text-neutral-500 uppercase">
                {item.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
