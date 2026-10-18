import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/sections/footer";
import GuideArticle from "@/components/guides/guide-article";
import { getGuide, getGuides } from "@/content/guides";
import { guideJsonLd, toScript } from "@/lib/guides/jsonld";
import { SITE_URL } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getGuides().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  const url = `${SITE_URL}/guides/${guide.slug}`;
  return {
    // absolute: the guide title already contains the brand-free keyword phrase
    title: { absolute: `${guide.title} | Relocate+` },
    description: guide.description,
    alternates: { canonical: url },
    robots: guide.status === "draft" ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type: "article",
      url,
      title: guide.title,
      description: guide.description,
      siteName: "Relocate+",
      modifiedTime: guide.lastVerified,
      publishedTime: guide.datePublished,
      images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: guide.h1 }],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
      images: ["/opengraph-image.png"],
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const related = guide.related
    .map((s) => getGuide(s))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toScript(guideJsonLd(guide)) }}
      />
      <Navbar />
      <main>
        <GuideArticle guide={guide} related={related} />
      </main>
      <Footer />
    </>
  );
}
