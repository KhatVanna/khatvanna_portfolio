export default function ServicesIntroSection() {
  return (
    <section id="services-intro" className="relative overflow-hidden bg-white text-black">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 hidden grid-cols-4 md:grid"
      >
        <div className="border-r border-black/8" />
        <div className="border-r border-black/8" />
        <div className="border-r border-black/8" />
        <div />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 py-20 md:px-8 md:py-28 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-6 lg:gap-8">
          <div className="hidden md:col-span-1 md:block" />
          <h2 className="max-w-[18ch] text-[clamp(1.85rem,4.2vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.035em] md:col-span-3">
            <span className="text-black">We specialize in</span>
            <br />
            <span className="text-black">the development of corporate</span>
            <br />
            <span className="text-black">websites, online </span>
            <span className="text-black/25">services and</span>
            <br />
            <span className="text-black/25">online stores.</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
