import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Star, DollarSign } from "lucide-react";
import { collections } from "@/data/collections";
import { tools } from "@/data/tools";

export const dynamicParams = false;

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = collections.find((c) => c.slug === slug);
  if (!collection) return {};
  return {
    title: collection.titleTag,
    description: collection.metaDescription,
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = collections.find((c) => c.slug === slug);
  if (!collection) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> All tools
      </Link>

      <h1 className="text-3xl font-bold">{collection.name}</h1>

      <div className="mt-6 text-[var(--muted-foreground)] leading-relaxed whitespace-pre-line">
        {collection.intro}
      </div>

      <div className="mt-6 rounded-lg bg-[var(--accent)] p-4 text-sm">
        <span className="font-semibold text-[var(--accent-foreground)]">What to look for: </span>
        <span className="text-[var(--accent-foreground)]/80">{collection.whatToLookFor}</span>
      </div>

      {/* Ad slot */}
      <div className="mt-8 rounded-xl border-2 border-dashed border-[var(--border)] bg-[var(--muted)] p-6 text-center text-sm text-[var(--muted-foreground)]">
        Advertisement Space
      </div>

      {/* Curated picks */}
      <div className="mt-10 space-y-6">
        <h2 className="text-xl font-bold">Our Picks</h2>
        {collection.picks.map((pick) => {
          const tool = tools.find((t) => t.slug === pick.toolSlug);
          return (
            <div
              key={pick.toolSlug}
              className="rounded-xl border bg-[var(--card)] p-6 transition-all hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--accent)] text-lg font-bold text-[var(--accent-foreground)]">
                    {tool ? tool.name.charAt(0) : "?"}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      {tool ? tool.name : pick.toolSlug}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
                      <span>{pick.label}</span>
                      <span>·</span>
                      <span>{pick.categoryLabel}</span>
                      {tool && (
                        <>
                          <span>·</span>
                          <span className="flex items-center gap-0.5">
                            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                            {tool.rating.toFixed(1)}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <span className="rounded-full bg-[var(--muted)] px-2.5 py-1 text-xs font-medium text-[var(--muted-foreground)]">
                  {pick.label.split("/")[0].trim()}
                </span>
              </div>

              <p className="mt-3 text-sm text-[var(--muted-foreground)] leading-relaxed">
                {pick.miniReview}
              </p>

              {pick.incomePotential && (
                <div className="mt-3 flex items-center gap-2 rounded-lg bg-green-500/10 px-3 py-2 text-sm">
                  <DollarSign className="h-4 w-4 text-green-600 shrink-0" />
                  <span className="text-green-700 dark:text-green-400 font-medium">
                    Income potential: {pick.incomePotential}
                  </span>
                </div>
              )}

              {tool && (
                <Link
                  href={`/tool/${tool.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--primary)] hover:underline"
                >
                  View in directory <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 rounded-xl border bg-[var(--muted)] p-8 text-center">
        <h2 className="text-xl font-bold">Know a tool we should include?</h2>
        <p className="mt-2 text-sm text-[var(--muted-foreground)]">
          We add new tools every day. Submit yours and reach people actively searching.
        </p>
        <Link
          href="/submit"
          className="mt-4 inline-block rounded-full bg-[var(--primary)] px-6 py-2.5 text-sm font-semibold text-[var(--primary-foreground)] hover:opacity-90 transition"
        >
          Submit a Tool — Free
        </Link>
      </div>
    </div>
  );
}
