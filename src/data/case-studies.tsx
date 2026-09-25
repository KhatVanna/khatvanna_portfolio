import type { ReactNode } from "react";

export type CaseMeta = { label: string; value: string };

export type CaseStat = {
  value: string;
  label: string;
  body: string;
};

export type CaseRelated = {
  title: string;
  date: string;
  image: string;
  href: string;
};

export type CaseStudy = {
  slug: string;
  title: ReactNode;
  titlePlain: string;
  heroImage: string;
  heroAlt: string;
  heroVariant?: "cover" | "composite";
  meta: CaseMeta[];
  overviewHeadline: string;
  overviewBody: string;
  overviewImage: string;
  overviewImageAlt: string;
  challengeImage: string;
  challengeImageAlt: string;
  challengeLead: string;
  challengeBody: string;
  showcaseImage: string;
  showcaseImageAlt: string;
  showcaseVariant: "framed" | "full";
  showcaseRecognition: string;
  /** Extra body under recognition (Veloce / Aura) */
  showcaseBody?: string;
  /** Quote in showcase column (Veloce / Aura) vs results (Zenith) */
  quoteInShowcase?: boolean;
  resultsImage?: string;
  resultsImageAlt?: string;
  resultsBody: string;
  quote: string;
  quoteAttribution: string;
  stats: CaseStat[];
  gallery: string[];
  related: CaseRelated[];
};

export const CASE_STATS: CaseStat[] = [
  {
    value: "+215%",
    label: "Average Session Duration",
    body: "By implementing seamless, scroll-triggered transitions and cinematic project walkthroughs.",
  },
  {
    value: "<1.2s",
    label: "Average Page Load Time",
    body: 'Despite the heavy reliance on high-resolution imagery and video assets, our "clean-code" architecture and advanced lazy-loading.',
  },
  {
    value: "140%",
    label: "Increase in Global Inquiries",
    body: "The redesign directly optimized the user journey for prospective B2B clients, leading to a measurable surge in high-value projects.",
  },
  {
    value: "98/100",
    label: "Google Lighthouse Score",
    body: "Our commitment to technical excellence resulted in near-perfect scores for performance, accessibility, and SEO.",
  },
];

const SHARED_GALLERY = [
  "/images/zenith/gallery-06.webp",
  "/images/zenith/gallery-10.webp",
  "/images/zenith/gallery-08.webp",
  "/images/zenith/gallery-05.webp",
  "/images/zenith/gallery-09.webp",
  "/images/zenith/gallery-11.webp",
];

const SHARED_RELATED: CaseRelated[] = [
  {
    title: "Zenith Brand Refresh",
    date: "Sept 2025",
    image: "/images/zenith/related-zenith.webp",
    href: "/projects/zenith-brand-refresh",
  },
  {
    title: "Veloce E-Commerce",
    date: "Feb 2025",
    image: "/images/veloce/related-veloce.webp",
    href: "/projects/veloce-e-commerce",
  },
];

