'use client'
import { Button } from '@/components/ui/button'
import { Github, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function HeroSection() {

  const [version, setVersion] = useState('')

  useEffect(() => {
    async function fetchVersion() {
      const res = await fetch('/api/version')
      const data = await res.json()
      console.log('Latest version:', data.version)
      setVersion(data.version)
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
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 max-w-6xl leading-[1.1]"
        >
          Database management, finally done right.
        </motion.h1>


        {/* <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 max-w-4xl leading-[1.1]"
        >
          Database.<br />
          Visualized.<br />
          <span className="text-primary italic">Versioned.</span>
        </motion.h1> */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
        >
          A modern, native database client with visual schema editing,
          Git integration, and AI-powered analysis. Fast because it's
          built with Tauri — not Java, not Electron.
        </motion.p>
        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
        >
          A modern database management platform for developers.
        </motion.p> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button size="lg" className="h-12 px-8 text-base font-semibold rounded-full group">
            <Link href="https://github.com/Relwave/relwave-app/releases/download/v0.9.0-rc-5/RelWave_0.9.0-rc-5_x64-setup.exe" className="flex items-center gap-2">
              Get Started for Free
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 text-base font-semibold rounded-full">
            <Link href="https://github.com/Relwave/relwave-app" className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              View on GitHub
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}