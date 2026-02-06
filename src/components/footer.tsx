import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-[var(--muted)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-lg">
              <span className="text-xl">⚖️</span> AI Legal Tools
            </Link>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">
              Every legal AI tool. Vetted by professionals. Updated weekly.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-sm">Directory</h3>
            <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
              <li><Link href="/" className="hover:text-[var(--foreground)]">Browse All Tools</Link></li>
              <li><Link href="/search" className="hover:text-[var(--foreground)]">Search</Link></li>
              <li><Link href="/submit" className="hover:text-[var(--foreground)]">Submit a Tool</Link></li>
              <li><Link href="/new" className="hover:text-[var(--foreground)]">New Tools</Link></li>
              <li><Link href="/free" className="hover:text-[var(--foreground)]">Free Tools</Link></li>
              <li><Link href="/blog" className="hover:text-[var(--foreground)]">Blog</Link></li>
              <li><Link href="/collections" className="hover:text-[var(--foreground)]">Collections</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-sm">Popular Categories</h3>
            <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
              <li><Link href="/category/contract-review" className="hover:text-[var(--foreground)]">Contract Review</Link></li>
              <li><Link href="/category/legal-research" className="hover:text-[var(--foreground)]">Legal Research</Link></li>
              <li><Link href="/category/document-automation" className="hover:text-[var(--foreground)]">Document Automation</Link></li>
              <li><Link href="/category/e-discovery" className="hover:text-[var(--foreground)]">E-Discovery</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-sm">Company</h3>
            <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
              <li><Link href="/about" className="hover:text-[var(--foreground)]">About Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-[var(--muted-foreground)]">
          &copy; {new Date().getFullYear()} AI Legal Tools. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
