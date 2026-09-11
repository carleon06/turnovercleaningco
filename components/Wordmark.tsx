export function Wordmark({
  textClassName = "text-ink-900",
  ruleClassName = "bg-brass-500",
  accentClassName = "text-brass-600",
  size = "text-xl",
}: {
  textClassName?: string;
  ruleClassName?: string;
  accentClassName?: string;
  size?: string;
}) {
  return (
    <div className="flex flex-col">
      <span
        className={`font-display font-semibold uppercase leading-[1.15] tracking-wide ${size} ${textClassName}`}
      >
        Turnover
        <br />
        Cleaning
      </span>
      <span className={`mt-1.5 mb-1 h-px w-10 ${ruleClassName}`} />
      <span
        className={`text-[10px] font-semibold tracking-[0.5em] ${accentClassName}`}
      >
        CO
      </span>
    </div>
  );
}
