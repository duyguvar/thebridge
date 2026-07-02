export type SegmentId = "international" | "gcc" | "government";

export interface Segment {
  id: SegmentId;
  slug: string;
  shortName: string;
  name: string;
  tagline: string;
  summary: string;
  audience: string[];
  challenges: string[];
  approach: string[];
}

export const segments: Segment[] = [
  {
    id: "international",
    slug: "international",
    shortName: "International Companies",
    name: "International Companies Entering the GCC",
    tagline: "A structured path into one of the world's fastest-moving defense markets.",
    summary:
      "For international defense, aerospace, dual-use, and advanced technology companies preparing to enter the GCC — with a priority corridor for Turkish industry, alongside a global mandate.",
    audience: [
      "Defense and aerospace OEMs and Tier 1/2 suppliers",
      "Dual-use and advanced technology companies",
      "Turkish industry seeking a structured GCC entry corridor",
      "Global primes evaluating regional partnerships and offset obligations",
    ],
    challenges: [
      "Opaque decision-making structures across GCC ministries and primes",
      "Unclear localization, offset, and industrial participation requirements",
      "Difficulty identifying credible regional partners and integrators",
      "Absence of a single, continuous point of coordination across the market-entry lifecycle",
    ],
    approach: [
      "Assess market readiness and positioning before commitments are made",
      "Map the regulatory, industrial, and relationship landscape specific to your capability area",
      "Build a phased, milestone-based entry plan aligned to regional priorities",
      "Provide continuous PMO-style advisory support as the relationship matures",
    ],
  },
  {
    id: "gcc",
    slug: "gcc-organizations",
    shortName: "GCC Organizations",
    name: "GCC Defense Organizations",
    tagline: "Independent, technically grounded advisory for the region's industrial base.",
    summary:
      "For GCC-based defense companies, systems integrators, prime contractors, R&D centers, and investment arms building capability, evaluating technology, and derisking programs.",
    audience: [
      "Regional prime contractors and systems integrators",
      "National R&D centers and innovation offices",
      "Sovereign and strategic investment arms",
      "Industrial and localization program owners",
    ],
    challenges: [
      "Difficulty independently verifying the maturity and credibility of foreign technology offers",
      "Supplier readiness and governance gaps that surface late in a program",
      "Localization and industrialization plans that lack technical grounding",
      "Programs that stall or underperform without an independent recovery path",
    ],
    approach: [
      "Screen and profile global technology and supplier options against your actual requirements",
      "Conduct independent readiness checks and due diligence before commitment",
      "Design localization and industrialization pathways grounded in technical reality",
      "Step in with program recovery and execution advisory when initiatives lose momentum",
    ],
  },
  {
    id: "government",
    slug: "government",
    shortName: "Government & Public Sector",
    name: "Government & Public Sector",
    tagline: "Umbrella advisory support for institutions shaping national defense innovation.",
    summary:
      "For ministries, free zones, economic development authorities, and defense innovation offices designing the frameworks that govern industry engagement, innovation competitions, and pilots.",
    audience: [
      "Ministries of defense and economic affairs",
      "Free zones and special economic zones",
      "Economic development authorities",
      "Defense innovation and technology offices",
    ],
    challenges: [
      "Need for an independent advisory partner not aligned to any single vendor or bidder",
      "Innovation competitions and challenges that lack rigorous design or evaluation frameworks",
      "Difficulty assessing supplier and startup readiness at scale",
      "Pilots and demonstrations that lack structured governance and success criteria",
    ],
    approach: [
      "Establish a continuous, umbrella advisory relationship across initiatives",
      "Design and run structured innovation challenges and competitions",
      "Apply consistent, defensible readiness frameworks to suppliers and startups",
      "Govern pilots and demonstrations from design through evaluation",
    ],
  },
];

export interface Product {
  slug: string;
  name: string;
  segments: SegmentId[] | "cross";
  category: string;
  summary: string;
  scope: string[];
}

