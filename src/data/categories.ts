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
    slug: "clinical-decision-support",
    name: "AI Clinical Decision Support",
    description: "AI tools that assist healthcare providers with diagnosis, treatment recommendations, and clinical decision-making. From differential diagnosis to treatment protocol selection, these platforms augment clinical expertise with evidence-based AI insights.",
    whatToLookFor: "Clinical validation and evidence base matter most. Check FDA clearance status, peer-reviewed validation studies, and integration with your EHR. The best tools explain their reasoning and show confidence levels — not just recommendations. Verify specialty coverage matches your practice.",
    icon: "🩺",
  },
  {
    slug: "diagnostics",
    name: "AI Diagnostics",
    description: "AI-powered diagnostic tools for medical imaging, pathology, radiology, and laboratory analysis. These platforms detect patterns humans might miss — improving diagnostic accuracy and reducing turnaround times across modalities.",
    whatToLookFor: "Sensitivity and specificity metrics are critical. Look for FDA clearance or CE marking, peer-reviewed validation data, and specifics on what the AI detects versus flags for review. Check modality support (CT, MRI, X-ray, etc.) and PACS integration.",
    icon: "🔬",
  },
  {
    slug: "drug-discovery",
    name: "AI Drug Discovery",
    description: "AI platforms for drug discovery, molecular design, clinical trial optimization, and pharmacovigilance. From target identification to patient stratification, these tools accelerate the development pipeline and reduce R&D costs.",
    whatToLookFor: "Track record matters — check published successes and compounds in clinical trials. Evaluate database coverage, computational methods, and integration with your existing discovery platforms. For clinical trial tools, verify real-world patient matching accuracy.",
    icon: "💊",
  },
  {
    slug: "medical-imaging",
    name: "AI Medical Imaging",
    description: "Advanced AI analysis for radiology, pathology, dermatology, and ophthalmology imaging. These platforms enhance image interpretation, automate measurements, and detect abnormalities — supporting faster, more accurate diagnoses.",
    whatToLookFor: "Regulatory clearance (FDA/CE) is essential for clinical use. Check validation studies in peer-reviewed journals, integration with your imaging systems, and reporting capabilities. The best tools augment radiologist workflow without disrupting it — verify turnaround time and user interface design.",
    icon: "🖼️",
  },
  {
    slug: "patient-engagement",
    name: "AI Patient Engagement",
    description: "Patient communication, appointment scheduling, symptom checkers, and virtual health assistants. AI that handles routine patient interactions, triage, and education — freeing staff for higher-value care while improving patient access.",
    whatToLookFor: "Medical accuracy and safety guardrails are non-negotiable. The AI must know when to escalate to humans. Check HIPAA compliance, multilingual support, and integration with your patient portal. Test with real patient scenarios — generic chatbots miss the nuance healthcare requires.",
    icon: "💬",
  },
  {
    slug: "health-monitoring",
    name: "AI Health Monitoring",
    description: "Remote patient monitoring, wearable analytics, vital sign tracking, and chronic disease management tools. AI that continuously monitors patient data and alerts providers to concerning trends before they become emergencies.",
    whatToLookFor: "Alert accuracy is critical — too many false alarms and providers will ignore them. Check device compatibility, data integration with your EHR, and clinical validation for your patient populations. Verify reimbursement code support for RPM billing.",
    icon: "📊",
  },
  {
    slug: "medical-coding",
    name: "AI Medical Coding",
    description: "Automated medical coding, charge capture, coding compliance, and revenue cycle optimization. AI that translates clinical documentation into accurate billing codes — reducing denials and capturing revenue that manual coding misses.",
    whatToLookFor: "Accuracy on your specialty's codes is what matters. Check denial rate reduction, integration with your EHR and billing system, and support for latest code sets (ICD-10, CPT, HCPCS). The best tools provide coding suggestions in real-time during documentation.",
    icon: "📋",
  },
  {
    slug: "telemedicine",
    name: "AI Telemedicine",
    description: "Virtual care platforms with AI triage, remote diagnostics, and consultation support. These tools expand access to care by intelligently routing patients, supporting remote diagnosis, and enabling AI-augmented telehealth consultations.",
    whatToLookFor: "State licensing support and specialty-specific workflows are key differentiators. Check video quality, EHR integration, e-prescribing capabilities, and patient portal features. For AI triage, verify medical accuracy and clear escalation protocols.",
    icon: "💻",
  },
  {
    slug: "credentialing",
    name: "AI Credentialing",
    description: "Provider credentialing automation, license verification, privileging workflows, and medical staff services. AI that handles the tedious credentialing process — from initial applications to ongoing monitoring and re-credentialing cycles.",
    whatToLookFor: "Primary source verification and compliance tracking are the foundations. Check integration with CAQH, NPDB, and state licensing boards. The best platforms automate renewal tracking and provide audit trails. Verify support for your specific accreditation requirements (Joint Commission, etc.).",
    icon: "✅",
  },
  {
    slug: "hospital-operations",
    name: "AI Hospital Operations",
    description: "Staff scheduling, capacity management, supply chain optimization, and operational analytics. AI that optimizes hospital operations — from ED throughput to OR scheduling to supply chain forecasting.",
    whatToLookFor: "Integration with your hospital systems (EHR, scheduling, supply chain) is critical. Check how the AI handles your specific constraints (union rules, certification requirements, etc.). For demand forecasting, verify accuracy on your historical data before committing.",
    icon: "🏥",
  },
];
