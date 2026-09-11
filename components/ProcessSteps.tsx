import { Icon } from "./Icon";

const steps = [
  {
    icon: "calendar" as const,
    title: "Your calendar triggers the clean",
    text: "Connect your Airbnb, VRBO, or PMS calendar once. Every checkout automatically schedules the next turnover — no texting back and forth.",
  },
  {
    icon: "clipboard-check" as const,
    title: "We clean to your checklist",
    text: "A checklist built around your specific decor and staging, plus a full restock of supplies — every time, not just when someone remembers.",
  },
  {
    icon: "camera" as const,
    title: "You get time-stamped proof",
    text: "Photos and a walkthrough video land in your inbox before your next guest ever checks in — no guessing whether it's ready.",
  },
  {
    icon: "credit-card" as const,
    title: "Billing runs itself",
    text: "Payment is automated per clean. No invoices to chase, no manual approvals holding up your next turnover.",
  },
];

export function ProcessSteps() {
  return (
    <section id="process" className="bg-ink-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brass-400">
            How it works
          </p>
          <h2 className="mt-2 font-display text-3xl text-white sm:text-4xl">
            Set it up once. It runs itself after that.
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="relative">
              <div className="flex items-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-white/15 font-display text-sm font-semibold text-brass-300">
                  {i + 1}
                </span>
                <span className="text-brass-400">
                  <Icon name={s.icon} className="size-5" />
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink-300">{s.text}</p>
              {i < steps.length - 1 && (
                <div className="absolute right-[-1rem] top-5 hidden h-px w-8 bg-white/15 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