export const products: Product[] = [
  // Segment A — International Companies
  {
    slug: "bridgescan",
    name: "BridgeScan™",
    segments: ["international"],
    category: "Rapid Readiness Scan",
    summary: "A rapid readiness scan that benchmarks your organization against the realities of the GCC market before you commit resources.",
    scope: [
      "Initial positioning and readiness scorecard",
      "High-level regulatory and industrial landscape scan",
      "Go/no-go guidance for deeper market engagement",
    ],
  },
  {
    slug: "bridgeready",
    name: "BridgeReady™",
    segments: ["international"],
    category: "Comprehensive Readiness Assessment",
    summary: "A comprehensive readiness assessment covering the regulatory, industrial, and relationship dimensions of GCC market entry.",
    scope: [
      "Full regulatory and compliance landscape mapping",
      "Localization and industrial participation requirement analysis",
      "Partner and integrator identification and evaluation",
      "Structured entry roadmap with milestones",
    ],
  },
  {
    slug: "bridgepmo",
    name: "BridgePMO™",
    segments: ["international"],
    category: "Continuous Advisory Support",
    summary: "Continuous advisory and program management support that keeps your GCC market-entry and expansion efforts on track over time.",
    scope: [
      "Ongoing coordination across stakeholders and workstreams",
      "Milestone tracking and risk management",
      "Continuous regulatory and market-intelligence updates",
    ],
  },
  {
    slug: "bridgeengine",
    name: "BridgeEngine™",
    segments: ["international"],
    category: "Engineering & Certification Support",
    summary: "Engineering and certification support that helps international technology providers meet the technical and regulatory standards required to operate in the GCC.",
    scope: [
      "Technical standards and certification-pathway mapping",
      "Engineering documentation and compliance review",
      "Coordination with regional testing and certification bodies",
    ],
  },
  {
    slug: "bridgelaunch",
    name: "BridgeLaunch™",
    segments: ["international"],
    category: "Accelerator Program Design",
    summary: "Design of accelerator and launch programs that connect international technology providers with GCC industry and government stakeholders.",
    scope: [
      "Accelerator program architecture and curriculum design",
      "Stakeholder and cohort structuring",
      "Success metrics and governance design",
    ],
  },

  // Segment B — GCC Organizations
  {
    slug: "bridgescout",
    name: "BridgeScout™",
    segments: ["gcc"],
    category: "Supplier Research",
    summary: "Supplier research that identifies and profiles global technology and supplier options relevant to your program needs.",
    scope: [
      "Global technology and supplier landscape scanning",
      "Capability-fit profiling against stated requirements",
      "Structured shortlist with comparative analysis",
    ],
  },
  {
    slug: "bridgecheck",
    name: "BridgeCheck™",
    segments: ["gcc"],
    category: "Supplier Due Diligence",
    summary: "Supplier due diligence that independently verifies technical, organizational, and commercial maturity before you commit.",
    scope: [
      "Technical and organizational readiness evaluation",
      "Independent verification of supplier claims",
      "Risk flagging ahead of contractual commitment",
    ],
  },
  {
    slug: "bridgejoint",
    name: "BridgeJoint™",
    segments: ["gcc"],
    category: "JV Setup Advisory",
    summary: "Joint-venture setup advisory that structures partnerships between regional and international organizations from term sheet through governance.",
    scope: [
      "Partner identification and fit assessment",
      "JV structure, governance, and term-sheet advisory",
      "Post-formation integration support",
    ],
  },
  {
    slug: "bridgerecover",
    name: "BridgeRecover™",
    segments: ["gcc"],
    category: "Program Recovery Advisory",
    summary: "Program recovery and execution advisory for initiatives that have stalled, drifted, or lost stakeholder confidence.",
    scope: [
      "Independent program diagnostic",
      "Root-cause analysis and recovery plan",
      "Execution oversight through stabilization",
    ],
  },
  {
    slug: "bridgeinnova",
    name: "BridgeInnova™",
    segments: ["gcc"],
    category: "University-Partnered R&D / AI",
    summary: "University-partnered R&D and AI advisory that connects regional organizations with academic research capacity for applied innovation.",
    scope: [
      "Academic partner identification and matchmaking",
      "Applied R&D and AI project scoping",
      "Joint research governance and IP framework advisory",
    ],
  },

  // Segment C — Government
  {
    slug: "bridgegov",
    name: "BridgeGov™",
    segments: ["government"],
    category: "Long-Term Advisory",
    summary: "A long-term, umbrella advisory relationship providing continuous, independent support across an institution's defense priorities.",
    scope: [
      "Standing advisory relationship across multiple initiatives",
      "Cross-initiative coordination and continuity",
      "Independent, vendor-neutral counsel",
    ],
  },
  {
    slug: "bridgeassess",
    name: "BridgeAssess™",
    segments: ["government"],
    category: "Readiness Assessment Framework",
    summary: "A readiness assessment framework that applies consistent, defensible evaluation criteria across suppliers and applicants.",
    scope: [
      "Standardized readiness scoring methodology",
      "Applicant evaluation and benchmarking",
      "Defensible, auditable assessment documentation",
    ],
  },
  {
    slug: "bridgetrial",
    name: "BridgeTrial™",
    segments: ["government"],
    category: "Product & Project Field Trials",
    summary: "Field trial governance for products and projects — structuring scope, success criteria, and evaluation from design through completion.",
    scope: [
      "Trial scope and success-criteria design",
      "Stakeholder governance structure",
      "Independent evaluation and reporting",
    ],
  },
  {
    slug: "bridgelocal",
    name: "BridgeLocal™",
    segments: ["government"],
    category: "Government Localization Advisory",
    summary: "Localization advisory for government and public-sector institutions, grounding industrial and workforce development plans in technical reality.",
    scope: [
      "Localization pathway design by capability area",
      "Industrial base and supply chain assessment",
      "Phased industrialization roadmap aligned to policy objectives",
    ],
  },

  // Cross-segment
  {
    slug: "bridgelab",
    name: "BridgeLab™",
    segments: "cross",
    category: "Core Training Product",
    summary: "A core training program design that builds foundational defense-sector knowledge and capability, applicable across any segment.",
    scope: [
      "Foundational curriculum design",
      "Delivery format and cohort structuring",
      "Applicable across corporate, government, and institutional audiences",
    ],
  },
  {
    slug: "bridgeone",
    name: "BridgeOne™",
    segments: "cross",
    category: "Stakeholder Convening",
    summary: "Stakeholder convening that brings international technology providers, regional industry, and government together around a shared priority.",
    scope: [
      "Multi-stakeholder forum design and facilitation",
      "Agenda and priority alignment across parties",
      "Structured follow-up and relationship continuity",
    ],
  },
];

