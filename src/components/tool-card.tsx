import Link from "next/link";
import { ExternalLink, Star } from "lucide-react";
import type { Tool } from "@/data/tools";

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={`/tool/${tool.slug}`}
      className="group relative flex flex-col rounded-xl border bg-[var(--card)] p-5 transition-all hover:shadow-lg hover:border-[var(--primary)]/30"
    >
      {tool.featured && (
        <span className="absolute -top-2.5 right-4 rounded-full bg-[var(--primary)] px-3 py-0.5 text-xs font-semibold text-[var(--primary-foreground)]">
          Featured
        </span>
      )}
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--accent)] text-lg font-bold text-[var(--accent-foreground)]">
          {tool.name.charAt(0)}
        </div>
        <span className="rounded-full bg-[var(--muted)] px-2.5 py-1 text-xs font-medium text-[var(--muted-foreground)]">
          {tool.pricing}
        </span>
      </div>
      <h3 className="mt-3 font-semibold text-lg group-hover:text-[var(--primary)] transition-colors">
        {tool.name}
      </h3>
      <p className="mt-1.5 text-sm text-[var(--muted-foreground)] line-clamp-2 flex-1">
        {tool.description}
      </p>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-1 text-sm">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          <span className="font-medium">{tool.rating.toFixed(1)}</span>
        </div>
        <span className="text-xs text-[var(--muted-foreground)] flex items-center gap-1 group-hover:text-[var(--primary)]">
          View details <ExternalLink className="h-3 w-3" />
        </span>
      </div>
    </Link>
  );
}
