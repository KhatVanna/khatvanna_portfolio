"use client";

import { useState } from "react";
import Image from "next/image";

type Service = {
  id: string;
  title: string;
  description: string;
  categories: string[];
  images: [string, string];
};

const SERVICES: Service[] = [
  {
    id: "01",
    title: "UI/UX Design",
    description:
      "We craft immersive digital interfaces that prioritize user clarity and seamless navigation across every touchpoint.",
    categories: ["USER RESEARCH", "WIREFRAMING", "PROTOTYPING"],
    images: ["/images/services/svc-0.webp", "/images/services/svc-1.webp"],
  },
  {
    id: "02",
    title: "Brand Identity",
    description:
      "We build comprehensive visual systems that capture the core essence and unique personality of your business.",
    categories: ["PACKAGING DESIGN", "LOGO DESIGN", "REBRANDING"],
    images: ["/images/services/svc-2.webp", "/images/services/svc-3.webp"],
  },
  {
    id: "03",
    title: "Web Development",
    description:
      "Our team translates high-end designs into high-performance digital products using clean, scalable code.",
    categories: ["REACT/NEXT.JS", "CMS INTEGRATION", "E-COMMERCE"],
    images: ["/images/services/svc-4.webp", "/images/services/svc-5.webp"],
  },
  {
    id: "04",
    title: "Digital Strategy",
    description:
      "We provide the data-driven roadmap necessary to navigate the competitive landscape.",
    categories: ["MARKET ANALYSIS", "SEO AUDIT", "GROWTH HACKING"],
    images: ["/images/services/svc-6.webp", "/images/services/svc-7.webp"],
  },
];

export default function ServicesSection() {
  const [openId, setOpenId] = useState("01");

  return (
    <section id="services" className="relative overflow-hidden bg-black text-white">
      <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 md:py-20 lg:px-10 lg:py-24">
        <div className="mb-2 md:mb-4">
          <p className="mb-6 flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase md:mb-8">
            <span className="inline-block h-3 w-px bg-white" aria-hidden />
            What We Do
          </p>
          <div className="flex items-end justify-between gap-6 border-b border-white/15 pb-6 md:pb-8">
            <h2 className="text-[clamp(3rem,8vw,6.5rem)] font-semibold leading-none tracking-[-0.04em]">
              Services
            </h2>
            <span className="pb-1 text-[clamp(2rem,5vw,4rem)] font-semibold leading-none tracking-tight text-white/20">
              (04)
            </span>
          </div>
        </div>

        <div>
          {SERVICES.map((service) => {
            const isOpen = openId === service.id;

            return (
              <div key={service.id} className="border-b border-white/15">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? "" : service.id)}
                  aria-expanded={isOpen}
                  className="grid w-full grid-cols-[auto_1fr_auto] items-start gap-4 py-6 text-left md:grid-cols-[7.5rem_1fr_auto] md:gap-10 md:py-8 lg:grid-cols-[9rem_1fr_auto] lg:gap-14"
                >
                  <span
                    className={`pt-1 text-[clamp(1.75rem,3.5vw,3rem)] font-semibold leading-none tracking-tight transition-colors duration-300 ${
                      isOpen ? "text-white" : "text-white/25"
                    }`}
                  >
                    {service.id}.
                  </span>

                  <span className="min-w-0">
                    <span className="inline-flex flex-wrap items-start gap-x-1.5">
                      <span className="text-[clamp(1.5rem,3.2vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
                        {service.title}
                      </span>
                      <sup className="mt-2 text-[0.65rem] font-medium tracking-normal text-white/45 md:mt-3 md:text-xs">
                        ({service.id})
                      </sup>
                    </span>
                  </span>

                  <span
                    className="flex h-8 w-8 items-center justify-center pt-1 text-2xl leading-none text-white md:pt-2"
                    aria-hidden
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-8 md:pb-10 md:pl-[calc(7.5rem+2.5rem)] lg:pl-[calc(9rem+3.5rem)]">
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
                        {service.images.map((src, i) => (
                          <div
                            key={src}
                            className="relative aspect-16/10 overflow-hidden rounded-xl md:rounded-2xl"
                          >
                            <Image
                              src={src}
                              alt={`${service.title} visual ${i + 1}`}
                              fill
                              sizes="(max-width: 640px) 100vw, 40vw"
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>

                      <p className="mt-5 max-w-[54ch] text-[14px] leading-relaxed text-white/85 md:mt-6 md:text-[15px]">
                        {service.description}
                      </p>

                      <div className="mt-6 md:mt-8">
                        <p className="mb-3 text-sm text-white/65">Categories</p>
                        <div className="flex flex-wrap gap-2.5">
                          {service.categories.map((cat) => (
                            <span
                              key={cat}
                              className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[11px] font-medium tracking-[0.08em] text-white uppercase"
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
