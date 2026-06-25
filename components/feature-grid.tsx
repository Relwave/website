'use client'
import { motion } from 'framer-motion'
import { Database, GitCommitHorizontal, PlaySquare, Workflow } from 'lucide-react'

// Note: If you have actual videos, replace the `videoSrc` with the actual path (e.g. '/videos/er-diagrams.mp4')
// and set `hasVideo: true`. The component will use a video element instead of the placeholder visual.
const features = [
  {
    title: 'Visual ER Diagrams',
    description: 'Explore your schema visually. Understand complex relationships instantly with auto-generated interactive diagrams. Zoom, pan, and navigate through hundreds of tables with ease.',
    icon: Database,
    highlights: ['Relationship visualization', 'Interactive zoom & pan', 'Export capabilities'],
    hasVideo: true,
    videoSrc: './ER_DIAGRAM.mp4',
    visual: (
      <div className="relative w-full aspect-video bg-muted/50 rounded-2xl border border-border/60 overflow-hidden flex items-center justify-center group">
         <div className="absolute inset-0 bg-background/80 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-md cursor-pointer border border-primary/30">
                <PlaySquare className="w-8 h-8 text-primary ml-1" />
            </div>
         </div>
         <div className="relative w-full h-full flex items-center justify-center" style={{ backgroundImage: 'radial-gradient(var(--border) 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            {/* Abstract ER Diagram Visual */}
            <div className="flex gap-8 items-center">
              <div className="w-32 h-24 rounded-lg border-2 border-blue-500 bg-background shadow-xl p-2">
                <div className="h-2 w-1/2 bg-blue-500/20 rounded mb-3" />
                <div className="space-y-1">
                  <div className="h-1.5 w-full bg-border rounded" />
                  <div className="h-1.5 w-3/4 bg-border rounded" />
                </div>
              </div>
              <div className="w-16 h-px bg-border relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-border" />
              </div>
              <div className="w-32 h-24 rounded-lg border-2 border-purple-500 bg-background shadow-xl p-2">
                <div className="h-2 w-1/2 bg-purple-500/20 rounded mb-3" />
                <div className="space-y-1">
                  <div className="h-1.5 w-full bg-border rounded" />
                  <div className="h-1.5 w-5/6 bg-border rounded" />
                </div>
              </div>
            </div>
         </div>
      </div>
    )
  },
  {
    title: 'Migration Workflow',
    description: 'Never write a broken alter table statement again. Design schema changes in the UI, preview the exact SQL that will run, and execute with confidence knowing you can rollback.',
    icon: Workflow,
    highlights: ['Generate migrations automatically', 'Preview raw SQL', 'Safe rollbacks'],
    hasVideo: true,
    videoSrc: './MIGRATION_WORKFLOW.mp4',
    visual: (
      <div className="relative w-full aspect-video bg-muted/50 rounded-2xl border border-border/60 overflow-hidden flex flex-col group">
        <div className="absolute inset-0 bg-background/80 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-md cursor-pointer border border-primary/30">
                <PlaySquare className="w-8 h-8 text-primary ml-1" />
            </div>
         </div>
        <div className="p-4 border-b border-border/60 bg-muted/30 font-mono text-xs text-muted-foreground flex justify-between items-center">
          <span>004_add_user_preferences.sql</span>
          <span className="text-emerald-500">Preview</span>
        </div>
        <div className="flex-1 p-6 font-mono text-sm space-y-2 bg-[#0d1117] text-[#c9d1d9] overflow-hidden relative">
          <div className="text-[#8b949e]">-- Up Migration</div>
          <div className="text-[#79c0ff]">ALTER TABLE <span className="text-[#a5d6ff]">users</span></div>
          <div className="text-[#79c0ff] pl-4">ADD COLUMN <span className="text-[#a5d6ff]">preferences</span> JSONB DEFAULT <span className="text-[#a5d6ff]">'{}'</span>;</div>
          <div className="mt-4 text-[#8b949e]">-- Down Migration</div>
          <div className="text-[#79c0ff]">ALTER TABLE <span className="text-[#a5d6ff]">users</span></div>
          <div className="text-[#79c0ff] pl-4">DROP COLUMN <span className="text-[#a5d6ff]">preferences</span>;</div>
        </div>
      </div>
    )
  },
  {
    title: 'Git Integration',
    description: 'Treat your database schema like code. Relwave provides a native Git workflow to stage, commit, and push your schema changes alongside your application code.',
    icon: GitCommitHorizontal,
    highlights: ['Commit schema changes', 'View precise diffs', 'Push to remote'],
    hasVideo: true,
    videoSrc: './GIT_INTEGRATION.mp4',
    visual: (
      <div className="relative w-full aspect-video bg-muted/50 rounded-2xl border border-border/60 overflow-hidden flex flex-col group">
        <div className="absolute inset-0 bg-background/80 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-md cursor-pointer border border-primary/30">
                <PlaySquare className="w-8 h-8 text-primary ml-1" />
            </div>
         </div>
        <div className="flex-1 flex flex-col p-6 font-mono text-sm">
          <div className="flex items-center gap-2 mb-4">
            <GitCommitHorizontal className="w-5 h-5 text-primary" />
            <span className="font-bold">Schema Changes</span>
          </div>
          <div className="space-y-3 pl-4 border-l border-border ml-2">
            <div className="relative">
              <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-background" />
              <div className="flex items-center justify-between bg-emerald-500/10 border border-emerald-500/20 px-3 py-2 rounded-lg">
                <span className="text-emerald-500">+ public.users (preferences)</span>
                <span className="text-xs text-muted-foreground">Added column</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-background" />
              <div className="flex items-center justify-between bg-blue-500/10 border border-blue-500/20 px-3 py-2 rounded-lg">
                <span className="text-blue-500">~ public.orders (status)</span>
                <span className="text-xs text-muted-foreground">Modified type</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'SQL Workspace',
    description: 'A powerful, intelligent SQL editor built for speed. Run queries across multiple tabs, view execution history, and get intelligent autocomplete based on your active schema.',
    icon: PlaySquare,
    highlights: ['Multi-tab query execution', 'Intelligent autocomplete', 'Query history & saving'],
    hasVideo: true,
    videoSrc: './SQL_WORKSPACE.mp4',
    visual: (
      <div className="relative w-full aspect-video bg-muted/50 rounded-2xl border border-border/60 overflow-hidden flex flex-col group">
        <div className="absolute inset-0 bg-background/80 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-md cursor-pointer border border-primary/30">
                <PlaySquare className="w-8 h-8 text-primary ml-1" />
            </div>
         </div>
         <div className="flex bg-muted/30 border-b border-border/60 px-2 pt-2 gap-1">
            <div className="px-4 py-1.5 bg-background border border-border/60 border-b-0 rounded-t-md text-xs font-medium flex items-center gap-2">
              query_1.sql <div className="w-2 h-2 rounded-full bg-amber-500" />
            </div>
            <div className="px-4 py-1.5 text-xs font-medium text-muted-foreground flex items-center gap-2">
              metrics.sql
            </div>
         </div>
         <div className="p-4 font-mono text-sm text-[#c9d1d9] bg-[#0d1117] flex-1">
            <div><span className="text-[#ff7b72]">SELECT</span></div>
            <div className="pl-4">u.id, u.email, <span className="text-[#ff7b72]">COUNT</span>(o.id) <span className="text-[#ff7b72]">as</span> total_orders</div>
            <div><span className="text-[#ff7b72]">FROM</span> <span className="text-[#a5d6ff]">users</span> u</div>
            <div><span className="text-[#ff7b72]">LEFT JOIN</span> <span className="text-[#a5d6ff]">orders</span> o <span className="text-[#ff7b72]">ON</span> u.id = o.user_id</div>
            <div><span className="text-[#ff7b72]">GROUP BY</span> u.id, u.email</div>
            <div><span className="text-[#ff7b72]">ORDER BY</span> total_orders <span className="text-[#ff7b72]">DESC</span></div>
            <div><span className="text-[#ff7b72]">LIMIT</span> <span className="text-[#79c0ff]">10</span>;</div>
         </div>
      </div>
    )
  }
]

export function FeatureGrid() {
  return (
    <section className="py-24 px-6 bg-accent/5">
      <div className="max-w-7xl mx-auto space-y-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Deep Dive Capabilities</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to manage complex databases, perfectly integrated into one tool.
          </p>
        </div>

        {features.map((feature, i) => (
          <div 
            key={i} 
            className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${
              i % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className="flex-1 space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight">{feature.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              <ul className="space-y-4 pt-2">
                {feature.highlights.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-base font-medium text-foreground">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <motion.div 
              className="flex-1 w-full"
              initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {feature.hasVideo ? (
                <div className="w-full aspect-video rounded-2xl overflow-hidden border border-border/60 shadow-2xl relative">
                  <video 
                    src={feature.videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                feature.visual
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}

