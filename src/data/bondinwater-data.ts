// BONDINWATER — CORE ARCHITECTURAL DATA & COMPANY PROFILE SPECIFICATIONS
// Grounded in the verified 35-page BondInWater Company Profile and authentic website assets.
// Strictly authentic: No fabricated awards, partnerships, or unsupported claims.

export interface CompanyDivision {
  id: string;
  letter: string;
  title: string;
  subtitle: string;
  scopeSummary: string;
  whatWeProvide: string[];
  projectTypes: string[];
  keySpecs: string[];
  image: string;
  galleryImages: string[];
  badge: string;
  profileQuote: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: string;
  image: string;
  specs: string[];
  deliverables: string[];
  highlight: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "all" | "aquariums" | "ponds" | "paludariums" | "habitats" | "acrylic";
  categoryLabel: string;
  image: string;
  location: string;
  dimensions?: string;
  waterCapacity?: string;
  filtrationType: string;
  description: string;
  keyFeatures: string[];
  badge?: string;
  conceptOnly?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  quote: string;
  image: string;
}

export const BRAND_CONTACT = {
  phone: "+91 9833 661 551",
  phoneRaw: "+919833661551",
  email: "sales@bondinwater.com",
  website: "www.bondinwater.com",
  location: "Mumbai, Maharashtra, India",
  hours: {
    weekdays: "Mon - Fri: 10:00 AM - 7:00 PM",
    saturday: "Saturday: 10:00 AM - 5:00 PM",
    sunday: "Sunday: By Prior Appointment",
  },
  whatsappUrl: "https://wa.me/919833661551?text=Hello%20BondInWater%20team%2C%20I%20would%20like%20to%20discuss%20a%20turnkey%20project.",
};

export const COMPANY_PHILOSOPHY_DATA = {
  coreCreed: "We aim for excellence in recreating the ecosystem for all creatures on our planet and helping in their conservation.",
  evolutionNarrative: "From our humble beginnings as hobbyists and learners, we have evolved into creators at the forefront of this industry. With passion as our fuel and curiosity as our guide, we\'ve embraced every challenge and opportunity along the way, transforming our love for animal welfare into a driving force for innovation and excellence.",
  architecturalHeritage: "With over three decades of experience, our architectural team excels in a wide range of projects, from interior designs to large-scale tourism developments. Balancing creative innovation with strict adherence to development guidelines and input from renowned wildlife experts, we deliver exceptional results that effectively recreate natural environments.",
  biomeSignificance: "Understanding the biome and its significance is foundational in creating designs that seamlessly integrate with the natural environment and cater to the specific needs of its inhabitants. By studying the biome—climate, geography, flora, and fauna—designers gain valuable insights into the unique characteristics and dynamics of the ecosystem.",
  multidisciplinaryTeam: "Biologists, animal experts, and skilled engineers collaborate at every stage. Biologists inform species selection, feeding protocols, and disease prevention, while skilled engineers bring structural proficiency and innovative Life Support Systems.",
};

