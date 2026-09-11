import { Icon } from "./Icon";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="bg-mist-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brass-600">
              Get a quote
            </p>
            <h2 className="mt-2 font-display text-3xl text-ink-900 sm:text-4xl">
              Tell us about your listing
            </h2>
            <p className="mt-3 max-w-md text-ink-500">
              Send us a few details and we&apos;ll put together pricing based
              on your property size and turnover frequency, usually within
              one business day.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-white text-brass-500 ring-1 ring-ink-100">
                  <Icon name="phone" className="size-4.5" />
                </span>
                <div>
                  <p className="text-xs text-ink-400">Call or text</p>
                  <a href="tel:+17868700260" className="font-semibold text-ink-900">
                    (786) 870-0260
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-white text-brass-500 ring-1 ring-ink-100">
                  <Icon name="mail" className="size-4.5" />
                </span>
                <div>
                  <p className="text-xs text-ink-400">Email</p>
                  <a
                    href="mailto:info@turnovercleaningco.com"
                    className="font-semibold text-ink-900"
                  >
                    info@turnovercleaningco.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-white text-brass-500 ring-1 ring-ink-100">
                  <Icon name="map-pin" className="size-4.5" />
                </span>
                <div>
                  <p className="text-xs text-ink-400">Service area</p>
                  <p className="font-semibold text-ink-900">Miami, FL</p>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
