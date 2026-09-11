import { Icon } from "./Icon";

const services = [
  {
    icon: "sparkles" as const,
    title: "Turnover Cleaning",
    text: "A true top-to-bottom clean between every guest: kitchens, bathrooms, linens, and the details automated cleaners skip.",
  },
  {
    icon: "users" as const,
    title: "Co-Hosting Support",
    text: "Guest messaging, check-in coordination, and issue resolution: we can run the day-to-day so you don't have to.",
  },
  {
    icon: "package" as const,
    title: "Inventory & Supply Management",
    text: "We track and restock toiletries, coffee, linens, and consumables so your listing is never caught short.",
  },
  {
    icon: "camera" as const,
    title: "Photo & Video Documentation",
    text: "Time-stamped photos and a walkthrough video before and after every clean: proof of condition, every time.",
  },
  {
    icon: "clipboard-check" as const,
    title: "Custom Checklists",
    text: "Every listing gets a checklist built around your specific decor and staging, styled exactly the way you want it presented.",
  },
  {
    icon: "credit-card" as const,
    title: "Automated Scheduling & Billing",
    text: "Cleanings trigger automatically off your booking calendar, and billing runs on autopilot, no chasing invoices.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-mist-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brass-600">
            Full-service
          </p>
          <h2 className="mt-2 font-display text-3xl text-ink-900 sm:text-4xl">
            Everything a listing needs, one call
          </h2>
          <p className="mt-3 text-ink-500">
            Cleaning is the floor, not the ceiling. Most hosts stack on
            co-hosting and supply management once they see how the
            documentation works.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-ink-100 bg-white p-6 transition hover:shadow-lg hover:shadow-ink-900/5"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-ink-900 text-brass-300">
                <Icon name={s.icon} className="size-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink-500">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
