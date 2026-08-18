import type { ReactNode } from "react";

export function Badge({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`label inline-flex items-center gap-1.5 rounded-full border border-red/20 bg-red/5 px-3 py-1 text-red-deep ${className}`}
    >
      {children}
    </span>
  );
}
