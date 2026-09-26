import Image from "next/image";
import { KALAPAK, KALAPAK_TEAM } from "@/data/kalapak";
import { SITE } from "@/data/site";

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
              Cosmic Crew
            </p>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
              Meet the people
              <br />
              behind the code
            </h2>
            <p className="mt-5 max-w-[48ch] text-[14px] leading-relaxed text-neutral-600">
              {KALAPAK.blurb} Led by {SITE.name}.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:items-end md:text-right">
            <a
              href={KALAPAK.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-medium underline-offset-4 hover:underline"
            >
              kalapak-team.space ↗
            </a>
            <a
              href={KALAPAK.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-medium underline-offset-4 hover:underline"
            >
              github.com/Kalapak-Team ↗
            </a>
            <a
              href={`mailto:${KALAPAK.email}`}
              className="text-[13px] font-medium underline-offset-4 hover:underline"
            >
              {KALAPAK.email}
            </a>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-5">
          {KALAPAK_TEAM.map((member) => (
            <article
              key={member.name}
              className="relative aspect-3/4 overflow-hidden rounded-2xl bg-white md:rounded-[1.25rem]"
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/95 to-transparent px-4 pt-16 pb-4 md:px-5 md:pb-5">
                <div className="border-l-2 pl-3" style={{ borderColor: member.accent }}>
                  <h3 className="text-sm font-semibold tracking-tight md:text-[15px]">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 text-[12px] text-neutral-500 md:text-[13px]">
                    {member.role}
                  </p>
                  <p className="text-[11px] text-neutral-400">{member.title}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