// =========================================================================
// PART 4: THE 9 OFFICIAL BUSINESS DIVISIONS (A through I)
// Mapped directly from the 35-page BondInWater Company Profile
// =========================================================================
export const COMPANY_DIVISIONS: CompanyDivision[] = [
  {
    id: "conceptualisation-architectural-design",
    letter: "A",
    title: "Conceptualisation & Architectural Design",
    subtitle: "Zoo Masterplanning, 3D Walkthroughs & Bio-Architectural Planning",
    scopeSummary: "Conceptualisation is the cornerstone of our creative process. Backed by an architectural team with over three decades of experience, we develop intricate master plans for zoological parks, safari parks, tourism destinations, and luxury residential developments. From initial sketches to immersive 3D walkthrough videos, MEP engineering, and climate-controlled HVAC systems, every detail is meticulously planned.",
    whatWeProvide: [
      "Project conceptualisation, feasibility studies & site biome evaluation",
      "Architectural planning from luxury interiors to large-scale tourism developments",
      "Zoo masterplanning designed for sustainable, engaging animal-friendly environments",
      "Tailored animal enclosure design prioritizing animal welfare and visitor flow",
      "MEP engineering (water supply, filtration conduits, waste & electrical systems)",
      "HVAC systems maintaining optimal climate conditions for animals and visitors",
      "Concept sketches and design development (Think . Sketch . Repeat)",
      "Photorealistic 3D rendering and cinematic walkthrough video production"
    ],
    projectTypes: [
      "Zoological & Safari Parks (Government & Private)",
      "Tourism & Eco-Resort Developments",
      "Luxury Residential & Penthouse Architecture",
      "Corporate Headquarters & Boardroom Atriums",
      "Public Science & Natural History Centers"
    ],
    keySpecs: [
      "Architectural team with over three decades of multidisciplinary experience",
      "Balancing creative innovation with strict adherence to wildlife development guidelines",
      "Full 3D, CAD and VFX walkthrough production to preview spatial flow",
      "Custom MEP & HVAC calculations tailored to specific animal biomes"
    ],
    image: "/images/pdf_images/p7_img1.png",
    galleryImages: [
      "/images/pdf_images/p8_img1.png",
      "/images/pdf_images/p8_img2.png",
      "/images/pdf_images/p9_img2.png"
    ],
    badge: "Architectural Planning & Masterplanning",
    profileQuote: "Think . Sketch . Repeat — We elevate the design process from mere sketches to immersive 3D walkthrough videos."
  },
  {
    id: "turnkey-execution-management",
    letter: "B",
    title: "Turnkey Project Execution & Management",
    subtitle: "Complete 8-Stage Lifecycle from Feasibility to Long-Term Care",
    scopeSummary: "In end-to-end turnkey project management, we oversee every aspect of a project from initiation to completion, ensuring seamless coordination and execution throughout the entire lifecycle. By combining advanced engineering methodologies with skilled craftsmanship, we deliver superior outcomes on schedule without fragmentation between separate contractors.",
    whatWeProvide: [
      "Stage 1: Feasibility study and spatial viability assessment",
      "Stage 2: Planning and designing (architectural CAD and MEP blueprints)",
      "Stage 3: Quality inspection and material procurement (certified PMMA and filtration)",
      "Stage 4: Specialized packaging and transport logistics for heavy panels",
      "Stage 5: On-site installation, structural anchoring and test runs",
      "Stage 6: Multi-stage commissioning and biological nitrogen cycle balancing",
      "Stage 7: Project handover with full operational documentation and client training",
      "Stage 8: Ongoing operation, water parameter testing and maintenance stewardship"
    ],
    projectTypes: [
      "Turnkey Oceanariums & Giant Displays",
      "High-End Residential Estates & Penthouses",
      "Resort Aquatic Features & Public Attractions",
      "Institutional Exhibit Life Support Systems",
      "Commercial Architecture Integrations"
    ],
    keySpecs: [
      "Rigorous adherence to the 8 verified stages documented in the profile",
      "Single-source accountability eliminating contractor misalignments",
      "Advanced project scheduling ensuring timely delivery",
      "Factory pressure testing prior to transport and rigging"
    ],
    image: "/images/pdf_images/p11_img1.png",
    galleryImages: [
      "/images/pdf_images/p4_img1.png",
      "/images/pdf_images/p4_img2.png",
      "/images/pdf_images/p4_img3.png"
    ],
    badge: "Turnkey Project Management",
    profileQuote: "From vision to vibrant reality — your complete design and build service destination."
  },
  {
    id: "aquariums-aquatic-environments",
    letter: "C",
    title: "Aquariums & Aquatic Environments",
    subtitle: "Freshwater, Saltwater Reefs, Oceanariums & Natural Ponds",
    scopeSummary: "Aquariums bring a rich variety of habitats and an endless diversity of inhabitants together. BondInWater designs and executes freshwater planted biotopes, vibrant marine saltwater and reef ecosystems, monumental oceanariums with walk-under tunnels, 360-degree cylindrical aquariums, interactive touch pools, and cascading natural koi ponds with rock waterfalls.",
    whatWeProvide: [
      "Freshwater aquariums, Amazonian biotopes & African cichlid displays",
      "Saltwater marine ecosystems & complex coral reef habitats",
      "Monumental oceanariums and walkthrough underwater tunnels",
      "Interactive touch pools designed for public and resort education",
      "360-degree free-standing cylindrical acrylic aquarium towers",
      "Natural koi ponds with wetland bog and vortex bio-filtration",
      "Natural rock waterfalls and riverine acoustic stream ecosystems",
      "Swimming pool to natural pond conversions with crystal-clear clarity"
    ],
    projectTypes: [
      "Commercial Oceanariums & Marine Pavilions",
      "Luxury Residential Penthouses & Villas",
      "Hospitality Resorts, Hotels & Atriums",
      "Corporate Headquarters & Reception Displays",
      "Outdoor Botanical Gardens & Japanese Courtyards"
    ],
    keySpecs: [
      "Cast PMMA acrylic panels offering 93% optical light transmission",
      "Zero-stagnancy CFD fluid modeling for uniform oxygenation",
      "Biological multi-loop Life Support Systems with UV and ozone",
      "Ecological wetland filtration creating crystal-clear natural ponds"
    ],
    image: "/images/bondinwater/edc791_0eb954bc0a8647c3afa681e64bdc5d6d.jpg",
    galleryImages: [
      "/images/pdf_images/p19_img1.png",
      "/images/pdf_images/p23_img1.png",
      "/images/bondinwater/ef9742_1017dd86486342cdb1677aa71a6e9028.jpg"
    ],
    badge: "Aquatic Biospheres & Oceanariums",
    profileQuote: "Our beloved fish habitat — recreating natural aquatic wonders effortlessly and perfectly every time."
  },
  {
    id: "vivariums-natural-habitats",
    letter: "D",
    title: "Vivariums & Natural Habitats",
    subtitle: "Paludariums, Terrariums, Ripariums & Biome Retreats",
    scopeSummary: "At BondInWater, we excel in creating functional environments that replicate every habitat found on our planet, complete with natural flora and fauna. Using wood, fiber, glass, and precision acrylic, we deliver spectacular views. From hybrid paludariums that blend land and water to evergreen terrariums, shoreline ripariums, and nature retreats for homes and offices, we bring living nature indoors.",
    whatWeProvide: [
      "Custom vivariums replicating complete native micro-habitats",
      "Specialized paludariums combining aquatic and terrestrial ecosystems",
      "Custom terrariums creating beautifully crafted planted ecosystems",
      "Riparium shoreline habitats with emergent marginal vegetation",
      "Nature-inspired wellness retreats for homes and corporate offices",
      "Automated monsoon misting and high-pressure rain systems",
      "Full-spectrum daylight simulation with sunrise and sunset dimming",
      "Bioactive drainage substrate plenums and epiphyte moss bio-walls"
    ],
    projectTypes: [
      "Executive Office Retreats & Boardrooms",
      "Luxury Private Residences & Villas",
      "Bespoke Interior Architectural Features",
      "Wellness Centers, Spas & Rejuvenation Retreats",
      "Private Botanical Collectors & Bio-Architects"
    ],
    keySpecs: [
      "Self-sustaining bioactive clean-up micro-fauna (springtails & isopods)",
      "Ultra-quiet centrifugal ventilation preventing panel condensation",
      "Pure RO automatic top-off with precision TDS regulation",
      "Living flora integration: bromeliads, orchids, ferns, and creeping ficus"
    ],
    image: "/images/pdf_images/p21_img1.png",
    galleryImages: [
      "/images/pdf_images/p18_img3.png",
      "/images/pdf_images/p22_img1.png",
      "/images/pdf_images/p25_img1.png"
    ],
    badge: "Bioactive Terrestrial & Aquatic Habitats",
    profileQuote: "Life in a container — functional environments that replicate every habitat found on our planet."
  },
  {
    id: "animal-experiences-habitat-engineering",
    letter: "E",
    title: "Animal Experiences & Habitat Engineering",
    subtitle: "Enclosure Design, Mini Petting Zoos, Aviaries & Sustainable Breeding",
    scopeSummary: "We design tailored environments that prioritize animal welfare, environmental enrichment, and visitor experience. From mini petting zoos for resorts and hotels featuring docile farm and wild animals to multispecies walkthrough aviaries, we provide complete solutions with staff training. In our conservation breeding initiatives, we ethically raise captive-bred exotic species without affecting wild populations.",
    whatWeProvide: [
      "Tailored animal enclosure designs prioritizing welfare and safety",
      "Mini petting zoo concepts for resorts, hotels, and public spaces",
      "Staff training and expert guidance for smooth visitor interaction",
      "Hands-on educational encounters with gentle reptiles and small mammals",
      "Aviary engineering: Walkthrough aviaries, balcony habitats & flight mesh",
      "Specialized aviary mesh and species-specific flight enrichment perches",
      "Ethical captive breeding of exotic species (e.g. freshwater stingrays)",
      "Sustainable procurement ensuring healthy, disease-free livestock"
    ],
    projectTypes: [
      "Destination Resorts, Hotels & Agritourism Estates",
      "Public Wildlife & Safari Parks",
      "Private Zoological Sanctuaries",
      "Avian Walkthrough Aviaries & Conservatories",
      "Educational Petting Facilities"
    ],
    keySpecs: [
      "Species-specific thermal basking and calibrated UVB photoperiod zones",
      "Escape-proof stainless mesh and impact-resistant barrier engineering",
      "Documented flow layouts separating animal retreat zones from public pathways",
      "Captive-bred livestock protocols raised ethically and sustainably"
    ],
    image: "/images/pdf_images/p26_img1.png",
    galleryImages: [
      "/images/pdf_images/p27_img2.png",
      "/images/pdf_images/p28_img2.png",
      "/images/pdf_images/p29_img2.png"
    ],
    badge: "Ethical Animal Habitats & Aviaries",
    profileQuote: "Tailored designs that prioritize animal welfare and visitor experience."
  },
  {
    id: "acrylic-craftsmanship-engineering",
    letter: "F",
    title: "Acrylic Craftsmanship & Engineering",
    subtitle: "20mm to 300mm Sheet Thickness & Crystal-Clear Pool Walls",
    scopeSummary: "Acrylic provides exceptional clarity, lightweight ease of installation, and impact resistance far superior to glass. BondInWater specializes in precision acrylic fabrication using sheets ranging from 20mm up to 300mm in thickness. Our installations include custom curved viewing walls, transparent swimming pool perimeters, and cantilevered infinity windows, backed by a 20-year non-yellowing warranty.",
    whatWeProvide: [
      "Custom acrylic fabrication and seamless molecular chemical bonding",
      "Thermoformed curved and cylindrical panels without optical aberration",
      "Structural acrylic sheets ranging from 20mm to 300mm thickness",
      "Acrylic swimming pools featuring crystal-clear transparent walls",
      "Cantilevered infinity pool windows and see-through pool floor viewing",
      "Rebated concrete compression gasket installation & engineering",
      "Anti-scratch polymer protective conditioning and optical polishing",
      "20-year warranty against discoloration, yellowing, or hazing"
    ],
    projectTypes: [
      "Luxury Residential Cantilevered Swimming Pools",
      "Commercial Oceanariums & Marine Exhibits",
      "Rooftop Hospitality & Resort Infinity Pools",
      "Public Aquarium Tunnels & Large Viewing Windows",
      "High-Pressure Hydrostatic Viewing Ports"
    ],
    keySpecs: [
      "Confirmed thickness range: 20mm to 300mm cast PMMA sheets",
      "93% light transmittance — unmatched optical clarity and color fidelity",
      "Thermoformed curvature engineered without optical distortion",
      "20-year manufacturer warranty against yellowing and UV degradation"
    ],
    image: "/images/pdf_images/p14_img1.png",
    galleryImages: [
      "/images/pdf_images/p14_img2.png",
      "/images/pdf_images/p30_img1.png",
      "/images/pdf_images/p30_img3.png"
    ],
    badge: "Structural Acrylic Engineering",
    profileQuote: "Acrylic properties and craftsmanship — crystal-clear walls with 20 years of non-yellowing warranty."
  },
  {
    id: "gfrc-frp-theming",
    letter: "G",
    title: "GFRC & FRP Theming Works",
    subtitle: "Artisanal Rockwork, Caves & Lightweight Simulated Environments",
    scopeSummary: "Integrating Glass Fibre Reinforced Concrete (GFRC) and Fibre Reinforced Plastic (FRP) into aquariums, models, and enclosures offers enhanced durability, design flexibility, and natural aesthetics. Our artisans hand-sculpt custom rock formations, underwater caves, and simulated natural habitats that blend seamlessly with the environment while remaining lightweight for structural safety.",
    whatWeProvide: [
      "Glass Fibre Reinforced Concrete (GFRC) artificial rock sculpting",
      "Fibre Reinforced Plastic (FRP) custom models and themed structures",
      "Hand-sculpted artificial rock formations, cliffs, and canyon topographies",
      "Submerged underwater caves, reef formations, and aquatic hides",
      "Simulated natural bark, roots, and tree trunk climbing structures",
      "Non-toxic, inert waterproof sealing safe for sensitive aquatic species",
      "Lightweight fabrication allowing large-scale art without excessive slab loads",
      "Realistic geological pigmentation and natural texture replication"
    ],
    projectTypes: [
      "Public Oceanariums & Aquarium Theme Parks",
      "Resort Waterfalls & Architectural Grottos",
      "Zoological Habitats & Safari Park Enclosures",
      "Private Luxury Paludariums & Vivarium Caves",
      "Museum Dioramas & Educational Habitat Models"
    ],
    keySpecs: [
      "High strength-to-weight ratio ideal for interior floors and rooftop slabs",
      "Chemically inert formulations that do not leach or alter water pH",
      "Resistance to harsh environmental exposure, freshwater, and saltwater",
      "Custom textures molded directly from natural geological rock strata"
    ],
    image: "/images/pdf_images/p31_img1.png",
    galleryImages: [
      "/images/pdf_images/p31_img1.png",
      "/images/pdf_images/p31_img2.png",
      "/images/pdf_images/p31_img3.png"
    ],
    badge: "Realistic Themed Rockwork",
    profileQuote: "The Art and the Artist — creating realistic art using concrete & plastic."
  },
  {
    id: "specialised-technical-solutions",
    letter: "H",
    title: "Specialised Technical Solutions & Automation",
    subtitle: "Neptune Systems Apex Automation, Custom Filtration, Coral & Prosthetics",
    scopeSummary: "From advanced Life Support Systems tailored for sensitive species like otters, penguins, and salamanders to smart telemetry, BondInWater provides specialized engineering. We offer complete packages for Neptune Systems Apex aquarium automation—including supply, installation, and expert programming. Our team also creates coral restoration structures, fabricates 3D-printed animal prosthetics, and provides taxidermy services.",
    whatWeProvide: [
      "Custom water filtration design for aquariums, ponds, and swimming pools",
      "Neptune Systems Apex automation: supply, installation & expert programming",
      "24/7 automated monitoring of pH, ORP, temperature, salinity, and dissolved oxygen",
      "Integrated automation for circadian lighting, feeding schedules, and pump cycles",
      "Tailored micro-ecosystems for specialized species (otters, penguins, salamanders)",
      "Engineered substrate structures supporting coral reef restoration programs",
      "Custom 3D-printed mobility prosthetics for injured pets and rescued wildlife",
      "Artisanal taxidermy services providing lifelike memorials for beloved companions"
    ],
    projectTypes: [
      "High-Precision Marine & Reef Aquariums",
      "Marine Conservation & Coral Restoration Facilities",
      "Wildlife Rescue & Zoological Rehabilitation Hubs",
      "Specialized Zoological Species Enclosures",
      "Private Pet Tributes & Companion Memorials"
    ],
    keySpecs: [
      "Complete Neptune Systems Apex package: supply, installation, and programming",
      "Real-time cloud telemetry alerts for temperature, flow, and chemical balance",
      "Advanced multi-chamber filtration with ozone contact and fluidized sand",
      "Anatomically customized 3D printing designed specifically for animal rehabilitation"
    ],
    image: "/images/pdf_images/p33_img2.png",
    galleryImages: [
      "/images/pdf_images/p32_img3.png",
      "/images/pdf_images/p34_img2.png",
      "/images/pdf_images/p34_img4.png"
    ],
    badge: "Aquarium Automation & Engineering",
    profileQuote: "Neptune Systems Apex complete package — supply, installation, and expert programming."
  },
  {
    id: "operation-maintenance",
    letter: "I",
    title: "Operation & Maintenance",
    subtitle: "Trained Biologists, Skilled Engineers, SOPs & Water Testing",
    scopeSummary: "A thriving habitat requires dedicated ongoing stewardship. BondInWater provides comprehensive operation and maintenance services led by trained staff, specialized biologists, animal experts, and skilled engineers. Operating under strict Standard Operating Procedures (SOPs), we utilize professional tools and laboratory-grade test kits to maintain optimal water parameters and ensure animal longevity.",
    whatWeProvide: [
      "Dedicated teams of trained biologists, animal experts & skilled engineers",
      "Standard Operating Procedures (SOPs) for daily care, feeding & emergencies",
      "Rigorous water parameter testing using high-grade photometric and chemical test kits",
      "Scheduled preventive maintenance of pumps, life support filters, and UV systems",
      "Biological oversight: Species behavior, environmental enrichment & disease prevention",
      "Professional aquascaping maintenance, plant pruning, and coral husbandry",
      "Emergency response protocols ensuring continuous life support operation",
      "Detailed water chemistry logs and operational transparency for clients"
    ],
    projectTypes: [
      "Commercial Oceanariums & Public Exhibits",
      "Luxury Residential Aquariums & Ponds",
      "Corporate Atrium Living Displays",
      "Resort Habitats & Petting Zoos",
      "Institutional Animal Conservatories"
    ],
    keySpecs: [
      "Standard Operating Procedures (SOPs) ensuring consistent, exemplary care",
      "Professional testing kits measuring pH, ammonia, nitrite, nitrate, phosphate, and ORP",
      "Biologists overseeing nutrition, species behavior, and preventative healthcare",
      "Long-term maintenance contracts preserving ecosystem clarity and balance"
    ],
    image: "/images/pdf_images/p12_img1.png",
    galleryImages: [
      "/images/pdf_images/p12_img2.png",
      "/images/pdf_images/p13_img1.png",
      "/images/pdf_images/p13_img2.png"
    ],
    badge: "Lifecycle Stewardship & SOPs",
    profileQuote: "Love for animals fuels our commitment — trained staff, skilled engineers, and standard operating procedures."
  }
];

