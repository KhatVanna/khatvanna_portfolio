"use client";

import Image from "next/image";
import { BLOG_ARTICLE, type BlogPost } from "@/data/blog";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden>
      <path d="M12.0337 1.25C9.56994 1.25 8.125 2.55136 8.125 5.51636V8.125H5V11.25H8.125V18.75H11.25V11.25H13.75L14.375 8.125H11.25V6.04492C11.25 4.92805 11.6142 4.375 12.6624 4.375H14.375V1.37817C14.0787 1.33817 13.2156 1.25 12.0337 1.25Z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden>
      <path d="M1.97266 2.5L7.88574 10.9505L2.28353 17.5H4.48405L8.87044 12.3584L12.4674 17.5H18.2259L12.041 8.64583L17.2835 2.5H15.1172L11.0596 7.23958L7.74902 2.5H1.97266ZM5.17253 4.16667H6.87988L15.0277 15.8333H13.335L5.17253 4.16667Z" />
    </svg>
  );
}

function LinkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden>
      <path d="M5.22526 10.78C5.07036 10.6249 4.9275 10.4582 4.79792 10.2814C4.74636 10.2106 4.70924 10.1303 4.68868 10.0452C4.66813 9.96009 4.66455 9.87175 4.67813 9.78523C4.69172 9.69872 4.72222 9.61573 4.76788 9.541C4.81354 9.46628 4.87347 9.40127 4.94426 9.34971C5.01504 9.29814 5.09528 9.26102 5.18041 9.24047C5.26554 9.21992 5.35388 9.21633 5.4404 9.22992C5.52691 9.24351 5.6099 9.274 5.68463 9.31966C5.75936 9.36533 5.82436 9.42526 5.87592 9.49604C5.96192 9.61471 6.05859 9.72871 6.16726 9.83671C6.70259 10.372 7.41392 10.6667 8.17059 10.6667C8.92726 10.6667 9.63926 10.372 10.1739 9.83671L13.8406 6.17004C14.9453 5.06537 14.9453 3.26737 13.8406 2.16271C12.7359 1.05804 10.9379 1.05804 9.83326 2.16271L9.12792 2.86804C9.06603 2.92994 8.99255 2.97904 8.91167 3.01253C8.8308 3.04603 8.74412 3.06327 8.65659 3.06327C8.56905 3.06327 8.48238 3.04603 8.40151 3.01253C8.32063 2.97904 8.24715 2.92994 8.18526 2.86804C8.12336 2.80614 8.07426 2.73266 8.04076 2.65179C8.00727 2.57092 7.99002 2.48424 7.99002 2.39671C7.99002 2.30917 8.00727 2.2225 8.04076 2.14162C8.07426 2.06075 8.12336 1.98727 8.18526 1.92537L8.89059 1.22004C9.67243 0.439422 10.7321 0.000976563 11.8369 0.000976562C12.9417 0.000976563 14.0014 0.439422 14.7833 1.22004C15.5636 2.00205 16.0018 3.06166 16.0018 4.16637C16.0018 5.27109 15.5636 6.3307 14.7833 7.11271L11.1166 10.7794C10.3299 11.5667 9.28326 12 8.17059 12C7.05792 12 6.01126 11.5667 5.22526 10.78ZM4.17059 16C5.28392 16 6.32992 15.5667 7.11659 14.7794L7.82192 14.074C7.88382 14.0121 7.93292 13.9387 7.96642 13.8578C7.99991 13.7769 8.01716 13.6902 8.01716 13.6027C8.01716 13.5152 7.99991 13.4285 7.96642 13.3476C7.93292 13.2668 7.88382 13.1933 7.82192 13.1314C7.76003 13.0695 7.68654 13.0204 7.60567 12.9869C7.5248 12.9534 7.43812 12.9361 7.35059 12.9361C7.26305 12.9361 7.17638 12.9534 7.09551 12.9869C7.01463 13.0204 6.94115 13.0695 6.87926 13.1314L6.17326 13.8367C5.63792 14.372 4.92659 14.6667 4.16992 14.6667C3.41326 14.6667 2.70192 14.372 2.16659 13.8367C1.63126 13.3014 1.33659 12.59 1.33659 11.8334C1.33659 11.0767 1.63126 10.3647 2.16659 9.83004L5.83326 6.16337C6.36859 5.62804 7.07992 5.33337 7.83659 5.33337C8.59326 5.33337 9.30526 5.62804 9.83992 6.16337C9.94659 6.27071 10.0439 6.38471 10.1306 6.50338C10.1821 6.5742 10.247 6.63419 10.3217 6.67993C10.3963 6.72566 10.4793 6.75625 10.5657 6.76993C10.6522 6.78361 10.7406 6.78012 10.8257 6.75967C10.9108 6.73921 10.9911 6.70219 11.0619 6.65071C11.1327 6.59923 11.1927 6.53431 11.2385 6.45964C11.2842 6.38498 11.3148 6.30204 11.3285 6.21556C11.3422 6.12907 11.3387 6.04074 11.3182 5.95561C11.2978 5.87047 11.2607 5.7902 11.2093 5.71938C11.0806 5.54244 10.9381 5.37593 10.7833 5.22137C9.99592 4.43337 8.94926 4.00004 7.83659 4.00004C6.72392 4.00004 5.67726 4.43337 4.89059 5.22071L1.22459 8.88737C0.836356 9.27326 0.528556 9.73235 0.319023 10.238C0.109489 10.7437 0.00238721 11.286 0.00392253 11.8334C0.00392253 12.946 0.437256 13.9927 1.22459 14.7794C1.61045 15.1676 2.06954 15.4755 2.57524 15.685C3.08094 15.8945 3.6232 16.0016 4.17059 16Z" />
    </svg>
  );
}

