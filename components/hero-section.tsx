'use client'
import { Button } from '@/components/ui/button'
import { Github, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function HeroSection() {

  const [version, setVersion] = useState('')
  const [versionNo, setVersionNo] = useState('')

  useEffect(() => {
    async function fetchVersion() {
      const res = await fetch('/api/version')
      const data = await res.json()
      setVersion(data.version)
      setVersionNo(data.version.slice(1))
    }
    fetchVersion()
  }, [])

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Relwave {version} is here
          <ChevronRight className="w-3 h-3" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 max-w-6xl leading-[1.05]"
        >
          Database management,
          <br />
          finally done right.
        </motion.h1>

        <motion.i
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl font-iti md:text-4xl lg:text-5xl font-semibold text-foreground/90 mb-6 max-w-4xl leading-relaxed"
        >
          Visualize. Query. Version.
        </motion.i>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed"
        >
          RelWave is a native database client for PostgreSQL, MySQL, MariaDB, and SQLite,
          combining visual ER diagrams, Git-powered workflows, migration management, and AI
          assistance in one fast desktop application.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10 mb-8"
        >
          <Button size="lg" className="h-12 px-8 text-base font-semibold rounded-full group" data-umami-event='hero-download-button'>
            <Link href={`https://github.com/Relwave/relwave-app/releases/download/${version}/RelWave_${versionNo}_x64-setup.exe`} className="flex items-center gap-2">
              Get Started for Free
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 text-base font-semibold rounded-full" data-umami-event='hero-github-button'>
            <Link href="https://github.com/Relwave/relwave-app" className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              Star us on GitHub
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8"
        >
          <a href="https://backlinklog.com/listing/relwave.tech?utm_source=backlinklog&utm_medium=badge">
            <img src="https://backlinklog.com/badge/relwave.tech.svg" alt="Listed on BacklinkLog" className="h-[54px] w-auto hover:opacity-90 transition-opacity" />
          </a>
          <a href="https://www.producthunt.com/products/relwave?embed=true&amp;utm_source=badge-featured&amp;utm_medium=badge&amp;utm_campaign=badge-relwave" target="_blank" rel="noopener noreferrer">
            <img alt="RelWave - A local-first database client with Git-powered workflows | Product Hunt" src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1187949&amp;theme=light&amp;t=1783184136158" className="h-[54px] w-auto hover:opacity-90 transition-opacity" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}