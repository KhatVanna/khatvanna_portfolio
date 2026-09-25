"use client";

import { type FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const POSTS = [
  {
    author: "Alex Reed",
    role: "Editor",
    date: "July 13, 2026",
    title: "How AI is Redefining the Next Generation of User Interfaces.",
    image: "/images/blog/post-1.webp",
    avatar: "/images/blog/post-0.png",
  },
  {
    author: "Lily Vance",
    role: "Editor",
    date: "July 14, 2026",
    title:
      "Why Minimalist Visual Identities Continue to Dominate the Modern Luxury and Tech",
    image: "/images/blog/post-3.webp",
    avatar: "/images/blog/post-2.png",
  },
  {
    author: "Sophia Chen",
    role: "Editor",
    date: "July 14, 2026",
    title:
      "Implementing Scalable UX Frameworks That Support Rapid User Acquisition and Retention",
    image: "/images/blog/post-5.webp",
    avatar: "/images/blog/post-4.png",
  },
  {
    author: "Marcus Thorne",
    role: "Editor",
    date: "July 14, 2026",
    title:
      "Motion with Meaning: Exploring the Top 5 Web Animation Trends That Enhance Usability",
    image: "/images/blog/post-7.webp",
    avatar: "/images/blog/post-6.png",
  },
];

export default function BlogSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("ok");
    setEmail("");
  };

  return (
    <section id="blog" className="relative overflow-hidden bg-white text-black">
      {/* Newsletter */}
      <div className="relative bg-[#ebebeb]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 hidden grid-cols-4 md:grid"
        >
          <div className="border-r border-black/8" />
          <div className="border-r border-black/8" />
          <div className="border-r border-black/8" />
          <div />
        </div>

        <div className="relative z-10 mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-8 px-5 py-12 md:grid-cols-4 md:gap-6 md:px-8 md:py-14 lg:px-10">
          <p className="flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase md:col-span-1">
            <span className="inline-block h-3 w-px bg-black" aria-hidden />
            Newsletter
          </p>

          <h2 className="max-w-[12ch] text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] uppercase md:col-span-1">
            Update Lastest Content
          </h2>

          <form
            onSubmit={onSubmit}
            className="flex items-center gap-3 border-b border-black/20 pb-3 md:col-span-2"
          >
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
          </form>

          {status === "ok" && (
            <p className="text-sm text-neutral-600 md:col-span-4 md:col-start-3">
              Thank you! Your submission has been received!
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-600 md:col-span-4 md:col-start-3">
              Oops! Something went wrong while submitting the form.
            </p>
          )}
        </div>
      </div>

      {/* Blog grid */}
      <div className="relative">
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
          <div className="mb-10 flex items-start justify-between gap-6 md:mb-14">
            <p className="flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] text-neutral-500 uppercase">
              <span className="inline-block h-3 w-px bg-neutral-400" aria-hidden />
              The Blog
            </p>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-none tracking-[-0.04em] md:absolute md:left-1/2 md:-translate-x-1/2">
              Conax News
            </h2>
            <span className="w-[5.5rem] shrink-0" aria-hidden />
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {POSTS.map((post) => (
              <article key={post.title} className="flex flex-col">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="relative h-9 w-9 overflow-hidden rounded-full bg-neutral-200">
                      <Image
                        src={post.avatar}
                        alt={post.author}
                        fill
                        sizes="36px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold leading-tight">{post.author}</p>
                      <p className="text-[12px] text-neutral-500">{post.role}</p>
                    </div>
                  </div>
                  <p className="shrink-0 pt-1 text-[12px] text-neutral-400">{post.date}</p>
                </div>

                <Link href="#blog" className="group block">
                  <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-neutral-200">
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="mt-4 text-[15px] font-semibold leading-snug tracking-[-0.015em] md:text-base">
                    {post.title}
                  </h3>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
