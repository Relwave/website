'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { DownloadTarget } from '@/content/downloadTargets'
import { Monitor, Terminal, Download, FileText, Check, Copy, ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface DownloadCardProps {
  target: DownloadTarget
  isRecommended: boolean
}

export function DownloadCard({ target, isRecommended }: DownloadCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    if (target.cliCommand) {
      navigator.clipboard.writeText(target.cliCommand)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const Icon = target.id === 'windows' ? Monitor : Terminal

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative flex flex-col p-6 md:p-8 rounded-3xl border transition-all duration-300 ${isRecommended
        ? 'bg-card/80 border-primary/40 shadow-[0_0_40px_-15px_rgba(var(--primary),0.3)]'
        : 'bg-card/30 border-border/50 hover:bg-card/50 hover:border-border/80'
        } backdrop-blur-xl`}
    >
      {isRecommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-lg">
          <Check className="w-3 h-3" />
          Recommended for your OS
        </div>
      )}

      <div className="flex items-center gap-4 mb-6">
        <div className={`p-3 rounded-2xl ${isRecommended ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
          <Icon className="w-8 h-8" />
        </div>
        <div>
          <h3 className="text-2xl font-bold">{target.name}</h3>
          <p className="text-muted-foreground text-sm">{target.description}</p>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-auto mb-6">
        <Button
          asChild size="lg" className={`w-full font-bold group ${isRecommended ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}>
          <Link href={target.primaryDownload.url} data-umami-event={target.primaryDownload.label}>
            <Download className="w-4 h-4 mr-2" />
            {target.primaryDownload.label}
            <ChevronRight className="w-4 h-4 ml-1 opacity-50 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>

        {target.secondaryDownload && (
          <Button asChild variant="outline" size="sm" className="w-full text-muted-foreground hover:text-foreground">
            <Link href={target.secondaryDownload.url} data-umami-event={target.secondaryDownload.label}>
              {target.id === 'windows' ? <FileText className="w-4 h-4 mr-2" /> : <Download className="w-4 h-4 mr-2" />}
              {target.secondaryDownload.label}
            </Link>
          </Button>
        )}
      </div>

      {target.requirements && (
        <p className="text-xs text-center text-muted-foreground/70">
          {target.requirements}
        </p>
      )}

      {target.cliCommand && (
        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider font-semibold">CLI Installation</span>
          </div>
          <div className="relative group bg-background/50 rounded-xl border border-border/50 overflow-hidden">
            <pre className="p-4 text-[10px] md:text-xs font-mono text-muted-foreground whitespace-pre-wrap break-all">
              <code>{target.cliCommand}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="absolute top-2 right-2 p-2 bg-card/80 backdrop-blur border border-border/50 rounded-lg text-muted-foreground hover:text-foreground hover:bg-card transition-all opacity-0 group-hover:opacity-100"
              aria-label="Copy to clipboard"
            >
              {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>
      )}
    </motion.div>
  )
}
