const INTRO =
  'This Terms of Service agreement ("Agreement") is entered into between Gorex ("Agency," "we," "us," or "our") and the individual or entity engaging our services ("Client," "you," or "your"). By subscribing to a plan or initiating a project, you agree to the following terms.';

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
    body: "By using our website or engaging with our services, you agree to be bound by these Terms of Service, our Privacy Policy, and any other guidelines or additional terms provided.",
  },
  {
    index: "02",
    title: "Services Provided",
    body: "RIZEN offers creative and digital services including (but not limited to) web design & development, branding, digital marketing, and production. Specific service agreements will be outlined in project contracts.",
  },
  {
    index: "03",
    title: "Use of Website",
    bullets: [
      "You agree to use our website only for lawful purposes.",
      "You may not attempt to hack, disrupt, or misuse any features of our website.",
      "Unauthorized use of our website may result in termination of access.",
    ],
  },
  {
    index: "04",
    title: "Intellectual Property",
    bullets: [
      "All content on this website, including text, graphics, logos, designs, and media, is owned by Gorex Agency or licensed for use.",
      "You may not copy, reproduce, or distribute our content without prior written consent.",
    ],
  },
  {
    index: "05",
    title: "Payment & Billing",
    bullets: [
      "Fees and payment terms will be outlined in project contracts. Late payments may be subject to interest charges or suspension of services.",
      "All fees are non-refundable unless otherwise agreed in writing.",
    ],
  },
  {
    index: "06",
    title: "Client Responsibilities",
    intro: "Clients agree to:",
    bullets: [
      "Provide accurate and timely information necessary for projects.",
      "Approve deliverables within agreed timelines.",
      "Respect intellectual property rights of RIZEN Agency.",
    ],
  },
  {
    index: "07",
    title: "Limitation of Liability",
    bullets: [
      "We strive to provide the highest quality services but cannot guarantee uninterrupted website functionality or specific business outcomes.",
      "Gorex Agency is not liable for any indirect, incidental, or consequential damages arising from use of our website or services.",
    ],
  },
  {
    index: "08",
    title: "Termination",
    body: "We may suspend or terminate services if these Terms are violated or if payment obligations are not met.",
  },
  {
    index: "09",
    title: "Governing Law",
    body: "These Terms shall be governed by and interpreted under the laws of USA. Any disputes will be resolved in the courts of NY & CA.",
  },
  {
    index: "10",
    title: "Changes to Terms",
    body: 'We reserve the right to update or modify these Terms of Service at any time. Updated versions will be posted with a revised "Effective Date."',
  },
  {
    index: "11",
    title: "Contact Us",
    body: "If you have any questions about this Privacy Policy, please contact us: hello@conaxagency.com",
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
