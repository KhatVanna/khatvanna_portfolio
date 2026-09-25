import Image from "next/image";
import type { BlogPost } from "@/data/blog";

export default function BlogPostHero({ post }: { post: BlogPost }) {
  const heroSrc = post.heroImage ?? post.image;

  return (
    <section id="blog-post-hero" className="relative overflow-hidden bg-white text-black">
      <div className="mx-auto max-w-[1600px] px-5 pt-28 pb-10 md:px-8 md:pt-32 md:pb-14 lg:px-10 lg:pt-36">
        <div className="mb-8 flex items-center gap-3 md:mb-10">
          <div className="relative h-11 w-11 overflow-hidden rounded-full bg-neutral-200">
            <Image
              src={post.avatar}
              alt={post.author}
              fill
              sizes="44px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold leading-tight">{post.author}</p>
            <p className="text-[12px] text-neutral-500">{post.role}</p>
          </div>
        </div>

        <h1 className="max-w-[18ch] text-[clamp(2rem,5.5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
          {post.title}
        </h1>

        <div className="relative mt-10 aspect-21/10 overflow-hidden rounded-2xl bg-neutral-200 md:mt-14 md:rounded-[1.5rem]">
          <Image
            src={heroSrc}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
