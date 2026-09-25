import Image from "next/image";
import type { ReactNode } from "react";

function QuoteIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M7.2 18c-1.7 0-3-1.4-3-3.2 0-2.5 2-5.5 5.8-8.8l1.2 1.3C8.5 9.5 7 11.4 6.6 12.8c.4-.1.8-.2 1.3-.2 1.7 0 3 1.3 3 3s-1.4 3.4-3.7 3.4zm9.5 0c-1.7 0-3-1.4-3-3.2 0-2.5 2-5.5 5.8-8.8l1.2 1.3c-2.7 2.2-4.2 4.1-4.6 5.5.4-.1.8-.2 1.3-.2 1.7 0 3 1.3 3 3s-1.4 3.4-3.7 3.4z" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function AsteriskIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <path d="M12 3.2v17.6M5.2 7.2l13.6 9.6M5.2 16.8l13.6-9.6" />
    </svg>
  );
}

function CardBadge({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black shadow-sm">
      {children}
    </span>
  );
}

function Stars({ color = "orange" }: { color?: "orange" | "black" }) {
  const fill = color === "orange" ? "#F97316" : "#111111";
  return (
    <div className="flex items-center gap-0.5" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5" fill={fill}>
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.52L10 14.9l-4.94 2.83.94-5.52-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function ApproachSection() {
  return (
    <section
      id="approach"
      className="relative overflow-hidden bg-[#f4f4f4] text-black"
    >
      {/* Vertical grid lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 hidden grid-cols-4 md:grid"
      >
        <div className="border-r border-black/8" />
        <div className="border-r border-black/8" />
        <div className="border-r border-black/8" />
        <div />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 py-16 md:px-8 md:py-20 lg:px-10 lg:py-24">
        {/* Header row */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-6">
          <div className="md:col-span-2">
            <p className="mb-6 flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase md:mb-8">
              <span className="inline-block h-3 w-px bg-black" aria-hidden />
              Our Approach
            </p>
            <h2 className="max-w-[10ch] text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
              Strategy-First
            </h2>
            <p className="mt-10 text-[13px] font-semibold tracking-[0.12em] uppercase md:mt-14">
              Our Advantages Include
            </p>
          </div>

          <div className="flex items-end md:col-span-1 md:col-start-3 md:pb-2">
            <p className="max-w-[36ch] text-[15px] leading-relaxed text-neutral-700 md:text-base">
              We don&apos;t just &quot;make things pretty.&quot; We analyze user
              behavior and market trends to build digital products that drive
              measurable growth.
            </p>
          </div>
        </div>

        {/* Advantage cards */}
        <div className="mt-12 grid grid-cols-1 items-start gap-4 md:mt-16 md:grid-cols-4 md:gap-5 lg:mt-20">
          {/* /01 Testimonial */}
          <article className="flex min-h-[340px] flex-col rounded-2xl bg-[#e8e8e8] p-5 md:min-h-[380px] md:p-6">
            <div className="mb-8 flex items-start justify-between">
              <CardBadge>
                <QuoteIcon />
              </CardBadge>
              <span className="text-sm text-neutral-400">/01</span>
            </div>

            <div className="mt-auto">
              <Stars color="orange" />
              <p className="mt-4 text-[1.15rem] font-semibold leading-snug tracking-[-0.02em] md:text-[1.25rem]">
                &ldquo;Khat Vanna transformed our outdated platform into a conversion
                machine.&rdquo;
              </p>

              <div className="mt-8 flex items-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-full bg-neutral-300">
                  <Image
                    src="/images/avatar-mark.webp"
                    alt="Mark T."
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">5.0/5</span>
                    <Stars color="black" />
                  </div>
                  <p className="mt-0.5 text-[11px] tracking-[0.08em] text-neutral-500 uppercase">
                    Mark T. - Cto At Flow
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* /02 Growth — offset lower */}
          <article className="flex min-h-[220px] flex-col rounded-2xl bg-[#e8e8e8] p-5 md:mt-16 md:min-h-[260px] md:p-6 lg:mt-24">
            <div className="mb-10 flex items-start justify-between">
              <CardBadge>
                <RocketIcon />
              </CardBadge>
              <span className="text-sm text-neutral-400">/02</span>
            </div>

            <div className="mt-auto flex items-end justify-between gap-3">
              <p className="text-[clamp(3.5rem,6vw,4.75rem)] font-semibold leading-none tracking-[-0.05em]">
                120%
              </p>
              <p className="pb-1 text-right text-sm font-medium leading-tight text-neutral-700">
                User
                <br />
                Growth
              </p>
            </div>
          </article>

          {/* /03 Features — spans 2 cols */}
          <article className="relative min-h-[340px] overflow-hidden rounded-2xl bg-[#e8e8e8] p-5 md:col-span-2 md:min-h-[380px] md:p-6">
            <div className="relative z-10 mb-6 flex items-start justify-between">
              <CardBadge>
                <AsteriskIcon />
              </CardBadge>
              <span className="text-sm text-neutral-400">/03</span>
            </div>

            <div className="relative z-10 flex h-[calc(100%-3rem)] flex-col justify-between pr-[42%] sm:pr-[46%]">
              <div>
                <p className="text-sm text-neutral-500">Features</p>
                <p className="mt-1 text-[11px] font-semibold tracking-[0.14em] uppercase">
                  End-To-End Process
                </p>
              </div>
              <h3 className="max-w-[8ch] text-[clamp(1.75rem,3.2vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
                Product Ecosystems
              </h3>
            </div>

            <div className="pointer-events-none absolute inset-y-0 right-0 w-[55%] sm:w-[52%]">
              <Image
                src="/images/approach-phone.webp"
                alt="Hand holding phone showing portfolio product UI"
                fill
                sizes="(max-width: 768px) 55vw, 30vw"
                className="object-cover object-[70%_center] [mask-image:linear-gradient(to_bottom,black_70%,transparent)]"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
