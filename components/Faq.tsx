"use client";

import { useState } from "react";
import { Icon } from "./Icon";

const faqs = [
  {
    q: "Do you only do cleaning, or can you help with hosting too?",
    a: "Both. Turnover cleaning is our core service, but if you want help with guest messaging, check-in coordination, or day-to-day issue resolution, we offer co-hosting support as well — you can add it whenever you're ready.",
  },
  {
    q: "How does scheduling actually work?",
    a: "You connect your booking calendar (Airbnb, VRBO, or your PMS) once. Every checkout automatically schedules the next turnover on our end — no back-and-forth texting to coordinate cleanings.",
  },
  {
    q: "What's included in supply restocking?",
    a: "Toiletries, coffee, paper products, and other consumables are checked and restocked at every turn, based on the inventory list we build with you when you onboard.",
  },
  {
    q: "How do I know a clean actually happened before my next guest checks in?",
    a: "You get a time-stamped set of room-by-room photos and a walkthrough video sent to your inbox the moment the turnover is complete — not a generic \"job done\" text.",
  },
  {
    q: "How is billing handled?",
    a: "Billing is automated per completed turnover — no manual invoices to approve or chase down each month.",
  },
  {
    q: "What areas do you serve?",
    a: "We're based in Miami and serve South Florida — reach out with your property location and we'll confirm coverage for your listing.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brass-600">
            Questions
          </p>
          <h2 className="mt-2 font-display text-3xl text-ink-900 sm:text-4xl">
            Good to know before you switch
          </h2>
        </div>

        <div className="mt-10 divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-medium text-ink-900">{item.q}</span>
                  <Icon
                    name="chevron-down"
                    className={`size-4 shrink-0 text-ink-400 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="px-5 pb-4 text-sm leading-6 text-ink-500">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
