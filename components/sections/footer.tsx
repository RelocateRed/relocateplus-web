import Link from "next/link";

import Container from "@/components/ui/container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#F8FBFF]">

      <Container>

        <div className="grid gap-16 py-20 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2563EB] text-xl font-bold text-white">
                R
              </div>

              <div>

                <h2 className="text-xl font-bold text-slate-900">
                  Relocate+
                </h2>

                <p className="text-sm text-slate-500">
                  Move abroad with confidence.
                </p>

              </div>

            </div>

            <p className="mt-8 max-w-sm leading-8 text-slate-600">

              The complete relocation companion for planning,
              organizing documents and tracking every step
              of your international move.

            </p>

          </div>

          {/* Product */}

          <div>

            <h3 className="font-semibold text-slate-900">
              Product
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              <Link href="#" className="text-slate-600 hover:text-[#2563EB] duration-300">
                Features
              </Link>

              <Link href="#" className="text-slate-600 hover:text-[#2563EB] duration-300">
                Roadmaps
              </Link>

              <Link href="#" className="text-slate-600 hover:text-[#2563EB] duration-300">
                Documents
              </Link>

              <Link href="#" className="text-slate-600 hover:text-[#2563EB] duration-300">
                AI Assistant
              </Link>

            </div>

          </div>

          {/* Company */}

          <div>

            <h3 className="font-semibold text-slate-900">
              Company
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              <Link href="/about" className="text-slate-600 hover:text-[#2563EB] duration-300">
                About
              </Link>

              <Link href="/contact" className="text-slate-600 hover:text-[#2563EB] duration-300">
                Contact
              </Link>

              <Link href="/support" className="text-slate-600 hover:text-[#2563EB] duration-300">
                Support
              </Link>

            </div>

          </div>

          {/* Legal */}

          <div>

            <h3 className="font-semibold text-slate-900">
              Legal
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              <Link href="/privacy" className="text-slate-600 hover:text-[#2563EB] duration-300">
                Privacy Policy
              </Link>

              <Link href="/terms" className="text-slate-600 hover:text-[#2563EB] duration-300">
                Terms of Service
              </Link>

            </div>

          </div>

        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-slate-200 py-8 text-sm text-slate-500 md:flex-row">

          <p>
            © 2026 Relocate+. All rights reserved.
          </p>

          <div className="flex gap-8">

            <Link href="/privacy" className="hover:text-[#2563EB] duration-300">
              Privacy
            </Link>

            <Link href="/terms" className="hover:text-[#2563EB] duration-300">
              Terms
            </Link>

            <Link href="/contact" className="hover:text-[#2563EB] duration-300">
              Contact
            </Link>

          </div>

        </div>

      </Container>

    </footer>
  );
}