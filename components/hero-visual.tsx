'use client'
import { motion } from 'framer-motion'
import { Database, GitBranch, Table, Share2 } from 'lucide-react'

export function HeroVisual() {
  const nodes = [
    { id: 1, icon: Database, label: 'Users', x: '20%', y: '30%', color: 'text-blue-500' },
    { id: 2, icon: Table, label: 'Orders', x: '50%', y: '20%', color: 'text-purple-500' },
    { id: 3, icon: Table, label: 'Products', x: '80%', y: '40%', color: 'text-emerald-500' },
    { id: 4, icon: GitBranch, label: 'v2-schema', x: '50%', y: '70%', color: 'text-amber-500' },
    { id: 5, icon: Share2, label: 'Relations', x: '30%', y: '60%', color: 'text-rose-500' },
  ]

  const connections = [
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 1, to: 5 },
    { from: 5, to: 4 },
    { from: 2, to: 4 },
  ]

  const particles = [
    { id: 0, x: '12%', y: '45%', duration: 3.2, delay: 0.5 },
    { id: 1, x: '85%', y: '20%', duration: 4.1, delay: 1.2 },
    { id: 2, x: '50%', y: '80%', duration: 2.8, delay: 0.1 },
    { id: 3, x: '25%', y: '10%', duration: 3.5, delay: 0.8 },
    { id: 4, x: '70%', y: '60%', duration: 4.5, delay: 1.5 },
    { id: 5, x: '40%', y: '30%', duration: 3.0, delay: 0.3 },
  ]

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_70%)] opacity-[0.03] dark:opacity-[0.07]" />
      <div 
        className="absolute inset-0" 
        style={{ 
          backgroundImage: 'radial-gradient(var(--border) 1px, transparent 1px)', 
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
        }} 
      />

      <div className="relative w-full max-w-4xl h-full">
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {connections.map((conn, i) => {
            const fromNode = nodes.find(n => n.id === conn.from)!
            const toNode = nodes.find(n => n.id === conn.to)!
            return (
              <motion.line
                key={i}
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                className="text-border/40"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: i * 0.2 }}
              />
            )
          })}
        </svg>

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.div
            key={node.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: 'spring', 
              stiffness: 260, 
              damping: 20, 
              delay: i * 0.1 
            }}
            style={{ left: node.x, top: node.y }}
            className="absolute -translate-x-1/2 -translate-y-1/2 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-xl bg-card border border-border shadow-sm flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all">
                  <node.icon className={`w-6 h-6 ${node.color}`} />
                </div>
                <div className="px-2 py-0.5 rounded-md bg-background/80 backdrop-blur-sm border border-border text-[10px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  {node.label}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Floating Particles/Commits */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute w-2 h-2 rounded-full bg-primary/40"
            initial={{ 
              x: p.x, 
              y: p.y,
              opacity: 0 
            }}
            animate={{ 
              y: [null, '-20%', '120%'],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: p.duration, 
              repeat: Infinity, 
              ease: "linear",
              delay: p.delay
            }}
          />
        ))}
      </div>
    </div>
  )
}

