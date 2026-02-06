import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "AI Legal Tools Directory — Find the Best AI Tools for Law",
  description:
    "Browse 50+ AI tools built for legal professionals. Contract review, legal research, document automation, compliance. Vetted for security. Updated weekly.",
  keywords: [
    "legal ai tools",
    "ai for lawyers",
    "ai legal software",
    "legal technology ai",
    "ai tools for law firms",
    "ai contract review",
  ],
  openGraph: {
    title: "AI Legal Tools Directory — Find the Best AI Tools for Law",
    description:
      "Browse 50+ AI tools built for legal professionals. Contract review, legal research, document automation, compliance. Vetted for security.",
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
