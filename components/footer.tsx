'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/25 px-6 pb-10 pt-16">
      <div className="mx-auto mb-14 grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-4">
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-primary/20 bg-primary/12">
              <Image src="/icon.png" alt="RelWave Logo" width={16} height={16} className="h-4 w-4" />
            </div>
            <span className="text-xl font-semibold tracking-tight">RelWave</span>
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            A local-first database client for visual schema exploration, SQL workspaces, migrations, and Git-powered workflows.
          </p>
          <div className="flex gap-4">
            <Link data-umami-event="github_footer" href="https://github.com/Relwave/relwave-app" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
            <Link data-umami-event="twitter_footer" href="https://x.com/Yashh596" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary" aria-label="X">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link data-umami-event="linkedin_footer" href="https://www.linkedin.com/in/yash596/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="mb-6 text-sm font-bold uppercase tracking-wider">Product</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="/#product" className="text-muted-foreground transition-colors hover:text-foreground">Product tour</Link></li>
            <li><Link href="/#workflow" className="text-muted-foreground transition-colors hover:text-foreground">Workflow</Link></li>
            <li><Link href="/#architecture" className="text-muted-foreground transition-colors hover:text-foreground">Architecture</Link></li>
            <li><Link href="https://github.com/Relwave/relwave-app/releases" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">Release Notes</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-sm font-bold uppercase tracking-wider">Resources</h4>
          <ul className="space-y-4 text-sm">
            <li><Link data-umami-event="github_footer_resources" href="https://github.com/Relwave/relwave-app" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">GitHub Repository</Link></li>
            <li><Link href="https://github.com/Relwave/relwave-app#readme" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">Documentation</Link></li>
            <li><Link data-umami-event="sponsorship_footer" href="/contact" className="text-muted-foreground transition-colors hover:text-foreground">Sponsorship</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-sm font-bold uppercase tracking-wider">Legal</h4>
          <ul className="space-y-4 text-sm">
            <li><Link data-umami-event="privacy_footer" href="/privacy" className="text-muted-foreground transition-colors hover:text-foreground">Privacy Policy</Link></li>
            <li><Link data-umami-event="terms_footer" href="/terms" className="text-muted-foreground transition-colors hover:text-foreground">Terms of Service</Link></li>
            <li><Link data-umami-event="contact_footer" href="/contact" className="text-muted-foreground transition-colors hover:text-foreground">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row">
        <p>(c) {currentYear} RelWave. All rights reserved.</p>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-500" />
          Open source desktop database client
        </div>
      </div>
    </footer>
  )
}
