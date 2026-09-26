import { EXPERIENCE } from "@/data/site";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative overflow-hidden bg-white text-black">
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
        <div className="mb-10 flex items-end justify-between gap-6 border-b border-black/10 pb-6 md:mb-14 md:pb-8">
          <div>
            <p className="mb-4 flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase">
              <span className="inline-block h-3 w-px bg-black" aria-hidden />
              CV
            </p>
            <h2 className="text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
              Experience
            </h2>
          </div>
          <span className="pb-1 text-[clamp(1.5rem,3vw,2.5rem)] font-semibold text-black/15">
            (0{EXPERIENCE.length})
          </span>
        </div>

        <div className="space-y-0">
          {EXPERIENCE.map((item, i) => (
            <article
              key={item.org}
              className="grid grid-cols-1 gap-4 border-b border-black/10 py-8 md:grid-cols-12 md:gap-8 md:py-10"
            >
              <p className="text-[12px] tracking-[0.12em] text-neutral-400 uppercase md:col-span-2">
                /{String(i + 1).padStart(2, "0")}
              </p>
              <div className="md:col-span-3">
                <p className="text-[13px] font-medium text-neutral-500">{item.period}</p>
                <h3 className="mt-2 text-[clamp(1.25rem,2vw,1.65rem)] font-semibold tracking-[-0.02em]">
                  {item.org}
                </h3>
                <p className="mt-1 text-sm text-neutral-500">{item.role}</p>
              </div>
              <ul className="space-y-2 md:col-span-7">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="text-[15px] leading-relaxed text-neutral-600 before:mr-2 before:text-neutral-300 before:content-['–']"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
