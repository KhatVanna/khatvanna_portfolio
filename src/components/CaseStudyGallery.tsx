import Image from "next/image";

type CaseStudyGalleryProps = {
  images: string[];
};

export default function CaseStudyGallery({ images }: CaseStudyGalleryProps) {
  const [a, b, c, d, e, f] = images;

  return (
    <section id="case-gallery" className="relative overflow-hidden bg-white text-black">
      <div className="relative z-10 mx-auto max-w-[1600px] px-5 py-10 md:px-8 md:py-16 lg:px-10 lg:py-20">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-6 md:grid-rows-[auto_auto] md:gap-4 lg:gap-5">
          <div className="relative col-span-2 aspect-16/10 overflow-hidden rounded-2xl bg-neutral-200 md:col-span-2 md:rounded-[1.25rem]">
            <Image src={a} alt="" fill sizes="40vw" className="object-cover grayscale" />
          </div>

          <div className="relative col-span-2 row-span-2 min-h-70 overflow-hidden rounded-2xl bg-neutral-200 md:col-span-2 md:min-h-0 md:rounded-[1.25rem]">
            <Image src={b} alt="" fill sizes="40vw" className="object-cover grayscale" />
          </div>

          <div className="relative col-span-2 aspect-16/10 overflow-hidden rounded-2xl bg-neutral-200 md:col-span-2 md:rounded-[1.25rem]">
            <Image src={c} alt="" fill sizes="40vw" className="object-cover grayscale" />
          </div>

          <div className="relative aspect-3/4 overflow-hidden rounded-2xl bg-neutral-200 md:rounded-[1.25rem]">
            <Image src={d} alt="" fill sizes="20vw" className="object-cover grayscale" />
          </div>

          <div className="relative aspect-3/4 overflow-hidden rounded-2xl bg-neutral-200 md:rounded-[1.25rem]">
            <Image src={e} alt="" fill sizes="20vw" className="object-cover grayscale" />
          </div>

          <div className="relative col-span-2 aspect-16/10 overflow-hidden rounded-2xl bg-neutral-200 md:col-span-2 md:rounded-[1.25rem]">
            <Image src={f} alt="" fill sizes="40vw" className="object-cover grayscale" />
          </div>
        </div>
      </div>
    </section>
  );
}
