"use client";

import { useState } from "react";
import { Icon } from "./Icon";

const CONTACT_EMAIL = "info@turnovercleaningco.com";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [platform, setPlatform] = useState("Airbnb");
  const [listingLink, setListingLink] = useState("");
  const [numProperties, setNumProperties] = useState("1");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `New quote request from ${name || "website"}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nPlatform: ${platform}\nListing link: ${listingLink || "—"}\nProperties: ${numProperties}\n\n${message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-ink-100 bg-mist-50 p-8 text-center">
        <span className="mx-auto grid size-12 place-items-center rounded-full bg-brass-50 text-brass-600">
          <Icon name="check-circle" className="size-6" />
        </span>
        <h3 className="mt-4 font-display text-lg font-semibold text-ink-900">
          Your email app should be opening now
        </h3>
        <p className="mt-2 text-sm text-ink-500">
          If it didn&apos;t, email us directly at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-brass-600 underline">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-4 text-sm font-semibold text-ink-600 underline"
        >
          Back to the form
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-ink-100 bg-white p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-ink-800">Name</span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-xl border border-ink-200 px-3.5 py-2.5 text-sm text-ink-900 focus:border-brass-400 focus:outline-none"
            placeholder="Jamie Rivera"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-ink-800">Email</span>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-xl border border-ink-200 px-3.5 py-2.5 text-sm text-ink-900 focus:border-brass-400 focus:outline-none"
            placeholder="you@example.com"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-ink-800">Phone</span>
          <input
            required
            type="tel"
            pattern="[0-9()+\-\s]{7,}"
            title="Enter a valid phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="rounded-xl border border-ink-200 px-3.5 py-2.5 text-sm text-ink-900 focus:border-brass-400 focus:outline-none"
            placeholder="(305) 555-0100"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-ink-800">Listing platform</span>
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="rounded-xl border border-ink-200 px-3.5 py-2.5 text-sm text-ink-900 focus:border-brass-400 focus:outline-none"
          >
            {["Airbnb", "VRBO", "Booking.com", "Direct booking", "Other"].map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-ink-800">
            Listing link <span className="text-ink-400 font-normal">(optional)</span>
          </span>
          <input
            type="url"
            value={listingLink}
            onChange={(e) => setListingLink(e.target.value)}
            className="rounded-xl border border-ink-200 px-3.5 py-2.5 text-sm text-ink-900 focus:border-brass-400 focus:outline-none"
            placeholder="https://airbnb.com/rooms/..."
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-ink-800">How many properties?</span>
          <select
            value={numProperties}
            onChange={(e) => setNumProperties(e.target.value)}
            className="rounded-xl border border-ink-200 px-3.5 py-2.5 text-sm text-ink-900 focus:border-brass-400 focus:outline-none"
          >
            {["1", "2", "3", "4", "5+"].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1.5 sm:col-span-2">
          <span className="text-sm font-medium text-ink-800">
            Tell us about your property <span className="text-ink-400 font-normal">(optional)</span>
          </span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="rounded-xl border border-ink-200 px-3.5 py-2.5 text-sm text-ink-900 focus:border-brass-400 focus:outline-none"
            placeholder="Number of bedrooms, location, how often it turns over, and anything else we should know."
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-ink-900 py-3.5 text-sm font-bold text-white transition hover:bg-ink-800"
      >
        Request a quote
        <Icon name="arrow-right" className="size-4" />
      </button>
      <p className="mt-3 text-center text-xs text-ink-400">
        We reply within one business day.
      </p>
    </form>
  );
}
