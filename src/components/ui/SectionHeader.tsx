import Link from "next/link";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  href?: string;
  hrefLabel?: string;
  id?: string;
  rightSlot?: React.ReactNode;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  href,
  hrefLabel = "Ver todo",
  id,
  rightSlot,
}: SectionHeaderProps) {
  return (
    <div id={id} className="flex items-end justify-between gap-4 mb-5">
      <div>
        {eyebrow && (
          <span className="text-xs font-semibold uppercase tracking-wide text-secondary">
            {eyebrow}
          </span>
        )}
        <h2 className="text-xl sm:text-2xl font-bold text-text mt-0.5">{title}</h2>
        {description && (
          <p className="text-sm text-text-muted mt-1">{description}</p>
        )}
      </div>

      {rightSlot ? (
        rightSlot
      ) : (
        href && (
          <Link
            href={href}
            className="hidden sm:inline-block text-sm font-semibold text-secondary hover:text-secondary-dark whitespace-nowrap"
          >
            {hrefLabel} →
          </Link>
        )
      )}
    </div>
  );
}
