import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { howItWorks } from "@/content/site";

export function HowItWorks() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 px-5 py-20 md:px-8 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="label text-red">How It Works</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">
              From Pickup to Delivery, Overnight
            </h2>
          </Reveal>

          <ol className="mt-10 flex flex-col gap-8">
            {howItWorks.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.08}>
                <li className="flex gap-5">
                  <span className="font-display text-3xl font-extrabold text-ink/15">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {step.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <ImageReveal className="lg:col-span-5">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/parcel-handoff.jpg"
              alt="A Formula Courier Services parcel being handed off to a customer"
              fill
              className="object-cover"
            />
          </div>
        </ImageReveal>
      </div>
    </section>
  );
}
