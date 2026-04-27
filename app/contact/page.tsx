import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-[#080808] pt-20">
      <section className="grid min-h-[calc(100vh-80px)] grid-cols-1 md:grid-cols-2">
        <div className="relative min-h-[380px] overflow-hidden bg-black">
          <Image
            src="/images/foy.webp"
            alt="Dr. Foy contact"
            fill
            priority
            quality={100}
            className="object-contain object-center"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute bottom-10 left-8 right-8">
            <p className="font-heading text-4xl text-white md:text-5xl">
              Let&apos;s build something that lasts.
            </p>
          </div>
        </div>

        <div className="bg-[#111111] px-6 py-14 md:px-12">
          <h1 className="font-heading text-5xl text-white">Contact</h1>
          <div className="mt-8 space-y-3 font-body text-sm text-white/80">
            <p>
              Email:{" "}
              <a href="mailto:hello@drfoylive.com" className="text-gold hover:underline">
                hello@drfoylive.com
              </a>
            </p>
            <p>
              Instagram:{" "}
              <Link href="https://instagram.com/drfoy" className="text-gold hover:underline">
                @drfoy
              </Link>
            </p>
            <p>
              LinkedIn:{" "}
              <Link href="https://linkedin.com" className="text-gold hover:underline">
                Tochukwu Macfoy
              </Link>
            </p>
          </div>

          <form className="mt-10 space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-white/15 bg-[#0d0d0d] px-4 py-3 font-body text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-white/15 bg-[#0d0d0d] px-4 py-3 font-body text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
            />
            <textarea
              rows={6}
              placeholder="Message"
              className="w-full border border-white/15 bg-[#0d0d0d] px-4 py-3 font-body text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-gold px-7 py-3 font-body text-xs font-semibold uppercase tracking-[0.14em] text-[#080808]"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}