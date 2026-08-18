import Image from "next/image";

export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/images/logo-trimmed.png"
      alt="Formula Courier Services"
      width={1771}
      height={304}
      className={`object-contain ${className}`}
      priority
    />
  );
}