// =========================================================================
// PART 4.B: THE COMPLETE 8-STAGE PROJECT LIFECYCLE
// Grounded verbatim in Page 4 of the BondInWater Company Profile
// =========================================================================
export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Feasibility Study",
    subtitle: "Site Audit, Spatial Tolerances & Biome Evaluation",
    description: "Every successful project begins with rigorous assessment. We evaluate structural slab capacities, electrical and plumbing infrastructure, ambient light levels, microclimates, and biological feasibility before any design work commences.",
    deliverables: [
      "Structural floor load & civil deflection audit",
      "Spatial biome evaluation & environmental parameters",
      "Utility infrastructure verification (water, power, drainage)",
      "Preliminary scope & feasibility report"
    ],
    quote: "Understanding the biome and its significance is foundational in creating designs that integrate seamlessly with the natural environment.",
    image: "/images/pdf_images/p4_img1.png"
  },
  {
    number: "02",
    title: "Planning & Designing",
    subtitle: "Architectural CAD, MEP Schematics & 3D Walkthroughs",
    description: "Our architectural team, backed by over three decades of experience, translates client visions into detailed technical blueprints. We develop comprehensive architectural plans, MEP layouts, and 3D walkthrough videos that bring the concept to life.",
    deliverables: [
      "Detailed architectural CAD blueprints & construction drawings",
      "MEP (mechanical, electrical, plumbing) & HVAC schematics",
      "Computational Fluid Dynamics (CFD) water flow modeling",
      "Immersive 3D walkthrough videos and photorealistic renders"
    ],
    quote: "Think . Sketch . Repeat — We elevate the design process from mere sketches to immersive 3D walkthrough videos.",
    image: "/images/pdf_images/p7_img1.png"
  },
  {
    number: "03",
    title: "Quality Inspection & Procurement",
    subtitle: "Certified Optical Acrylic, Filtration & Raw Materials",
    description: "We procure certified materials from premier global producers across Germany, China, and India. Every cast PMMA acrylic panel (from 20mm to 300mm), filtration media, and structural fastener undergoes stringent quality inspection before fabrication.",
    deliverables: [
      "Certified cast PMMA acrylic inspection with 93% light transmission",
      "Specialized biological and mechanical filtration component verification",
      "Material certifications and 20-year non-yellowing warranty audit",
      "Substrate, GFRC, and structural framework quality check"
    ],
    quote: "Upholding the highest levels of craftsmanship and efficiency, delivering outcomes that set new benchmarks for quality.",
    image: "/images/pdf_images/p14_img1.png"
  },
  {
    number: "04",
    title: "Packaging & Transport",
    subtitle: "Specialized Crating, Crane Rigging & Safe Transit",
    description: "Monumental acrylic panels, precision filtration arrays, and delicate theming features require specialized logistics. We handle custom protective crating, heavy-lift crane rigging, and secure transport to job sites across India and internationally.",
    deliverables: [
      "Custom timber and shock-absorbing protective crating",
      "Certified crane rigging and access path engineering",
      "Transit insurance and climate-controlled transport logistics",
      "Safe on-site offloading and staging coordination"
    ],
    quote: "Meticulous planning and specialized transport ensure that complex, massive structures arrive on site in pristine condition.",
    image: "/images/pdf_images/p4_img2.png"
  },
  {
    number: "05",
    title: "Installation & Test Runs",
    subtitle: "Structural Assembly, Molecular Bonding & Dry/Wet Runs",
    description: "Our skilled technicians and engineers handle precision on-site installation. We execute chemical molecular bonding, seal rebated concrete compression gaskets, complete plumbing hookups, and run rigorous dry and wet hydraulic pressure tests.",
    deliverables: [
      "Precision structural positioning and molecular chemical bonding",
      "Rebated compression gasket installation and structural sealing",
      "Hydraulic pressure testing and vibration-dampened plumbing tie-ins",
      "Dry electrical run and mechanical pump verification"
    ],
    quote: "Advanced engineering techniques blend with proven methods for seamless coordination and peak performance.",
    image: "/images/pdf_images/p11_img1.png"
  },
  {
    number: "06",
    title: "Commissioning & Testing",
    subtitle: "Water Parameter Balancing & Biological Nitrogen Cycle",
    description: "Before introducing animal life, the environment undergoes full biochemical commissioning. Our biologists and engineers stabilize water chemistry, calibrate automated telemetry, establish the biological nitrogen cycle, and test fail-safe alarms.",
    deliverables: [
      "Biological filter seeding and nitrogen cycle maturation",
      "Laboratory-grade water quality parameter testing (pH, ammonia, nitrites, nitrates)",
      "Neptune Systems Apex automation calibration and telemetry testing",
      "Fail-safe bypass and backup power system verification"
    ],
    quote: "Biologists and animal experts possess specialized knowledge of aquatic ecosystems, informing water quality and habitat stability.",
    image: "/images/pdf_images/p13_img1.png"
  },
  {
    number: "07",
    title: "Project Handover",
    subtitle: "Telemetry Dashboard, Operational SOPs & Client Training",
    description: "Once the habitat is biochemically stable and operating with zero flaws, we conduct formal client handover. We deliver comprehensive Standard Operating Procedures (SOPs), system manuals, telemetry credentials, and on-site staff training.",
    deliverables: [
      "Complete Standard Operating Procedures (SOP) manuals",
      "Digital cloud telemetry access and monitoring orientation",
      "On-site operational training for client facility staff",
      "Formal project handover certification and warranty documentation"
    ],
    quote: "Our priority is your total happiness — delivered with complete documentation and flawless operational readiness.",
    image: "/images/pdf_images/p4_img3.png"
  },
  {
    number: "08",
    title: "Operation & Maintenance",
    subtitle: "Trained Biologists, Regular Water Testing & Ongoing Care",
    description: "Our commitment extends far beyond project completion. BondInWater provides ongoing operational care led by biologists, animal care specialists, and engineers, conducting routine water parameter testing, filter maintenance, and health checks.",
    deliverables: [
      "Scheduled maintenance visits by trained aquatic biologists",
      "Routine laboratory water parameter testing and logging",
      "Preventive servicing of pumps, filtration media, and UV sterilizers",
      "24/7 technical advisory and emergency response protocols"
    ],
    quote: "Standard Operating Procedures ensure consistency, efficiency, and the highest standards of care for aquatic life.",
    image: "/images/pdf_images/p12_img1.png"
  }
];

