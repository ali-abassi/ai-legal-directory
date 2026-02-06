import type { Metadata } from "next";
import { Check } from "lucide-react";
import { SubmitForm } from "@/components/submit-form";

export const metadata: Metadata = {
  title: "Submit Your AI Tool — Get Listed in Our Directory",
  description:
    "List your AI tool for free or get featured placement. Reach thousands of people actively searching for AI tools every month.",
};

export default function SubmitPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold">
        Get your AI tool in front of people who are actively looking for it.
      </h1>
      <p className="mt-3 text-[var(--muted-foreground)] text-lg">
        This isn&apos;t social media traffic. These are people searching for a tool to solve a
        specific problem — right now.
      </p>

      {/* Tiers */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Free */}
        <div className="rounded-xl border bg-[var(--card)] p-8">
          <h2 className="text-xl font-bold">Free Listing</h2>
          <p className="mt-1 text-3xl font-extrabold">$0</p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Tool name, description, category, and pricing info",
              "Direct link to your site",
              "Appears in search results and category pages",
              "You show up when someone searches for what you do",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Featured */}
        <div className="rounded-xl border-2 border-[var(--primary)] bg-[var(--card)] p-8 relative">
          <span className="absolute -top-3 left-6 rounded-full bg-[var(--primary)] px-3 py-0.5 text-xs font-semibold text-[var(--primary-foreground)]">
            Most Popular
          </span>
          <h2 className="text-xl font-bold">Featured Listing</h2>
          <p className="mt-1 text-3xl font-extrabold">
            $49<span className="text-base font-normal text-[var(--muted-foreground)]">/mo</span>
          </p>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">Everything in Free, plus:</p>
          <ul className="mt-4 space-y-3 text-sm">
            {[
              "Priority placement at the top of your category",
              '"Featured" badge on your listing',
              "Detailed profile page with screenshots, video embed, and full feature breakdown",
              'Included in our weekly "Tools Worth Trying" newsletter',
              "Analytics dashboard showing impressions, clicks, and referral traffic",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check className="h-4 w-4 text-[var(--primary)] mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Why */}
      <div className="mt-12 rounded-xl border bg-[var(--muted)] p-8">
        <h2 className="text-xl font-bold">Why list here?</h2>
        <p className="mt-3 text-[var(--muted-foreground)] leading-relaxed">
          Your tool is competing with thousands of others. The people browsing this directory have
          intent — they&apos;re actively looking for an AI tool to solve a specific problem.
          That&apos;s the highest-quality traffic you&apos;ll find outside of paid search, at a
          fraction of the cost.
        </p>
        <p className="mt-3 text-[var(--muted-foreground)] leading-relaxed">
          We reject tools that are broken, deceptive about pricing, or just API wrappers with no
          added value. That curation is what makes being listed here mean something.
        </p>
      </div>

      {/* Submit Form */}
      <SubmitForm />
    </div>
  );
}
