'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Cpu, Database, FileCode2, GitBranch, HardDrive, LockKeyhole, Monitor, ServerCog, Terminal } from 'lucide-react'

const layers = [
  {
    title: 'React interface',
    detail: 'The workspace UI, editor surfaces, diagrams, and product flows live in the desktop frontend.',
    icon: Monitor,
  },
  {
    title: 'Tauri desktop shell',
    detail: 'A native boundary hosts the desktop app and coordinates process communication.',
    icon: Cpu,
  },
  {
    title: 'Node.js bridge',
    detail: 'A local bridge performs database, Git, filesystem, monitoring, SSH, and AI-provider work.',
    icon: ServerCog,
  },
  {
    title: 'Databases and project files',
    detail: 'Requests resolve against local or remote databases and local project artifacts such as migrations.',
    icon: Database,
  },
]

const capabilities = [
  {
    title: 'Local-first by design',
    description: 'RelWave is distributed as a desktop application. Database work happens from the local app rather than a hosted web console.',
    icon: HardDrive,
  },
  {
    title: 'Credential handling stays local',
    description: 'The public project describes OS keyring-based credential storage. The site avoids making broader security guarantees than the codebase supports.',
    icon: LockKeyhole,
  },
  {
    title: 'Git and migration aware',
    description: 'The bridge layer is responsible for Git and filesystem operations, making schema changes reviewable beside application code.',
    icon: GitBranch,
  },
]

export function ArchitectureSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="architecture" className="surface-cream border-y border-border py-24 sm:py-28">
      <div className="section-shell">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Local-first architecture</p>
            <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
              A desktop app with a native bridge for real database work.
            </h2>
          </div>
          <p className="text-lg leading-8 text-muted-foreground">
            RelWave’s app architecture is described as a React UI inside Tauri, with a dedicated Node.js bridge handling database, Git, filesystem, monitoring, SSH tunnel, and AI-service work through local process communication.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-5 surface-shadow sm:p-8">
            <div className="absolute inset-0 technical-grid opacity-35" />
            <div className="relative space-y-4">
              {layers.map((layer, index) => (
                <motion.div
                  key={layer.title}
                  initial={shouldReduceMotion ? false : { opacity: 0, x: -18 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative rounded-xl border border-border bg-background/90 p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <layer.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold">{layer.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{layer.detail}</p>
                    </div>
                  </div>
                  {index < layers.length - 1 && (
                    <motion.div
                      className="absolute -bottom-4 left-11 z-10 h-4 w-px bg-primary/50"
                      initial={shouldReduceMotion ? false : { scaleY: 0 }}
                      whileInView={shouldReduceMotion ? undefined : { scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.12 + 0.2 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {capabilities.map((capability) => (
              <div key={capability.title} className="rounded-xl border border-border bg-card p-5">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <capability.icon className="h-4 w-4" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">{capability.title}</h3>
                </div>
                <p className="text-sm leading-6 text-muted-foreground">{capability.description}</p>
              </div>
            ))}

            <div className="rounded-xl border border-border bg-[#101719] p-5 text-slate-100">
              <div className="mb-4 flex items-center gap-2 text-sm font-semibold"><Terminal className="h-4 w-4 text-cyan-200" /> Request path</div>
              <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-slate-300">
                {['React UI', 'Tauri command', 'Node RPC', 'Service', 'Database'].map((item, index) => (
                  <span key={item} className="flex items-center gap-2">
                    <span className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1">{item}</span>
                    {index < 4 && <FileCode2 className="h-3 w-3 text-slate-500" />}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
