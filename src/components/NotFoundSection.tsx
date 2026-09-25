import Link from "next/link";

export default function NotFoundSection() {
  return (
    <section
      id="not-found"
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
        <p
          aria-hidden
          className="pointer-events-none absolute inset-x-5 top-1/2 -translate-y-1/2 text-[clamp(3rem,14vw,11rem)] font-semibold leading-[0.85] tracking-[-0.05em] text-black/8 uppercase md:inset-x-8 lg:inset-x-10"
        >
          Not Found
        </p>

        <div className="relative z-[1] grid grid-cols-1 items-end gap-10 md:grid-cols-4 md:gap-6">
          <h1 className="max-w-[10ch] text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.035em] md:col-span-2">
            Oops...
            <br />
            Something&rsquo;s wrong!
          </h1>

          <div className="md:col-span-2">
            <p className="max-w-[32ch] text-[15px] leading-relaxed text-neutral-700 md:text-base">
              Page not found. The request URL doesn&rsquo;t exist.
              <br />
              Please go back to the home page.
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex min-w-[200px] items-center justify-center rounded-full bg-black px-10 py-3.5 text-[14px] font-medium text-white transition-opacity hover:opacity-80 md:mt-10"
            >
              Back To Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
