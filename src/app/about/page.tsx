import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About AI Medical Tools — Why We Built This Directory",
  description:
    "A vetted directory of AI tools for healthcare professionals. Every tool reviewed for clinical validation, HIPAA compliance, and pricing transparency. No paid rankings.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold">
        Medical AI tools are transforming healthcare. Finding the right one shouldn&apos;t require a clinical trial.
      </h1>

      <div className="mt-8 space-y-5 text-[var(--muted-foreground)] leading-relaxed">
        <p>
          There are now over 200 AI tools targeting the healthcare industry. Some are genuinely
          transformative — improving diagnostic accuracy, reducing administrative burden, and enhancing
          patient care. Others are general-purpose AI with a medical marketing veneer.
        </p>
        <p>
          We built this directory to help healthcare professionals tell the difference.
        </p>

        <h2 className="text-xl font-bold text-[var(--foreground)] pt-4">
          What makes this different from general AI directories
        </h2>
        <ul className="space-y-3">
          <li>
            <strong className="text-[var(--foreground)]">Medical-specific categories.</strong> Clinical
            decision support, diagnostics, medical imaging, patient engagement — not &quot;productivity&quot;
            and &quot;automation.&quot;
          </li>
          <li>
            <strong className="text-[var(--foreground)]">Compliance-conscious.</strong> Every listing
            notes HIPAA compliance status, FDA clearance, and data handling practices.
            Because patient data protection isn&apos;t optional.
          </li>
          <li>
            <strong className="text-[var(--foreground)]">Clinical validation.</strong> A tool that
            works in radiology may not work in pathology. We note clinical evidence, validation studies,
            and specialty-specific applications.
          </li>
          <li>
            <strong className="text-[var(--foreground)]">Pricing transparency.</strong> Medical AI tools
            love to hide behind &quot;contact sales.&quot; We publish every price we can verify and
            flag tools that won&apos;t disclose pricing.
          </li>
        </ul>

        <p>
          We&apos;re not affiliated with any medical AI vendor. Featured listings are clearly labeled.
          Rankings reflect our assessment, not advertising spend.
        </p>

        <div className="mt-10 rounded-xl border bg-[var(--card)] p-6 text-center">
          <h3 className="font-semibold text-[var(--foreground)]">Built a medical AI tool?</h3>
          <p className="mt-2 text-sm">
            If it&apos;s genuinely useful for healthcare professionals, we want it in the directory.{" "}
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
