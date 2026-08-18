"use client";

import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { branches } from "@/content/site";

export function Branches() {
  return (
    <section id="branches" className="bg-white">
      <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="label text-red">Branches</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">
            Find Your Nearest Branch
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:max-w-3xl sm:mx-auto">
          {branches.map((branch) => (
            <Reveal key={branch.name} className="h-full">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="h-full rounded-2xl border border-ink/8 bg-canvas p-6 transition-shadow hover:shadow-lg"
              >
                {branch.isHQ && (
                  <span className="label mb-3 inline-block rounded-full bg-gold/20 px-3 py-1 text-gold-deep">
                    Head Office
                  </span>
                )}
                <h3 className="font-display text-lg font-bold text-ink">{branch.name}</h3>
                <p className="mt-3 flex items-start gap-2 text-sm text-ink-soft">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ink-soft" strokeWidth={1.75} aria-hidden />
                  {branch.address}
                </p>
                <a
                  href={branch.phoneHref}
                  className="mt-2 flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-red"
                >
                  <Phone className="h-4 w-4 shrink-0 text-ink-soft" strokeWidth={1.75} aria-hidden />
                  {branch.phoneDisplay}
                </a>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10 flex justify-center">
          <Button href="#quote" variant="primary">
            Request a Pickup
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
