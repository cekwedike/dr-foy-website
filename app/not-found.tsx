import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-center">
      <div className="max-w-2xl">
        <p className="font-body text-sm uppercase tracking-[0.24em] text-teal">404</p>
        <h1 className="font-heading mt-4 text-5xl text-ink md:text-7xl">Page Not Found</h1>
        <p className="mt-5 font-body text-lg text-muted md:text-xl">
          The page you are looking for does not exist or may have moved.
        </p>
        <div className="mt-10">
          <Link
            href="/"
            className="neu-outline inline-flex rounded-full px-8 py-3.5 font-body text-sm font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:text-teal"
          >
            Back Home
          </Link>
        </div>
      </div>
    </main>
  );
}