export const zenithCase: CaseStudy = {
  slug: "zenith-brand-refresh",
  title: (
    <>
      Zenith Brand
      <br />
      Refresh
    </>
  ),
  titlePlain: "Zenith Brand Refresh",
  heroImage: "/images/zenith/hero.webp",
  heroAlt: "Horizon brand identity",
  meta: [
    { label: "Client", value: "Zenith Brand" },
    { label: "Date", value: "Sept 2025" },
    { label: "Industry", value: "Virtual Gallery" },
    { label: "Skills", value: "Brand Identity  Web Development" },
  ],
  overviewHeadline:
    "Northland Studio is an award-winning architectural collective defined by its commitment to brutalist minimalism and structural honesty.",
  overviewBody:
    "Their digital challenge was significant: their existing online presence felt static and failed to capture the spatial depth and tactile materiality of their physical work.",
  overviewImage: "/images/zenith/office.webp",
  overviewImageAlt: "Team collaborating in studio",
  challengeImage: "/images/zenith/challenge.webp",
  challengeImageAlt: "Product UI collage",
  challengeLead:
    'Northland Studio, a premier architectural firm known for their brutalist and minimalist structures, faced a significant digital hurdle: their existing portfolio felt static and failed to capture the spatial depth of their physical work. They needed a digital presence that functioned as a "virtual gallery", a high-performance platform that could handle high-resolution imagery and complex motion without sacrificing SEO.',
  challengeBody:
    'Our approach was rooted in "Digital Brutalism." We stripped away unnecessary UI clutter to let the photography lead the narrative. By implementing a custom-engineered grid system and "scroll-triggered" animations, we mirrored the experience of walking through an architectural space. We focused on a "Mobile-First Luxury" philosophy, ensuring the tactile feel of the site remained intact across all touchpoints.',
  showcaseImage: "/images/zenith/showcase.webp",
  showcaseImageAlt: "Project website showcase",
  showcaseVariant: "framed",
  showcaseRecognition:
    "The project was recognized by Awwwards with a Site of the Day honors, solidifying Northland's position as a leader in both physical and digital design spaces.",
  resultsImage: "/images/zenith/showcase.webp",
  resultsImageAlt: "About section mockup",
  resultsBody:
    "The relaunch of the Northland Studio website resulted in a 215% increase in session duration and a significant uptick in international inquiries.",
  quote:
    "Khat Vanna didn't just build us a website; they built a digital monument. They understood the nuances of our architectural philosophy and translated it into a fluid, digital experience.",
  quoteAttribution: "Mark T. — CTO at Flow",
  stats: CASE_STATS,
  gallery: SHARED_GALLERY,
  related: SHARED_RELATED,
};

export const veloceCase: CaseStudy = {
  slug: "veloce-e-commerce",
  title: (
    <>
      Veloce
      <br />
      E-Commerce
    </>
  ),
  titlePlain: "Veloce E-Commerce",
  heroImage: "/images/veloce/hero.webp",
  heroAlt: "Veloce mobile commerce mockup",
  meta: [
    { label: "Client", value: "E-Commerce" },
    { label: "Date", value: "Feb 2025" },
    { label: "Industry", value: "Structural Honesty" },
    { label: "Skills", value: "Digital Strategy\nUI/UX Design" },
  ],
  overviewHeadline:
    "Northland Studio is an award-winning architectural collective defined by its commitment to brutalist minimalism and structural honesty.",
  overviewBody:
    "Their digital challenge was significant: their existing online presence felt static and failed to capture the spatial depth and tactile materiality of their physical work.",
  overviewImage: "/images/veloce/overview.webp",
  overviewImageAlt: "Mobile product mockup on perforated metal",
  challengeImage: "/images/veloce/challenge.webp",
  challengeImageAlt: "Abstract glass form",
  challengeLead:
    'Northland Studio, a premier architectural firm known for their brutalist and minimalist structures, faced a significant digital hurdle: their existing portfolio felt static and failed to capture the spatial depth of their physical work. They needed a digital presence that functioned as a "virtual gallery", a high-performance platform that could handle high-resolution imagery and complex motion without sacrificing SEO.',
  challengeBody:
    'Our approach was rooted in "Digital Brutalism." We stripped away unnecessary UI clutter to let the photography lead the narrative. By implementing a custom-engineered grid system and "scroll-triggered" animations, we mirrored the experience of walking through an architectural space. We focused on a "Mobile-First Luxury" philosophy, ensuring the tactile feel of the site remained intact across all touchpoints.',
  showcaseImage: "/images/veloce/car.webp",
  showcaseImageAlt: "Sports car on orange glow",
  showcaseVariant: "full",
  showcaseRecognition:
    "The project was recognized by Awwwards with a Site of the Day honors, solidifying Northland's position as a leader in both physical and digital design spaces.",
  showcaseBody:
    "The relaunch of the Northland Studio website resulted in a 215% increase in session duration and a significant uptick in international inquiries.",
  quoteInShowcase: true,
  resultsBody:
    "The relaunch of the Northland Studio website resulted in a 215% increase in session duration and a significant uptick in international inquiries.",
  quote:
    "Khat Vanna didn't just build us a website; they built a digital monument. They understood the nuances of our architectural philosophy and translated it into a fluid, digital experience.",
  quoteAttribution: "Mark T. — CTO at Flow",
  stats: CASE_STATS,
  gallery: [
    "/images/veloce/gallery-06.webp",
    "/images/veloce/gallery-10.webp",
    "/images/veloce/gallery-08.webp",
    "/images/veloce/gallery-05.webp",
    "/images/veloce/gallery-09.webp",
    "/images/veloce/gallery-11.webp",
  ],
  related: SHARED_RELATED,
};

