"use client";

import { motion } from "framer-motion";
import { Building2, Headset, ShieldCheck, Zap, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { services } from "@/content/site";

const icons: Record<string, LucideIcon> = { Zap, Headset, ShieldCheck, Building2 };

export function ServicesGrid() {
  return (
    <section id="services" className="bg-route-lines bg-canvas">
      <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="label text-red">What We Do</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">
            Logistics Built Around Your Deadline
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.title} delay={i * 0.08} className="h-full">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="group h-full rounded-2xl border border-ink/8 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink/5 text-ink transition-colors duration-300 group-hover:bg-red group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {service.description}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
