import Image from "next/image";
import Link from "next/link";

const SERVICES = [
  {
    index: "01",
    title: "UI/UX Design",
    href: "/services/ui-ux-design",
    body: "We craft immersive digital interfaces that prioritize user clarity and seamless navigation across every touchpoint.",
    categories: ["User Research", "Wireframing", "Prototyping"],
    image: "/images/services-page/svc-01.webp",
  },
  {
    index: "02",
    title: "Brand Identity",
    href: "/services/brand-identity",
    body: "We build comprehensive visual systems that capture the core essence and unique personality of your business.",
    categories: ["Packaging Design", "Logo Design", "Rebranding"],
    image: "/images/services-page/svc-02.webp",
  },
  {
    index: "03",
    title: "Web Development",
    href: "/services/web-development",
    body: "Our team translates high-end designs into high-performance digital products using clean, scalable code.",
    categories: ["React/Next.js", "CMS Integration", "E-Commerce"],
    image: "/images/services-page/svc-03.webp",
  },
  {
    index: "04",
    title: "Digital Strategy",
    href: "/services/digital-strategy",
    body: "We provide the data-driven roadmap necessary to navigate the competitive landscape.",
    categories: ["Market Analysis", "SEO Audit", "Growth Hacking"],
    image: "/images/services-page/svc-04.webp",
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
