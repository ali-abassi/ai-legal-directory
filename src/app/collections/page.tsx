import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { collections } from "@/data/collections";

export const metadata: Metadata = {
  title: "AI Tool Collections — Curated Lists for Every Use Case",
  description:
    "Curated collections of the best AI tools for specific needs — small business, students, ecommerce, developers, and more. Hand-picked and honestly reviewed.",
};

export default function CollectionsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Collections</h1>
      <p className="mt-2 text-[var(--muted-foreground)] max-w-2xl">
        Curated lists of the best AI tools for specific needs. Each collection is
        hand-picked based on real testing — not affiliate deals.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {collections.map((c) => (
          <Link
            key={c.slug}
            href={`/collection/${c.slug}`}
            className="group rounded-xl border bg-[var(--card)] p-6 transition-all hover:shadow-lg hover:border-[var(--primary)]/30"
          >
            <h2 className="font-semibold text-lg group-hover:text-[var(--primary)] transition-colors">
              {c.name}
            </h2>
            <p className="mt-2 text-sm text-[var(--muted-foreground)] line-clamp-3">
              {c.metaDescription}
            </p>
            <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[var(--primary)]">
              {c.picks.length} tools picked
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
