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

// Résumé file is still a placeholder — wire it up once a PDF is available.
export const links = {
  linkedin: "https://www.linkedin.com/in/engseanlee",
  email: "mailto:lee.aisolutions@gmail.com",
  resumeFile: null as string | null,
};

export const credentials = [
  "PMP — Project Management Professional",
  "B.S. — Technology Administration",
  "MBA — Technology Management, In Progress",
  "Industry Experience — Financial Services",
  "Industry Experience — Healthcare",
];

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
