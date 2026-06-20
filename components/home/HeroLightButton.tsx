import Link from "next/link";

type HeroLightButtonProps = {
  href: string;
  label: string;
};

export default function HeroLightButton({ href, label }: HeroLightButtonProps) {
  return (
    <div className="hero-lamp-button inline-flex justify-center [perspective:900px]">
      <Link href={href} className="hero-lamp-btn group">
        <span className="hero-lamp-btn__rig" aria-hidden>
          <span className="hero-lamp-btn__dot" />
          <span className="hero-lamp-btn__beam" />
        </span>
        <span className="hero-lamp-btn__face">
          <span className="hero-lamp-btn__label">{label}</span>
        </span>
      </Link>
    </div>
  );
}
