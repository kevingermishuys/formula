"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Truck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Field } from "@/components/ui/Field";

export function QuoteCard() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl shadow-black/30">
      <div className="flex items-center gap-2 text-ink">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red/10 text-red">
          <Truck className="h-4 w-4" strokeWidth={1.75} aria-hidden />
        </span>
        <span className="font-display text-base font-bold">Get a Quick Quote</span>
      </div>

      <motion.div
        initial={false}
        animate={{ opacity: 1 }}
        className="mt-4"
      >
        {submitted ? (
          <div className="flex flex-col items-center gap-2 py-6 text-center">
            <CheckCircle2 className="h-9 w-9 text-red" strokeWidth={1.5} aria-hidden />
            <p className="font-display text-lg font-bold text-ink">Request received</p>
            <p className="text-sm text-ink-soft">
              A member of our team will contact you shortly with a quote.
            </p>
          </div>
        ) : (
          <form
            className="flex flex-col gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="grid grid-cols-2 gap-3">
              <Field id="q-from" label="Pickup Location" placeholder="Windhoek" required />
              <Field id="q-to" label="Destination" placeholder="Grootfontein" required />
            </div>
            <Field id="q-contact" label="Phone or Email" placeholder="How can we reach you?" required />
            <Button type="submit" variant="accent" className="w-full">
              Submit Quote Request
            </Button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
