// app/confirmed/page.tsx
//
// NOTE: In Next.js 15+, searchParams is a Promise and must be awaited.
// Getting this wrong is a build-time failure, not a runtime one.

export default async function ConfirmedPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  const isEmailChange = type === 'email_change';

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
        <span className="text-2xl text-green-600">✓</span>
      </div>

      <h1 className="mb-2 text-2xl font-bold text-slate-900">
        {isEmailChange ? 'Email address updated' : 'Email confirmed'}
      </h1>

      <p className="mb-8 max-w-sm text-slate-500">
        {isEmailChange
          ? 'Your new email address is now active. You can sign in with it in the Relocate+ app.'
          : 'Your account is ready. Open the Relocate+ app to start planning your move.'}
      </p>

      <a
        href="relocatplus://"
        className="mb-4 w-full max-w-xs rounded-xl bg-[#0A1832] py-3.5 text-center font-semibold text-white hover:bg-[#152744]"
      >
        Open Relocate+
      </a>

      <a
        href="/"
        className="text-sm text-slate-400 underline hover:text-slate-600"
      >
        Back to homepage
      </a>
    </div>
  );
}