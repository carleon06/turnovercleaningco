export function Logo({ className = "size-14" }: { className?: string }) {
  return (
    <svg
      viewBox="199 168 302 432"
      className={className}
      role="img"
      aria-label="Turnover Cleaning Co."
    >
      <rect x="199" y="168" width="302" height="432" fill="#1f5f5a" />
      <g transform="translate(350,290) scale(3.4)">
        <path d="M0 8 L0 -30 Q14 -22 14 -6 Z" fill="#f2c68a" />
        <path d="M0 8 L-24 -18 Q-6 -22 4 -8 Z" fill="#eab383" />
        <path d="M0 8 L24 -18 Q6 -22 -4 -8 Z" fill="#e8836b" />
        <path d="M0 8 L-30 4 Q-14 -6 -2 2 Z" fill="#c9a15c" />
        <path d="M0 8 L30 4 Q14 -6 2 2 Z" fill="#d99a52" />
        <rect x="-2.5" y="6" width="5" height="16" rx="1.5" fill="#fdf6ee" />
      </g>
      <text
        x="350"
        y="452"
        textAnchor="middle"
        fontFamily="Didot,'Times New Roman',serif"
        fontSize="46"
        letterSpacing="2"
        fill="#fdf6ee"
      >
        TURNOVER
      </text>
      <text
        x="350"
        y="504"
        textAnchor="middle"
        fontFamily="Didot,'Times New Roman',serif"
        fontSize="46"
        letterSpacing="2"
        fill="#fdf6ee"
      >
        CLEANING
      </text>
      <line x1="288" y1="532" x2="412" y2="532" stroke="#e0b06a" strokeWidth="2" />
      <text
        x="350"
        y="568"
        textAnchor="middle"
        fontFamily="Didot,'Times New Roman',serif"
        fontSize="26"
        letterSpacing="12"
        fill="#e0b06a"
      >
        CO
      </text>
    </svg>
  );
}
