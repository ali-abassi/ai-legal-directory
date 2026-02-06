"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Menu, X } from "lucide-react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-[var(--background)]/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-2xl">⚖️</span>
            <span>AI Legal Tools</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="hover:text-[var(--primary)] transition-colors">
              Browse Tools
            </Link>
            <Link href="/about" className="hover:text-[var(--primary)] transition-colors">
              About
            </Link>
            <Link href="/blog" className="hover:text-[var(--primary)] transition-colors">
              Blog
            </Link>
            <Link href="/collections" className="hover:text-[var(--primary)] transition-colors">
              Collections
            </Link>
            <Link href="/submit" className="hover:text-[var(--primary)] transition-colors">
              Submit a Tool
            </Link>
            <Link
              href="/search"
              className="flex items-center gap-1.5 rounded-full bg-[var(--muted)] px-4 py-2 text-[var(--muted-foreground)] hover:bg-[var(--border)] transition-colors"
            >
              <Search className="h-4 w-4" />
              Search tools...
            </Link>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3 text-sm font-medium">
            <Link href="/" onClick={() => setMobileOpen(false)}>Browse Tools</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/blog" onClick={() => setMobileOpen(false)}>Blog</Link>
            <Link href="/collections" onClick={() => setMobileOpen(false)}>Collections</Link>
            <Link href="/submit" onClick={() => setMobileOpen(false)}>Submit a Tool</Link>
            <Link href="/search" onClick={() => setMobileOpen(false)} className="flex items-center gap-1.5">
              <Search className="h-4 w-4" /> Search tools...
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
