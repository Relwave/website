import { Header } from "@/components/header";
import ReactMarkdown from "react-markdown";
import fs from "fs";
import path from "path";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service and End User License Agreement for the RelWave database client.",
  alternates: {
    canonical: 'https://relwave.tech/terms',
  },
}

export default function TermsPage() {
  const termsPath = path.join(process.cwd(), "content", "legal", "terms.md");
  const termsContent = fs.readFileSync(termsPath, "utf-8");

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="mx-auto max-w-4xl px-4 py-32">
        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <ReactMarkdown>
            {termsContent}
          </ReactMarkdown>
        </article>
      </main>
    </div>
  );
}