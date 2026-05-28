'use client'
import Link from 'next/link'
import { Github, Twitter, Linkedin } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border/40 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link href={'/'} className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Image src="/icon.png" alt="Relwave Logo" width={16} height={16} className="w-4 h-4" />
            </div>
            <span className="text-xl font-bold tracking-tight">Relwave</span>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Open-source database management tool with native Git version control.
            Built for developers who care about schema integrity.
          </p>
          <div className="flex gap-4">
            <Link href="http://github.com/Relwave" target='_blank' className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="https://x.com/Yashh596" target='_blank' className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/yash596/" target='_blank' className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">Product</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="/features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link></li>
            <li><Link href="https://github.com/Relwave/relwave-app/releases" target='_blank' className="text-muted-foreground hover:text-foreground transition-colors">Release Notes</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">Resources</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="http://github.com/Relwave" target='_blank' className="text-muted-foreground hover:text-foreground transition-colors">GitHub Repository</Link></li>
            <li><Link href="/features" className="text-muted-foreground hover:text-foreground transition-colors">Sponsorship</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">Legal</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
            <li><Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
        <p>© {currentYear} Relwave. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Systems Operational
          </div>
        </div>
      </div>
    </footer>
  )
}
