import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion/ImageReveal";

export function BrandBanner() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <ImageReveal className="relative h-[220px] w-full sm:h-[280px]">
        <Image
          src="/images/box-handheld.jpg"
          alt="A Formula Courier Services branded parcel"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <Reveal className="mx-auto w-full max-w-[1240px] px-5 md:px-8">
            <p className="max-w-sm font-display text-xl font-bold text-white sm:text-2xl">
              Every parcel, handled with care — from our depot to your door.
            </p>
          </Reveal>
        </div>
      </ImageReveal>
    </section>
  );
}
