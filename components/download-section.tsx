'use client'

import { motion } from 'framer-motion'
import { downloadTargets } from '@/content/downloadTargets'
import { DownloadCard } from './download-card'
import { useOS } from '@/hooks/use-os'
import { Code2, Database, Github, Laptop } from 'lucide-react'
import Link from 'next/link'

export function DownloadSection() {
  const os = useOS()

  return (
    <section id="download" className="surface-cream relative overflow-hidden py-24 sm:py-28">
      <div className="section-shell">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Open source desktop app</p>
          <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Download RelWave for Windows or Linux.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            Install the native app, inspect the source on GitHub, or follow the release feed for new builds.
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {downloadTargets.map((target) => (
            <DownloadCard 
              key={target.id} 
              target={target} 
              isRecommended={os === target.id} 
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-primary" />
            <span>Open Source</span>
          </div>
          <div className="flex items-center gap-2">
            <Github className="w-4 h-4 text-primary" />
            <Link href="https://github.com/Relwave/relwave-app" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              GitHub Repository
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Laptop className="w-4 h-4 text-primary" />
            <span>Windows & Linux</span>
          </div>
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-primary" />
            <span>Direct Database Connections</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
