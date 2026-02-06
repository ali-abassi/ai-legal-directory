import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Why We Built This AI Tools Directory",
  description:
    "Tired of bloated, pay-to-play AI tool lists? We built a curated, honest directory. Every tool is tested. Every listing is real. No paid rankings.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold">
        We got tired of bad AI tool lists. So we built a better one.
      </h1>

      <div className="mt-8 space-y-5 text-[var(--muted-foreground)] leading-relaxed">
        <p>
          Every week, hundreds of new AI tools launch. Most of them are wrappers on the same API.
          Some of them are genuinely useful. The problem? You can&apos;t tell the difference until
          you&apos;ve burned an afternoon signing up, testing, and comparing.
        </p>
        <p>
          We built this directory because we needed it ourselves. We&apos;re a team of builders and
          researchers who work with AI tools daily. We got fed up with directories that:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>List 10,000 tools with zero curation</li>
          <li>Rank tools by who pays the most</li>
          <li>Haven&apos;t been updated since GPT-3 was impressive</li>
        </ul>

        <h2 className="text-xl font-bold text-[var(--foreground)] pt-4">What makes us different</h2>
        <ul className="space-y-3">
          <li>
            <strong className="text-[var(--foreground)]">Curated, not scraped.</strong> Every tool
            gets a human look before it&apos;s listed.
          </li>
          <li>
            <strong className="text-[var(--foreground)]">Categorized by job-to-be-done.</strong> Not
            by buzzword. You&apos;re looking for &quot;something to write blog posts&quot; — not
            &quot;NLP-powered generative content platform.&quot;
          </li>
          <li>
            <strong className="text-[var(--foreground)]">Honest about pricing.</strong> We show real
            costs, including what happens after the free trial ends.
          </li>
          <li>
            <strong className="text-[var(--foreground)]">Updated continuously.</strong> Tools get
            removed when they shut down. Pricing gets updated when it changes. Reviews get refreshed
            quarterly.
          </li>
        </ul>

        <p>
          We&apos;re not a VC-funded hype machine. We&apos;re builders who want the AI tools
          ecosystem to be navigable. That&apos;s it.
        </p>

        <div className="mt-10 rounded-xl border bg-[var(--card)] p-6 text-center">
          <h3 className="font-semibold text-[var(--foreground)]">Want to help?</h3>
          <p className="mt-2 text-sm">
            If you spot outdated info or know a tool we&apos;re missing,{" "}
            <Link href="/submit" className="text-[var(--primary)] hover:underline">
              let us know
            </Link>
            . This directory gets better when people who actually use AI tools contribute.
          </p>
        </div>
      </div>
    </div>
  );
}
