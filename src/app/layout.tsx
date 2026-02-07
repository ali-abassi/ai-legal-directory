import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "AI Medical Tools Directory — Find the Best AI Tools for Healthcare",
  description:
    "Browse 50+ AI tools built for healthcare professionals. Clinical decision support, diagnostics, medical imaging, patient engagement. Vetted for HIPAA compliance. Updated weekly.",
  keywords: [
    "medical ai tools",
    "ai for healthcare",
    "ai medical software",
    "healthcare ai technology",
    "ai tools for hospitals",
    "ai clinical decision support",
    "ai diagnostics",
    "medical imaging ai",
  ],
  openGraph: {
    title: "AI Medical Tools Directory — Find the Best AI Tools for Healthcare",
    description:
      "Browse 50+ AI tools built for healthcare professionals. Clinical decision support, diagnostics, medical imaging, patient engagement. Vetted for HIPAA compliance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
