'use client'
import { motion } from 'framer-motion'
import { Zap, Share2, GitPullRequest } from 'lucide-react'

const features = [
  {
    title: 'Instant Schema Diffs',
    description: 'Relwave automatically tracks every change you make to your database. View SQL diffs before you commit, ensuring no accidental deletions or migrations.',
    icon: GitPullRequest,
    visual: (
      <div className="relative w-full aspect-video bg-muted/50 rounded-2xl border border-border/60 overflow-hidden flex items-center justify-center">
        <div className="flex flex-col gap-2 w-3/4">
          <div className="h-6 w-full bg-emerald-500/10 border border-emerald-500/20 rounded-md flex items-center px-3 text-[10px] text-emerald-500 font-mono">
            + ALTER TABLE orders ADD COLUMN status VARCHAR(20);
          </div>
          <div className="h-6 w-full bg-rose-500/10 border border-rose-500/20 rounded-md flex items-center px-3 text-[10px] text-rose-500 font-mono">
            - DROP COLUMN old_status;
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Native Branching',
    description: 'Create sandbox environments for your database schema. Branch off your main production schema, test changes, and merge back with ease.',
    icon: Share2,
    visual: (
      <div className="relative w-full aspect-video flex items-center justify-center">
        <svg className="w-full h-full max-w-[300px]" viewBox="0 0 200 100">
          <motion.path
            d="M 20 50 L 180 50"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-border"
          />
          <motion.path
            d="M 60 50 Q 80 20 120 20 L 180 20"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 4"
            fill="none"
            className="text-primary"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1 }}
          />
          <circle cx="60" cy="50" r="4" fill="currentColor" className="text-foreground" />
          <circle cx="120" cy="20" r="4" fill="currentColor" className="text-primary" />
          <text x="130" y="15" fontSize="8" className="fill-primary font-mono">dev-schema</text>
          <text x="20" y="65" fontSize="8" className="fill-muted-foreground font-mono">main</text>
        </svg>
      </div>
    )
  },
  {
    title: 'Extreme Performance',
    description: 'Built with Rust and optimized for speed. Handle millions of rows and complex schema visualizations without breaking a sweat.',
    icon: Zap,
    visual: (
      <div className="relative w-full aspect-video bg-muted/50 rounded-2xl border border-border/60 overflow-hidden flex flex-col p-4 gap-4">
        <div className="flex items-center justify-between">
          <div className="text-[10px] font-mono opacity-50">Query performance</div>
          <div className="text-[10px] font-mono text-emerald-500">1.2ms</div>
        </div>
        <div className="flex-1 flex items-end gap-1">
          {[40, 70, 45, 90, 65, 80, 55, 95, 40].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 bg-primary/20 border-t border-primary/40"
              initial={{ height: 0 }}
              whileInView={{ height: h + '%' }}
              transition={{ delay: i * 0.05, type: 'spring' }}
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
                {['Safe by default', 'Developer first', 'Open source'].map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm font-medium">
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
