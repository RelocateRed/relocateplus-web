import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

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
};