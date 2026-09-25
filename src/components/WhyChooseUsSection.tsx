import Image from "next/image";
import Link from "next/link";

const FEATURES = [
  "Precision in every layout and interaction",
  "Built with the latest frameworks for speed and scale",
  "Design decisions backed by rigorous user testing",
  "Direct access to the creatives working on your project",
];

const STATS = [
  {
    value: "150+",
    index: "/01",
    title: "Digital Products Launched",
    body: "My work spans a global landscape, delivering high-impact solutions to clients in over 20 countries.",
  },
  {
    value: "$5M+",
    index: "/02",
    title: "In Quantifiable Revenue Growth",
    body: "Through rigorous UX auditing, my digital interventions have directly generated over $50M in value for partners.",
  },
  {
    value: "98%",
    index: "/03",
    title: "Long-Term Partnership Rate",
    body: "I maintain a near-perfect retention rate, evolving brands long after the initial launch.",
  },
];

const AVATARS = [
  "/images/avatar-1.webp",
  "/images/avatar-2.webp",
  "/images/avatar-3.webp",
];

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" />
    </svg>
  );
}

function GrowthCard() {
  const thickBars = [32, 48, 38, 58, 44, 70, 52, 64, 46, 86, 60, 72];
  const thinBars = [42, 58, 36, 72, 50, 90, 62, 48, 78, 54];

  return (
    <div className="flex h-full min-h-[420px] flex-col gap-4 rounded-[1.5rem] bg-[#ececec] p-5 md:min-h-[480px] md:p-6">
      <div className="rounded-2xl bg-white p-5 shadow-sm md:p-6">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-lg font-semibold tracking-tight">Growth</h3>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-100 text-sm">
            ↗
          </span>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-between gap-3">
            <span className="flex items-center gap-2 text-neutral-600">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-neutral-100 text-neutral-500">
                <ClockIcon />
              </span>
              Conversion growth
            </span>
            <span className="font-semibold">+280%</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span className="text-neutral-600">Cost reduction</span>
            <span className="font-semibold">-45%</span>
          </div>
        </div>

        <div className="mt-6 flex h-20 items-end gap-1.5">
          {thickBars.map((h, i) => (
            <div
              key={i}
              className={`flex-1 rounded-sm ${i === 9 ? "bg-[#ff6a1a]" : "bg-black"}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      <div className="mt-auto rounded-2xl bg-white p-5 shadow-sm md:p-6">
        <div className="mb-4 flex h-16 items-end gap-1.5">
          {thinBars.map((h, i) => (
            <div
              key={i}
              className={`w-2 rounded-sm md:w-2.5 ${i === 5 ? "bg-[#ff6a1a]" : "bg-black"}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="flex items-end justify-between gap-4">
          <p className="text-2xl font-semibold tracking-tight md:text-3xl">3.5x ROI</p>
          <div className="text-right text-sm leading-relaxed text-neutral-500">
            <p>120%</p>
            <p>92%</p>
          </div>
        </div>
        <p className="mt-3 text-[11px] tracking-wide text-neutral-500">
          ● Running - 45% &nbsp; ● Walking - 34% &nbsp; ● Cycling - 22%
        </p>
      </div>
    </div>
  );
}

function AiAssistantCard() {
  return (
    <div className="relative h-full min-h-[420px] overflow-hidden rounded-[1.5rem] md:min-h-[480px]">
      <Image
        src="/images/why-team.webp"
        alt="Creative team collaborating"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/15 to-black/10" />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-5 md:p-8">
        <div className="w-full max-w-[380px] rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur-sm">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-medium text-neutral-800">Write or code</p>
            <div className="flex items-center gap-3 text-neutral-400">
              <span className="text-base leading-none">＋</span>
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                <path d="M4 7h16M4 12h10M4 17h14" strokeLinecap="round" />
              </svg>
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <circle cx="8.5" cy="10" r="1.5" />
                <path d="M21 16l-5-5-8 8" />
              </svg>
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                <path d="M12 3a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3z" />
                <path d="M19 11a7 7 0 0 1-14 0M12 18v3" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[320px] rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur-sm">
          <p className="text-sm font-medium text-neutral-800">
            &ldquo;I can help you with anything&rdquo;
          </p>
          <p className="mt-3 text-xs text-neutral-400">Ask anything</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {["Study", "Attach", "Search", "Voice"].map((label) => (
              <span
                key={label}
                className="rounded-full border border-neutral-200 px-3 py-1 text-[11px] text-neutral-600"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-white text-black">
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
        {/* Why Work With Me */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
          <div className="md:col-span-2">
            <p className="mb-16 flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase md:mb-28">
              <span className="inline-block h-3 w-px bg-black" aria-hidden />
              Why Work With Me
            </p>
            <h3 className="max-w-[16ch] text-[clamp(1.35rem,2.4vw,1.85rem)] font-semibold leading-[1.15] tracking-[-0.02em] uppercase">
              Ambitious Brands Trust My Craft
            </h3>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-[clamp(2.5rem,5.5vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
              Elevating Your Identity
            </h2>
            <ul className="mt-8 space-y-3 md:mt-10 md:space-y-3.5">
              {FEATURES.map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[13px] leading-relaxed text-neutral-700 md:text-sm"
                >
                  <span className="mt-0.5 shrink-0 font-medium text-neutral-400">
                    | {String(i + 1).padStart(3, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-2 md:gap-5 lg:mt-20">
          <GrowthCard />
          <AiAssistantCard />
        </div>

        {/* Numbers That Speak */}
        <div className="mt-20 grid grid-cols-1 gap-12 md:mt-28 md:grid-cols-4 md:gap-6 lg:mt-32">
          <div className="flex flex-col justify-between gap-10 md:col-span-1">
            <div>
              <h2 className="max-w-[8ch] text-[clamp(2rem,3.8vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.035em] uppercase">
                Numbers That Speak
              </h2>
              <p className="mt-6 text-[11px] tracking-[0.14em] text-neutral-400 uppercase">
                Over 23K+ Clients
              </p>
              <div className="mt-4 flex items-center">
                {AVATARS.map((src, i) => (
                  <div
                    key={src}
                    className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-neutral-200"
                    style={{ marginLeft: i === 0 ? 0 : -10, zIndex: AVATARS.length - i }}
                  >
                    <Image src={src} alt="" fill sizes="40px" className="object-cover" />
                  </div>
                ))}
                <div
                  className="relative z-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#e8e8e8] text-[10px] font-semibold"
                  style={{ marginLeft: -10 }}
                >
                  +23K
                </div>
              </div>
            </div>

            <div>
              <p className="max-w-[16ch] text-lg font-semibold leading-snug tracking-tight">
                Ready to be my next success story?
              </p>
              <Link
                href="/contact"
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
              >
                Work With Me <span aria-hidden>+</span>
              </Link>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="mb-5 text-[11px] font-medium tracking-[0.16em] text-neutral-400 uppercase">
              Indicator
            </p>
            <p className="max-w-[42ch] text-[clamp(1.15rem,2.2vw,1.65rem)] font-medium leading-snug tracking-[-0.02em]">
              <span className="text-black">
                My impact resonates across a diverse spectrum of global industries, where I
                empower{" "}
              </span>
              <span className="text-black/30">
                ambitious brands to shatter their growth ceilings.
              </span>
            </p>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 md:mt-12 md:gap-4">
              {STATS.map((stat) => (
                <div key={stat.index} className="flex flex-col gap-3">
                  <div className="relative flex min-h-[140px] items-center justify-center rounded-2xl bg-[#ececec] px-5 py-8 md:min-h-[160px]">
                    <span className="absolute top-4 right-4 text-sm text-neutral-400">
                      {stat.index}
                    </span>
                    <p className="text-[clamp(2.5rem,4vw,3.5rem)] font-semibold tracking-[-0.04em]">
                      {stat.value}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white px-4 py-4">
                    <p className="text-right text-sm font-semibold leading-snug tracking-tight">
                      {stat.title}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-[#ececec] px-4 py-5">
                    <p className="text-[13px] leading-relaxed text-neutral-600">{stat.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
