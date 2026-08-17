export const site = {
  name: "EngSean Lee",
  headline: "Designing Intelligent Systems for Operational Change",
  descriptor: "AI Solutions Architecture • Process Strategy • Applied AI",
  supportingCopy:
    "I design intelligent workflows, decision-support tools, and operational systems that improve visibility, consistency, and execution.",
};

export const nav = [
  { label: "Projects", href: "/projects", descriptor: "Archive of Applied Systems" },
  { label: "Architecture", href: "/architecture", descriptor: "Framework & Capability Map" },
  { label: "About", href: "/about", descriptor: "Background & Journey" },
  { label: "Resume", href: "/resume", descriptor: "Experience & Credentials" },
  { label: "Contact", href: "/contact", descriptor: "Get In Touch" },
];

// Left navigation rail — the primary desktop wayfinding system. Includes
// Home, which the top-level `nav` array (mobile drawer, footer-era links)
// intentionally omits since the brand mark already links there.
export const railNav = [{ label: "Home", href: "/", descriptor: "The Meadow" }, ...nav];

export const links = {
  linkedin: "https://www.linkedin.com/in/engseanlee",
  email: "mailto:lee.aisolutions@gmail.com",
  resumeFile: "/resume/engsean-lee-resume.pdf" as string | null,
};

export const credentials = [
  "PMP — Project Management Professional",
  "MBA — IT Management, In Progress",
  "B.S. — Technology Administration",
  "A.S. — Graphic Technology",
  "Microsoft Office Certified",
  "OSHA 10",
  "Industry Experience — Health Insurance",
  "Industry Experience — Financial Services / Banking",
];

export const experience = [
  {
    company: "Blue Cross Blue Shield of Kansas",
    location: "Topeka, KS",
    role: "Enterprise Planning & Alignment Analyst I",
    dates: "Sep 2025 – Present",
    highlights: [
      "Partner with stakeholders across the enterprise to translate strategic priorities into actionable initiatives, roadmaps, and 12-week planning cycles.",
      "Evaluate and prioritize initiatives through business cases, cost-benefit analysis, and vendor assessments to support leadership decision-making.",
      "Built Generative AI agents on Microsoft Copilot — a Sentence Agent for content editing and refinement, and the CP3 Minutes Agent for automated meeting-minutes summarization.",
    ],
  },
  {
    company: "Capitol Federal® Savings Bank",
    location: "Topeka, KS",
    role: "Project Manager / Project Analyst — Enterprise PMO",
    dates: "Dec 2023 – Sep 2025",
    highlights: [
      "Progressed from Project Analyst to Project Manager, driving enterprise project delivery across IT, operations, and compliance in alignment with strategic goals and regulatory standards.",
      "Led enterprise-wide rollout of Duo and 1Password across the organization's 700+ employees, paired with a Data Loss Prevention (DLP) implementation.",
      "Built a Generative AI planning coach and an LLM-based documentation generator to streamline project estimation and documentation workflows.",
    ],
  },
  {
    company: "Capitol Federal® Savings Bank",
    location: "Topeka, KS",
    role: "Project & Compliance/Risk Intern",
    dates: "Aug 2022 – Dec 2023",
    highlights: [
      "Built a foundation in enterprise project management and IT compliance — scheduling, documentation, risk assessments, and security-awareness and regulatory alignment.",
    ],
  },
];

export const earlierRoles =
  "Technical Support Specialist, NCS Midwest (2021–2022) · ACE Consultant, Bradford & Galt (2018–2020)";

export const careerJourney = [
  { label: "Technology Administration", isCurrent: false },
  { label: "Financial Services", isCurrent: false },
  { label: "Project Management", isCurrent: false },
  { label: "Enterprise Planning", isCurrent: false },
  { label: "Process Systems", isCurrent: false },
  { label: "Applied AI", isCurrent: false },
  { label: "Current Direction: AI Solutions Architecture & Strategy", isCurrent: true },
];

export const philosophy = {
  heading: "Systems Before Solutions",
  primary:
    "Technology creates value when it reduces friction, improves decision-making, or fundamentally changes how work gets done.",
  secondary: "My approach to AI begins with the operating problem—not the tool.",
};

export const closingCta = {
  heading: "Let’s Build Something Better.",
  body: "Interested in AI solutions architecture, intelligent process design, enterprise transformation, and emerging opportunities at the intersection of business and AI.",
};

export const metaCredits = {
  heading: "Built as an Experiment in Applied AI",
  body: "This portfolio was conceived, designed, iterated, and developed using AI-assisted creative and technical workflows.",
  credits: [
    { role: "Concept Development", name: "ChatGPT" },
    { role: "Implementation", name: "Claude Code" },
    { role: "Creative Direction", name: "EngSean Lee" },
  ],
};
