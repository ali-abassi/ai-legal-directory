import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About AI Legal Tools — Why We Built This Directory",
  description:
    "A vetted directory of AI tools for legal professionals. Every tool reviewed for capability, security, and pricing transparency. No paid rankings.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold">
        Legal AI tools are transforming practice. Finding the right one shouldn&apos;t require a discovery process.
      </h1>

      <div className="mt-8 space-y-5 text-[var(--muted-foreground)] leading-relaxed">
        <p>
          There are now over 200 AI tools targeting the legal industry. Some are genuinely
          transformative — saving firms hundreds of hours on contract review, legal research,
          and document drafting. Others are general-purpose AI with a legal marketing veneer.
        </p>
        <p>
          We built this directory to help legal professionals tell the difference.
        </p>

        <h2 className="text-xl font-bold text-[var(--foreground)] pt-4">
          What makes this different from general AI directories
        </h2>
        <ul className="space-y-3">
          <li>
            <strong className="text-[var(--foreground)]">Legal-specific categories.</strong> Contract
            review, e-discovery, legal research, compliance monitoring — not &quot;productivity&quot;
            and &quot;writing.&quot;
          </li>
          <li>
            <strong className="text-[var(--foreground)]">Security-conscious.</strong> Every listing
            notes data handling practices, SOC 2 compliance, and suitability for privileged work.
            Because &quot;it uses AI&quot; isn&apos;t due diligence.
          </li>
          <li>
            <strong className="text-[var(--foreground)]">Practice-area context.</strong> A tool that
            works for corporate M&amp;A may not work for immigration law. We note which practice areas
            each tool serves.
          </li>
          <li>
            <strong className="text-[var(--foreground)]">Pricing transparency.</strong> Legal AI tools
            love to hide behind &quot;contact sales.&quot; We publish every price we can verify and
            flag tools that won&apos;t disclose pricing.
          </li>
        </ul>

        <p>
          We&apos;re not affiliated with any legal AI vendor. Featured listings are clearly labeled.
          Rankings reflect our assessment, not advertising spend.
        </p>

        <div className="mt-10 rounded-xl border bg-[var(--card)] p-6 text-center">
          <h3 className="font-semibold text-[var(--foreground)]">Built a legal AI tool?</h3>
          <p className="mt-2 text-sm">
            If it&apos;s genuinely useful for legal professionals, we want it in the directory.{" "}
            <Link href="/submit" className="text-[var(--primary)] hover:underline">
              Submit your tool
            </Link>{" "}
            — listing is free.
          </p>
        </div>
      </div>
    </div>
  );
}
