export type Capability = {
  id: string;
  label: string;
  tier: "primary" | "secondary";
  definition: string;
  relatedProjects: string[];
};

export const capabilities: Capability[] = [
  {
    id: "solution-architecture",
    label: "Solution Architecture",
    tier: "primary",
    definition:
      "Designing the structural shape of a system before choosing its tools — data, workflow states, and controls first.",
    relatedProjects: ["process-build-coach-agent", "enterprise-estimate-intake-system"],
  },
  {
    id: "process-design",
    label: "Process Design",
    tier: "primary",
    definition:
      "Mapping where friction, inconsistency, and manual effort occur, then redesigning the workflow around them.",
    relatedProjects: ["enterprise-estimate-intake-system"],
  },
  {
    id: "applied-ai",
    label: "Applied AI",
    tier: "primary",
    definition:
      "Using AI as a bounded, purpose-built layer on top of an existing operational process — not a general-purpose assistant.",
    relatedProjects: ["process-build-coach-agent", "project-documentation-generator", "minutes-agent"],
  },
  {
    id: "governance",
    label: "Governance",
    tier: "primary",
    definition:
      "Defining what a system — human or AI-driven — can do, and explicitly what it should never be allowed to do.",
    relatedProjects: ["process-build-coach-agent", "enterprise-estimate-intake-system"],
  },
  {
    id: "workflow-design",
    label: "Workflow Design",
    tier: "primary",
    definition:
      "Encoding a process into enforced states — draft, submit, lock — rather than relying on convention alone.",
    relatedProjects: ["enterprise-estimate-intake-system"],
  },
  {
    id: "documentation-automation",
    label: "Documentation Automation",
    tier: "primary",
    definition:
      "Converting structured input into consistent, deterministic documentation output across standard templates.",
    relatedProjects: ["project-documentation-generator", "initiative-proposal-builder"],
  },
  {
    id: "stakeholder-communication",
    label: "Stakeholder Communication",
    tier: "primary",
    definition:
      "Structuring recurring status, proposals, and reporting so information stays consistent across audiences.",
    relatedProjects: ["pmo-tracking-assistant", "initiative-proposal-builder"],
  },
  {
    id: "low-code-systems",
    label: "Low-Code Systems",
    tier: "primary",
    definition:
      "Building governed, production-grade tracking systems on low-code platforms without sacrificing structure.",
    relatedProjects: ["enterprise-estimate-intake-system"],
  },
  {
    id: "project-program-discipline",
    label: "Project / Program Discipline",
    tier: "primary",
    definition:
      "Applying PMO-grade rigor — risks, decisions, milestones, dependencies — to keep execution visible and accountable.",
    relatedProjects: ["pmo-tracking-assistant"],
  },
  {
    id: "prompt-instruction-design",
    label: "Prompt / Instruction Design",
    tier: "secondary",
    definition:
      "Writing explicit rulebooks and instructions that constrain AI behavior to a specific, reviewable outcome.",
    relatedProjects: ["process-build-coach-agent"],
  },
  {
    id: "structured-output-design",
    label: "Structured Output Design",
    tier: "secondary",
    definition:
      "Defining strict, field-level output contracts so generated content is consistent and directly usable.",
    relatedProjects: ["project-documentation-generator", "initiative-proposal-builder"],
  },
  {
    id: "persistent-ai-workspaces",
    label: "Persistent AI Workspaces",
    tier: "secondary",
    definition:
      "Connecting AI to a stable information model instead of treating every interaction as a one-off response.",
    relatedProjects: ["pmo-tracking-assistant"],
  },
  {
    id: "human-in-the-loop-design",
    label: "Human-in-the-Loop Design",
    tier: "secondary",
    definition:
      "Placing review and approval steps where judgment still needs to sit with a person, not a model.",
    relatedProjects: ["process-build-coach-agent"],
  },
  {
    id: "decision-support",
    label: "Decision Support",
    tier: "secondary",
    definition:
      "Building structured evaluation frameworks that stress-test a decision rather than simply describing options.",
    relatedProjects: ["decision-advisor-skill"],
  },
  {
    id: "technical-prototyping",
    label: "Technical Prototyping",
    tier: "secondary",
    definition:
      "Building and shipping independent technical projects, end to end, to develop hands-on capability.",
    relatedProjects: ["iron-ledger"],
  },
  {
    id: "enterprise-communication",
    label: "Enterprise Communication",
    tier: "secondary",
    definition:
      "Editing and structuring everyday written communication for tone, clarity, and length at speed.",
    relatedProjects: ["minutes-agent", "sentence-agent"],
  },
];

export function getCapabilityById(id: string) {
  return capabilities.find((c) => c.id === id);
}
