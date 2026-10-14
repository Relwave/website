'use client'

import { useState } from 'react'
import type { ReactNode } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  Bot,
  Database,
  FileDiff,
  GitBranch,
  MessageSquareText,
  Play,
  Sparkles,
  Table2,
  TerminalSquare,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const tabs = [
  {
    id: 'sql',
    label: 'SQL Editor',
    icon: TerminalSquare,
    eyebrow: 'Run and review',
    title: 'A SQL workspace that keeps context close.',
    description:
      'Write queries with schema context nearby, inspect results, and move between saved work without leaving the database workspace.',
  },
  {
    id: 'diagram',
    label: 'ER Diagram',
    icon: Database,
    eyebrow: 'Explore relationships',
    title: 'Turn database structure into something you can reason about.',
    description:
      'RelWave visualizes tables, keys, and relationships so larger schemas become navigable instead of mysterious.',
  },
  {
    id: 'git',
    label: 'Git Changes',
    icon: GitBranch,
    eyebrow: 'Version schema work',
    title: 'Review database changes the way you review code.',
    description:
      'Track migrations and schema diffs in a Git-native flow before changes become part of your application history.',
  },
  {
    id: 'ai',
    label: 'AI Assistant',
    icon: Sparkles,
    eyebrow: 'Natural language to SQL',
    title: 'Ask for a query, then keep full control.',
    description:
      'Use schema-aware assistance to draft SQL and explanations. The preview is illustrative and does not execute real database operations.',
  },
] as const

type TabId = (typeof tabs)[number]['id']

