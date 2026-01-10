'use client'

import { Button } from '@/components/ui/button'
import { DatabaseIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from './theme-provider'

export function Header() {
  const { isDark, toggleTheme, mounted } = useTheme()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <DatabaseIcon className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-semibold text-lg">DBXplore</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#screenshots" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Screenshots</a>
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#download" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Download</a>
          <a href="https://github.com/Yashh56/DBXplore" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
        </nav>
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="ghost"
            onClick={toggleTheme}
            className="w-9 h-9 p-0"
            suppressHydrationWarning
          >
            {mounted ? (isDark ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />) : <MoonIcon className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </header>
  )
}
