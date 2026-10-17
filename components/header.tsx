'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import type { MouseEvent } from 'react'
import { Button } from '@/components/ui/button'
import { useTheme } from './theme-provider'
import { Github, Menu, Moon, Sun, X } from 'lucide-react'
import { motion } from 'framer-motion'

type NavItem = {
  label: string
  href: string
  external?: boolean
}

const navItems: NavItem[] = [
  { label: 'Product', href: '#product' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Architecture', href: '#architecture' },
  {label:"Contact", href:"/contact"},
]

export function Header() {
  const { isDark, toggleTheme, mounted } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (pathname !== '/') return

    const targetId = window.sessionStorage.getItem('relwave-scroll-target')
    if (!targetId) return

    window.sessionStorage.removeItem('relwave-scroll-target')
    requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [pathname])

  function handleSectionNavigation(event: MouseEvent<HTMLAnchorElement>, href: string) {
    const targetId = href.slice(1)
    if (!href.startsWith('#')) return

    event.preventDefault()
    setMenuOpen(false)

    if (pathname !== '/') {
      window.sessionStorage.setItem('relwave-scroll-target', targetId)
      router.push('/')
      return
    }

    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', window.location.pathname + window.location.search)
  }

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/88 backdrop-blur-xl"
    >
      <div className="section-shell flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="RelWave home">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/20 bg-primary/12">
            <Image src="/icon.png" alt="" width={22} height={22} className="h-5 w-5 object-contain" priority />
          </span>
          <span className="font-display text-lg font-semibold">RelWave</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(event) => handleSectionNavigation(event, item.href)}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/70 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="https://github.com/Relwave/relwave-app"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary/70 hover:text-foreground sm:flex"
            aria-label="RelWave on GitHub"
            data-umami-event="github_header"
          >
            <Github className="w-4 h-4" />
          </Link>
          <Button
            size="icon"
            variant="ghost"
            onClick={toggleTheme}
            className="h-9 w-9 rounded-md"
            aria-label="Toggle theme"
            data-umami-event="theme_toggle"
          >
            {mounted && isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button asChild className="hidden h-9 rounded-md px-4 font-semibold sm:inline-flex" data-umami-event="download_header">
            <Link href="#download" onClick={(event) => handleSectionNavigation(event, '#download')}>Download</Link>
          </Button>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setMenuOpen((value) => !value)}
            className="h-9 w-9 rounded-md md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-nav" className="border-t border-border/70 bg-background/96 md:hidden">
          <nav className="section-shell flex flex-col gap-1 py-4" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(event) => handleSectionNavigation(event, item.href)}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="rounded-md px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-secondary/70 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="https://github.com/Relwave/relwave-app"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-secondary/70 hover:text-foreground"
              onClick={() => setMenuOpen(false)}
            >
              GitHub
            </Link>
            <Button asChild className="mt-2 h-11 w-full">
              <Link href="#download" onClick={(event) => handleSectionNavigation(event, '#download')}>
                Download RelWave
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </motion.header>
  )
}
