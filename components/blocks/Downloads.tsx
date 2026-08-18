"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { downloads } from "@/content/site";

export function Downloads() {
  return (
    <section id="downloads" className="bg-white">
      <div className="mx-auto max-w-[1240px] px-5 py-20 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="label text-red">Downloads &amp; Resources</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">
            Forms For Corporate &amp; Cash Clients
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:max-w-2xl sm:mx-auto">
          {downloads.map((item) => (
            <Reveal key={item.href}>
              <motion.a
                href={item.href}
                download
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="flex h-full items-start gap-4 rounded-2xl border border-ink/8 bg-canvas p-6 transition-colors hover:border-red/30 hover:bg-red/5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink/5 text-ink">
                  <FileText className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{item.description}</p>
                  <span className="label mt-3 inline-block text-red">Download PDF</span>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
