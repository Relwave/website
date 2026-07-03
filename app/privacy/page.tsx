import { Header } from "@/components/header";
import ReactMarkdown from "react-markdown";
import fs from "fs";
import path from "path";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the RelWave Privacy Policy. We believe in local-first, privacy-respecting tools.",
  alternates: {
    canonical: 'https://relwave.tech/privacy',
  },
}

export default function PrivacyPage() {
  const privacyPath = path.join(process.cwd(), "content", "privacy", "policies.md");
  const privacyContent = fs.readFileSync(privacyPath, "utf-8");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-32">
        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <ReactMarkdown>
            {privacyContent}
          </ReactMarkdown>
        </article>
      </main>
    </div>
  );
}