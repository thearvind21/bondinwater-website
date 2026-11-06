import { COMPANY_DIVISIONS, CompanyDivision } from "./bondinwater-data";

export interface ServiceFamily {
  id: string;
  code: string;
  name: string;
  tagline: string;
  summary: string;
  image: string;
  divisionIds: string[];
}

export const SERVICE_FAMILIES: ServiceFamily[] = [
  {
    id: "design-project-delivery",
    code: "FAMILY A",
    name: "Design & Project Delivery",
    tagline: "Visionary Concepts, Architectural Planning & Turnkey Management",
    summary: "From initial hand sketches to immersive 3D walkthroughs, structural engineering, and end-to-end site execution overseen by architects with over three decades of experience.",
    image: "/images/pdf_images/p7_img1.png",
    divisionIds: [
      "01-conceptualisation",
      "02-designing-services",
      "03-execution-management",
      "04-operation-maintenance",
    ],
  },
  {
    id: "aquatic-natural-environments",
    code: "FAMILY B",
    name: "Aquatic & Natural Environments",
    tagline: "Vivariums, Terrariums, Nature Ponds & Oceanariums",
    summary: "Recreating complete, balanced ecosystems with microclimate regulation, precision water flows, and authentic flora for delicate reptiles, amphibians, and marine life.",
    image: "/images/pdf_images/p18_img3.png",
    divisionIds: [
      "06-vivarium-terrarium-ponds",
    ],
  },
  {
    id: "animal-experiences",
    code: "FAMILY C",
    name: "Animal Experiences",
    tagline: "Petting Zoos, Aviaries & Conservation Captive Breeding",
    summary: "Welfare-centered animal exhibits engineered for psychological enrichment, physical freedom, ethical captive breeding, and safe human-animal interactions.",
    image: "/images/pdf_images/p26_img1.png",
    divisionIds: [
      "07-mini-petting-zoo",
      "08-aviary-engineering",
      "09-captive-breeding",
    ],
  },
  {
    id: "acrylic-theming",
    code: "FAMILY D",
    name: "Acrylic & Theming",
    tagline: "Optical Cast Acrylic, Transparent Pools & Realistic Rockwork",
    summary: "Monumental cast PMMA acrylic viewing windows, seamless cantilevered swimming pools, and hand-sculpted GFRC and FRP rock formations matching wild geology.",
    image: "/images/pdf_images/p30_img1.png",
    divisionIds: [
      "05-acrylic-craftsmanship",
      "10-acrylic-swimming-pools",
      "11-gfrc-frp-theming",
    ],
  },
  {
    id: "specialised-technical-solutions",
    code: "FAMILY E",
    name: "Specialised Technical Solutions",
    tagline: "Filtration Systems, Apex Automation, Taxidermy & 3D Prosthetics",
    summary: "Advanced Life Support Systems, multi-stage biological filtration, Neptune Systems Apex IoT telemetry, customized animal mobility prosthetics, and artisanal preservation.",
    image: "/images/pdf_images/p32_img3.png",
    divisionIds: [
      "12-customised-solutions",
    ],
  },
];

export function getFamilyServices(family: ServiceFamily): CompanyDivision[] {
  return family.divisionIds
    .map((id) => COMPANY_DIVISIONS.find((div) => div.id === id))
    .filter((div): div is CompanyDivision => div !== undefined);
}

export function getDivisionById(id: string): CompanyDivision | undefined {
  return COMPANY_DIVISIONS.find((div) => div.id === id);
}
