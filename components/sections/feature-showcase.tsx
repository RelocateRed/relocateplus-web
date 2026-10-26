import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

import Heading from "@/components/typography/heading";
import Text from "@/components/typography/text";

type Feature = { icon: string; title: string; text: string };

type Props = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  intro: string;
  features: Feature[];
  image: { src: string; alt: string; width: number; height: number };
  imageSide: "left" | "right";
  tint?: boolean;
  link?: { href: string; label: string };
};

/** Shared layout for the app feature sections on the homepage. */
export default function FeatureShowcase({
  id,
  eyebrow,
  title,
  intro,
  features,
  image,
  imageSide,
  tint = false,
  link,
}: Props) {
  const imageLeft = imageSide === "left";

  return (
    <Section
      id={id}
      className={`relative overflow-hidden py-20 lg:py-32 ${tint ? "bg-[#F8FBFF]" : "bg-white"}`}
    >
      <div
        className={`absolute ${imageLeft ? "left-0" : "right-0"} top-20 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[150px]`}
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Text */}
          <div className={imageLeft ? "order-1 lg:order-2" : "order-1"}>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#2563EB]">
              {eyebrow}
            </p>

            <Heading className="mt-6 text-4xl sm:text-5xl">{title}</Heading>

            <Text className="mt-6 text-lg leading-8 lg:mt-8 lg:text-xl lg:leading-9">
              {intro}
            </Text>

            <div className="mt-8 space-y-6 lg:mt-12 lg:space-y-8">
              {features.map((f) => (
                <div key={f.title} className="flex gap-5">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB]">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{f.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {link ? (
              <Link
                href={link.href}
                className="mt-10 inline-flex items-center gap-2 font-semibold text-[#2563EB] hover:underline"
              >
                {link.label} <span aria-hidden="true">→</span>
              </Link>
            ) : null}
          </div>

          {/* Image */}
          <div
            className={`relative mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none ${imageLeft ? "order-2 lg:order-1" : "order-2"}`}
          >
            <div className="absolute inset-0 rounded-[48px] bg-blue-500/5 blur-3xl" />
            <div className="relative overflow-hidden rounded-[42px] border border-slate-200 bg-white shadow-[0_40px_120px_rgba(15,23,42,.08)]">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full"
                sizes="(max-width: 1023px) 320px, 600px"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
