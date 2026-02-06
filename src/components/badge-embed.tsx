"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

const SITE_URL = "https://ai-tools-directory-7a0.pages.dev";

function getBadgeSvg(toolName: string, featured: boolean, theme: "light" | "dark") {
  const bg = theme === "light" ? "%23f8fafc" : "%231e293b";
  const border = theme === "light" ? "%23e2e8f0" : "%23334155";
  const text = theme === "light" ? "%230f172a" : "%23f1f5f9";
  const subtext = theme === "light" ? "%2364748b" : "%2394a3b8";
  const accentBg = featured
    ? (theme === "light" ? "%232563eb" : "%233b82f6")
    : (theme === "light" ? "%230f172a" : "%23f1f5f9");
  const accentText = featured
    ? "%23ffffff"
    : (theme === "light" ? "%23ffffff" : "%230f172a");
  const label = featured ? "Featured on" : "Listed on";

  return `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="54" fill="none"><rect width="199" height="53" x=".5" y=".5" rx="7" fill="${bg}" stroke="${border}"/><rect x="8" y="8" width="38" height="38" rx="6" fill="${accentBg}"/><text x="27" y="33" text-anchor="middle" fill="${accentText}" font-family="system-ui,sans-serif" font-weight="700" font-size="16">⚡</text><text x="54" y="24" fill="${subtext}" font-family="system-ui,sans-serif" font-size="10" font-weight="500">${label}</text><text x="54" y="39" fill="${text}" font-family="system-ui,sans-serif" font-size="13" font-weight="700">AI Directory</text></svg>`)}`;
}

export function BadgeEmbed({ toolSlug, toolName, featured }: { toolSlug: string; toolName: string; featured: boolean }) {
  const [copied, setCopied] = useState<string | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toolUrl = `${SITE_URL}/tool/${toolSlug}`;
  const label = featured ? "Featured on" : "Listed on";

  const htmlSnippet = `<a href="${toolUrl}" target="_blank" rel="noopener" title="${toolName} on AI Directory"><img src="${SITE_URL}/badges/${theme}${featured ? "-featured" : ""}.svg" alt="${label} AI Directory" width="200" height="54" /></a>`;

  const markdownSnippet = `[![${label} AI Directory](${SITE_URL}/badges/${theme}${featured ? "-featured" : ""}.svg)](${toolUrl})`;

  function copyToClipboard(text: string, id: string) {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  }

  return (
    <div className="rounded-xl border bg-[var(--card)] p-6">
      <h3 className="font-semibold mb-1">Add Our Badge to Your Site</h3>
      <p className="text-xs text-[var(--muted-foreground)] mb-4">
        Show visitors you&apos;re listed in our directory — and get a backlink.
      </p>

      {/* Theme toggle */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setTheme("light")}
          className={`rounded-md px-3 py-1 text-xs font-medium transition ${
            theme === "light"
              ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
              : "bg-[var(--muted)] text-[var(--muted-foreground)] hover:bg-[var(--accent)]"
          }`}
        >
          Light
        </button>
        <button
          onClick={() => setTheme("dark")}
          className={`rounded-md px-3 py-1 text-xs font-medium transition ${
            theme === "dark"
              ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
              : "bg-[var(--muted)] text-[var(--muted-foreground)] hover:bg-[var(--accent)]"
          }`}
        >
          Dark
        </button>
      </div>

      {/* Badge preview */}
      <div className={`rounded-lg p-4 flex items-center justify-center ${theme === "dark" ? "bg-slate-800" : "bg-slate-50"}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={getBadgeSvg(toolName, featured, theme)}
          alt={`${label} AI Directory`}
          width={200}
          height={54}
        />
      </div>

      {/* HTML snippet */}
      <div className="mt-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium">HTML</span>
          <button
            onClick={() => copyToClipboard(htmlSnippet, "html")}
            className="inline-flex items-center gap-1 text-xs text-[var(--primary)] hover:underline"
          >
            {copied === "html" ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
            {copied === "html" ? "Copied!" : "Copy"}
          </button>
        </div>
        <pre className="rounded-md bg-[var(--muted)] p-3 text-xs overflow-x-auto whitespace-pre-wrap break-all">
          {htmlSnippet}
        </pre>
      </div>

      {/* Markdown snippet */}
      <div className="mt-3">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium">Markdown</span>
          <button
            onClick={() => copyToClipboard(markdownSnippet, "md")}
            className="inline-flex items-center gap-1 text-xs text-[var(--primary)] hover:underline"
          >
            {copied === "md" ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
            {copied === "md" ? "Copied!" : "Copy"}
          </button>
        </div>
        <pre className="rounded-md bg-[var(--muted)] p-3 text-xs overflow-x-auto whitespace-pre-wrap break-all">
          {markdownSnippet}
        </pre>
      </div>
    </div>
  );
}
