'use client'
import { motion } from 'framer-motion'
import { Monitor, Cpu, Database as DbIcon, Zap, Lock, HardDrive } from 'lucide-react'

export function ArchitectureSection() {
  return (
    <section className="py-24 px-6 bg-accent/5 border-y border-border/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Native Performance. Local First.</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Relwave is built on a unique architecture that combines the speed of native drivers with the flexibility of web technologies.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Architecture Diagram */}
          <div className="flex-1 w-full max-w-lg mx-auto relative">
             <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
             
             <div className="relative flex flex-col items-center gap-6">
                
                {/* Frontend */}
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="w-full bg-background border border-border/60 rounded-2xl p-6 shadow-xl flex items-center gap-4 z-10"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                    <Monitor className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-bold">React Frontend</h3>
                    <p className="text-xs text-muted-foreground">High-performance UI & ReactFlow Canvas</p>
                  </div>
                </motion.div>

                {/* Arrow */}
                <div className="w-px h-10 bg-gradient-to-b from-border to-primary border-l border-dashed border-primary/50 relative">
                  <motion.div 
                    initial={{ top: 0 }}
                    animate={{ top: "100%" }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary"
                  />
                </div>

                {/* Node Bridge */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="w-[90%] bg-background border border-primary/40 rounded-2xl p-6 shadow-2xl shadow-primary/10 flex items-center gap-4 z-10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-primary/5" />
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30 relative z-10">
                    <Cpu className="w-6 h-6 text-primary" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-bold text-primary">Node.js Sidecar</h3>
                    <p className="text-xs text-muted-foreground">Direct OS access & credential management</p>
                  </div>
                </motion.div>

                {/* Arrow */}
                <div className="w-px h-10 bg-gradient-to-b from-primary to-border border-l border-dashed border-border/50 relative">
                  <motion.div 
                    initial={{ top: 0 }}
                    animate={{ top: "100%" }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-emerald-500"
                  />
                </div>

                {/* Database Layer */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="w-full grid grid-cols-2 gap-4 z-10"
                >
                   <div className="bg-background border border-border/60 rounded-2xl p-4 shadow-sm flex items-center gap-3">
                     <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                       <DbIcon className="w-4 h-4 text-emerald-500" />
                     </div>
                     <span className="text-sm font-semibold">Local DB</span>
                   </div>
                   <div className="bg-background border border-border/60 rounded-2xl p-4 shadow-sm flex items-center gap-3">
                     <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                       <DbIcon className="w-4 h-4 text-emerald-500" />
                     </div>
                     <span className="text-sm font-semibold">Remote via SSH</span>
                   </div>
                </motion.div>
                
             </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Native Driver Performance</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Unlike pure web-based tools, Relwave uses real native database drivers through its Node.js sidecar, ensuring maximum query execution speed and full feature support.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                <Lock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Secure Credential Storage</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Your database credentials never leave your machine. They are encrypted and stored safely in your operating system's native secure keychain.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                <HardDrive className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Direct Local Connections</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Connect to localhost databases and Docker containers instantly without needing complex tunneling services like Ngrok or Cloudflare Tunnels.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
