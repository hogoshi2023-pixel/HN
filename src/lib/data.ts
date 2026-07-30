// Central content store for HONG NGUYEN Industrial Coatings B2B website.
// All data sourced/expanded from reference site analysis.

export const company = {
  name: "HONG NGUYEN",
  fullName: "HONG NGUYEN Industrial Coatings",
  cnName: "宏源新材料",
  tagline: "Industrial Coatings Since 2003",
  established: 2003,
  description:
    "ISO 9001 certified manufacturer of anti-corrosion, high-temperature, epoxy floor, and architectural coatings. Direct factory supply · OEM/ODM · Export to 60+ countries · 24-month quality warranty.",
  email: "hogoshi2023@gmail.com",
  phone: "+84 838 396 799",
  whatsapp: "WhatsApp Business Chat",
  contact: "Mr Hogo Shi · WeChat: hogo13",
  address:
    "Xiashi Industrial Zone, Lunjiao Subdistrict, Shunde District, Foshan City, Guangdong Province, P.R.China",
  certs: ["ISO 9001:2015", "ISO 14001:2015", "CE", "SGS"],
};

export const stats = [
  { value: "22+", label: "Years Industry Experience", sub: "Since 2003" },
  { value: "60+", label: "Export Countries", sub: "Global B2B" },
  { value: "50K", label: "t/yr Production Capacity", sub: "In-house plant" },
  { value: "800+", label: "Active B2B Clients", sub: "Worldwide" },
];

export const specSheet = [
  { label: "Base Resin", value: "Modified Epoxy / Acrylic" },
  { label: "DFT Range", value: "50 – 200 μm" },
  { label: "Temp Resistance", value: "−40°C to +600°C" },
  { label: "Salt Spray", value: "≥ 1000 h ASTM B117" },
  { label: "Adhesion", value: "5 MPa (cross-cut 0)" },
  { label: "VOC", value: "< 50 g/L (low-VOC grade)" },
  { label: "Packaging", value: "5L / 20L / 200L drum" },
  { label: "Lead Time", value: "7 – 15 working days" },
  { label: "MOQ", value: "200 kg (mixed tones OK)" },
];

export type Product = {
  code: string;
  title: string;
  short: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  image: string;
  applications: string[];
};

