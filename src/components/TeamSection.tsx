import Image from "next/image";
import Link from "next/link";

const DEPARTMENTS = [
  { id: "01", label: "Design" },
  { id: "02", label: "Engineering" },
  { id: "03", label: "Operations" },
  { id: "04", label: "Strategy" },
];

const MEMBERS = [
  {
    name: "Aris Thorne",
    role: "Creative Technologist",
    image: "/images/team/member-0.webp",
  },
  {
    name: "Chloe Whitmore",
    role: "Director of Client Success",
    image: "/images/team/member-1.webp",
  },
  {
    name: "Viktor Petrov",
    role: "Lead UX Researcher",
    image: "/images/team/member-2.webp",
  },
  {
    name: "Sarah Jenkins",
    role: "Senior UX Researcher",
    image: "/images/team/member-3.webp",
  },
  {
    name: "David Jones",
    role: "Lead Full-Stack Engineer",
    image: "/images/team/member-4.webp",
  },
];

const AVATAR_STACK = MEMBERS.slice(0, 4).map((m) => m.image);

export default function TeamSection() {
  return (
    <section id="team" className="relative overflow-hidden bg-[#f4f4f4] text-black">
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
        {/* Header row */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6 lg:gap-8">
          <div className="md:col-span-1">
            <p className="flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase">
              <span className="inline-block h-3 w-px bg-black" aria-hidden />
              The Team
            </p>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
              Conax® Member
            </h2>

            <div className="mt-6 flex items-center">
              {AVATAR_STACK.map((src, i) => (
                <div
                  key={src}
                  className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-white bg-neutral-200"
                  style={{ marginLeft: i === 0 ? 0 : -10, zIndex: AVATAR_STACK.length - i }}
                >
                  <Image src={src} alt="" fill sizes="44px" className="object-cover" />
                </div>
              ))}
              <div
                className="relative z-0 flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-[#e4e4e4] text-[11px] font-semibold"
                style={{ marginLeft: -10 }}
              >
                +5
              </div>
            </div>
            <p className="mt-3 text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
              Most Talented People
            </p>
          </div>

          <div className="flex flex-col justify-between gap-10 md:col-span-1">
            <p className="max-w-[28ch] text-[13px] leading-relaxed text-neutral-600 md:ml-auto md:text-right">
              A diverse team of designers, developers, and strategists obsessed with
              perfection.
            </p>
            <ul className="space-y-2 md:text-right">
              {DEPARTMENTS.map((d) => (
                <li
                  key={d.id}
                  className="text-[12px] font-medium tracking-[0.12em] uppercase text-neutral-700"
                >
                  /{d.id} {d.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Members grid */}
        <div className="relative mt-14 md:mt-20">
          <span
            aria-hidden
            className="pointer-events-none absolute top-[40%] -left-1 hidden -translate-y-1/2 text-[clamp(4rem,10vw,8rem)] font-semibold leading-none text-black/8 lg:block"
          >
            (12)
          </span>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_3fr] lg:gap-6">
            <div>
              <h3 className="max-w-[12ch] text-[clamp(1.5rem,2.4vw,2rem)] font-semibold leading-[1.1] tracking-[-0.02em] uppercase">
                The Minds Behind Pixels
              </h3>
              <p className="mt-4 max-w-[28ch] text-[13px] leading-relaxed text-neutral-600">
                A diverse team of designers, developers, and strategists obsessed with
                perfection.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
              {MEMBERS.map((member) => (
                <article
                  key={member.name}
                  className="relative aspect-4/5 overflow-hidden rounded-2xl bg-white"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/95 to-transparent px-4 pt-16 pb-4">
                    <div className="border-l-2 border-black pl-3">
                      <h4 className="text-sm font-semibold tracking-tight">{member.name}</h4>
                      <p className="mt-0.5 text-[12px] text-neutral-500">{member.role}</p>
                    </div>
                  </div>
                </article>
              ))}

              <article className="relative flex aspect-4/5 flex-col justify-between rounded-2xl bg-white p-5 md:p-6">
                <div className="flex items-center">
                  {AVATAR_STACK.slice(0, 3).map((src, i) => (
                    <div
                      key={src}
                      className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-white bg-neutral-200"
                      style={{ marginLeft: i === 0 ? 0 : -8, zIndex: 3 - i }}
                    >
                      <Image src={src} alt="" fill sizes="36px" className="object-cover" />
                    </div>
                  ))}
                  <span className="ml-2 text-sm font-semibold">+5</span>
                </div>

                <div>
                  <p className="mb-2 flex items-center gap-2 text-[11px] font-medium tracking-[0.12em] uppercase text-neutral-500">
                    <span className="inline-block h-3 w-px bg-black" aria-hidden />
                    Talented Behinds
                  </p>
                  <h4 className="max-w-[10ch] text-[clamp(1.35rem,2.2vw,1.75rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
                    View Members Behind
                  </h4>
                </div>

                <Link
                  href="#team"
                  className="inline-flex w-full items-center justify-center rounded-full bg-black px-5 py-3.5 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
                >
                  View All Members
                </Link>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