function SQLVisual() {
  return (
    <div className="grid h-full min-h-[500px] grid-cols-1 bg-[#0e1518] text-slate-100 lg:grid-cols-[240px_1fr]">
      <aside className="hidden border-r border-white/10 bg-black/18 p-4 lg:block">
        <div className="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-500">Tables</div>
        {['users', 'orders', 'products', 'subscriptions'].map((table, index) => (
          <div key={table} className={`mb-2 flex items-center justify-between rounded-md px-3 py-2 text-sm ${index === 0 ? 'bg-cyan-400/10 text-cyan-100' : 'text-slate-400'}`}>
            <span className="flex items-center gap-2"><Table2 className="h-3.5 w-3.5" />{table}</span>
            <span className="font-mono text-[10px]">{index + 3}</span>
          </div>
        ))}
      </aside>
      <main className="flex min-w-0 flex-col">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex gap-2 text-xs">
            <span className="rounded-md bg-white/10 px-3 py-1 text-slate-100">Query 1</span>
            <span className="rounded-md px-3 py-1 text-slate-500">Revenue Report</span>
          </div>
          <Button size="sm" className="h-8 bg-emerald-500 text-slate-950 hover:bg-emerald-400"><Play className="h-3.5 w-3.5" /> Execute</Button>
        </div>
        <div className="grid flex-1 grid-rows-[1fr_190px]">
          <pre className="overflow-hidden p-5 font-mono text-[12px] leading-6 sm:text-sm">
            <code>{`WITH paying_users AS (
  SELECT users.id, users.email, orders.total
  FROM users
  JOIN orders ON orders.user_id = users.id
  WHERE users.status = 'active'
)
SELECT email, COUNT(*) AS orders, SUM(total) AS revenue
FROM paying_users
GROUP BY email
ORDER BY revenue DESC;`}</code>
          </pre>
          <div className="border-t border-white/10 bg-white/[0.03]">
            <div className="grid grid-cols-4 border-b border-white/10 px-4 py-2 font-mono text-[11px] text-slate-500">
              <span>email</span><span>orders</span><span>revenue</span><span>status</span>
            </div>
            {['ava@acme.dev', 'niko@northwind.io', 'mira@orbit.test'].map((email, index) => (
              <div key={email} className="grid grid-cols-4 border-b border-white/6 px-4 py-3 font-mono text-[11px]">
                <span className="truncate text-cyan-100">{email}</span><span>{24 - index * 4}</span><span>${(12640 - index * 1400).toLocaleString()}</span><span className="text-emerald-300">active</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

function DiagramVisual() {
  const tables = [
    { name: 'users', x: '8%', y: '15%', color: 'border-cyan-300/50' },
    { name: 'orders', x: '42%', y: '28%', color: 'border-amber-300/50' },
    { name: 'subscriptions', x: '23%', y: '63%', color: 'border-emerald-300/50' },
    { name: 'products', x: '67%', y: '58%', color: 'border-rose-300/50' },
  ]

  return (
    <div className="relative h-full min-h-[500px] overflow-hidden bg-[#101719] text-slate-100 technical-grid">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 900 520" preserveAspectRatio="none" aria-hidden="true">
        <path d="M 210 150 C 320 110 335 215 430 220" fill="none" stroke="rgb(103 232 249 / 0.7)" strokeWidth="2" strokeDasharray="7 8" />
        <path d="M 300 360 C 420 380 560 340 650 330" fill="none" stroke="rgb(110 231 183 / 0.65)" strokeWidth="2" strokeDasharray="7 8" />
        <path d="M 520 255 C 610 230 650 260 700 315" fill="none" stroke="rgb(252 211 77 / 0.7)" strokeWidth="2" strokeDasharray="7 8" />
      </svg>
      {tables.map((table) => (
        <div
          key={table.name}
          className={`absolute w-[210px] rounded-lg border ${table.color} bg-[#111d21]/95 shadow-2xl`}
          style={{ left: table.x, top: table.y }}
        >
          <div className="border-b border-white/10 px-3 py-2 text-sm font-semibold">{table.name}</div>
          <div className="space-y-1 p-3 font-mono text-[11px] text-slate-300">
            <div className="flex justify-between"><span className="text-amber-200">id</span><span>uuid</span></div>
            <div className="flex justify-between"><span>{table.name === 'orders' ? 'user_id' : 'created_at'}</span><span>{table.name === 'orders' ? 'uuid' : 'timestamp'}</span></div>
            <div className="flex justify-between"><span>{table.name === 'products' ? 'sku' : 'status'}</span><span>varchar</span></div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-4 rounded-lg border border-white/10 bg-black/25 p-3 text-xs text-slate-400 backdrop-blur">
        Drag to pan. Scroll to zoom. Export when ready.
      </div>
    </div>
  )
}

function GitVisual() {
  return (
    <div className="grid h-full min-h-[500px] bg-[#101719] text-slate-100 lg:grid-cols-[300px_1fr]">
      <aside className="border-b border-white/10 bg-black/20 p-5 lg:border-b-0 lg:border-r">
        <div className="mb-5 flex items-center gap-2 text-sm font-semibold"><GitBranch className="h-4 w-4 text-primary" /> main</div>
        {[
          ['Added', '0004_add_subscriptions.sql', 'text-emerald-300'],
          ['Modified', 'schema.json', 'text-amber-300'],
          ['Generated', 'drift-report.md', 'text-cyan-300'],
        ].map(([state, file, color]) => (
          <div key={file} className="mb-3 rounded-lg border border-white/10 bg-white/[0.03] p-3">
            <div className={`mb-1 text-xs font-semibold ${color}`}>{state}</div>
            <div className="truncate font-mono text-xs text-slate-300">{file}</div>
          </div>
        ))}
      </aside>
      <main className="p-5">
        <div className="mb-4 flex items-center gap-2 text-sm font-semibold"><FileDiff className="h-4 w-4 text-amber-300" /> Migration preview</div>
        <pre className="overflow-hidden rounded-lg border border-white/10 bg-black/28 p-4 font-mono text-[12px] leading-6 text-slate-200">
          <code>{`+ CREATE TABLE subscriptions (
+   id UUID PRIMARY KEY,
+   user_id UUID NOT NULL REFERENCES users(id),
+   plan VARCHAR(32) NOT NULL,
+   status VARCHAR(24) DEFAULT 'active'
+ );

~ ALTER TABLE orders
~   ADD COLUMN subscription_id UUID;`}</code>
        </pre>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {['Stage migration', 'Commit schema', 'Push branch'].map((item, index) => (
            <div key={item} className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
              <div className="mb-2 text-xs text-slate-500">Step {index + 1}</div>
              <div className="text-sm font-semibold">{item}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

function AIVisual() {
  return (
    <div className="grid h-full min-h-[500px] bg-[#101719] text-slate-100 lg:grid-cols-[1fr_320px]">
      <main className="p-5">
        <div className="mb-4 flex items-center gap-2 text-sm font-semibold"><Bot className="h-4 w-4 text-cyan-200" /> Assistant draft</div>
        <div className="space-y-4">
          <div className="max-w-xl rounded-2xl rounded-tl-sm border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-300">
            Show customers whose monthly spend dropped by more than 20% after their last subscription change.
          </div>
          <div className="rounded-2xl rounded-tr-sm border border-cyan-300/20 bg-cyan-300/8 p-4">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-cyan-100"><Sparkles className="h-4 w-4" /> Suggested SQL</div>
            <pre className="overflow-hidden font-mono text-[12px] leading-6 text-slate-200">
              <code>{`SELECT u.email, s.plan, revenue_delta
FROM subscription_changes s
JOIN users u ON u.id = s.user_id
WHERE revenue_delta < -0.20
ORDER BY changed_at DESC;`}</code>
            </pre>
          </div>
        </div>
      </main>
      <aside className="border-t border-white/10 bg-black/20 p-5 lg:border-l lg:border-t-0">
        <div className="mb-4 flex items-center gap-2 text-sm font-semibold"><MessageSquareText className="h-4 w-4 text-amber-300" /> Notes</div>
        {['Uses current schema context', 'Explains joins before you run', 'Requires your configured AI provider'].map((item) => (
          <div key={item} className="mb-3 rounded-lg border border-white/10 bg-white/[0.03] p-3 text-sm text-slate-300">{item}</div>
        ))}
        <p className="mt-6 text-xs leading-5 text-slate-500">
          Demonstration only. No query is executed from this website preview.
        </p>
      </aside>
    </div>
  )
}

const visuals: Record<TabId, ReactNode> = {
  sql: <SQLVisual />,
  diagram: <DiagramVisual />,
  git: <GitVisual />,
  ai: <AIVisual />,
}

export function Product() {
  const [activeTab, setActiveTab] = useState<TabId>('sql')
  const active = tabs.find((tab) => tab.id === activeTab) ?? tabs[0]
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="product" className="bg-background py-24 sm:py-28">
      <div className="section-shell">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Interactive product showcase</p>
            <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
              One workspace for the database tasks developers repeat every day.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
            Switch through the preview to see how RelWave brings SQL, diagrams, schema diffs, migrations, and AI-assisted query drafting into one desktop flow.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card surface-shadow">
          <div className="grid border-b border-border bg-muted/35 p-2 sm:grid-cols-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex min-h-12 items-center justify-center gap-2 rounded-md px-3 text-sm font-semibold transition-colors ${
                  activeTab === tab.id ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:bg-background/55 hover:text-foreground'
                }`}
                aria-pressed={activeTab === tab.id}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-[330px_1fr]">
            <div className="border-b border-border bg-background p-6 lg:border-b-0 lg:border-r lg:p-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">{active.eyebrow}</p>
              <h3 className="font-display text-3xl font-semibold leading-tight">{active.title}</h3>
              <p className="mt-5 text-base leading-7 text-muted-foreground">{active.description}</p>
            </div>
            <div className="min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  {visuals[activeTab]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
