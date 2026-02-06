export interface Category {
  slug: string;
  name: string;
  description: string;
  whatToLookFor: string;
  icon: string;
  toolCount?: number;
}

export const categories: Category[] = [
  {
    slug: "contract-review",
    name: "Contract Review & Analysis",
    description: "AI tools that review, analyze, redline, and extract data from contracts. From due diligence acceleration to obligation tracking, these platforms handle the labor-intensive parts of contract work so lawyers can focus on negotiation strategy and risk assessment.",
    whatToLookFor: "Accuracy on your contract types matters more than feature count. Test with your actual agreements — M&A due diligence needs different AI than SaaS contract review. Check jurisdiction support, integration with your DMS, and whether the AI explains its reasoning or just highlights clauses.",
    icon: "📝",
  },
  {
    slug: "legal-research",
    name: "Legal Research",
    description: "AI-powered case law, statute, and regulation research tools. These platforms go beyond keyword search — they understand legal concepts, validate citations, and surface relevant authority you might miss with traditional research methods.",
    whatToLookFor: "Citation accuracy is non-negotiable. A research tool that hallucinates case citations is worse than useless — it's malpractice risk. Check Shepard's/KeyCite integration, jurisdiction coverage, and whether the AI distinguishes between binding and persuasive authority.",
    icon: "🔍",
  },
  {
    slug: "document-automation",
    name: "Document Automation & Drafting",
    description: "Draft generation, template automation, clause libraries, and form completion tools. These platforms turn repetitive document creation into a guided, automated process — from intake questionnaires to finished filings.",
    whatToLookFor: "Conditional logic and jurisdiction-specific forms are the differentiators. The best tools handle complex document assembly with branching logic, not just mail merge. Check court form coverage for your jurisdiction and how easy templates are to build and maintain.",
    icon: "📄",
  },
  {
    slug: "compliance",
    name: "Compliance & Regulatory",
    description: "Compliance monitoring, regulatory change tracking, risk assessment, and policy management tools. AI that watches the regulatory landscape so your compliance team can focus on implementation instead of monitoring.",
    whatToLookFor: "Coverage of your specific regulatory framework matters most. A tool that tracks SOC 2 brilliantly is useless if you need GDPR. Check update frequency, how quickly new regulations are incorporated, and whether alerts are actionable or just noise.",
    icon: "⚖️",
  },
  {
    slug: "e-discovery",
    name: "E-Discovery",
    description: "Document review, predictive coding, technology-assisted review (TAR), and data classification platforms. AI that cuts through massive document sets to find what matters — reducing review costs by 50-80% compared to manual review.",
    whatToLookFor: "Processing speed and review accuracy are the key metrics. Test with a sample dataset from a real matter. Check pricing models carefully — per-GB, per-matter, and per-user models produce wildly different costs depending on your case mix.",
    icon: "🗂️",
  },
  {
    slug: "billing",
    name: "Billing & Time Tracking",
    description: "AI-assisted time entry, billing optimization, automated timesheet generation, and revenue recovery tools. These platforms capture billable time that would otherwise be lost — most firms recover 10-30% more billable hours with AI time tracking.",
    whatToLookFor: "Integration with your practice management software is critical. The best AI billing tools run in the background, capturing time from email, documents, and calendar without requiring manual entry. Check how it handles narrative generation and billing guideline compliance.",
    icon: "⏱️",
  },
  {
    slug: "practice-management",
    name: "Practice Management",
    description: "AI-enhanced firm operations, matter management, client intake, calendaring, and workflow automation. The central nervous system of a modern law practice — now with AI that automates the administrative overhead lawyers hate.",
    whatToLookFor: "The best practice management AI is invisible — it handles deadlines, document organization, and client communication without you thinking about it. Prioritize platforms where AI is deeply integrated, not bolted on as a chatbot. Check mobile apps, client portal quality, and migration support from your current system.",
    icon: "🏢",
  },
  {
    slug: "ip-patent",
    name: "IP & Patent",
    description: "Patent search, prior art analysis, trademark monitoring, IP portfolio management, and patentability assessment tools. AI that handles the massive search and analysis workload in IP practice — from freedom-to-operate searches to competitive patent landscapes.",
    whatToLookFor: "Database coverage and search quality are everything. Check which patent offices are covered, how current the data is, and whether the AI understands claim language (not just keywords). For trademark tools, verify international class coverage and monitoring alert quality.",
    icon: "💡",
  },
  {
    slug: "litigation",
    name: "Litigation Support & Analytics",
    description: "Case analysis, outcome prediction, judge analytics, deposition preparation, and trial support tools. AI that gives litigators data-driven insights on judges, opposing counsel, and case outcomes to inform strategy.",
    whatToLookFor: "Predictive accuracy and data recency matter most. Check how the tool handles your specific court and practice area — analytics based on federal patent cases won't help with state family law. Verify the underlying dataset size and how frequently it's updated.",
    icon: "⚔️",
  },
  {
    slug: "intake",
    name: "Legal Intake & Client Communication",
    description: "Client intake automation, virtual receptionists, legal chatbots, and appointment scheduling tools. AI that captures leads 24/7, qualifies potential clients, and handles the initial communication that most firms miss after hours.",
    whatToLookFor: "Response quality and ethical compliance are critical. Legal intake bots must avoid giving legal advice while still being helpful. Check integration with your practice management system, after-hours handling, and whether the AI knows when to escalate to a human.",
    icon: "💬",
  },
];
