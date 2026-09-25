import Image from "next/image";
import { KALAPAK, KALAPAK_TEAM } from "@/data/kalapak";
import { EDUCATION, EXPERIENCE, SITE } from "@/data/site";

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
              Kalapak Crew
            </p>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
              Meet the people
              <br />
              behind the code
            </h2>
            <p className="mt-5 max-w-[48ch] text-[14px] leading-relaxed text-neutral-600">
              {KALAPAK.blurb}
            </p>
          </div>

          <div className="flex flex-col gap-4 md:items-end md:text-right">
            <a
              href={KALAPAK.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-medium underline-offset-4 hover:underline"
            >
              {KALAPAK.url.replace("https://", "")} ↗
            </a>
            <a
              href={KALAPAK.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-medium underline-offset-4 hover:underline"
            >
              github.com/Kalapak-Team ↗
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
                <div className="border-l pl-3" style={{ borderColor: member.accent }}>
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

        {/* Experience */}
        <div className="mt-20 border-t border-black/10 pt-14 md:mt-24 md:pt-16">
          <p className="mb-8 flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase">
            <span className="inline-block h-3 w-px bg-black" aria-hidden />
            Experience — {SITE.name}
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {EXPERIENCE.map((item) => (
              <article key={item.org} className="rounded-2xl bg-white p-6 md:p-8">
                <p className="text-[11px] tracking-[0.14em] text-neutral-400 uppercase">
                  {item.period}
                </p>
                <h3 className="mt-3 text-lg font-semibold tracking-tight">{item.org}</h3>
                <p className="mt-1 text-sm text-neutral-500">{item.role}</p>
                <ul className="mt-4 space-y-2">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="text-[13px] leading-relaxed text-neutral-600 before:mr-2 before:content-['–']"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-16 border-t border-black/10 pt-14 md:mt-20 md:pt-16">
          <p className="mb-8 flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase">
            <span className="inline-block h-3 w-px bg-black" aria-hidden />
            Education
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {EDUCATION.map((item, i) => (
              <article key={item.school} className="rounded-2xl bg-white p-5 md:p-6">
                <span className="text-[11px] tracking-[0.14em] text-neutral-400 uppercase">
                  /0{i + 1}
                </span>
                <h3 className="mt-4 text-[15px] font-semibold tracking-tight">{item.school}</h3>
                <p className="mt-1 text-[13px] text-neutral-500">{item.detail}</p>
                <p className="mt-3 text-[12px] text-neutral-400">{item.period}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
