import { branches, site } from "@/content/site";

export function organizationJsonLd() {
  const hq = branches.find((branch) => branch.isHQ) ?? branches[0];

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#organization`,
    name: site.name,
    slogan: site.tagline,
    url: site.url,
    email: site.email,
    telephone: site.phoneDisplay,
    areaServed: "Namibia",
    address: {
      "@type": "PostalAddress",
      streetAddress: hq.address,
      addressCountry: "NA",
    },
  };
}