export const products: Product[] = [
  {
    code: "CAT-01",
    title: "Anti-Corrosion Coatings",
    short: "Epoxy · Polyurethane · Zinc-rich primers",
    description:
      "Heavy-duty anti-corrosion systems engineered for steel structures, pipelines, marine and offshore assets. Multi-layer epoxy zinc-rich primers paired with polyurethane topcoats deliver salt-spray resistance beyond 1000 hours.",
    features: [
      "Zinc-rich epoxy primer (≥ 90% zinc in dry film)",
      "Salt spray ≥ 1000 h (ASTM B117)",
      "Cross-cut adhesion grade 0",
      "Compatible with immersion and splash zones",
    ],
    specs: [
      { label: "Base", value: "Epoxy / PU" },
      { label: "DFT", value: "60 – 250 μm" },
      { label: "Salt Spray", value: "≥ 1000 h" },
      { label: "Packaging", value: "20L / 200L" },
    ],
    image: "/images/product-anticorrosion.jpg",
    applications: ["Steel structures", "Pipelines", "Marine", "Offshore"],
  },
  {
    code: "CAT-02",
    title: "High-Temperature Coatings",
    short: "Silicone-based 200°C – 600°C",
    description:
      "Silicone-based heat-resistant systems rated from 200°C up to 600°C for stacks, boilers, exhaust manifolds and engine parts. Withstands thermal cycling without film breakdown.",
    features: [
      "Continuous service up to 600°C",
      "Silicone-modified resin matrix",
      "Resistance to thermal shock cycling",
      "Low VOC, colour-stable at temperature",
    ],
    specs: [
      { label: "Base", value: "Silicone" },
      { label: "Temp Range", value: "200 – 600°C" },
      { label: "DFT", value: "30 – 80 μm" },
      { label: "Cure", value: "Air / force-dry" },
    ],
    image: "/images/product-hightemp.jpg",
    applications: ["Stacks", "Boilers", "Exhausts", "Engine parts"],
  },
  {
    code: "CAT-03",
    title: "Epoxy Floor Coatings",
    short: "Self-leveling · Anti-static · Heavy-duty mortar",
    description:
      "Self-leveling epoxy, anti-static and heavy-duty mortar systems for warehouses, manufacturing plants and parking decks. Forklift-rated, chemical-resistant, 5-year warranty.",
    features: [
      "Self-leveling 1–3 mm mortar systems",
      "Forklift-traffic rated",
      "Anti-static grades available (10⁶–10⁹ Ω)",
      "Chemical & oil resistant",
    ],
    specs: [
      { label: "System", value: "Self-leveling" },
      { label: "Thickness", value: "1 – 3 mm" },
      { label: "Warranty", value: "5 years" },
      { label: "Traffic", value: "Forklift rated" },
    ],
    image: "/images/product-epoxy-floor.jpg",
    applications: ["Warehouses", "Plants", "Parking decks", "Cleanrooms"],
  },
  {
    code: "CAT-04",
    title: "Weatherproof Exterior Paints",
    short: "Fluorocarbon · Acrylic-polyurethane topcoats",
    description:
      "Fluorocarbon and acrylic-polyurethane topcoats with 15-year weatherability for commercial building facades. UV-stable, chalk-resistant, colour-retentive.",
    features: [
      "15-year weatherability certification",
      "FEVE fluorocarbon option",
      "UV & chalk resistance",
      "Wide RAL colour matching",
    ],
    specs: [
      { label: "Base", value: "FEVE / AC-PU" },
      { label: "Weatherability", value: "15 years" },
      { label: "Gloss", value: "Matte – Gloss" },
      { label: "DFT", value: "40 – 80 μm" },
    ],
    image: "/images/product-exterior.jpg",
    applications: ["Facades", "Towers", "Commercial buildings"],
  },
  {
    code: "CAT-05",
    title: "Architectural Wall Coatings",
    short: "Interior emulsion · Elastic anti-crack · Stone-effect",
    description:
      "Interior emulsion, exterior elastic anti-crack, stone-effect and fire-retardant systems for architectural projects. Low-VOC, Class A fire-rated grades available.",
    features: [
      "Class A fire-retardant option",
      "Elastic anti-crack bridging",
      "Stone-effect textured finishes",
      "Low VOC < 50 g/L",
    ],
    specs: [
      { label: "Type", value: "Emulsion / Elastic" },
      { label: "Fire Rating", value: "Class A" },
      { label: "VOC", value: "< 50 g/L" },
      { label: "Finish", value: "Smooth / Textured" },
    ],
    image: "/images/product-exterior.jpg",
    applications: ["Interiors", "Exteriors", "Public buildings", "Schools"],
  },
  {
    code: "CAT-06",
    title: "Custom Engineered Coatings",
    short: "Custom color · Hardness · Corrosion grade · OEM/ODM",
    description:
      "Bespoke formulations tuned to your substrate, environment and performance spec. 12 senior chemists, sample in 7 days, full production in 30. OEM private-label packaging supported.",
    features: [
      "12 senior chemists in-house R&D",
      "Sample in 7 days, production in 30",
      "Custom colour, hardness, corrosion grade",
      "OEM private-label packaging",
    ],
    specs: [
      { label: "R&D", value: "12 chemists" },
      { label: "Sample", value: "7 days" },
      { label: "Production", value: "30 days" },
      { label: "MOQ", value: "200 kg" },
    ],
    image: "/images/lab.jpg",
    applications: ["OEM distributors", "Specialty projects", "Private label"],
  },
];

