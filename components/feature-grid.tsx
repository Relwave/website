'use client'
import { motion } from 'framer-motion'
import { MousePointer2, Search, GitBranch, Database } from 'lucide-react'

const features = [
  {
    title: 'Visual Query Builder',
    description: 'Build complex SQL queries without writing a single line of code. Our ReactFlow-based canvas lets you drag tables, draw relationships, and generate optimized SQL in real-time.',
    icon: MousePointer2,
    visual: (
      <div className="relative w-full aspect-video bg-muted/50 rounded-2xl border border-border/60 overflow-hidden flex items-center justify-center">
         <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: 'radial-gradient(var(--border) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            <motion.div 
              initial={{ x: -20, y: -20 }}
              animate={{ x: 20, y: 20 }}
              transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
              className="w-32 h-20 rounded-lg border-2 border-primary bg-background shadow-xl flex flex-col p-2"
            >
              <div className="h-2 w-1/2 bg-primary/20 rounded mb-2" />
              <div className="h-1 w-3/4 bg-border rounded" />
            </motion.div>
            <div className="w-10 h-px bg-primary/40 mx-2" />
            <motion.div 
              initial={{ x: 20, y: 20 }}
              animate={{ x: -20, y: -20 }}
              transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
              className="w-32 h-20 rounded-lg border-2 border-emerald-500 bg-background shadow-xl flex flex-col p-2"
            >
              <div className="h-2 w-1/2 bg-emerald-500/20 rounded mb-2" />
              <div className="h-1 w-3/4 bg-border rounded" />
            </motion.div>
         </div>
      </div>
    )
  },
  {
    title: 'Smart Auto-Discovery',
    description: 'Relwave automatically scans your local machine and Docker containers to find running databases. One-click connection with pre-filled credentials extracted from environment variables.',
    icon: Search,
    visual: (
      <div className="relative w-full aspect-video bg-muted/50 rounded-2xl border border-border/60 overflow-hidden p-6">
        <div className="space-y-3">
          {[
            { name: 'Local Postgres', type: 'Docker', port: 5432 },
            { name: 'Marketing_DB', type: 'Local', port: 3306 },
            { name: 'SQLite Project', type: 'File', path: '~/dev/app.db' }
          ].map((db, i) => (
            <motion.div 
              key={i}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center justify-between p-3 bg-background border border-border/60 rounded-xl shadow-sm"
            >
              <div className="flex items-center gap-3">
                <Database className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold font-mono">{db.name}</span>
              </div>
              <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">{db.type}</div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  },
  {
    title: 'Full Git Lifecycle',
    description: 'The only DB client with real Git version control built-in. Stage, commit, branch, and push your schema changes alongside your code using a native Git workflow.',
    icon: GitBranch,
    visual: (
      <div className="relative w-full aspect-video bg-muted/50 rounded-2xl border border-border/60 overflow-hidden flex flex-col">
        <div className="p-3 border-b border-border/60 bg-muted/30 flex gap-2">
          <div className="w-2 h-2 rounded-full bg-rose-500" />
          <div className="w-2 h-2 rounded-full bg-amber-500" />
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
        </div>
        <div className="flex-1 p-4 font-mono text-[10px] space-y-1">
          <div className="text-muted-foreground">$ git status</div>
          <div className="text-emerald-500">modified: schema/orders.sql</div>
          <div className="text-emerald-500">new file: migrations/002_add_billing.sql</div>
          <div className="text-muted-foreground mt-2">$ git commit -m &quot;Update schema&quot;</div>
          <div className="text-primary">[main 8f2a1b] Update schema</div>
        </div>
      </div>
    )
  },
  {
    title: 'Real-time Insights',
    description: 'Monitor your database performance with aggregate statistics and instant chart visualization. Track table sizes, row counts, and query execution times at a glance.',
    icon: Database,
    visual: (
      <div className="relative w-full aspect-video bg-muted/50 rounded-2xl border border-border/60 overflow-hidden p-6 flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
           <div className="p-3 bg-background border border-border/60 rounded-xl">
              <div className="text-[10px] text-muted-foreground uppercase font-bold mb-1">Total Rows</div>
              <div className="text-xl font-black text-primary">1.2M</div>
           </div>
           <div className="p-3 bg-background border border-border/60 rounded-xl">
              <div className="text-[10px] text-muted-foreground uppercase font-bold mb-1">DB Size</div>
              <div className="text-xl font-black text-primary">450MB</div>
           </div>
        </div>
        <div className="flex-1 flex items-end gap-1 px-2">
          {[30, 60, 40, 80, 50, 90, 70].map((h, i) => (
            <motion.div 
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: h + '%' }}
              className="flex-1 bg-primary/20 border-t-2 border-primary"
            />
          ))}
        </div>
      </div>
    )
  }
]

export function FeatureGrid() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-32">
        {features.map((feature, i) => (
          <div 
            key={i} 
            className={`flex flex-col lg:flex-row gap-16 items-center ${
              i % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className="flex-1 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight">{feature.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              <ul className="space-y-3">
                {['Tauri + Node.js Sidecar Speed', 'Docker Credential Extraction', 'Open Source'].map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <motion.div 
              className="flex-1 w-full"
              initial={{ opacity: 0, x: i % 2 === 0 ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {feature.visual}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}

