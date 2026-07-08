// Static content for LorVen Systems site.
export const COMPANY = {
  name: "LorVen Systems",
  legal: "LorVen Systems Pvt. Ltd.",
  tagline: "Engineering Confidence",
  founded: "Established 2008",
  hq: {
    city: "Hyderabad",
    country: "India",
    address: "Plot 14, IDA Mallapur, Hyderabad 500076, Telangana, India",
    phone: "+91 40 2715 0000",
    email: "contact@lorvensystems.com",
  },
  plant: {
    city: "Bengaluru",
    address: "Industrial Estate Phase II, Peenya, Bengaluru 560058",
  },
};

export const PRODUCT_INDEX = [
  {
    slug: "snt",
    number: "01",
    title: "Signalling & Telecom",
    blurb: "",
    children: [
      { slug: "rdpms", number: "01.1", title: "RDPMS", blurb: "" },
      { slug: "ips",   number: "01.2", title: "IPS",   blurb: "" },
    ],
  },
  {
    slug: "electric-locomotive",
    number: "02",
    title: "Electric Locomotive",
    blurb: "",
    children: [
      { slug: "simulators", number: "02.1", title: "Driving Simulators", blurb: "" },
      { slug: "ifd",        number: "02.2", title: "IFD",               blurb: "" },
    ],
  },
  {
    slug: "wagons",
    number: "03",
    title: "Coaches & Wagons",
    blurb: "Integrated electrical cabinets, wiring harnesses, and freight wagon safety systems.",
    children: [
      {
        slug: "wli",
        number: "03.1",
        title: "WLI",
        blurb: "",
      },
      {
        slug: "ahabd",
        number: "03.2",
        title: "AHABD",
        blurb: "",
      },
    ],
  },
] as const;

export const SERVICE_INDEX = [
  { slug: "design",       number: "S/01", title: "Design",       blurb: "" },
  { slug: "installation", number: "S/02", title: "Installation", blurb: "" },
] as const;

export const PRIMARY_NAV = [
  { to: "/", label: "Index" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;
