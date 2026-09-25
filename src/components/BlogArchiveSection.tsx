"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BLOG_CATEGORIES,
  BLOG_POSTS,
  type BlogCategory,
} from "@/data/blog";

const PAGE_SIZE = 6;

export default function BlogArchiveSection() {
  const [category, setCategory] = useState<BlogCategory>("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () =>
      category === "All"
        ? BLOG_POSTS
        : BLOG_POSTS.filter((p) => p.category === category),
    [category],
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const posts = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  const selectCategory = (c: BlogCategory) => {
    setCategory(c);
    setPage(1);
  };

  return (
    <section id="blog-archive" className="relative overflow-hidden bg-white text-black">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 hidden grid-cols-4 md:grid"
      >
        <div className="border-r border-black/8" />
        <div className="border-r border-black/8" />
        <div className="border-r border-black/8" />
        <div />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 md:px-8 lg:px-10">
        <div className="flex flex-col gap-6 border-b border-black/10 py-6 sm:flex-row sm:items-center sm:justify-between md:py-8">
          <nav aria-label="Blog categories" className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {BLOG_CATEGORIES.map((c) => {
              const active = category === c;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => selectCategory(c)}
                  className={`text-[14px] font-medium tracking-tight transition-colors ${
                    active
                      ? "border-b border-black pb-0.5 text-black"
                      : "text-neutral-400 hover:text-neutral-700"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            <button
              type="button"
              aria-label="Previous page"
              disabled={currentPage <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition-opacity disabled:opacity-30"
            >
              ←
            </button>
            <div className="flex items-center gap-3 text-[14px] font-medium">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setPage(n)}
                  className={
                    n === currentPage
                      ? "text-black"
                      : "text-neutral-400 hover:text-neutral-700"
                  }
                >
                  {n}
                </button>
              ))}
            </div>
            <button
              type="button"
              aria-label="Next page"
              disabled={currentPage >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition-opacity disabled:opacity-30"
            >
              →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:py-16">
          {posts.map((post) => (
            <article key={post.slug} className="flex flex-col">
              <div className="mb-5 flex items-start justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full bg-neutral-200">
                    <Image
                      src={post.avatar}
                      alt={post.author}
                      fill
                      sizes="40px"
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

              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-neutral-200">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <h2 className="mt-5 text-[clamp(1.05rem,1.4vw,1.25rem)] font-semibold leading-snug tracking-[-0.02em]">
                  {post.title}
                </h2>
              </Link>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="py-20 text-center text-neutral-500">No posts in this category.</p>
        )}
      </div>
    </section>
  );
}
