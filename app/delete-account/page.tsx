import Link from "next/link";
import Container from "@/components/ui/container";

export const metadata = {
  title: "Delete Account",
  description:
    "Learn how to permanently delete your Relocate+ account and associated data.",
};

export default function DeleteAccountPage() {
  return (
    <main className="on-dark min-h-screen bg-[#071426] text-white">
      <header className="border-b border-white/10">
        <Container>
          <div className="flex h-20 items-center justify-between">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight"
            >
              Relocate<span className="text-[#F5B942]">+</span>
            </Link>

            <Link
              href="/"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Back to website
            </Link>
          </div>
        </Container>
      </header>

      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[160px]" />
        <div className="absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-yellow-400/5 blur-[150px]" />

        <Container>
          <div className="relative mx-auto max-w-3xl">
            <div className="mb-8 inline-flex rounded-full border border-[#F5B942]/30 bg-[#F5B942]/10 px-4 py-2 text-sm font-medium text-[#F5B942]">
              Account & Privacy
            </div>

            <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Delete your Relocate
              <span className="text-[#F5B942]">+</span> account
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              You can permanently delete your Relocate+ account directly
              from within the app.
            </p>

            <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl sm:p-10">
              <h2 className="font-heading text-2xl font-semibold">
                How to delete your account
              </h2>

              <ol className="mt-8 space-y-6">
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F5B942] text-sm font-bold text-slate-900">
                    1
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">
                      Open Relocate+
                    </h3>
                    <p className="mt-1 text-slate-400">
                      Open the Relocate+ app and sign in to your account.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F5B942] text-sm font-bold text-slate-900">
                    2
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">
                      Open your profile
                    </h3>
                    <p className="mt-1 text-slate-400">
                      Navigate to your profile and account settings.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F5B942] text-sm font-bold text-slate-900">
                    3
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">
                      Select Delete Account
                    </h3>
                    <p className="mt-1 text-slate-400">
                      Follow the confirmation steps to permanently delete
                      your account.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="mt-8 rounded-3xl border border-red-400/20 bg-red-400/5 p-8">
              <h2 className="font-heading text-xl font-semibold">
                Important
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                Account deletion is permanent and cannot be undone. Your
                account and associated personal data will be deleted in
                accordance with our privacy practices, except where we are
                legally required to retain certain information.
              </p>
            </div>

            <div className="mt-12 border-t border-white/10 pt-10">
              <h2 className="font-heading text-xl font-semibold">
                Need help?
              </h2>

              <p className="mt-3 leading-7 text-slate-400">
                If you cannot access your account or are unable to delete
                it through the app, please contact our support team.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/support"
                  className="inline-flex items-center justify-center rounded-xl bg-[#F5B942] px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-[#e6ab39]"
                >
                  Contact Support
                </Link>

                <Link
                  href="/privacy"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}