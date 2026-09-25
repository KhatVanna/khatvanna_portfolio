import type { Metadata } from "next";
import PasswordProtectedSection from "@/components/PasswordProtectedSection";
import SiteNav from "@/components/SiteNav";

export const metadata: Metadata = {
  title: "Protected page — Conax® Studio",
  description: "This page is protected by password. Please enter the password to access content.",
};

export default function PasswordProtectedPage() {
  return (
    <main>
      <SiteNav />
      <PasswordProtectedSection />
    </main>
  );
}
