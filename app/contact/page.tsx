"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useMemo, useState } from "react";
import HeroPatternOverlay from "@/components/home/HeroPatternOverlay";
import { fadeUpVariant, staggerContainer } from "@/components/motion/tokens";

const inquiryTypes = [
  {
    id: "speaking",
    label: "Speaking & Keynotes",
    detail: "Conferences, faith gatherings, corporate events"
  },
  {
    id: "advisory",
    label: "Advisory & Strategy",
    detail: "Brand, creative economy, and leadership counsel"
  },
  {
    id: "media",
    label: "Media & Press",
    detail: "Interviews, features, and editorial requests"
  },
  {
    id: "general",
    label: "General Inquiry",
    detail: "Partnerships, collaborations, everything else"
  }
] as const;

const socialLinks = [
  {
    label: "Instagram",
    handle: "@drfoy",
    href: "https://instagram.com/drfoy"
  },
  {
    label: "LinkedIn",
    handle: "Tochukwu Macfoy",
    href: "https://www.linkedin.com/in/tochukwu-macfoy-05947b103/"
  }
] as const;

type FormValues = {
  name: string;
  email: string;
  message: string;
};

function FormField({
  id,
  label,
  type = "text",
  rows,
  value,
  onFocus,
  onBlur,
  onChange
}: {
  id: string;
  label: string;
  type?: "text" | "email";
  rows?: number;
  value: string;
  onFocus: () => void;
  onBlur: () => void;
  onChange: (value: string) => void;
}) {
  const sharedClass =
    "mt-2 w-full border-0 border-b border-teal/20 bg-transparent py-3 font-body text-base text-ink placeholder:text-muted/70 transition-colors duration-200 focus:border-teal focus:outline-none focus:ring-0 md:py-3.5 md:text-lg";

  return (
    <label htmlFor={id} className="group block">
      <span className="font-display text-[10px] uppercase tracking-[0.24em] text-teal/90 transition-colors group-focus-within:text-teal sm:text-[11px] sm:tracking-[0.28em]">
        {label}
      </span>
      {rows ? (
        <textarea
          id={id}
          name={id}
          rows={rows}
          required
          value={value}
          placeholder={`Your ${label.toLowerCase()}`}
          className={`${sharedClass} resize-none`}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={(event) => onChange(event.target.value)}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required
          value={value}
          placeholder={`Your ${label.toLowerCase()}`}
          className={sharedClass}
          autoComplete={type === "email" ? "email" : "name"}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={(event) => onChange(event.target.value)}
        />
      )}
    </label>
  );
}

function SubmitRevealButton() {
  const label = "Send message";
  const padded = `\u00a0${label}\u00a0`;

  return (
    <button type="submit" className="nav-reveal-btn nav-reveal-btn--form">
      <span className="nav-reveal-btn__actual">{padded}</span>
      <span aria-hidden="true" className="nav-reveal-btn__hover">
        {padded}
      </span>
    </button>
  );
}

