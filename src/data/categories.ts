export interface Category {
  slug: string;
  name: string;
  description: string; // 2-3 sentences intro
  whatToLookFor: string; // 1-2 sentences
  icon: string; // emoji
  toolCount?: number; // will be computed
}

export const categories: Category[] = [
  {
    slug: "writing",
    name: "AI Writing Tools",
    description: "Tools that help you write faster, better, or both. From long-form blog posts to ad copy to email sequences — these handle the blank-page problem so you can focus on ideas, not first drafts.",
    whatToLookFor: "The best writing tools let you control tone and style, not just generate generic text. Look for custom voice training, solid editing features, and transparent pricing after the free tier ends.",
    icon: "✍️"
  },
  {
    slug: "image-generation",
    name: "AI Image Generators",
    description: "Turn text prompts into images, illustrations, and designs. Whether you need product mockups, social media graphics, or concept art, these tools generate visuals in seconds instead of hours.",
    whatToLookFor: "Quality varies wildly. Test with your actual use case — marketing images need different capabilities than artistic work. Pay attention to commercial usage rights and output resolution.",
    icon: "🎨"
  },
  {
    slug: "video",
    name: "AI Video Tools",
    description: "Generate, edit, and enhance video without a production team. Text-to-video, automated captions, background removal, avatar presenters — the category is moving fast.",
    whatToLookFor: "Rendering quality and speed are the big differentiators. Cheaper tools often produce obvious AI artifacts. Pay close attention to output resolution and whether results look professional enough.",
    icon: "🎬"
  },
  {
    slug: "audio",
    name: "AI Audio & Music Tools",
    description: "Create music, voiceovers, sound effects, and audio from text descriptions. Useful for content creators, game devs, podcasters, and anyone who needs audio without hiring talent.",
    whatToLookFor: "Licensing is the hidden landmine. Some tools generate royalty-free output, others don't. If using commercially, read the terms. Also check output length limits on free tiers.",
    icon: "🎵"
  },
  {
    slug: "coding",
    name: "AI Coding Tools",
    description: "Write code faster, debug smarter, and automate the tedious parts. These tools range from autocomplete assistants that sit in your editor to full agents that build features from a description.",
    whatToLookFor: "Integration matters more than raw capability. The best coding tools plug into your existing workflow — your IDE, your repo, your language. Check supported languages and project context understanding.",
    icon: "💻"
  },
  {
    slug: "chatbots",
    name: "AI Chatbots",
    description: "Conversational AI for customer support, internal knowledge bases, lead generation, and personal assistance. From simple Q&A bots to sophisticated agents that take actions on your behalf.",
    whatToLookFor: "The gap between 'impressive demo' and 'actually useful in production' is huge. Test with your real questions. Check integration options, response accuracy, and how it handles unknowns.",
    icon: "💬"
  },
  {
    slug: "agents",
    name: "AI Agents",
    description: "Autonomous AI systems that can plan, execute multi-step tasks, and interact with tools and APIs. The cutting edge of AI — agents that do work, not just answer questions.",
    whatToLookFor: "Reliability matters more than capability claims. An agent that completes 80% of tasks correctly beats one that attempts 100% but fails unpredictably. Check error handling and human oversight options.",
    icon: "🤖"
  },
  {
    slug: "business",
    name: "AI Business Tools",
    description: "AI-powered tools for meeting notes, document management, project planning, and general business operations. Automate the administrative overhead so teams can focus on actual work.",
    whatToLookFor: "Privacy and data handling are critical. Business tools often need access to sensitive company data. Check where data goes, whether it's used for training, and compliance certifications.",
    icon: "💼"
  },
  {
    slug: "marketing",
    name: "AI Marketing Tools",
    description: "Automate campaigns, generate ad copy, optimize SEO, analyze competitors, and personalize outreach. Tools covering the full marketing stack from content to analytics.",
    whatToLookFor: "Ignore the '10x your results' promises. Focus on which specific part of your workflow they speed up. The best tools save time on repetitive tasks, not replace your strategy.",
    icon: "📣"
  },
  {
    slug: "data",
    name: "AI Data & Analytics Tools",
    description: "Analyze datasets, generate visualizations, predict trends, and extract insights without writing code. Making data science accessible to analysts and business users.",
    whatToLookFor: "Check what data sources it connects to and how it handles data privacy. The best tools explain their analysis, not just output charts. Verify accuracy with known datasets before trusting results.",
    icon: "📊"
  },
  {
    slug: "design",
    name: "AI Design Tools",
    description: "From logos to slide decks to UI mockups — design tools that help non-designers produce professional-looking work, and help actual designers move faster.",
    whatToLookFor: "Templates and customization depth. The worst design tools produce output that screams 'AI-generated.' The best give you a strong starting point you can actually make your own.",
    icon: "🎯"
  },
  {
    slug: "education",
    name: "AI Education Tools",
    description: "Personalized tutoring, course creation, study aids, and learning management. AI that adapts to how you learn and helps educators scale their impact.",
    whatToLookFor: "Look for adaptive learning that actually responds to your level, not just pre-set difficulty tiers. Check accuracy of explanations — AI tutors can confidently teach wrong things.",
    icon: "📚"
  },
  {
    slug: "finance",
    name: "AI Finance Tools",
    description: "Portfolio analysis, expense tracking, financial forecasting, and automated bookkeeping. AI bringing institutional-grade financial analysis to individuals and small businesses.",
    whatToLookFor: "Never blindly trust AI financial advice. The best tools augment your decision-making with data, not replace it. Check regulatory compliance and how the tool handles sensitive financial data.",
    icon: "💰"
  },
  {
    slug: "healthcare",
    name: "AI Healthcare Tools",
    description: "Medical research, symptom analysis, clinical documentation, and patient engagement. AI tools designed to support — not replace — healthcare professionals.",
    whatToLookFor: "HIPAA compliance and clinical validation are non-negotiable. Check if the tool is FDA-cleared for clinical use or intended as informational only. Never use unvalidated AI for medical decisions.",
    icon: "🏥"
  },
  {
    slug: "legal",
    name: "AI Legal Tools",
    description: "Contract review, legal research, document drafting, and compliance monitoring. AI that handles the grunt work of legal practice so lawyers can focus on strategy and counsel.",
    whatToLookFor: "Accuracy is everything in legal. Check hallucination rates, source citation, and whether the tool is designed for your jurisdiction. Always have a human lawyer review AI-generated legal work.",
    icon: "⚖️"
  },
  {
    slug: "productivity",
    name: "AI Productivity Tools",
    description: "Meeting summaries, email drafting, task management, document analysis, and workflow automation. Tools that handle the busywork so you spend time on work that matters.",
    whatToLookFor: "Privacy and data handling. Productivity tools often need access to your email, calendar, and documents. Check where your data goes, whether it's used for training, and what happens when you cancel.",
    icon: "⚡"
  },
  {
    slug: "research",
    name: "AI Research Tools",
    description: "Summarize papers, search academic databases, analyze datasets, extract insights from documents, and synthesize findings across sources. Built for people who need to go deep quickly.",
    whatToLookFor: "Source citation is non-negotiable. Any research tool that gives answers without showing where they came from is a liability. Check whether it links to primary sources and handles conflicting information.",
    icon: "🔬"
  },
  {
    slug: "social",
    name: "AI Social Media Tools",
    description: "Content scheduling, caption generation, trend analysis, and audience engagement. AI that helps you maintain a consistent social presence without living on every platform.",
    whatToLookFor: "The best social tools understand platform-specific nuances — what works on LinkedIn bombs on TikTok. Look for multi-platform support and analytics that actually inform your strategy.",
    icon: "📱"
  },
  {
    slug: "sales",
    name: "AI Sales Tools",
    description: "Lead scoring, email outreach, CRM automation, and conversation intelligence. AI that helps sales teams find better prospects and close faster.",
    whatToLookFor: "Integration with your existing CRM is critical. The best sales AI enriches your current workflow rather than requiring a whole new process. Check data accuracy for lead enrichment.",
    icon: "🎯"
  },
  {
    slug: "customer-service",
    name: "AI Customer Service Tools",
    description: "Automated support, ticket routing, sentiment analysis, and self-service knowledge bases. AI that handles routine inquiries so your team can focus on complex issues.",
    whatToLookFor: "Escalation handling is the make-or-break feature. The best tools know when to hand off to a human. Check customization options and how well the AI understands your specific product/domain.",
    icon: "🎧"
  },
  {
    slug: "security",
    name: "AI Security & Compliance Tools",
    description: "Threat detection, vulnerability scanning, compliance monitoring, and security automation. AI that helps organizations stay ahead of threats and meet regulatory requirements.",
    whatToLookFor: "False positive rates matter as much as detection rates. The best security tools reduce alert fatigue, not add to it. Check integration with your existing security stack and compliance framework coverage.",
    icon: "🔒"
  }
]
