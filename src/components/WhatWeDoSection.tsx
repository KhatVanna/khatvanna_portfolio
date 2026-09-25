"use client";

import { useState } from "react";

const ITEMS = [
  {
    title: "User Research",
    body: 'We conduct thorough stakeholder interviews, competitive audits, and user persona mapping to uncover the "why" behind your audience\'s behavior.',
  },
  {
    title: "Wireframing",
    body: 'We conduct thorough stakeholder interviews, competitive audits, and user persona mapping to uncover the "why" behind your audience\'s behavior.',
  },
  {
    title: "Prototyping",
    body: 'We conduct thorough stakeholder interviews, competitive audits, and user persona mapping to uncover the "why" behind your audience\'s behavior.',
  },
];

export default function WhatWeDoSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="what-we-do" className="relative overflow-hidden bg-[#f4f4f4] text-black">
      <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 md:py-20 lg:px-10 lg:py-24">
        <div className="mb-12 grid grid-cols-1 gap-6 border-b border-black/10 pb-10 md:mb-14 md:grid-cols-4 md:gap-8 md:pb-12">
          <p className="flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase">
            <span className="inline-block h-3 w-px bg-black" aria-hidden />
            What We Do
          </p>
          <p className="max-w-[36ch] text-[clamp(1.25rem,2.4vw,1.85rem)] font-medium leading-snug tracking-[-0.02em] text-neutral-400 md:col-span-3 md:col-start-2 lg:max-w-[42ch]">
            At Conax, we believe that great design is invisible; it should feel like a natural
            extension of the user&apos;s intent.
          </p>
        </div>

        <div>
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            const num = String(i + 1).padStart(2, "0");
            return (
              <div key={item.title} className="border-b border-black/10">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start gap-4 py-6 text-left md:gap-8 md:py-8 lg:gap-12"
                >
                  <span
                    className={`shrink-0 font-semibold leading-none tracking-tight transition-all duration-500 ${
                      isOpen
                        ? "pt-1 text-[clamp(2.5rem,5vw,4rem)] text-black/15"
                        : "pt-2 text-[clamp(1.25rem,2vw,1.75rem)] text-black/20"
                    }`}
                  >
                    {num}.
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-[clamp(1.35rem,2.5vw,2rem)] font-semibold tracking-[-0.02em]">
                        {item.title}
                      </h3>
                      <span
                        className="mt-1 shrink-0 text-xl leading-none text-neutral-500"
                        aria-hidden
                      >
                        +
                      </span>
                    </div>

                    <div
                      className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-[52ch] pt-3 text-[14px] leading-relaxed text-neutral-500 md:pt-4 md:text-[15px]">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
