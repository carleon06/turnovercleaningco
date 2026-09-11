import Image from "next/image";
import { Icon } from "./Icon";

const stats = [
  { icon: "clock" as const, label: "10+ years in hospitality" },
  { icon: "camera" as const, label: "Time-stamped photo & video proof" },
  { icon: "key" as const, label: "Run by real hosts, not a call center" },
];

export function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-14 sm:px-6 sm:pt-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:pb-24 lg:pt-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brass-50 px-3 py-1 text-xs font-semibold text-brass-600 ring-1 ring-brass-200">
            <Icon name="shield-check" className="size-3.5" />
            White-glove turnover cleaning
          </span>

          <h1 className="mt-5 font-display text-4xl leading-[1.1] text-ink-900 sm:text-5xl lg:text-[3.4rem]">
            Top to bottom. Every turn.
            <br />
            <span className="text-brass-500">Pure peace of mind.</span>
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-7 text-ink-500">
            We&apos;re hosts too — and co-host — so we know exactly what
            keeps a listing at 5 stars. Full-service turnover cleaning,
            restocking, and property care, documented start to finish.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-ink-800"
            >
              Get a free quote
              <Icon name="arrow-right" className="size-4" />
            </a>
            <a
              href="#process"
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-6 py-3.5 text-sm font-semibold text-ink-800 transition hover:bg-mist-50"
            >
              See how it works
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-1 gap-4 border-t border-ink-100 pt-6 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="flex items-start gap-2.5">
                <Icon name={s.icon} className="mt-0.5 size-4.5 shrink-0 text-brass-500" />
                <dd className="text-sm text-ink-600">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-mist-100 shadow-2xl shadow-ink-900/10">
            <Image
              src="/images/hero-bed.jpg"
              alt="A beautifully made bed with crisp white folded linens after a turnover clean"
              fill
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden w-56 rounded-2xl border border-ink-100 bg-white p-4 shadow-xl sm:block">
            <div className="flex items-center gap-2 text-xs font-semibold text-ink-800">
              <Icon name="check-circle" className="size-4 text-brass-500" />
              Turnover complete
            </div>
            <p className="mt-1 text-xs text-ink-400">
              Verified 11:42 AM · 34 photos, 1 walkthrough video
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
