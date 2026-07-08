// LorVen Systems — Services Registry Database
import engineers from "@/assets/engineers.jpg";
import depot from "@/assets/depot.jpg";
import pcbMacro from "@/assets/pcb-macro.jpg";
import serviceInstallation from "@/assets/service-installation.png";
import serviceDesign from "@/assets/service-design.png";
import electricalCabinet from "@/assets/electrical-cabinet.jpg";

export type ServiceDetail = {
  slug: string;
  title: string;
  category: string;
  heroImage: string;
  description: string;
  overviewTitle: string;
  overviewParagraphs: string[];
  overviewImage: string;
  features: { title: string; desc: string }[];
  specifications: { label: string; value: string }[];
  downloads: { label: string; size: string; url: string; type: string }[];
};

export const SERVICES_DATA: Record<string, ServiceDetail> = {
  design: {
    slug: "design",
    title: "Engineering Design",
    category: "ENGINEERING SERVICES",
    heroImage: engineers,
    description: "Specialized engineering design for custom circuit configurations, cabinet integration, wiring harnesses, and enclosure systems complying with global railway standards.",
    overviewTitle: "From functional schematics to ready-to-manufacture integration designs.",
    overviewParagraphs: [
      "Our design division converts custom railway telemetry requirements into robust mechanical and electrical designs. We configure layouts, wiring topologies, and cabinet enclosures to survive the extreme vibration, thermal cycles, and electromagnetic conditions of railway operations.",
      "Utilizing modern CAD tools and thermal simulators, we ensure that power distribution cabinets, interlocking cabins, and locomotive assemblies adhere strictly to EN50155, RDSO, and IPC-A-610 Class 3 standards for long service lives."
    ],
    overviewImage: serviceDesign,
    features: [
      {
        title: "Electrical CAD Schematics",
        desc: "Complete circuit diagram generation for power supplies, relays, and diagnostic sensor interfaces."
      },
      {
        title: "3D Cabinet Modeling",
        desc: "Precision mechanical design of IP-rated metal cabinets tailored to station rack footprints or onboard cabins."
      },
      {
        title: "Wiring Topology Pre-Kitting",
        desc: "Layout planning and connector assignment schemes to simplify wire routing and avoid manual onsite errors."
      },
      {
        title: "Thermal & Vibration Simulation",
        desc: "Finite element analysis under extreme loads to verify cabinet structural integrity and heat dissipation profile."
      }
    ],
    specifications: [
      { label: "Engineering Standards", value: "EN50155, IPC-A-610 Class 3, RDSO/SPN/212/2012 compliance" },
      { label: "Design Environment", value: "SolidWorks, AutoCAD Electrical, Altium Designer CAD suits" },
      { label: "Cabinet Configuration", value: "Standard 19-inch steel racks or custom space-constrained enclosures" },
      { label: "Cabinet Protection", value: "IP50 (indoor cabins) up to IP65 (wayside environments)" }
    ],
    downloads: [
      { label: "LorVen Design Division Profile", size: "2.1 MB", url: "#", type: "Datasheet" },
      { label: "Railway Enclosure Design Standards", size: "1.4 MB", url: "#", type: "Manual" }
    ]
  },
  installation: {
    slug: "installation",
    title: "Site Installation",
    category: "ENGINEERING SERVICES",
    heroImage: depot,
    description: "Onsite commissioning, physical cabinet assembly, cable loop wire routing, and validation checks carried out by certified railway field engineers.",
    overviewTitle: "Rigorous onsite deployment and safety commissioning for railway electronics.",
    overviewParagraphs: [
      "Our field service engineers execute physical cabinet mounting, wiring terminations, and final logic check-out inside active station interlocking rooms, depots, and loco sheds. We operate within tight night blocks and possession windows to install systems without disrupting traffic schedules.",
      "Every installation loop is checked using specialized verification rigs (like the IFT system) to test and log cable insulation, logic routing, and connection integrity before sign-off, guaranteeing immediate operation from day one."
    ],
    overviewImage: serviceInstallation,
    features: [
      {
        title: "Site Integration Supervision",
        desc: "Onsite coordination of physical cabinet positioning, structural attachment, and grounding tests."
      },
      {
        title: "Conductor Terminal Wiring",
        desc: "Routing and termination of multi-core signaling lines with comprehensive opto-isolated isolation checks."
      },
      {
        title: "Integrated Functional Loop Tests",
        desc: "Validating logic loop feedback and interface ports under simulated interlocking signals before active hand-off."
      },
      {
        title: "Overnight possession operations",
        desc: "Highly organized field crews trained to commission wayside nodes under active line block schedules."
      }
    ],
    specifications: [
      { label: "Deployment Zones", value: "Electric loco sheds, stations, interlocking cabins, and carriage depots" },
      { label: "Validation Equipment", value: "Integrated Functional Testers (IFT), Insulation Testers, Logical Loop Analyzers" },
      { label: "Safety Compliance", value: "Certified under Indian Railways safety protocols and track protection rules" },
      { label: "Support Availabilty", value: "24/7 deployment standby during pre-scheduled line shutdown blocks" }
    ],
    downloads: [
      { label: "Site Commissioning Standards", size: "3.8 MB", url: "#", type: "Datasheet" },
      { label: "Quality Check & Hand-off Protocol", size: "1.2 MB", url: "#", type: "Manual" }
    ]
  }
};