export const auraCase: CaseStudy = {
  slug: "aura-fintech-app",
  title: (
    <>
      Aura Fintech
      <br />
      App
    </>
  ),
  titlePlain: "Aura Fintech App",
  heroImage: "/images/aura/hero-crop.webp",
  heroAlt: "Aura Fintech App case study showcase",
  heroVariant: "composite",
  meta: [
    { label: "Client", value: "Aura App" },
    { label: "Date", value: "June 2025" },
    { label: "Industry", value: "Architectural Collective" },
    { label: "Skills", value: "Digital Strategy  Brand Identity" },
  ],
  overviewHeadline:
    "Northland Studio is an award-winning architectural collective defined by its commitment to brutalist minimalism and structural honesty.",
  overviewBody:
    "Their digital challenge was significant: their existing online presence felt static and failed to capture the spatial depth and tactile materiality of their physical work.",
  overviewImage: "/images/aura/overview.webp",
  overviewImageAlt: "Typography exhibition banners",
  challengeImage: "/images/aura/challenge.webp",
  challengeImageAlt: "Monitor with motion light trails",
  challengeLead:
    'Northland Studio, a premier architectural firm known for their brutalist and minimalist structures, faced a significant digital hurdle: their existing portfolio felt static and failed to capture the spatial depth of their physical work. They needed a digital presence that functioned as a "virtual gallery", a high-performance platform that could handle high-resolution imagery and complex motion without sacrificing SEO.',
  challengeBody:
    'Our approach was rooted in "Digital Brutalism." We stripped away unnecessary UI clutter to let the photography lead the narrative. By implementing a custom-engineered grid system and "scroll-triggered" animations, we mirrored the experience of walking through an architectural space. We focused on a "Mobile-First Luxury" philosophy, ensuring the tactile feel of the site remained intact across all touchpoints.',
  showcaseImage: "/images/aura/car.webp",
  showcaseImageAlt: "Sports car on orange glow",
  showcaseVariant: "full",
  showcaseRecognition:
    "The project was recognized by Awwwards with a Site of the Day honors, solidifying Northland's position as a leader in both physical and digital design spaces.",
  showcaseBody:
    "The relaunch of the Northland Studio website resulted in a 215% increase in session duration and a significant uptick in international inquiries.",
  quoteInShowcase: true,
  resultsBody:
    "The relaunch of the Northland Studio website resulted in a 215% increase in session duration and a significant uptick in international inquiries.",
  quote:
    "Khat Vanna didn't just build us a website; they built a digital monument. They understood the nuances of our architectural philosophy and translated it into a fluid, digital experience.",
  quoteAttribution: "Mark T. — CTO at Flow",
  stats: CASE_STATS,
  gallery: [
    "/images/aura/gallery-06.webp",
    "/images/aura/gallery-10.webp",
    "/images/aura/gallery-08.webp",
    "/images/aura/gallery-05.webp",
    "/images/aura/gallery-09.webp",
    "/images/aura/gallery-11.webp",
  ],
  related: SHARED_RELATED,
};

