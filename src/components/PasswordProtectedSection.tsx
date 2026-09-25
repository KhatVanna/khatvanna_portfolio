"use client";

import { type FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { SITE } from "@/data/site";

export default function PasswordProtectedSection() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      setError(true);
      return;
    }
    // Demo unlock — template showcase only
    if (password.trim().toLowerCase() === SITE.password) {
      setError(false);
      router.push("/");
      return;
    }
    setError(true);
  };

  return (
    <section
      id="password-protected"
      className="relative flex min-h-screen flex-col overflow-hidden bg-white text-black"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 hidden grid-cols-4 md:grid"
      >
        <div className="border-r border-black/8" />
        <div className="border-r border-black/8" />
        <div className="border-r border-black/8" />
        <div />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-center px-5 pt-28 pb-16 md:px-8 md:pt-32 md:pb-20 lg:px-10 lg:pt-36">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
          <div className="md:col-span-3 lg:col-span-2">
            <h1 className="max-w-[12ch] text-[clamp(2.5rem,6vw,4.75rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
              This pages is protected
            </h1>
            <p className="mt-6 max-w-[36ch] text-[15px] leading-relaxed text-neutral-600 md:mt-8 md:text-base">
              This page is protected by password. Please enter the password to access content.
            </p>
          </div>

          <div className="md:col-span-4 md:col-start-3 lg:col-span-2 lg:col-start-3">
            <form onSubmit={onSubmit} className="w-full max-w-md md:ml-auto md:max-w-none">
              <div className="flex items-center gap-3 border-b border-black/20 pb-3">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (error) setError(false);
                  }}
                  placeholder="Enter your password"
                  aria-label="Password"
                  className="w-full bg-transparent text-[15px] text-black outline-none placeholder:text-neutral-400"
                  autoComplete="current-password"
                />
                <button
                  type="submit"
                  aria-label="Submit password"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform hover:scale-105"
                >
                  →
                </button>
              </div>
              {error && (
                <p className="mt-4 text-sm text-red-600" role="alert">
                  Incorrect password. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
