"use client";

import { SITE } from "@/data/site";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { TextAnimate } from "@/components/ui/text-animate";

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="relative overflow-hidden bg-[#0a0a0a] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 hidden grid-cols-4 md:grid"
      >
        <div className="border-r border-white/8" />
        <div className="border-r border-white/8" />
        <div className="border-r border-white/8" />
        <div />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 py-16 md:px-8 md:py-20 lg:px-10 lg:py-24">
        <div className="mb-10 grid grid-cols-1 gap-6 border-b border-white/10 pb-8 md:mb-14 md:grid-cols-4 md:gap-8 md:pb-10">
          <BlurFade delay={0.05} inView direction="up" offset={12}>
            <p className="flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase">
              <span className="inline-block h-3 w-px bg-white" aria-hidden />
              Tech Stack
            </p>
          </BlurFade>

          <div className="md:col-span-3">
            <TextAnimate
              as="h2"
              by="word"
              animation="blurInUp"
              startOnView
              once
              duration={0.45}
              className="max-w-[16ch] text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.035em]"
              segmentClassName="mr-[0.28em] inline-block"
            >
              Tools I use to build
            </TextAnimate>

            <BlurFade delay={0.25} inView direction="up" offset={14}>
              <p className="mt-4 max-w-[48ch] text-[14px] leading-relaxed text-white/50">
                Full-stack web, mobile, and data-minded tools — focused on shipping reliable
                products with {SITE.teamName}.
              </p>
            </BlurFade>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {SITE.techGroups.map((group, i) => (
            <BlurFade
              key={group.title}
              delay={0.15 + i * 0.1}
              inView
              direction="up"
              offset={24}
              className="h-full"
            >
              <MagicCard
                gradientSize={260}
                gradientColor="#1a1a1a"
                gradientOpacity={0.7}
                gradientFrom="#ffffff"
                gradientTo="#404040"
                className="h-full min-h-[240px] rounded-2xl"
              >
                <article className="flex h-full min-h-[240px] flex-col justify-between p-6 md:p-7">
                  <span className="text-[11px] tracking-[0.14em] text-white/35 uppercase">
                    /0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold tracking-tight">{group.title}</h3>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-white/12 px-3 py-1.5 text-[12px] text-white/75 transition-colors hover:border-white/30 hover:bg-white/5"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
