"use client";

import { useState } from "react";
import Link from "next/link";

type Billing = "project" | "monthly";

const PLANS = [
  {
    id: "01",
    title: "The MVP Catalyst",
    description:
      "Designed specifically for early-stage startups and visionary founders, this plan is engineered to take your core concept to market with speed and visual authority.",
    features: [
      "Comprehensive design of 5-8 high-conversion core screens.",
      "High-fidelity prototype ready for user testing",
      "Full visual exploration including a mood board",
      "Layouts optimized for both mobile and desktop",
    ],
    price: { project: 4500, monthly: 3500 },
  },
  {
    id: "02",
    title: "The Partner Plan",
    description:
      "Our most requested tier for established brands looking to redefine their digital presence or scale their current ecosystem.",
    features: [
      "Custom logo architecture, typography systems",
      "End-to-End Product Design",
      "High-performance deployment using modern frameworks",
      "Data-driven UX auditing and A/B testing",
    ],
    price: { project: 12000, monthly: 10000 },
  },
];

function formatPrice(n: number) {
  return n.toLocaleString("en-US");
}

export default function PricingSection() {
  const [billing, setBilling] = useState<Billing>("project");

  return (
    <section id="pricing" className="relative overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 hidden grid-cols-4 md:grid"
      >
        <div className="border-r border-white/8" />
        <div className="border-r border-white/8" />
        <div className="border-r border-white/8" />
        <div />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 py-16 md:px-8 md:py-20 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-6">
          <p className="flex items-center gap-2 self-start text-[11px] font-medium tracking-[0.16em] uppercase md:col-span-1">
            <span className="inline-block h-3 w-px bg-white" aria-hidden />
            Pricing Plan
          </p>
          <h2 className="text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] md:col-span-2 md:col-start-3">
            Pricing
            <br />
            Plans
          </h2>
        </div>

        {/* Billing toggle */}
        <div className="mt-12 flex items-center justify-center gap-3 md:mt-16">
          <button
            type="button"
            onClick={() => setBilling("project")}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
              billing === "project"
                ? "bg-white text-black"
                : "bg-transparent text-white hover:text-white/80"
            }`}
          >
            Per project
          </button>
          <button
            type="button"
            onClick={() => setBilling("monthly")}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
              billing === "monthly"
                ? "bg-white text-black"
                : "bg-transparent text-white hover:text-white/80"
            }`}
          >
            Monthly
          </button>
        </div>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:mt-10 md:grid-cols-2 md:gap-5 lg:gap-6">
          {PLANS.map((plan) => (
            <article
              key={plan.id}
              className="flex flex-col rounded-2xl bg-[#ececec] p-6 text-black md:rounded-3xl md:p-8 lg:p-10"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="max-w-[12ch] text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
                  {plan.title}
                </h3>
                <span className="pt-2 text-sm text-neutral-500">/{plan.id}</span>
              </div>

              <p className="mt-5 max-w-[42ch] text-[14px] leading-relaxed text-neutral-600 md:mt-6 md:text-[15px]">
                {plan.description}
              </p>

              <div className="mt-8 border-t border-black/10 pt-8 md:mt-10 md:pt-10">
                <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-neutral-500">
                  What&apos;s Included
                </p>
                <ul className="mt-5 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-[14px] leading-relaxed text-neutral-800"
                    >
                      <span className="mt-0.5 font-semibold text-[#4f46e5]" aria-hidden>
                        +
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto flex items-end justify-between gap-4 border-t border-black/10 pt-8 md:pt-10">
                <div>
                  <p className="text-[12px] text-neutral-500">Starting at</p>
                  <p className="mt-1 flex items-start">
                    <span className="mt-1.5 mr-0.5 text-base font-semibold leading-none md:mt-2 md:text-lg">
                      $
                    </span>
                    <span
                      key={`${plan.id}-${billing}`}
                      className="text-[clamp(2.5rem,5vw,3.75rem)] font-semibold leading-none tracking-[-0.04em]"
                    >
                      {formatPrice(plan.price[billing])}
                    </span>
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex shrink-0 items-center justify-center rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
                >
                  Get Started
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
