export function PalmMark({ className = "size-9" }: { className?: string }) {
  return (
    <svg viewBox="-34 -34 68 60" className={className} aria-hidden="true">
      <path d="M0 8 L0 -30 Q14 -22 14 -6 Z" fill="#1f7a73" />
      <path d="M0 8 L-24 -18 Q-6 -22 4 -8 Z" fill="#2ba69b" />
      <path d="M0 8 L24 -18 Q6 -22 -4 -8 Z" fill="#e8836b" />
      <path d="M0 8 L-30 4 Q-14 -6 -2 2 Z" fill="#c9a15c" />
      <path d="M0 8 L30 4 Q14 -6 2 2 Z" fill="#eab383" />
      <rect x="-2.5" y="6" width="5" height="16" rx="1.5" fill="currentColor" />
    </svg>
  );
}
