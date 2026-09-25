import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blog";

export default function BlogRelatedNews({ posts }: { posts: BlogPost[] }) {
  return (
    <section id="blog-related" className="relative overflow-hidden bg-white text-black">
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
          {posts.map((post) => (
            <article key={post.slug} className="flex flex-col">
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

              <Link href={`/blog/${post.slug}`} className="group block">
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
    </section>
  );
}
