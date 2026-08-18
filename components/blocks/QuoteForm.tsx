"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Field, TextAreaField } from "@/components/ui/Field";

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="quote" className="bg-route-lines bg-canvas">
      <div className="mx-auto max-w-[720px] px-5 py-20 md:px-8">
        <Reveal className="text-center">
          <p className="label text-red">Request a Pickup</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">
            Get a Detailed Quote &amp; Pickup Request
          </h2>
          <p className="mt-3 text-ink-soft">
            Tell us what you&rsquo;re sending and where — we&rsquo;ll come back to you with a
            quote and pickup time.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 rounded-2xl border border-ink/8 bg-white p-6 shadow-sm sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-center gap-3 py-10 text-center">
              <CheckCircle2 className="h-10 w-10 text-red" strokeWidth={1.5} aria-hidden />
              <p className="font-display text-xl font-bold text-ink">
                Request received — thank you
              </p>
              <p className="max-w-sm text-sm text-ink-soft">
                A member of the Formula Courier Services team will be in touch shortly to confirm
                your quote and pickup details.
              </p>
            </div>
          ) : (
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field id="name" label="Sender Name" placeholder="Full name" required />
                <Field id="phone" label="Phone" type="tel" placeholder="+264 ..." required />
              </div>
              <Field id="email" label="Email" type="email" placeholder="you@company.com" required />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field id="pickup" label="Pickup Location" placeholder="Suburb, town" required />
                <Field id="destination" label="Delivery Destination" placeholder="Suburb, town" required />
              </div>
              <Field
                id="dimensions"
                label="Parcel Weight / Dimensions"
                placeholder="e.g. 5kg, 30x20x15cm"
              />
              <TextAreaField id="notes" label="Message / Notes" placeholder="Anything we should know?" />
              <Button type="submit" variant="accent" className="mt-2 w-full">
                Submit Quote Request
              </Button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
