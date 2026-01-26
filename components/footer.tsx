import { Github, Heart } from 'lucide-react'
import Link from 'next/link'
import { Separator } from './ui/separator'

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 py-16 px-6 overflow-hidden">
      {/* Layered Background */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)] bg-size-[32px_32px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          {/* Logo & Name */}
          <div className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 rounded-lg bg-linear-to-b from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-all">
              <img src="/icon.png" alt="RelWave" className="w-5 h-5 object-contain" />
            </div>
            <span className="font-semibold text-lg tracking-tight bg-linear-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
              RelWave
            </span>
          </div>

          {/* Tagline */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground/70 font-medium">
            <span>Open source database visualizer</span>
            <span className="text-muted-foreground/30">•</span>
            <span className="flex items-center gap-1.5">
              Built with
              <Heart className="w-3.5 h-3.5 text-red-400/80 fill-red-400/20 animate-pulse" />
              using Tauri + React
            </span>
          </div>

          {/* Social Links */}
          <Link
            href="https://github.com/Relwave/relwave-app"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-lg border border-border/40 bg-background/60 backdrop-blur-sm text-muted-foreground hover:text-foreground hover:border-primary/30 hover:shadow-lg transition-all hover:scale-105"
            aria-label="View on GitHub"
          >
            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </Link>
        </div>

        {/* Divider */}
        <Separator />
        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/60 font-medium">
            © {new Date().getFullYear()} RelWave. Released under MIT License.
          </p>

          <div className="flex items-center gap-6 text-xs">
            <Link
              href="https://github.com/Relwave/relwave-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/60 hover:text-foreground transition-colors font-medium"
            >
              Documentation
            </Link>
            <Link
              href="https://github.com/Relwave/relwave-app/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/60 hover:text-foreground transition-colors font-medium"
            >
              Report Issue
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground/60 hover:text-foreground transition-colors font-medium"
            >
              Contact
            </Link>
            <Link
              href="https://github.com/Relwave/relwave-app/blob/master/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/60 hover:text-foreground transition-colors font-medium"
            >
              License
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}