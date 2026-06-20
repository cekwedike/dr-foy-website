import Link from "next/link";

type NavRevealButtonProps = {
  href: string;
  label: string;
  compactLabel?: string;
  className?: string;
  onClick?: () => void;
};

function pad(text: string) {
  return `\u00a0${text}\u00a0`;
}

function NavRevealLabel({ compact, full }: { compact: string; full: string }) {
  return (
    <>
      <span className="xl:hidden">{pad(compact)}</span>
      <span className="hidden xl:inline">{pad(full)}</span>
    </>
  );
}

export default function NavRevealButton({
  href,
  label,
  compactLabel,
  className,
  onClick
}: NavRevealButtonProps) {
  const compact = compactLabel ?? label;

  return (
    <Link href={href} className={["nav-reveal-btn", className].filter(Boolean).join(" ")} onClick={onClick}>
      <span className="nav-reveal-btn__actual">
        <NavRevealLabel compact={compact} full={label} />
      </span>
      <span aria-hidden="true" className="nav-reveal-btn__hover">
        <NavRevealLabel compact={compact} full={label} />
      </span>
    </Link>
  );
}
