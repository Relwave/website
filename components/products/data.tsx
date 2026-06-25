'use client'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { PanelLeftClose, ChevronDown, FileText, Download, RefreshCw, Star, Table2, Plus, Search } from 'lucide-react'
import { Badge } from '../ui/badge'


interface TableProps {
    name: string
    schema: string
    rows: number
}

interface DataProps {
    tables: TableProps[];
    activeTable: string;
    setActiveTable: (table: string) => void;
}


export const Data = ({ tables, activeTable, setActiveTable }: DataProps) => {
    return (
        <motion.div key="data" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 flex flex-col">
            {/* DataViewPanel Header */}
            <header className="shrink-0 border-b border-border/30 bg-background/80 backdrop-blur-xl">
                <div className="px-6 py-3 flex items-center justify-between gap-4 min-w-0">
                    <div className="flex items-center gap-3 min-w-0">
                        <Button variant="ghost" size="icon" className="h-8 w-8"><PanelLeftClose className="h-4 w-4" /></Button>
                        <div className="min-w-0">
                            <div className="flex items-center gap-2">
                                <h1 className="text-lg font-semibold tracking-tight truncate">production-db</h1>
                                <Button variant="outline" size="sm" className="h-6 text-xs px-2 ml-2 border-dashed bg-background/60">
                                    public <ChevronDown className="h-3 w-3 ml-1" />
                                </Button>
                            </div>
                            <p className="text-xs text-muted-foreground">{tables.length} tables in public</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                        <Button size="sm" variant="outline" className="text-xs"><FileText className="h-3.5 w-3.5 mr-1.5" /> Migrations</Button>
                        <Button size="sm" variant="outline" className="text-xs"><Download className="h-3.5 w-3.5 mr-1.5" /> Export <ChevronDown className="h-3 w-3 ml-1" /></Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8"><RefreshCw className="h-4 w-4" /></Button>
                    </div>
                </div>
            </header>

            {/* DataViewPanel Content */}
            <div className="flex-1 min-h-0 min-w-0 flex overflow-hidden p-3 gap-3">
                {/* TablesExplorerPanel */}
                <div className="w-64 shrink-0 min-h-0 rounded-lg border border-border/50 bg-card/45 overflow-hidden shadow-sm flex flex-col">
                    <div className="p-3 border-b border-border/30 shrink-0 bg-transparent">
                        <h2 className="text-sm font-semibold mb-3 flex items-center gap-2"><Table2 className="h-4 w-4" /> Tables</h2>
                        <div className="relative mb-3">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <input placeholder="Search tables..." className="flex h-9 w-full rounded-md border border-input bg-background/70 px-3 py-1 text-sm shadow-sm transition-colors pl-9" />
                        </div>
                        <div className="flex gap-2">
                            <Button variant="default" size="sm" className="flex-1 h-8 text-xs">All</Button>
                            <Button variant="outline" size="sm" className="flex-1 h-8 text-xs">System</Button>
                            <Button variant="outline" size="sm" className="h-8 text-xs px-3"><Star className="h-3 w-3" /></Button>
                        </div>
                    </div>
                    <div className="flex-1 min-h-0 overflow-y-auto p-2 space-y-1">
                        {tables.map(table => (
                            <button
                                key={table.name}
                                onClick={() => setActiveTable(table.name)}
                                className={`w-full flex items-center justify-between px-3 py-2 rounded-md transition-all duration-150 text-left group border ${activeTable === table.name ? 'bg-primary/10 text-primary border-primary/20 shadow-sm' : 'border-transparent hover:bg-muted/55 hover:border-border/50 text-foreground'}`}
                            >
                                <div className="flex items-center gap-2 flex-1 min-w-0">
                                    <Star className={`h-3.5 w-3.5 ${activeTable === table.name ? 'text-muted-foreground' : 'text-muted-foreground opacity-0 group-hover:opacity-100'}`} />
                                    <Table2 className="h-4 w-4 text-muted-foreground shrink-0" />
                                    <span className="truncate text-xs font-mono">{table.name}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* ContentViewerPanel */}
                <div className="flex-1 min-w-0 min-h-0 overflow-hidden rounded-lg border border-border/50 bg-card/50 shadow-sm flex flex-col">
                    <div className="h-14 border-b border-border/50 px-4 flex items-center justify-between bg-card/50 shrink-0">
                        <div className="flex items-center gap-4">
                            <h3 className="font-semibold text-sm">{activeTable}</h3>
                            <Badge variant="secondary" className="text-[10px]">{tables.find(t => t.name === activeTable)?.rows} rows</Badge>
                        </div>
                        <div className="flex gap-2">
                            <Button size="sm" className="h-8 text-xs"><Plus className="h-3.5 w-3.5 mr-1" /> Add Row</Button>
                        </div>
                    </div>
                    <div className="flex-1 overflow-auto bg-background/50">
                        <div className="min-w-max">
                            <div className="grid grid-cols-4 bg-muted/40 p-2 text-xs font-semibold border-b border-border/60 sticky top-0 backdrop-blur-md">
                                <div className="px-2">id <span className="text-muted-foreground font-normal ml-1 text-[10px]">uuid</span></div>
                                <div className="px-2">email <span className="text-muted-foreground font-normal ml-1 text-[10px]">text</span></div>
                                <div className="px-2">role <span className="text-muted-foreground font-normal ml-1 text-[10px]">varchar</span></div>
                                <div className="px-2">created_at <span className="text-muted-foreground font-normal ml-1 text-[10px]">timestamp</span></div>
                            </div>
                            {[1, 2, 3, 4, 5, 6, 7].map(i => (
                                <div key={i} className="grid grid-cols-4 p-2 text-xs border-b border-border/40 hover:bg-muted/20 text-muted-foreground">
                                    <div className="px-2 truncate">usr_8x{i}9y2z</div>
                                    <div className="px-2 truncate text-foreground">user{i}@example.com</div>
                                    <div className="px-2">{i === 1 ? <Badge variant="outline" className="text-[9px] py-0">ADMIN</Badge> : <Badge variant="secondary" className="text-[9px] py-0 bg-secondary/50">USER</Badge>}</div>
                                    <div className="px-2 font-mono text-[11px]">2025-10-{10 + i} 14:30:00</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}