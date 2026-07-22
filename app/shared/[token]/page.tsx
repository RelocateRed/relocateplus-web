import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import Link from "next/link";

interface Phase {
  label: string;
  total: number;
  done:  number;
}

interface ShareData {
  name?:            string;
  origin_flag?:     string;
  origin_name?:     string;
  dest_flag?:       string;
  dest_name?:       string;
  readiness_score:  number;
  total_tasks:      number;
  done_tasks:       number;
  phases:           Phase[];
}

async function getShare(token: string): Promise<ShareData | null> {
  const { data, error } = await supabase
    .from("roadmap_shares")
    .select("*")
    .eq("token", token)
    .gt("expires_at", new Date().toISOString())
    .single();

  if (error || !data) return null;
  return data as ShareData;
}

export default async function SharedRoadmapPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  const share = await getShare(token);

  if (!share) notFound();

  const progressPercent = share.total_tasks > 0
    ? Math.round((share.done_tasks / share.total_tasks) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-[#FAFBFF] py-16 px-6">
      <div className="mx-auto max-w-2xl">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2563EB] mb-3">
            RELOCATE+
          </p>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            {share.name ? `${share.name}'s` : "Their"} relocation progress
          </h1>
          {share.origin_name && share.dest_name && (
            <p className="text-lg text-slate-500">
              {share.origin_flag} {share.origin_name} → {share.dest_flag} {share.dest_name}
            </p>
          )}
        </div>

        {/* Hero card */}
        <div className="rounded-3xl bg-[#0C1A2E] p-8 mb-6 text-white shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs uppercase tracking-wider text-white/40 mb-1">
                Readiness
              </p>
              <p className="text-4xl font-bold">{share.readiness_score}%</p>
            </div>
            <div className="text-right">
              <p className="text-xs uppercase tracking-wider text-white/40 mb-1">
                Tasks complete
              </p>
              <p className="text-2xl font-bold">
                {share.done_tasks}
                <span className="text-white/40 text-lg"> / {share.total_tasks}</span>
              </p>
            </div>
          </div>
          <div className="h-2 bg-white/15 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Phases */}
        {share.phases?.length > 0 && (
          <div className="rounded-2xl bg-white p-6 mb-8 shadow-sm border border-slate-100">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
              Journey phases
            </p>
            <div className="space-y-4">
              {share.phases.map((phase) => {
                const pct = phase.total > 0 ? (phase.done / phase.total) * 100 : 0;
                return (
                  <div key={phase.label}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium text-slate-700">{phase.label}</span>
                      <span className="text-slate-400">{phase.done}/{phase.total}</span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#2563EB] rounded-full"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center">
          <p className="text-slate-500 mb-4">
            Planning your own move? Get a personalised roadmap in minutes.
          </p>
          <Link
            href="/"
            className="inline-block bg-[#0C1A2E] text-white font-semibold px-8 py-3.5 rounded-2xl hover:bg-[#12233F] transition"
          >
            Try Relocate+ free →
          </Link>
        </div>

      </div>
    </div>
  );
}