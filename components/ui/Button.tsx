import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "accent" | "ghost" | "outline-light";

// Plain CSS transform, not framer-motion's whileHover/whileTap: wrapping a
// motion.span's pointer-gesture recognizer around a Link's content
// intercepts the native click before it bubbles to the Link, silently
// breaking navigation on real pointer/touch input.
const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold tracking-wide transition-[background-color,border-color,color,transform] duration-300 hover:scale-[1.02] active:scale-[0.97]";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-white hover:bg-slate",
  accent: "bg-red text-white hover:bg-red-deep",
  ghost: "border border-ink/15 bg-white text-ink hover:border-red hover:text-red",
  "outline-light": "border border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10",
};

export function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
  external = false,
  pulse = false,
  type = "button",
}: {
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  external?: boolean;
  pulse?: boolean;
  type?: "button" | "submit";
}) {
  const classes = `${base} ${variants[variant]} ${pulse ? "animate-cta-pulse" : ""} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
