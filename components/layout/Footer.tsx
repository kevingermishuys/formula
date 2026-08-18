import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { branches, downloads, navLinks, site } from "@/content/site";

export function Footer() {
  return (
    <footer id="contact" className="bg-ink text-white">
      <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo className="h-10 w-auto" />
            <p className="mt-4 font-display text-lg font-semibold italic text-white/90">
              &ldquo;{site.tagline}&rdquo;
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm text-white/70">
              <a href={site.phoneHref} className="inline-flex min-h-8 items-center gap-2 transition-colors hover:text-white">
                <Phone className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.email}`} className="inline-flex min-h-8 items-center gap-2 transition-colors hover:text-white">
                <Mail className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                {site.email}
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="label mb-4 text-white/50">Quick Links</p>
            <ul className="flex flex-col gap-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-8 items-center text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="label mb-4 text-white/50">Downloads</p>
            <ul className="flex flex-col gap-3 text-sm">
              {downloads.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-8 items-center text-white/70 transition-colors hover:text-white"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="label mb-4 text-white/50">Branches</p>
            <ul className="flex flex-col gap-4 text-sm text-white/70">
              {branches.map((branch) => (
                <li key={branch.name} className="flex gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
                  <span>
                    <span className="block font-medium text-white">{branch.name}</span>
                    {branch.address}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. Operating hours: {site.hoursDisplay}.
          </p>
          <p>Made by Kokerboom Studio</p>
        </div>
      </div>
    </footer>
  );
}
