'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, DatabaseZap, GitMerge, Link2, Search } from 'lucide-react'

const steps = [
  {
    title: 'Connect',
    description: 'Open local or remote database connections, including SSH tunnel workflows represented in the app.',
    icon: Link2,
  },
  {
    title: 'Explore',
    description: 'Inspect tables, relationships, and results through schema navigation, ER diagrams, and SQL views.',
    icon: Search,
  },
  {
    title: 'Modify',
    description: 'Use migration workflows to preview database structure changes before applying them.',
    icon: DatabaseZap,
  },
  {
    title: 'Version',
    description: 'Track schema and migration files in Git so database changes move with your codebase.',
    icon: GitMerge,
  },
]

export function CoreWorkflow() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="workflow" className="surface-cream relative overflow-hidden border-y border-border py-24 sm:py-28">
      <div className="section-shell">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Database workflow visualization</p>
          <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
            From connection to versioned schema change.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            RelWave is organized around the loop developers actually follow: understand the database, change it carefully, and keep the change reviewable.
          </p>
        </div>

        <div className="relative rounded-2xl border border-border bg-card p-4 surface-shadow sm:p-8">
          <svg className="absolute inset-0 hidden h-full w-full md:block" viewBox="0 0 1100 360" preserveAspectRatio="none" aria-hidden="true">
            <motion.path
              d="M 145 180 C 270 90 360 90 485 180 S 700 270 825 180 S 960 90 1030 180"
              fill="none"
              stroke="currentColor"
              className="text-primary/35"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="12 12"
              initial={shouldReduceMotion ? false : { pathLength: 0 }}
              whileInView={shouldReduceMotion ? undefined : { pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />
          </svg>

          <div className="relative grid gap-4 md:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-border bg-background p-5"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <step.icon className="h-5 w-5" />
                  </div>
                  {index < steps.length - 1 && <ArrowRight className="h-4 w-4 text-muted-foreground md:hidden" />}
                  <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                </div>
                <h3 className="font-display text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
