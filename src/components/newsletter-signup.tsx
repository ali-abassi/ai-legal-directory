"use client";

import { useState } from "react";
import { Mail, CheckCircle, Loader2 } from "lucide-react";

// Change this to the actual Buttondown username once account is created
const BUTTONDOWN_USERNAME = "aidirectory";

interface NewsletterSignupProps {
  variant: "homepage" | "blog" | "tool";
}

const copy = {
  homepage: {
    headline: "Get the 3 best AI tools of the week. Every Tuesday.",
    subtext:
      "One email. Three tested picks. No spam, no hype, no \"exclusive deal\" that's just an ad.",
    button: "Subscribe — Free",
    finePrint: "One email per week. Unsubscribe anytime.",
  },
  blog: {
    headline: "Like this kind of analysis?",
    subtext:
      "We send one email every Tuesday with 3 AI tools worth trying — tested, honest, and actually useful. Same voice as the blog, straight to your inbox.",
    button: "Get Weekly Picks",
    finePrint: "Free. One email/week. No spam.",
  },
  tool: {
    headline: "Never miss a good AI tool.",
    subtext:
      "Every Tuesday, we pick the 3 best tools we found that week. Curated by the same team that built this directory.",
    button: "Subscribe Free",
    finePrint: "Weekly. No spam. Unsubscribe anytime.",
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
