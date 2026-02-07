export interface Tool {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  category: string;
  pricing: string;
  pricingDetails: string;
  url: string;
  featured: boolean;
  rating: number;
  pros: string[];
  cons: string[];
  features: string[];
  tags: string[];
  dateAdded?: string;
}

export const tools: Tool[] = [
  // Placeholder tools - will be replaced by ANL's medical AI research
  {
    slug: "placeholder-clinical",
    name: "Placeholder Clinical AI",
    description: "Placeholder tool for clinical decision support category. Will be replaced with real medical AI tools.",
    longDescription: "This is a placeholder tool that will be replaced with real medical AI tools from ANL's research. The structure is ready for seeding.",
    category: "clinical-decision-support",
    pricing: "Coming Soon",
    pricingDetails: "Pricing details will be added when real tools are seeded.",
    url: "https://example.com",
    featured: false,
    rating: 0,
    pros: ["Placeholder"],
    cons: ["Not a real tool yet"],
    features: ["Placeholder feature"],
    tags: ["placeholder"],
    dateAdded: "2026-02-06",
  },
  {
    slug: "placeholder-diagnostics",
    name: "Placeholder Diagnostics AI",
    description: "Placeholder tool for diagnostics category. Will be replaced with real medical AI tools.",
    longDescription: "This is a placeholder tool that will be replaced with real medical AI tools from ANL's research. The structure is ready for seeding.",
    category: "diagnostics",
    pricing: "Coming Soon",
    pricingDetails: "Pricing details will be added when real tools are seeded.",
    url: "https://example.com",
    featured: false,
    rating: 0,
    pros: ["Placeholder"],
    cons: ["Not a real tool yet"],
    features: ["Placeholder feature"],
    tags: ["placeholder"],
    dateAdded: "2026-02-06",
  },
];