export interface Domain {
  key: string;
  name: string;
  description: string;
  capabilities: string[];
}

export const domains: Domain[] = [
  {
    key: "land",
    name: "LAND",
    description: "Ground systems capability areas spanning platforms, protection, and mobility.",
    capabilities: [
      "Armored vehicle systems",
      "Ground platform sub-systems and protection technologies",
      "Logistics and mobility support systems",
    ],
  },
  {
    key: "air",
    name: "AIR",
    description: "Aviation and unmanned systems capability areas across platforms and supporting technology.",
    capabilities: [
      "UAS platforms & sub-systems",
      "Avionics and mission systems",
      "Airbase and sustainment support capability",
    ],
  },
  {
    key: "navy",
    name: "NAVY",
    description: "Maritime capability areas covering surface, subsurface, and supporting systems.",
    capabilities: [
      "Naval sensor integration",
      "Surface and subsurface platform systems",
      "Maritime C4I and combat system integration",
    ],
  },
  {
    key: "c4i",
    name: "C4I",
    description: "Command, control, communications, computers, and intelligence capability areas.",
    capabilities: [
      "Tactical data-link software",
      "Command and control system integration",
      "Secure communications and information systems",
    ],
  },
  {
    key: "munitions",
    name: "MUNITIONS",
    description: "Munitions-related capability areas focused on components, guidance, and supporting technology.",
    capabilities: [
      "Guided munitions components",
      "Fuzing and guidance sub-systems",
      "Munitions testing and qualification support",
    ],
  },
];

export const serviceBoundaryStatement =
  "The Bridge provides advisory, assessment, training, and capability-building services only. The company does not engage in defense trading, procurement brokerage, regulated product representation, import/export of defense goods, or commission-based sales activity.";

export const tagline =
  "The Bridge is a GCC defense accelerator connecting global technology providers, regional industry needs, and government priorities.";
