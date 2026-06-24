'use client'
import { motion } from 'framer-motion'
import {
    Database,
    Layers,
    Search,
    Table2,
    ChevronDown,
    Download,
    RefreshCw,
    MessageSquare,
    LayoutGrid,
} from 'lucide-react'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const ERDigram = () => {
    return (
        <motion.div key="er-diagram" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 flex flex-col bg-background">
            <header className="h-12 border-b border-border/40 bg-background flex items-center justify-between px-4 shrink-0">
                <div className="flex items-center gap-4 w-full">
                    <div className="flex items-center gap-3">
                        <Database className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">production-db</span>
                        <span className="text-muted-foreground/50">•</span>
                        <span className="text-sm font-medium text-foreground">ER Diagram</span>
                    </div>
                    <Button variant="outline" size="sm" className="h-8 text-xs px-3 border-dashed">
                        <Layers className="h-3.5 w-3.5 mr-1.5" /> All Schemas <ChevronDown className="h-3 w-3 ml-1.5" />
                    </Button>
                    <div className="flex-1 max-w-md relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input placeholder="Search tables or columns..." className="w-full pl-9 pr-9 py-1.5 text-sm border border-border rounded-md bg-background focus:outline-none" />
                    </div>
                    <div className="flex items-center gap-2 ml-auto">
                        <Button variant="outline" size="sm" className="h-8 text-xs"><RefreshCw className="h-3.5 w-3.5 mr-1.5" /> Sync</Button>
                        <button className="p-2 border border-border rounded-md hover:bg-muted"><MessageSquare className="h-4 w-4" /></button>
                        <button className="p-2 border border-border rounded-md hover:bg-muted"><LayoutGrid className="h-4 w-4" /></button>
                        <button className="px-3 py-1.5 border border-border rounded-md hover:bg-muted flex items-center gap-1.5 text-sm"><Download className="h-3.5 w-3.5" /> PNG</button>
                    </div>
                </div>
            </header>
            <div className="flex-1 relative bg-background overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(var(--border) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

                {/* Mock Canvas */}
                <div className="relative w-full h-full">
                    {/* Table 1 */}
                    <Card className="absolute top-20 left-40 w-56 border-border shadow-md bg-card">
                        <div className="px-3 py-2 bg-muted/50 border-b border-border/50 flex justify-between items-center">
                            <div className="flex items-center gap-2 text-xs font-bold"><Table2 className="h-3.5 w-3.5 text-blue-500" /> users</div>
                        </div>
                        <div className="p-2 space-y-1 bg-background/95">
                            <div className="flex justify-between items-center text-[11px] px-1 py-0.5"><div className="flex gap-1.5"><span className="w-3 h-3 bg-amber-500 rounded-full" /> <span className="font-medium">id</span></div> <span className="text-muted-foreground">uuid</span></div>
                            <div className="flex justify-between items-center text-[11px] px-1 py-0.5"><div className="flex gap-1.5"><span className="w-3 h-3" /> <span>email</span> <span className="text-red-500 font-bold">*</span></div> <span className="text-muted-foreground">text</span></div>
                            <div className="flex justify-between items-center text-[11px] px-1 py-0.5"><div className="flex gap-1.5"><span className="w-3 h-3" /> <span>status</span></div> <span className="text-muted-foreground">varchar</span></div>
                        </div>
                    </Card>
                    {/* Table 2 */}
                    <Card className="absolute top-32 left-[450px] w-56 border-border shadow-md bg-card">
                        <div className="px-3 py-2 bg-muted/50 border-b border-border/50 flex justify-between items-center">
                            <div className="flex items-center gap-2 text-xs font-bold"><Table2 className="h-3.5 w-3.5 text-blue-500" /> orders</div>
                        </div>
                        <div className="p-2 space-y-1 bg-background/95">
                            <div className="flex justify-between items-center text-[11px] px-1 py-0.5"><div className="flex gap-1.5"><span className="w-3 h-3 bg-amber-500 rounded-full" /> <span className="font-medium">id</span></div> <span className="text-muted-foreground">uuid</span></div>
                            <div className="flex justify-between items-center text-[11px] px-1 py-0.5 bg-cyan-500/10 rounded"><div className="flex gap-1.5"><span className="w-3 h-3 bg-cyan-500 rounded-full" /> <span className="text-cyan-600 font-medium">user_id</span> <span className="text-red-500 font-bold">*</span></div> <span className="text-muted-foreground">uuid</span></div>
                            <div className="flex justify-between items-center text-[11px] px-1 py-0.5"><div className="flex gap-1.5"><span className="w-3 h-3" /> <span>amount</span></div> <span className="text-muted-foreground">numeric</span></div>
                        </div>
                    </Card>
                    {/* Connection Line */}
                    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
                        <path d="M 384 120 C 420 120, 420 180, 450 180" fill="none" stroke="currentColor" className="text-cyan-500" strokeWidth="2" />
                    </svg>
                </div>

                <div className="absolute bottom-6 left-6 bg-card/90 backdrop-blur-sm border border-border rounded-lg p-3 text-xs shadow-sm z-10">
                    <div className="font-semibold mb-2">Legend</div>
                    <div className="space-y-1">
                        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-amber-500 rounded-full" /><span>Primary Key</span></div>
                        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-cyan-500 rounded-full" /><span>Foreign Key</span></div>
                        <div className="flex items-center gap-2"><div className="w-3 h-0.5 bg-cyan-500" /><span>N:1 Relationship</span></div>
                    </div>
                </div>
            </div>
            <div className="border-t border-border bg-card px-4 py-2 flex items-center justify-between text-xs text-muted-foreground">
                <span>4 Tables • 3 Relations • Schema: public</span>
                <span>Drag to pan • Scroll to zoom</span>
            </div>
        </motion.div>
    )
}