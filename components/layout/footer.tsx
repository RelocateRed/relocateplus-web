import Container from "@/components/ui/container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-16">
      <Container>
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              Relocate+
            </h3>

            <p className="mt-3 text-slate-500">
              Plan your relocation with confidence.
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-8 text-slate-600">
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/support">Support</a>
          </nav>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Relocate+. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}