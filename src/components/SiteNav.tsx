"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "@/data/site";

const NAV_LINKS = [
  { label: "Home", href: "/", number: "01" },
  { label: "About", href: "/about", number: "02" },
  { label: "Skills", href: "/skills", number: "03" },
  { label: "Projects", href: "/projects", number: "04" },
  { label: "Contact", href: "/contact", number: "05" },
];

/** Secondary links — keep out of the primary CV menu */
const MORE_LINKS = [
  { label: "Blog", href: "/blog" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

/** Sections with light backgrounds — header switches to dark text */
const LIGHT_SECTION_IDS = [
  "studio",
  "approach",
  "why-us",
  "skills",
  "projects",
  "works",
  "testimonials",
  "team",
  "blog",
  "faq",
  "features",
  "what-sets-us-apart",
  "speed-advantage",
  "newsletter",
  "services-hero",
  "services-intro",
  "services-list",
  "ui-ux-hero",
  "brand-identity-hero",
  "web-development-hero",
  "digital-strategy-hero",
  "what-we-do",
  "work-hero",
  "work-grid",
  "blog-hero",
  "blog-archive",
  "blog-post-hero",
  "blog-post-body",
  "blog-related",
  "not-found",
  "password-protected",
  "style-guide-colors",
  "style-guide-typography",
  "style-guide-buttons",
  "changelog-list",
  "privacy-content",
  "terms-content",
  "contact-hero",
  "contact-form",
  "case-overview",
  "case-challenge",
  "case-showcase",
  "case-results",
  "case-gallery",
  "related-projects",
];

function AnnouncementBar() {
  return (
    <div className="flex h-9 w-full items-center justify-center bg-black px-4 text-[11px] font-medium tracking-[0.18em] text-white uppercase">
      <p className="flex items-center gap-2">
        <span aria-hidden>•</span>
        <span>Open to new opportunities</span>
        <span aria-hidden>•</span>
        <Link href="/contact" className="underline-offset-2 hover:underline">
          Contact me
        </Link>
        <span aria-hidden>•</span>
      </p>
    </div>
  );
}

function MenuOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [hovered, setHovered] = useState("Home");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col bg-white transition-all duration-500 ease-out ${
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!open}
    >
      <AnnouncementBar />

      <div className="flex items-start justify-between gap-4 px-5 py-5 text-black md:px-8 md:py-6 lg:px-10">
        <div className="flex items-start gap-8 lg:gap-14">
          <Link href="/" className="text-[1.35rem] font-semibold tracking-tight md:text-[1.5rem]">
            {SITE.name}
          </Link>
          <p className="hidden text-[11px] leading-relaxed tracking-wide sm:block">
            {SITE.locationLine}
            <br />
            {SITE.location}
          </p>
        </div>

        <div className="flex items-start gap-6 md:gap-10 lg:gap-14">
          <div className="hidden text-right text-[11px] leading-relaxed tracking-wide md:block">
            <a href={SITE.phoneHref} className="block hover:opacity-70">
              {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="block hover:opacity-70">
              {SITE.email}
            </a>
          </div>

          <a
            href={SITE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1 text-[11px] tracking-wide hover:opacity-70 sm:inline-flex"
          >
            GitHub
            <span aria-hidden className="text-[10px]">
              ↗
            </span>
          </a>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-8 w-8 items-center justify-center text-2xl leading-none transition-transform hover:rotate-90"
          >
            ×
          </button>
        </div>
      </div>

      <div className="grid flex-1 grid-cols-1 gap-10 overflow-y-auto px-5 pb-8 pt-4 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-10 lg:pb-10 lg:pt-6">
        <nav className="flex flex-col">
          {NAV_LINKS.map((item) => {
            const active = hovered === item.label;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                onMouseEnter={() => setHovered(item.label)}
                className={`flex items-start justify-between border-b border-neutral-200 py-3 transition-colors duration-300 md:py-4 ${
                  active ? "text-black" : "text-neutral-400"
                }`}
              >
                <span className="text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
                  {item.label}
                  <sup className="ml-1 align-super text-[0.28em] font-medium tracking-normal">
                    ({item.number})
                  </sup>
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="flex flex-col justify-between gap-10">
          <div>
            <div className="flex items-end justify-between border-b border-neutral-200 pb-3">
              <h2 className="text-[clamp(1.75rem,4vw,3.25rem)] font-semibold leading-none tracking-[-0.03em] text-neutral-400">
                More
                <span className="ml-2 align-super text-[0.35em] font-medium">(06)</span>
              </h2>
            </div>
            <p className="mt-6 max-w-[28ch] text-[13px] leading-relaxed text-neutral-500">
              {SITE.role}. {SITE.tagline}
            </p>
            <ul className="mt-8 space-y-3 md:mt-10 md:space-y-3.5">
              {MORE_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="text-[clamp(1.15rem,2.2vw,1.65rem)] font-medium tracking-[-0.02em] text-neutral-400 transition-colors hover:text-black"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/contact"
            onClick={onClose}
            className="ml-auto inline-flex w-full max-w-[280px] items-center justify-between gap-6 rounded-full bg-black px-7 py-4 text-[15px] font-medium text-white transition-transform hover:scale-[1.02] sm:w-auto"
          >
            <span>Contact Me</span>
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function SiteNav() {
  const pathname = usePathname();
  const isLightPage =
    pathname?.startsWith("/about") ||
    pathname?.startsWith("/skills") ||
    pathname?.startsWith("/projects") ||
    pathname === "/blog" ||
    pathname?.startsWith("/blog/") ||
    pathname === "/404" ||
    pathname === "/401" ||
    pathname === "/contact";
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkText, setDarkText] = useState(!!isLightPage);

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 40);

      const probeY = 72;
      let onLight = false;
      for (const id of LIGHT_SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom > probeY) {
          onLight = true;
          break;
        }
      }

      // Light pages default to dark text near the top before sections probe
      if (
        !onLight &&
        (pathname?.startsWith("/about") ||
          pathname?.startsWith("/skills") ||
          pathname?.startsWith("/projects") ||
          pathname === "/blog" ||
          pathname?.startsWith("/blog/") ||
          pathname === "/404" ||
          pathname === "/401" ||
          pathname === "/contact") &&
        window.scrollY < 80
      ) {
        onLight = true;
      }

      setDarkText(onLight);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  const text = darkText ? "text-black" : "text-white";
  const bar = darkText ? "bg-black" : "bg-white";

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50">
        <div
          className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
            scrolled ? "max-h-0 opacity-0" : "max-h-9 opacity-100"
          }`}
        >
          <AnnouncementBar />
        </div>

        <header
          className={`flex items-start justify-between gap-4 px-5 py-5 transition-colors duration-300 md:px-8 md:py-5 lg:px-10 ${text} ${
            scrolled
              ? darkText
                ? "bg-white/85 backdrop-blur-md"
                : "bg-black/50 backdrop-blur-md"
              : "bg-transparent"
          }`}
        >
          <div className="flex items-start gap-8 lg:gap-14">
            <Link
              href="/"
              className="text-[1.35rem] font-semibold tracking-tight md:text-[1.5rem]"
            >
              {SITE.name}
            </Link>
            <p className="hidden text-[11px] leading-relaxed tracking-wide sm:block">
              {SITE.locationLine}
              <br />
              {SITE.location}
            </p>
          </div>

          <div className="flex items-start gap-6 md:gap-10 lg:gap-14">
            <div className="hidden text-right text-[11px] leading-relaxed tracking-wide md:block">
              <a href={SITE.phoneHref} className="block hover:opacity-80">
                {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="block hover:opacity-80">
                {SITE.email}
              </a>
            </div>

            <a
              href={SITE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1 text-[11px] tracking-wide hover:opacity-80 sm:inline-flex"
            >
              GitHub
              <span aria-hidden className="text-[10px]">
                ↗
              </span>
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="group flex h-8 w-8 flex-col items-end justify-center gap-[6px]"
            >
              <span
                className={`h-[1.5px] w-6 transition-all group-hover:w-5 ${bar}`}
              />
              <span
                className={`h-[1.5px] w-4 transition-all group-hover:w-6 ${bar}`}
              />
            </button>
          </div>
        </header>
      </div>

      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
