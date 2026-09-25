export type BlogCategory = "All" | "Support" | "Development" | "Web dessign";

export type BlogPost = {
  slug: string;
  author: string;
  role: string;
  date: string;
  title: string;
  image: string;
  avatar: string;
  category: Exclude<BlogCategory, "All">;
  /** Full-width featured image on the article page (falls back to `image`) */
  heroImage?: string;
  /** Mid-article image */
  inlineImage?: string;
  inlineImageAlt?: string;
};

export const BLOG_CATEGORIES: BlogCategory[] = [
  "All",
  "Support",
  "Development",
  "Web dessign",
];

export const BLOG_ARTICLE = {
  lead: 'In the early days of the web, animation was often dismissed as a distraction—a decorative layer of "fluff" that slowed down performance. In my practice, I view motion differently. Movement is a fundamental part of the interface — a silent guide that provides spatial context, reinforces hierarchy, and reduces cognitive load.',
  sections: [
    {
      heading: "Micro-Interactions as Feedback Loops",
      paragraphs: [
        "The most effective animations are often the ones you barely notice. Micro-interactions—like a subtle button depression, a smooth toggle switch, or a progress bar that breathes—provide immediate haptic-like feedback to the user.",
      ],
      showInlineImage: true,
    },
    {
      quote: {
        text: "The stock market is a device to transfer money from the impatient to the patient.",
        attribution: "Warren Buffett",
      },
    },
    {
      heading: "Scroll-Triggered Spatial Narrative",
      paragraphs: [
        'Standard scrolling can feel repetitive. We are moving toward "scrollytelling," where the background, typography, and imagery react dynamically to the user\'s pace.',
        "Typography is no longer static. We are utilizing variable fonts and kinetic motion to emphasize key headlines. Whether it's a subtle weight shift upon hover or a bold, sliding entrance for a Hero section, motion gives words a physical presence.",
        'The "hard cut" is becoming a thing of the past. Liquid transitions—where one section morphs organically into the next—create a flow that feels more human and less mechanical.',
      ],
    },
    {
      heading: "The Performance Standard: Motion Without Compromise",
      paragraphs: [
        "While these trends are powerful, I never prioritize motion at the expense of performance. Every animation I ship is optimized for 60fps and uses hardware acceleration so the experience stays as fast as it is polished.",
      ],
    },
  ],
} as const;

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "why-high-end-brands-are-trading-polish-for-structural-honesty-and-bold-typography",
    author: "Marcus Thorne",
    role: "Editor",
    date: "July 14, 2026",
    title:
      "Why High-End Brands are Trading Polish for Structural Honesty and Bold Typography.",
    image: "/images/blog-page/post-1.webp",
    heroImage: "/images/blog-post/hero.webp",
    avatar: "/images/blog-page/avatar-marcus.webp",
    category: "Web dessign",
    inlineImage: "/images/blog-post/inline.webp",
    inlineImageAlt: "Horizon brand mark on dark pebble forms",
  },
  {
    slug: "how-behavioral-psychology-and-cognitive-load-theory-drive-digital-conversions",
    author: "Sophia Chen",
    role: "Editor",
    date: "July 14, 2026",
    title:
      "How Behavioral Psychology and Cognitive Load Theory Drive Digital Conversions.",
    image: "/images/blog-page/post-2.webp",
    heroImage: "/images/blog-post/hero-behavioral.webp",
    avatar: "/images/blog-page/avatar-sophia.webp",
    category: "Support",
    inlineImage: "/images/blog-post/inline-behavioral.webp",
    inlineImageAlt: "Editorial product photography",
  },
  {
    slug: "motion-with-meaning-exploring-the-top-5-web-animation-trends-that-enhance-usability",
    author: "Marcus Thorne",
    role: "Editor",
    date: "July 14, 2026",
    title:
      "Motion with Meaning: Exploring the Top 5 Web Animation Trends That Enhance Usability",
    image: "/images/blog-page/post-3.webp",
    heroImage: "/images/blog-post/hero-motion.webp",
    avatar: "/images/blog-page/avatar-marcus.webp",
    category: "Development",
    inlineImage: "/images/blog-post/inline-motion.webp",
    inlineImageAlt: "Abstract motion graphic",
  },
  {
    slug: "implementing-scalable-ux-frameworks-that-support-rapid-user-acquisition-and-retention",
    author: "Sophia Chen",
    role: "Editor",
    date: "July 14, 2026",
    title:
      "Implementing Scalable UX Frameworks That Support Rapid User Acquisition and Retention",
    image: "/images/blog-page/post-4.webp",
    heroImage: "/images/blog-post/hero-scalable.webp",
    avatar: "/images/blog-page/avatar-sophia.webp",
    category: "Development",
    inlineImage: "/images/blog-post/inline-scalable.webp",
    inlineImageAlt: "Mobile interface mockup",
  },
  {
    slug: "why-minimalist-visual-identities-continue-to-dominate-the-modern-luxury-and-tech",
    author: "Lily Vance",
    role: "Editor",
    date: "July 14, 2026",
    title:
      "Why Minimalist Visual Identities Continue to Dominate the Modern Luxury and Tech",
    image: "/images/blog-page/post-5.webp",
    heroImage: "/images/blog-post/hero-minimalist.webp",
    avatar: "/images/blog-page/avatar-lily.webp",
    category: "Web dessign",
    inlineImage: "/images/blog-post/inline-minimalist.webp",
    inlineImageAlt: "Floating device render",
  },
  {
    slug: "how-ai-is-redefining-the-next-generation-of-user-interfaces",
    author: "Alex Reed",
    role: "Editor",
    date: "July 13, 2026",
    title: "How AI is Redefining the Next Generation of User Interfaces.",
    image: "/images/blog-page/post-6.webp",
    heroImage: "/images/blog-post/hero-ai.webp",
    avatar: "/images/blog-page/avatar-alex.webp",
    category: "Development",
    inlineImage: "/images/blog-post/inline-ai.webp",
    inlineImageAlt: "Sports car on orange glow",
  },
];

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

/** Related posts shown under a single article. */
export function getRelatedPosts(slug: string, limit = 4) {
  const preferred = [
    "how-ai-is-redefining-the-next-generation-of-user-interfaces",
    "why-minimalist-visual-identities-continue-to-dominate-the-modern-luxury-and-tech",
    "implementing-scalable-ux-frameworks-that-support-rapid-user-acquisition-and-retention",
    "motion-with-meaning-exploring-the-top-5-web-animation-trends-that-enhance-usability",
  ];
  const fromPreferred = preferred
    .map((s) => BLOG_POSTS.find((p) => p.slug === s))
    .filter((p): p is BlogPost => !!p && p.slug !== slug);
  if (fromPreferred.length >= limit) return fromPreferred.slice(0, limit);
  const rest = BLOG_POSTS.filter(
    (p) => p.slug !== slug && !fromPreferred.some((x) => x.slug === p.slug),
  );
  return [...fromPreferred, ...rest].slice(0, limit);
}
