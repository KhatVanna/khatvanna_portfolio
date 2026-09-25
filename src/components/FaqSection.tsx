"use client";

import { useState } from "react";
import Link from "next/link";

const FAQS = [
  {
    q: "How long does a typical project take?",
    a: "Our engagement timelines generally range from 4 to 12 weeks, depending on the specific complexity and scope of the digital product.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Conax offers tiered Post-Launch Evolution packages that include everything from security patches and technical maintenance to iterative UX improvements.",
  },
  {
    q: "Can you work with our existing dev team?",
    a: 'Yes, we are highly experienced in integrated workflows and "frictionless handoffs." We utilize Figma as our primary design source of truth.',
  },
  {
    q: "What industries do you specialize in?",
    a: "While our design principles are universal, we possess deep-rooted expertise in high-growth sectors such as Fintech, SaaS, AI-driven platforms.",
  },
  {
    q: "Is your design process collaborative?",
    a: "Our process is built on radical transparency and iterative feedback. We begin with a deep-dive discovery phase to align on your business goals.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-white text-black">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 hidden grid-cols-2 md:grid"
      >
        <div className="border-r border-black/8" />
        <div />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 py-16 md:px-8 md:py-20 lg:px-10 lg:py-24">
        <p className="mb-6 text-[11px] font-medium tracking-[0.16em] text-neutral-400 uppercase md:mb-8">
          Ask Us
        </p>

        <h2 className="mb-10 text-[clamp(3rem,8vw,6rem)] font-semibold leading-none tracking-[-0.04em] md:mb-14">
          FAQs
        </h2>

        <div className="border-t border-black/10">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-b border-black/10">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-6 py-5 text-left md:py-6"
                >
                  <span className="text-[15px] font-medium tracking-tight md:text-base lg:text-lg">
                    {item.q}
                  </span>
                  <span className="mt-0.5 text-xl leading-none text-neutral-500" aria-hidden>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[62ch] pb-6 text-[14px] leading-relaxed text-neutral-500 md:pb-7 md:text-[15px]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-0 grid grid-cols-1 items-center gap-8 border-b border-black/10 py-12 md:grid-cols-2 md:gap-12 md:py-16">
          <p className="flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase">
            <span className="inline-block h-3 w-px bg-black" aria-hidden />
            Specific Question?
          </p>
          <div>
            <h3 className="text-[clamp(2rem,4vw,3.25rem)] font-semibold tracking-[-0.03em] uppercase">
              Contact Us
            </h3>
            <Link
              href="/contact"
              className="mt-6 inline-flex min-w-[220px] items-center justify-center rounded-full bg-black px-8 py-4 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
