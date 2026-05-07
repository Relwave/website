'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Database, 
  History, 
  Layout, 
  Terminal,
  Activity,
  Layers,
  MousePointer2,
  Share2
} from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function ProductDemo() {
  const [activeTab, setActiveTab] = useState('builder')

  const tables = [
    { name: 'users', rows: 1240, status: 'synced' },
    { name: 'orders', rows: 890, status: 'synced' },
    { name: 'products', rows: 450, status: 'modified' },
    { name: 'subscriptions', rows: 12, status: 'synced' },
  ]

  return (
    <section className="py-24 px-6 bg-accent/30 border-y border-border/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Live Product Experience</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Built for Your Workflow</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From visual query building to advanced SQL execution. 
            Relwave provides the tools you need for modern database management.
          </p>
        </div>

        <Card className="overflow-hidden border-border/60 shadow-2xl bg-card/50 backdrop-blur-sm">
          {/* Window Header */}
          <div className="flex items-center justify-between px-4 h-12 border-b border-border/60 bg-muted/50">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5 mr-4">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <Badge variant="secondary" className="font-mono text-[10px] py-0 px-2 h-6">
                <Database className="w-3 h-3 mr-1" />
                production-main
              </Badge>
            </div>
          </div>

          <div className="flex h-[550px]">
            {/* Sidebar */}
            <div className="w-64 border-r border-border/60 flex flex-col bg-muted/20">
              <div className="p-3 border-b border-border/60">
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2">Navigation</div>
                <div className="space-y-1">
                  {[
                    { icon: Layout, label: 'Dashboard' },
                    { icon: Terminal, label: 'SQL Workspace' },
                    { icon: MousePointer2, label: 'Query Builder' },
                    { icon: Share2, label: 'ER Diagram' },
                  ].map(item => (
                    <div key={item.label} className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-xs cursor-pointer transition-colors ${item.label === 'Query Builder' ? 'bg-primary/10 text-primary' : 'hover:bg-muted/50'}`}>
                      <item.icon className="w-3.5 h-3.5" />
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-2">
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider px-2 py-2">Tables</div>
                {tables.map(table => (
                  <div
                    key={table.name}
                    className="w-full flex items-center justify-between px-2 py-1.5 rounded-md text-xs hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 opacity-70" />
                      {table.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col bg-background/50">
              <div className="flex border-b border-border/60">
                {[
                  { id: 'builder', label: 'Query Builder', icon: MousePointer2 },
                  { id: 'sql', label: 'SQL Editor', icon: Terminal },
                  { id: 'history', label: 'History', icon: History },
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 h-10 flex items-center gap-2 text-xs font-medium transition-all relative ${
                      activeTab === tab.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <tab.icon className="w-3.5 h-3.5" />
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div 
                        layoutId="activeTabDemo"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      />
                    )}
                  </button>
                ))}
              </div>

              <div className="flex-1 overflow-hidden relative">
                <AnimatePresence mode="wait">
                  {activeTab === 'builder' && (
                    <motion.div
                      key="builder"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex flex-col p-6"
                    >
                      <div className="flex-1 relative rounded-xl border border-border/60 bg-muted/10 overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'radial-gradient(var(--border) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                        
                        <div className="flex items-center gap-8 relative z-10">
                          <Card className="w-48 p-0 overflow-hidden border-primary/50 shadow-xl">
                            <div className="bg-primary/10 px-3 py-1.5 text-[10px] font-bold border-b border-primary/20">users</div>
                            <div className="p-2 space-y-1">
                              {['id', 'email', 'created_at'].map(f => (
                                <div key={f} className="flex items-center gap-2 text-[9px]">
                                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                  {f}
                                </div>
                              ))}
                            </div>
                          </Card>
                          
                          <div className="w-16 h-px bg-primary/40 relative">
                             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background border border-border rounded-full p-1">
                                <Share2 className="w-3 h-3 text-primary" />
                             </div>
                          </div>

                          <Card className="w-48 p-0 overflow-hidden border-border/60 shadow-xl opacity-80">
                            <div className="bg-muted px-3 py-1.5 text-[10px] font-bold border-b border-border/60">orders</div>
                            <div className="p-2 space-y-1">
                              {['id', 'user_id', 'total'].map(f => (
                                <div key={f} className="flex items-center gap-2 text-[9px]">
                                  <div className="w-1.5 h-1.5 rounded-full bg-border" />
                                  {f}
                                </div>
                              ))}
                            </div>
                          </Card>
                        </div>
                      </div>

                      <div className="mt-6 p-4 rounded-xl border border-border/60 bg-black/90 font-mono text-xs text-primary">
                        <div className="flex justify-between mb-2">
                           <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Generated SQL</span>
                           <Button variant="ghost" size="sm" className="h-6 text-[9px]">Copy SQL</Button>
                        </div>
                        SELECT users.email, orders.total FROM users <br />
                        INNER JOIN orders ON users.id = orders.user_id <br />
                        WHERE orders.total &gt; 100;
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'sql' && (
                    <motion.div
                      key="sql"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 p-6 flex flex-col"
                    >
                      <div className="flex-1 rounded-xl border border-border/60 bg-muted/20 font-mono p-4 text-xs">
                        <div className="flex items-center gap-4 mb-4 pb-2 border-b border-border/40 text-muted-foreground">
                          <span className="text-primary font-bold">Query 1</span>
                          <span>+ New Tab</span>
                        </div>
                        <div className="text-foreground">
                          <span className="text-purple-400">SELECT</span> * <span className="text-purple-400">FROM</span> products <br />
                          <span className="text-purple-400">WHERE</span> category = <span className="text-emerald-400">&apos;Electronics&apos;</span> <br />
                          <span className="text-purple-400">ORDER BY</span> price <span className="text-purple-400">DESC</span>;
                        </div>
                      </div>
                      <div className="h-1/3 mt-6 border border-border/60 rounded-xl bg-background overflow-hidden">
                        <div className="bg-muted px-4 py-2 text-[10px] font-bold border-b border-border/60 flex justify-between">
                          <span>Results (450 rows)</span>
                          <span className="text-muted-foreground">Execution time: 1.2ms</span>
                        </div>
                        <div className="p-4 flex items-center justify-center text-muted-foreground text-xs h-full">
                           Showing first 10 rows...
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'history' && (
                    <motion.div
                      key="history"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 p-6 space-y-3 overflow-y-auto"
                    >
                      {[
                        { id: '8a2b1c', user: 'yashs', msg: 'Add v2_new_field to products', time: '2m ago' },
                        { id: 'f4e3d2', user: 'relwave-bot', msg: 'Initial schema migration', time: '1h ago' },
                        { id: 'c3d4e5', user: 'sarah_m', msg: 'Update user auth constraints', time: '3h ago' },
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4 p-3 rounded-lg border border-border/60 bg-muted/30">
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                            <Activity className="w-4 h-4 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs font-bold font-mono text-primary">{item.id}</span>
                              <span className="text-[10px] text-muted-foreground">{item.time}</span>
                            </div>
                            <p className="text-xs font-medium mb-1 truncate">{item.msg}</p>
                            <div className="text-[10px] text-muted-foreground">Committed by {item.user}</div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}


