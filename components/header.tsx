'use client'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from './theme-provider'
import Link from 'next/link'

export function Header() {
  const { isDark, toggleTheme, mounted } = useTheme()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-xl border-b border-border/40 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo Section - Left */}
        <Link href={'/'} className="flex items-center gap-2.5 group">
          {/* <div className="relative w-8 h-8 rounded-lg bg-linear-to-b from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-all"> */}
          <img
            src="/icon.png"
            alt="RelWave"
            className="w-5 h-5 object-contain"
          />
          <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">RelWave</span>
          {/* </div> */}
        </Link>

        {/* Navigation + Theme Toggle - Right */}
        <div className="flex items-center gap-1">
          <nav className="flex items-center gap-1">
            <Link
              href="/contact"
              data-umami-event="header_contact"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all"
            >
              Contact
            </Link>
            <Link
              href="https://github.com/Relwave"
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event="header_github"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all"
            >
              GitHub
            </Link>
          </nav>

          {/* Theme Toggle */}
          <Button
            size="sm"
            variant="ghost"
            onClick={toggleTheme}
            className="w-9 h-9 p-0 rounded-lg hover:bg-accent/50 border border-transparent hover:border-border/40 transition-all ml-2"
            suppressHydrationWarning
            aria-label="Toggle theme"
          >
            {mounted ? (
              isDark ? (
                <Sun className="w-[18px] h-[18px] text-muted-foreground hover:text-foreground transition-colors" />
              ) : (
                <Moon className="w-[18px] h-[18px] text-muted-foreground hover:text-foreground transition-colors" />
              )
            ) : (
              <Moon className="w-[18px] h-[18px] text-muted-foreground" />
            )}
          </Button>
        </div>
      </div>
    </header>
  )
}