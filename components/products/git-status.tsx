'use client'

import { motion } from 'framer-motion'
import { GitBranch, ArrowUp, UploadCloud, RefreshCw, FileDiff, Clock, FilePlus2, FileEdit, Eye } from 'lucide-react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'

export const GitStatus = () => {
    return (
        <motion.div key="git-status" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 flex flex-col bg-background/50">
            <header className="shrink-0 border-b border-border/20 bg-background/95 backdrop-blur-sm">
                <div className="px-6 py-3 flex items-center justify-between border-b border-border/20">
                    <div className="flex items-center gap-3">
                        <GitBranch className="h-5 w-5 text-primary" />
                        <h2 className="text-sm font-semibold">Git Status</h2>
                        <Badge variant="outline" className="font-mono text-xs">main</Badge>
                        <span className="text-xs text-muted-foreground font-mono">8f2a1b9</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-0.5"><ArrowUp className="h-3 w-3" /> 2</span>
                        <span className="font-mono">origin/main</span>
                    </div>
                </div>
                <div className="px-6 py-2 bg-muted/20 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground flex items-center gap-2"><ArrowUp className="h-3.5 w-3.5" /> Migration Sync</span>
                    <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="h-7 text-xs"><RefreshCw className="h-3 w-3 mr-1" /> Sync to Git</Button>
                        <Button size="sm" className="h-7 text-xs"><UploadCloud className="h-3 w-3 mr-1" /> Push</Button>
                    </div>
                </div>
            </header>

            <div className="flex items-center gap-4 px-4 pt-3 bg-muted/10 border-b border-border/20">
                <div className="text-xs font-medium pb-2 border-b-2 border-primary text-foreground flex items-center gap-1.5"><FileDiff className="h-3.5 w-3.5" /> Changes <Badge variant="secondary" className="h-4 min-w-4 px-1 text-[10px] ml-1">2</Badge></div>
                <div className="text-xs font-medium pb-2 border-b-2 border-transparent text-muted-foreground flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> History</div>
                <div className="text-xs font-medium pb-2 border-b-2 border-transparent text-muted-foreground flex items-center gap-1.5"><GitBranch className="h-3.5 w-3.5" /> Branches</div>
            </div>

            <div className="flex-1 overflow-auto p-4">
                <div className="space-y-4">
                    <section>
                        <h3 className="text-xs font-semibold text-green-500 uppercase tracking-wider px-3 mb-1.5 flex items-center gap-1.5">Staged Changes <Badge variant="secondary" className="h-4 min-w-4 px-1 text-[10px]">1</Badge></h3>
                        <div className="space-y-0.5">
                            <div className="group flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-muted/50 transition-colors">
                                <FilePlus2 className="h-4 w-4 text-green-500" />
                                <div className="flex-1 min-w-0 flex items-center gap-1.5">
                                    <span className="text-sm font-mono truncate">0004_add_subscriptions.sql</span>
                                    <span className="text-[10px] text-muted-foreground font-mono truncate">migrations/</span>
                                </div>
                                <Badge variant="outline" className="text-[10px] h-4 px-1.5 shrink-0 border-green-500/30 text-green-500">Added</Badge>
                                <Button variant="ghost" size="icon" className="h-6 w-6 opacity-0 group-hover:opacity-100"><Eye className="h-3.5 w-3.5" /></Button>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h3 className="text-xs font-semibold text-yellow-500 uppercase tracking-wider px-3 mb-1.5 flex items-center gap-1.5">Unstaged Changes <Badge variant="secondary" className="h-4 min-w-4 px-1 text-[10px]">1</Badge></h3>
                        <div className="space-y-0.5">
                            <div className="group flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-muted/50 transition-colors">
                                <FileEdit className="h-4 w-4 text-yellow-500" />
                                <div className="flex-1 min-w-0 flex items-center gap-1.5">
                                    <span className="text-sm font-mono truncate">schema.json</span>
                                    <span className="text-[10px] text-muted-foreground font-mono truncate">relwave/</span>
                                </div>
                                <Badge variant="outline" className="text-[10px] h-4 px-1.5 shrink-0 border-yellow-500/30 text-yellow-500">Modified</Badge>
                                <Button variant="ghost" size="icon" className="h-6 w-6 opacity-0 group-hover:opacity-100"><Eye className="h-3.5 w-3.5" /></Button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </motion.div>
    )
}