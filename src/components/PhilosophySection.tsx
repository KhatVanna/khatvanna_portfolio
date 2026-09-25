import Image from "next/image";

const AVATARS = [
  "/images/avatar-1.webp",
  "/images/avatar-2.webp",
  "/images/avatar-3.webp",
];

const STATS = [
  {
    value: "$5M+",
    index: "/01",
    title: "In Quantifiable Revenue Growth",
    body: "Through rigorous UX auditing, our digital interventions have directly generated over $50M in value for our partners.",
  },
  {
    value: "98%",
    index: "/02",
    title: "Long-Term Partnership Rate",
    body: "We maintain a near-perfect retention rate, evolving brands long after the initial launch.",
  },
];

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="relative overflow-hidden bg-black text-white">
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
        {/* Intro row */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6 lg:gap-8">
          <div className="md:col-span-1">
            <p className="flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase">
              <span className="inline-block h-3 w-px bg-white" aria-hidden />
              Our Philosophy
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-3">
            <h2 className="max-w-[16ch] text-[clamp(1.75rem,3.5vw,2.85rem)] font-semibold leading-[1.12] tracking-[-0.03em]">
              We help ambitious teams build brands, interfaces & website.
            </h2>
            <p className="mt-5 max-w-[42ch] text-[14px] leading-relaxed text-white/55 md:mt-6 md:text-[15px]">
              We bridge the gap between technology and intuitive human experience through
              high-end design and strategic engineering.
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-1 items-start gap-12 md:mt-20 md:grid-cols-4 md:gap-6 lg:mt-24 lg:gap-8">
          <div className="md:col-span-1">
            <h3 className="text-[clamp(1.35rem,2.4vw,1.85rem)] font-semibold leading-[1.15] tracking-[-0.02em] uppercase">
              <span className="text-white/40">Over </span>
              <span className="text-white">10+ Years</span>
              <br />
              <span className="text-white/40">In Industry</span>
            </h3>

            <p className="mt-8 text-[11px] tracking-[0.14em] text-white/45 uppercase">
              Over 23K+ Clients
            </p>
            <div className="mt-4 flex items-center">
              {AVATARS.map((src, i) => (
                <div
                  key={src}
                  className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-black bg-neutral-300"
                  style={{ marginLeft: i === 0 ? 0 : -10, zIndex: AVATARS.length - i }}
                >
                  <Image src={src} alt="" fill sizes="40px" className="object-cover" />
                </div>
              ))}
              <div
                className="relative z-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-white text-[10px] font-semibold text-black"
                style={{ marginLeft: -10 }}
              >
                23K
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:col-span-3 md:gap-4">
            {STATS.map((stat) => (
              <div key={stat.index} className="flex flex-col gap-3">
                <div className="relative flex min-h-[140px] items-center justify-center rounded-2xl bg-[#ececec] px-5 py-8 text-black md:min-h-[160px]">
                  <span className="absolute top-4 right-4 text-sm text-neutral-400">
                    {stat.index}
                  </span>
                  <p className="text-[clamp(2.75rem,5vw,4rem)] font-semibold tracking-[-0.04em]">
                    {stat.value}
                  </p>
                </div>
                <div className="flex min-h-[160px] flex-col justify-between rounded-2xl bg-[#ececec] px-5 py-5 text-black md:min-h-[180px] md:px-6 md:py-6">
                  <p className="text-right text-sm font-semibold leading-snug tracking-tight md:text-[15px]">
                    {stat.title}
                  </p>
                  <p className="mt-8 max-w-[36ch] text-[13px] leading-relaxed text-neutral-600 md:text-[14px]">
                    {stat.body}
                  </p>
                </div>
              </div>
            ))}

            {/* /03 full width */}
            <div className="relative flex min-h-[180px] flex-col justify-between gap-10 rounded-2xl bg-[#ececec] px-5 py-6 text-black sm:col-span-2 md:min-h-[200px] md:px-8 md:py-8">
              <span className="absolute top-5 right-5 text-sm text-neutral-400">/03</span>
              <p className="text-[clamp(2.75rem,5vw,4rem)] font-semibold tracking-[-0.04em]">
                150+
              </p>
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-10">
                <p className="text-sm font-semibold tracking-tight md:text-[15px]">
                  Digital Products
                  <br className="hidden md:block" /> Launched
                </p>
                <p className="max-w-[42ch] text-[13px] leading-relaxed text-neutral-600 md:text-right md:text-[14px]">
                  Our portfolio spans a global landscape, delivering high-impact solutions to
                  clients in over 20 countries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
