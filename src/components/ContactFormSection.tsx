"use client";

import { type FormEvent, useState } from "react";
import Image from "next/image";

const AVATARS = [
  "/images/avatar-1.webp",
  "/images/avatar-2.webp",
  "/images/avatar-3.webp",
  "/images/avatar-mark.webp",
];

const FIELD =
  "w-full border-b border-black/15 bg-transparent py-3 text-[15px] text-black outline-none placeholder:text-neutral-400";

export default function ContactFormSection() {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !email.includes("@") || !project.trim()) {
      setStatus("error");
      return;
    }
    setStatus("ok");
    setFirstName("");
    setLastName("");
    setEmail("");
    setProject("");
  };

  return (
    <section id="contact-form" className="relative overflow-hidden bg-white text-black">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 hidden grid-cols-4 md:grid"
      >
        <div className="border-r border-black/8" />
        <div className="border-r border-black/8" />
        <div className="border-r border-black/8" />
        <div />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1600px] grid-cols-1 gap-14 px-5 py-16 md:grid-cols-2 md:gap-12 md:px-8 md:py-20 lg:gap-16 lg:px-10 lg:py-24">
        <div className="flex flex-col justify-between gap-12">
          <div>
            <p className="text-[11px] font-medium tracking-[0.16em] text-neutral-400 uppercase">
              Over 23K+ Clients
            </p>
            <div className="mt-4 flex items-center">
              {AVATARS.map((src, i) => (
                <div
                  key={src}
                  className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-neutral-200"
                  style={{ marginLeft: i === 0 ? 0 : -10, zIndex: AVATARS.length - i }}
                >
                  <Image src={src} alt="" fill sizes="40px" className="object-cover" />
                </div>
              ))}
              <div
                className="relative z-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#e8e8e8] text-[10px] font-semibold"
                style={{ marginLeft: -10 }}
              >
                23K
              </div>
            </div>
          </div>

          <h2 className="max-w-[12ch] text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
            Ready to be our next success story?
          </h2>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-6 md:gap-7">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-5">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                if (status !== "idle") setStatus("idle");
              }}
              placeholder="First Name"
              aria-label="First Name"
              className={FIELD}
            />
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                if (status !== "idle") setStatus("idle");
              }}
              placeholder="Last Name"
              aria-label="Last Name"
              className={FIELD}
            />
          </div>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== "idle") setStatus("idle");
            }}
            placeholder="Email"
            aria-label="Email"
            className={FIELD}
          />
          <textarea
            name="project"
            value={project}
            onChange={(e) => {
              setProject(e.target.value);
              if (status !== "idle") setStatus("idle");
            }}
            placeholder="Project description"
            aria-label="Project description"
            rows={4}
            className={`${FIELD} min-h-[120px] resize-y`}
          />

          <button
            type="submit"
            className="mt-2 inline-flex min-w-[200px] items-center justify-center self-start rounded-full bg-black px-10 py-4 text-[15px] font-medium text-white transition-transform hover:scale-[1.02]"
          >
            Send Message
          </button>

          {status === "ok" && (
            <p className="text-sm text-neutral-600">
              Thank you! Your submission has been received!
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-600">
              Oops! Something went wrong while submitting the form.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
