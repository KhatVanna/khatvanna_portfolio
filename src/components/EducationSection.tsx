import { EDUCATION, SITE } from "@/data/site";

export default function EducationSection() {
  return (
    <section id="education" className="relative overflow-hidden bg-[#f4f4f4] text-black">
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
        <div className="mb-10 grid grid-cols-1 gap-8 md:mb-14 md:grid-cols-4 md:gap-6">
          <p className="flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase">
            <span className="inline-block h-3 w-px bg-black" aria-hidden />
            Education
          </p>
          <div className="md:col-span-2">
            <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
              Learning path
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end">
            {SITE.languages.map((lang) => (
              <span
                key={lang.name}
                className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1.5 text-[11px] font-medium tracking-wide"
              >
                {lang.name}
                <span className="ml-1.5 text-neutral-400">{lang.level}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {EDUCATION.map((item, i) => (
            <article
              key={item.school}
              className="flex min-h-[220px] flex-col justify-between rounded-2xl bg-white p-6 md:p-7"
            >
              <span className="text-[11px] tracking-[0.14em] text-neutral-400 uppercase">
                /0{i + 1}
              </span>
              <div>
                <h3 className="text-[clamp(1.15rem,1.8vw,1.35rem)] font-semibold tracking-tight">
                  {item.school}
                </h3>
                <p className="mt-2 text-[13px] text-neutral-500">{item.detail}</p>
                <p className="mt-4 text-[12px] font-medium tracking-wide text-neutral-400">
                  {item.period}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
