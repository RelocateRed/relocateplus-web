"use client";

import { useState } from "react";

import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

import Heading from "@/components/typography/heading";
import Text from "@/components/typography/text";

const faqs = [
  {
    question: "What is Relocate+?",
    answer:
      "Relocate+ is an all-in-one relocation companion that helps you plan, organize and track every step of your international move.",
  },
  {
    question: "Can I use Relocate+ for any country?",
    answer:
      "Yes. Relocate+ is designed to support relocations worldwide with personalized roadmaps and country-specific guidance.",
  },
  {
    question: "Are my documents secure?",
    answer:
      "Absolutely. Your important documents are stored securely and remain easily accessible whenever you need them.",
  },
  {
    question: "How does the AI Assistant help?",
    answer:
      "The AI Assistant provides guidance, answers relocation questions and helps you understand your next recommended steps throughout your journey.",
  },
  {
    question: "Is Relocate+ free?",
    answer:
      "Relocate+ offers a free experience with optional premium features for users who want even more personalized support.",
  },
];
export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section
      id="faq"
      className="bg-white"
>

      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#2563EB]">
            FAQ
          </p>

          <Heading className="mt-6">
            Frequently asked questions
          </Heading>

          <Text className="mx-auto mt-8 max-w-2xl">
            Everything you need to know before starting your relocation journey.
          </Text>

        </div>

        <div className="mx-auto mt-20 max-w-4xl space-y-5">

          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,.05)] transition-all"
              >

                <button
                  onClick={() =>
                    setOpen(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between px-8 py-7 text-left"
                >

                  <span className="text-lg font-semibold text-slate-900">
                    {faq.question}
                  </span>

                  <span className="text-3xl font-light text-[#2563EB]">
                    {isOpen ? "−" : "+"}
                  </span>

                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >

                  <div className="overflow-hidden">

                    <p className="px-8 pb-8 leading-8 text-slate-600">
                      {faq.answer}
                    </p>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </Container>

    </Section>
  );
}