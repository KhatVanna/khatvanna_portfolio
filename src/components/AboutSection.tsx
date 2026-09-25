import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black text-white"
    >
      {/* Full-height vertical grid lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 hidden grid-cols-5 md:grid"
      >
        <div className="border-r border-white/8" />
        <div className="border-r border-white/8" />
        <div className="border-r border-white/8" />
        <div className="border-r border-white/8" />
        <div />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1600px] grid-cols-1 gap-12 px-5 py-16 md:grid-cols-12 md:gap-8 md:px-8 md:py-20 lg:gap-10 lg:px-10 lg:py-24">
        {/* Left column */}
        <div className="flex flex-col md:col-span-5 lg:col-span-4 lg:col-start-2">
          <div className="mb-4 flex items-center justify-between gap-4 text-[11px] font-medium tracking-[0.16em] uppercase md:mb-5">
            <span className="flex items-center gap-2 text-white">
              <span className="inline-block h-3 w-px bg-white" aria-hidden />
              About Us
            </span>
            <span className="text-white/55">Since 2020</span>
          </div>

          <div className="relative aspect-4/5 w-full overflow-hidden rounded-[1.25rem] md:rounded-3xl">
            <Image
              src="/images/about.webp"
              alt="Studio display on a rock with luminous amber artwork"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
              priority={false}
            />
          </div>

          <p className="mt-5 max-w-[34ch] text-[13px] leading-relaxed text-white/85 md:mt-6 md:text-sm">
            We bridge the gap between technology and intuitive human experience
            through high-end design and strategic engineering.
          </p>
        </div>

        {/* Right column */}
        <div className="relative flex flex-col justify-between md:col-span-7 lg:col-span-6 lg:col-start-6">
          <h2 className="max-w-[18ch] text-[clamp(1.85rem,4.2vw,3.65rem)] font-semibold leading-[1.12] tracking-[-0.035em]">
            <span className="text-white">
              We help ambitious teams build brands, interfaces, and websites that
              earn attention. From identity to launch, every detail is crafted{" "}
            </span>
            <span className="text-white/25">
              to make your business look confident and perform better.
            </span>
          </h2>

          <div
            aria-hidden
            className="pointer-events-none mt-16 select-none text-[clamp(8rem,22vw,14rem)] font-semibold leading-none text-white/6 md:mt-24"
          >
            ”
          </div>
        </div>
      </div>
    </section>
  );
}