export const whyUs = [
  {
    no: "01",
    title: "Factory Direct",
    desc: "50,000 t/yr in-house production. No middlemen, no reseller markup. OEM pricing at scale.",
  },
  {
    no: "02",
    title: "Export-Ready",
    desc: "22 years serving 60+ countries. Full export docs: CO, CIQ, MSDS, TDS, UN packaging.",
  },
  {
    no: "03",
    title: "Custom Formulation",
    desc: "12 senior chemists. Custom color, hardness, corrosion grade, temperature rating. Sample in 7 days.",
  },
  {
    no: "04",
    title: "Stable Quality",
    desc: "Batch-to-batch consistency guaranteed. Each batch ships with full QC report. 24-month warranty.",
  },
  {
    no: "05",
    title: "Low MOQ",
    desc: "200 kg MOQ. Mixed tones welcome. Trial orders for new distributors. Sample shipping in 48h.",
  },
  {
    no: "06",
    title: "OEM / Private Label",
    desc: "Custom drum labels, branded packaging, marketing collateral. Your brand, our chemistry.",
  },
  {
    no: "07",
    title: "Engineering On-Site",
    desc: "Optional site survey, surface prep specification, and applicator training for large projects.",
  },
  {
    no: "08",
    title: "Full Certifications",
    desc: "ISO 9001, ISO 14001, CE, SGS tested, fire-rating Class A, low-VOC grades available.",
  },
];

export const applications = [
  { code: "APP-01", title: "Steel Structure Anti-Corrosion" },
  { code: "APP-02", title: "Industrial Floor Systems" },
  { code: "APP-03", title: "Outdoor Equipment Weatherproof" },
  { code: "APP-04", title: "Commercial Building Facades" },
  { code: "APP-05", title: "Ship Hull & Marine" },
  { code: "APP-06", title: "Bridge & Infrastructure" },
];

export type ProjectCase = {
  code: string;
  location: string;
  year: string;
  title: string;
  summary: string;
  image: string;
  metrics: { label: string; value: string }[];
};

export const cases: ProjectCase[] = [
  {
    code: "CASE-001",
    location: "Vietnam",
    year: "2025",
    title: "Amata Steel Plant — Full Anti-Corrosion Package",
    summary:
      "12,000 m² of structural steel coated with epoxy zinc primer + polyurethane topcoat, completed in 45 days with full QC documentation.",
    image: "/images/case-steel-plant.jpg",
    metrics: [
      { label: "Area", value: "12,000 m²" },
      { label: "System", value: "Epoxy Zn + PU" },
      { label: "Duration", value: "45 days" },
    ],
  },
  {
    code: "CASE-002",
    location: "Indonesia",
    year: "2025",
    title: "Cikarang Warehouse — 8,500 m² Epoxy Floor",
    summary:
      "Self-leveling epoxy with anti-skid topcoat. Forklift-rated, 5-year warranty, completed for a major logistics operator.",
    image: "/images/case-warehouse.jpg",
    metrics: [
      { label: "Area", value: "8,500 m²" },
      { label: "System", value: "Self-leveling epoxy" },
      { label: "Warranty", value: "5 years" },
    ],
  },
  {
    code: "CASE-003",
    location: "Saudi Arabia",
    year: "2024",
    title: "Riyadh Commercial Tower — Exterior Facade",
    summary:
      "Fluorocarbon topcoat system across 22,000 m² of facade with 15-year weatherability certification.",
    image: "/images/case-tower.jpg",
    metrics: [
      { label: "Area", value: "22,000 m²" },
      { label: "System", value: "FEVE fluorocarbon" },
      { label: "Weatherability", value: "15 years" },
    ],
  },
];

export const certifications = [
  { code: "ISO 9001", title: "Quality Management" },
  { code: "ISO 14001", title: "Environmental" },
  { code: "CE", title: "EU Conformity" },
  { code: "SGS", title: "Test Reports" },
  { code: "Class A", title: "Fire Rating" },
  { code: "Low VOC", title: "< 50 g/L" },
];

