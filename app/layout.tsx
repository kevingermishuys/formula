import type { Metadata } from "next";
import { manrope, inter } from "./fonts";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgressBar } from "@/components/motion/ScrollProgressBar";
import { site } from "@/content/site";
import { organizationJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Overnight Courier Across Namibia`,
    template: `%s — ${site.name}`,
  },
  description:
    "Fast, safe, and reliable overnight courier delivery to 15 branches across Namibia. Over 19 years of operational excellence.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} — Overnight Courier Across Namibia`,
    description:
      "Fast, safe, and reliable overnight courier delivery to 15 branches across Namibia.",
    url: site.url,
    siteName: site.name,
    locale: "en_NA",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-canvas text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <ScrollProgressBar />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
