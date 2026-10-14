'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Bot, Check, Database, GitCommitHorizontal, Network, PlaySquare, Workflow } from 'lucide-react'

const features = [
  {
    title: 'Schema exploration and ER diagrams',
    description:
      'Move from table lists into a visual model of primary keys, foreign keys, and relationships so you can understand unfamiliar databases faster.',
    icon: Network,
    videoSrc: '/ER_DIAGRAM.mp4',
    points: ['Interactive relationship maps', 'Table and column context', 'Export-oriented diagram views'],
  },
  {
    title: 'SQL editor and query results',
    description:
      'Write SQL in a focused workspace, run queries, and inspect result sets without losing the schema context that shaped the query.',
    icon: PlaySquare,
    videoSrc: '/SQL_WORKSPACE.mp4',
    points: ['Multi-tab query workspace', 'Execution results', 'History-oriented workflows'],
  },
  {
    title: 'Migration workflow',
    description:
      'Design database structure changes, preview migration SQL, and keep those changes understandable before they reach production.',
    icon: Workflow,
    videoSrc: '/MIGRATION_WORKFLOW.mp4',
    points: ['Migration preview', 'Schema change flow', 'Rollback-oriented review'],
  },
  {
    title: 'Git-native schema changes',
    description:
      'Stage and review schema-related files with the same mental model developers already use for application code.',
    icon: GitCommitHorizontal,
    videoSrc: '/GIT_INTEGRATION.mp4',
    points: ['Schema diffs', 'Migration files', 'Branch-aware review'],
  },
]

function IntegrationStrip() {
  const databases = ['PostgreSQL', 'MySQL', 'MariaDB', 'SQLite']

  return (
    <div className="mt-20 grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Database className="h-5 w-5" />
        </div>
        <h3 className="font-display text-3xl font-semibold">Built for the databases teams already run.</h3>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          RelWave currently presents support for PostgreSQL, MySQL, MariaDB, and SQLite, with desktop workflows that can connect to local or remote environments.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {databases.map((database) => (
          <div key={database} className="rounded-xl border border-border bg-card p-5 text-center shadow-sm">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
              <Database className="h-5 w-5" />
            </div>
            <div className="text-sm font-semibold">{database}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function AIFeature() {
  return (
    <div className="surface-shadow mt-20 overflow-hidden rounded-2xl border border-border bg-card">
      <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
        <div className="relative overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="absolute -right-20 -top-24 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
          <div className="relative">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/12 text-primary shadow-sm">
              <Bot className="h-5 w-5" />
            </div>
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Schema-aware assistant
            </div>
            <h3 className="font-display text-3xl font-semibold leading-tight">AI-assisted SQL, with the database still in your hands.</h3>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              RelWave surfaces AI assistance for natural-language-to-SQL and query explanation. The website preview is descriptive; actual use depends on the app and any configured provider.
            </p>
            <div className="mt-7 flex flex-wrap gap-2 text-xs font-medium text-muted-foreground">
              <span className="rounded-full border border-border bg-background/60 px-3 py-1.5">Natural language</span>
              <span className="rounded-full border border-border bg-background/60 px-3 py-1.5">Query explanation</span>
              <span className="rounded-full border border-border bg-background/60 px-3 py-1.5">Your schema</span>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden bg-[#101719] p-5 text-slate-100 sm:p-7">
          <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />
          <div className="relative">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-300/15 text-cyan-200">
                  <Bot className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold">RelWave AI</div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Ready to help
                  </div>
                </div>
              </div>
              <span className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-slate-500">
                SQL
              </span>
            </div>
            <div className="mb-3 ml-8 rounded-2xl rounded-tr-sm border border-white/10 bg-white/6 p-4 text-sm leading-6 text-slate-300">
              Find subscriptions whose most recent invoice is overdue and include the customer email.
            </div>
            <div className="rounded-2xl rounded-tl-sm border border-cyan-300/25 bg-cyan-300/8 p-4 shadow-[0_0_30px_rgba(103,232,249,0.08)]">
              <div className="mb-3 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-cyan-200">
                <span>Generated query</span>
                <span className="rounded bg-cyan-300/10 px-2 py-1 text-cyan-300">Preview</span>
              </div>
              <pre className="overflow-x-auto font-mono text-[12px] leading-6 text-slate-200">
                <code><span className="text-cyan-200">SELECT</span> u.email, s.plan, i.due_date{'\n'}
<span className="text-cyan-200">FROM</span> subscriptions s{'\n'}
<span className="text-cyan-200">JOIN</span> users u <span className="text-cyan-200">ON</span> u.id = s.user_id{'\n'}
<span className="text-cyan-200">JOIN</span> invoices i <span className="text-cyan-200">ON</span> i.subscription_id = s.id{'\n'}
<span className="text-cyan-200">WHERE</span> i.status = <span className="text-amber-200">&apos;overdue&apos;</span>{'\n'}
<span className="text-cyan-200">ORDER BY</span> i.due_date <span className="text-cyan-200">ASC</span>;</code>
              </pre>
            </div>
            <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-500">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Uses schema context from your active connection
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function FeatureGrid() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="surface-blue py-24 sm:py-28">
      <div className="section-shell">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Product capabilities</p>
          <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Visual where it should be, textual where it has to be.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            The most important RelWave workflows get large, specific demonstrations instead of a wall of identical feature cards.
          </p>
        </div>

        <div className="space-y-20">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`grid gap-8 lg:grid-cols-2 lg:items-center ${index % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''}`}
            >
              <div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">{feature.title}</h3>
                <p className="mt-5 text-base leading-7 text-muted-foreground">{feature.description}</p>
                <div className="mt-7 overflow-hidden rounded-xl border border-border/80 bg-card/65 p-1.5 shadow-sm">
                  {feature.points.map((point, pointIndex) => (
                    <div
                      key={point}
                      className="group flex items-center gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-primary/10 sm:px-3.5"
                    >
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-primary/25 bg-primary/12 font-mono text-[11px] font-bold text-primary"
                        aria-hidden="true"
                      >
                        {String(pointIndex + 1).padStart(2, '0')}
                      </span>
                      <span className="flex min-w-0 flex-1 items-center gap-2 text-sm font-semibold text-card-foreground">
                        <Check className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                        <span>{point}</span>
                      </span>
                      <ArrowUpRight
                        className="h-4 w-4 shrink-0 text-muted-foreground/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                        aria-hidden="true"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55 }}
                className="overflow-hidden rounded-2xl border border-border bg-card surface-shadow"
              >
                <video src={feature.videoSrc} autoPlay muted loop playsInline className="aspect-video h-full w-full object-cover" />
              </motion.div>
            </div>
          ))}
        </div>

        <AIFeature />
        <IntegrationStrip />
      </div>
    </section>
  )
}
