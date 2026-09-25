import Image from "next/image";
import { SITE } from "@/data/site";

const FOCUS_AREAS = [
  { id: "01", label: "Brand & Visual Design" },
  { id: "02", label: "UI/UX & Product" },
  { id: "03", label: "Front-End Development" },
  { id: "04", label: "Design Systems" },
];

const SKILL_CARDS = [
  {
    title: "Design",
    description:
      "Identity systems, art direction, and interfaces that feel intentional from first sketch to final pixel.",
  },
  {
    title: "Development",
    description:
      "Performant, accessible front-end builds with modern stacks — from marketing sites to product UI.",
  },
  {
    title: "Strategy",
    description:
      "Clear positioning, user flows, and content structure so every screen supports a measurable goal.",
  },
  {
    title: "Collaboration",
    description:
      "Direct communication with founders and teams — one point of contact from discovery through launch.",
  },
];

function SkillCard({ title, description }: { title: string; description: string }) {
  return (
    <article className="flex flex-col justify-end rounded-2xl bg-white p-6 md:rounded-[1.25rem] md:p-8">
      <div className="border-l border-black/40 pl-3">
        <h4 className="text-sm font-semibold tracking-tight md:text-[15px]">{title}</h4>
        <p className="mt-3 text-[13px] leading-relaxed text-neutral-600 md:text-[14px]">
          {description}
        </p>
      </div>
    </article>
  );
}

export default function AboutTeamSection() {
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
          <div>
            <p className="flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase">
              <span className="inline-block h-3 w-px bg-black" aria-hidden />
              Profile
            </p>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-[clamp(2.75rem,7vw,5.25rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
              {SITE.name}
              <br />
              CV
            </h2>

            <div className="mt-6 flex items-center">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-[#f4f4f4] bg-neutral-200">
                <Image src={SITE.photo} alt="" fill sizes="40px" className="object-cover" />
              </div>
            </div>
            <p className="mt-3 text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
              {SITE.role}
            </p>
          </div>

          <div className="flex flex-col gap-8 md:items-end md:text-right">
            <p className="max-w-[28ch] text-[13px] leading-relaxed text-neutral-600 md:text-[14px]">
              Designer and developer based in {SITE.location}, focused on brand, product, and web
              experiences that balance craft with clarity.
            </p>
            <ul className="space-y-2">
              {FOCUS_AREAS.map((d) => (
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

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-20 md:grid-cols-4 md:gap-5 lg:mt-24">
          <div className="flex flex-col justify-end pb-2 sm:col-span-2 md:col-span-1 md:pb-4">
            <h3 className="max-w-[12ch] text-[clamp(1.35rem,2.2vw,1.75rem)] font-semibold leading-[1.1] tracking-[-0.02em] uppercase">
              Focus & Skills
            </h3>
            <p className="mt-4 max-w-[28ch] text-[13px] leading-relaxed text-neutral-600">
              A single lead for design and build — from concept through shipped, maintainable code.
            </p>
          </div>

          <article className="relative aspect-3/4 overflow-hidden rounded-2xl bg-white md:rounded-[1.25rem] sm:col-span-2 md:col-span-1">
            <Image
              src={SITE.photo}
              alt={SITE.photoAlt}
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-white via-white/95 to-transparent px-4 pt-16 pb-4 md:px-5 md:pb-5">
              <div className="border-l border-black/40 pl-3">
                <h4 className="text-sm font-semibold tracking-tight md:text-[15px]">{SITE.name}</h4>
                <p className="mt-0.5 text-[12px] text-neutral-500 md:text-[13px]">{SITE.role}</p>
              </div>
            </div>
          </article>

          {SKILL_CARDS.slice(0, 2).map((card) => (
            <SkillCard key={card.title} {...card} />
          ))}
          {SKILL_CARDS.slice(2).map((card) => (
            <SkillCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
