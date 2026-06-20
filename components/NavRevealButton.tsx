import Link from "next/link";

type NavRevealButtonProps = {
  href: string;
  label: string;
  className?: string;
  onClick?: () => void;
};

export default function NavRevealButton({ href, label, className, onClick }: NavRevealButtonProps) {
  const padded = `\u00a0${label}\u00a0`;

  return (
    <Link href={href} className={["nav-reveal-btn", className].filter(Boolean).join(" ")} onClick={onClick}>
      <span className="nav-reveal-btn__actual">{padded}</span>
      <span aria-hidden="true" className="nav-reveal-btn__hover">
        {padded}
      </span>
    </Link>
  );
}
