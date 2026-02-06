import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { tools } from "@/data/tools";
import { ToolCard } from "@/components/tool-card";

export const metadata: Metadata = {
  title: "New AI Tools This Week — Latest Additions to Our Directory",
  description:
    "Discover the newest AI tools added to our directory. Updated weekly with the latest launches across writing, coding, design, and more.",
};

export default function NewToolsPage() {
  // Tools with dateAdded are new additions; sort newest first, then by rating
  const newTools = tools
    .filter((t) => "dateAdded" in t && (t as { dateAdded: string }).dateAdded)
    .sort((a, b) => b.rating - a.rating);

  // If no tools have dateAdded yet, show the most recently added (last in array)
  const displayTools = newTools.length > 0 ? newTools : tools.slice(-20);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> Home
      </Link>

      <div className="flex items-center gap-3 mb-2">
        <Clock className="h-8 w-8 text-[var(--primary)]" />
        <h1 className="text-3xl font-bold">New AI Tools</h1>
      </div>
      <p className="text-[var(--muted-foreground)] max-w-3xl mt-2">
        The latest AI tools added to our directory. We add new tools every week — bookmark this
        page to stay on top of what&apos;s launching.
      </p>

      <div className="mt-4 text-sm text-[var(--muted-foreground)]">
        {displayTools.length} new tool{displayTools.length !== 1 ? "s" : ""}
      </div>

      {/* Ad slot */}
      <div className="mt-8 rounded-xl border-2 border-dashed border-[var(--border)] bg-[var(--muted)] p-6 text-center text-sm text-[var(--muted-foreground)]">
        Advertisement Space
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {displayTools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>

      <div className="mt-12 rounded-xl border bg-[var(--muted)] p-6 text-center">
        <p className="font-semibold">Built something new?</p>
        <p className="mt-1 text-sm text-[var(--muted-foreground)]">
          Submit your AI tool and get listed in our directory.
        </p>
        <Link
          href="/submit"
          className="mt-3 inline-flex rounded-full bg-[var(--primary)] px-5 py-2 text-sm font-semibold text-[var(--primary-foreground)] hover:opacity-90 transition"
        >
          Submit Your Tool
        </Link>
      </div>
    </div>
  );
}
