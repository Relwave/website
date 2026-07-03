'use client'
import Image from 'next/image'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import {
    Database,
    Terminal,
    Activity,
    Layers,
    GitCommitHorizontal,
} from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SQLWorkSpace } from './products/sql-workspace'
import { ERDigram } from './products/er-diagram'
import { Monitoring } from './products/monitoring'
import { GitStatus } from './products/git-status'
import { Data } from './products/data'

export function Product() {
    const [activePanel, setActivePanel] = useState('data')
    const [activeTable, setActiveTable] = useState('users')
    const [sidebarTab, setSidebarTab] = useState<'tables' | 'history'>('tables')

    const tables = [
        { name: 'users', schema: 'public', rows: 1240 },
        { name: 'orders', schema: 'public', rows: 890 },
        { name: 'products', schema: 'public', rows: 450 },
        { name: 'subscriptions', schema: 'public', rows: 12 },
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

                <Card className="overflow-hidden border-border/60 shadow-2xl bg-card/50 backdrop-blur-sm rounded-xl">
                    {/* Desktop Interactive View */}
                    <div className="hidden lg:flex w-full h-[600px] flex-col app-surface text-foreground overflow-hidden bg-background">
                        <div className="flex-1 flex overflow-hidden pl-15 min-w-0 relative">

                            {/* Vertical Icon Bar (Exact matching structure) */}
                            <nav className="fixed left-0 top-10 h-[600px] w-15 bg-sidebar/90 border-r border-sidebar-border z-40 flex flex-col items-center py-4 gap-2 backdrop-blur-xl shadow-[1px_0_0_rgba(255,255,255,0.03)_inset]">
                                <div className="w-8 h-px bg-sidebar-border my-2" />
                                <div className="flex flex-col gap-2">
                                    {[
                                        { panel: 'data', icon: Layers, label: 'Data View' },
                                        { panel: 'sql-workspace', icon: Terminal, label: 'SQL Workspace' },
                                        { panel: 'er-diagram', icon: Database, label: 'ER Diagram' },
                                        { panel: 'monitoring', icon: Activity, label: 'Monitoring' },
                                        { panel: 'git-status', icon: GitCommitHorizontal, label: 'Git Status' },
                                    ].map(item => (
                                        <Button
                                            key={item.panel}
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => setActivePanel(item.panel)}
                                            className={`w-10 h-10 rounded-lg transition-all duration-150 ${activePanel === item.panel
                                                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                                                : 'text-sidebar-foreground/62 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                                                }`}
                                        >
                                            <item.icon className="h-5 w-5" />
                                        </Button>
                                    ))}
                                </div>
                            </nav>

                            {/* Main Content Area */}
                            <main className="flex-1 min-w-0 flex flex-col overflow-hidden ml-1 relative">
                                <AnimatePresence mode="wait">

                                    {/* DATA VIEW PANEL */}
                                    {activePanel === 'data' && (
                                        <Data
                                            tables={tables}
                                            activeTable={activeTable}
                                            setActiveTable={setActiveTable}
                                        />
                                    )}

                                    {/* SQL WORKSPACE PANEL */}
                                    {activePanel === 'sql-workspace' && (
                                        <SQLWorkSpace
                                            setSidebarTab={setSidebarTab}
                                            sidebarTab={sidebarTab}
                                            tables={tables}
                                        />
                                    )}

                                    {/* ER DIAGRAM PANEL */}
                                    {activePanel === 'er-diagram' && (
                                        <ERDigram />
                                    )}

                                    {/* MONITORING PANEL */}
                                    {activePanel === 'monitoring' && (
                                        <Monitoring />
                                    )}

                                    {/* GIT STATUS PANEL */}
                                    {activePanel === 'git-status' && (
                                        <GitStatus />
                                    )}

                                </AnimatePresence>
                            </main>
                        </div>

                        {/* Status bar */}
                        <div className="shrink-0 h-7 ml-2 border-t border-border/30 bg-background/80 backdrop-blur-xl flex items-center px-2 pl-15 gap-4 min-w-0 z-50 relative">
                            <div className="flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded-sm bg-muted/50 border border-border/50">
                                <GitCommitHorizontal className="h-3 w-3" />
                                <span>main</span>
                            </div>
                            <div className="flex-1" />
                            <div className="flex items-center gap-4 text-[10px] text-muted-foreground font-mono">
                                <span className="flex items-center gap-1.5"><Activity className="w-3 h-3 text-emerald-500" /> Connected</span>
                                <span>production-db</span>
                            </div>
                        </div>
                    </div>

                    {/* Mobile View */}
                    <div className="flex lg:hidden flex-col items-center text-center p-6 sm:p-10 bg-background relative overflow-hidden">
                        {/* Background decorative elements */}
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl" />

                        <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center mb-6 relative z-10 shadow-lg shadow-primary/5">
                            <Terminal className="h-8 w-8 text-primary" />
                        </div>

                        <h3 className="text-2xl font-bold tracking-tight mb-3 relative z-10">Relwave Desktop</h3>
                        <p className="text-muted-foreground mb-8 text-sm sm:text-base max-w-md mx-auto relative z-10">
                            Experience the full power of Relwave's visual query builder, advanced SQL execution, and database monitoring on a desktop device.
                        </p>

                        <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full mb-8 relative z-10">
                            <div className="flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-card/80 border border-border/50 shadow-sm backdrop-blur-sm transition-transform hover:scale-105">
                                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                                    <Layers className="h-6 w-6" />
                                </div>
                                <span className="text-sm font-semibold">Data View</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-card/80 border border-border/50 shadow-sm backdrop-blur-sm transition-transform hover:scale-105">
                                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                                    <Terminal className="h-6 w-6" />
                                </div>
                                <span className="text-sm font-semibold">SQL Editor</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-card/80 border border-border/50 shadow-sm backdrop-blur-sm transition-transform hover:scale-105">
                                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-500">
                                    <Database className="h-6 w-6" />
                                </div>
                                <span className="text-sm font-semibold">ER Diagrams</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-card/80 border border-border/50 shadow-sm backdrop-blur-sm transition-transform hover:scale-105">
                                <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500">
                                    <Activity className="h-6 w-6" />
                                </div>
                                <span className="text-sm font-semibold">Monitoring</span>
                            </div>
                        </div>

                        <div className="relative w-full rounded-xl overflow-hidden border border-border/40 shadow-2xl bg-card p-1 sm:p-2 z-10">
                            <Image src="/icon.png" alt="RelWave database client visual ER diagram and SQL editor interface" width={800} height={250} className="w-full h-auto rounded-lg opacity-90 object-cover object-top max-h-[250px]" />
                            <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent flex items-end justify-center pb-6">
                                <Badge variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground border-none shadow-xl px-4 py-1.5 text-sm">
                                    Open on Desktop
                                </Badge>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    )
}


