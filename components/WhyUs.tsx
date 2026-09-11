import Image from "next/image";
import { Icon } from "./Icon";

const points = [
  {
    icon: "home" as const,
    title: "We host, ourselves",
    text: "We manage our own short-term rentals, so every checklist is built from what actually gets a listing dinged in reviews, not a generic template.",
  },
  {
    icon: "key" as const,
    title: "We've stayed as guests, too",
    text: "We know what a guest notices in the first 90 seconds of walking in. That's what we clean and stage for.",
  },
  {
    icon: "star" as const,
    title: "10+ years in hospitality",
    text: "A decade-plus of turnovers, tight check-in windows, and last-minute guest issues: nothing about a same-day turn rattles us.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-mist-100">
              <Image
                src="/images/housekeeper.jpg"
                alt="A friendly professional cleaner mopping a bright, freshly turned-over rental"
                fill
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-brass-600">
              Why hosts trust us
            </p>
            <h2 className="mt-2 font-display text-3xl text-ink-900 sm:text-4xl">
              We&apos;re not a cleaning crew that learned hosting.
              <br />
              We&apos;re hosts who do the cleaning right.
            </h2>

            <div className="mt-8 space-y-6">
              {points.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brass-50 text-brass-600">
                    <Icon name={p.icon} className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink-900">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-ink-500">
                      {p.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
