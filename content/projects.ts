export type ArchitectureNode = {
  label: string;
  detail?: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  group: "featured" | "supporting" | "experiments";
  featured: boolean;
  insignia: string;
  summary: string;
  problem: {
    headline?: string;
    body: string;
  };
  overview: string;
  architecture: {
    description: string;
    nodes: ArchitectureNode[];
  };
  technology: {
    platform?: string[];
    model?: string[];
    agentArchitecture?: string[];
    promptStrategy?: string[];
    dataLayer?: string[];
    integrations?: string[];
    controls?: string[];
  };
  impact: {
    metric?: string;
    outcomes: string[];
  };
  lessons: string[];
  capabilities: string[];
  relatedProjects?: string[];
};

export const projects: Project[] = [
  {
    slug: "enterprise-estimate-intake-system",
    title: "Enterprise Estimate Intake System",
    category: "Process Systems",
    group: "featured",
    featured: true,
    insignia: "compass",
    summary:
      "Governed intake and tracking that eliminated duplicate submissions and created visibility.",
    problem: {
      headline: "The problem was not effort. It was structure.",
      body: "A manual spreadsheet-driven estimate process created risks around duplicate submissions, conflicting information, poor status visibility, and weak auditability across multiple internal teams.",
    },
    overview:
      "Designed a low-code intake and tracking system to standardize estimate collection, enforce workflow states, prevent duplication, surface deadlines, and create a controlled revision process.",
    architecture: {
      description:
        "A structured intake layer enforces a single path from submission to decision, with duplication checked at the point of entry rather than after the fact.",
      nodes: [
        { label: "Low-Code Application Layer", detail: "Structured intake forms and views" },
        { label: "Structured List-Based Data Layer", detail: "Single source of estimate truth" },
        { label: "Duplicate-Prevention Logic", detail: "Checked at point of submission" },
        { label: "Draft → Submit → Lock Workflow", detail: "Enforced state machine" },
        { label: "Visual Due-Date Flags", detail: "At-a-glance deadline visibility" },
        { label: "Required Change-Reason Capture", detail: "Governs every revision" },
      ],
    },
    technology: {
      platform: ["Low-code application platform"],
      dataLayer: ["Structured list-based data model"],
      controls: ["Duplicate prevention", "State-locked workflow", "Required revision reasoning"],
    },
    impact: {
      outcomes: [
        "Eliminated duplicate and conflicting estimate submissions",
        "Created an audit trail",
        "Improved at-a-glance status visibility",
        "Created a more governed workflow",
      ],
    },
    lessons: [
      "This is an important example of process before AI.",
      "The right solution is not always an AI model — strong operational design creates the structured foundation future AI capability may depend on.",
    ],
    capabilities: ["process-design", "governance", "low-code-systems", "workflow-design"],
    relatedProjects: ["process-build-coach-agent", "pmo-tracking-assistant"],
  },
  {
    slug: "process-build-coach-agent",
    title: "Process Build Coach Agent",
    category: "Applied AI",
    group: "featured",
    featured: true,
    insignia: "shield",
    summary:
      "Architecture-aware AI guidance that prevents governance failures before they occur.",
    problem: {
      headline: "The problem was not knowledge. It was risk of unseen mistakes.",
      body: "A self-directed builder without prior platform expertise needed a way to avoid architectural mistakes, governance failures, duplicate-entry risks, lock bypasses, and broken audit behavior while building a scalable workflow.",
    },
    overview:
      "Created a custom AI coaching agent that acted as a structured architecture reviewer rather than a documentation dump.",
    architecture: {
      description:
        "An embedded rulebook constrains the agent to teach and review against the same governance model the system it coaches is built on.",
      nodes: [
        { label: "Custom GPT-Based Agent", detail: "Structured coaching persona" },
        { label: "Embedded Architecture Rulebook", detail: "Codified design constraints" },
        { label: "Teach-As-You-Build Guidance", detail: "Step-by-step review" },
        { label: "Delegation-Safety Checks", detail: "Flags unsafe hand-offs" },
        { label: "Governance Guardrails", detail: "State-machine awareness" },
        { label: "Duplicate / Lock-Bypass Protection", detail: "Audit trail integrity" },
      ],
    },
    technology: {
      platform: ["Custom GPT"],
      agentArchitecture: ["Rule-constrained coaching agent"],
      promptStrategy: ["Embedded architecture rulebook", "State-machine awareness"],
      controls: [
        "Delegation-safety checks",
        "Duplicate-creation protection",
        "Lock-bypass protection",
        "Audit-trail-failure protection",
      ],
    },
    impact: {
      outcomes: [
        "Enabled a single builder to create a more scalable system",
        "Caught architectural mistakes before implementation",
        "Strengthened governance and workflow integrity",
        "Reduced dependence on prior platform expertise",
      ],
    },
    lessons: [
      "AI is more valuable when constrained by explicit operational rules.",
      "Coaching and architecture-review agents may create more value than simple content generation.",
      "Governance-aware AI is more credible in enterprise environments.",
    ],
    capabilities: ["applied-ai", "governance", "solution-architecture", "prompt-instruction-design"],
    relatedProjects: ["enterprise-estimate-intake-system", "project-documentation-generator"],
  },
  {
    slug: "project-documentation-generator",
    title: "Project Documentation Generator",
    category: "Documentation Automation",
    group: "featured",
    featured: true,
    insignia: "scroll",
    summary:
      "Automates end-to-end project documentation, reducing hours to minutes.",
    problem: {
      headline: "The problem was not writing. It was repetition.",
      body: "Project documentation required repetitive manual drafting across multiple standard document sections, creating unnecessary time burden and opportunities for inconsistent structure.",
    },
    overview:
      "Built an agent that converts a short structured project proposal into complete tab-specific project documentation ready for a standard project workbook.",
    architecture: {
      description:
        "A strict field-level output contract maps one structured proposal input to seven deterministic document outputs.",
      nodes: [
        { label: "Structured Proposal Input", detail: "Single source input" },
        { label: "Deterministic Output Logic", detail: "By document tab" },
        { label: "Technical Design / Cost-Benefit / Charter", detail: "Generated outputs" },
        { label: "Requirements / Test Script / Implementation", detail: "Generated outputs" },
        { label: "Fuzzy-Matched Personnel Resolution", detail: "Reconciles named roles" },
        { label: "Strict Field-Level Output Contract", detail: "Consistent structure" },
      ],
    },
    technology: {
      promptStrategy: ["Deterministic output logic by document tab", "Strict field-level output contract"],
      dataLayer: ["Structured proposal input", "Fuzzy-matched personnel resolution"],
    },
    impact: {
      metric: "HOURS → MINUTES",
      outcomes: [
        "Reduced documentation drafting from hours to minutes",
        "Increased structure consistency",
        "Reduced repetitive drafting",
        "Accelerated project documentation workflows",
      ],
    },
    lessons: [
      "Repetitive, structured knowledge work is a strong AI automation target.",
      "Deterministic structure can matter more than creativity in enterprise workflows.",
      "Bounded use cases produce more reliable AI output.",
    ],
    capabilities: ["documentation-automation", "structured-output-design", "applied-ai"],
    relatedProjects: ["initiative-proposal-builder", "pmo-tracking-assistant"],
  },
  {
    slug: "pmo-tracking-assistant",
    title: "PMO Tracking Assistant",
    category: "Program Discipline",
    group: "featured",
    featured: true,
    insignia: "beacon",
    summary:
      "A persistent workspace for action, risks, decisions, and project truth.",
    problem: {
      headline: "The problem was not information. It was fragmentation.",
      body: "Project information was vulnerable to fragmentation across notes, updates, actions, risks, decisions, milestones, and dependencies.",
    },
    overview:
      "Created a persistent project-tracking workspace inside a chat environment designed to function as a lightweight PMO system rather than a one-off chatbot.",
    architecture: {
      description:
        "A stable information model gives every category — actions, risks, decisions — a persistent home the assistant can query and report against.",
      nodes: [
        { label: "Action Items", detail: "Structured category" },
        { label: "Risks & Decisions", detail: "Structured category" },
        { label: "Milestones & Dependencies", detail: "Structured category" },
        { label: "KPIs & Stakeholder Registry", detail: "Structured category" },
        { label: "Automated Weekly Status Reporting", detail: "Generated from live state" },
      ],
    },
    technology: {
      platform: ["Persistent chat workspace"],
      dataLayer: ["Structured category model (actions, risks, decisions, milestones, dependencies, KPIs)"],
    },
    impact: {
      outcomes: [
        "Replaced scattered notes and status updates with a structured source of project truth",
        "Improved queryability of project information",
        "Reduced manual status-report compilation effort",
        "Improved visibility across project categories",
      ],
    },
    lessons: [
      "Persistent context can be more valuable than single-response AI.",
      "AI becomes more useful when connected to a stable information model.",
      "Recurring status communication is a strong automation opportunity.",
    ],
    capabilities: ["persistent-ai-workspaces", "stakeholder-communication", "project-program-discipline"],
    relatedProjects: ["enterprise-estimate-intake-system", "initiative-proposal-builder"],
  },
  {
    slug: "initiative-proposal-builder",
    title: "Initiative Proposal Builder",
    category: "Documentation Automation",
    group: "supporting",
    featured: false,
    insignia: "quill",
    summary:
      "Converts a short initiative summary into five structured, vendor-neutral proposal sections.",
    problem: {
      body: "Executive-ready initiative proposals required repetitive drafting and could drift into inconsistent structure or vendor-specific language.",
    },
    overview:
      "Built an AI agent that converts a short initiative summary into five structured proposal sections: description, strategic alignment, current situation, business value, and business impact.",
    architecture: {
      description:
        "A one-paragraph-per-section contract enforces consistent structure and vendor-neutral language across every proposal.",
      nodes: [
        { label: "Structured Prompt Template", detail: "Five-section contract" },
        { label: "One-Paragraph-Per-Section Contract", detail: "Enforced structure" },
        { label: "Vendor-Neutral Language Enforcement", detail: "Solution-focused output" },
      ],
    },
    technology: {
      promptStrategy: ["Structured prompt template", "Vendor-neutral language enforcement"],
    },
    impact: {
      outcomes: [
        "Faster first drafts",
        "More consistent proposal structure",
        "Solution-focused rather than product-pitch-oriented language",
      ],
    },
    lessons: [],
    capabilities: ["structured-output-design", "stakeholder-communication"],
    relatedProjects: ["project-documentation-generator"],
  },
  {
    slug: "minutes-agent",
    title: "Minutes Agent",
    category: "Applied AI",
    group: "supporting",
    featured: false,
    insignia: "quill",
    summary:
      "Reconciles meeting notes against the transcript and rewrites minutes in a consistent executive voice.",
    problem: {
      body: "Accurate professional meeting minutes required manual reconciliation between human notes and full meeting transcripts.",
    },
    overview:
      "Built a Microsoft Copilot agent that cross-references the user's own meeting summary against the transcript and rewrites the result into a consistent executive voice.",
    architecture: {
      description: "Copilot cross-references a human summary against the full transcript before producing a reconciled draft.",
      nodes: [
        { label: "Meeting Transcript", detail: "Source of record" },
        { label: "Human Summary", detail: "User-authored notes" },
        { label: "Cross-Reference & Reconciliation", detail: "Copilot agent logic" },
        { label: "Executive-Voice Rewrite", detail: "Consistent output tone" },
      ],
    },
    technology: {
      platform: ["Microsoft Copilot"],
    },
    impact: {
      outcomes: [
        "Reduced manual post-meeting drafting",
        "Improved consistency",
        "Improved accuracy through transcript reconciliation",
      ],
    },
    lessons: [],
    capabilities: ["applied-ai", "enterprise-communication"],
  },
  {
    slug: "sentence-agent",
    title: "Sentence Agent",
    category: "Applied AI",
    group: "supporting",
    featured: false,
    insignia: "quill",
    summary:
      "A Copilot writing-assistance agent for autocorrect, restructuring, condensing, and expanding text.",
    problem: {
      body: "Everyday written communication benefits from fast, reliable editing for tone and length.",
    },
    overview:
      "A Microsoft Copilot writing-assistance agent focused on autocorrect, restructuring, condensing, and expanding text.",
    architecture: {
      description: "A lightweight editing agent applied directly within everyday written communication.",
      nodes: [
        { label: "Autocorrect", detail: "" },
        { label: "Restructuring", detail: "" },
        { label: "Condensing / Expanding", detail: "" },
      ],
    },
    technology: {
      platform: ["Microsoft Copilot"],
    },
    impact: {
      outcomes: [
        "Supports faster everyday written communication",
        "Reduces manual editing for tone and length",
      ],
    },
    lessons: [],
    capabilities: ["enterprise-communication"],
  },
  {
    slug: "decision-advisor-skill",
    title: "Decision Advisor Skill",
    category: "Applied Tools & Experiments",
    group: "experiments",
    featured: false,
    insignia: "scale",
    summary:
      "A structured, challenge-first framework for evaluating financial and property decisions.",
    problem: {
      body: "Generic pros-and-cons lists rarely stress-test a decision — a more disciplined evaluation structure was needed.",
    },
    overview:
      "A custom Claude skill designed to evaluate financial and property decisions using a structured challenge-first framework: devil's advocate, straight shooter, clear verdict.",
    architecture: {
      description: "Three sequential lenses replace an unstructured pros/cons list with a repeatable evaluation path.",
      nodes: [
        { label: "Devil's Advocate", detail: "Actively challenges the decision" },
        { label: "Straight Shooter", detail: "Plain-language assessment" },
        { label: "Clear Verdict", detail: "Decisive recommendation" },
      ],
    },
    technology: {
      platform: ["Custom Claude skill"],
    },
    impact: {
      outcomes: ["Replaced generic pros/cons with a consistent decision-evaluation structure"],
    },
    lessons: [],
    capabilities: ["decision-support", "applied-ai"],
  },
  {
    slug: "iron-ledger",
    title: "Iron Ledger",
    category: "Applied Tools & Experiments",
    group: "experiments",
    featured: false,
    insignia: "ledger",
    summary:
      "A personal workout-tracking app built independently to develop hands-on technical skill.",
    problem: {
      body: "Building outside of work is how technical curiosity turns into real skill — Iron Ledger was built independently, iteration by iteration.",
    },
    overview:
      "A personal workout-tracking web application built independently to develop technical skill through hands-on iteration.",
    architecture: {
      description: "A five-tab React interface with persistent, cross-device data and voice input.",
      nodes: [
        { label: "React", detail: "Five-tab interface" },
        { label: "Persistent Data Storage", detail: "Cross-device sync" },
        { label: "Web Speech API", detail: "Voice input" },
        { label: "iOS API Bridge Resolution", detail: "Platform limitation solved" },
      ],
    },
    technology: {
      platform: ["React"],
      integrations: ["Web Speech API"],
    },
    impact: {
      outcomes: [
        "Demonstrates independent technical curiosity",
        "Demonstrates willingness to build outside work",
        "Hands-on problem solving",
        "Front-end development practice",
        "Persistence through platform limitations",
      ],
    },
    lessons: [
      "Personal projects are a legitimate way to demonstrate front-end capability and persistence.",
    ],
    capabilities: ["technical-prototyping"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getProjectsByGroup(group: Project["group"]) {
  return projects.filter((p) => p.group === group);
}

export function getRelatedProjects(project: Project) {
  if (!project.relatedProjects) return [];
  return project.relatedProjects
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is Project => Boolean(p));
}
