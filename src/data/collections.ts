import { tools, type Tool } from "./tools";

export interface CollectionPick {
  toolSlug: string;
  label: string; // e.g. "Free / $20 mo"
  categoryLabel: string; // e.g. "Chatbot"
  miniReview: string;
  incomePotential?: string;
}

export interface Collection {
  slug: string;
  name: string;
  titleTag: string;
  metaDescription: string;
  intro: string;
  whatToLookFor: string;
  picks: CollectionPick[];
}

export const collections: Collection[] = [
  {
    slug: "small-business",
    name: "Best AI Tools for Small Business",
    titleTag: "Best AI Tools for Small Business (2026) — Tested & Compared",
    metaDescription:
      "The best AI tools for small business — tested on real workflows, not marketing demos. Tools that save time and money for teams of 1-20.",
    intro:
      "You don't need an enterprise AI stack. You need three or four tools that handle the things eating your time — customer questions, content creation, bookkeeping, and scheduling. These are the AI tools that small businesses actually use and keep paying for, not the ones that sound impressive in a demo.\n\nWe picked these based on three criteria: they work for teams under 20 people, they cost less than $50/month each, and they show ROI within the first week.",
    whatToLookFor:
      "The best AI tools for small business share three traits: fast setup (under an hour), clear pricing (no \"contact sales\" walls), and integration with tools you already use. If a tool requires a consultant to implement, it's not built for small business — no matter what the marketing says.",
    picks: [
      {
        toolSlug: "chatgpt",
        label: "Free / $20 mo",
        categoryLabel: "Chatbot",
        miniReview:
          "Your general-purpose business assistant. Drafts emails, brainstorms marketing ideas, summarizes documents, analyzes data, writes first drafts. Start here if you're only going to try one AI tool.",
      },
      {
        toolSlug: "canva",
        label: "Free / $13 mo",
        categoryLabel: "Design",
        miniReview:
          "Every small business needs graphics — social posts, flyers, presentations, ads. Canva's AI features generate designs, remove backgrounds, and resize for every platform. Non-designers produce professional results.",
      },
      {
        toolSlug: "tidio",
        label: "Free / $25 mo",
        categoryLabel: "Chatbot",
        miniReview:
          "AI chatbot for your website that answers customer questions 24/7. Handles the repetitive 80% — shipping, returns, pricing, hours — so you deal with the interesting 20%. Setup takes about an hour.",
      },
      {
        toolSlug: "zapier",
        label: "Free / $20 mo",
        categoryLabel: "Productivity",
        miniReview:
          "Connects your apps and automates workflows between them. New form submission → CRM entry → welcome email → Slack notification, all automatic. The glue that makes your other tools work together.",
      },
      {
        toolSlug: "quickbooks",
        label: "$30+ mo",
        categoryLabel: "Productivity",
        miniReview:
          "AI financial assistant inside QuickBooks. Ask questions about your business finances in plain English. Catches anomalies, suggests categorizations, automates the tedious parts of bookkeeping.",
      },
      {
        toolSlug: "jasper",
        label: "$49 mo",
        categoryLabel: "Writing",
        miniReview:
          "AI writing tool that learns your brand voice. Produces marketing copy, blog posts, email campaigns, and product descriptions. Worth it if you publish content weekly; overkill if you don't.",
      },
      {
        toolSlug: "flick",
        label: "$14 mo",
        categoryLabel: "Marketing",
        miniReview:
          "AI social media management — brainstorms content, writes captions, suggests hashtags, schedules posts across Instagram, Facebook, LinkedIn, and TikTok. Turns a week of social media into a 2-hour batch session.",
      },
    ],
  },
  {
    slug: "chatgpt-alternatives",
    name: "ChatGPT Alternatives Worth Trying",
    titleTag: "ChatGPT Alternatives Worth Trying (2026) — Honest Comparison",
    metaDescription:
      "ChatGPT alternatives that do specific things better — research, coding, long documents, privacy. Not clones, actual alternatives with different strengths.",
    intro:
      "ChatGPT is the default AI assistant. But \"default\" doesn't mean \"best at everything.\" These alternatives genuinely outperform ChatGPT in specific areas. Some might replace it entirely, depending on how you work. We use all of them and switch based on the task.",
    whatToLookFor:
      "The right ChatGPT alternative depends on your primary use case. If you need research with citations, Perplexity wins. If you work with long documents or need nuanced writing, Claude wins. If you live in Google's ecosystem, Gemini wins. Don't switch for novelty — switch because the alternative is measurably better for your specific workflow.",
    picks: [
      {
        toolSlug: "claude",
        label: "Free / $20 mo",
        categoryLabel: "Chatbot",
        miniReview:
          "Best for: Long documents, nuanced writing, coding, complex instructions. The 200K context window means you can paste entire reports, codebases, or research papers. Many power users have fully switched from ChatGPT.",
      },
      {
        toolSlug: "perplexity",
        label: "Free / $20 mo",
        categoryLabel: "Research",
        miniReview:
          "Best for: Research with cited sources. Every answer links to where the information came from. Replaces the Google → click → read → summarize workflow. Not conversational like ChatGPT — more like a research engine.",
      },
      {
        toolSlug: "gemini",
        label: "Free / $20 mo",
        categoryLabel: "Chatbot",
        miniReview:
          "Best for: Google Workspace users. Deep integration with Gmail, Docs, Sheets, Drive, and Calendar. Searches your email, analyzes spreadsheets, drafts documents — all within tools you already use.",
      },
      {
        toolSlug: "mistral",
        label: "Free",
        categoryLabel: "Chatbot",
        miniReview:
          "Best for: Fewer content restrictions, strong multilingual support (especially European languages). Open-source model ecosystem for developers. A solid general-purpose alternative at no cost.",
      },
      {
        toolSlug: "github-copilot",
        label: "Free (students) / $10 mo",
        categoryLabel: "Coding",
        miniReview:
          "Best for: Code specifically. Lives in your IDE, understands your project context, suggests completions as you type. Not a general chatbot — a specialized coding assistant that outperforms ChatGPT for development work.",
      },
      {
        toolSlug: "grok",
        label: "Included with X Premium",
        categoryLabel: "Chatbot",
        miniReview:
          "Best for: Real-time information from X/Twitter, fewer content restrictions. Niche but useful for social media intelligence and trending topic analysis.",
      },
    ],
  },
  {
    slug: "ecommerce",
    name: "AI Tools for Ecommerce",
    titleTag: "AI Tools for Ecommerce (2026) — Automate Without Breaking Your Store",
    metaDescription:
      "AI tools for ecommerce that automate product descriptions, customer support, pricing, email, and inventory. What's worth it and what's hype.",
    intro:
      "Every ecommerce platform has slapped \"AI-powered\" on something. Most of it's a dressed-up autocomplete. These are the tools that genuinely move the needle for online stores — from product descriptions at scale to customer support that works at 3 AM.\n\nWe picked tools that work across platforms (Shopify, WooCommerce, BigCommerce) and show measurable ROI within 30 days.",
    whatToLookFor:
      "The best ecommerce AI tools integrate with your existing platform and pay for themselves quickly. If a tool requires you to change your workflow, it better be dramatically better. Prioritize tools with direct Shopify/WooCommerce integrations, transparent pricing, and easy rollback if things go wrong.",
    picks: [
      {
        toolSlug: "chatgpt",
        label: "Free / $20 mo",
        categoryLabel: "Writing",
        miniReview:
          "Batch-write product descriptions by feeding specs and getting polished copy back. Handle 500 descriptions in 2 days instead of 2 months. Review everything before publishing — AI occasionally invents features.",
      },
      {
        toolSlug: "tidio",
        label: "Free / $25 mo",
        categoryLabel: "Chatbot",
        miniReview:
          "AI chatbot handling order status, return questions, sizing help, and shipping timelines. Integrates with Shopify and pulls real-time order data. Most stores see 30-50% of support tickets handled automatically.",
      },
      {
        toolSlug: "klaviyo",
        label: "Free tier / Paid scales",
        categoryLabel: "Marketing",
        miniReview:
          "AI-optimized email marketing for ecommerce. Abandoned cart recovery, product recommendations, send time optimization, subject line testing. The standard for ecommerce email — recovers 5-15% of abandoned carts.",
      },
      {
        toolSlug: "canva",
        label: "Free / $13 mo",
        categoryLabel: "Design",
        miniReview:
          "Product images, social ads, email graphics, and banner designs. Magic Studio generates marketing visuals from descriptions. Non-designers create professional product marketing assets.",
      },
      {
        toolSlug: "gorgias",
        label: "$10 mo+",
        categoryLabel: "Chatbot",
        miniReview:
          "AI-powered customer support built for ecommerce. Auto-responds to common questions with order-specific data. Integrates with Shopify, BigCommerce, and Magento. Stronger ecommerce-specific features than general chatbots.",
      },
      {
        toolSlug: "surfer-seo",
        label: "$89 mo",
        categoryLabel: "Marketing",
        miniReview:
          "AI SEO optimization for product pages and blog content. Analyzes what's ranking and tells you how to optimize your content. Worth it if organic search is a meaningful traffic channel for your store.",
      },
    ],
  },
  {
    slug: "students",
    name: "Free AI Tools for Students",
    titleTag: "Free AI Tools for Students (2026) — Actually Free, Actually Useful",
    metaDescription:
      "Free AI tools for students that help you learn, research, write, and study — without the bait-and-switch free trial. No credit card required.",
    intro:
      "These are genuinely free AI tools for students — no credit card traps, no 7-day trials, no \"free for 3 uses per month\" technicalities. Each one offers enough on the free tier to be useful throughout an entire semester. We prioritized tools that help you learn better, not tools that do your work for you.",
    whatToLookFor:
      "Check three things: Does it require a credit card? (Skip those.) Does the free tier have enough usage for regular academic work? (Some \"free\" tiers give you 5 uses per month — useless.) And critically: does it help you understand the material, or just produce output you can submit? The second kind will get you caught and won't help you learn.",
    picks: [
      {
        toolSlug: "chatgpt",
        label: "Free",
        categoryLabel: "Chatbot",
        miniReview:
          "The starting point. Free tier includes GPT-4o. Use for brainstorming essay angles, explaining difficult concepts, generating study questions, and outlining assignments. Don't use it to write your essays — use it to understand topics you're struggling with.",
      },
      {
        toolSlug: "perplexity",
        label: "Free",
        categoryLabel: "Research",
        miniReview:
          "AI research engine with cited sources. Ask a question, get an answer with links to where the information came from. Use it to find and understand sources quickly, then cite the original papers and articles — not Perplexity itself.",
      },
      {
        toolSlug: "grammarly",
        label: "Free",
        categoryLabel: "Writing",
        miniReview:
          "Catches grammar, spelling, and punctuation errors in real time. Works in your browser and Google Docs. The free tier handles the essentials. Run every paper through it before submitting — two minutes of cleanup that prevents embarrassing errors.",
      },
      {
        toolSlug: "wolfram-alpha",
        label: "Free",
        categoryLabel: "Research",
        miniReview:
          "Computes math, physics, chemistry, and statistics problems with step-by-step solutions. Work the problem yourself first, then check your work with Wolfram Alpha. When you get it wrong, study the steps to find where you went off track.",
      },
      {
        toolSlug: "notion",
        label: "Free tier",
        categoryLabel: "Productivity",
        miniReview:
          "AI-powered workspace for notes, tasks, and projects. Summarizes lectures, generates study guides, organizes your semester. Set up one workspace per course and use templates — 20 minutes of setup saves hours of chaos.",
      },
      {
        toolSlug: "gamma",
        label: "Free (with branding)",
        categoryLabel: "Productivity",
        miniReview:
          "AI-generated presentations. Describe your topic and key points, get a polished deck. The free tier includes Gamma branding but it's subtle. For class presentations, it saves hours of slide-building.",
      },
      {
        toolSlug: "github-copilot",
        label: "Free for students",
        categoryLabel: "Coding",
        miniReview:
          "If you're a CS student, this is free with your .edu email. Full AI code completion in VS Code. Explains code, generates functions, helps debug. The best free AI coding tool available — and it's completely free for you.",
      },
    ],
  },
  {
    slug: "make-money",
    name: "AI Tools That Actually Make Money",
    titleTag: "AI Tools That Actually Make Money (2026) — Real Methods, Realistic Income",
    metaDescription:
      "AI tools to make money — practical approaches that work in 2026 with realistic income expectations. Not \"get rich with ChatGPT\" hype.",
    intro:
      "Skip the \"make $10K/month with AI\" YouTube thumbnails. These are AI tools that help real people earn real income — by making existing skills more productive, not by replacing expertise with prompts. Every approach here requires a skill that AI amplifies. None of them work by just \"using AI.\"",
    whatToLookFor:
      "Viable AI income approaches share three traits: they amplify a real skill (not replace it), they serve a specific market willing to pay, and AI is the accelerator — not the product. If your pitch is \"I have AI,\" you don't have a business. If your pitch is \"I deliver results 3x faster because I use AI,\" you do.",
    picks: [
      {
        toolSlug: "jasper",
        label: "$49 mo",
        categoryLabel: "Writing",
        miniReview:
          "For: Freelance writers and content agencies. Produces first drafts, headlines, email sequences, and ad copy at scale. Writers using Jasper handle 3-5x more client work. The tool pays for itself with one additional client.",
        incomePotential:
          "$500-$5,000/mo freelance writing, $2,000-$10,000/mo running a content agency.",
      },
      {
        toolSlug: "midjourney",
        label: "$10 mo",
        categoryLabel: "Image Generation",
        miniReview:
          "For: Designers offering AI-enhanced design services. Generates concepts, mockups, and illustrations. Pair with Canva or Figma for polished deliverables. The market for \"type your prompt\" is dead — the market for \"complete design packages using AI as one tool\" is growing.",
        incomePotential: "$1,000-$8,000/mo for productized design services.",
      },
      {
        toolSlug: "chatgpt",
        label: "Free / $20 mo",
        categoryLabel: "Chatbot",
        miniReview:
          "For: Marketing consultants, automation specialists, and anyone selling AI-augmented services. Use as the backbone for client deliverables — strategy docs, copy, analysis, email sequences. Clients pay for your judgment and results, not word count.",
        incomePotential: "$2,000-$10,000/mo managing 3-10 marketing clients.",
      },
      {
        toolSlug: "zapier",
        label: "Free / $20 mo",
        categoryLabel: "Productivity",
        miniReview:
          "For: Automation consultants. Businesses pay $1,000-$5,000 per project to connect and automate their tools. You diagnose which workflows to automate and build them in Zapier. Retainer opportunities at $500-$2,000/mo for maintenance.",
        incomePotential:
          "$1,000-$5,000/project, recurring retainers available.",
      },
      {
        toolSlug: "descript",
        label: "Free / $24 mo",
        categoryLabel: "Video",
        miniReview:
          "For: Video editors and podcast producers. Text-based editing is dramatically faster than timeline editing. Handle more clients in less time. Filler word removal, transcription, and clip generation all automated.",
        incomePotential: "$1,000-$5,000/mo freelance editing.",
      },
      {
        toolSlug: "gamma",
        label: "Free",
        categoryLabel: "Productivity",
        miniReview:
          "For: Presentation designers and consultants. Create pitch decks, sales presentations, and training materials. AI generates the structure; you add the strategy and polish. Charge per deck or monthly retainer.",
        incomePotential:
          "$500-$3,000/mo for presentation design services.",
      },
    ],
  },
  {
    slug: "real-estate",
    name: "AI Tools for Real Estate Agents",
    titleTag: "AI Tools for Real Estate Agents (2026) — What's Worth Paying For",
    metaDescription:
      "AI tools for real estate agents that actually justify the subscription — virtual staging, lead follow-up, listing copy, and market analysis. Tested picks.",
    intro:
      "Real estate agents get pitched a new AI subscription every week. Most of them do what ChatGPT does for free with a real estate skin slapped on top. These are the tools that genuinely earn their price tag — because they save you time, close more deals, or eliminate costs that used to be unavoidable.\n\nWe focused on tools under $100/month that work for individual agents and small teams, not enterprise brokerages.",
    whatToLookFor:
      "The best AI tools for real estate integrate with your existing MLS, CRM, and marketing workflow. If a tool requires you to copy-paste data between platforms, it's adding work — not removing it. Prioritize tools with direct CRM integrations and mobile access, since agents live on their phones.",
    picks: [
      {
        toolSlug: "chatgpt",
        label: "Free / $20 mo",
        categoryLabel: "Writing",
        miniReview:
          "Write listing descriptions in 2 minutes instead of 20. Paste property details, get polished copy. Also handles email responses, social posts, and neighborhood descriptions. The free tier covers most agents' needs.",
      },
      {
        toolSlug: "virtual-staging-ai",
        label: "$15-40/photo",
        categoryLabel: "Image Generation",
        miniReview:
          "Turn empty rooms into furnished, styled spaces for listing photos. Saves $2,000-5,000 per property vs. physical staging. Best results on empty rooms — occupied spaces still confuse the AI.",
      },
      {
        toolSlug: "canva",
        label: "Free / $13 mo",
        categoryLabel: "Design",
        miniReview:
          "Property flyers, social media posts, open house materials, and just-sold announcements. Templates sized for every platform. Magic Studio generates visuals from descriptions.",
      },
      {
        toolSlug: "flick",
        label: "$14 mo",
        categoryLabel: "Marketing",
        miniReview:
          "Schedule a month of real estate social content in 2 hours. AI generates caption ideas, suggests hashtags, and handles posting across Instagram, Facebook, LinkedIn, and TikTok.",
      },
      {
        toolSlug: "tidio",
        label: "Free / $25 mo",
        categoryLabel: "Chatbot",
        miniReview:
          "Website chatbot that answers property questions, captures leads, and books showing appointments 24/7. Handles the initial inquiry while you're in a showing or asleep.",
      },
    ],
  },
  {
    slug: "presentations",
    name: "Best AI Presentation Tools",
    titleTag: "Best AI Presentation Tools (2026) — Skip the Slide Grind",
    metaDescription:
      "AI presentation tools that skip the slide grind — generate, design, and deliver decks in minutes. Compared honestly across use cases.",
    intro:
      "Making slides is nobody's favorite task. AI presentation tools promise to eliminate the formatting, layout, and design busywork so you focus on what you're actually saying. Some deliver on that promise. We tested them with real business presentations — not the \"3 slides about dogs\" demos.",
    whatToLookFor:
      "The best presentation tools get out of your way. Look for: how fast you go from idea to usable deck, how much the generated structure matches how people actually present (not just bullet points), and whether the output works in your context (corporate, creative, educational). Also check export options — if you can't get it into PowerPoint or PDF, it's a walled garden.",
    picks: [
      {
        toolSlug: "gamma",
        label: "Free (with branding) / Paid",
        categoryLabel: "Productivity",
        miniReview:
          "Best all-around option. Describe your topic and key points, get a full deck with smart layouts and visual hierarchy. Free tier is generous — unlimited presentations with subtle branding. Works for internal decks, pitches, and educational content.",
      },
      {
        toolSlug: "beautiful-ai",
        label: "$12 mo / $40 mo teams",
        categoryLabel: "Design",
        miniReview:
          "Smart formatting that makes ugly slides impossible. Every edit auto-adjusts layout and spacing. Best for corporate teams where consistency matters more than creative freedom.",
      },
      {
        toolSlug: "tome",
        label: "Free tier / $16 mo",
        categoryLabel: "Productivity",
        miniReview:
          "Narrative-style presentations that go beyond traditional slides. Mixed media, AI-generated visuals, interactive layouts. Best for creative pitches and portfolios where standing out matters.",
      },
      {
        toolSlug: "slidebean",
        label: "$29 mo",
        categoryLabel: "Productivity",
        miniReview:
          "Built specifically for pitch decks. Templates based on successful investor presentations. AI coaches you on structure and what information to include. Best for founders raising funding.",
      },
      {
        toolSlug: "chatgpt",
        label: "Free",
        categoryLabel: "Chatbot",
        miniReview:
          "The free hack: use ChatGPT to generate your outline and slide content, then paste into Google Slides with your template. More manual but $0 and works with any template you already have.",
      },
    ],
  },
  {
    slug: "developers",
    name: "Best AI Tools for Developers",
    titleTag: "Best AI Tools for Developers (2026) — Tested on Real Codebases",
    metaDescription:
      "AI coding tools for developers tested on real projects — IDE assistants, code generation, debugging, testing, and documentation. What helps vs. what's hype.",
    intro:
      "The AI coding tool landscape changes monthly. New tools launch, existing ones improve dramatically, and yesterday's leader becomes today's second choice. These are the tools developers are actually using in production work in 2026 — not demo-ware that only works on toy examples.\n\nWe tested everything on real codebases with real complexity. Simple autocomplete demos don't count.",
    whatToLookFor:
      "Integration trumps raw capability. The best AI coding tool is the one that fits into your existing workflow without friction. Check: does it work in your IDE, with your language, on your project size? A tool that's 10% smarter but requires you to switch editors isn't worth it. Also check latency — a suggestion that arrives 3 seconds late is worse than no suggestion.",
    picks: [
      {
        toolSlug: "github-copilot",
        label: "Free (students/OSS) / $10 mo",
        categoryLabel: "Coding",
        miniReview:
          "The default. Real-time code suggestions in your editor, chat-based coding, test generation, bug fixes. Strongest on boilerplate and patterns. Non-negotiable for professional developers — the productivity gain on repetitive tasks justifies the cost immediately.",
      },
      {
        toolSlug: "cursor",
        label: "Free tier / $20 mo",
        categoryLabel: "Coding",
        miniReview:
          "VS Code fork with the deepest AI integration available. Multi-file editing from natural language, codebase-aware suggestions, and project-level context. The killer feature: \"refactor this component and update every import\" — done in seconds.",
      },
      {
        toolSlug: "claude-code",
        label: "API / Pro subscription",
        categoryLabel: "Coding",
        miniReview:
          "Command-line coding agent. Reads your codebase, makes multi-file changes, runs tests, iterates until things work. Different from Copilot/Cursor — more autonomous, best for clearly-defined tasks across many files.",
      },
      {
        toolSlug: "claude",
        label: "Free / $20 mo",
        categoryLabel: "Chatbot",
        miniReview:
          "For debugging: paste error + stack trace + relevant code, get explanation and fix. Claude handles larger code pastes (200K context). ChatGPT has broader framework coverage. Most developers use both.",
      },
      {
        toolSlug: "qodo",
        label: "Free tier",
        categoryLabel: "Coding",
        miniReview:
          "AI test generation. Analyzes your functions and produces edge cases you didn't think of. Generated tests are 60-70% usable as-is. The real value is the edge cases it surfaces.",
      },
      {
        toolSlug: "mintlify",
        label: "Free (OSS) / Paid",
        categoryLabel: "Productivity",
        miniReview:
          "Generates and maintains documentation from your codebase. Having a draft is infinitely better than a blank page. Free for open source projects.",
      },
    ],
  },
  {
    slug: "freelancers",
    name: "AI Tools for Freelancers",
    titleTag: "AI Tools for Freelancers (2026) — Do More Work, Hire Nobody",
    metaDescription:
      "AI tools for freelancers that let you handle more clients without hiring. Writing, design, invoicing, project management, and client communication — all amplified.",
    intro:
      "Freelancing is a one-person business with ten-person demands. You're the writer, designer, accountant, project manager, and customer support — simultaneously. AI tools don't replace any of those roles, but they make each one take half the time. The result: more clients, better work, same hours.\n\nThese picks are specifically for solopreneurs and freelancers billing under $20K/month. No enterprise tools masquerading as \"freelancer-friendly.\"",
    whatToLookFor:
      "Freelancers need tools that are cheap, fast to learn, and immediately productive. Skip anything with a \"contact sales\" page or a 2-week onboarding. The best freelancer AI tools pay for themselves with the first project you complete faster. Calculate: hours saved × your hourly rate > subscription cost? Keep it. Otherwise, cancel.",
    picks: [
      {
        toolSlug: "chatgpt",
        label: "Free / $20 mo",
        categoryLabel: "Chatbot",
        miniReview:
          "Your all-purpose assistant. Draft client emails, write proposals, brainstorm project approaches, summarize meeting notes, generate invoices. Start every new project by briefing ChatGPT on the client and scope — it becomes a project-specific assistant.",
      },
      {
        toolSlug: "jasper",
        label: "$49 mo",
        categoryLabel: "Writing",
        miniReview:
          "For freelance writers and content creators specifically. Brand voice training means you can write in different client voices without losing quality. Content Pipelines automate the brainstorming-to-draft workflow. Worth it if you write for 3+ clients.",
      },
      {
        toolSlug: "canva",
        label: "Free / $13 mo",
        categoryLabel: "Design",
        miniReview:
          "Every freelancer needs graphics — proposals, social content, presentations, deliverables. Non-designers produce professional results. Brand Kit feature lets you store multiple client brand assets and switch between them.",
      },
      {
        toolSlug: "grammarly",
        label: "Free / $12 mo",
        categoryLabel: "Writing",
        miniReview:
          "Professional communication matters more when you're solo — there's no team to catch your typos. Free tier handles grammar and spelling. Every client email, proposal, and deliverable runs through Grammarly before sending.",
      },
      {
        toolSlug: "zapier",
        label: "Free / $20 mo",
        categoryLabel: "Productivity",
        miniReview:
          "Automate the admin that eats your billable hours. New client form → CRM entry → welcome email → project folder creation. Invoice sent → follow-up reminder scheduled. The 2 hours of setup saves 5+ hours per month.",
      },
      {
        toolSlug: "otter",
        label: "Free (300 min/mo)",
        categoryLabel: "Productivity",
        miniReview:
          "AI meeting transcription and notes. Record client calls, get searchable transcripts with action items extracted. Free tier covers most freelancers — 300 minutes is about 10 hour-long client meetings per month.",
      },
      {
        toolSlug: "descript",
        label: "Free / $24 mo",
        categoryLabel: "Video",
        miniReview:
          "For freelance video editors, podcasters, and content producers. Text-based editing cuts production time in half. Filler word removal, transcription, and clip generation all automated. Handle more client projects without working more hours.",
      },
    ],
  },
  {
    slug: "design-tools",
    name: "Best AI Design Tools",
    titleTag: "Best AI Design Tools (2026) — For Designers and Everyone Else",
    metaDescription:
      "AI design tools for actual designers and non-designers alike — image generation, graphic design, UI/UX, photo editing, and brand automation. Honest picks.",
    intro:
      "AI design tools split into two camps: tools that help designers work faster, and tools that help non-designers produce passable work. Both are valid. A startup founder making their own social graphics has different needs than a senior designer generating concept variations. We picked tools for both.",
    whatToLookFor:
      "For designers: Does it accelerate your workflow without flattening your style? The worst AI design tools produce homogeneous output that screams \"AI-generated.\" The best ones give you a starting point that's genuinely useful to riff on. For non-designers: Can you produce something professional in under 10 minutes? If you need a YouTube tutorial to use it, it's not solving your problem.",
    picks: [
      {
        toolSlug: "midjourney",
        label: "$10 mo+",
        categoryLabel: "Image Generation",
        miniReview:
          "The quality benchmark for AI image generation. Produces the most aesthetically polished results across styles — photorealistic, illustrative, abstract, concept art. Essential for designers generating concepts, mood boards, and visual exploration.",
      },
      {
        toolSlug: "leonardo",
        label: "Free (150 gens/mo) / Paid",
        categoryLabel: "Image Generation",
        miniReview:
          "Best free tier in AI image generation. Consistent quality, multiple model options, commercial usage allowed. For non-designers who need regular images, this is the starting point — generous free tier, no watermarks.",
      },
      {
        toolSlug: "canva",
        label: "Free / $13 mo",
        categoryLabel: "Design",
        miniReview:
          "The non-designer's best friend. AI generates designs, removes backgrounds, resizes for every platform, and maintains brand consistency. Professional designers may find it limiting; everyone else finds it liberating.",
      },
      {
        toolSlug: "figma",
        label: "Free / $15 mo",
        categoryLabel: "Design",
        miniReview:
          "For UI/UX designers: AI-assisted auto layout, component suggestions, and design system management. Figma's AI features enhance an already-essential tool. The integration matters more than the AI capability — it's where you already work.",
      },
      {
        toolSlug: "ideogram",
        label: "Free (10/week) / Paid",
        categoryLabel: "Image Generation",
        miniReview:
          "The only AI image generator that handles text reliably. Logos, posters, social graphics with headlines — if your design needs readable text, Ideogram is the only tool that won't butcher the typography.",
      },
      {
        toolSlug: "photoroom",
        label: "Free tier / Paid",
        categoryLabel: "Image Generation",
        miniReview:
          "One-click background removal and photo editing. Essential for product photography, profile pictures, and any image where you need a clean subject on a new background. Saves hours of Photoshop masking.",
      },
      {
        toolSlug: "adobe-firefly",
        label: "Included with Creative Cloud",
        categoryLabel: "Image Generation",
        miniReview:
          "For Adobe users: AI generation and editing inside Photoshop, Illustrator, and Express. Generative fill, expand, and text-to-image — all within tools you already use. The integration advantage is significant if you're in the Adobe ecosystem.",
      },
    ],
  },
];

/** Helper: resolve tool slugs to Tool objects for a collection */
export function getCollectionTools(collection: Collection): (Tool | undefined)[] {
  return collection.picks.map((p) => tools.find((t) => t.slug === p.toolSlug));
}
