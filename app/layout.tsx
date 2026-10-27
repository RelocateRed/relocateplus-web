import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import { organizationJsonLd, toScript } from "@/lib/guides/jsonld";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

// Browser bar colour and native controls follow the visitor's light/dark setting
export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#070d1c" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://relocate-plus.com"),

  title: {
    default: "Relocate+",
    template: "%s | Relocate+",
  },

  description:
    "Plan your international relocation with confidence. Organize documents, follow personalized roadmaps, securely manage important documents and stay ahead of every deadline.",

  keywords: [
    "Relocate+",
    "relocation app",
    "moving abroad",
    "international relocation",
    "visa checklist",
    "expat planner",
    "immigration planning",
    "relocation roadmap",
    "moving overseas",
    "document organizer",
  ],

  authors: [
    {
      name: "Relocate+",
    },
  ],

  creator: "Relocate+",

  publisher: "Relocate+",

  applicationName: "Relocate+",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://relocate-plus.com",
    title: "Relocate+",
    description:
      "Plan your international relocation with confidence.",
    siteName: "Relocate+",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Relocate+",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Relocate+",
    description:
      "Plan your international relocation with confidence.",
    images: ["/opengraph-image.png"],
  },

  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },

  other: {
    "apple-itunes-app": "app-id=6789252666",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${interTight.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toScript(organizationJsonLd()) }}
        />
        {children}
      </body>
    </html>
  );
}