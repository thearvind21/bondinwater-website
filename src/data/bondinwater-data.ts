// BONDINWATER — CORE ARCHITECTURAL DATA & COMPANY PROFILE SPECIFICATIONS
// Grounded strictly in the 35-page BondInWater Company Profile and verified company archives.
// Factual Natural History Museum Exhibition Standard: Zero fabricated claims, zero invented awards.

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
  museumCode: string;
  profilePages: string;
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

export type ProjectCategory =
  | "all"
  | "aquariums"
  | "ponds"
  | "paludariums"
  | "enclosures"
  | "aviaries"
  | "acrylic"
  | "pools"
  | "filtration";

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  classification: "On-Site Installation" | "3D Conceptual Model" | "Technical Plant Room";
  image: string;
  location: string;
  materials: string;
  filtrationType: string;
  description: string;
  keyFeatures: string[];
  badge: string;
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
  profilePage: string;
}

export const BRAND_CONTACT = {
  phone: "+91 9833 661 551",
  phoneRaw: "+919833661551",
  email: "sales@bondinwater.com",
  website: "www.bondinwater.com",
  whatsappUrl: "https://wa.me/919833661551?text=Hello%20BondInWater%20team%2C%20I%20would%20like%20to%20discuss%20a%20turnkey%20project.",
};

export const COMPANY_PHILOSOPHY_DATA = {
  coreCreed: "We aim for excellence in recreating the ecosystem for all creatures on our planet and helping in their conservation.",
  evolutionNarrative: "From our humble beginnings as hobbyists and learners, we have evolved into creators at the forefront of this industry. With passion as our fuel and curiosity as our guide, we've embraced every challenge and opportunity along the way, transforming our love for animal welfare into a driving force for innovation and excellence.",
  architecturalHeritage: "With over three decades of experience, our architectural team excels in a wide range of projects, from interior designs to large-scale tourism developments. Balancing creative innovation with strict adherence to development guidelines and input from renowned wildlife experts, we deliver exceptional results that effectively recreate natural environments.",
  biomeSignificance: "Understanding the biome and its significance is foundational in creating designs that seamlessly integrate with the natural environment and cater to the specific needs of its inhabitants. By studying the biome—climate, geography, flora, and fauna—designers gain valuable insights into the unique characteristics and dynamics of the ecosystem.",
  multidisciplinaryTeam: "Biologists, animal experts, and skilled engineers collaborate at every stage. Biologists inform species selection, feeding protocols, and disease prevention, while skilled engineers bring structural proficiency and innovative Life Support Systems.",
};

