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
  { href: "https://linkedin.com/in/tochukwu-macfoy-05947b103/", label: "LinkedIn", icon: FiLinkedin },
  { href: "https://www.youtube.com/@drfoy?sub_confirmation=1", label: "YouTube", icon: FiYoutube }
];

export default function Footer() {
  return (
    <footer className="border-t border-teal/25 bg-background px-6 py-10 md:px-10 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div>
          <BrandWordmark className="text-[clamp(1.1rem,5vw,1.85rem)] text-coral" />
          <p className="mt-2 max-w-xs font-body text-[1.02rem] leading-relaxed text-muted md:mt-3 md:text-base">
            Physician. Strategist. Culture Builder.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-8 md:mt-0 md:grid-cols-3 md:gap-10">
          <div>
            <h4 className="font-body text-sm uppercase tracking-[0.16em] text-teal">Quick Links</h4>
            <div className="mt-3 flex flex-col gap-1.5 md:mt-4 md:gap-2">
              {quickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-body text-[1.03rem] text-ink/88 transition-colors hover:text-coral md:text-base"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-body text-sm uppercase tracking-[0.16em] text-teal">Social</h4>
            <div className="mt-3 flex items-center gap-3 md:mt-4 md:gap-4">
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
                    <Icon size={19} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="hidden md:block" />
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-7xl border-t border-ink/10 pt-5 font-body text-sm text-muted md:mt-12 md:pt-6">
        © {new Date().getFullYear()} Dr. Tochukwu Macfoy. All rights reserved.
      </p>
    </footer>
  );
}
