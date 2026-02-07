import type { Metadata } from "next";
import { Check } from "lucide-react";
import { SubmitForm } from "@/components/submit-form";

export const metadata: Metadata = {
  title: "Submit Your Medical AI Tool — Get Listed",
  description:
    "List your medical AI tool for free. Reach physicians, nurses, and healthcare administrators actively evaluating AI solutions.",
};

export default function SubmitPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold">
        Get your medical AI tool in front of the professionals who need it.
      </h1>
      <p className="mt-3 text-[var(--muted-foreground)] text-lg">
        Physicians and healthcare administrators come here specifically looking for AI tools. If yours
        solves a real problem, they&apos;ll find it.
      </p>

      {/* Tiers */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Free */}
        <div className="rounded-xl border bg-[var(--card)] p-8">
          <h2 className="text-xl font-bold">Free Listing</h2>
          <p className="mt-1 text-3xl font-extrabold">$0</p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Tool name, description, category, and pricing",
              "Practice area tags",
              "Link to your site",
              "Appears in search and category pages",
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
            $149<span className="text-base font-normal text-[var(--muted-foreground)]">/mo</span>
          </p>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">Everything in Free, plus:</p>
          <ul className="mt-4 space-y-3 text-sm">
            {[
              "Priority placement in your category",
              '"Featured" badge on your listing',
              "Detailed profile with screenshots, demo video, and case studies",
              "Security & compliance details (HIPAA, FDA clearance, data residency)",
              'Included in our monthly "Medical AI Briefing" newsletter',
              "Analytics: impressions, clicks, referral traffic",
              "Comparison inclusion (appear in relevant vs pages)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check className="h-4 w-4 text-[var(--primary)] mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Enterprise */}
        <div className="rounded-xl border bg-[var(--card)] p-8">
          <h2 className="text-xl font-bold">Enterprise</h2>
          <p className="mt-1 text-3xl font-extrabold">
            $499<span className="text-base font-normal text-[var(--muted-foreground)]">/mo</span>
          </p>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">Everything in Featured, plus:</p>
          <ul className="mt-4 space-y-3 text-sm">
            {[
              "Category sponsorship (exclusive featured position)",
              "Co-branded content (one blog post per quarter)",
              "Direct lead capture (inquiry form on your listing)",
              "Dedicated account contact",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
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
          Healthcare technology buyers are methodical — they research before they buy. This directory
          is where that research starts. Unlike general AI directories, our audience is exclusively
          healthcare professionals with purchasing authority or influence. The traffic is smaller but
          the intent is 10x higher.
        </p>
      </div>

      {/* Submit Form */}
      <SubmitForm />
    </div>
  );
}
