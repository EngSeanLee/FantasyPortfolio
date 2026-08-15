export type ArchitectureFrameworkNode = {
  id: string;
  index: string;
  title: string;
  question: string;
  explanation: string;
  principle: string;
  relatedProjects: string[];
};

export const architectureFramework: ArchitectureFrameworkNode[] = [
  {
    id: "business-problem",
    index: "01",
    title: "Business Problem",
    question: "What operating condition are we actually trying to change?",
    explanation:
      "Every engagement starts by naming the operating condition in plain language — not the tool, not the technology, the condition. Duplicate submissions. Fragmented status. Repetitive drafting.",
    principle:
      "If the problem cannot be stated without mentioning a tool, it isn't well understood yet.",
    relatedProjects: ["enterprise-estimate-intake-system", "pmo-tracking-assistant"],
  },
  {
    id: "process-design",
    index: "02",
    title: "Process Design",
    question: "Where does friction, inconsistency, delay, or unnecessary manual work occur?",
    explanation:
      "The workflow is mapped end to end to find where effort is being spent that doesn't need to be — duplicate entry, manual reconciliation, ad-hoc status updates.",
    principle: "Redesign the process before automating it, or you automate the friction too.",
    relatedProjects: ["enterprise-estimate-intake-system", "minutes-agent"],
  },
  {
    id: "information-structure",
    index: "03",
    title: "Information Structure",
    question: "What information must be standardized before automation becomes reliable?",
    explanation:
      "Reliable automation depends on structured, unambiguous inputs. This stage defines the data model, fields, and states the rest of the system depends on.",
    principle: "Structured information is a prerequisite for trustworthy automation, not a nice-to-have.",
    relatedProjects: ["project-documentation-generator", "pmo-tracking-assistant"],
  },
  {
    id: "governance-control",
    index: "04",
    title: "Governance & Control",
    question: "What can the system do, and what should it never be allowed to do?",
    explanation:
      "Explicit guardrails are defined before capability is added — duplicate prevention, lock states, required change reasoning, delegation-safety checks.",
    principle: "Governance embedded in the workflow is more durable than governance enforced by policy alone.",
    relatedProjects: ["process-build-coach-agent", "enterprise-estimate-intake-system"],
  },
  {
    id: "ai-enablement",
    index: "05",
    title: "AI Enablement",
    question: "Where does intelligence improve the process rather than simply decorate it?",
    explanation:
      "AI is introduced only where it materially improves a defined step — drafting, coaching, reconciliation — inside the guardrails already established.",
    principle: "AI is applied to a bounded step in a designed system, not layered on top as a general assistant.",
    relatedProjects: ["process-build-coach-agent", "project-documentation-generator"],
  },
  {
    id: "outcome",
    index: "06",
    title: "Outcome",
    question: "What materially changed for the business?",
    explanation:
      "The result is measured against the original operating condition — reduced rework, stronger governance, faster execution, more reliable documentation.",
    principle: "Outcomes are reported honestly, in outcome categories, without inventing metrics that aren't supported.",
    relatedProjects: ["project-documentation-generator", "pmo-tracking-assistant"],
  },
];
