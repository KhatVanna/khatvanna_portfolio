import type { Metadata } from "next";
import NotFoundSection from "@/components/NotFoundSection";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Not Found — Khat Vanna",
  description: "Page not found. The request URL doesn't exist.",
};

export default function NotFoundPage() {
  return (
    <main>
      <SiteNav />
      <NotFoundSection />
    </main>
  );
}
