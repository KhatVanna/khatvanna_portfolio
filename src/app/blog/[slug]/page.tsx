import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostBody from "@/components/BlogPostBody";
import BlogPostHero from "@/components/BlogPostHero";
import BlogRelatedNews from "@/components/BlogRelatedNews";
import FooterSection from "@/components/FooterSection";
import SiteNav from "@/components/SiteNav";
import {
  BLOG_ARTICLE,
  BLOG_POSTS,
  getBlogPost,
  getRelatedPosts,
} from "@/data/blog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Blog — Conax® Studio" };
  return {
    title: `${post.title.replace(/\.$/, "")} — Conax® Studio`,
    description: BLOG_ARTICLE.lead,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug);
  const articlePost = {
    ...post,
    heroImage: post.heroImage ?? post.image,
    inlineImage: post.inlineImage ?? "/images/blog-post/inline.webp",
    inlineImageAlt: post.inlineImageAlt ?? "Article visual",
  };

  return (
    <main>
      <SiteNav />
      <BlogPostHero post={articlePost} />
      <BlogPostBody post={articlePost} />
      <BlogRelatedNews posts={related} />
      <FooterSection />
    </main>
  );
}
