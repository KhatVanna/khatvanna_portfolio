"use client";

import { type FormEvent, useState } from "react";

export default function AboutNewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("ok");
    setEmail("");
  };

  return (
    <section id="newsletter" className="relative overflow-hidden bg-[#f4f4f4] text-black">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 hidden grid-cols-4 md:grid"
      >
        <div className="border-r border-black/8" />
        <div className="border-r border-black/8" />
        <div className="border-r border-black/8" />
        <div />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1600px] grid-cols-1 items-end gap-8 px-5 py-14 md:grid-cols-4 md:gap-6 md:px-8 md:py-16 lg:px-10 lg:py-20">
        <p className="flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase">
          <span className="inline-block h-3 w-px bg-black" aria-hidden />
          Newsletter
        </p>

        <h2 className="max-w-[12ch] text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] uppercase">
          Update Lastest Content
        </h2>

        <form onSubmit={onSubmit} className="md:col-span-1">
          <div className="flex items-center gap-3 border-b border-black/20 pb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status !== "idle") setStatus("idle");
              }}
              placeholder="Enter your email"
              className="w-full bg-transparent text-[15px] text-black outline-none placeholder:text-neutral-400"
              aria-label="Email address"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform hover:scale-105"
            >
              →
            </button>
          </div>
          {status === "ok" && (
            <p className="mt-3 text-sm text-neutral-600">
              Thank you! Your submission has been received!
            </p>
          )}
          {status === "error" && (
            <p className="mt-3 text-sm text-red-600">
              Oops! Something went wrong while submitting the form.
            </p>
          )}
        </form>

        <div className="hidden md:block" aria-hidden />
      </div>
    </section>
  );
}
