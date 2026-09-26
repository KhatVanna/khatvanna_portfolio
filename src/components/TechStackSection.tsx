import { SITE } from "@/data/site";

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="relative overflow-hidden bg-[#0a0a0a] text-white">
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
        <div className="mb-10 grid grid-cols-1 gap-6 border-b border-white/10 pb-8 md:mb-14 md:grid-cols-4 md:gap-8 md:pb-10">
          <p className="flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase">
            <span className="inline-block h-3 w-px bg-white" aria-hidden />
            Tech Stack
          </p>
          <div className="md:col-span-3">
            <h2 className="max-w-[16ch] text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
              Tools I use to build
            </h2>
            <p className="mt-4 max-w-[48ch] text-[14px] leading-relaxed text-white/50">
              Full-stack web, mobile, and data-minded tools — focused on shipping reliable
              products with {SITE.teamName}.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-5">
          {SITE.techGroups.map((group, i) => (
            <article
              key={group.title}
              className="flex min-h-[240px] flex-col justify-between rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10 md:p-7"
            >
              <span className="text-[11px] tracking-[0.14em] text-white/35 uppercase">
                /0{i + 1}
              </span>
              <div>
                <h3 className="text-[15px] font-semibold tracking-tight">{group.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/12 px-3 py-1.5 text-[12px] text-white/75"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
