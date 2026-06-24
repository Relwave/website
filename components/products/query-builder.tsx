'use client'
import { motion } from 'framer-motion'

export const QueryBuilder = () => {
    return (
        <motion.div key="query-builder" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 flex flex-col bg-transparent">
            <header className="shrink-0 border-b border-border/30 bg-background/80 backdrop-blur-xl h-14 flex items-center px-6">
                <h1 className="text-lg font-semibold tracking-tight">Query Builder</h1>
            </header>
            <div className="flex-1 flex items-center justify-center text-muted-foreground text-sm">
                Select SQL Workspace or Data View to see detailed UI mockups.
            </div>
        </motion.div>
    )
}