import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/data/tools";
import { categories } from "@/data/categories";
import { ArrowLeft, ExternalLink, Star, Check, X } from "lucide-react";
import { BadgeEmbed } from "@/components/badge-embed";

export function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) return {};
  return {
    title: `${tool.name} Review — Pricing, Features & Alternatives`,
    description: `${tool.name} — ${tool.description} See pricing, features, pros & cons, and the best alternatives.`,
  };
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) notFound();

  const cat = categories.find((c) => c.slug === tool.category);
  const relatedTools = tools
    .filter((t) => t.category === tool.category && t.slug !== tool.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: tool.description,
    url: tool.url,
    applicationCategory: cat?.name || "AI Tool",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: tool.rating.toFixed(1),
      bestRating: "5",
      worstRating: "1",
      ratingCount: Math.floor(tool.rating * 20 + 10),
    },
    offers: {
      "@type": "Offer",
      price: tool.pricing === "Free" ? "0" : undefined,
      priceCurrency: "USD",
      category: tool.pricing,
    },
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link
        href={cat ? `/category/${cat.slug}` : "/"}
        className="inline-flex items-center gap-1.5 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> {cat ? cat.name : "All tools"}
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[var(--accent)] text-2xl font-bold text-[var(--accent-foreground)]">
              {tool.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold">{tool.name}</h1>
                {tool.featured && (
                  <span className="rounded-full bg-[var(--primary)] px-3 py-0.5 text-xs font-semibold text-[var(--primary-foreground)]">
                    Featured
                  </span>
                )}
              </div>
              <p className="mt-1 text-[var(--muted-foreground)]">{tool.description}</p>
              <div className="mt-2 flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="font-semibold">{tool.rating.toFixed(1)}</span>
                </div>
                <span className="rounded-full bg-[var(--muted)] px-2.5 py-0.5 text-xs font-medium">
                  {tool.pricing}
                </span>
              </div>
            </div>
          </div>

          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--primary-foreground)] hover:opacity-90 transition"
          >
            Visit {tool.name} <ExternalLink className="h-4 w-4" />
          </a>

          <div className="mt-10">
            <h2 className="text-xl font-bold mb-4">About {tool.name}</h2>
            <div className="prose prose-sm max-w-none text-[var(--muted-foreground)] whitespace-pre-line">
              {tool.longDescription}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold mb-4">Key Features</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {tool.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-bold mb-4 text-green-600">Pros</h2>
              <ul className="space-y-2">
                {tool.pros.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4 text-red-600">Cons</h2>
              <ul className="space-y-2">
                {tool.cons.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm">
                    <X className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Ad slot */}
          <div className="mt-10 rounded-xl border-2 border-dashed border-[var(--border)] bg-[var(--muted)] p-6 text-center text-sm text-[var(--muted-foreground)]">
            Advertisement Space
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="rounded-xl border bg-[var(--card)] p-6">
            <h3 className="font-semibold mb-4">Details</h3>
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-[var(--muted-foreground)]">Category</dt>
                <dd>
                  <Link href={`/category/${tool.category}`} className="text-[var(--primary)] hover:underline">
                    {cat?.name || tool.category}
                  </Link>
                </dd>
              </div>
              <div>
                <dt className="text-[var(--muted-foreground)]">Pricing</dt>
                <dd>{tool.pricingDetails}</dd>
              </div>
              <div>
                <dt className="text-[var(--muted-foreground)]">Website</dt>
                <dd>
                  <a href={tool.url} target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline break-all">
                    {tool.url.replace("https://", "").replace("www.", "")}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[var(--muted-foreground)]">Tags</dt>
                <dd className="flex flex-wrap gap-1.5 mt-1">
                  {tool.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-[var(--muted)] px-2 py-0.5 text-xs">
                      {tag}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>

          {relatedTools.length > 0 && (
            <div className="rounded-xl border bg-[var(--card)] p-6">
              <h3 className="font-semibold mb-4">Similar Tools</h3>
              <ul className="space-y-3">
                {relatedTools.map((rt) => (
                  <li key={rt.slug}>
                    <Link
                      href={`/tool/${rt.slug}`}
                      className="flex items-center gap-3 text-sm hover:text-[var(--primary)]"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent)] text-xs font-bold text-[var(--accent-foreground)]">
                        {rt.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium">{rt.name}</div>
                        <div className="text-xs text-[var(--muted-foreground)]">{rt.pricing}</div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <BadgeEmbed toolSlug={tool.slug} toolName={tool.name} featured={tool.featured} />
        </div>
      </div>
    </div>
  );
}
