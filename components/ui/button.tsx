import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  href = "#",
  variant = "primary",
}: ButtonProps) {
  const classes = cn(
  "inline-flex items-center justify-center rounded-3xl px-8 py-5 text-sm font-semibold transition-all duration-300 ease-out",

  variant === "primary"
    ? "bg-[#2563EB] text-white shadow-[0_10px_30px_rgba(37,99,235,.25)] hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#1D4ED8] hover:shadow-[0_20px_50px_rgba(37,99,235,.35)] active:scale-[.98]"
    : "border border-slate-200 bg-white text-slate-900 hover:-translate-y-1 hover:border-[#2563EB]/30 hover:shadow-[0_15px_40px_rgba(15,23,42,.08)] active:scale-[.98]"
);

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}