export default function BlogPostBody({ post }: { post: BlogPost }) {
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch {
      /* ignore */
    }
  };

  return (
    <section id="blog-post-body" className="relative overflow-hidden bg-white text-black">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 px-5 py-12 md:grid-cols-12 md:gap-10 md:px-8 md:py-16 lg:px-10 lg:py-20">
        <aside className="md:col-span-3 lg:col-span-2">
          <p className="text-[15px] font-semibold tracking-tight">{post.date}</p>
          <div className="mt-10 flex gap-3 md:mt-16 md:flex-col">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Share on Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-black transition-colors hover:bg-neutral-200"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Share on X"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-black transition-colors hover:bg-neutral-200"
            >
              <XIcon className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={copyLink}
              aria-label="Copy link"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-black transition-colors hover:bg-neutral-200"
            >
              <LinkIcon className="h-4 w-4" />
            </button>
          </div>
        </aside>

        <article className="md:col-span-9 lg:col-span-8 lg:col-start-4">
          <p className="text-[clamp(1.15rem,2vw,1.4rem)] leading-relaxed text-neutral-500 italic">
            {BLOG_ARTICLE.lead}
          </p>

          <div className="my-10 border-t border-black/10 md:my-12" />

          <div className="space-y-12 md:space-y-16">
            {BLOG_ARTICLE.sections.map((section, i) => {
              if ("quote" in section && section.quote) {
                return (
                  <blockquote
                    key={`quote-${i}`}
                    className="border-l-[3px] border-black pl-6 md:pl-8"
                  >
                    <p className="text-[clamp(1.25rem,2.4vw,1.75rem)] font-semibold leading-snug tracking-[-0.02em] italic">
                      &ldquo;{section.quote.text}&rdquo;
                    </p>
                    <cite className="mt-4 block text-sm text-neutral-400 not-italic">
                      {section.quote.attribution}
                    </cite>
                  </blockquote>
                );
              }

              return (
                <div key={section.heading ?? i}>
                  {section.heading && (
                    <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-tight tracking-[-0.03em]">
                      {section.heading}
                    </h2>
                  )}
                  {section.paragraphs?.map((p) => (
                    <p
                      key={p.slice(0, 40)}
                      className="mt-5 text-[clamp(1rem,1.3vw,1.125rem)] leading-relaxed text-neutral-500"
                    >
                      {p}
                    </p>
                  ))}
                  {"showInlineImage" in section &&
                    section.showInlineImage &&
                    post.inlineImage && (
                      <div className="relative mt-10 aspect-16/10 overflow-hidden rounded-2xl bg-neutral-200 md:mt-12 md:rounded-[1.5rem]">
                        <Image
                          src={post.inlineImage}
                          alt={post.inlineImageAlt ?? ""}
                          fill
                          sizes="(max-width: 1024px) 100vw, 70vw"
                          className="object-cover"
                        />
                      </div>
                    )}
                </div>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
}
