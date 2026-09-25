import { Inter_Tight } from "next/font/google";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const NEUTRALS = [
  { weight: "900", hex: "#000000" },
  { weight: "800", hex: "#191A1D" },
  { weight: "700", hex: "#404040" },
  { weight: "600", hex: "#575757" },
  { weight: "500", hex: "#A0A0A0" },
  { weight: "400", hex: "#A3A3A3" },
  { weight: "300", hex: "#D4D4D4" },
  { weight: "200", hex: "#E5E5E5" },
  { weight: "100", hex: "#E5E5E5" },
  { weight: "0", hex: "#FAFAFA" },
] as const;

const HEADINGS = [
  { tag: "H1", size: "120px", className: "text-[clamp(2.75rem,10vw,7.5rem)]" },
  { tag: "H2", size: "80px", className: "text-[clamp(2.25rem,7vw,5rem)]" },
  { tag: "H3", size: "64px", className: "text-[clamp(2rem,5.5vw,4rem)]" },
  { tag: "H4", size: "48px", className: "text-[clamp(1.75rem,4vw,3rem)]" },
  { tag: "H5", size: "40px", className: "text-[clamp(1.5rem,3.5vw,2.5rem)]" },
  { tag: "H6", size: "32px", className: "text-[clamp(1.35rem,2.8vw,2rem)]" },
] as const;

const BODIES = [
  { label: "Body 1", size: "24px", className: "text-2xl" },
  { label: "Body 2", size: "20px", className: "text-xl" },
  { label: "Body 3", size: "18px", className: "text-lg" },
  { label: "Body 4", size: "16px", className: "text-base" },
  { label: "Body 5", size: "14px", className: "text-sm" },
] as const;

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] text-black uppercase">
      <span className="inline-block h-3 w-px bg-black" aria-hidden />
      {children}
    </p>
  );
}

function isLightSwatch(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return (r * 299 + g * 587 + b * 114) / 1000 > 160;
}

export default function StyleGuideSections() {
  return (
    <div className={interTight.className}>
      <section
        id="style-guide-hero"
        className="relative overflow-hidden bg-black text-white"
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

        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-[1600px] flex-col justify-end px-5 pt-36 pb-16 md:min-h-[75vh] md:px-8 md:pb-20 lg:px-10 lg:pb-24">
          <p className="mb-8 flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase md:mb-10">
            <span className="inline-block h-3 w-px bg-white" aria-hidden />
            Utility Pages
          </p>
          <h1 className="text-[clamp(3rem,12vw,9.5rem)] font-semibold leading-[0.88] tracking-[-0.045em] uppercase">
            Style Guide
          </h1>
        </div>
      </section>

      <section
        id="style-guide-colors"
        className="relative overflow-hidden bg-white text-black"
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

        <div className="relative z-10 mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-5 py-16 md:grid-cols-4 md:gap-6 md:px-8 md:py-20 lg:px-10 lg:py-24">
          <SectionLabel>Color Style</SectionLabel>

          <div className="md:col-span-3">
            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold tracking-[-0.03em] uppercase">
              Neutral Color
            </h2>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:mt-10 md:grid-cols-5 md:gap-4">
              {NEUTRALS.map((c) => {
                const light = isLightSwatch(c.hex);
                return (
                  <div
                    key={`${c.weight}-${c.hex}`}
                    className="relative aspect-4/5 overflow-hidden rounded-2xl md:rounded-[1.25rem]"
                    style={{ backgroundColor: c.hex }}
                  >
                    <div
                      className={`absolute inset-x-0 bottom-0 p-3 text-[11px] leading-tight font-medium tracking-tight md:p-4 md:text-[12px] ${
                        light ? "text-black" : "text-white"
                      }`}
                    >
                      <p>{c.weight}</p>
                      <p className="opacity-80">{c.hex}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        id="style-guide-typography"
        className="relative overflow-hidden bg-[#f7f7f7] text-black"
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

        <div className="relative z-10 mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-5 py-16 md:grid-cols-4 md:gap-6 md:px-8 md:py-20 lg:px-10 lg:py-24">
          <SectionLabel>Typography</SectionLabel>

          <div className="md:col-span-3">
            <h2 className="text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] uppercase">
              Inter Tight
            </h2>
            <div className="mt-8 space-y-1 text-[clamp(1rem,2vw,1.35rem)] font-medium tracking-tight md:mt-10">
              <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p>abcdefghijklmnopqrstuvwxyz</p>
              <p>0123456789 !@#$%^&amp;*()</p>
            </div>

            <p className="mt-16 text-[11px] font-medium tracking-[0.16em] text-neutral-500 uppercase md:mt-20">
              Heading
            </p>
            <div className="mt-6 space-y-5 md:mt-8 md:space-y-6">
              {HEADINGS.map((h) => (
                <p
                  key={h.tag}
                  className={`${h.className} font-semibold leading-[1.05] tracking-[-0.03em]`}
                >
                  {h.tag} Heading _ {h.size}
                </p>
              ))}
            </div>

            <p className="mt-16 text-[11px] font-medium tracking-[0.16em] text-neutral-500 uppercase md:mt-20">
              Paragraph
            </p>
            <div className="mt-6 space-y-4 md:mt-8 md:space-y-5">
              {BODIES.map((b) => (
                <p key={b.label} className={`${b.className} leading-snug`}>
                  {b.label} _ {b.size}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="style-guide-buttons"
        className="relative overflow-hidden bg-white text-black"
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

        <div className="relative z-10 mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-5 py-16 md:grid-cols-4 md:gap-6 md:px-8 md:py-20 lg:px-10 lg:pb-28 lg:pt-24">
          <SectionLabel>Button</SectionLabel>

          <div className="md:col-span-3">
            <p className="text-[11px] font-medium tracking-[0.16em] text-neutral-500 uppercase">
              Filled Button
            </p>
            <div className="mt-8 flex flex-col items-start gap-6 md:mt-10">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-black px-10 py-3.5 text-[15px] font-medium text-white transition-opacity hover:opacity-80"
              >
                Button
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 text-[15px] font-medium transition-opacity hover:opacity-60"
              >
                Button
                <span aria-hidden>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
