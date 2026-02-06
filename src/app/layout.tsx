import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "AI Tools Directory — Find the Best AI Tools for Any Task",
  description:
    "Browse 1,000+ AI tools organized by use case. Compare pricing, read honest reviews, and find the right AI tool in seconds. Updated daily.",
  keywords: [
    "ai tools",
    "best ai tools",
    "ai tools directory",
    "ai tool finder",
    "ai software",
    "ai apps",
  ],
  openGraph: {
    title: "AI Tools Directory — Find the Best AI Tools for Any Task",
    description:
      "Browse 1,000+ AI tools organized by use case. Compare pricing, read honest reviews, and find the right AI tool in seconds.",
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
