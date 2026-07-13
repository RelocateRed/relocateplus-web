import Link from "next/link";

import Container from "@/components/ui/container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container>
        <div className="grid gap-14 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">

          {/* Brand */}

          <div>

            <h3 className="text-2xl font-bold text-slate-900">
              Relocate+
            </h3>

            <p className="mt-4 max-w-sm leading-7 text-slate-500">
              Plan your international relocation with confidence.
              Organize documents, follow your roadmap and stay
              ahead of every important deadline.
            </p>

          </div>

          {/* Product */}

          <div>

            <h4 className="font-semibold text-slate-900">
              Product
            </h4>

            <div className="mt-5 flex flex-col gap-3 text-slate-600">

              <Link href="/#why-relocate">Features</Link>
              <Link href="/#roadmaps">Roadmaps</Link>
              <Link href="/#documents">Documents</Link>
              <Link href="/#ai">AI Assistant</Link>

            </div>

          </div>

          {/* Company */}

          <div>

            <h4 className="font-semibold text-slate-900">
              Company
            </h4>

            <div className="mt-5 flex flex-col gap-3 text-slate-600">

              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/support">Support</Link>

            </div>

          </div>

          {/* Legal */}

          <div>

            <h4 className="font-semibold text-slate-900">
              Legal
            </h4>

            <div className="mt-5 flex flex-col gap-3 text-slate-600">

              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>

            </div>

          </div>

        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 py-8 text-sm text-slate-400 lg:flex-row">

          <p>
            © {new Date().getFullYear()} Relocate+. All rights reserved.
          </p>

          <p>
            Designed for future expats worldwide.
          </p>

        </div>

      </Container>
    </footer>
  );
}