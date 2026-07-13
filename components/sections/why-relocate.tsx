import Container from "@/components/ui/container";
import Section from "@/components/ui/section";

import Heading from "@/components/typography/heading";
import Text from "@/components/typography/text";

export default function WhyRelocate() {
  return (
    <Section
      id="why-relocate"
      className="relative overflow-hidden bg-white"
>
      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-[170px]" />

      <Container>

        <div className="relative">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#2563EB]">
              WHY RELOCATE+
            </p>

            <Heading className="mt-6">

              Moving abroad is hard.

              <br />

              Planning it shouldn't be.

            </Heading>

            <Text className="mx-auto mt-8 max-w-2xl text-xl leading-9">

              Relocate+ brings together planning, secure documents,
              progress tracking and personalized guidance into one
              beautifully organized experience, helping you move
              abroad with clarity and confidence.

            </Text>

          </div>

          <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,.06)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-[0_30px_80px_rgba(15,23,42,.10)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-[0_30px_80px_rgba(15,23,42,.10)]">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                🌍
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Personalized
                Roadmaps
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Step-by-step relocation plans based on your destination and situation.
              </p>

            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,.06)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-[0_30px_80px_rgba(15,23,42,.10)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-[0_30px_80px_rgba(15,23,42,.10)]">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                🔒
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Secure
                Documents
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Keep your important files organized and ready whenever you need them.
              </p>

            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,.06)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-[0_30px_80px_rgba(15,23,42,.10)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-[0_30px_80px_rgba(15,23,42,.10)]">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                📈
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Progress
                Tracking
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Stay motivated by seeing exactly what you've completed and what's next.
              </p>

            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,.06)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-[0_30px_80px_rgba(15,23,42,.10)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-[0_30px_80px_rgba(15,23,42,.10)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-[0_30px_80px_rgba(15,23,42,.10)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-[0_30px_80px_rgba(15,23,42,.10)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-[0_30px_80px_rgba(15,23,42,.10)]">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                ✨
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Smart
                Assistance
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Helpful AI guidance whenever you need support during your relocation journey.
              </p>

            </div>

          </div>

        </div>

      </Container>

    </Section>
  );
}