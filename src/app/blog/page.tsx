import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — AI Legal Tools Directory",
  description:
    "Guides, comparisons, and insights on legal AI tools. Updated with practical advice for lawyers and legal professionals.",
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Blog</h1>
      <p className="mt-2 text-[var(--muted-foreground)]">
        Guides, comparisons, and insights on AI tools.
      </p>

      <div className="mt-10 space-y-8">
        {sorted.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block group rounded-xl border bg-[var(--card)] p-6 hover:shadow-md hover:border-[var(--primary)]/30 transition-all"
          >
            <time className="text-xs text-[var(--muted-foreground)]">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h2 className="mt-2 text-xl font-semibold group-hover:text-[var(--primary)] transition-colors">
              {post.title}
            </h2>
            <p className="mt-2 text-sm text-[var(--muted-foreground)] line-clamp-2">
              {post.metaDescription}
            </p>
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[var(--primary)]">
              Read more <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
