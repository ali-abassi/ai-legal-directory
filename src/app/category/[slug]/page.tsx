import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { categories } from "@/data/categories";
import { tools } from "@/data/tools";
import { ToolCard } from "@/components/tool-card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return {};
  const count = tools.filter((t) => t.category === cat.slug).length;
  return {
    title: `Best ${cat.name} (2026) — Compared & Reviewed`,
    description: `Find the top AI tools for ${cat.name.toLowerCase().replace("ai ", "")}. Compare ${count}+ tools by features, pricing, and user reviews. Updated weekly.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) notFound();

  const categoryTools = tools
    .filter((t) => t.category === cat.slug)
    .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || b.rating - a.rating);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> All categories
      </Link>

      <div className="flex items-center gap-3 mb-2">
        <span className="text-4xl">{cat.icon}</span>
        <h1 className="text-3xl font-bold">{cat.name}</h1>
      </div>
      <p className="text-[var(--muted-foreground)] max-w-3xl mt-2">{cat.description}</p>
      {cat.whatToLookFor && (
        <div className="mt-4 rounded-lg bg-[var(--accent)] p-4 text-sm max-w-3xl">
          <span className="font-semibold text-[var(--accent-foreground)]">What to look for: </span>
          <span className="text-[var(--accent-foreground)]/80">{cat.whatToLookFor}</span>
        </div>
      )}

      <div className="mt-4 text-sm text-[var(--muted-foreground)]">
        {categoryTools.length} tool{categoryTools.length !== 1 ? "s" : ""} in this category
      </div>

      {/* Ad slot */}
      <div className="mt-8 rounded-xl border-2 border-dashed border-[var(--border)] bg-[var(--muted)] p-6 text-center text-sm text-[var(--muted-foreground)]">
        Advertisement Space
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categoryTools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </div>
  );
}
