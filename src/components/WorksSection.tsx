import Image from "next/image";
import Link from "next/link";

const AVATARS = [
  "/images/avatar-1.webp",
  "/images/avatar-2.webp",
  "/images/avatar-3.webp",
];

const PROJECTS = [
  {
    title: "Zenith Brand Refresh",
    date: "Sept 2025",
    image: "/images/works/work-0.webp",
    aspect: "portrait" as const,
    href: "/projects/zenith-brand-refresh",
  },
  {
    title: "Veloce E-Commerce",
    date: "Feb 2025",
    image: "/images/works/work-1.webp",
    aspect: "landscape" as const,
    href: "/projects/veloce-e-commerce",
  },
  {
    title: "Aura Fintech App",
    date: "June 2025",
    image: "/images/approach-phone.webp",
    aspect: "portrait" as const,
    href: "/projects/aura-fintech-app",
  },
  {
    title: "Stellar SaaS Dashboard",
    date: "Nov 2025",
    image: "/images/works/work-3.webp",
    aspect: "landscape" as const,
    href: "/projects/stellar-saas-dashboard",
  },
];

const PARTNER_ICONS = [
  // Simple geometric SVGs matching partner row style
  (props: { className?: string }) => (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <circle cx="20" cy="20" r="12" />
      <path d="M20 8v24M8 20h24" opacity="0.35" />
      <path d="M14 14l12 12" />
    </svg>
  ),
  (props: { className?: string }) => (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M8 28c4-10 8-10 12 0s8 10 12 0" strokeLinecap="round" />
      <path d="M8 22c4-10 8-10 12 0s8 10 12 0" strokeLinecap="round" />
      <path d="M8 16c4-10 8-10 12 0s8 10 12 0" strokeLinecap="round" />
    </svg>
  ),
  (props: { className?: string }) => (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M12 28V16l8-6 8 6v12H12z" />
      <path d="M16 28v-8h8v8" />
    </svg>
  ),
  (props: { className?: string }) => (
    <svg viewBox="0 0 40 40" fill="currentColor" {...props}>
      <path d="M12 10h10c5 0 8 3 8 7.5S27 25 22 25h-4v5h-6V10zm6 10h3.5c1.8 0 3-1 3-2.5S23.3 15 21.5 15H18v5z" />
    </svg>
  ),
  (props: { className?: string }) => (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M20 8l10 6v12l-10 6-10-6V14l10-6z" />
      <path d="M20 16l5 3v6l-5 3-5-3v-6l5-3z" />
    </svg>
  ),
  (props: { className?: string }) => (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M14 12a8 8 0 0 1 0 16M26 12a8 8 0 0 0 0 16" strokeLinecap="round" />
    </svg>
  ),
  (props: { className?: string }) => (
    <svg viewBox="0 0 40 40" fill="currentColor" {...props}>
      {Array.from({ length: 12 }).map((_, i) => (
        <rect
          key={i}
          x="18.5"
          y="6"
          width="3"
          height="8"
          rx="1"
          transform={`rotate(${i * 30} 20 20)`}
        />
      ))}
    </svg>
  ),
  (props: { className?: string }) => (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <circle cx="20" cy="20" r="11" />
      <circle cx="20" cy="20" r="4" />
    </svg>
  ),
];

function Asterisk({ className }: { className?: string }) {
  return (
    <span className={`select-none font-light leading-none ${className ?? ""}`} aria-hidden>
      ✱
    </span>
  );
}

