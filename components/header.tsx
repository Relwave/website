'use client'
import { Button } from '@/components/ui/button'
import { Moon, Sun, Github } from 'lucide-react'
import { useTheme } from './theme-provider'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function Header() {
  const { isDark, toggleTheme, mounted } = useTheme()

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href={'/'} className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 flex items-center justify-center rounded-lg bg-primary overflow-hidden">
              <img
                src="/icon.png"
                alt="RelWave"
                className="w-5 h-5 object-contain invert dark:invert-0"
              />
            </div>
            <span className="text-lg font-bold tracking-tight">Relwave</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/features"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/Relwave"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>Star on GitHub</span>
          </Link>
          
          <div className="h-4 w-px bg-border/60 mx-1 hidden sm:block" />

          <Button
            size="icon"
            variant="ghost"
            onClick={toggleTheme}
            className="rounded-full w-9 h-9"
            aria-label="Toggle theme"
          >
            {mounted ? (
              isDark ? (
                <Sun className="w-4.5 h-4.5" />
              ) : (
                <Moon className="w-4.5 h-4.5" />
              )
            ) : (
              <Moon className="w-4.5 h-4.5" />
            )}
          </Button>
          
          <Button size="sm" className="hidden sm:flex">
            Get Started
          </Button>
        </div>
      </div>
    </motion.header>
  )
}