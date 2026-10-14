'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Bot, Database, GitCommitHorizontal, Network, PlaySquare, Workflow } from 'lucide-react'

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
    <div className="mt-20 overflow-hidden rounded-2xl border border-border bg-card surface-shadow">
      <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Bot className="h-5 w-5" />
          </div>
          <h3 className="font-display text-3xl font-semibold">AI-assisted SQL, with the database still in your hands.</h3>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            RelWave surfaces AI assistance for natural-language-to-SQL and query explanation. The website preview is descriptive; actual use depends on the app and any configured provider.
          </p>
        </div>
        <div className="bg-[#101719] p-5 text-slate-100">
          <div className="mb-4 rounded-2xl rounded-tl-sm border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-300">
            Find subscriptions whose most recent invoice is overdue and include the customer email.
          </div>
          <div className="rounded-2xl rounded-tr-sm border border-cyan-300/20 bg-cyan-300/8 p-4">
            <pre className="overflow-hidden font-mono text-[12px] leading-6 text-slate-200">
              <code>{`SELECT u.email, s.plan, i.due_date
FROM subscriptions s
JOIN users u ON u.id = s.user_id
JOIN invoices i ON i.subscription_id = s.id
WHERE i.status = 'overdue'
ORDER BY i.due_date ASC;`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export function FeatureGrid() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="bg-background py-24 sm:py-28">
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
                <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  {feature.points.map((point) => (
                    <div key={point} className="rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium">
                      {point}
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
