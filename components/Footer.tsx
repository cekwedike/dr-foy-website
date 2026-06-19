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
    <footer className="overflow-x-clip border-t border-teal/25 bg-background px-5 py-9 sm:px-6 md:px-10 md:py-12">
      <div className="page-container">
        <div className="grid grid-cols-1 items-start gap-9 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <BrandWordmark className="text-[clamp(1.2rem,4vw,1.95rem)] text-coral" />
            <p className="mt-2 max-w-sm font-body text-[1.02rem] leading-relaxed text-muted md:mt-3 md:text-base">
              Physician. Strategist. Culture Builder.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3 lg:gap-10">
            <div className="w-full md:max-w-[14rem]">
              <h4 className="font-body text-xs uppercase tracking-[0.22em] text-teal/90">Quick Links</h4>
              <nav className="mt-3 flex flex-col gap-2">
                {quickLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-body text-base text-ink/88 transition-colors hover:text-coral md:text-[1.02rem]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="w-full md:max-w-[14rem]">
              <h4 className="font-body text-xs uppercase tracking-[0.22em] text-teal/90">Social</h4>
              <div className="mt-3 flex items-center justify-start gap-3 md:gap-4">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-teal/15 bg-[rgba(20,26,33,0.55)] text-muted transition-colors hover:text-coral"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="hidden w-full lg:block lg:max-w-[16rem]">
              <h4 className="font-body text-xs uppercase tracking-[0.22em] text-teal/90">Get in touch</h4>
              <Link
                href="/contact"
                className="mt-3 inline-flex border-b border-teal/25 pb-1 font-body text-[1.02rem] text-ink/82 transition-colors hover:text-teal"
              >
                Contact form
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-9 h-px w-full bg-ink/10 md:mt-10" />
        <div className="mt-4 flex flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between md:mt-5">
          <p className="font-body">
            © {new Date().getFullYear()} Dr. Tochukwu Macfoy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