export const testimonials = [
  {
    quote:
      "HONG NGUYEN supplied 280 tons of epoxy floor coating for our new logistics hub in Jakarta. Quality was consistent across batches and the technical team helped us tune the formula for tropical humidity.",
    name: "Budi Hartono",
    role: "Procurement Director, PT. Sinar Mas Logistics",
  },
  {
    quote:
      "We've been sourcing anti-corrosion paint from HONG NGUYEN for our bridge projects for 7 years. Salt spray test results consistently exceed 1500 hours. Reliable partner.",
    name: "Eng. Mohammed Al-Rashid",
    role: "Project Manager, Riyadh Infrastructure Co.",
  },
  {
    quote:
      "We needed a custom high-temp coating rated 500°C for our boiler manufacturing line. HONG NGUYEN's R&D team developed a working sample in 10 days, full production in 30. Outstanding OEM service.",
    name: "Lars Eriksson",
    role: "Technical Director, Nordic Boiler Systems AB",
  },
];

export const partners = [
  "SINAR MAS",
  "VINCI",
  "POSCO",
  "SKANSKA",
  "CSCEC",
  "SIEMENS",
];

export const exportRegions = [
  "SE Asia",
  "Middle East",
  "Africa",
  "South America",
  "Eastern Europe",
  "Central Asia",
];

// Solutions page — industry verticals
export const solutions = [
  {
    code: "SOL-01",
    title: "Oil, Gas & Petrochemical",
    desc: "Corrosion-critical assets: storage tanks, refineries, pipelines. Multi-coat epoxy/PU systems rated for chemical immersion and C5 marine environments.",
    products: ["Anti-Corrosion Coatings", "High-Temperature Coatings"],
    icon: "Factory",
  },
  {
    code: "SOL-02",
    title: "Marine & Offshore",
    desc: "Ship hulls, offshore platforms and splash zones. Salt-spray ≥ 1500 h, cathodic-disbondment resistant systems with full IMO documentation.",
    products: ["Anti-Corrosion Coatings", "Custom Engineered Coatings"],
    icon: "Ship",
  },
  {
    code: "SOL-03",
    title: "Power & Energy",
    desc: "Boilers, stacks, exhausts and turbine housings. Heat-resistant silicone systems up to 600°C with thermal-cycling stability.",
    products: ["High-Temperature Coatings", "Custom Engineered Coatings"],
    icon: "Flame",
  },
  {
    code: "SOL-04",
    title: "Infrastructure & Bridges",
    desc: "Long-span steel bridges and transit infrastructure. 25-year design-life coating systems with in-house applicator training.",
    products: ["Anti-Corrosion Coatings", "Custom Engineered Coatings"],
    icon: "Construction",
  },
  {
    code: "SOL-05",
    title: "Commercial Architecture",
    desc: "Towers, malls and public buildings. FEVE fluorocarbon and elastic anti-crack systems with 15-year weatherability.",
    products: ["Weatherproof Exterior Paints", "Architectural Wall Coatings"],
    icon: "Building2",
  },
  {
    code: "SOL-06",
    title: "Industrial Flooring",
    desc: "Warehouses, plants and parking decks. Self-leveling, anti-static and heavy-duty mortar systems rated for forklift traffic.",
    products: ["Epoxy Floor Coatings"],
    icon: "LayoutGrid",
  },
];

// Process steps for About page
export const process = [
  {
    no: "01",
    title: "Consultation & Spec",
    desc: "Tell us substrate, environment and performance targets. Our engineers propose a system within one business day.",
  },
  {
    no: "02",
    title: "Sample & Formulation",
    desc: "Lab samples in 7 days. Custom color, hardness and corrosion grade tuned to your spec.",
  },
  {
    no: "03",
    title: "Production & QC",
    desc: "50,000 t/yr plant. Each batch ships with a full QC report and 24-month warranty.",
  },
  {
    no: "04",
    title: "Export & Support",
    desc: "CO, CIQ, MSDS, TDS and UN packaging. On-site applicator training for large projects.",
  },
];