function PortraitPanel({ collapsed }: { collapsed: boolean }) {
  return (
    <div className="relative h-full min-h-[220px] w-full overflow-hidden bg-[var(--color-bg-deep)] sm:min-h-[280px] md:min-h-0">
      <Image
        src="/images/foy.jpg"
        alt=""
        fill
        priority
        sizes="(max-width: 768px) 100vw, 42vw"
        className="object-cover object-[50%_18%] md:object-[50%_12%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(14,19,24,0.15),rgba(14,19,24,0.72)_55%,rgba(14,19,24,0.94))]" />
      <HeroPatternOverlay />

      <motion.div
        className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6 md:p-8 lg:p-10"
        animate={{ opacity: collapsed ? 0 : 1, y: collapsed ? 16 : 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="font-display text-[10px] uppercase tracking-[0.28em] text-teal sm:text-xs sm:tracking-[0.34em]">
          Bookings & inquiries
        </p>
        <h1 className="mt-2 font-heading text-[clamp(2rem,5vw,3.75rem)] leading-[0.92] text-ink sm:mt-3">
          Let&apos;s build
          <span className="block">something that</span>
          <span className="accent-gradient-text">lasts.</span>
        </h1>
      </motion.div>
    </div>
  );
}

export default function ContactPage() {
  const prefersReducedMotion = useReducedMotion();
  const [inquiry, setInquiry] = useState<(typeof inquiryTypes)[number]["id"]>("speaking");
  const [formFocused, setFormFocused] = useState(false);
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    message: ""
  });

  const portraitCollapsed = useMemo(
    () =>
      formFocused ||
      Boolean(formValues.name.trim() || formValues.email.trim() || formValues.message.trim()),
    [formFocused, formValues]
  );

  const handleFieldFocus = useCallback(() => setFormFocused(true), []);

  const handleFieldBlur = useCallback(() => {
    requestAnimationFrame(() => {
      const active = document.activeElement;
      const formRoot = document.getElementById("contact-form");
      if (!formRoot?.contains(active)) {
        setFormFocused(false);
      }
    });
  }, []);

  const updateField = useCallback((field: keyof FormValues, value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  }, []);

  return (
    <main className="overflow-x-clip bg-[var(--color-bg-deep)] pt-20">
      <section className="relative border-b border-teal/15 bg-background">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_0%_0%,rgba(45,191,177,0.07),transparent_55%)]"
        />

        <div
          className={["contact-split", portraitCollapsed ? "contact-split--engaged" : ""]
            .filter(Boolean)
            .join(" ")}
        >
          <aside
            className="contact-split__portrait relative border-b border-teal/15 md:border-b-0"
            aria-hidden={portraitCollapsed}
          >
            <PortraitPanel collapsed={portraitCollapsed} />
          </aside>

          <div className="contact-split__content">
            <div className="page-container py-8 sm:py-10 md:py-12 lg:py-16">
              <AnimatePresence>
                {portraitCollapsed ? (
                  <motion.div
                    key="contact-compact-heading"
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-8 md:mb-10"
                  >
                    <p className="font-display text-[10px] uppercase tracking-[0.28em] text-teal sm:text-xs sm:tracking-[0.34em]">
                      Bookings & inquiries
                    </p>
                    <h1 className="mt-2 font-heading text-[clamp(1.85rem,5vw,3rem)] leading-[0.95] text-ink">
                      Tell us what you&apos;re building.
                    </h1>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <motion.div
                className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-14"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.aside variants={fadeUpVariant} className="lg:col-span-5">
                  <p className="font-display text-[10px] uppercase tracking-[0.28em] text-teal sm:text-[11px] sm:tracking-[0.32em]">
                    What brings you here
                  </p>
                  <div className="mt-3 h-px w-16 bg-teal/30 sm:mt-4" />
                  <h2 className="mt-5 font-heading text-[clamp(1.75rem,4vw,2.75rem)] leading-[0.95] text-ink sm:mt-6">
                    Choose your lane.
                  </h2>
                  <p className="mt-4 max-w-sm font-body text-[0.95rem] leading-relaxed text-ink/75 sm:text-base">
                    Select an inquiry type, then send a note. Every message is read — expect a
                    thoughtful reply, not an autoresponder.
                  </p>

                  <div className="mt-8 space-y-2 sm:mt-10">
                    {inquiryTypes.map((item, index) => {
                      const active = inquiry === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setInquiry(item.id)}
                          aria-pressed={active}
                          className={[
                            "group grid w-full grid-cols-[2.25rem_1fr] items-start gap-x-3 border px-3 py-4 text-left transition-colors duration-200 sm:grid-cols-[2.75rem_1fr] sm:gap-x-4 sm:px-4 sm:py-5",
                            active
                              ? "border-teal/45 bg-teal/[0.06]"
                              : "border-teal/12 bg-transparent hover:border-teal/28 hover:bg-teal/[0.03]"
                          ].join(" ")}
                        >
                          <span
                            className={[
                              "font-display text-[11px] uppercase tracking-[0.2em] transition-colors sm:text-xs",
                              active ? "text-teal" : "text-ink/35 group-hover:text-ink/55"
                            ].join(" ")}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="min-w-0">
                            <span
                              className={[
                                "block font-heading text-[clamp(1.05rem,2.5vw,1.35rem)] leading-tight transition-colors",
                                active ? "text-ink" : "text-ink/88 group-hover:text-ink"
                              ].join(" ")}
                            >
                              {item.label}
                            </span>
                            <span className="mt-1 block font-body text-sm leading-snug text-ink/55">
                              {item.detail}
                            </span>
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-10 border-t border-teal/15 pt-8 sm:mt-12">
                    <p className="font-display text-[10px] uppercase tracking-[0.28em] text-teal/90 sm:text-[11px]">
                      Elsewhere
                    </p>
                    <ul className="mt-4 space-y-3">
                      {socialLinks.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex flex-wrap items-baseline gap-x-2 gap-y-0.5"
                          >
                            <span className="font-display text-[10px] uppercase tracking-[0.2em] text-ink/45 transition-colors group-hover:text-teal sm:text-[11px]">
                              {item.label}
                            </span>
                            <span className="font-body text-base text-ink transition-colors group-hover:text-teal md:text-lg">
                              {item.handle}
                            </span>
                            <span
                              aria-hidden
                              className="text-teal/70 transition-transform duration-200 group-hover:translate-x-0.5"
                            >
                              ↗
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.aside>

                <motion.div variants={fadeUpVariant} className="lg:col-span-7">
                  <div className="relative border border-teal/18 bg-[var(--color-bg-deep)]/60 p-6 backdrop-blur-sm sm:p-8 md:p-10">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal/50 to-transparent"
                    />

                    <p className="font-display text-[10px] uppercase tracking-[0.28em] text-teal sm:text-[11px] sm:tracking-[0.32em]">
                      Your message
                    </p>
                    <h2 className="mt-3 font-heading text-[clamp(1.85rem,4vw,2.75rem)] leading-[0.95] text-ink">
                      {portraitCollapsed ? "Almost there." : "Tell us what you're building."}
                    </h2>
                    <p className="mt-3 max-w-xl font-body text-sm text-ink/65 sm:text-base">
                      Inquiry type:{" "}
                      <span className="text-teal">
                        {inquiryTypes.find((item) => item.id === inquiry)?.label}
                      </span>
                    </p>

                    <form
                      id="contact-form"
                      className="mt-8 space-y-7 sm:mt-10 sm:space-y-8"
                      onSubmit={(event) => {
                        event.preventDefault();
                      }}
                    >
                      <input type="hidden" name="inquiry" value={inquiry} />

                      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-8">
                        <FormField
                          id="name"
                          label="Name"
                          value={formValues.name}
                          onFocus={handleFieldFocus}
                          onBlur={handleFieldBlur}
                          onChange={(value) => updateField("name", value)}
                        />
                        <FormField
                          id="email"
                          label="Email"
                          type="email"
                          value={formValues.email}
                          onFocus={handleFieldFocus}
                          onBlur={handleFieldBlur}
                          onChange={(value) => updateField("email", value)}
                        />
                      </div>

                      <FormField
                        id="message"
                        label="Message"
                        rows={6}
                        value={formValues.message}
                        onFocus={handleFieldFocus}
                        onBlur={handleFieldBlur}
                        onChange={(value) => updateField("message", value)}
                      />

                      <div className="flex flex-col gap-5 border-t border-teal/12 pt-7 sm:flex-row sm:items-center sm:justify-between sm:pt-8">
                        <p className="max-w-xs font-body text-xs leading-relaxed text-ink/50 sm:text-sm">
                          By submitting, you agree to be contacted about your inquiry. No mailing
                          lists, no noise.
                        </p>
                        <SubmitRevealButton />
                      </div>
                    </form>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-teal/15 bg-background">
        <div className="page-container py-10 sm:py-12 md:py-14">
          <motion.div
            className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end sm:gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUpVariant}
          >
            <p className="max-w-2xl font-heading text-[clamp(1.35rem,3.5vw,2.25rem)] leading-snug text-ink/90">
              Serious conversations only. If you&apos;re building culture with conviction, he wants to
              hear from you.
            </p>
            <p className="shrink-0 font-display text-[10px] uppercase tracking-[0.24em] text-ink/40 sm:text-[11px] sm:tracking-[0.28em]">
              Lagos · Global
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
