"use client";

import { useState } from "react";
import { Mail, CheckCircle, Loader2 } from "lucide-react";

// Change this to the actual Buttondown username once account is created
const BUTTONDOWN_USERNAME = "ailegaltools";

interface NewsletterSignupProps {
  variant: "homepage" | "blog" | "tool";
}

const copy = {
  homepage: {
    headline: "The Legal AI Briefing. Monthly.",
    subtext:
      "New legal AI tools, security updates, and practice-area insights. Built for lawyers, not tech enthusiasts.",
    button: "Subscribe — Free",
    finePrint: "One email per month. Unsubscribe anytime.",
  },
  blog: {
    headline: "Like this kind of analysis?",
    subtext:
      "We send a monthly briefing covering new legal AI tools, compliance updates, and practice-area insights. Same voice as the blog, straight to your inbox.",
    button: "Get Monthly Briefing",
    finePrint: "Free. Monthly. No spam.",
  },
  tool: {
    headline: "Stay current on legal AI tools.",
    subtext:
      "Monthly briefing on the best legal AI tools, security updates, and what matters for your practice.",
    button: "Subscribe Free",
    finePrint: "Monthly. No spam. Unsubscribe anytime.",
  },
};

export function NewsletterSignup({ variant }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const c = copy[variant];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("submitting");
    try {
      const res = await fetch(
        `https://buttondown.com/api/emails/embed-subscribe/${BUTTONDOWN_USERNAME}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );
      if (res.ok || res.status === 201) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border bg-[var(--card)] p-6 text-center">
        <CheckCircle className="h-8 w-8 text-green-500 mx-auto" />
        <p className="mt-3 font-semibold">You&apos;re in!</p>
        <p className="mt-1 text-sm text-[var(--muted-foreground)]">
          Check your inbox for a confirmation email. See you Tuesday.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border bg-[var(--card)] p-6">
      <div className="flex items-center gap-2 mb-2">
        <Mail className="h-5 w-5 text-[var(--primary)]" />
        <h3 className="font-semibold">{c.headline}</h3>
      </div>
      <p className="text-sm text-[var(--muted-foreground)]">{c.subtext}</p>
      <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="flex-1 rounded-lg border bg-[var(--background)] px-4 py-2.5 text-sm"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-lg bg-[var(--primary)] px-4 py-2.5 text-sm font-semibold text-[var(--primary-foreground)] hover:opacity-90 transition whitespace-nowrap disabled:opacity-50"
        >
          {status === "submitting" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            c.button
          )}
        </button>
      </form>
      {status === "error" && (
        <p className="mt-2 text-sm text-red-500">Something went wrong. Please try again.</p>
      )}
      <p className="mt-2 text-xs text-[var(--muted-foreground)]">{c.finePrint}</p>
    </div>
  );
}
