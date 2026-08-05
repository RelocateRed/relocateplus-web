"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

interface Requirement {
  label: string;
  test: (pw: string) => boolean;
}

const REQUIREMENTS: Requirement[] = [
  { label: "At least 8 characters", test: (pw) => pw.length >= 8 },
  { label: "One uppercase letter", test: (pw) => /[A-Z]/.test(pw) },
  { label: "One lowercase letter", test: (pw) => /[a-z]/.test(pw) },
  { label: "One number", test: (pw) => /[0-9]/.test(pw) },
];

function getStrength(pw: string) {
  const passed = REQUIREMENTS.filter((r) => r.test(pw)).length;
  if (pw.length === 0) return { label: "", score: 0, color: "transparent" };
  if (passed <= 1) return { label: "Weak", score: 25, color: "#EF4444" };
  if (passed === 2) return { label: "Fair", score: 50, color: "#F59E0B" };
  if (passed === 3) return { label: "Strong", score: 75, color: "#3B82F6" };
  return { label: "Excellent", score: 100, color: "#22C55E" };
}

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();

  const [sessionReady, setSessionReady] = useState(false);
  const [sessionError, setSessionError] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        // Supabase can send the token either as query params (?code=...)
        // or as a URL fragment (#access_token=...) depending on flow type.
        const code = searchParams.get("code");
        const tokenHash = searchParams.get("token_hash");

        if (code) {
          const { error } = await supabase.auth.exchangeCodeForSession(code);
          if (error) throw error;
          setSessionReady(true);
          return;
        }
        if (tokenHash) {
          const { error } = await supabase.auth.verifyOtp({
            token_hash: tokenHash,
            type: "recovery",
          });
          if (error) throw error;
          setSessionReady(true);
          return;
        }

        // Check the URL fragment for an error first (e.g. expired link)
        const hash = typeof window !== "undefined" ? window.location.hash : "";
        if (hash.includes("error=")) {
          const hashParams = new URLSearchParams(hash.substring(1));
          const errorDescription = hashParams.get("error_description");
          setSessionError(
            errorDescription
              ? decodeURIComponent(errorDescription.replace(/\+/g, " "))
              : "This reset link is invalid or has expired. Please request a new one."
          );
          return;
        }

        // Check the URL fragment for access_token (implicit flow)
        if (hash.includes("access_token")) {
          const hashParams = new URLSearchParams(hash.substring(1));
          const accessToken = hashParams.get("access_token");
          const refreshToken = hashParams.get("refresh_token");

          if (accessToken && refreshToken) {
            const { error } = await supabase.auth.setSession({
              access_token: accessToken,
              refresh_token: refreshToken,
            });
            if (error) throw error;
            setSessionReady(true);
            return;
          }
        }

        const { data } = await supabase.auth.getSession();
        if (data.session) {
          setSessionReady(true);
        } else {
          setSessionError(
            "This reset link is invalid or has expired. Please request a new one."
          );
        }
      } catch (e: any) {
        setSessionError(
          e?.message ??
            "This reset link is invalid or has expired. Please request a new one."
        );
      }
    })();
  }, [searchParams]);

  const strength = useMemo(() => getStrength(password), [password]);

  const handleReset = async () => {
    setError("");
    const unmet = REQUIREMENTS.filter((r) => !r.test(password));
    if (unmet.length > 0) {
      setError("Please meet all password requirements below.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    const { error: updateError } = await supabase.auth.updateUser({
      password,
    });
    setLoading(false);

    if (updateError) {
      setError(updateError.message);
      return;
    }

    setSuccess(true);
  };

  if (!sessionReady && !sessionError) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-[#2563EB]" />
      </div>
    );
  }

  if (sessionError) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
        <h1 className="mb-2 text-2xl font-bold text-slate-900">
          Link expired
        </h1>
        <p className="mb-8 max-w-sm text-slate-500">{sessionError}</p>
        <a href="/" className="rounded-xl bg-[#2563EB] px-6 py-3 font-semibold text-white hover:bg-[#1d4ed8]">
          Back to homepage
        </a>
      </div>
    );
  }

  if (success) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
        <h1 className="mb-2 text-2xl font-bold text-slate-900">
          Password updated
        </h1>
        <p className="mb-8 max-w-sm text-slate-500">
          Your password has been changed successfully. You can now sign in
          with your new password in the Relocate+ app.
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="w-full max-w-sm">
        <h1 className="mb-2 text-2xl font-bold text-slate-900">
          Set a new password
        </h1>
        <p className="mb-8 text-sm text-slate-500">
          Choose a new password for your Relocate+ account.
        </p>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="New password"
          className="mb-3 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#2563EB]"
        />

        {password.length > 0 && (
          <div className="mb-4 flex items-center gap-3">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full transition-all"
                style={{
                  width: `${strength.score}%`,
                  backgroundColor: strength.color,
                }}
              />
            </div>
            <span
              className="min-w-[70px] text-right text-xs font-bold"
              style={{ color: strength.color }}
            >
              {strength.label}
            </span>
          </div>
        )}

        <div className="mb-5 flex flex-col gap-2">
          {REQUIREMENTS.map((req) => {
            const met = req.test(password);
            return (
              <div key={req.label} className="flex items-center gap-2">
                <div
                  className={`flex items-center justify-center rounded-full border ${
                    met ? "border-green-500 bg-green-500" : "border-slate-300"
                  }`}
                  style={{ width: 18, height: 18 }}
                >
                  {met && (
                    <span className="text-[10px] font-bold text-white">✓</span>
                  )}
                </div>
                <span
                  className={`text-sm ${
                    met ? "font-medium text-slate-900" : "text-slate-500"
                  }`}
                >
                  {req.label}
                </span>
              </div>
            );
          })}
        </div>

        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm new password"
          className="mb-3 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#2563EB]"
        />

        {error && <p className="mb-3 text-sm text-red-500">{error}</p>}

        <button
          onClick={handleReset}
          disabled={loading}
          className="w-full rounded-xl bg-[#2563EB] py-3.5 font-semibold text-white transition-colors hover:bg-[#1d4ed8] disabled:bg-slate-300"
        >
          {loading ? "Updating…" : "Update password"}
        </button>
      </div>
    </div>
  );
}