export const stellarCase: CaseStudy = {
  slug: "stellar-saas-dashboard",
  title: (
    <>
      Stellar Saas
      <br />
      Dashboard
    </>
  ),
  titlePlain: "Stellar SaaS Dashboard",
  heroImage: "/images/stellar/hero.webp",
  heroAlt: "Stellar SaaS Dashboard ad campaign mockup",
  meta: [
    { label: "Client", value: "Northland Studio" },
    { label: "Date", value: "Nov 2025" },
    { label: "Industry", value: "Architectural Collective" },
    { label: "Skills", value: "Brand Identity\nUI/UX Design" },
  ],
  overviewHeadline:
    "Northland Studio is an award-winning architectural collective defined by its commitment to brutalist minimalism and structural honesty.",
  overviewBody:
    "Their digital challenge was significant: their existing online presence felt static and failed to capture the spatial depth and tactile materiality of their physical work.",
  overviewImage: "/images/stellar/overview.webp",
  overviewImageAlt: "Mobile brand identity mockup suspended by rope",
  challengeImage: "/images/stellar/challenge.webp",
  challengeImageAlt: "Brand packaging and stationery",
  challengeLead:
    'Northland Studio, a premier architectural firm known for their brutalist and minimalist structures, faced a significant digital hurdle: their existing portfolio felt static and failed to capture the spatial depth of their physical work. They needed a digital presence that functioned as a "virtual gallery", a high-performance platform that could handle high-resolution imagery and complex motion without sacrificing SEO.',
  challengeBody:
    'Our approach was rooted in "Digital Brutalism." We stripped away unnecessary UI clutter to let the photography lead the narrative. By implementing a custom-engineered grid system and "scroll-triggered" animations, we mirrored the experience of walking through an architectural space. We focused on a "Mobile-First Luxury" philosophy, ensuring the tactile feel of the site remained intact across all touchpoints.',
  showcaseImage: "/images/stellar/car.webp",
  showcaseImageAlt: "Sports car on orange glow",
  showcaseVariant: "full",
  showcaseRecognition:
    "The project was recognized by Awwwards with a Site of the Day honors, solidifying Northland's position as a leader in both physical and digital design spaces.",
  showcaseBody:
    "The relaunch of the Northland Studio website resulted in a 215% increase in session duration and a significant uptick in international inquiries.",
  quoteInShowcase: true,
  resultsBody:
    "The relaunch of the Northland Studio website resulted in a 215% increase in session duration and a significant uptick in international inquiries.",
  quote:
    "Khat Vanna didn't just build us a website; they built a digital monument. They understood the nuances of our architectural philosophy and translated it into a fluid, digital experience.",
  quoteAttribution: "Mark T. — CTO at Flow",
  stats: CASE_STATS,
  gallery: [
    "/images/stellar/gallery-06.webp",
    "/images/stellar/gallery-10.webp",
    "/images/stellar/gallery-08.webp",
    "/images/stellar/gallery-05.webp",
    "/images/stellar/gallery-09.webp",
    "/images/stellar/gallery-11.webp",
  ],
  related: SHARED_RELATED,
};

export const lumaCase: CaseStudy = {
  slug: "luma-health",
  title: "Luma Health",
  titlePlain: "Luma Health",
  heroImage: "/images/luma/hero.webp",
  heroAlt: "Luma Health floating device render",
  meta: [
    { label: "Client", value: "Northland Studio" },
    { label: "Date", value: "May 2025" },
    { label: "Industry", value: "Architectural Collective" },
    { label: "Skills", value: "Brand Identity\nDigital Strategy" },
  ],
  overviewHeadline:
    "Northland Studio is an award-winning architectural collective defined by its commitment to brutalist minimalism and structural honesty.",
  overviewBody:
    "Their digital challenge was significant: their existing online presence felt static and failed to capture the spatial depth and tactile materiality of their physical work.",
  overviewImage: "/images/luma/overview.webp",
  overviewImageAlt: "Desk silhouette with phone mug and notebook on orange glow",
  challengeImage: "/images/luma/challenge.webp",
  challengeImageAlt: "Monitor with motion light trails",
  challengeLead:
    'Northland Studio, a premier architectural firm known for their brutalist and minimalist structures, faced a significant digital hurdle: their existing portfolio felt static and failed to capture the spatial depth of their physical work. They needed a digital presence that functioned as a "virtual gallery", a high-performance platform that could handle high-resolution imagery and complex motion without sacrificing SEO.',
  challengeBody:
    'Our approach was rooted in "Digital Brutalism." We stripped away unnecessary UI clutter to let the photography lead the narrative. By implementing a custom-engineered grid system and "scroll-triggered" animations, we mirrored the experience of walking through an architectural space. We focused on a "Mobile-First Luxury" philosophy, ensuring the tactile feel of the site remained intact across all touchpoints.',
  showcaseImage: "/images/luma/car.webp",
  showcaseImageAlt: "Sports car on orange glow",
  showcaseVariant: "full",
  showcaseRecognition:
    "The project was recognized by Awwwards with a Site of the Day honors, solidifying Northland's position as a leader in both physical and digital design spaces.",
  showcaseBody:
    "The relaunch of the Northland Studio website resulted in a 215% increase in session duration and a significant uptick in international inquiries.",
  quoteInShowcase: true,
  resultsBody:
    "The relaunch of the Northland Studio website resulted in a 215% increase in session duration and a significant uptick in international inquiries.",
  quote:
    "Khat Vanna didn't just build us a website; they built a digital monument. They understood the nuances of our architectural philosophy and translated it into a fluid, digital experience.",
  quoteAttribution: "Mark T. — CTO at Flow",
  stats: CASE_STATS,
  gallery: [
    "/images/luma/gallery-06.webp",
    "/images/luma/gallery-10.webp",
    "/images/luma/gallery-08.webp",
    "/images/luma/gallery-05.webp",
    "/images/luma/gallery-09.webp",
    "/images/luma/gallery-11.webp",
  ],
  related: SHARED_RELATED,
};

