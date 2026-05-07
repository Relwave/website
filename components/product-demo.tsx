'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Database, 
  Search, 
  History, 
  Layout, 
  Plus, 
  Terminal,
  Activity,
  GitCommit,
  Layers
} from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function ProductDemo() {
  const [activeTab, setActiveTab] = useState('schema')
  const [selectedTable, setSelectedTable] = useState('users')

  const tables = [
    { name: 'users', rows: 1240, status: 'synced' },
    { name: 'products', rows: 450, status: 'modified' },
    { name: 'orders', rows: 890, status: 'synced' },
    { name: 'categories', rows: 12, status: 'synced' },
  ]

  const schema = {
    users: [
      { name: 'id', type: 'uuid', primary: true },
      { name: 'email', type: 'varchar(255)', unique: true },
      { name: 'created_at', type: 'timestamp' },
      { name: 'is_active', type: 'boolean' },
    ],
    products: [
      { name: 'id', type: 'uuid', primary: true },
      { name: 'name', type: 'varchar(255)' },
      { name: 'price', type: 'decimal' },
      { name: 'v2_new_field', type: 'jsonb', status: 'new' },
    ]
  }

  const history = [
    { id: '8a2b1c', user: 'yashs', msg: 'Add v2_new_field to products', time: '2m ago' },
    { id: 'f4e3d2', user: 'relwave-bot', msg: 'Initial schema migration', time: '1h ago' },
  ]

  return (
    <section className="py-24 px-6 bg-accent/30 border-y border-border/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Interactive Demo</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">The Modern DB Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience a database client that understands your workflow. 
            No more manual tracking. Everything is versioned by default.
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
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search schema..." 
                  className="bg-background border border-border/60 rounded-md px-8 py-1 text-xs w-48 focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
          </div>

          <div className="flex h-[500px]">
            {/* Sidebar */}
            <div className="w-64 border-r border-border/60 flex flex-col">
              <div className="p-3 border-b border-border/60">
                <Button variant="outline" size="sm" className="w-full justify-start gap-2 h-8 text-xs font-medium">
                  <Plus className="w-3.5 h-3.5" />
                  New Connection
                </Button>
              </div>
              <div className="flex-1 overflow-y-auto p-2">
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider px-2 py-2">Tables</div>
                {tables.map(table => (
                  <button
                    key={table.name}
                    onClick={() => setSelectedTable(table.name)}
                    className={`w-full flex items-center justify-between px-2 py-1.5 rounded-md text-xs transition-colors ${
                      selectedTable === table.name ? 'bg-primary/10 text-primary' : 'hover:bg-muted/50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 opacity-70" />
                      {table.name}
                    </div>
                    {table.status === 'modified' && (
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
              <div className="flex border-b border-border/60">
                {[
                  { id: 'schema', label: 'Schema', icon: Layout },
                  { id: 'history', label: 'History', icon: History },
                  { id: 'terminal', label: 'SQL Console', icon: Terminal },
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
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      />
                    )}
                  </button>
                ))}
              </div>

              <div className="flex-1 overflow-hidden p-6 bg-background/30">
                <AnimatePresence mode="wait">
                  {activeTab === 'schema' && (
                    <motion.div
                      key="schema"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold flex items-center gap-2">
                          {selectedTable}
                          <Badge variant="outline" className="text-[10px]">Table</Badge>
                        </h3>
                        <Button size="sm" variant="outline" className="h-8 gap-2">
                          <GitCommit className="w-3.5 h-3.5" />
                          Commit Changes
                        </Button>
                      </div>
                      
                      <div className="border border-border/60 rounded-lg overflow-hidden">
                        <table className="w-full text-xs text-left">
                          <thead className="bg-muted/50 border-b border-border/60">
                            <tr>
                              <th className="px-4 py-2 font-medium">Column Name</th>
                              <th className="px-4 py-2 font-medium">Type</th>
                              <th className="px-4 py-2 font-medium">Constraints</th>
                            </tr>
                          </thead>
                          <tbody>
                            {(schema[selectedTable as keyof typeof schema] || []).map((col, i) => (
                              <tr key={i} className={`border-b border-border/40 last:border-0 ${col.status === 'new' ? 'bg-emerald-500/5' : ''}`}>
                                <td className="px-4 py-3 flex items-center gap-2">
                                  {col.name}
                                  {col.status === 'new' && <Badge variant="default" className="bg-emerald-500/20 text-emerald-500 hover:bg-emerald-500/20 text-[9px] py-0 h-4">NEW</Badge>}
                                </td>
                                <td className="px-4 py-3 font-mono opacity-70">{col.type}</td>
                                <td className="px-4 py-3">
                                  {col.primary && <Badge variant="outline" className="text-[9px]">PK</Badge>}
                                  {col.unique && <Badge variant="outline" className="text-[9px] ml-1">UQ</Badge>}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'history' && (
                    <motion.div
                      key="history"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="space-y-4"
                    >
                      <div className="space-y-3">
                        {history.map((item, i) => (
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
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'terminal' && (
                    <motion.div
                      key="terminal"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="bg-black/90 rounded-lg p-4 font-mono text-xs text-emerald-500 h-full"
                    >
                      <div className="mb-2 text-white/50">-- Schema change detected</div>
                      <div className="mb-2">ALTER TABLE products ADD COLUMN v2_new_field JSONB;</div>
                      <div className="mb-2 text-white/50">-- Generating diff...</div>
                      <div className="text-emerald-500 cursor-blink">_</div>
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

