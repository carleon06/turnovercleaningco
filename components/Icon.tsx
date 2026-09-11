type IconName =
  | "sparkles"
  | "camera"
  | "clipboard-check"
  | "package"
  | "calendar"
  | "credit-card"
  | "users"
  | "shield-check"
  | "star"
  | "check"
  | "check-circle"
  | "arrow-right"
  | "chevron-down"
  | "menu"
  | "x"
  | "phone"
  | "mail"
  | "map-pin"
  | "clock"
  | "key"
  | "home"
  | "message-circle";

const paths: Record<IconName, React.ReactNode> = {
  sparkles: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="m6 6 2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
    </>
  ),
  camera: (
    <>
      <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
      <circle cx="12" cy="13" r="3.5" />
    </>
  ),
  "clipboard-check": (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
      <path d="m9 13 2 2 4-4" />
    </>
  ),
  package: (
    <>
      <path d="M21 8v8a1 1 0 0 1-.5.87l-8 4.5a1 1 0 0 1-1 0l-8-4.5A1 1 0 0 1 3 16V8" />
      <path d="m3 8 9-5 9 5-9 5-9-5Z" />
      <path d="M12 13v9" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </>
  ),
  "credit-card": (
    <>
      <rect x="2" y="5" width="20" height="15" rx="2" />
      <path d="M2 10h20" />
      <path d="M6 15h4" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <path d="M16 4.5a3.5 3.5 0 0 1 0 7" />
      <path d="M15 13.2a6.5 6.5 0 0 1 6.5 6.8" />
    </>
  ),
  "shield-check": (
    <>
      <path d="M12 3 4.5 5.5V11c0 5 3.4 8.4 7.5 10 4.1-1.6 7.5-5 7.5-10V5.5L12 3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  star: <path d="m12 2 3.1 6.6 7.2.9-5.3 5 1.4 7.2-6.4-3.6-6.4 3.6 1.4-7.2-5.3-5 7.2-.9Z" fill="currentColor" stroke="none" />,
  check: <path d="M20 6 9 17l-5-5" />,
  "check-circle": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.5 2.5 2.5 4.5-5" />
    </>
  ),
  "arrow-right": <path d="M5 12h14M13 6l6 6-6 6" />,
  "chevron-down": <path d="m6 9 6 6 6-6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  x: <path d="M18 6 6 18M6 6l12 12" />,
  phone: <path d="M4.5 4h3.4l1.5 5-2 1.5a12 12 0 0 0 6 6l1.5-2 5 1.5v3.4a1 1 0 0 1-1.1 1A17 17 0 0 1 3.5 5.1a1 1 0 0 1 1-1.1Z" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 6.5 8 6 8-6" />
    </>
  ),
  "map-pin": (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="15" r="4" />
      <path d="m11 12 8-8M16 4l3 3M19 7l2 2" />
    </>
  ),
  home: (
    <>
      <path d="m4 11 8-7 8 7" />
      <path d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9" />
    </>
  ),
  "message-circle": (
    <path d="M21 12a8 8 0 1 1-3.4-6.5L21 4l-1 3.6A7.96 7.96 0 0 1 21 12Z" />
  ),
};

export function Icon({
  name,
  className = "size-5",
  strokeWidth = 1.7,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
