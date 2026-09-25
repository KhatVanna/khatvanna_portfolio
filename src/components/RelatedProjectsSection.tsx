import Image from "next/image";
import Link from "next/link";
import type { CaseRelated } from "@/data/case-studies";

type RelatedProjectsSectionProps = {
  projects?: CaseRelated[];
};

const DEFAULT_RELATED: CaseRelated[] = [
  {
    title: "Zenith Brand Refresh",
    date: "Sept 2025",
    image: "/images/zenith/related-zenith.webp",
    href: "/projects/zenith-brand-refresh",
  },
  {
    title: "Veloce E-Commerce",
    date: "Feb 2025",
    image: "/images/veloce/related-veloce.webp",
    href: "/projects/veloce-e-commerce",
  },
];

export default function RelatedProjectsSection({
  projects = DEFAULT_RELATED,
}: RelatedProjectsSectionProps) {
  return (
    <section id="related-projects" className="relative overflow-hidden bg-white text-black">
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
        <p className="mb-4 flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase">
          <span className="inline-block h-3 w-px bg-black" aria-hidden />
          Related Projects
        </p>
        <h2 className="text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.04em] uppercase">
          Projects <span className="text-black/15">More</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-8 lg:gap-10">
          {projects.map((project) => (
            <article key={project.title}>
              <Link href={project.href} className="group block">
                <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-neutral-200 md:rounded-[1.25rem]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <h3 className="text-[13px] font-semibold tracking-[0.04em] uppercase md:text-sm">
                    {project.title}
                  </h3>
                  <p className="shrink-0 text-[13px] tracking-wide uppercase md:text-sm">
                    / {project.date}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
