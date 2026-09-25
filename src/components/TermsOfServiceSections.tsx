const INTRO =
  'These Terms of Service ("Terms") govern your use of the portfolio website of Khat Vanna ("I," "me," or "my") and any design or development services I agree to in writing. By using this site or engaging me for work, you agree to the following terms.';

type TermsSection = {
  index: string;
  title: string;
  body?: string;
  intro?: string;
  bullets?: string[];
};

const SECTIONS: TermsSection[] = [
  {
    index: "01",
    title: "Acceptance of Terms",
    body: "By using this website or engaging with my services, you agree to be bound by these Terms of Service, my Privacy Policy, and any project-specific agreements.",
  },
  {
    index: "02",
    title: "Services Provided",
    body: "I offer creative and digital services including (but not limited to) web design and development, branding, UI/UX design, and related consulting. Scope, deliverables, and fees are defined in project proposals or contracts.",
  },
  {
    index: "03",
    title: "Use of Website",
    bullets: [
      "You agree to use this website only for lawful purposes.",
      "You may not attempt to hack, disrupt, or misuse any features of this site.",
      "Unauthorized use of this website may result in termination of access.",
    ],
  },
  {
    index: "04",
    title: "Intellectual Property",
    bullets: [
      "Unless otherwise agreed in writing, portfolio content on this site — including text, graphics, logos, and media — is owned by Khat Vanna or used with permission.",
      "You may not copy, reproduce, or distribute site content without prior written consent.",
      "Client project ownership and licensing terms are specified in individual project agreements.",
    ],
  },
  {
    index: "05",
    title: "Payment & Billing",
    bullets: [
      "Fees and payment terms are outlined in project proposals or contracts. Late payments may pause work until accounts are current.",
      "Deposits and fees are non-refundable unless otherwise agreed in writing.",
    ],
  },
  {
    index: "06",
    title: "Client Responsibilities",
    intro: "Clients agree to:",
    bullets: [
      "Provide accurate and timely information necessary for projects.",
      "Review and approve deliverables within agreed timelines.",
      "Respect intellectual property rights of Khat Vanna and third parties.",
    ],
  },
  {
    index: "07",
    title: "Limitation of Liability",
    bullets: [
      "I strive to deliver high-quality work but cannot guarantee uninterrupted website functionality or specific business outcomes.",
      "Khat Vanna is not liable for indirect, incidental, or consequential damages arising from use of this website or services, to the extent permitted by law.",
    ],
  },
  {
    index: "08",
    title: "Termination",
    body: "Either party may terminate a project according to the terms in the relevant agreement. I may suspend access to this site if these Terms are violated.",
  },
  {
    index: "09",
    title: "Governing Law",
    body: "These Terms are governed by the laws applicable in the Kingdom of Cambodia, without regard to conflict-of-law principles.",
  },
  {
    index: "10",
    title: "Changes to Terms",
    body: 'I may update or modify these Terms of Service at any time. Updated versions will be posted with a revised "Effective Date."',
  },
  {
    index: "11",
    title: "Contact",
    body: "If you have any questions about these Terms, please contact me: hello@khatvanna.com",
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
        <li
          key={item}
          className="flex gap-3 text-[15px] leading-relaxed text-neutral-600 md:text-base"
        >
          <span
            className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400"
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function TermsOfServiceSections() {
  return (
    <>
      <section
        id="terms-hero"
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
              Terms
              <br />
              Ofservice
            </h1>
            <p className="max-w-[36ch] text-[14px] leading-relaxed text-white/70 md:col-span-2 md:justify-self-end lg:col-span-1 lg:text-[15px]">
              {INTRO}
            </p>
          </div>
        </div>
      </section>

      <section
        id="terms-content"
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
                key={`${section.index}-${section.title}`}
                className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-6"
              >
                <IndexLabel index={section.index} />
                <div className="md:col-span-3">
                  <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold tracking-[-0.03em]">
                    {section.title}
                  </h2>
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