export default function WorksSection() {
  return (
    <section id="projects" className="relative overflow-hidden bg-[#f7f7f7] text-black">
      {/* Vertical grid */}
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
        {/* Projects Showcase intro */}
        <div className="mb-6 flex items-start justify-between gap-6 text-[11px] font-medium tracking-[0.14em] uppercase md:mb-8">
          <p className="leading-relaxed">
            Projects
            <br />
            Showcase
          </p>
          <p className="text-right leading-relaxed">
            Showcase
            <br />
            (&apos;26 Completed)
          </p>
        </div>

        <div className="relative mx-auto max-w-[920px] py-8 text-center md:py-12">
          <Asterisk className="mx-auto mb-6 block text-3xl text-black/20 md:mb-8 md:text-4xl" />

          {/* Floating images */}
          <div className="pointer-events-none absolute top-[8%] right-[2%] z-[1] hidden w-[100px] overflow-hidden rounded-xl shadow-lg sm:block md:right-[4%] md:w-[120px] lg:w-[140px]">
            <div className="relative aspect-square">
              <Image
                src="/images/services/svc-0.webp"
                alt=""
                fill
                sizes="140px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="pointer-events-none absolute top-[28%] left-0 z-[1] w-[120px] overflow-hidden rounded-xl shadow-lg sm:w-[150px] md:left-[-2%] md:w-[180px] lg:w-[210px]">
            <div className="relative aspect-square">
              <Image
                src="/images/showreel/frame-0.webp"
                alt=""
                fill
                sizes="210px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="pointer-events-none absolute right-[6%] bottom-[18%] z-[1] hidden w-[90px] overflow-hidden rounded-xl shadow-lg sm:block md:right-[10%] md:w-[110px]">
            <div className="relative aspect-square">
              <Image
                src="/images/services/svc-4.webp"
                alt=""
                fill
                sizes="110px"
                className="object-cover"
              />
            </div>
          </div>

          <h2 className="relative z-[2] text-[clamp(2.75rem,9vw,7rem)] font-semibold leading-[0.92] tracking-[-0.045em] uppercase">
            <span className="block">More Than</span>
            <span className="block">&ldquo;26+ Builds</span>
            <span className="block text-[#ff5a1f]">Built</span>
            <span className="block">Several</span>
            <span className="block">Digital</span>
            <span className="inline-flex items-end justify-center gap-3">
              Projects
              <span className="mb-2 inline-flex items-center justify-center rounded-xl bg-[#ff5a1f] px-3 py-2 text-black md:mb-3 md:rounded-2xl md:px-4 md:py-2.5">
                <span className="text-[clamp(0.95rem,2vw,1.35rem)] font-semibold tracking-tight">
                  (16)
                </span>
              </span>
            </span>
          </h2>

          <Asterisk className="mx-auto mt-10 block text-3xl text-black/20 md:mt-14 md:text-4xl" />
        </div>

        {/* Selected Work */}
        <div className="mt-16 grid grid-cols-1 gap-8 border-t border-black/10 pt-14 md:mt-24 md:grid-cols-2 md:gap-12 md:pt-16 lg:mt-28">
          <div>
            <h3 className="max-w-[10ch] text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.035em] uppercase">
              Projects
            </h3>
            <div className="mt-6 flex items-center">
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
                className="relative z-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#e4e4e4] text-[10px] font-semibold"
                style={{ marginLeft: -10 }}
              >
                23K
              </div>
            </div>
          </div>
          <p className="max-w-[48ch] self-end text-[15px] leading-relaxed text-neutral-500 md:text-base">
            Explore a curated gallery showcase. Each project is a testament to a commitment to
            high-end craftsmanship, transforming complex business challenges into streamlined
            digital experiences that resonate with a global audience.
          </p>
        </div>

        <div className="mt-12 flex items-center justify-between gap-4 border-b border-black/10 pb-4 md:mt-16">
          <p className="flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase">
            <span className="inline-block h-3 w-px bg-black" aria-hidden />
            Featured Projects
          </p>
          <Link
            href="#works-grid"
            aria-label="View featured projects"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition-transform hover:scale-105"
          >
            <span aria-hidden className="text-lg leading-none">
              ↓
            </span>
          </Link>
        </div>

        {/* Project grid */}
        <div
          id="works-grid"
          className="mt-8 grid grid-cols-1 gap-8 md:mt-10 md:grid-cols-2 md:gap-6 lg:gap-8"
        >
          {PROJECTS.map((project, i) => {
            const card = (
              <>
                <div
                  className={`relative overflow-hidden rounded-2xl bg-neutral-200 md:rounded-3xl ${
                    project.aspect === "portrait" ? "aspect-4/5" : "aspect-4/3"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <h4 className="text-sm font-semibold tracking-[0.04em] uppercase md:text-[15px]">
                    {project.title}
                  </h4>
                  <p className="shrink-0 text-sm tracking-wide text-neutral-500 uppercase">
                    / {project.date}
                  </p>
                </div>
              </>
            );

            return (
              <article key={project.title} className={i % 2 === 1 ? "md:mt-16" : undefined}>
                {"href" in project && project.href ? (
                  <Link href={project.href} className="block transition-opacity hover:opacity-90">
                    {card}
                  </Link>
                ) : (
                  card
                )}
              </article>
            );
          })}
        </div>

        {/* Partners */}
        <div className="mt-20 border-t border-black/10 pt-12 md:mt-28 md:pt-16">
          <p className="mb-10 flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase md:mb-14">
            <span className="inline-block h-3 w-px bg-black" aria-hidden />
            Over 500+ Partner
          </p>

          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-8 text-black/80">
            {PARTNER_ICONS.map((Icon, i) => (
              <Icon key={i} className="h-8 w-8 md:h-9 md:w-9" />
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 border-t border-black/10 pt-10 md:mt-16 md:grid-cols-2 md:gap-12 md:pt-12">
            <p className="max-w-[42ch] text-[15px] leading-relaxed text-neutral-600 md:text-base">
              As Khat Vanna, I take a versatile, collaborative approach — from founders to
              established teams who need design and development in one lane.
            </p>
            <p className="max-w-[42ch] text-[15px] leading-relaxed text-neutral-600 md:text-base">
              My mission is to serve as a strategic catalyst, leveraging cutting-edge technology
              and sophisticated design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
