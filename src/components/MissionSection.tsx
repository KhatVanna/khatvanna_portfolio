import { KALAPAK } from "@/data/kalapak";

export default function MissionSection() {
  return (
    <section id="mission" className="relative overflow-hidden bg-black text-white">
      <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 md:py-20 lg:px-10 lg:py-24">
        <div className="mb-10 grid grid-cols-1 gap-6 md:mb-14 md:grid-cols-4 md:gap-8">
          <p className="flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase">
            <span className="inline-block h-3 w-px bg-white" aria-hidden />
            Mission
          </p>
          <div className="md:col-span-3">
            <h2 className="max-w-[18ch] text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
              Research. Develop. Inspire. Help.
            </h2>
            <p className="mt-4 max-w-[52ch] text-[14px] leading-relaxed text-white/50">
              {KALAPAK.blurb} From the heart of Cambodia to the digital cosmos — we code, we
              create, we inspire.
            </p>
            <p className="mt-6 max-w-[40ch] text-[15px] font-medium italic leading-snug text-white/80">
              &ldquo;A life lived for others is the only life worth living.&rdquo;
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5 md:gap-4">
          {KALAPAK.mission.map((item) => (
            <article
              key={item.id}
              className="flex min-h-[200px] flex-col justify-between rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10 md:p-6"
            >
              <span className="text-[11px] tracking-[0.14em] text-white/35 uppercase">
                {item.id}
              </span>
              <div>
                <h3 className="text-[15px] font-semibold tracking-tight uppercase">
                  {item.title}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-white/50">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
