'use client'

import { motion } from 'framer-motion'
import { downloadTargets } from '@/content/downloadTargets'
import { DownloadCard } from './download-card'
import { useOS } from '@/hooks/use-os'
import { Code2, Database, ShieldCheck, Laptop } from 'lucide-react'

export function DownloadSection() {
  const os = useOS()

  return (
    <section className="py-24 px-6 relative bg-background border-t border-border/40 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-primary/5 rounded-[100%] blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Download RelWave
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Get started in seconds on Windows or Linux. <br className="hidden sm:block" />
            Open source. Local-first. Built for developers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto w-full">
          {downloadTargets.map((target) => (
            <DownloadCard 
              key={target.id} 
              target={target} 
              isRecommended={os === target.id} 
            />
          ))}
        </div>

        {/* Trust Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm font-medium text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-primary" />
            <span>Open Source</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>Local First</span>
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
