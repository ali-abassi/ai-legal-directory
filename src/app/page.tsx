import Link from "next/link";
import { Search, ArrowRight, Sparkles, RefreshCw, Shield } from "lucide-react";
import { tools } from "@/data/tools";
import { categories } from "@/data/categories";
import { ToolCard } from "@/components/tool-card";

export default function HomePage() {
  const featuredTools = tools.filter((t) => t.featured).slice(0, 6);
  const totalTools = tools.length;
  const totalCategories = categories.length;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-[var(--accent)]/50 to-[var(--background)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Every AI tool.{" "}
            <span className="text-[var(--primary)]">One search.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--muted-foreground)]">
            Stop wasting afternoons testing AI tools that don&apos;t deliver. We catalog,
            categorize, and honestly review thousands of AI tools so you find the
            right one in seconds — not days.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/search"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--primary-foreground)] shadow-lg hover:opacity-90 transition"
            >
              <Search className="h-4 w-4" /> Browse Tools
            </Link>
            <Link
              href="/submit"
              className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold hover:bg-[var(--muted)] transition"
            >
              Submit Your Tool <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 flex items-center justify-center gap-8 text-sm text-[var(--muted-foreground)]">
            <span className="font-semibold text-[var(--foreground)]">{totalTools}+</span> tools listed
            <span className="text-[var(--border)]">|</span>
            <span className="font-semibold text-[var(--foreground)]">{totalCategories}</span> categories
            <span className="text-[var(--border)]">|</span>
            Updated <span className="font-semibold text-[var(--foreground)]">daily</span>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-xl border bg-[var(--card)] p-6">
            <Sparkles className="h-8 w-8 text-[var(--primary)]" />
            <h3 className="mt-4 font-semibold text-lg">Search by what you actually need</h3>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">
              Not another alphabetical dump. Tell us the job — writing, coding, design, data — and
              we surface the tools that actually do it well. Filter by price, rating, and use case.
            </p>
          </div>
          <div className="rounded-xl border bg-[var(--card)] p-6">
            <RefreshCw className="h-8 w-8 text-[var(--primary)]" />
            <h3 className="mt-4 font-semibold text-lg">Updated daily, not annually</h3>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">
              AI moves fast. Tools launch, pivot, and die weekly. Our directory tracks it all so
              you&apos;re never recommending something that sunset three months ago.
            </p>
          </div>
          <div className="rounded-xl border bg-[var(--card)] p-6">
            <Shield className="h-8 w-8 text-[var(--primary)]" />
            <h3 className="mt-4 font-semibold text-lg">Real reviews, not paid placements</h3>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">
              Every featured tool is tested. We don&apos;t sell top spots. What you see is what
              performs. Sponsored listings are clearly labeled — always.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 border-t">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Featured Tools</h2>
          <Link
            href="/search"
            className="text-sm font-medium text-[var(--primary)] hover:underline flex items-center gap-1"
          >
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      {/* Categories Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 border-t">
        <h2 className="text-2xl font-bold mb-8">Browse by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((cat) => {
            const count = tools.filter((t) => t.category === cat.slug).length;
            return (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="flex flex-col items-center gap-2 rounded-xl border bg-[var(--card)] p-5 text-center hover:shadow-md hover:border-[var(--primary)]/30 transition-all"
              >
                <span className="text-3xl">{cat.icon}</span>
                <span className="font-medium text-sm">{cat.name.replace("AI ", "").replace(" Tools", "")}</span>
                <span className="text-xs text-[var(--muted-foreground)]">{count} tools</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Social Proof */}
      <section className="border-t bg-[var(--muted)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="text-[var(--muted-foreground)]">
            Trusted by developers, marketers, and founders finding their next AI tool.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold">Can&apos;t find what you need?</h2>
        <p className="mt-3 text-[var(--muted-foreground)]">
          We add new tools every day. Tell us what you&apos;re looking for and we&apos;ll point you
          in the right direction.
        </p>
        <Link
          href="/submit"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--primary-foreground)] shadow-lg hover:opacity-90 transition"
        >
          Request a Tool
        </Link>
      </section>

      {/* Ad slot placeholder */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 border-t">
        <div className="rounded-xl border-2 border-dashed border-[var(--border)] bg-[var(--muted)] p-8 text-center text-sm text-[var(--muted-foreground)]">
          Advertisement Space
        </div>
      </div>
    </>
  );
}
