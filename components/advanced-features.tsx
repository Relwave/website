'use client'
import { motion } from 'framer-motion'
import { ShieldCheck, Activity, Sparkles, Search, Layers, PieChart } from 'lucide-react'
import { Card } from '@/components/ui/card'

export function AdvancedFeatures() {
  const features = [
    {
      title: 'SSH Tunneling',
      description: 'Connect securely to production databases via built-in SSH tunnels without exposing ports.',
      icon: ShieldCheck,
      color: 'text-rose-500',
      bg: 'bg-rose-500/10'
    },
    {
      title: 'AI Assistance',
      description: 'Write complex queries faster with context-aware AI that understands your specific schema.',
      icon: Sparkles,
      color: 'text-amber-500',
      bg: 'bg-amber-500/10'
    },
    {
      title: 'Auto Discovery',
      description: 'Automatically find local databases from Docker containers and environment variables.',
      icon: Search,
      color: 'text-blue-500',
      bg: 'bg-blue-500/10'
    },
    {
      title: 'Database Monitoring',
      description: 'Track active connections, slow queries, and table bloat in real-time.',
      icon: Activity,
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10'
    },
    {
      title: 'Schema Explorer',
      description: 'Navigate complex schemas with powerful search, filtering, and cross-referencing tools.',
      icon: Layers,
      color: 'text-purple-500',
      bg: 'bg-purple-500/10'
    },
    {
      title: 'Charts & Visualization',
      description: 'Turn your query results into beautiful charts and dashboards instantly.',
      icon: PieChart,
      color: 'text-indigo-500',
      bg: 'bg-indigo-500/10'
    }
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Powerful Supporting Features</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything else you need for professional database management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="p-6 h-full border-border/50 bg-card/50 hover:bg-accent/40 transition-colors shadow-sm">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${feature.bg} shrink-0`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
