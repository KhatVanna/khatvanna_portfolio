import Image from "next/image";
import Link from "next/link";
import { KALAPAK, KALAPAK_TEAM } from "@/data/kalapak";
import { SITE } from "@/data/site";

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
              The Team
            </p>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
              {KALAPAK.name}
            </h2>
            <p className="mt-4 max-w-[48ch] text-[14px] leading-relaxed text-neutral-600">
              {KALAPAK.blurb} Led by {SITE.name} — Founder & Team Leader.
            </p>
            <div className="mt-6 flex items-center">
              {KALAPAK_TEAM.map((m, i) => (
                <div
                  key={m.name}
                  className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-white bg-neutral-200"
                  style={{ marginLeft: i === 0 ? 0 : -10, zIndex: KALAPAK_TEAM.length - i }}
                >
                  <Image src={m.image} alt={m.name} fill sizes="44px" className="object-cover" />
                </div>
              ))}
              <span className="ml-3 text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
                {KALAPAK_TEAM.length}+ Members
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 md:col-span-1 md:items-end md:text-right">
            <p className="max-w-[28ch] text-[13px] leading-relaxed text-neutral-600">
              Since {KALAPAK.since}
              <br />
              <span className="font-medium text-black">{SITE.location}</span>
            </p>
            <a
              href={KALAPAK.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] font-medium tracking-[0.12em] uppercase text-neutral-700 underline-offset-4 hover:underline"
            >
              kalapak-team.space ↗
            </a>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:mt-20 md:gap-5">
          {KALAPAK_TEAM.map((member) => (
            <article
              key={member.name}
              className="relative aspect-4/5 overflow-hidden rounded-2xl bg-white"
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/95 to-transparent px-4 pt-16 pb-4">
                <div
                  className="border-l-2 pl-3"
                  style={{ borderColor: member.accent }}
                >
                  <h3 className="text-sm font-semibold tracking-tight">{member.name}</h3>
                  <p className="mt-0.5 text-[12px] text-neutral-500">{member.role}</p>
                  <p className="text-[11px] text-neutral-400">{member.title}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3 md:mt-12">
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
          >
            About our team
          </Link>
          <a
            href={KALAPAK.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white px-6 py-3.5 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
