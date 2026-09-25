import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/data/site";

const FOCUS = [
  { id: "01", label: "UI / UX Design" },
  { id: "02", label: "Web Development" },
  { id: "03", label: "Brand Identity" },
  { id: "04", label: "Digital Strategy" },
];

const HIGHLIGHTS = [
  {
    title: "Design Systems",
    body: "Clear visual language, typography, and components that scale across products.",
  },
  {
    title: "Product Interfaces",
    body: "User-centered flows and interaction details that feel fast and intentional.",
  },
  {
    title: "Front-End Craft",
    body: "Performant Next.js and Tailwind builds with motion that supports the story.",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="relative overflow-hidden bg-[#f4f4f4] text-black">
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
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6 lg:gap-8">
          <div className="md:col-span-1">
            <p className="flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase">
              <span className="inline-block h-3 w-px bg-black" aria-hidden />
              Profile
            </p>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
              {SITE.name}
            </h2>
            <p className="mt-4 text-[15px] font-medium tracking-tight text-neutral-600">
              {SITE.role}
            </p>
            <p className="mt-3 max-w-[42ch] text-[13px] leading-relaxed text-neutral-600">
              A focused practice combining design, development, and strategy — built to
              ship polished digital work with clarity and care.
            </p>
          </div>

          <div className="flex flex-col justify-between gap-10 md:col-span-1">
            <p className="max-w-[28ch] text-[13px] leading-relaxed text-neutral-600 md:ml-auto md:text-right">
              {SITE.locationLine}
              <br />
              <span className="font-medium text-black">{SITE.location}</span>
            </p>
            <ul className="space-y-2 md:text-right">
              {FOCUS.map((d) => (
                <li
                  key={d.id}
                  className="text-[12px] font-medium tracking-[0.12em] uppercase text-neutral-700"
                >
                  /{d.id} {d.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_1.9fr] lg:gap-8 md:mt-20">
          <article className="relative aspect-4/5 overflow-hidden rounded-2xl bg-white md:min-h-[520px] lg:aspect-auto">
            <Image
              src={SITE.photo}
              alt={SITE.photoAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-top"
              priority={false}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/95 to-transparent px-5 pt-20 pb-5">
              <div className="border-l-2 border-black pl-3">
                <h3 className="text-lg font-semibold tracking-tight">{SITE.name}</h3>
                <p className="mt-0.5 text-sm text-neutral-500">{SITE.role}</p>
              </div>
            </div>
          </article>

          <div className="flex flex-col justify-between gap-8">
            <div>
              <h3 className="max-w-[16ch] text-[clamp(1.5rem,2.4vw,2rem)] font-semibold leading-[1.1] tracking-[-0.02em] uppercase">
                What I Bring
              </h3>
              <p className="mt-4 max-w-[42ch] text-[13px] leading-relaxed text-neutral-600">
                End-to-end ownership from concept and identity through interface design
                and production-ready front-end delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {HIGHLIGHTS.map((item, i) => (
                <article
                  key={item.title}
                  className="flex flex-col justify-between rounded-2xl bg-white p-5 md:p-6"
                >
                  <span className="text-[11px] tracking-[0.14em] text-neutral-400 uppercase">
                    /0{i + 1}
                  </span>
                  <div className="mt-10">
                    <h4 className="text-[15px] font-semibold tracking-tight">{item.title}</h4>
                    <p className="mt-2 text-[13px] leading-relaxed text-neutral-600">
                      {item.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex w-full max-w-[280px] items-center justify-center rounded-full bg-black px-5 py-3.5 text-sm font-medium text-white transition-transform hover:scale-[1.02] sm:ml-auto"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
