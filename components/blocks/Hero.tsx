"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { QuoteCard } from "./QuoteCard";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-ink">
      <motion.div style={{ y: imageY }} className="absolute inset-0 scale-110">
        <Image
          src="/images/hero-truck-highway.jpg"
          alt="Formula Courier Services truck on the highway at sunset"
          fill
          priority
          className="object-cover object-[78%_55%]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink from-30% via-ink/75 via-55% to-ink/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/40" />

      <div className="relative mx-auto flex max-w-[1240px] flex-col gap-10 px-5 py-20 md:px-8 md:py-28 lg:flex-row lg:items-center lg:justify-between lg:py-32">
        <Reveal className="max-w-xl">
          <span className="label inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-white">
            <CheckCircle2 className="h-3.5 w-3.5 text-gold" strokeWidth={2} aria-hidden />
            19+ Years of Operational Excellence
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl">
            Fast, Reliable &amp; Safe Courier Services Across Namibia &amp; South Africa
          </h1>
          <p className="mt-5 text-lg text-white/80">
            Overnight parcel delivery from North to South, East to West.{" "}
            <span className="font-semibold italic text-white">Just say when and where.</span>
          </p>
        </Reveal>

        <Reveal delay={0.15} className="w-full lg:w-auto">
          <QuoteCard />
        </Reveal>
      </div>
    </section>
  );
}
