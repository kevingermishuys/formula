export const site = {
  name: "Formula Courier Services",
  shortName: "FCS",
  tagline: "Just say when and where",
  url: "https://formulacourier.com",
  yearsExperience: 19,
  email: "info@formulacourier.com",
  phoneDisplay: "+264 (0) 61 302 583",
  phoneHref: "tel:+264613025830",
  pickupCutoff: "17:00",
  officeDropCutoff: "19:30",
  hoursDisplay: "Weekdays 08:00 – 19:30",
};

export const branches = [
  {
    name: "Head Office — Windhoek",
    address: "25 Platinum Street, Prosperita, Windhoek, Namibia",
    phoneDisplay: "+264 (0) 61 302 583",
    phoneHref: "tel:+264613025830",
    isHQ: true,
  },
  {
    name: "Grootfontein Branch",
    address: "Kavango Road No.25, GFT Central, Grootfontein, Namibia",
    phoneDisplay: "+264 67 221722",
    phoneHref: "tel:+26467221722",
    isHQ: false,
  },
] as const;

export const services = [
  {
    title: "Overnight Express",
    description: "Door-to-door or depot-to-depot overnight delivery across Namibia.",
    icon: "Zap",
  },
  {
    title: "Dedicated Support",
    description: "Friendly, performance-driven drivers and support for every client.",
    icon: "Headset",
  },
  {
    title: "Transit Insurance",
    description: "Optional cover for high-value items, for total peace of mind.",
    icon: "ShieldCheck",
  },
  {
    title: "Corporate Account Logistics",
    description: "Tailored invoicing and scheduled daily pickups for businesses.",
    icon: "Building2",
  },
] as const;

export const howItWorks = [
  {
    step: "01",
    title: "Request Pickup",
    description: "Book via web form, email, or a call to your local branch.",
  },
  {
    step: "02",
    title: "Driver Collection",
    description: `Our driver collects your parcel up to ${site.pickupCutoff} on weekdays.`,
  },
  {
    step: "03",
    title: "Rapid Transit",
    description: "Your parcel moves overnight through our nationwide logistics network.",
  },
  {
    step: "04",
    title: "Next-Day Delivery",
    description: "Delivered fresh the next morning — North to South, East to West.",
  },
] as const;

export const faqs = [
  {
    question: "Until what time do you do pickups?",
    answer: `Collections are available up to ${site.pickupCutoff} on weekdays. Branch office drop-offs are accepted until ${site.officeDropCutoff}.`,
  },
  {
    question: "How does the process work?",
    answer:
      "Contact us via web or landline, our driver collects your parcel by late afternoon, and we deliver the next morning.",
  },
  {
    question: "How and when do I pay?",
    answer:
      "Account clients receive a consolidated monthly statement. Cash clients pay before or upon delivery.",
  },
  {
    question: "Can I insure a high-value parcel?",
    answer:
      "Yes — optional transit insurance is available on request, giving you full peace of mind for valuable or fragile shipments.",
  },
] as const;

export const downloads = [
  {
    title: "Credit Application Form",
    description: "For businesses setting up a monthly courier account.",
    href: "/downloads/credit-application-form.pdf",
  },
  {
    title: "Claim Form",
    description: "For submitting a damaged or missing parcel claim.",
    href: "/downloads/claim-form.pdf",
  },
] as const;

export const stats = [
  { value: site.yearsExperience, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Nationwide Coverage" },
  { value: null, display: "Overnight", label: "Express Delivery" },
  { value: null, display: "SADC", label: "Cross-Border Reach" },
] as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Get a Quote", href: "#quote" },
  { label: "Branches", href: "#branches" },
  { label: "Downloads", href: "#downloads" },
  { label: "Contact Us", href: "#contact" },
] as const;
