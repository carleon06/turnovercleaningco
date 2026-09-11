"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "./Icon";

const rooms = [
  { label: "Fresh towels", src: "/images/towels.jpg" },
  { label: "Turnover in progress", src: "/images/housekeeper.jpg" },
  { label: "Sanitized & steamed", src: "/images/steam-sheets.jpg" },
  { label: "Folded linens", src: "/images/folded-sheets.jpg" },
];

const WALKTHROUGH_VIDEO_SRC = "/videos/walkthrough.mp4";

export function DocumentationShowcase() {
  const [open, setOpen] = useState(false);
  const [videoMissing, setVideoMissing] = useState(false);

  return (
    <section className="bg-mist-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brass-600">
              Proof, not promises
            </p>
            <h2 className="mt-2 font-display text-3xl text-ink-900 sm:text-4xl">
              Here&apos;s what lands in your inbox after every clean
            </h2>
            <p className="mt-3 max-w-md text-ink-500">
              A sample of the report format: room-by-room photos, a
              timestamp, and a short walkthrough video, so you never have to
              wonder if a turnover actually happened before your next
              guest arrives.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ink-600">
              <li className="flex items-center gap-2.5">
                <Icon name="check-circle" className="size-4.5 text-brass-500" />
                Photo of every room, matched to your checklist
              </li>
              <li className="flex items-center gap-2.5">
                <Icon name="check-circle" className="size-4.5 text-brass-500" />
                Time-stamped the moment the clean is finished
              </li>
              <li className="flex items-center gap-2.5">
                <Icon name="check-circle" className="size-4.5 text-brass-500" />
                Short walkthrough video for a full-room view
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-ink-100 bg-white p-5 shadow-xl shadow-ink-900/5">
            <div className="flex items-center justify-between border-b border-ink-100 pb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                  Turnover report sample
                </p>
                <p className="mt-0.5 font-display text-base font-semibold text-ink-900">
                  Unit 204 · Completed 11:42 AM
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brass-50 px-3 py-1 text-xs font-semibold text-brass-600">
                <Icon name="check" className="size-3.5" />
                Verified
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {rooms.map((r) => (
                <div key={r.label} className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src={r.src}
                    alt={`${r.label}, sample documentation photo`}
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                  <span className="absolute bottom-2 left-2 rounded-full bg-black/60 px-2 py-0.5 text-[11px] font-medium text-white">
                    {r.label}
                  </span>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => {
                setVideoMissing(false);
                setOpen(true);
              }}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-ink-900 py-3 text-sm font-semibold text-white transition hover:bg-ink-800"
            >
              <Icon name="camera" className="size-4" />
              Watch walkthrough video
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/80 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 z-10 grid size-9 place-items-center rounded-full bg-black/60 text-white hover:bg-black/80"
              aria-label="Close video"
            >
              <Icon name="x" className="size-5" />
            </button>

            {videoMissing ? (
              <div className="flex aspect-video flex-col items-center justify-center gap-2 bg-ink-900 text-center text-ink-300">
                <Icon name="camera" className="size-8 text-brass-400" />
                <p className="text-sm">
                  Walkthrough video coming soon.
                </p>
              </div>
            ) : (
              <video
                src={WALKTHROUGH_VIDEO_SRC}
                poster="/images/housekeeper.jpg"
                controls
                autoPlay
                className="aspect-video w-full bg-black"
                onError={() => setVideoMissing(true)}
              >
                Your browser doesn&apos;t support embedded video.
              </video>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