// =========================================================================
// PART 5: VERIFIED SIGNATURE PROJECTS
// Grounded strictly in authentic assets from bondinwater.com and the profile
// =========================================================================
export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "zenith-koi-sanctuary",
    title: "Zenith Koi Sanctuary & Japanese Garden",
    category: "ponds",
    categoryLabel: "Natural Ponds & Landscaping",
    image: "/images/bondinwater/ef9742_1017dd86486342cdb1677aa71a6e9028.jpg",
    location: "Private Estate, Western India",
    dimensions: "8.5m × 4.2m × 1.8m Depth",
    waterCapacity: "38,000 Litres",
    filtrationType: "Vortex Mechanical + Aerated Ceramic Bio-Filter Array",
    description: "A masterfully landscaped outdoor Japanese koi pond designed with volcanic granite borders, submerged viewing alcoves, and a gentle bio-stream that nurtures high-grade Japanese Nishikigoi. Authentic high-resolution project photography.",
    keyFeatures: [
      "Crystal clear water with bottom drain aeration cones",
      "Self-cleaning rotational drum & rotary filtration system",
      "Integrated water lily wetlands for natural phosphate removal",
      "Nighttime architectural LED accentuation"
    ],
    badge: "Verified Authentic Project"
  },
  {
    id: "curved-acrylic-viewing-panel",
    title: "Curved Oceanarium Acrylic Wall",
    category: "acrylic",
    categoryLabel: "Acrylic Engineering",
    image: "/images/bondinwater/ef9742_acf6df524a044c19b0da5acda84f8c87.png",
    location: "Commercial Architectural Center, Maharashtra",
    dimensions: "5.4m Arc Length × 2.4m Height × 80mm Panel",
    waterCapacity: "28,000 Litres",
    filtrationType: "Commercial Dual-Loop Life Support System",
    description: "A massive curved acrylic viewing window thermoformed to precise optical radii. Engineered with zero-distortion optical clarity to provide visitors an immersive underwater perspective.",
    keyFeatures: [
      "High-pressure cast PMMA with 93% light transmittance",
      "Custom thermoformed curvature without optical aberration",
      "Rebated concrete compression gasket installation",
      "Anti-scratch polymer protective conditioning"
    ],
    badge: "Concept Render — Replacement Pending",
    conceptOnly: true
  },
  {
    id: "horizon-infinity-acrylic-pool",
    title: "Horizon Infinity Acrylic Pool Window",
    category: "acrylic",
    categoryLabel: "Acrylic Swimming Pools",
    image: "/images/bondinwater/ef9742_0c82a93844c64e2fa7a9568ba75ebab2.jpg",
    location: "Hillside Villa, Lonavala",
    dimensions: "6.0m Length × 1.2m Height × 110mm Thickness",
    waterCapacity: "Pool Integration (85,000L)",
    filtrationType: "High-Rate Sand & Salt Chlorination Life Support",
    description: "A cantilevered infinity swimming pool featuring a structural acrylic edge that creates a boundary-free vista over the valley.",
    keyFeatures: [
      "110mm thick cast acrylic structural barrier",
      "Engineered to withstand 1.8x hydrostatic storm surge factor",
      "Seamless flush bond with Italian travertine surround",
      "UV-inhibited acrylic prevents yellowing or hazing"
    ],
    badge: "Bespoke Pool Architecture"
  },
  {
    id: "living-cascades-paludarium",
    title: "The Living Cascades Paludarium",
    category: "paludariums",
    categoryLabel: "Paludariums & Waterfalls",
    image: "/images/bondinwater/ef9742_2d866d794aa640bbbf9e0705cabfc77c.jpg",
    location: "Mumbai Luxury Residence",
    dimensions: "3.2m (L) × 1.2m (D) × 2.6m (H)",
    waterCapacity: "2,400 Litres",
    filtrationType: "Concealed Biological Bog & Fluidized Media",
    description: "An architectural indoor natural waterfall integrated with a lush bio-active paludarium. Natural slate rockwork channels soothing cascading water into a tranquil aquatic basin surrounded by rare orchids, tropical ferns, and delicate micro-fauna.",
    keyFeatures: [
      "Natural acoustic water dispersion with zero splash drift",
      "Automated high-pressure ultrasonic rain & fog system",
      "Living bio-wall with rare mosses and epiphyte flora",
      "Integrated silent Life Support System concealed beneath deck"
    ],
    badge: "Signature Living Habitat"
  },
  {
    id: "cylindrical-cichlid-tower",
    title: "Cylindrical African Cichlid Tower",
    category: "aquariums",
    categoryLabel: "Luxury Aquariums",
    image: "/images/bondinwater/edc791_b6905808d5f44203b58196e8239cc566.jpg",
    location: "Corporate Executive Headquarters, Mumbai",
    dimensions: "1.4m Diameter × 2.2m Height",
    waterCapacity: "3,100 Litres",
    filtrationType: "Central Downflow Sump with UV Sterilizer",
    description: "A 360-degree free-standing cylindrical aquarium positioned in an executive boardroom atrium. Features African Rift Valley Cichlids inhabiting authentic lace rock formations.",
    keyFeatures: [
      "Seamless single-piece thermoformed cylinder",
      "Central column hides all plumbing and electrical returns",
      "High-oxygenation vortex flow without surface turbulence",
      "Custom champagne bronze brushed metal capping"
    ],
    badge: "Bespoke Aquarium"
  },
  {
    id: "bioactive-snake-habitat",
    title: "Bioactive Serpent & Reptile Habitat",
    category: "habitats",
    categoryLabel: "Custom Animal Enclosures",
    image: "/images/bondinwater/ef9742_00d0a8d52ba24f73a1cc51b4e2821b92.jpg",
    location: "Private Conservation Residence",
    dimensions: "2.8m (L) × 1.1m (D) × 2.0m (H)",
    filtrationType: "Bioactive Substrate Drainage & Microclimate Exchanger",
    description: "A scientifically calibrated bio-active enclosure tailored for sensitive reptiles. Balanced microclimate, precise UVB gradients, naturalistic climbing branches, and living flora.",
    keyFeatures: [
      "Graduated thermal basking zones with PID thermostatic control",
      "Springtail and isopod bioactive cleanup crew ecosystem",
      "Laminated safety glass viewing panels with lockable seals",
      "Natural bark and root topography for instinctive foraging"
    ],
    badge: "Ethical Enclosure"
  },
  {
    id: "cfd-filtration-array",
    title: "CFD-Modeled Life Support Engineering Hub",
    category: "aquariums",
    categoryLabel: "Filtration & Engineering",
    image: "/images/bondinwater/ef9742_88000d9858af4e41b383bb7f27d6f699.jpg",
    location: "Institutional Display, Western India",
    dimensions: "Dedicated 14m² Plant Room Layout",
    waterCapacity: "50,000 Litres Aggregate",
    filtrationType: "Multi-Chamber Biological & Fluidized Sand",
    description: "The complete technical life support engine behind a monumental aquatic exhibit. Designed using Computational Fluid Dynamics to optimize hydraulic flow and energy consumption.",
    keyFeatures: [
      "Zero dead-zone velocity modeling tested prior to installation",
      "Variable-speed energy efficient circulation pumps",
      "Integrated ozone contact columns and redox potential regulation",
      "Fail-safe bypass valves and acoustic vibration dampening pads"
    ],
    badge: "Advanced Engineering"
  },
  {
    id: "botanical-vivarium-concept",
    title: "Equatorial Rainforest Vivarium",
    category: "paludariums",
    categoryLabel: "Paludariums & Waterfalls",
    image: "/images/bondinwater/ef9742_24a9faa7a4974bbb808192e4c1258982.jpg",
    location: "Private Architecture Studio",
    dimensions: "2.2m (L) × 0.8m (D) × 1.8m (H)",
    waterCapacity: "650 Litres",
    filtrationType: "Sub-gravel Bioactive Plenum",
    description: "An intricate vertical slice of tropical riverbank ecosystem featuring bromeliads, Tillandsia, creeping ficus, and small aquatic creatures thriving in symbiotic equilibrium.",
    keyFeatures: [
      "Drip-wall vertical irrigation keeps live moss carpet saturated",
      "Full spectrum daylight simulation with sunrise/sunset dimming",
      "Ultra-quiet centrifugal fan ventilation prevents panel condensation",
      "Pure RO automatic top-off with TDS sensor"
    ],
    badge: "Equatorial Vivarium"
  }
];

