import Image from "next/image";

const DEPARTMENTS = [
  { id: "01", label: "Design" },
  { id: "02", label: "Engineering" },
  { id: "03", label: "Operations" },
  { id: "04", label: "Strategy" },
];

const MEMBERS = [
  { name: "Aris Thorne", role: "Creative Technologist", image: "/images/team/member-0.webp" },
  { name: "Chloe Whitmore", role: "Director of Client Success", image: "/images/team/member-1.webp" },
  { name: "Viktor Petrov", role: "Lead UX Researcher", image: "/images/team/member-2.webp" },
  { name: "Sarah Jenkins", role: "Senior UX Researcher", image: "/images/team/member-3.webp" },
  { name: "David Jones", role: "Lead Full-Stack Engineer", image: "/images/team/member-4.webp" },
  { name: "Elena Moretti", role: "Head of Motion Design", image: "/images/team/member-5.webp" },
  { name: "Sophia Chen", role: "Lead UX Researcher", image: "/images/team/member-6.webp" },
  { name: "Marcus Thorne", role: "Senior Developer", image: "/images/team/member-7.webp" },
  { name: "Lily Vance", role: "CEO of Conax", image: "/images/team/member-8.webp" },
  { name: "Alex Reed", role: "Founder of Conax", image: "/images/team/member-9.webp" },
  { name: "Julian Frost", role: "Product Designer", image: "/images/team/member-10.webp" },
];

const AVATARS = MEMBERS.slice(0, 3).map((m) => m.image);

function MemberCard({
  name,
  role,
  image,
}: {
  name: string;
  role: string;
  image: string;
}) {
  return (
    <article className="relative aspect-3/4 overflow-hidden rounded-2xl bg-white md:rounded-[1.25rem]">
      <Image
        src={image}
        alt={name}
        fill
        sizes="(max-width: 768px) 100vw, 25vw"
        className="object-cover object-top"
      />
      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-white via-white/95 to-transparent px-4 pt-16 pb-4 md:px-5 md:pb-5">
        <div className="border-l border-black/40 pl-3">
          <h4 className="text-sm font-semibold tracking-tight md:text-[15px]">{name}</h4>
          <p className="mt-0.5 text-[12px] text-neutral-500 md:text-[13px]">{role}</p>
        </div>
      </div>
    </article>
  );
}

export default function AboutTeamSection() {
  const [first, ...rest] = MEMBERS;

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
        {/* Intro */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6 lg:gap-8">
          <div>
            <p className="flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase">
              <span className="inline-block h-3 w-px bg-black" aria-hidden />
              The Team
            </p>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-[clamp(2.75rem,7vw,5.25rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
              Conax®
              <br />
              Member
            </h2>

            <div className="mt-6 flex items-center">
              {AVATARS.map((src, i) => (
                <div
                  key={src}
                  className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-[#f4f4f4] bg-neutral-200"
                  style={{ marginLeft: i === 0 ? 0 : -10, zIndex: AVATARS.length - i }}
                >
                  <Image src={src} alt="" fill sizes="40px" className="object-cover" />
                </div>
              ))}
              <div
                className="relative z-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#f4f4f4] bg-white text-[11px] font-semibold"
                style={{ marginLeft: -10 }}
              >
                +5
              </div>
            </div>
            <p className="mt-3 text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
              Most Talented People
            </p>
          </div>

          <div className="flex flex-col gap-8 md:items-end md:text-right">
            <p className="max-w-[28ch] text-[13px] leading-relaxed text-neutral-600 md:text-[14px]">
              A diverse team of designers, developers, and strategists obsessed with perfection.
            </p>
            <ul className="space-y-2">
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

        {/* Members: intro cell + 3, then full rows of 4 */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-20 md:grid-cols-4 md:gap-5 lg:mt-24">
          <div className="flex flex-col justify-end pb-2 sm:col-span-2 md:col-span-1 md:pb-4">
            <h3 className="max-w-[12ch] text-[clamp(1.35rem,2.2vw,1.75rem)] font-semibold leading-[1.1] tracking-[-0.02em] uppercase">
              The Minds Behind Pixels
            </h3>
            <p className="mt-4 max-w-[28ch] text-[13px] leading-relaxed text-neutral-600">
              A diverse team of designers, developers, and strategists obsessed with perfection.
            </p>
          </div>

          <MemberCard {...first} />
          {rest.slice(0, 2).map((m) => (
            <MemberCard key={m.name} {...m} />
          ))}
          {rest.slice(2).map((m) => (
            <MemberCard key={m.name} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
}
