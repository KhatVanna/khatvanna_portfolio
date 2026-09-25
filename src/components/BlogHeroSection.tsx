import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/data/site";

const SOCIALS = [
  { label: "Twitter", href: "https://twitter.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "GitHub", href: "https://github.com/Kalapak-Team" },
];

export default function BlogHeroSection() {
  return (
    <section
      id="blog-hero"
      className="relative flex min-h-screen flex-col overflow-hidden bg-white text-black"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 hidden grid-cols-4 md:grid"
      >
        <div className="border-r border-black/8" />
        <div className="border-r border-black/8" />
        <div className="border-r border-black/8" />
        <div />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-1 flex-col px-5 pt-28 pb-10 md:px-8 md:pt-32 md:pb-12 lg:px-10 lg:pt-36">
        <div className="relative flex flex-1 items-center justify-center py-10 md:py-16">
          <h1 className="pointer-events-none absolute inset-x-0 top-1/2 w-full -translate-y-1/2 text-center text-[clamp(3.5rem,16vw,13rem)] font-semibold leading-[0.85] tracking-[-0.05em] text-black/8 uppercase">
            Blog
            <span className="align-super text-[0.35em] tracking-normal">*</span>
          </h1>

          <div className="relative z-[1] w-[min(72vw,340px)] sm:w-[min(58vw,400px)] md:w-[min(42vw,460px)]">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-200 md:rounded-[1.25rem]">
              <Image
                src="/images/blog-page/hero.webp"
                alt="Abstract glass block"
                fill
                priority
                sizes="(max-width: 768px) 72vw, 420px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-auto grid grid-cols-1 gap-10 border-t border-transparent pt-6 md:grid-cols-4 md:gap-6 md:pt-8">
          <ul className="space-y-2">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <Link
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13px] font-medium tracking-tight transition-opacity hover:opacity-60"
                >
                  {s.label}
                  <span aria-hidden>↗</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block" />
          <div className="hidden md:block" />

          <div className="md:text-right">
            <p className="text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
              Email at
            </p>
            <Link
              href={`mailto:${SITE.email}`}
              className="mt-2 inline-block text-[clamp(1.15rem,2.2vw,1.65rem)] font-semibold tracking-[-0.02em] transition-opacity hover:opacity-60"
            >
              {SITE.email}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
