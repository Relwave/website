'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ChevronRight, Github, Sparkles } from 'lucide-react'
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 bg-primary/20 blur-[120px] rounded-full -z-10 animate-pulse-glow" />

      <div className="max-w-5xl mx-auto rounded-[3rem] bg-foreground text-background p-12 md:p-20 relative overflow-hidden border border-border/10 shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-8 shadow-lg shadow-primary/20"
          >
            <Sparkles className="w-8 h-8 text-foreground" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
            Stop Guessing. <br /> Start <span className="text-secondary">Version-controlling</span>.
          </h2>

          <p className="text-background/60 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
            Manage your databases with the precision of Git. Built with Tauri and a sidecar Node.js architecture for responsive performance.
            Native desktop experience for Windows & Linux.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="default" className="bg-secondary text-foreground hover:bg-gray-700 h-14 px-10 text-lg font-bold rounded-full group">
              <Link href="https://github.com/Relwave/relwave-app/releases" className="flex items-center gap-2">
                Download Desktop App
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="link" className="border-background/20  h-14 px-10 text-lg font-bold rounded-full text-background">
              <Link href="https://github.com/Relwave/relwave-app" className="flex items-center gap-2">
                <Github className="w-5 h-5" />
                Open Source
              </Link>
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8 opacity-40 grayscale contrast-200">
            {/* Mock Logo placeholders */}
            <div className="text-sm font-bold tracking-widest uppercase">PostgreSQL</div>
            <div className="text-sm font-bold tracking-widest uppercase">MySQL</div>
            <div className="text-sm font-bold tracking-widest uppercase">SQLite</div>
            <div className="text-sm font-bold tracking-widest uppercase">MariaDB</div>
          </div>
        </div>
      </div>
    </section>
  )
}
