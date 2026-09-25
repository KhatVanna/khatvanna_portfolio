const ENTRIES = [
  {
    date: "12 July, 2026",
    version: "V2.0.0",
    body: "Conax has been updated.\nNew features are coming soon as soon as possible.",
  },
  {
    date: "12 June, 2026",
    version: "V1.0.0",
    body: "Conax has been updated.\nNew features are coming soon as soon as possible.",
  },
] as const;

export default function ChangelogSections() {
  return (
    <>
      <section
        id="changelog-hero"
        className="relative overflow-hidden bg-black text-white"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 hidden grid-cols-4 md:grid"
        >
          <div className="border-r border-white/8" />
          <div className="border-r border-white/8" />
          <div className="border-r border-white/8" />
          <div />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-[1600px] flex-col justify-end px-5 pt-36 pb-16 md:min-h-[75vh] md:px-8 md:pb-20 lg:px-10 lg:pb-24">
          <p className="mb-8 flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase md:mb-10">
            <span className="inline-block h-3 w-px bg-white" aria-hidden />
            Utility Pages
          </p>
          <h1 className="text-[clamp(3rem,12vw,9.5rem)] font-semibold leading-[0.88] tracking-[-0.045em] uppercase">
            Changelog
          </h1>
        </div>
      </section>

      <section
        id="changelog-list"
        className="relative overflow-hidden bg-white text-black"
      >
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
          <ul className="space-y-14 md:space-y-20">
            {ENTRIES.map((entry) => (
              <li
                key={entry.version}
                className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-6"
              >
                <p className="flex items-center gap-2 self-start text-[11px] font-medium tracking-[0.16em] text-neutral-500 uppercase">
                  <span className="inline-block h-3 w-px bg-neutral-400" aria-hidden />
                  {entry.date}
                </p>
                <div className="md:col-span-3">
                  <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em]">
                    {entry.version}
                  </h2>
                  <p className="mt-4 max-w-[42ch] whitespace-pre-line text-[15px] leading-relaxed text-neutral-600 md:mt-5 md:text-base">
                    {entry.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