// Legacy service items mapped for compatibility
export const SERVICES_DATA: ServiceItem[] = COMPANY_DIVISIONS.map((div) => ({
  id: div.id,
  title: div.title,
  shortDesc: div.subtitle,
  fullDesc: div.scopeSummary,
  category: div.badge,
  image: div.image,
  specs: div.keySpecs,
  deliverables: div.whatWeProvide.slice(0, 4),
  highlight: div.keySpecs[0] || div.profileQuote,
}));

// Verified client collaborators from existing website
export const TRUST_COLLABORATORS = [
  {
    name: "Sanjeevani Multi-Speciality Hospital",
    type: "Healthcare Infrastructure",
    logo: "/images/bondinwater/ef9742_28b182b701ff4380a278b1c4327ad4b7.jpg",
    context: "Custom therapeutic aquatic installation designed for calming patient and visitor environments."
  },
  {
    name: "APCPL (Aravalli Power Company)",
    type: "Corporate & Energy Sector",
    logo: "/images/bondinwater/ef9742_e3195093496d449f97f56bcc1fe02e7e.png",
    context: "Collaborative environmental and aquatic engineering display system."
  },
  {
    name: "Private Luxury Residences & Estates",
    type: "High-End Residential Architecture",
    logo: null,
    context: "Bespoke indoor waterfalls, Japanese koi ponds, and infinity acrylic swimming pools across Mumbai, Alibaug, and Pune."
  }
];

