const INTRO =
  'Welcome to the portfolio site of Khat Vanna ("I," "me," or "my"). I am committed to protecting your privacy when you visit this website or get in touch about design and development work. This Privacy Policy explains how I collect, use, and safeguard your information.';

type PolicySection = {
  index: string;
  title: string;
  body?: string;
  intro?: string;
  bullets?: string[];
  subsections?: {
    title: string;
    intro?: string;
    bullets?: string[];
    body?: string;
  }[];
};

const SECTIONS: PolicySection[] = [
  {
    index: "01",
    title: "Information We Collect",
    subsections: [
      {
        title: "1. Personal Information",
        intro: "I may collect the following information when you contact me or inquire about services:",
        bullets: [
          "Name",
          "Email address",
          "Phone number",
          "Company name",
          "Billing details",
        ],
      },
      {
        title: "2. Usage data",
        intro: "I may collect the following information about how you interact with this website:",
        bullets: [
          "IP Address",
          "Browser type",
          "Device information",
          "Page visited",
        ],
      },
      {
        title: "3. Cookies & Tracking",
        body: "This site may use cookies and similar technologies to enhance your browsing experience.",
      },
    ],
  },
  {
    index: "02",
    title: "How We Use Your Information",
    intro: "I use the information collected to:",
    bullets: [
      "Respond to inquiries and communicate about potential projects.",
      "Provide and improve my design and development services.",
      "Send updates or notes (only if you opt in).",
      "Ensure security and prevent abuse of this site.",
    ],
  },
  {
    index: "03",
    title: "Sharing of Information",
    body: "I do not sell, rent, or trade your personal information. I may share data with trusted third-party service providers (e.g., analytics or hosting tools) strictly for operational purposes.",
  },
  {
    index: "04",
    title: "Data Security",
    body: "I take appropriate technical and organizational measures to protect your personal information from unauthorized access, use, or disclosure.",
  },
  {
    index: "05",
    title: "Your Rights",
    body: "Depending on your location, you may have the right to access, update, or delete your personal data, opt out of marketing communications, or request a copy of the data I hold about you. To exercise these rights, contact me at hello@khatvanna.com.",
  },
  {
    index: "06",
    title: "Third-Party Links",
    body: "This website may contain links to third-party sites. I am not responsible for the privacy practices or content of those websites.",
  },
  {
    index: "07",
    title: "Changes to This Policy",
    body: 'I may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised "Effective Date."',
  },
  {
    index: "08",
    title: "Contact Me",
    body: "If you have any questions about this Privacy Policy, please contact me: hello@khatvanna.com",
  },
];

function IndexLabel({ index }: { index: string }) {
  return (
    <p className="flex items-center gap-2 self-start text-[11px] font-medium tracking-[0.16em] uppercase">
      <span className="inline-block h-3 w-px bg-current" aria-hidden />
      {index}
    </p>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-neutral-600 md:text-base">
          <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPolicySections() {
  return (
    <>
      <section
        id="privacy-hero"
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

          <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-4 md:gap-6">
            <h1 className="text-[clamp(2.75rem,9vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.045em] uppercase md:col-span-2 lg:col-span-3">
              Privacy Policy
            </h1>
            <p className="max-w-[36ch] text-[14px] leading-relaxed text-white/70 md:col-span-2 md:justify-self-end lg:col-span-1 lg:text-[15px]">
              {INTRO}
            </p>
          </div>
        </div>
      </section>

      <section
        id="privacy-content"
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

        <div className="relative z-10 mx-auto max-w-[1600px] px-5 py-16 md:px-8 md:py-20 lg:px-10 lg:py-24">
          <div className="space-y-16 md:space-y-20">
            {SECTIONS.map((section) => (
              <article
                key={section.index}
                className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-6"
              >
                <IndexLabel index={section.index} />
                <div className="md:col-span-3">
                  <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold tracking-[-0.03em]">
                    {section.title}
                  </h2>

                  {section.subsections && (
                    <div className="mt-8 space-y-10 md:mt-10">
                      {section.subsections.map((sub) => (
                        <div key={sub.title}>
                          <h3 className="text-[clamp(1.1rem,2vw,1.35rem)] font-semibold tracking-tight">
                            {sub.title}
                          </h3>
                          {sub.intro && (
                            <p className="mt-3 text-[15px] leading-relaxed text-neutral-600 md:text-base">
                              {sub.intro}
                            </p>
                          )}
                          {sub.bullets && <BulletList items={sub.bullets} />}
                          {sub.body && (
                            <p className="mt-3 text-[15px] leading-relaxed text-neutral-600 md:text-base">
                              {sub.body}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {section.intro && (
                    <p className="mt-5 text-[15px] leading-relaxed text-neutral-600 md:mt-6 md:text-base">
                      {section.intro}
                    </p>
                  )}
                  {section.bullets && <BulletList items={section.bullets} />}
                  {section.body && (
                    <p className="mt-5 max-w-[56ch] text-[15px] leading-relaxed text-neutral-600 md:mt-6 md:text-base">
                      {section.body}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
