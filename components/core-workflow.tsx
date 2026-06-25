'use client'
import { motion } from 'framer-motion'
import { Link2, Search, DatabaseZap, GitMerge, ArrowRight } from 'lucide-react'

export function CoreWorkflow() {
  const steps = [
    {
      title: 'Connect',
      description: 'Auto-discover local databases or connect via SSH tunnels securely.',
      icon: Link2,
      color: 'text-blue-500',
      bg: 'bg-blue-500/10'
    },
    {
      title: 'Explore',
      description: 'Visualize schema relationships and query data without writing SQL.',
      icon: Search,
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10'
    },
    {
      title: 'Modify',
      description: 'Design schema changes safely with instant migration generation.',
      icon: DatabaseZap,
      color: 'text-purple-500',
      bg: 'bg-purple-500/10'
    },
    {
      title: 'Version',
      description: 'Commit schema changes and branch your database like code.',
      icon: GitMerge,
      color: 'text-rose-500',
      bg: 'bg-rose-500/10'
    }
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">The Database Workflow</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Relwave unifies the entire database lifecycle into a single, seamless developer experience.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -z-10" />
          
          {steps.map((step, i) => (
            <div key={step.title} className="flex-1 flex flex-col items-center text-center relative px-4 w-full md:w-auto mb-12 md:mb-0 group">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center"
              >
                <div className={`w-24 h-24 rounded-2xl ${step.bg} border border-border/50 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                  <step.icon className={`w-10 h-10 ${step.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </motion.div>
              
              {/* Arrow for mobile (between steps) */}
              {i < steps.length - 1 && (
                <div className="md:hidden mt-8 text-border">
                  <ArrowRight className="w-6 h-6 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
