"use client";

import { useState } from "react";
import { categories } from "@/data/categories";
import { CheckCircle } from "lucide-react";

export function SubmitForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    toolName: "",
    url: "",
    category: "",
    description: "",
    pricing: "Free",
    email: "",
    featured: false,
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.toolName || !formData.url || !formData.email || !formData.category) return;

    const subject = encodeURIComponent(
      `Tool Submission: ${formData.toolName}`
    );
    const body = encodeURIComponent(
      `Tool Name: ${formData.toolName}\nWebsite: ${formData.url}\nCategory: ${formData.category}\nPricing: ${formData.pricing}\nDescription: ${formData.description}\nContact Email: ${formData.email}\nInterested in Featured: ${formData.featured ? "Yes" : "No"}`
    );

    window.open(`mailto:submit@aidirectory.tools?subject=${subject}&body=${body}`, "_self");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mt-12 rounded-xl border bg-[var(--card)] p-12 text-center">
        <CheckCircle className="h-12 w-12 text-green-500 mx-auto" />
        <h2 className="mt-4 text-xl font-bold">Submission received!</h2>
        <p className="mt-2 text-[var(--muted-foreground)]">
          Your email client should have opened with the submission details.
          We review every submission and typically respond within 24-48 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm text-[var(--primary)] hover:underline"
        >
          Submit another tool
        </button>
      </div>
    );
  }

  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold mb-6">Submit Your Tool</h2>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium mb-1.5">Tool Name *</label>
            <input
              type="text"
              required
              value={formData.toolName}
              onChange={(e) => setFormData({ ...formData, toolName: e.target.value })}
              className="w-full rounded-lg border bg-[var(--background)] px-4 py-2.5 text-sm"
              placeholder="e.g. SuperAI Writer"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">Website URL *</label>
            <input
              type="url"
              required
              value={formData.url}
              onChange={(e) => setFormData({ ...formData, url: e.target.value })}
              className="w-full rounded-lg border bg-[var(--background)] px-4 py-2.5 text-sm"
              placeholder="https://..."
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Category *</label>
          <select
            required
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full rounded-lg border bg-[var(--background)] px-4 py-2.5 text-sm"
          >
            <option value="">Select a category</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Description *</label>
          <textarea
            rows={4}
            required
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full rounded-lg border bg-[var(--background)] px-4 py-2.5 text-sm"
            placeholder="What does your tool do? Who is it for?"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium mb-1.5">Pricing Model</label>
            <select
              value={formData.pricing}
              onChange={(e) => setFormData({ ...formData, pricing: e.target.value })}
              className="w-full rounded-lg border bg-[var(--background)] px-4 py-2.5 text-sm"
            >
              <option>Free</option>
              <option>Freemium</option>
              <option>Paid</option>
              <option>Free Trial</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">Your Email *</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-lg border bg-[var(--background)] px-4 py-2.5 text-sm"
              placeholder="you@company.com"
            />
          </div>
        </div>
        <div>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              className="rounded border"
              checked={formData.featured}
              onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
            />
            I&apos;m interested in a Featured Listing ($49/mo)
          </label>
        </div>
        <button
          type="submit"
          className="rounded-full bg-[var(--primary)] px-8 py-3 text-sm font-semibold text-[var(--primary-foreground)] hover:opacity-90 transition"
        >
          Submit Your Tool — Free
        </button>
        <p className="text-xs text-[var(--muted-foreground)]">
          We review every submission. Approval typically takes 24-48 hours. We&apos;ll email you
          when your tool is live.
        </p>
      </form>
    </div>
  );
}
