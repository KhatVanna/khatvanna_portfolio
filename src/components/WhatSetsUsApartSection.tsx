function LevelBars({ level }: { level: number }) {
  return (
    <div className="flex items-end gap-[3px]" aria-hidden>
      {Array.from({ length: 6 }, (_, i) => (
        <span
          key={i}
          className={`h-3.5 w-[3px] rounded-[1px] ${
            i < level ? "bg-[#ff5a00]" : "bg-black/12"
          }`}
        />
      ))}
    </div>
  );
}

function IconBulb() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M9 18h6M10 21h4" strokeLinecap="round" />
      <path d="M12 3a6 6 0 0 0-3.5 10.8c.6.45 1 1.1 1.1 1.8h4.8c.1-.7.5-1.35 1.1-1.8A6 6 0 0 0 12 3Z" />
    </svg>
  );
}

function IconCompass() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2.2 5.8-5.8 2.2 2.2-5.8 5.8-2.2Z" />
    </svg>
  );
}

function IconLayers() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 16 9 5 9-5" />
    </svg>
  );
}

function IconChat() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M7 15H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v2" />
      <path d="M9 10h10a2 2 0 0 1 2 2v7l-3.5-2.5H9a2 2 0 0 1-2-2v-2.5A2 2 0 0 1 9 10Z" />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M13 2 4 14h7l-1 8 10-12h-7l1-8Z" strokeLinejoin="round" />
    </svg>
  );
}

function IconPulse() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M3 12h4l2.5-6 3 12 2.5-6H21" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const CARDS = [
  {
    title: "Ideas With Purpose",
    body: "My work spans a global landscape, delivering high-impact solutions to clients in over 20 countries.",
    level: 1,
    wide: true,
    Icon: IconBulb,
  },
  {
    title: "Clear Creative Direction",
    body: "Every project starts with a focused vision that keeps strategy and design aligned.",
    level: 2,
    wide: false,
    Icon: IconCompass,
  },
  {
    title: "Built As One System",
    body: "Every touchpoint works together as one cohesive experience.",
    level: 3,
    wide: false,
    Icon: IconLayers,
  },
  {
    title: "Close Collaboration",
    body: "Keeping communication open throughout the entire process.",
    level: 4,
    wide: false,
    Icon: IconChat,
  },
  {
    title: "Fast Without Compromise",
    body: "A focused process helps me move efficiently while maintaining standard.",
    level: 5,
    wide: false,
    Icon: IconBolt,
  },
  {
    title: "Designed To Perform",
    body: "I create work that looks distinctive while supporting stronger engagement and business growth.",
    level: 6,
    wide: true,
    Icon: IconPulse,
  },
];

export default function WhatSetsUsApartSection() {
  return (
    <section id="what-sets-us-apart" className="relative overflow-hidden bg-[#f7f7f7] text-black">
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-6 lg:gap-8">
          <div className="md:col-span-2">
            <p className="flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase">
              <span className="inline-block h-3 w-px bg-black" aria-hidden />
              Why Work With Me
            </p>
            <h2 className="mt-6 max-w-[10ch] text-[clamp(2.4rem,5vw,4.25rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
              What Sets Us Apart
            </h2>
          </div>

          <div className="flex items-end md:col-span-2 md:col-start-3">
            <p className="max-w-[40ch] text-[14px] leading-relaxed text-black/55 md:text-[15px]">
              I combine clear thinking, strong ideas, and thoughtful execution to create work that
              feels distinctive and delivers real value.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-16 md:grid-cols-4 md:gap-5 lg:mt-20">
          {CARDS.map(({ title, body, level, wide, Icon }) => (
            <article
              key={title}
              className={`flex min-h-[240px] flex-col justify-between rounded-2xl bg-[#ececec] p-6 md:min-h-[280px] md:p-7 lg:p-8 ${
                wide ? "md:col-span-2" : "md:col-span-1"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-sm">
                  <Icon />
                </span>
                <LevelBars level={level} />
              </div>

              <div className="mt-10">
                <h3 className="text-[17px] font-semibold tracking-tight md:text-[18px]">{title}</h3>
                <p className="mt-3 max-w-[36ch] text-[13px] leading-relaxed text-black/50 md:text-[14px]">
                  {body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
