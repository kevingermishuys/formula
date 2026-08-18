import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

const fieldClasses =
  "min-h-12 w-full rounded-lg border border-ink/15 bg-white px-4 text-sm text-ink placeholder:text-ink-soft/60 outline-none transition-colors focus:border-red focus:ring-2 focus:ring-red/15";

export function Field({
  label,
  id,
  ...props
}: { label: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label htmlFor={id} className="block text-left">
      <span className="label mb-1.5 block text-ink-soft">{label}</span>
      <input id={id} className={fieldClasses} {...props} />
    </label>
  );
}

export function TextAreaField({
  label,
  id,
  ...props
}: { label: string } & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label htmlFor={id} className="block text-left">
      <span className="label mb-1.5 block text-ink-soft">{label}</span>
      <textarea id={id} className={`${fieldClasses} min-h-28 py-3`} {...props} />
    </label>
  );
}
