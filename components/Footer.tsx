"use client";

import Link from "next/link";
import { FiInstagram, FiLinkedin, FiYoutube } from "react-icons/fi";
import BrandWordmark from "@/components/BrandWordmark";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" }
];

const socials = [
  { href: "https://instagram.com/drfoy", label: "Instagram", icon: FiInstagram },
  { href: "https://linkedin.com", label: "LinkedIn", icon: FiLinkedin },
  { href: "https://youtube.com", label: "YouTube", icon: FiYoutube }
];

export default function Footer() {
  return (
    <footer className="border-t border-teal/25 bg-background px-6 py-14 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <BrandWordmark className="text-[clamp(1.25rem,3vw,1.85rem)] text-coral" />
          <p className="mt-3 max-w-xs font-body text-base leading-relaxed text-muted">
            Physician. Strategist. Culture Builder.
          </p>
        </div>

        <div>
          <h4 className="font-body text-sm uppercase tracking-[0.16em] text-teal">Quick Links</h4>
          <div className="mt-4 flex flex-col gap-2">
            {quickLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-body text-base text-ink/88 transition-colors hover:text-coral"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-body text-sm uppercase tracking-[0.16em] text-teal">Social</h4>
          <div className="mt-4 flex items-center gap-4">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="text-muted transition-colors hover:text-coral"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-7xl border-t border-ink/10 pt-6 font-body text-sm text-muted">
        © {new Date().getFullYear()} Dr. Tochukwu Macfoy. All rights reserved.
      </p>
    </footer>
  );
}
