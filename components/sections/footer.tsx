import Image from "next/image";
import Link from "next/link";

import { getPublishedGuides } from "@/content/guides";
import { STORE_BADGES_LIVE, appStoreLink } from "@/lib/site";
import StoreBadges from "@/components/ui/store-badges";

import Container from "@/components/ui/container";

const linkClass = "text-slate-600 duration-300 hover:text-[#2563EB]";

// Same anchors as the app tour on the homepage
const FEATURES = [
  { label: "Roadmap", href: "/#roadmaps" },
  { label: "Deadlines", href: "/#deadlines" },
  { label: "Documents", href: "/#documents" },
  { label: "Budget", href: "/#budget" },
  { label: "Tax", href: "/#tax" },
  { label: "Family", href: "/#family" },
  { label: "Pets", href: "/#pets" },
  { label: "AI assistant", href: "/#ai" },
];

const COMPANY = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Support", href: "/support" },
];

const LEGAL = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Delete Account", href: "/delete-account" },
];

function Column({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="font-semibold text-slate-900">{title}</h3>
      <ul className="mt-6 flex flex-col gap-4">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className={linkClass}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const guides = getPublishedGuides();
  // A few popular routes plus the overview page
  const guideLinks = [
    ...guides
      .filter((g) => g.kind !== "topic")
      .slice(0, 5)
      .map((g) => ({
        label:
          g.kind === "route"
            ? `${g.fromName.replace(/^the /, "")} → ${g.toName}`
            : g.title.split(":")[0].replace(/ 20\d\d/, "").trim(),
        href: `/guides/${g.slug}`,
      })),
    ...(guides.length ? [{ label: "All moving guides →", href: "/guides" }] : []),
  ];

  return (
    <footer className="border-t border-slate-200 bg-[#F8FBFF]">
      <Container>
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 py-20 lg:grid-cols-[1.4fr_1fr_1.3fr_1fr_1fr] lg:gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Relocate+ logo"
                width={48}
                height={48}
                className="h-12 w-12 rounded-2xl object-contain"
              />
              <div>
                <p className="text-xl font-bold text-slate-900">Relocate+</p>
                <p className="text-sm text-slate-500">Move abroad with confidence.</p>
              </div>
            </div>

            <p className="mt-8 max-w-sm leading-8 text-slate-600">
              Your whole move in one app: a personal roadmap, deadlines, a
              secure document vault, budget, tax, family and pets — with an AI
              assistant that knows your route.
            </p>

            {STORE_BADGES_LIVE ? (
              <StoreBadges campaign="footer" className="mt-8" />
            ) : (
            <a
              href={appStoreLink("footer")}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0B1530] px-5 py-3 text-sm font-semibold !text-white transition-colors hover:bg-[#2563EB]"
            >
              Download on the App Store
            </a>
            )}
          </div>

          {guides.length ? (
            <>
              <Column title="Features" links={FEATURES} />
              <Column title="Moving guides" links={guideLinks} />
            </>
          ) : (
            <Column title="Features" links={FEATURES} />
          )}
          <Column title="Company" links={COMPANY} />
          <Column title="Legal" links={LEGAL} />
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-slate-200 py-8 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} Relocate+. All rights reserved.</p>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            <Link href="/privacy" className="duration-300 hover:text-[#2563EB]">Privacy</Link>
            <Link href="/terms" className="duration-300 hover:text-[#2563EB]">Terms</Link>
            <Link href="/delete-account" className="duration-300 hover:text-[#2563EB]">Delete Account</Link>
            <Link href="/contact" className="duration-300 hover:text-[#2563EB]">Contact</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
