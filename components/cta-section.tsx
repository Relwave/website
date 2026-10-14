'use client'

import Link from 'next/link'
import type { ComponentType } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Github, GitPullRequest, Star, type LucideProps } from 'lucide-react'
import { Button } from '@/components/ui/button'

const repoDetails: Array<{ label: string; value: string; Icon: ComponentType<LucideProps> }> = [
  { label: 'Repository', value: 'Relwave/relwave-app', Icon: Github },
  { label: 'Release feed', value: 'Windows and Linux builds', Icon: GitPullRequest },
  { label: 'License', value: 'MIT open source', Icon: Star },
]

export function CTASection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="bg-background pb-24 sm:pb-28">
      <div className="section-shell">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl border border-border bg-[#101719] text-slate-100 surface-shadow"
        >
          <div className="grid lg:grid-cols-[1fr_360px]">
            <div className="p-8 sm:p-10 lg:p-14">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Open source RelWave</p>
              <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
                Bring database changes into the same review loop as your code.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Download the desktop app, inspect the implementation, or follow releases directly from the GitHub repository.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-12 bg-cyan-300 px-6 font-semibold text-slate-950 hover:bg-cyan-200" data-umami-event="download_cta">
                  <Link href="https://github.com/Relwave/relwave-app/releases/latest">
                    Latest release
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 border-white/15 bg-transparent px-6 font-semibold text-slate-100 hover:bg-white/10 hover:text-white" data-umami-event="github_cta">
                  <Link href="https://github.com/Relwave/relwave-app" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    GitHub repository
                  </Link>
                </Button>
              </div>
            </div>
            <div className="border-t border-white/10 bg-white/[0.03] p-8 lg:border-l lg:border-t-0 lg:p-10">
              {repoDetails.map(({ label, value, Icon }) => (
                <div key={label} className="border-b border-white/10 py-5 last:border-b-0">
                  <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    <Icon className="h-3.5 w-3.5" />
                    {label}
                  </div>
                  <div className="text-sm font-semibold text-slate-200">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
