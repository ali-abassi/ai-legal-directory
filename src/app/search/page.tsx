"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { tools } from "@/data/tools";
import { categories } from "@/data/categories";
import { ToolCard } from "@/components/tool-card";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPricing, setSelectedPricing] = useState("");
  const [sortBy, setSortBy] = useState<"rating" | "name">("rating");

  const filtered = useMemo(() => {
    let result = tools;

    if (query) {
      const q = query.toLowerCase();
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.tags.some((tag) => tag.toLowerCase().includes(q)) ||
          t.features.some((f) => f.toLowerCase().includes(q))
      );
    }

    if (selectedCategory) {
      result = result.filter((t) => t.category === selectedCategory);
    }

    if (selectedPricing) {
      result = result.filter((t) => t.pricing === selectedPricing);
    }

    result = [...result].sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      return a.name.localeCompare(b.name);
    });

    return result;
  }, [query, selectedCategory, selectedPricing, sortBy]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Search AI Tools</h1>
      <p className="mt-2 text-[var(--muted-foreground)]">
        Find the perfect AI tool for your needs
      </p>

      {/* Search bar */}
      <div className="mt-8 relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--muted-foreground)]" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name, description, or feature..."
          className="w-full rounded-xl border bg-[var(--card)] pl-12 pr-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
        />
      </div>

      {/* Filters */}
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <SlidersHorizontal className="h-4 w-4 text-[var(--muted-foreground)]" />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="rounded-lg border bg-[var(--background)] px-3 py-2 text-sm"
        >
          <option value="">All Categories</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.name}
            </option>
          ))}
        </select>
        <select
          value={selectedPricing}
          onChange={(e) => setSelectedPricing(e.target.value)}
          className="rounded-lg border bg-[var(--background)] px-3 py-2 text-sm"
        >
          <option value="">All Pricing</option>
          <option value="Free">Free</option>
          <option value="Freemium">Freemium</option>
          <option value="Paid">Paid</option>
          <option value="Free Trial">Free Trial</option>
        </select>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as "rating" | "name")}
          className="rounded-lg border bg-[var(--background)] px-3 py-2 text-sm"
        >
          <option value="rating">Sort by Rating</option>
          <option value="name">Sort by Name</option>
        </select>
      </div>

      {/* Results */}
      <div className="mt-6 text-sm text-[var(--muted-foreground)]">
        {filtered.length} tool{filtered.length !== 1 ? "s" : ""} found
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-16 text-center">
          <p className="text-lg font-medium">No tools found</p>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">
            Try adjusting your search or filters
          </p>
        </div>
      )}
    </div>
  );
}