export const northlandCase: CaseStudy = {
  slug: "northland-studio-website",
  title: (
    <>
      Northland Studio
      <br />
      Website
    </>
  ),
  titlePlain: "Northland Studio Website",
  heroImage: "/images/northland/hero.webp",
  heroAlt: "Northland Studio tablet mockup on concrete",
  meta: [
    { label: "Client", value: "Northland Studio" },
    { label: "Date", value: "July 2025" },
    { label: "Industry", value: "Architectural Collective" },
    { label: "Skills", value: "UI/UX Design\nWeb Development" },
  ],
  overviewHeadline:
    "Northland Studio is an award-winning architectural collective defined by its commitment to brutalist minimalism and structural honesty.",
  overviewBody:
    "Their digital challenge was significant: their existing online presence felt static and failed to capture the spatial depth and tactile materiality of their physical work.",
  overviewImage: "/images/northland/overview.webp",
  overviewImageAlt: "Phone mockup on perforated metal with gradient graphic",
  challengeImage: "/images/northland/challenge.webp",
  challengeImageAlt: "Brand packaging and stationery",
  challengeLead:
    'Northland Studio, a premier architectural firm known for their brutalist and minimalist structures, faced a significant digital hurdle: their existing portfolio felt static and failed to capture the spatial depth of their physical work. They needed a digital presence that functioned as a "virtual gallery", a high-performance platform that could handle high-resolution imagery and complex motion without sacrificing SEO.',
  challengeBody:
    'Our approach was rooted in "Digital Brutalism." We stripped away unnecessary UI clutter to let the photography lead the narrative. By implementing a custom-engineered grid system and "scroll-triggered" animations, we mirrored the experience of walking through an architectural space. We focused on a "Mobile-First Luxury" philosophy, ensuring the tactile feel of the site remained intact across all touchpoints.',
  showcaseImage: "/images/northland/car.webp",
  showcaseImageAlt: "Sports car on orange glow",
  showcaseVariant: "full",
  showcaseRecognition:
    "The project was recognized by Awwwards with a Site of the Day honors, solidifying Northland's position as a leader in both physical and digital design spaces.",
  showcaseBody:
    "The relaunch of the Northland Studio website resulted in a 215% increase in session duration and a significant uptick in international inquiries.",
  quoteInShowcase: true,
  resultsBody:
    "The relaunch of the Northland Studio website resulted in a 215% increase in session duration and a significant uptick in international inquiries.",
  quote:
    "Khat Vanna didn't just build us a website; they built a digital monument. They understood the nuances of our architectural philosophy and translated it into a fluid, digital experience.",
  quoteAttribution: "Mark T. — CTO at Flow",
  stats: CASE_STATS,
  gallery: [
    "/images/northland/gallery-06.webp",
    "/images/northland/gallery-10.webp",
    "/images/northland/gallery-08.webp",
    "/images/northland/gallery-05.webp",
    "/images/northland/gallery-09.webp",
    "/images/northland/gallery-11.webp",
  ],
  related: SHARED_RELATED,
};
