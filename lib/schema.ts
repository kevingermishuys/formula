import { branches, site } from "@/content/site";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#organization`,
    name: site.name,
    slogan: site.tagline,
    url: site.url,
    email: site.email,
    telephone: site.phoneDisplay,
    areaServed: ["Namibia", "South Africa"],
    address: branches.map((branch) => ({
      "@type": "PostalAddress",
      streetAddress: branch.address,
      addressCountry: "NA",
    })),
  };
}