// Neptune Systems Apex Automation Package (Verified from Company Profile Page 33)
export const APEX_AUTOMATION_DETAILS = {
  partner: "Neptune Systems Apex",
  trackRecord: "Over 25 years helping aquarists monitor and automate ecosystems",
  serviceScope: "Comprehensive package including supply, installation, and expert programming of the Apex system.",
  capabilities: [
    "Precision automated monitoring of pH, oxidation-reduction potential (ORP), temperature, and salinity",
    "Real-time mobile telemetry with instant push alerts for parameter shifts",
    "Automated nutritional dosing and scheduled multi-point feeding routines",
    "Circadian photoperiod lighting control and variable wavemaker wave cycle synchronization",
    "Leak detection sensors and automated pump emergency shutdown failsafes"
  ]
};

export const WHY_CHOOSE_US = [
  {
    id: "end-to-end",
    title: "End-to-End Turnkey Delivery",
    desc: "From initial feasibility study, architectural CAD, and 3D walkthroughs through procurement, installation, commissioning, and lifelong maintenance—every phase is handled with single-source accountability."
  },
  {
    id: "architectural-heritage",
    title: "Over 3 Decades Architectural Experience",
    desc: "Our architectural team excels in diverse projects from interior designs to large-scale tourism and zoological masterplanning, collaborating closely with renowned wildlife specialists."
  },
  {
    id: "biome-empathy",
    title: "Deep Biome & Animal Welfare Science",
    desc: "Understanding the biome is foundational. We study climate, geography, flora, and fauna to design habitats that cater precisely to animal comfort, behavioral enrichment, and species conservation."
  },
  {
    id: "materials-craft",
    title: "20mm to 300mm Optical Acrylic & GFRC",
    desc: "We fabricate using cast optical PMMA from 20mm up to 300mm thick with 93% light transmittance, 20-year non-yellowing warranties, and lightweight GFRC/FRP simulated themed rockwork."
  },
  {
    id: "automation",
    title: "Neptune Systems Apex Automation",
    desc: "Complete package including supply, installation, and expert programming of state-of-the-art telemetry for real-time water quality monitoring, automated dosing, and cloud alerts."
  },
  {
    id: "stewardship",
    title: "Documented SOPs & Biologist Oversight",
    desc: "Our relationship extends far beyond initial construction. Trained biologists and skilled engineers conduct routine laboratory-grade water testing under rigorous Standard Operating Procedures."
  }
];
