import { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HeadingProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

export default function Heading({
  children,
  as: Component = "h1",
  className,
}: HeadingProps) {
  return (
    <Component
      className={cn(
        "font-heading font-bold leading-[0.95] tracking-[-0.04em] text-[#0F172A]",
        "text-5xl md:text-6xl lg:text-7xl",
        className
      )}
    >
      {children}
    </Component>
  );
}