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
    category: "Rapid Assessment",
    summary: "A rapid GCC readiness assessment that benchmarks your organization against the realities of the regional market before you commit resources.",
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
    category: "Market Entry",
    summary: "A comprehensive market-entry readiness analysis covering regulatory, industrial, and relationship dimensions of GCC entry.",
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
    category: "Continuous Advisory",
    summary: "Continuous GCC advisory and program management support that keeps your market-entry and expansion efforts on track over time.",
    scope: [
      "Ongoing coordination across stakeholders and workstreams",
      "Milestone tracking and risk management",
      "Continuous regulatory and market-intelligence updates",
    ],
  },
  {
    slug: "bridgemembership",
    name: "BridgeMembership™",
    segments: ["international"],
    category: "Advisory Membership",
    summary: "A tiered advisory membership providing structured, ongoing access to GCC market intelligence and advisory support.",
    scope: [
      "Tiered levels of advisory engagement",
      "Regular market and policy briefings",
      "Priority access to Bridge advisory resources",
    ],
  },
  {
    slug: "bridgelaunch",
    name: "BridgeLaunch™",
    segments: ["international"],
    category: "Program Design",
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
    category: "Technology Intelligence",
    summary: "Technology and supplier intelligence that identifies and profiles global capability options relevant to your program needs.",
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
    category: "Due Diligence",
    summary: "Supplier readiness assessment and due diligence that independently verifies technical, organizational, and commercial maturity.",
    scope: [
      "Technical and organizational readiness evaluation",
      "Independent verification of supplier claims",
      "Risk flagging ahead of contractual commitment",
    ],
  },
  {
    slug: "bridgelocal",
    name: "BridgeLocal™",
    segments: ["gcc"],
    category: "Localization Advisory",
    summary: "Localization and industrialization advisory that grounds regional manufacturing and capability-building plans in technical reality.",
    scope: [
      "Localization pathway design by capability area",
      "Industrial base and supply chain assessment",
      "Phased industrialization roadmap",
    ],
  },
  {
    slug: "bridgerecover",
    name: "BridgeRecover™",
    segments: ["gcc"],
    category: "Program Recovery",
    summary: "Program recovery and execution advisory for initiatives that have stalled, drifted, or lost stakeholder confidence.",
    scope: [
      "Independent program diagnostic",
      "Root-cause analysis and recovery plan",
      "Execution oversight through stabilization",
    ],
  },
  {
    slug: "bridgelab-gcc",
    name: "BridgeLab GCC™ / BridgeLaunch GCC™",
    segments: ["gcc"],
    category: "Training & Innovation",
    summary: "Design of training curricula and corporate innovation programs that build internal capability within regional organizations.",
    scope: [
      "Corporate innovation program architecture",
      "Technical and management training curriculum design",
      "Internal capability-building frameworks",
    ],
  },

  // Segment C — Government
  {
    slug: "bridgegov",
    name: "BridgeGov™",
    segments: ["government"],
    category: "Umbrella Advisory",
    summary: "An umbrella advisory relationship providing continuous, independent support across an institution's defense innovation initiatives.",
    scope: [
      "Standing advisory relationship across multiple initiatives",
      "Cross-initiative coordination and continuity",
      "Independent, vendor-neutral counsel",
    ],
  },
  {
    slug: "bridgechallenge",
    name: "BridgeChallenge™",
    segments: ["government"],
    category: "Innovation Competition Design",
    summary: "Design of government innovation competitions and challenges that surface credible technology and industrial partners.",
    scope: [
      "Challenge structure, rules, and evaluation criteria design",
      "Outreach and participant qualification framework",
      "Judging and selection governance",
    ],
  },
  {
    slug: "bridgeassess",
    name: "BridgeAssess™",
    segments: ["government"],
    category: "Readiness Framework",
    summary: "A supplier and startup readiness framework that applies consistent, defensible evaluation criteria across applicants.",
    scope: [
      "Standardized readiness scoring methodology",
      "Applicant evaluation and benchmarking",
      "Defensible, auditable assessment documentation",
    ],
  },
  {
    slug: "bridgepilot",
    name: "BridgePilot™",
    segments: ["government"],
    category: "Pilot Governance",
    summary: "Pilot and demonstration governance that structures scope, success criteria, and evaluation from design through completion.",
    scope: [
      "Pilot scope and success-criteria design",
      "Stakeholder governance structure",
      "Independent evaluation and reporting",
    ],
  },
  {
    slug: "bridgelocal-gov",
    name: "BridgeLocal Gov™ / BridgeLab Gov™",
    segments: ["government"],
    category: "Sectoral Localization & Training",
    summary: "Sector-level localization advisory and training program design supporting national industrial and workforce development goals.",
    scope: [
      "Sector-level localization strategy",
      "Workforce and institutional training program design",
      "Alignment with national industrial development priorities",
    ],
  },

  // Cross-segment
  {
    slug: "technical-due-diligence",
    name: "Technical Due Diligence",
    segments: "cross",
    category: "Cross-Segment",
    summary: "Independent technical due diligence on technologies, suppliers, or programs — applicable across all three segments.",
    scope: [
      "Independent technical evaluation",
      "Capability and maturity verification",
      "Structured findings and risk reporting",
    ],
  },
  {
    slug: "localization-advisory",
    name: "Localization Advisory",
    segments: "cross",
    category: "Cross-Segment",
    summary: "A cross-segment localization roadmap advisory connecting technology, industrial base, and policy considerations.",
    scope: [
      "Localization requirement analysis",
      "Industrial base and capability mapping",
      "Phased roadmap aligned to policy objectives",
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
