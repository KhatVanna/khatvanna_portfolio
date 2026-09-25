"use client";

import { type FormEvent, useState } from "react";
import Link from "next/link";
import { SITE } from "@/data/site";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Skills", href: "/services" },
  { label: "Projects", href: "/work" },
  { label: "Contact", href: "/contact" },
];

const SOCIALS = [
  { label: "Twitter", href: "https://twitter.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
];

export default function FooterSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("ok");
    setName("");
    setEmail("");
  };

  return (
    <footer id="contact" className="relative overflow-hidden bg-[#0a0a0a] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 hidden grid-cols-3 md:grid"
      >
        <div className="border-r border-white/8" />
        <div className="border-r border-white/8" />
        <div />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 pt-16 pb-28 md:px-8 md:pt-20 md:pb-36 lg:px-10 lg:pt-24 lg:pb-44">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-10 lg:gap-14">
          {/* Let's Talk */}
          <div>
            <p className="text-[11px] font-medium tracking-[0.16em] text-white/45 uppercase">
              Let&apos;s Talk
            </p>
            <div className="mt-6 space-y-1">
              <a
                href={SITE.phoneHref}
                className="block text-[clamp(1.35rem,2.5vw,1.85rem)] font-semibold tracking-[-0.02em] transition-opacity hover:opacity-80"
              >
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="block text-[clamp(1.35rem,2.5vw,1.85rem)] font-semibold tracking-[-0.02em] transition-opacity hover:opacity-80"
              >
                {SITE.email}
              </a>
            </div>
            <p className="mt-8 text-[13px] leading-relaxed text-white/45">
              {SITE.locationLine}
              <br />
              <span className="text-white">{SITE.location}</span>
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-semibold tracking-[-0.02em]">
              Newsletter
            </h2>

            <form onSubmit={onSubmit} className="mt-8 space-y-6">
              <label className="block">
                <span className="mb-2 block text-[12px] text-white/45">Your name *</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (status !== "idle") setStatus("idle");
                  }}
                  className="w-full border-b border-white/25 bg-transparent pb-2 text-[15px] outline-none transition-colors focus:border-white"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-[12px] text-white/45">Email *</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status !== "idle") setStatus("idle");
                  }}
                  className="w-full border-b border-white/25 bg-transparent pb-2 text-[15px] outline-none transition-colors focus:border-white"
                />
              </label>

              <button
                type="submit"
                className="inline-flex min-w-[180px] items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-transform hover:scale-[1.03]"
              >
                Contact Me
              </button>
            </form>

            {status === "ok" && (
              <p className="mt-4 text-sm text-white/60">
                Thank you! Your submission has been received!
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-sm text-red-400">
                Oops! Something went wrong while submitting the form.
              </p>
            )}

            <p className="mt-6 max-w-[34ch] text-[13px] leading-relaxed text-white/45">
              Join our newsletter and stay updated on the latest trends in digital design.
            </p>
          </div>

          {/* Nav + Socials */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-[11px] font-medium tracking-[0.16em] text-white/45 uppercase">
                Navigation
              </p>
              <ul className="mt-5 space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[15px] font-medium transition-opacity hover:opacity-70"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-medium tracking-[0.16em] text-white/45 uppercase">
                Socials
              </p>
              <ul className="mt-5 space-y-2.5">
                {SOCIALS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[15px] font-medium transition-opacity hover:opacity-70"
                    >
                      {link.label}
                      <span aria-hidden className="text-[11px]">
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Giant watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 select-none overflow-hidden pb-2"
      >
        <p className="whitespace-nowrap text-center text-[clamp(5rem,18vw,14rem)] font-semibold leading-none tracking-[-0.05em] text-white/[0.06]">
          {SITE.name}
        </p>
      </div>
    </footer>
  );
}
