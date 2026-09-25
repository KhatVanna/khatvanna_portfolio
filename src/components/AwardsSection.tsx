const AWARD_GROUPS = [
  {
    org: "Awards",
    items: [
      { title: "Site of the Day", year: "2025" },
      { title: "Developer Award", year: "2024" },
      { title: "Honorable Mention", year: "2024" },
    ],
  },
  {
    org: "Gridly",
    items: [
      { title: "Most Popular UI Kit", year: "2025" },
      { title: "Top Tier Agency", year: "2024" },
      { title: "Shot of the Year", year: "2023" },
    ],
  },
  {
    org: "Siteful",
    items: [
      { title: "Featured in Interaction", year: "2025" },
      { title: "Featured in Graphic Design", year: "2024" },
    ],
  },
  {
    org: "Webbyx",
    items: [{ title: "Site of the Day", year: "2025" }],
  },
  {
    org: "CSSLabs",
    items: [{ title: "Best Digital Agency", year: "2024" }],
  },
];

const TOTAL = AWARD_GROUPS.reduce((sum, g) => sum + g.items.length, 0);

export default function AwardsSection() {
  return (
    <section id="awards" className="relative overflow-hidden bg-black text-white">
      <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 md:py-20 lg:px-10 lg:py-24">
        <p className="mb-6 flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase md:mb-8">
          <span className="inline-block h-3 w-px bg-white" aria-hidden />
          What We Achieved
        </p>

        <div className="mb-14 flex items-end justify-between gap-6 md:mb-20">
          <h2 className="text-[clamp(3.25rem,9vw,7rem)] font-semibold leading-none tracking-[-0.045em]">
            Awwards
          </h2>
          <span className="pb-1 text-[clamp(2.25rem,5.5vw,4.5rem)] font-semibold leading-none tracking-tight text-white/25">
            ({TOTAL})
          </span>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-10 lg:gap-14">
          <div className="border-t border-white/15 pt-6 md:col-span-4 lg:col-span-3">
            <h3 className="text-sm font-semibold tracking-[0.1em] uppercase md:text-[15px]">
              Recognized Excellence
            </h3>
            <p className="mt-4 max-w-[34ch] text-[14px] leading-relaxed text-white/70 md:mt-5 md:text-[15px]">
              Our commitment to quality has earned us accolades from the industry&apos;s most
              prestigious boards.
            </p>
          </div>

          <div className="md:col-span-8 lg:col-span-9">
            <ul>
              {AWARD_GROUPS.map((group) =>
                group.items.map((item, i) => (
                  <li
                    key={`${group.org}-${item.title}-${item.year}`}
                    className="grid grid-cols-[minmax(4.5rem,7rem)_1fr_auto] items-baseline gap-3 border-t border-white/12 py-4 text-[13px] md:grid-cols-[7.5rem_1fr_auto] md:gap-8 md:py-5 md:text-sm"
                  >
                    <span className="font-medium text-white">
                      {i === 0 ? group.org : ""}
                    </span>
                    <span className="font-medium tracking-tight text-white">{item.title}</span>
                    <span className="tabular-nums text-white/40">({item.year})</span>
                  </li>
                )),
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