// News items
export const news = [
  {
    date: "2025-09-18",
    category: "Product Launch",
    title: "New FEVE Fluorocarbon Topcoat — 15-Year Weatherability Certified",
    excerpt:
      "Our latest fluorocarbon topcoat system has passed 15-year accelerated weatherability testing, now available for OEM private-label orders across the Middle East and SE Asia.",
    read: "4 min read",
  },
  {
    date: "2025-08-02",
    category: "Project",
    title: "12,000 m² Anti-Corrosion Package Completed at Amata Steel Plant",
    excerpt:
      "Full epoxy zinc primer + PU topcoat system delivered in 45 days with zero coating-failure defects across the structural steel package.",
    read: "3 min read",
  },
  {
    date: "2025-06-21",
    category: "Certification",
    title: "ISO 14001:2015 Environmental Certification Renewed",
    excerpt:
      "Our environmental management system has been re-certified, reinforcing our commitment to low-VOC, sustainable coating manufacturing.",
    read: "2 min read",
  },
  {
    date: "2025-04-10",
    category: "Export",
    title: "HONG NGUYEN Expands B2B Export to 60+ Countries",
    excerpt:
      "New distributor partnerships across South America and Eastern Europe bring our active export footprint to over 60 countries worldwide.",
    read: "3 min read",
  },
  {
    date: "2025-02-15",
    category: "R&D",
    title: "R&D Lab Upgraded — 12 Senior Chemists, New Spectrophotometry Suite",
    excerpt:
      "Our coatings R&D lab has added a dedicated spectrophotometry and salt-spray testing suite, cutting sample turnaround to 7 days.",
    read: "4 min read",
  },
  {
    date: "2024-11-30",
    category: "Industry",
    title: "How Low-VOC Formulations Are Reshaping Industrial Coatings",
    excerpt:
      "An engineering briefing on how sub-50 g/L VOC chemistries maintain performance while meeting tightening environmental regulations.",
    read: "6 min read",
  },
];

// FAQ
export const faqs = [
  {
    q: "What is your Minimum Order Quantity (MOQ)?",
    a: "Our standard MOQ is 200 kg. Mixed tones within the same product family are welcome, which makes us ideal for trial orders from new distributors. Sample quantities can be shipped within 48 hours.",
  },
  {
    q: "How fast can you deliver a custom formulation sample?",
    a: "For custom-engineered coatings, our R&D team (12 senior chemists) typically delivers a working lab sample within 7 days, and scales to full production within 30 days of sample approval.",
  },
  {
    q: "Which certifications and export documents do you provide?",
    a: "Every shipment is backed by ISO 9001:2015, ISO 14001:2015, CE and SGS test reports. Export documents include Certificate of Origin (CO), CIQ, MSDS, TDS and UN packaging as required by destination.",
  },
  {
    q: "Do you offer OEM / private-label packaging?",
    a: "Yes. We provide custom drum labels, branded packaging and marketing collateral. Your brand, our chemistry — with full formulation confidentiality.",
  },
  {
    q: "What is the salt-spray resistance of your anti-corrosion systems?",
    a: "Our standard anti-corrosion systems are rated ≥ 1000 hours per ASTM B117. Marine-grade and custom systems regularly exceed 1500 hours in third-party SGS/BV/Intertek testing.",
  },
  {
    q: "Do you provide on-site engineering and applicator training?",
    a: "For large projects we offer optional site survey, surface-preparation specification and applicator training to ensure the coating system performs as designed in the field.",
  },
  {
    q: "What is your quality warranty?",
    a: "Every batch ships with a full QC report and is covered by a 24-month quality warranty. System-specific warranties (e.g. 5-year epoxy floor, 15-year fluorocarbon facade) apply where stated.",
  },
  {
    q: "Which regions do you export to?",
    a: "We currently serve 60+ countries across SE Asia, the Middle East, Africa, South America, Eastern Europe and Central Asia, with established logistics and distributor support in each region.",
  },
];
