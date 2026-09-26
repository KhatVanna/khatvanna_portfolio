"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Skill = {
  id: string;
  title: string;
  description: string;
  categories: string[];
  images: [string, string];
};

const SKILLS: Skill[] = [
  {
    id: "01",
    title: "Web Development",
    description:
      "Modern full-stack web apps with Laravel, React, PHP, and JavaScript — from concept to deployment.",
    categories: ["LARAVEL", "REACT", "PHP", "JAVASCRIPT"],
    images: ["/images/services/svc-0.webp", "/images/services/svc-1.webp"],
  },
  {
    id: "02",
    title: "Mobile Apps",
    description:
      "Cross-platform mobile experiences with Flutter, delivering native feel on iOS and Android from one codebase.",
    categories: ["FLUTTER", "DART", "FIREBASE"],
    images: ["/images/services/svc-2.webp", "/images/services/svc-3.webp"],
  },
  {
    id: "03",
    title: "Backend & Data",
    description:
      "APIs, databases, and reliable server-side systems with MySQL, PostgreSQL, and clean architecture.",
    categories: ["MYSQL", "POSTGRESQL", "API", "PYTHON"],
    images: ["/images/services/svc-4.webp", "/images/services/svc-5.webp"],
  },
  {
    id: "04",
    title: "Team Leadership",
    description:
      "Founder & Team Leader of Kalapak Code Team — planning, mentoring, and shipping software with purpose from Cambodia.",
    categories: ["LEADERSHIP", "MENTORING", "AGILE"],
    images: ["/images/services/svc-6.webp", "/images/services/svc-7.webp"],
  },
];

export default function ServicesSection() {
  const [openId, setOpenId] = useState("01");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let raf = 0;

    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section) return;

        const sectionRect = section.getBoundingClientRect();
        const vh = window.innerHeight;

        if (sectionRect.bottom < vh * 0.18) {
          setOpenId(SKILLS[SKILLS.length - 1].id);
          return;
        }
        if (sectionRect.top > vh * 0.5) {
          setOpenId(SKILLS[0].id);
          return;
        }

        // Conax: open the last row whose header has crossed the upper trigger line
        const triggerY = vh * 0.28;
        let active = SKILLS[0].id;

        itemRefs.current.forEach((el, i) => {
          if (!el) return;
          if (el.getBoundingClientRect().top <= triggerY) {
            active = SKILLS[i].id;
          }
        });

        setOpenId(active);
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative z-10 overflow-hidden bg-black text-white"
    >
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
        {/* Header */}
        <div className="mb-2 md:mb-4">
          <p className="mb-6 flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase md:mb-8">
            <span className="inline-block h-3 w-px bg-white" aria-hidden />
            What I Do
          </p>
          <div className="flex items-end justify-between gap-6 border-b border-white/15 pb-6 md:pb-8">
            <h2 className="text-[clamp(3rem,8vw,6.5rem)] font-semibold leading-none tracking-[-0.04em]">
              Skills
            </h2>
            <span className="pb-1 text-[clamp(2rem,5vw,4rem)] font-semibold leading-none tracking-tight text-white/20">
              (04)
            </span>
          </div>
        </div>

        {/* Accordion — Conax style */}
        <div>
          {SKILLS.map((skill, index) => {
            const isOpen = openId === skill.id;
            const isHot = isOpen || hoveredId === skill.id;

            return (
              <div
                key={skill.id}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className="border-b border-white/15"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(skill.id)}
                  onMouseEnter={() => setHoveredId(skill.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  aria-expanded={isOpen}
                  className="grid w-full grid-cols-[auto_1fr_auto] items-start gap-4 py-6 text-left md:grid-cols-[7.5rem_1fr_auto] md:gap-10 md:py-8 lg:grid-cols-[9rem_1fr_auto] lg:gap-14"
                >
                  <span
                    className={`pt-1 text-[clamp(1.75rem,3.5vw,3rem)] font-semibold leading-none tracking-tight transition-colors duration-500 ${
                      isHot ? "text-white" : "text-white/18"
                    }`}
                  >
                    {skill.id}.
                  </span>

                  <span className="min-w-0">
                    <span className="inline-flex flex-wrap items-start gap-x-1.5">
                      <span
                        className={`text-[clamp(1.5rem,3.2vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] transition-colors duration-500 ${
                          isHot ? "text-white" : "text-white/55"
                        }`}
                      >
                        {skill.title}
                      </span>
                      <sup className="mt-2 text-[0.65rem] font-medium tracking-normal text-white/40 md:mt-3 md:text-xs">
                        ({skill.id})
                      </sup>
                    </span>
                  </span>

                  <span
                    className="relative mt-1 flex h-8 w-8 items-center justify-center text-[1.75rem] leading-none text-white md:mt-2"
                    aria-hidden
                  >
                    <span
                      className={`absolute transition-all duration-400 ${
                        isOpen ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-75 opacity-0"
                      }`}
                    >
                      −
                    </span>
                    <span
                      className={`absolute transition-all duration-400 ${
                        isOpen ? "-rotate-90 scale-75 opacity-0" : "rotate-0 scale-100 opacity-100"
                      }`}
                    >
                      +
                    </span>
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className={`pb-10 md:pb-14 md:pl-[calc(7.5rem+2.5rem)] lg:pl-[calc(9rem+3.5rem)] ${
                        isOpen ? "opacity-100" : "opacity-0"
                      } transition-opacity duration-500`}
                    >
                      {/* Two visuals */}
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
                        {skill.images.map((src, i) => (
                          <div
                            key={src}
                            className="relative aspect-16/10 overflow-hidden rounded-xl bg-white/5 md:rounded-2xl"
                            style={{
                              transform: isOpen
                                ? "translate3d(0, 0, 0) scale(1)"
                                : "translate3d(0, 32px, 0) scale(0.97)",
                              opacity: isOpen ? 1 : 0,
                              transition: `transform 0.85s cubic-bezier(0.22, 1, 0.36, 1) ${
                                60 + i * 100
                              }ms, opacity 0.6s ease ${60 + i * 100}ms`,
                            }}
                          >
                            <Image
                              src={src}
                              alt={`${skill.title} visual ${i + 1}`}
                              fill
                              sizes="(max-width: 640px) 100vw, 40vw"
                              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
                            />
                          </div>
                        ))}
                      </div>

                      <p
                        className="mt-5 max-w-[54ch] text-[14px] leading-relaxed text-white/80 md:mt-6 md:text-[15px]"
                        style={{
                          opacity: isOpen ? 1 : 0,
                          transform: isOpen ? "translateY(0)" : "translateY(14px)",
                          transition: "opacity 0.55s ease 180ms, transform 0.55s ease 180ms",
                        }}
                      >
                        {skill.description}
                      </p>

                      <div
                        className="mt-6 md:mt-8"
                        style={{
                          opacity: isOpen ? 1 : 0,
                          transform: isOpen ? "translateY(0)" : "translateY(14px)",
                          transition: "opacity 0.55s ease 260ms, transform 0.55s ease 260ms",
                        }}
                      >
                        <p className="mb-3 text-sm text-white/55">Categories</p>
                        <div className="flex flex-wrap gap-2.5">
                          {skill.categories.map((cat) => (
                            <span
                              key={cat}
                              className="rounded-full border border-white/20 bg-white/[0.04] px-4 py-2 text-[11px] font-medium tracking-[0.08em] text-white uppercase transition-colors hover:border-white/40 hover:bg-white/10"
                            >
                              {cat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
