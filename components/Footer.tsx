"use client";

import Link from "next/link";
import { FiInstagram, FiLinkedin, FiYoutube } from "react-icons/fi";

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
    <footer className="border-t border-gold/45 bg-[#080808] px-6 py-14 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <h3 className="font-heading text-3xl text-gold">DR. FOY</h3>
          <p className="mt-3 max-w-xs font-body text-sm text-white/70">
            Physician. Strategist. Culture Builder.
          </p>
        </div>

        <div>
          <h4 className="font-body text-xs uppercase tracking-[0.18em] text-gold">Quick Links</h4>
          <div className="mt-4 flex flex-col gap-2">
            {quickLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-body text-sm text-white/80 transition-colors hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-body text-xs uppercase tracking-[0.18em] text-gold">Social</h4>
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
                  className="text-white/75 transition-colors hover:text-gold"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 font-body text-xs text-white/45">
        © 2025 Dr. Tochukwu Macfoy. All rights reserved.
      </p>
    </footer>
  );
}
