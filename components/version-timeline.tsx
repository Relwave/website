'use client'
import { motion } from 'framer-motion'
import { User, Calendar, CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react'

const commits = [
  {
    hash: '8f2a1b',
    author: 'alex_dev',
    date: 'Oct 24, 2025',
    title: 'Update billing schema',
    changes: ['Added "subscriptions" table', 'Modified "users" primary key'],
    status: 'deployed'
  },
  {
    hash: '4d5e6f',
    author: 'sarah_m',
    date: 'Oct 22, 2025',
    title: 'Fix edge case in auth',
    changes: ['Added unique constraint to "email"'],
    status: 'merged'
  },
  {
    hash: '1a2b3c',
    author: 'relwave-bot',
    date: 'Oct 15, 2025',
    title: 'Initial production sync',
    changes: ['Imported 42 tables from Postgres'],
    status: 'deployed'
  }
]

export function VersionTimeline() {
  return (
    <section className="py-24 px-6 bg-background overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Timeline of Truth</h2>
          <p className="text-muted-foreground text-lg">
            Every schema change is a first-class citizen. 
            Auditable, reversible, and collaborative.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border/60 hidden md:block" />

          <div className="space-y-12">
            {commits.map((commit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative md:pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-[30px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary z-10 hidden md:block" />
                
                <div className="group relative p-6 rounded-2xl border border-border/60 bg-card/50 hover:border-primary/50 transition-colors shadow-sm hover:shadow-xl hover:shadow-primary/5">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="font-mono text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                        {commit.hash}
                      </div>
                      <h3 className="font-bold text-lg">{commit.title}</h3>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5" />
                        {commit.author}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {commit.date}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    {commit.changes.map((change, j) => (
                      <div key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ArrowRight className="w-3.5 h-3.5 mt-1 shrink-0 text-primary/60" />
                        {change}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/40">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className={`w-4 h-4 ${commit.status === 'deployed' ? 'text-emerald-500' : 'text-blue-500'}`} />
                      <span className="text-xs font-medium capitalize">{commit.status}</span>
                    </div>
                    <button className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                      View Diff
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
