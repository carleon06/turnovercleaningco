import Link from "next/link";
import { Icon } from "./Icon";
import { PalmMark } from "./PalmMark";
import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#1f5f5a] text-ink-200">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <div className="flex items-center gap-3">
              <PalmMark className="size-12" />
              <Wordmark
                textClassName="text-white"
                ruleClassName="bg-brass-400"
                accentClassName="text-brass-400"
              />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-ink-300">
              White-glove, top-to-bottom turnover cleaning for short-term
              rentals, run by hosts, for hosts. 10+ years of hospitality
              experience behind every clean.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-300">
              <li className="flex items-center gap-2.5">
                <Icon name="phone" className="size-4 text-brass-400" />
                <a href="tel:+17868700260" className="hover:text-white">
                  (786) 870-0260
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Icon name="mail" className="size-4 text-brass-400" />
                <a
                  href="mailto:info@turnovercleaningco.com"
                  className="hover:text-white"
                >
                  info@turnovercleaningco.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Icon name="map-pin" className="size-4 text-brass-400" />
                Proudly serving Miami & South Florida
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Turnover Cleaning Co. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <Link href="/disclaimer" className="hover:text-white">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
