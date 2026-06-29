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
    title: "Signalling & Telecom (SNT)",
    blurb:
      "Mission-critical rail signalling, station interlocking, and remote diagnostic telemetry systems.",
    children: [
      {
        slug: "rdpms",
        number: "01.1",
        title: "RDPMS",
        blurb: "Remote Diagnostic & Predictive Maintenance System for track and signal health.",
      },
      {
        slug: "ips",
        number: "01.2",
        title: "IPS",
        blurb: "Integrated Power Supply system for fail-safe signalling installations.",
      },
    ],
  },
  {
    slug: "electric-locomotive",
    number: "02",
    title: "Electric Locomotive",
    blurb: "Crew training simulators, traction control systems, and locomotive diagnostic gear.",
    children: [
      {
        slug: "simulators",
        number: "02.1",
        title: "Driving Simulators",
        blurb: "Full-mission pilot training simulators with realistic CGI and cabin physics.",
      },
      {
        slug: "ift",
        number: "02.2",
        title: "IFT",
        blurb: "In-Field Testing systems for locomotive control and sensor electronics.",
      },
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
        number: "04.1",
        title: "WLI",
        blurb: "Wagon Load Indicator for on-board axle weight and cargo balance tracking.",
      },
      {
        slug: "ahabd",
        number: "04.2",
        title: "AHABD",
        blurb: "Acoustic Hot Axle Box Detector for warning against bearing failures in transit.",
      },
    ],
  },
] as const;

export const SERVICE_INDEX = [
  {
    slug: "design",
    number: "S/01",
    title: "Design",
    blurb: "Electrical, electronics and mechanical design for rail and industry.",
  },
  {
    slug: "installation",
    number: "S/02",
    title: "Installation",
    blurb: "Turnkey installation, commissioning and site integration.",
  },
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
