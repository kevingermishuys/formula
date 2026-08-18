export const site = {
  name: "Formula Courier Services",
  shortName: "FCS",
  tagline: "Just say when and where",
  url: "https://formulacourier.com",
  yearsExperience: 19,
  totalBranches: 15,
  email: "info@formulacourier.com",
  phoneDisplay: "+264 83 720 2580",
  phoneHref: "tel:+264837202580",
  pickupCutoff: "17:00",
  officeDropCutoff: "19:30",
  hoursDisplay: "Weekdays 08:00 – 19:30",
};

export const branches = [
  {
    name: "Windhoek",
    address: "25 Platinum Street, Prosperita",
    phoneDisplay: "+264 83 720 2580",
    phoneHref: "tel:+264837202580",
    towns: "Gobabis, Okahandja & Rehoboth",
    isHQ: true,
  },
  {
    name: "Swakopmund",
    address: "Bohr Street, Brand Park No. 3",
    phoneDisplay: "+264 64 402 560",
    phoneHref: "tel:+26464402560",
    towns: "Henties Bay, Arandis",
    isHQ: false,
  },
  {
    name: "Walvis Bay",
    address: "6th Street, No. 136 J & B Park, Unit 1, Erf 3080",
    phoneDisplay: "+264 64 221 203",
    phoneHref: "tel:+26464221203",
    towns: "Coastal region",
    isHQ: false,
  },
  {
    name: "Gobabis",
    address: "Gobabis Central",
    phoneDisplay: "+264 61 302 583",
    phoneHref: "tel:+26461302583",
    towns: "Central region",
    isHQ: false,
  },
  {
    name: "Keetmanshoop",
    address: "Erf 302, Luchtenstein Street",
    phoneDisplay: "+264 63 225 656",
    phoneHref: "tel:+26463225656",
    towns: "Lüderitz, Oranjemund & Rosh Pinah",
    isHQ: false,
  },
  {
    name: "Mariental",
    address: "C/O Hendrik Witbooi & Hoogenhout Street, Unit 5",
    phoneDisplay: "+264 63 241 513",
    phoneHref: "tel:+26463241513",
    towns: "Southern region",
    isHQ: false,
  },
  {
    name: "Ongwediva",
    address: "Erf 5405, opposite Omhalanga Mills",
    phoneDisplay: "+264 65 238 445",
    phoneHref: "tel:+26465238445",
    towns: "Oshakati, Oshikango, Oshikuku, Ombalantu, Opuwo, Okahao, Tsandi, Ruacana, Etunda & Okongo",
    isHQ: false,
  },
  {
    name: "Ondangwa",
    address: "L&Y Ondangwa Park, Unit 23",
    phoneDisplay: "+264 81 416 3441",
    phoneHref: "tel:+264814163441",
    towns: "Eenhana, Omuthiya, Okalongo",
    isHQ: false,
  },
  {
    name: "Otjiwarongo",
    address: "Erf 914, C/O Libertine Amathila Dr & Ramblers Rd",
    phoneDisplay: "+264 67 304 993",
    phoneHref: "tel:+26467304993",
    towns: "Central North region",
    isHQ: false,
  },
  {
    name: "Grootfontein",
    address: "73 Ratchbane Street",
    phoneDisplay: "+264 67 241 019",
    phoneHref: "tel:+26467241019",
    towns: "Northern region",
    isHQ: false,
  },
  {
    name: "Outjo",
    address: "Outjo Park Shop 2, Erf 29 Sam Nujoma Drive",
    phoneDisplay: "+264 67 313 443",
    phoneHref: "tel:+26467313443",
    towns: "Outjo district",
    isHQ: false,
  },
  {
    name: "Omaruru",
    address: "Helmuth Angula Road",
    phoneDisplay: "+264 64 571 063",
    phoneHref: "tel:+26464571063",
    towns: "Erongo inland region",
    isHQ: false,
  },
  {
    name: "Karibib",
    address: "401 Hidipo Hamutenya Street",
    phoneDisplay: "+264 81 281 2686",
    phoneHref: "tel:+264812812686",
    towns: "Karibib area",
    isHQ: false,
  },
  {
    name: "Tsumeb",
    address: "31 Post Street",
    phoneDisplay: "+264 67 221 722",
    phoneHref: "tel:+26467221722",
    towns: "Otavi",
    isHQ: false,
  },
  {
    name: "Rundu",
    address: "Erf 1082, Independence Avenue",
    phoneDisplay: "+264 66 267 469",
    phoneHref: "tel:+26466267469",
    towns: "Katima Mulilo, Divundu",
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
  { value: site.totalBranches, suffix: "", label: "Branches Nationwide" },
] as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Get a Quote", href: "#quote" },
  { label: "Branches", href: "#branches" },
  { label: "Downloads", href: "#downloads" },
  { label: "Contact Us", href: "#contact" },
] as const;
