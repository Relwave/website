'use client'
import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { 
  GitBranch, 
  MousePointer2, 
  Terminal, 
  Search, 
  Zap, 
  Monitor,
  ShieldCheck,
  Cpu
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const featureCategories = [
  {
    title: 'Visual Powerhouse',
    icon: MousePointer2,
    features: [
      { name: 'Query Builder', description: 'Drag-and-drop ReactFlow canvas for visual SQL generation.' },
      { name: 'ER Diagrams', description: 'Interactive entity-relationship visualization with auto-layout.' },
      { name: 'Chart Visualization', description: 'Transform query results into Bar, Line, Pie, or Scatter charts.' },
      { name: 'Schema Explorer', description: 'Hierarchical tree view of Databases, Schemas, and Tables.' }
    ]
  },
  {
    title: 'Native Git Control',
    icon: GitBranch,
    features: [
      { name: 'Full Lifecycle', description: 'Stage, commit, branch, and diff directly within the app.' },
      { name: 'Smart Ignorer', description: 'Automatic .gitignore generation for sensitive DB configs.' },
      { name: 'Remote Sync', description: 'Push and pull schema changes to GitHub/GitLab/Bitbucket.' },
      { name: 'Stash & Revert', description: 'Safely stash work-in-progress or revert accidental migrations.' }
    ]
  },
  {
    title: 'Smart Discovery',
    icon: Search,
    features: [
      { name: 'Docker Integration', description: 'Auto-detect containers and extract DB credentials.' },
      { name: 'Port Scanning', description: 'Find local Postgres and MySQL instances automatically.' },
      { name: 'SQLite Support', description: 'Connect to local files via native OS file pickers.' },
      { name: 'Optimistic UI', description: 'Instant feedback with background cache invalidation.' }
    ]
  },
  {
    title: 'Developer Experience',
    icon: Terminal,
    features: [
      { name: 'Multi-Tab SQL Editor', description: 'IDE-style editor with CodeMirror syntax highlighting.' },
      { name: 'Type-Aware Tables', description: 'Formatted display for JSON, Booleans, and Dates.' },
      { name: 'Export Engine', description: 'One-click export to CSV or JSON formats.' },
      { name: 'Keyboard First', description: 'Shortcuts for execution, navigation, and tab management.' }
    ]
  }
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-24">
        <section className="px-6 mb-24">
          <div className="max-w-7xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">Full Feature Reference</Badge>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
              Everything you need for <br />
              <span className="text-primary italic">Modern DB Management</span>
            </h1>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              Relwave is more than just a client. It&apos;s a complete ecosystem for 
              exploring, visualizing, and version-controlling your data infrastructure.
            </p>
          </div>
        </section>

        <section className="px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {featureCategories.map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl border border-border/60 bg-card/50 hover:border-primary/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-8">{category.title}</h2>
                <div className="grid gap-6">
                  {category.features.map(f => (
                    <div key={f.name} className="group">
                      <h3 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">{f.name}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{f.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-32 px-6">
           <div className="max-w-7xl mx-auto rounded-[3rem] bg-accent/30 border border-border/40 p-12 md:p-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <div>
                    <Badge className="mb-6">Performance & Stack</Badge>
                    <h2 className="text-4xl font-bold mb-6 tracking-tight">Built on the bleeding edge.</h2>
                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                          Relwave is a native desktop application built with Tauri and a sidecar Node.js architecture,
                          keeping the UI lightweight while the local process layer handles database and Git operations.
                          That separation helps deliver fast startup and responsive interactions.
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                       <div className="flex items-center gap-3">
                          <Cpu className="w-5 h-5 text-primary" />
                            <span className="text-sm font-bold">Tauri + Node.js Sidecar</span>
                       </div>
                       <div className="flex items-center gap-3">
                          <Zap className="w-5 h-5 text-primary" />
                          <span className="text-sm font-bold">Local Process Execution</span>
                       </div>
                       <div className="flex items-center gap-3">
                          <Monitor className="w-5 h-5 text-primary" />
                          <span className="text-sm font-bold">Cross-Platform</span>
                       </div>
                       <div className="flex items-center gap-3">
                          <ShieldCheck className="w-5 h-5 text-primary" />
                          <span className="text-sm font-bold">Process Isolation</span>
                       </div>
                    </div>
                 </div>
                 <div className="bg-background rounded-2xl border border-border/60 p-8 font-mono text-xs space-y-2 shadow-2xl">
                    <div className="text-muted-foreground">{`// tech-stack.json`}</div>
                    <div>{`{`}</div>
                    <div className="pl-4">&quot;engine&quot;: <span className="text-emerald-500">&quot;Tauri + Node.js Sidecar&quot;</span>,</div>
                    <div className="pl-4">&quot;frontend&quot;: <span className="text-emerald-500">&quot;React 18 + TS&quot;</span>,</div>
                    <div className="pl-4">&quot;styling&quot;: <span className="text-emerald-500">&quot;Tailwind + shadcn&quot;</span>,</div>
                    <div className="pl-4">&quot;git&quot;: <span className="text-emerald-500">&quot;simple-git&quot;</span>,</div>
                    <div className="pl-4">&quot;charts&quot;: <span className="text-emerald-500">&quot;Recharts&quot;</span>,</div>
                    <div className="pl-4">&quot;diagrams&quot;: <span className="text-emerald-500">&quot;ReactFlow&quot;</span></div>
                    <div>{`}`}</div>
                 </div>
              </div>
           </div>
        </section>
      </main>
    </div>
  )
}

