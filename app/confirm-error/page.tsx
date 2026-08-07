// app/confirm-error/page.tsx
//
// NOTE: In Next.js 15+, searchParams is a Promise and must be awaited.

export default async function ConfirmErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ reason?: string }>;
}) {
  const { reason } = await searchParams;

  // Translate the raw Supabase message into something a user can act on,
  // but fall back to showing the real text rather than hiding it — a generic
  // "something went wrong" makes these impossible to debug later.
  const message =
    reason === 'missing'
      ? 'This link is missing its confirmation token. It may have been altered by your email client.'
      : reason
      ? decodeURIComponent(reason)
      : 'This confirmation link is invalid or has already been used.';

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
        <span className="text-2xl text-red-500">!</span>
      </div>

      <h1 className="mb-2 text-2xl font-bold text-slate-900">
        Couldn&apos;t confirm email
      </h1>

      <p className="mb-2 max-w-sm text-slate-500">{message}</p>

      <p className="mb-8 max-w-sm text-sm text-slate-400">
        Confirmation links can only be used once. If you&apos;ve already
        confirmed, just sign in to the app as normal.
      </p>

      <a
        href="/"
        className="rounded-xl bg-[#0A1832] px-6 py-3 font-semibold text-white hover:bg-[#152744]"
      >
        Back to homepage
      </a>
    </div>
  );
}