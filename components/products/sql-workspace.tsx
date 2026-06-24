'use client'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Table2,
    Play,
    Plus,
    PanelLeftClose,
    CheckCircle2,
    X,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface TableProps {
    name: string,
    schema: string;
    rows: number
}

interface SQLWorkSpaceProps {
    setSidebarTab: (value: 'tables' | 'history') => void;
    sidebarTab: 'tables' | 'history';
    tables: Array<TableProps>
}



export const SQLWorkSpace = ({
    setSidebarTab,
    sidebarTab,
    tables
}: SQLWorkSpaceProps) => {
    return (
        <motion.div key="sql-workspace" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 flex flex-col bg-transparent">
            {/* WorkspaceHeader */}
            <header className="shrink-0 border-b border-border/30 bg-background/80 backdrop-blur-xl h-14 flex items-center justify-between px-6">
                <div className="flex items-center gap-3">
                    <h1 className="text-lg font-semibold tracking-tight">SQL Workspace</h1>
                    <Badge variant="outline" className="text-[10px] text-muted-foreground">production-db</Badge>
                </div>
                <div className="flex items-center gap-2">
                    <Button size="sm" className="h-8 text-xs bg-emerald-600 hover:bg-emerald-700 text-white"><Play className="h-3.5 w-3.5 mr-1.5" /> Execute</Button>
                </div>
            </header>

            <div className="flex-1 flex overflow-hidden p-3 gap-3">
                {/* WorkspaceSidebar */}
                <aside className="w-64 rounded-lg border border-border/50 bg-card/55 flex flex-col shrink-0 transition-all duration-200 shadow-sm overflow-hidden">
                    <div className="h-10 border-b border-border/40 flex items-center justify-between px-3 bg-background/55">
                        <div className="flex bg-muted/50 p-0.5 rounded-md">
                            <button onClick={() => setSidebarTab('tables')} className={`px-2 py-1 text-xs rounded-sm transition-colors ${sidebarTab === 'tables' ? 'bg-background shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}>Tables</button>
                            <button onClick={() => setSidebarTab('history')} className={`px-2 py-1 text-xs rounded-sm transition-colors ${sidebarTab === 'history' ? 'bg-background shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}>History</button>
                        </div>
                        <Button variant="ghost" size="icon" className="h-7 w-7"><PanelLeftClose className="h-4 w-4" /></Button>
                    </div>
                    <div className="flex-1 overflow-y-auto p-2">
                        {sidebarTab === 'tables' ? (
                            tables.map(table => (
                                <button key={table.name} className="w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-left hover:bg-accent/45 transition-colors group border border-transparent hover:border-border/40">
                                    <Table2 className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                                    <span className="text-xs truncate flex-1 font-mono">{table.name}</span>
                                    <span className="text-[10px] text-muted-foreground/60 opacity-0 group-hover:opacity-100 font-mono">public</span>
                                </button>
                            ))
                        ) : (
                            <>
                                {[1, 2, 3].map(i => (
                                    <button key={i} className="w-full text-left px-2 py-2 rounded-md hover:bg-accent/45 transition-colors mb-1 border border-transparent hover:border-border/40">
                                        <div className="flex items-center gap-1.5 mb-1">
                                            <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                                            <span className="text-[10px] text-muted-foreground">124 rows • 14:32:00</span>
                                        </div>
                                        <p className="text-xs font-mono text-muted-foreground truncate">SELECT * FROM users WHERE...</p>
                                    </button>
                                ))}
                            </>
                        )}
                    </div>
                </aside>

                {/* Editor Area */}
                <div className="flex-1 flex flex-col min-w-0 rounded-lg border border-border/50 bg-card/55 shadow-sm overflow-hidden">
                    {/* QueryTabBar */}
                    <div className="flex items-center bg-muted/30 border-b border-border/40 overflow-x-auto min-h-9 px-1 pt-1 gap-1">
                        <button className="h-8 px-3 flex items-center gap-2 bg-background border-t border-x border-border/40 rounded-t-md text-xs font-medium min-w-[120px] max-w-[200px] border-b-0">
                            <span className="truncate flex-1 text-left text-primary">Query 1</span>
                            <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                        </button>
                        <button className="h-8 px-3 flex items-center gap-2 bg-transparent hover:bg-muted/50 rounded-t-md text-xs text-muted-foreground min-w-[120px] max-w-[200px]">
                            <span className="truncate flex-1 text-left">Revenue Report</span>
                        </button>
                        <Button variant="ghost" size="icon" className="h-6 w-6 rounded-sm ml-1 text-muted-foreground"><Plus className="h-3.5 w-3.5" /></Button>
                    </div>

                    <div className="flex-1 flex flex-col overflow-hidden">
                        {/* SqlEditor Mock */}
                        <div className="h-[45%] min-h-50 border-b border-border/40 bg-[#1e1e1e] p-4 font-mono text-sm leading-relaxed overflow-auto">
                            <span className="text-[#569cd6]">SELECT</span> users.email, <span className="text-[#dcdcaa]">COUNT</span>(orders.id) <span className="text-[#569cd6]">AS</span> order_count <br />
                            <span className="text-[#569cd6]">FROM</span> users <br />
                            <span className="text-[#c586c0]">LEFT JOIN</span> orders <span className="text-[#569cd6]">ON</span> users.id = orders.user_id <br />
                            <span className="text-[#569cd6]">WHERE</span> users.status = <span className="text-[#ce9178]">'active'</span> <br />
                            <span className="text-[#569cd6]">GROUP BY</span> users.id <br />
                            <span className="text-[#569cd6]">ORDER BY</span> order_count <span className="text-[#569cd6]">DESC</span>;
                        </div>
                        {/* ResultsPanel Mock */}
                        <div className="flex-1 flex flex-col bg-background/50">
                            <div className="flex items-center justify-between px-4 py-2 border-b border-border/30 bg-muted/20">
                                <div className="flex gap-4 text-xs">
                                    <span className="text-emerald-500 font-medium">Success</span>
                                    <span className="text-muted-foreground">24 rows</span>
                                    <span className="text-muted-foreground">14.2ms</span>
                                </div>
                            </div>
                            <div className="flex-1 p-4 flex items-center justify-center text-xs text-muted-foreground">
                                Query executed successfully. Displaying top 24 rows.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}