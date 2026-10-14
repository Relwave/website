'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  Braces,
  CheckCircle2,
  Database,
  Download,
  Github,
  GitPullRequest,
  Play,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

function HeroWorkspace() {
  const shouldReduceMotion = useReducedMotion()
  const rows = ['users', 'orders', 'subscriptions', 'invoices']

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28, scale: 0.98 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
      aria-label="RelWave product interface preview"
    >
      <div className="absolute -inset-6 rounded-[2rem] bg-primary/12 blur-3xl" />
      <div className="surface-shadow relative overflow-hidden rounded-2xl border border-border bg-card">
        <div className="flex h-11 items-center justify-between border-b border-border bg-muted/55 px-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <span className="font-mono text-xs text-muted-foreground">production-db / public</span>
        </div>

        <div className="grid min-h-[430px] grid-cols-1 lg:grid-cols-[210px_1fr]">
          <aside className="hidden border-r border-border bg-background/80 p-4 lg:block">
            <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase text-muted-foreground">
              <Database className="h-4 w-4 text-primary" />
              Schema
            </div>
            <div className="space-y-2">
              {rows.map((row, index) => (
                <div
                  key={row}
                  className={`flex items-center justify-between rounded-md border px-3 py-2 text-sm ${
                    index === 1 ? 'border-primary/40 bg-primary/10 text-foreground' : 'border-transparent text-muted-foreground'
                  }`}
                >
                  <span>{row}</span>
                  <span className="font-mono text-[10px]">{index === 1 ? 'FK' : `${index + 3}`}</span>
                </div>
              ))}
            </div>
          </aside>

          <div className="flex flex-col bg-[#0d1418] text-slate-100">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="rounded-md bg-cyan-400/12 px-2.5 py-1 text-xs font-semibold text-cyan-200">SQL Editor</span>
              <span className="rounded-md px-2.5 py-1 text-xs text-slate-400">ER Diagram</span>
              <span className="rounded-md px-2.5 py-1 text-xs text-slate-400">Git Changes</span>
            </div>
            <div className="grid flex-1 grid-cols-1 xl:grid-cols-[1fr_245px]">
              <div className="p-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-400">query_04.sql</span>
                  <Button size="sm" className="h-8 bg-emerald-500 text-slate-950 hover:bg-emerald-400">
                    <Play className="h-3.5 w-3.5" />
                    Execute
                  </Button>
                </div>
                <pre className="overflow-hidden rounded-lg border border-white/10 bg-black/28 p-4 text-[12px] leading-6 text-slate-200 sm:text-sm">
                  <code>{`SELECT users.email,
       COUNT(orders.id) AS orders,
       SUM(orders.total) AS revenue
FROM users
LEFT JOIN orders ON users.id = orders.user_id
WHERE users.status = 'active'
GROUP BY users.email
ORDER BY revenue DESC;`}</code>
                </pre>
                <div className="mt-4 overflow-hidden rounded-lg border border-white/10">
                  <div className="grid grid-cols-3 bg-white/7 px-3 py-2 font-mono text-[11px] text-slate-400">
                    <span>email</span>
                    <span>orders</span>
                    <span>revenue</span>
                  </div>
                  {['ava@acme.dev', 'niko@northwind.io', 'mira@orbit.test'].map((email, index) => (
                    <div key={email} className="grid grid-cols-3 border-t border-white/8 px-3 py-2 font-mono text-[11px]">
                      <span className="truncate text-cyan-100">{email}</span>
                      <span>{24 - index * 5}</span>
                      <span>${(12640 - index * 2180).toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 bg-white/[0.03] p-5 xl:border-l xl:border-t-0">
                <div className="mb-4 flex items-center gap-2 text-sm font-semibold">
                  <GitPullRequest className="h-4 w-4 text-amber-300" />
                  Schema diff
                </div>
                <div className="space-y-3">
                  {[
                    ['Added', '0004_add_subscriptions.sql', 'text-emerald-300'],
                    ['Changed', 'orders.status enum', 'text-amber-300'],
                    ['Ready', 'migration preview', 'text-cyan-300'],
                  ].map(([label, text, color]) => (
                    <div key={text} className="rounded-lg border border-white/10 bg-black/18 p-3">
                      <div className={`mb-1 text-xs font-semibold ${color}`}>{label}</div>
                      <div className="font-mono text-[11px] text-slate-300">{text}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-lg border border-cyan-300/20 bg-cyan-300/8 p-3">
                  <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-cyan-200">
                    <Sparkles className="h-3.5 w-3.5" />
                    AI Assistant
                  </div>
                  <p className="text-xs leading-5 text-slate-300">
                    Draft a query for active users with recurring revenue, then explain the joins.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function HeroSection() {
  const [version, setVersion] = useState('')
  const [versionNo, setVersionNo] = useState('')

  useEffect(() => {
    async function fetchVersion() {
      try {
        const res = await fetch('/api/version')
        const data = await res.json()
        if (data.version) {
          setVersion(data.version)
          setVersionNo(data.version.replace(/^v/, ''))
        }
      } catch {
        setVersion('')
      }
    }
    fetchVersion()
  }, [])

  const downloadUrl = version
    ? `https://github.com/Relwave/relwave-app/releases/download/${version}/RelWave_${versionNo}_x64-setup.exe`
    : 'https://github.com/Relwave/relwave-app/releases/latest'

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-10 technical-grid opacity-45" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[620px] bg-linear-to-b from-primary/12 via-accent/20 to-transparent" />

      <div className="section-shell grid gap-12 pb-20 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:pb-28">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1.5 text-xs font-semibold text-muted-foreground shadow-sm"
          >
            <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
            Open source desktop database client
            {version && <span className="rounded-full bg-primary/10 px-2 py-0.5 text-primary">{version}</span>}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="font-display text-5xl font-semibold leading-[0.98] text-foreground sm:text-6xl lg:text-7xl"
          >
            Your database deserves a better workflow.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl"
          >
            Explore schemas, build queries visually, manage migrations, and version-control database changes, all from one local-first workspace.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild size="lg" className="h-12 rounded-md px-6 text-base font-semibold" data-umami-event="hero-download-button">
              <Link href={downloadUrl}>
                <Download className="h-4 w-4" />
                Download for Windows
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 rounded-md px-6 text-base font-semibold" data-umami-event="hero-github-button">
              <Link href="https://github.com/Relwave/relwave-app" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                View on GitHub
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-9 grid grid-cols-3 gap-4 text-sm"
          >
            {[
              ['4', 'database engines'],
              ['Git', 'schema workflows'],
              ['Tauri', 'desktop runtime'],
            ].map(([value, label]) => (
              <div key={label} className="border-l border-border pl-4">
                <div className="font-display text-2xl font-semibold">{value}</div>
                <div className="mt-1 text-muted-foreground">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="lg:pl-4">
          <HeroWorkspace />
        </div>
      </div>

      <div className="section-shell flex flex-wrap items-center justify-center gap-4 border-y border-border/70 py-5 text-sm text-muted-foreground sm:justify-between">
        <span className="flex items-center gap-2 font-medium">
          <Braces className="h-4 w-4 text-primary" />
          PostgreSQL, MySQL, MariaDB, and SQLite
        </span>
        <span>Local app. Native bridge. Git-aware schema workflows.</span>
        <Image src="/icon.png" alt="" width={22} height={22} className="hidden opacity-70 sm:block" />
      </div>
    </section>
  )
}
