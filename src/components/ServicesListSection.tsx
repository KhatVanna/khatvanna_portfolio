import Image from "next/image";
import Link from "next/link";

const SERVICES = [
  {
    index: "01",
    title: "Web Development",
    href: "/skills/web-development",
    body: "Full-stack web apps with Laravel, React, PHP, and JavaScript — from concept through production deploy.",
    categories: ["Laravel", "React", "PHP", "JavaScript"],
    image: "/images/services-page/svc-03.webp",
  },
  {
    index: "02",
    title: "Mobile Apps",
    href: "/skills/ui-ux-design",
    body: "Cross-platform Flutter apps with native feel on iOS and Android from a single codebase.",
    categories: ["Flutter", "Dart", "Firebase"],
    image: "/images/services-page/svc-01.webp",
  },
  {
    index: "03",
    title: "Backend & Databases",
    href: "/skills/digital-strategy",
    body: "Reliable APIs and data layers with MySQL, PostgreSQL, and Python for AI-adjacent workflows.",
    categories: ["MySQL", "PostgreSQL", "Python", "API"],
    image: "/images/services-page/svc-04.webp",
  },
  {
    index: "04",
    title: "Team Leadership",
    href: "/skills/brand-identity",
    body: "Founder & Team Leader of Kalapak Code Team — mentoring developers and shipping software from Cambodia.",
    categories: ["Leadership", "Mentoring", "Agile"],
    image: "/images/services-page/svc-02.webp",
  },
];

export default function ServicesListSection() {
  return (
    <section id="services-list" className="relative overflow-hidden bg-[#f4f4f4] text-black">
      <div className="mx-auto max-w-[1600px] px-5 py-6 md:px-8 md:py-10 lg:px-10">
        {SERVICES.map((service) => (
          <article
            key={service.index}
            className="grid grid-cols-1 gap-8 border-t border-black/10 py-12 md:grid-cols-2 md:gap-10 md:py-16 lg:gap-16 lg:py-20"
          >
            <div className="flex flex-col justify-between gap-10 md:min-h-[320px] lg:min-h-[380px]">
              <div>
                <h3 className="text-[clamp(1.85rem,3.5vw,2.85rem)] font-semibold tracking-[-0.03em]">
                  <Link href={service.href} className="transition-opacity hover:opacity-60">
                    {service.title}
                  </Link>
                </h3>
                <p className="mt-5 max-w-[40ch] text-[14px] leading-relaxed text-neutral-500 md:mt-6 md:text-[15px]">
                  {service.body}
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold tracking-tight">Categories</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {service.categories.map((cat) => (
                    <li
                      key={cat}
                      className="rounded-full bg-[#e6e6e6] px-3.5 py-1.5 text-[11px] font-medium tracking-[0.06em] text-black uppercase"
                    >
                      {cat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm text-neutral-500">({service.index})</p>
              <Link href={service.href} className="block">
                <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-neutral-300 md:aspect-5/4 lg:rounded-[1.25rem]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
