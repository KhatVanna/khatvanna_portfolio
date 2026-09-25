import Image from "next/image";

const FEATURES = [
  {
    title: (
      <>
        High-Velocity
        <br />
        Performance Engineering
      </>
    ),
    body: 'Our engineering team prioritizes lean, "clean-code" architecture and advanced caching strategies',
    image: "/images/features/engineering.webp",
    wide: true,
  },
  {
    title: (
      <>
        Adaptive
        <br />
        Design Systmes
      </>
    ),
    body: "We don't just deliver static pages; we build living, breathing design systems.",
    image: "/images/features/systems.webp",
    wide: false,
  },
  {
    title: (
      <>
        Data- Informed
        <br />
        User Experience (UX)
      </>
    ),
    body: "Our design decisions are rooted in objective reality, not just creative intuition.",
    image: "/images/features/ux.webp",
    wide: false,
  },
];

export default function ConaxFeaturesSection() {
  return (
    <section id="conax-features" className="relative overflow-hidden bg-white text-black">
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
          <div className="md:col-span-1">
            <p className="flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase">
              <span className="inline-block h-3 w-px bg-black" aria-hidden />
              Conax Features
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-3">
            <h2 className="text-[clamp(1.5rem,2.8vw,2.15rem)] font-semibold leading-[1.15] tracking-[-0.02em] uppercase">
              <span className="text-black/35">Over </span>
              <span className="text-black">10+ Years </span>
              <span className="text-black/35">In Industry</span>
            </h2>
            <p className="mt-4 max-w-[34ch] text-[14px] leading-relaxed text-black/45 md:text-[15px]">
              Every project we take on is designed for long-term success.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-4 md:gap-5 lg:mt-20">
          {FEATURES.map((feature) => (
            <article
              key={feature.image}
              className={`relative min-h-[420px] overflow-hidden rounded-[1.75rem] bg-black text-white md:min-h-[520px] lg:min-h-[560px] ${
                feature.wide ? "md:col-span-2" : "md:col-span-1"
              }`}
            >
              <Image
                src={feature.image}
                alt=""
                fill
                sizes={feature.wide ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
                className="object-cover grayscale"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/75"
              />
              <div className="relative z-10 flex h-full min-h-[420px] flex-col justify-between p-6 md:min-h-[520px] md:p-7 lg:min-h-[560px] lg:p-8">
                <h3 className="max-w-[16ch] text-[15px] font-semibold leading-snug tracking-[-0.01em] uppercase md:text-[16px] lg:text-[17px]">
                  {feature.title}
                </h3>
                <p className="max-w-[36ch] text-[13px] leading-relaxed text-white/70 md:text-[14px]">
                  {feature.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
