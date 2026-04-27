import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#080808] px-6 text-center">
      <div className="max-w-2xl">
        <p className="font-body text-xs uppercase tracking-[0.28em] text-gold">404</p>
        <h1 className="mt-4 font-heading text-5xl text-white md:text-7xl">Page Not Found</h1>
        <p className="mt-5 font-body text-base text-white/70 md:text-lg">
          The page you are looking for does not exist or may have moved.
        </p>
        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex rounded-full bg-gold px-7 py-3 font-body text-xs font-semibold uppercase tracking-[0.14em] text-[#080808]"
          >
            Back Home
          </Link>
        </div>
      </div>
    </main>
  );
}