// =========================================================================
// THE 9 OFFICIAL BUSINESS DIVISIONS (A through I)
// Mapped directly from Company Profile Pages per exact instructions
// =========================================================================
export const COMPANY_DIVISIONS: CompanyDivision[] = [
  {
    id: "01-conceptualisation",
    letter: "01",
    title: "Conceptualisation Services",
    subtitle: "Visionary Architecture, Creative Idea Development & Initial Visualisation",
    museumCode: "CAT-01 // CONCEPT",
    profilePages: "Pages 5–7",
    scopeSummary: "Conceptualisation is not just the first step, it's the cornerstone of our creative process. We pride ourselves on our ability to envision innovative solutions that redefine industry standards and captivate audiences. From the initial spark of an idea to its fully realized manifestation, our team of visionary thinkers meticulously crafts concepts that inspire, provoke, and ultimately drive success. Conceptualisation isn't just about generating ideas, it's about cultivating dreams and bringing them to life.",
    whatWeProvide: [
      "Creative idea development and visionary architectural concepts",
      "Initial project concepts and architectural feasibility studies",
      "Project visualisation from initial hand sketches to CAD",
      "Think . Sketch . Repeat . Construct methodology",
      "From sketches to immersive 3D walkthrough video production"
    ],
    projectTypes: [
      "Public Zoos & Animal Enclosures",
      "Commercial Oceanariums & Marine Exhibits",
      "Luxury Nature Retreats & Private Estates",
      "Eco-Tourism Masterplans"
    ],
    keySpecs: [
      "Think • Sketch • Repeat • Construct",
      "From Sketch to 3D Walkthrough Videos",
      "Meticulous Attention to Every Detail",
      "Visionary Architecture and Feasibility"
    ],
    image: "/images/pdf_images/p5_img1.png",
    galleryImages: [
      "/images/pdf_images/p5_img1.png",
      "/images/pdf_images/p6_img1.png",
      "/images/pdf_images/p7_img1.png"
    ],
    badge: "Conceptualisation Services",
    profileQuote: "Conceptualisation isn't just about generating ideas, it's about cultivating dreams and bringing them to life."
  },
  {
    id: "02-designing-services",
    letter: "02",
    title: "Designing Services",
    subtitle: "Architectural Planning, Zoo Masterplanning, MEP & HVAC Systems",
    museumCode: "CAT-02 // DESIGN",
    profilePages: "Pages 8–10",
    scopeSummary: "With over three decades of experience, our architectural team excels in a wide range of projects, from interior designs to large-scale tourism developments. Utilizing cutting-edge technology and proven methodologies, we ensure seamless coordination and optimal performance throughout each project. By balancing creative innovation with strict adherence to development guidelines and input from renowned wildlife experts, we optimize resource allocation, mitigate risks, and deliver exceptional results that exceed expectations, effectively recreating natural environments.",
    whatWeProvide: [
      "Architectural expertise backed by over three decades of professional experience",
      "Zoo masterplanning designed for sustainable, engaging animal-friendly environments",
      "Animal enclosure designs prioritizing animal welfare and visitor experience",
      "Architectural and landscape design for immersive exhibits and educational spaces",
      "MEP engineering (water supply, waste management, electrical systems)",
      "HVAC climate control systems maintaining optimal conditions for animals and visitors",
      "Biome understanding and integration tailored to climate, flora and fauna",
      "3D and VFX walkthrough videos producing realistic perspectives of client vision"
    ],
    projectTypes: [
      "Zoological Parks & Safari Parks (Government & Private)",
      "Large-Scale Tourism Developments & Eco-Resorts",
      "Public Aquariums & Bio-Authentic Habitats",
      "Specialist Animal Sanctuaries"
    ],
    keySpecs: [
      "Over Three Decades of Architectural Team Experience",
      "Input from Renowned Wildlife Experts",
      "Integrated MEP & HVAC Climate Systems",
      "Foundational Biome & Environmental Enrichment"
    ],
    image: "/images/pdf_images/p8_img2.png",
    galleryImages: [
      "/images/pdf_images/p8_img2.png",
      "/images/pdf_images/p9_img1.png",
      "/images/pdf_images/p10_img1.png"
    ],
    badge: "Designing Services",
    profileQuote: "With over three decades of experience, our architectural team excels in a wide range of projects, recreating natural environments."
  },
  {
    id: "03-execution-management",
    letter: "03",
    title: "Execution & Management Services",
    subtitle: "End-to-End Project Coordination, Advanced Engineering & Quality",
    museumCode: "CAT-03 // EXECUTION",
    profilePages: "Page 11",
    scopeSummary: "In end-to-end project management, we encompass and oversee every aspect of a project from initiation to completion, ensuring seamless coordination and execution throughout the entire project lifecycle. We blend advanced technology with proven methods for seamless coordination and peak performance, optimizing resources and minimizing risks to deliver exceptional results.",
    whatWeProvide: [
      "Advanced engineering techniques blending technology with proven methods",
      "Unmatched quality craftsmanship setting new benchmarks in execution",
      "Streamlined systems and processes enhancing efficiency throughout lifecycle",
      "Meticulous timeline planning ensuring timely completion of projects",
      "End-to-end management overseeing all aspects from initiation to completion"
    ],
    projectTypes: [
      "Turnkey Commercial Oceanariums",
      "Zoological Habitat Construction",
      "Complex Acrylic Panel Installations",
      "Public Infrastructure Developments"
    ],
    keySpecs: [
      "Advanced Engineering Techniques",
      "Unmatched Quality Benchmarks",
      "Adaptive Continuous Improvement",
      "Strict Timeline Adherence"
    ],
    image: "/images/pdf_images/p11_img1.png",
    galleryImages: [
      "/images/pdf_images/p11_img1.png",
      "/images/pdf_images/p4_img1.png",
      "/images/pdf_images/p17_img1.png"
    ],
    badge: "Execution & Management",
    profileQuote: "Delivering excellence through meticulous planning and precise execution, ensuring timely completion of projects."
  },
  {
    id: "04-operation-maintenance",
    letter: "04",
    title: "Operation & Maintenance",
    subtitle: "Biologists, Water Parameter Testing, SOPs & Skilled Engineering",
    museumCode: "CAT-04 // O&M",
    profilePages: "Pages 12–13",
    scopeSummary: "Love for animals fuels a deep commitment to their well-being and conservation. Biologists and animal experts possess specialized knowledge of aquatic ecosystems, species behavior, and habitat requirements. Their expertise informs key aspects of aquarium management, including water quality monitoring, species selection, feeding protocols, environmental enrichment, and disease prevention. Skilled engineers bring technical proficiency, while trained staff follow rigorous Standard Operating Procedures.",
    whatWeProvide: [
      "Expert care guided by trained biologists and animal specialists",
      "Water parameter testing using the highest-quality test kits available",
      "Standard Operating Procedures (SOPs) for daily care and emergency protocols",
      "Skilled engineering oversight of filtration, hydraulics and structural safety",
      "Professional tools and gadgets for cleaning, testing, and aquascaping",
      "Preventative equipment maintenance, feeding schedules and husbandry"
    ],
    projectTypes: [
      "Public Aquariums & Oceanariums",
      "Private Estate Aquatic Features",
      "Zoological Animal Enclosures",
      "Resort Aquatic Installations"
    ],
    keySpecs: [
      "Biologists & Animal Experts On-Staff",
      "Highest-Quality Water Testing Kits",
      "Documented SOPs for Daily & Emergency Care",
      "Skilled Structural & Filtration Engineers"
    ],
    image: "/images/pdf_images/p13_img1.png",
    galleryImages: [
      "/images/pdf_images/p13_img1.png",
      "/images/pdf_images/p12_img2.png",
      "/images/pdf_images/p13_img4.png"
    ],
    badge: "Operation & Maintenance",
    profileQuote: "Love for animals fuels a deep commitment to their well-being and conservation, fostering exemplary care and advocacy for animal life."
  },
  {
    id: "05-acrylic-craftsmanship",
    letter: "05",
    title: "Acrylic Craftsmanship",
    subtitle: "Optical Cast Acrylic Sheets from 20mm to 300mm Thickness",
    museumCode: "CAT-05 // ACRYLIC",
    profilePages: "Pages 14–17",
    scopeSummary: "Acrylic provides exceptional clarity and transparency, offering a crystal-clear view. It is significantly lighter than glass, making it easier to transport, handle, and install. Highly durable and impact-resistant, acrylic can be easily molded, shaped, and fabricated into various forms and sizes, allowing for greater design flexibility. Excellent UV stability prevents yellowing or discoloration over time when exposed to sunlight. Sourced from the best producers in India, China, and Germany with a 20 years of non-yellowing warranty*.",
    whatWeProvide: [
      "Cast acrylic sheets from 20mm to 300mm thickness",
      "Sourced from the best acrylic producers in India, China, Germany",
      "20 years of non-yellowing warranty* on certified acrylic panels",
      "Exceptional clarity, transparency and lightweight structural handling",
      "High impact resistance and durability compared to traditional glass",
      "Custom thermoforming into curved, cylindrical and tunnel configurations",
      "Skilled workforce for precision chemical bonding and on-site assembly"
    ],
    projectTypes: [
      "Oceanarium Panoramic Viewing Panels",
      "Cylindrical & Spherical Aquariums",
      "Underwater Walkthrough Tunnels",
      "Swimming Pool Transparent Walls"
    ],
    keySpecs: [
      "20mm to 300mm Thickness Availability",
      "20-Year Non-Yellowing Warranty*",
      "Significantly Lighter & Stronger Than Glass",
      "Producers in India, China, Germany"
    ],
    image: "/images/pdf_images/p16_img1.png",
    galleryImages: [
      "/images/pdf_images/p16_img1.png",
      "/images/pdf_images/p14_img1.png",
      "/images/pdf_images/p17_img1.png"
    ],
    badge: "Acrylic Craftsmanship",
    profileQuote: "Acrylic provides exceptional clarity and transparency, offering a crystal-clear view with 20 years of non-yellowing warranty*."
  },
  {
    id: "06-vivarium-terrarium-ponds",
    letter: "06",
    title: "Vivarium, Terrarium, Ponds & Aquatic Environments",
    subtitle: "Freshwater, Saltwater, Reefs, Paludariums & Riverine Biotopes",
    museumCode: "CAT-06 // VIVARIUM-PONDS",
    profilePages: "Pages 18–25",
    scopeSummary: "At Bondinwater, we excel in creating functional environments that replicate every habitat found on our planet, complete with natural flora and fauna. Using wood, fiber, glass, and the wonder material acrylic, we deliver spectacular views: specialty freshwater and saltwater aquariums, marine reefs, paludariums combining land and water, planted terrariums, nature ponds with riverine ecosystems, and nature-inspired themes for home and office that revive you mentally and physically.",
    whatWeProvide: [
      "Vivariums ('Life in a container') replicating global habitats with flora & fauna",
      "Aquariums: Freshwater, Saltwater (Marine), Reefs and Aquatic Biotopes",
      "Paludariums: Specialized land-and-water hybrid self-sustaining ecosystems",
      "Terrariums: Beautifully crafted planted ecosystems bringing nature indoors",
      "Oceanariums: Design, installation and maintenance of large-scale marine exhibits",
      "Nature Ponds: Pond and riverine ecosystems, waterfalls, and koi environments",
      "Swimming Pool to Nature Pond conversions",
      "Nature-inspired biophilic themes tailored for homes and workplaces"
    ],
    projectTypes: [
      "Luxury Residential Vivarium Displays",
      "Commercial Reef & Biotope Aquariums",
      "Corporate Office Biophilic Retreats",
      "Garden Nature Ponds & Waterfalls"
    ],
    keySpecs: [
      "Functional Multi-Habitat Replication",
      "Self-Sustaining Biotope Ecosystems",
      "Comprehensive Water Chemistry Balance",
      "Convert Swimming Pools to Nature Ponds"
    ],
    image: "/images/pdf_images/p19_img2.png",
    galleryImages: [
      "/images/pdf_images/p19_img2.png",
      "/images/pdf_images/p18_img3.png",
      "/images/pdf_images/p21_img3.png"
    ],
    badge: "Aquatic Environments & Vivariums",
    profileQuote: "At Bondinwater, we excel in creating functional environments that replicate every habitat found on our planet, complete with natural flora and fauna."
  },
  {
    id: "07-mini-petting-zoo",
    letter: "07",
    title: "Mini Petting Zoo",
    subtitle: "Docile Animal Interactions for Resorts, Hotels & Public Spaces",
    museumCode: "CAT-07 // PETTING-ZOO",
    profilePages: "Pages 26–27",
    scopeSummary: "A fairly new concept introduced for resorts, public spaces, and hotels allows visitors to interact with a combination of farm, pet, and wild animals that are docile. At Bondinwater, we provide a complete end-to-end solution along with training and expert guidance for resort staff and visitors to help them achieve ideal interaction. Our combination of terrestrial, avian, reptilian, and invertebrate species provides a unique opportunity for guests to witness the lives of species never seen before.",
    whatWeProvide: [
      "End-to-end petting zoo planning, enclosure design and execution",
      "Training and expert guidance for resort staff and visitors",
      "Safe, docile animal selection across terrestrial, avian, and reptilian species",
      "Reptile interaction areas: friendly snakes, intriguing lizards, and calm turtles",
      "Mammal encounter habitats: cuddly bunnies, friendly goats, playful guinea pigs, soft lambs",
      "Child-friendly educational spaces ensuring smooth visitor flow and cherished memories"
    ],
    projectTypes: [
      "Luxury Resorts & Hospitality Destinations",
      "Family Theme Parks & Public Attractions",
      "Eco-Retreats & Agro-Tourism Venues",
      "Educational Children's Sanctuaries"
    ],
    keySpecs: [
      "Docile Animal Selection (Terrestrial, Avian, Reptilian)",
      "Resort Staff Training & Husbandry Protocols",
      "Smooth Visitor Flow & Safety Engineering",
      "Hands-On Educational Interaction"
    ],
    image: "/images/pdf_images/p26_img1.png",
    galleryImages: [
      "/images/pdf_images/p26_img1.png",
      "/images/pdf_images/p26_img2.png",
      "/images/pdf_images/p27_img2.png"
    ],
    badge: "Mini Petting Zoo",
    profileQuote: "Children delight in interacting with our mini petting zoo, fostering a love for animals and creating cherished memories in a safe, thoughtfully designed space."
  },
  {
    id: "08-aviary-engineering",
    letter: "08",
    title: "Aviary Engineering",
    subtitle: "Space, Freedom, Environmental Enrichment & Aviary Mesh",
    museumCode: "CAT-08 // AVIARY",
    profilePages: "Page 28",
    scopeSummary: "For all avian enthusiasts, the most important factors for the health of their birds are space, freedom, and sufficient enrichment and nutrients for their mental and physical well-being. At Bondinwater, we meticulously assess the needs of every species throughout its life cycle, incorporating these requirements into our designs. Whether converting existing enclosures into functional ecosystems, transforming balconies into avian habitats, or building multispecies walkthrough aviaries with feeding and interactive perches, we do it all.",
    whatWeProvide: [
      "Architectural expertise tailored for avian flight space and freedom",
      "Life-cycle needs assessment for every individual bird species",
      "Multispecies walkthrough aviaries with interactive perches",
      "Balcony-to-avian habitat architectural transformations",
      "Conversion of existing enclosures into functional bird ecosystems",
      "High-tensile, durable aviary mesh installation for flight safety"
    ],
    projectTypes: [
      "Public Walkthrough Aviaries",
      "Private Estate Avian Sanctuaries",
      "Residential Balcony Conversions",
      "Eco-Resort Interactive Bird Features"
    ],
    keySpecs: [
      "Space & Freedom Sizing for Avian Mental & Physical Health",
      "High-Tensile Stainless Aviary Mesh",
      "Multispecies Interactive Perches",
      "Environmental & Nutritional Enrichment"
    ],
    image: "/images/pdf_images/p28_img2.png",
    galleryImages: [
      "/images/pdf_images/p28_img2.png",
      "/images/pdf_images/p28_img3.png",
      "/images/pdf_images/p28_img4.png"
    ],
    badge: "Aviary Engineering",
    profileQuote: "For all avian enthusiasts, the most important factors are space, freedom, and sufficient enrichment for their mental and physical well-being."
  },
  {
    id: "09-captive-breeding",
    letter: "09",
    title: "Captive Breeding of Exotic Species",
    subtitle: "World's Best Freshwater Stingrays, Ethical & Sustainable Sourcing",
    museumCode: "CAT-09 // BREEDING",
    profilePages: "Page 29",
    scopeSummary: "We respect and value the bond every organism shares on this planet. Sustainability and conservation reside at the heart of our every process. Our team of aquarists, aviculturists, biologists, and engineers specializes in ensuring that the livestock provided has been procured and raised ethically and sustainably, without affecting wild populations, and is disease-free. We have successfully bred and raised many exotic species in captivity, supplying the world's best freshwater stingrays.",
    whatWeProvide: [
      "Captive breeding and supply of the world's best freshwater stingrays",
      "Ethical and sustainable livestock procurement without wild population impact",
      "Strict quarantine, health certification and disease-free guarantee",
      "Specialist care by team of aquarists, aviculturists, biologists and engineers",
      "Conservation-focused captive breeding programs for exotic species"
    ],
    projectTypes: [
      "Public Aquarium Stingray Exhibits",
      "Exotic Captive Breeding Facilities",
      "Private Enthusiast Specialist Tanks",
      "Conservation Breeding Repositories"
    ],
    keySpecs: [
      "Supplying the World's Best Freshwater Stingrays",
      "Zero Impact on Wild Populations",
      "Certified Disease-Free Livestock",
      "Multidisciplinary Team of Aquarists & Biologists"
    ],
    image: "/images/pdf_images/p29_img1.png",
    galleryImages: [
      "/images/pdf_images/p29_img1.png",
      "/images/pdf_images/p29_img2.png",
      "/images/pdf_images/p29_img4.png"
    ],
    badge: "Captive Breeding",
    profileQuote: "We respect and value the bond every organism shares on this planet. Sustainability and conservation reside at the heart of our every process."
  },
  {
    id: "10-acrylic-swimming-pools",
    letter: "10",
    title: "Acrylic Swimming Pools",
    subtitle: "Crystal Clear Walls, High-Quality Acrylic & Seamless Construction",
    museumCode: "CAT-10 // POOLS",
    profilePages: "Page 30",
    scopeSummary: "Acrylic swimming pools offer a stunning and modern twist to traditional pool designs. Crafted from high-quality acrylic, our pools offer exceptional transparency, allowing swimmers to enjoy unparalleled water views from all angles. With our sleek and seamless construction, we customize it to any size or shape, making it ideal for residential and commercial applications. Beyond aesthetic appeal, acrylic swimming pools are highly durable, resistant to UV damage, and easy to maintain.",
    whatWeProvide: [
      "Crystal-clear acrylic walls and transparent viewing windows",
      "Custom pool designs tailored to any size or shape",
      "Sleek and seamless construction for residential and commercial applications",
      "Indoor centerpiece and outdoor oasis luxury installations",
      "Highly durable, UV-damage resistant, easy to maintain materials"
    ],
    projectTypes: [
      "Luxury Residential Courtyards & Penthouses",
      "Commercial Boutique Hotels & Beach Resorts",
      "Rooftop Transparent Viewing Pools",
      "Architectural Water Body Centerpieces"
    ],
    keySpecs: [
      "Exceptional Transparency from All Angles",
      "Seamless Hydrostatic Load-Bearing Construction",
      "Highly Durable & UV-Damage Resistant",
      "Residential & Commercial Applications"
    ],
    image: "/images/pdf_images/p30_img1.png",
    galleryImages: [
      "/images/pdf_images/p30_img1.png",
      "/images/pdf_images/p30_img2.png",
      "/images/pdf_images/p30_img3.png"
    ],
    badge: "Acrylic Swimming Pools",
    profileQuote: "Whether installed as an indoor centerpiece or an outdoor oasis, acrylic swimming pools redefine luxury and sophistication."
  },
  {
    id: "11-gfrc-frp-theming",
    letter: "11",
    title: "GFRC & FRP Theming Works",
    subtitle: "The Art and the Artist — Realistic Art Using Concrete & Plastic",
    museumCode: "CAT-11 // THEMING",
    profilePages: "Page 31",
    scopeSummary: "Glass fibre reinforced concrete (GFRC) and fibre reinforced plastic (FRP) provide enhanced durability, flexibility in shaping intricate designs, and the ability to achieve a natural aesthetic while ensuring structural integrity. By utilizing these materials, designers create custom features such as rock formations, caves, models, and simulated natural habitats that seamlessly blend with the natural environment, providing both functionality and visual appeal.",
    whatWeProvide: [
      "Glass fibre reinforced concrete (GFRC) artistic rockwork and theming",
      "Fibre reinforced plastic (FRP) lightweight architectural elements",
      "Artificial rock formations, caves, grottos, and underwater geological features",
      "Simulated natural habitats for animal enclosures and zoological displays",
      "Lightweight properties allowing easier transportation and installation without compromising strength"
    ],
    projectTypes: [
      "Zoo Habitat Rock Cliffs & Basking Areas",
      "Aquarium Underwater Caves & Coral Substrates",
      "Theme Parks & Public Immersion Exhibits",
      "Resort Artificial Waterfalls & Landscape Theming"
    ],
    keySpecs: [
      "Glass Fibre Reinforced Concrete (GFRC)",
      "Fibre Reinforced Plastic (FRP)",
      "Lightweight with High Longevity",
      "Natural Aesthetic with Structural Integrity"
    ],
    image: "/images/pdf_images/p31_img2.png",
    galleryImages: [
      "/images/pdf_images/p31_img2.png",
      "/images/pdf_images/p31_img3.png",
      "/images/pdf_images/p31_img1.png"
    ],
    badge: "GFRC & FRP Theming",
    profileQuote: "Integrating GFRC & FRP into aquariums, models and enclosure designs to create realistic art using concrete & plastic."
  },
  {
    id: "12-customised-solutions",
    letter: "12",
    title: "Customised Solutions",
    subtitle: "Filtration Systems, Neptune Apex Automation, Taxidermy & 3D Prosthetics",
    museumCode: "CAT-12 // CUSTOM",
    profilePages: "Pages 32–34",
    scopeSummary: "Our deep understanding of ecosystem components allows us to tailor environments to meet client's specific requirements, accommodating specialized species such as otters, penguins, and salamanders. We provide four documented specialist capabilities: tailored water filtration design for aquariums, ponds, and swimming pools; comprehensive Neptune Systems Apex aquarium automation (+25 years); artisanal memorial taxidermy for companion pets; and advanced 3D-printed mobility prosthetics for pets and wildlife.",
    whatWeProvide: [
      "Custom water filtration design for aquariums, ponds, and swimming pools",
      "Neptune Systems Apex automation: supply, installation, and expert programming",
      "Automated monitoring: water parameters, lighting control, and feeding schedules",
      "Artisanal memorial taxidermy recreating lifelike representations of companion pets",
      "Advanced 3D-printed prosthetics tailored to animal mobility and rehabilitation needs",
      "Specialized accommodations for delicate species: otters, penguins, salamanders"
    ],
    projectTypes: [
      "Specialist Life Support System (LSS) Plant Rooms",
      "Neptune Systems Apex Automation Deployments",
      "Wildlife Rescue & Animal Rehabilitation",
      "Private Memorials & Bespoke Zoological Solutions"
    ],
    keySpecs: [
      "Neptune Systems Apex Integration (+25 Years)",
      "Tailored Multi-Stage Filtration Design",
      "Advanced 3D Medical Printing for Animals",
      "Lifelike Artisanal Memorial Taxidermy"
    ],
    image: "/images/pdf_images/p32_img3.png",
    galleryImages: [
      "/images/pdf_images/p32_img3.png",
      "/images/pdf_images/p33_img2.png",
      "/images/pdf_images/p34_img2.png"
    ],
    badge: "Customised Solutions",
    profileQuote: "Our deep understanding of ecosystem components allows us to tailor environments from compact to extensive without disrupting ecological interactions."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Feasibility Study",
    subtitle: "Site Audit, Structural Slab Tolerances & Biome Evaluation",
    profilePage: "Profile Page 4",
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
    profilePage: "Profile Page 4, 7–10",
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
    profilePage: "Profile Page 4, 14",
    description: "We procure certified materials from premier global producers. Every cast PMMA acrylic panel (from 20mm to 300mm), filtration media, and structural fastener undergoes stringent quality inspection before fabrication.",
    deliverables: [
      "Certified cast PMMA acrylic inspection with high light transmission",
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
    profilePage: "Profile Page 4",
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
    subtitle: "Structural Assembly, Molecular Bonding & Hydraulic Testing",
    profilePage: "Profile Page 4, 11",
    description: "Our skilled technicians and engineers handle precision on-site installation. We execute chemical molecular bonding, seal rebated concrete compression gaskets, complete plumbing hookups, and run rigorous hydraulic pressure tests.",
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
    profilePage: "Profile Page 4, 13",
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
    profilePage: "Profile Page 4",
    description: "Once the habitat is biochemically stable and operating with zero flaws, we conduct formal client handover. We deliver comprehensive Standard Operating Procedures (SOPs), system manuals, telemetry credentials, and on-site staff training.",
    deliverables: [
      "Complete Standard Operating Procedures (SOP) manuals",
      "Digital cloud telemetry access and monitoring orientation",
      "On-site operational training for client facility staff",
      "Formal project handover certification and warranty documentation"
    ],
    quote: "Our priority is your total satisfaction — delivered with complete documentation and flawless operational readiness.",
    image: "/images/pdf_images/p4_img3.png"
  },
  {
    number: "08",
    title: "Operation & Maintenance",
    subtitle: "Trained Biologists, Regular Water Testing & Ongoing Care",
    profilePage: "Profile Page 4, 12",
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
// VERIFIED FIELD INSTALLATIONS & PORTFOLIO WORKS (OKEANOS GROUP STRUCTURED)
// Factually grounded: Strictly authentic assets without fabricated client claims
// 8 Categories: Aquariums, Ponds, Paludariums, Enclosures, Aviaries, Acrylic, Pools, Filtration
// =========================================================================
export const PROJECTS_DATA: ProjectItem[] = [
  // 1. AQUARIUMS & OCEANARIUMS
  {
    id: "bespoke-reef-aquarium",
    title: "Living Room Marine Coral Reef Biotope",
    category: "aquariums",
    categoryLabel: "Aquariums & Oceanariums",
    classification: "On-Site Installation",
    image: "/images/pdf_images/p20_img2.png",
    location: "Residential Architectural Setting",
    materials: "Optical Low-Iron Float Glass & Cast PMMA, Sump Array",
    filtrationType: "Multi-Chamber Downflow Sump, Protein Skimmer & Apex Automation",
    description: "A bespoke residential marine coral reef aquarium integrating vibrant live corals and reef teleosts into architectural joinery, supported by continuous automated water chemistry monitoring.",
    keyFeatures: [
      "Ultra-clear optical viewing panels offering true color fidelity",
      "Vibration-dampened plumbing eliminating motor resonance",
      "Full spectrum circadian lighting mimicking natural tropical sun cycles",
      "Integrated Neptune Systems Apex automated monitoring and failsafes"
    ],
    badge: "Documented Portfolio Reference"
  },
  {
    id: "cylindrical-cichlid-tower",
    title: "360° Cylindrical Acrylic Aquarium Tower",
    category: "aquariums",
    categoryLabel: "Aquariums & Oceanariums",
    classification: "On-Site Installation",
    image: "/images/pdf_images/p17_img3.png",
    location: "Commercial Interior Architecture",
    materials: "Seamless Thermoformed Acrylic Cylinder, Lace Rock Hardscape",
    filtrationType: "Central Concealed Downflow Sump with UV Sterilization",
    description: "A 360-degree free-standing cylindrical aquarium positioned within a commercial executive atrium. Features African Rift Valley Cichlids inhabiting authentic lace rock formations.",
    keyFeatures: [
      "Seamless single-piece thermoformed cylinder without vertical seams",
      "Central column concealing all supply and return plumbing",
      "High-oxygenation rotational flow eliminating surface stagnation",
      "Architectural metal capping matching interior finishes"
    ],
    badge: "Documented Portfolio Reference"
  },
  {
    id: "oceanarium-tunnel-display",
    title: "Walkthrough Oceanarium Viewing Display",
    category: "aquariums",
    categoryLabel: "Aquariums & Oceanariums",
    classification: "On-Site Installation",
    image: "/images/pdf_images/p20_img1.png",
    location: "Public Exhibition Facility",
    materials: "Heavy-Gauge Thermoformed Cast PMMA, Structural Concrete Rebate",
    filtrationType: "High-Rate Sand, Fluidized Sand Bio-Filter & Dual Ozone Reactors",
    description: "A monumental oceanarium underwater walkthrough structure from company profile page 20, providing guests with immersive panoramic observation into pelagic marine life.",
    keyFeatures: [
      "Monolithic curved optical acrylic panels offering zero visible distortion",
      "Structural compression flange gaskets with dual redundancy",
      "Continuous ozone and multi-stage Life Support System circulation",
      "Hydrostatic load calculations compliant with international public aquarium standards"
    ],
    badge: "Public Aquarium Installation"
  },

  // 2. NATURAL PONDS & WATERFALLS
  {
    id: "zenith-koi-sanctuary",
    title: "Natural Koi Pond & Riparian Landscape",
    category: "ponds",
    categoryLabel: "Natural Ponds & Waterfalls",
    classification: "On-Site Installation",
    image: "/images/pdf_images/p24_nature_pond_hero.png",
    location: "Natural Landscape & Water Garden",
    materials: "Volcanic Granite Strata, Submerged Bog Filter, Cast Aeration Cones",
    filtrationType: "Vortex Mechanical Separation + Wetland Bog Bio-Filtration",
    description: "A landscaped natural koi pond featuring rock waterfall cascades, volcanic granite borders, and an active wetland plant bog that naturally extracts nitrates to sustain high-grade Nishikigoi.",
    keyFeatures: [
      "Crystal clear water maintained via biological wetland processes",
      "Vortex bottom-drain settlement removing particulate solids",
      "Natural acoustic water flow with zero splashing erosion",
      "Nighttime submerged LED illumination architecture"
    ],
    badge: "Documented Portfolio Reference"
  },
  {
    id: "rock-cascade-koi-stream",
    title: "Cascading Mountain Stream & Natural Rock Pond",
    category: "ponds",
    categoryLabel: "Natural Ponds & Waterfalls",
    classification: "On-Site Installation",
    image: "/images/pdf_images/p24_img1.png",
    location: "Estate Landscape Water Feature",
    materials: "Naturally Selected Boulders, GFRC Formations & Heavy EPDM Membrane",
    filtrationType: "Multi-Tiered Biological Waterfall Weir with UV Clarifier",
    description: "A natural riverine pond from company profile page 24 incorporating cascading waterfalls that create continuous oxygenation while cultivating rich beneficial bacteria along rock surfaces.",
    keyFeatures: [
      "Acoustically tuned tiered waterfalls simulating natural mountain brooks",
      "Concealed bio-falls filtration weir blending seamlessly into rocks",
      "Heavy-duty EPDM waterproofing membrane with 30-year design life",
      "Swimming pool to natural pond conversion methodology applied"
    ],
    badge: "Documented Portfolio Reference"
  },

  // 3. VIVARIUMS & PALUDARIUMS
  {
    id: "botanical-vivarium-concept",
    title: "Vertical Bio-Wall Rainforest Paludarium",
    category: "paludariums",
    categoryLabel: "Vivariums & Paludariums",
    classification: "On-Site Installation",
    image: "/images/pdf_images/p18_img3.png",
    location: "Studio Biotope Display",
    materials: "Low-Iron Optical Glass, Hygroscopic Epi-Web, Bromeliads & Moss",
    filtrationType: "Concealed Biological Drainage Plenum",
    description: "An intricate vertical slice of tropical riverbank ecosystem featuring bromeliads, Tillandsia, creeping ficus, and automated rain simulations operating in biological equilibrium.",
    keyFeatures: [
      "Automated vertical irrigation maintaining live moss moisture",
      "Full-spectrum LED photoperiod simulation with circadian dimming",
      "Ultra-quiet centrifugal ventilation preventing front panel condensation",
      "Reverse osmosis automatic top-off with precision TDS regulation"
    ],
    badge: "Documented Portfolio Reference"
  },
  {
    id: "mist-canopy-paludarium",
    title: "Riverine Riparium with High-Pressure Monsoon Misting",
    category: "paludariums",
    categoryLabel: "Vivariums & Paludariums",
    classification: "On-Site Installation",
    image: "/images/pdf_images/p21_img1.png",
    location: "Nature Retreat Biotope",
    materials: "Opti-White Crystal Glass, Hygroscopic Driftwood, Epiphytic Flora",
    filtrationType: "Sub-Gravel Bio-Plenum & Dual Return Canister",
    description: "A breathtaking dual-zone paludarium from company profile page 21 combining submerged aquatic plants with emergent marginal reeds, automated foggers, and tropical epiphytes.",
    keyFeatures: [
      "Precision ultrasonic humidifier nozzles replicating highland cloud forest mist",
      "Submerged bioactive root tangle sheltering micro-crustaceans and rasboras",
      "High CRI lighting promoting chlorophyll synthesis and vibrant coloration",
      "Handcrafted natural driftwood hardscape bonded with neutral silicones"
    ],
    badge: "Documented Portfolio Reference"
  },

  // 4. ANIMAL ENCLOSURES
  {
    id: "bioactive-reptile-habitat",
    title: "Ethological Bio-Active Reptile Enclosure",
    category: "enclosures",
    categoryLabel: "Animal Enclosures",
    classification: "On-Site Installation",
    image: "/images/pdf_images/p27_img2.png",
    location: "Zoological Conservation Setting",
    materials: "Tempered Laminated Safety Glass, Natural Cork Bark, Substrate Plenum",
    filtrationType: "Bioactive Substrate Drainage & Microclimate Exchanger",
    description: "A biologically calibrated bio-active enclosure tailored for sensitive reptiles from profile page 27. Features natural thermal basking gradients, precise UVB photoperiods, and live plants.",
    keyFeatures: [
      "Graduated thermal basking zones with PID thermostatic regulation",
      "Bioactive clean-up micro-fauna maintaining substrate cleanliness",
      "Laminated safety glass panels with escape-proof perimeter seals",
      "Naturalistic root topography supporting instinctive climbing behavior"
    ],
    badge: "Documented Portfolio Reference"
  },
  {
    id: "species-calibrated-habitat",
    title: "Zoo-Grade Animal Habitat & Climate Enclosure",
    category: "enclosures",
    categoryLabel: "Animal Enclosures",
    classification: "On-Site Installation",
    image: "/images/pdf_images/p26_img2.png",
    location: "Zoological Habitat Environment",
    materials: "Structural Steel Frame, Impact-Resistant Acrylic & GFRC Rockwork",
    filtrationType: "HVAC Climate Control & Automated Air Exchange System",
    description: "A specialized animal enclosure from company profile page 26 designed in consultation with wildlife ethologists to support species-appropriate exercise, foraging, and security.",
    keyFeatures: [
      "Zoned climate control balancing temperature and relative humidity",
      "GFRC rockwork designed with natural ledges and sheltered nesting burrows",
      "Keeper safety access airlocks and heavy-duty tamper-proof lock hardware",
      "Natural daylight harvesting supplemented with UVB photoperiod arrays"
    ],
    badge: "Documented Portfolio Reference"
  },

  // 5. AVIARIES & FLIGHT MESH
  {
    id: "aviary-mesh-enclosure",
    title: "Avian Walkthrough Aviary & Free-Flight Mesh Canopy",
    category: "aviaries",
    categoryLabel: "Aviaries & Flight Mesh",
    classification: "On-Site Installation",
    image: "/images/pdf_images/p28_img2.png",
    location: "Public Sanctuary Aviary Setting",
    materials: "High-Tensile Stainless Steel Aviary Mesh, Steel Pylon Arch",
    filtrationType: "Natural Rainwater Harvesting & Wetland Overflow",
    description: "An open-span walkthrough aviary engineering project from profile page 28. Features high-tensile stainless steel mesh that allows natural flight dynamics while providing predator protection.",
    keyFeatures: [
      "High light-transmittance woven stainless steel web mesh",
      "Large spatial volume facilitating natural flock flight patterns",
      "Integrated native canopy trees and misting dispersal nozzles",
      "Safe double-door public entry airlocks preventing animal escape"
    ],
    badge: "Documented Portfolio Reference"
  },
  {
    id: "structural-flight-aviary",
    title: "Large-Scale Flight Aviary Dome Structure",
    category: "aviaries",
    categoryLabel: "Aviaries & Flight Mesh",
    classification: "On-Site Installation",
    image: "/images/pdf_images/p28_img1.png",
    location: "Eco-Tourism Flight Habitat",
    materials: "Structural Curved Steel Truss, Stainless Steel Cable Mesh",
    filtrationType: "Natural Bioretention Swale & Rain Dispersion",
    description: "A structural flight sanctuary from company profile page 28 engineered to withstand monsoonal wind loads while offering unobstructed flight corridors for varied bird species.",
    keyFeatures: [
      "Tensile stainless steel cable net engineered against wind shear and uplift",
      "Full canopy height accommodating elevated roosting perches",
      "Elevated visitor walkways keeping guests at bird eye-level",
      "Non-toxic zinc-free wire coatings preventing metal toxicosis in birds"
    ],
    badge: "Documented Portfolio Reference"
  },

  // 6. ACRYLIC ENGINEERING
  {
    id: "curved-acrylic-viewing-panel",
    title: "Curved Oceanarium Viewing Panel",
    category: "acrylic",
    categoryLabel: "Acrylic Engineering",
    classification: "3D Conceptual Model",
    image: "/images/pdf_images/p17_img1.png",
    location: "Architectural Concept Archive",
    materials: "Thermoformed Cast PMMA Acrylic, Rebated Compression Flange",
    filtrationType: "Life Support System Integration Blueprint",
    description: "A 3D conceptual engineering model from BondInWater's archives demonstrating optical curvature modeling and rebated concrete compression gasket mounting for public aquarium installations.",
    keyFeatures: [
      "Custom thermoformed curvature modeled without optical distortion",
      "Rebated concrete compression gasket installation engineering",
      "Anti-scratch polymer surface conditioning specification",
      "20-year non-yellowing acrylic formulation standard"
    ],
    badge: "Architectural 3D Concept Model",
    conceptOnly: true
  },
  {
    id: "structural-acrylic-fabrication",
    title: "Cast PMMA Structural Acrylic Fabrication (20mm–300mm)",
    category: "acrylic",
    categoryLabel: "Acrylic Engineering",
    classification: "On-Site Installation",
    image: "/images/pdf_images/p14_img1.png",
    location: "Specialist Acrylic Fabrication Facility",
    materials: "100% Virgin Cast Monomeric PMMA Acrylic, Molecular Chemical Bonds",
    filtrationType: "Engineering Material Testing & Hydrostatic Certification",
    description: "Precision fabrication and annealing of massive cast PMMA acrylic panels ranging from 20mm up to 300mm thickness from company profile page 14, engineered for massive water containment.",
    keyFeatures: [
      "Factory temperature-controlled oven annealing relieving internal material stress",
      "Molecular chemical polymer bonding achieving up to 95% tensile strength",
      "93% optical light transmission superior to standard glass",
      "Full compliance with international structural safety factors (minimum safety factor of 11)"
    ],
    badge: "Engineering Installation"
  },

  // 7. ACRYLIC SWIMMING POOLS
  {
    id: "horizon-infinity-acrylic-pool",
    title: "Cantilevered Acrylic Swimming Pool Barrier",
    category: "pools",
    categoryLabel: "Acrylic Swimming Pools",
    classification: "On-Site Installation",
    image: "/images/pdf_images/p16_img3.png",
    location: "Architectural Pool Installation",
    materials: "Structural Cast PMMA Acrylic Panel, Marine Silicone Gaskets",
    filtrationType: "High-Rate Sand & Saltwater Circulation Life Support",
    description: "A cantilevered infinity swimming pool featuring a structural optical acrylic wall that creates an unhindered panoramic vista. Engineered with high safety margins against hydrostatic pressure.",
    keyFeatures: [
      "Structural cast acrylic barrier engineered for dynamic load deflection",
      "Precision rebated concrete interface with dual-elastomer compression seal",
      "UV-inhibited acrylic preventing discoloration or weathering",
      "Seamless aesthetic integration with natural stone pool coping"
    ],
    badge: "Documented Portfolio Reference"
  },
  {
    id: "submerged-pool-viewing-window",
    title: "Submerged Optical Pool Viewing Window",
    category: "pools",
    categoryLabel: "Acrylic Swimming Pools",
    classification: "On-Site Installation",
    image: "/images/pdf_images/p16_img1.png",
    location: "Residential Transparent Viewing Feature",
    materials: "Cast PMMA Optical Acrylic Panel, Marine Stainless Gasket Retainers",
    filtrationType: "Ozone Sanitized Pool Circulation System",
    description: "A submerged acrylic viewing window from company profile page 16 connecting an outdoor swimming pool directly with an interior subterranean lounge for dramatic illumination.",
    keyFeatures: [
      "Seamless natural light transmission illuminating interior living spaces",
      "Engineered rebated seal resistant to pool chlorine and ozone chemistry",
      "Calculated deflection limits ensuring absolute perimeter watertightness",
      "Hand-polished optical bevels for crystal-clear refraction"
    ],
    badge: "Documented Portfolio Reference"
  },

  // 8. FILTRATION & TECHNICAL SYSTEMS
  {
    id: "cfd-filtration-array",
    title: "Advanced Life Support Plant Room Hub",
    category: "filtration",
    categoryLabel: "Filtration & Technical Systems",
    classification: "Technical Plant Room",
    image: "/images/pdf_images/p32_img3.png",
    location: "Life Support Plant Room",
    materials: "Schedule 80 PVC, Variable Frequency Pumps, Ozone Reactors",
    filtrationType: "Multi-Chamber Biological, Fluidized Sand & Ozone Contact",
    description: "The complete technical life support engine behind a major aquatic exhibit. Engineered with Computational Fluid Dynamics to optimize turnover rates and energy efficiency.",
    keyFeatures: [
      "Computational Fluid Dynamics (CFD) modeled piping eliminating dead zones",
      "Variable-speed energy-efficient commercial circulation pumps",
      "Integrated ozone contact columns and redox potential monitoring",
      "Fail-safe bypass valves with vibration-dampening mounting pads"
    ],
    badge: "Engineering Installation"
  },
  {
    id: "apex-telemetry-array",
    title: "Neptune Systems Apex Automated Telemetry Array",
    category: "filtration",
    categoryLabel: "Filtration & Technical Systems",
    classification: "Technical Plant Room",
    image: "/images/pdf_images/p13_img1.png",
    location: "Automated Life Support Facility",
    materials: "Neptune Systems Apex Controllers, Digital Probes & Flow Sensors",
    filtrationType: "Automated Telemetry, Dosing & Fail-Safe Cloud Monitoring",
    description: "An automated Life Support telemetry command center from company profile page 13 providing real-time biochemical monitoring of pH, ORP, temperature, and conductivity with cloud alert dispatch.",
    keyFeatures: [
      "24/7 continuous biochemical monitoring with instant mobile push alarms",
      "Automated trace element dosing synchronized with photoperiods",
      "Redundant optical float sensors preventing overflow or pump dry-run",
      "Comprehensive cloud data logging enabling predictive water quality analytics"
    ],
    badge: "Engineering Installation"
  }
];

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

export const TRUST_COLLABORATORS = [
  {
    name: "Sanjeevani Multi-Speciality Hospital",
    type: "Healthcare Infrastructure",
    logo: "/images/pdf_images/p22_img1.png",
    context: "Custom therapeutic aquatic installation designed for calming patient and visitor environments."
  },
  {
    name: "APCPL (Aravalli Power Company)",
    type: "Corporate & Energy Sector",
    logo: "/images/pdf_images/p34_img2.png",
    context: "Collaborative environmental and aquatic engineering display system."
  },
  {
    name: "Private Estates & Architectural Studios",
    type: "High-End Residential Architecture",
    logo: null,
    context: "Custom natural koi ponds, cantilevered acrylic swimming pools, and bioactive indoor habitats across Mumbai, Pune, and Western India."
  }
];

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
    desc: "We fabricate using cast optical PMMA from 20mm up to 300mm thick with high light transmittance, 20-year non-yellowing warranties, and lightweight GFRC/FRP simulated themed rockwork."
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
