import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Gift } from "lucide-react";
import { tools } from "@/data/tools";
import { categories } from "@/data/categories";
import { ToolCard } from "@/components/tool-card";

export const metadata: Metadata = {
  title: "Free AI Tools — Best Free & Freemium AI Tools (2026)",
  description:
    "Discover the best free AI tools across every category. No credit card required. Compare free and freemium AI tools for writing, coding, design, and more.",
};

export default function FreeToolsPage() {
  const freeTools = tools
    .filter((t) => t.pricing === "Free" || t.pricing === "Freemium")
    .sort((a, b) => b.rating - a.rating);

  // Group by category for navigation
  const categoryGroups = categories
    .map((cat) => ({
      ...cat,
      tools: freeTools.filter((t) => t.category === cat.slug),
    }))
    .filter((g) => g.tools.length > 0);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> Home
      </Link>

      <div className="flex items-center gap-3 mb-2">
        <Gift className="h-8 w-8 text-[var(--primary)]" />
        <h1 className="text-3xl font-bold">Free AI Tools</h1>
      </div>
      <p className="text-[var(--muted-foreground)] max-w-3xl mt-2">
        The best AI tools you can use without paying. Includes completely free tools and freemium
        tools with generous free tiers. No credit card required to get started.
      </p>

      <div className="mt-4 text-sm text-[var(--muted-foreground)]">
        {freeTools.length} free tool{freeTools.length !== 1 ? "s" : ""} across{" "}
        {categoryGroups.length} categories
      </div>

      {/* Quick nav */}
      <div className="mt-6 flex flex-wrap gap-2">
        {categoryGroups.map((g) => (
          <a
            key={g.slug}
            href={`#${g.slug}`}
            className="rounded-full border px-3 py-1 text-xs font-medium hover:bg-[var(--muted)] transition"
          >
            {g.icon} {g.name.replace("AI ", "").replace(" Tools", "")} ({g.tools.length})
          </a>
        ))}
      </div>

      {/* Ad slot */}
      <div className="mt-8 rounded-xl border-2 border-dashed border-[var(--border)] bg-[var(--muted)] p-6 text-center text-sm text-[var(--muted-foreground)]">
        Advertisement Space
      </div>

      {/* Tools by category */}
      {categoryGroups.map((g) => (
        <section key={g.slug} id={g.slug} className="mt-12">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span>{g.icon}</span> Free {g.name}
          </h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {g.tools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </section>
      ))}

      <div className="mt-12 rounded-xl border bg-[var(--muted)] p-6 text-center">
        <p className="font-semibold">Know a free AI tool we&apos;re missing?</p>
        <p className="mt-1 text-sm text-[var(--muted-foreground)]">
          Help us build the most complete free AI tools list.
        </p>
        <Link
          href="/submit"
          className="mt-3 inline-flex rounded-full bg-[var(--primary)] px-5 py-2 text-sm font-semibold text-[var(--primary-foreground)] hover:opacity-90 transition"
        >
          Submit a Free Tool
        </Link>
      </div>
    </div>
  );
}
