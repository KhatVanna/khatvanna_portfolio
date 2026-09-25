import Image from "next/image";
import Link from "next/link";

type Project = {
  title: string;
  date: string;
  image: string;
  aspect: "portrait" | "landscape";
  href?: string;
};

const LEFT: Project[] = [
  {
    title: "Zenith Brand Refresh",
    date: "Sept 2025",
    image: "/images/work-page/zenith.webp",
    aspect: "portrait",
    href: "/projects/zenith-brand-refresh",
  },
  {
    title: "Aura Fintech App",
    date: "June 2025",
    image: "/images/work-page/aura.webp",
    aspect: "portrait",
    href: "/projects/aura-fintech-app",
  },
  {
    title: "Luma Health",
    date: "May 2025",
    image: "/images/work-page/luma.webp",
    aspect: "portrait",
    href: "/projects/luma-health",
  },
];

const RIGHT: Project[] = [
  {
    title: "Veloce E-Commerce",
    date: "Feb 2025",
    image: "/images/work-page/veloce.webp",
    aspect: "landscape",
    href: "/projects/veloce-e-commerce",
  },
  {
    title: "Stellar SaaS Dashboard",
    date: "Nov 2025",
    image: "/images/work-page/stellar.webp",
    aspect: "landscape",
    href: "/projects/stellar-saas-dashboard",
  },
  {
    title: "Northland Studio Website",
    date: "July 2025",
    image: "/images/work-page/northland.webp",
    aspect: "landscape",
    href: "/projects/northland-studio-website",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const content = (
    <>
      <div
        className={`relative overflow-hidden rounded-2xl bg-neutral-200 md:rounded-[1.25rem] ${
          project.aspect === "portrait" ? "aspect-4/5" : "aspect-4/3"
        }`}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 hover:scale-[1.02]"
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
    </>
  );

  if (project.href) {
    return (
      <article>
        <Link href={project.href} className="block transition-opacity hover:opacity-90">
          {content}
        </Link>
      </article>
    );
  }

  return <article>{content}</article>;
}

export default function WorkGridSection() {
  return (
    <section id="work-grid" className="relative overflow-hidden bg-white text-black">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 hidden grid-cols-4 md:grid"
      >
        <div className="border-r border-black/8" />
        <div className="border-r border-black/8" />
        <div className="border-r border-black/8" />
        <div />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 pb-20 md:px-8 md:pb-28 lg:px-10 lg:pb-32">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8 lg:gap-12">
          <div className="flex flex-col gap-10 md:gap-12 lg:gap-14">
            {LEFT.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
          <div className="flex flex-col gap-10 md:gap-12 lg:gap-14">
            {RIGHT.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
