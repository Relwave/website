'use client'

import { motion } from 'framer-motion'
import { Activity, Clock3, DatabaseZap, Gauge, RefreshCw, Server, ShieldCheck } from 'lucide-react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader } from '../ui/card'


export const Monitoring = () => {
    return (
        <motion.div key="monitoring" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 flex flex-col bg-background/50">
            <header className="shrink-0 border-b border-border/30 bg-background/80 px-6 py-3 backdrop-blur-xl flex justify-between items-center">
                <div>
                    <div className="flex items-center gap-2">
                        <Activity className="h-4 w-4 text-primary" />
                        <h1 className="text-lg font-semibold tracking-tight">Monitoring</h1>
                        <Badge variant="outline" className="h-6 font-mono text-[11px]">PostgreSQL</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">Live health, throughput, connections, and cache metrics over WebSocket</p>
                </div>
                <Button variant="outline" size="sm" className="h-8 text-xs"><RefreshCw className="h-3.5 w-3.5 mr-1.5" /> Refresh</Button>
            </header>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {[
                        { title: 'Health', value: 'Online', desc: '12 ms ping', icon: ShieldCheck, color: 'text-emerald-500' },
                        { title: 'Connections', value: '42/100', desc: '42% of configured limit', icon: Server, color: 'text-foreground' },
                        { title: 'Throughput', value: '840.5 qps', desc: '142,094 total requests', icon: Gauge, color: 'text-foreground' },
                        { title: 'Cache Hit', value: '98.4%', desc: 'Read efficiency', icon: DatabaseZap, color: 'text-foreground' }
                    ].map((stat, i) => (
                        <Card key={i} className="rounded-lg border-border/50 bg-card/65 shadow-sm">
                            <CardHeader className="flex flex-row items-start justify-between pb-2">
                                <div className="space-y-1">
                                    <div className="text-xs text-muted-foreground">{stat.title}</div>
                                    <div className={`text-2xl font-semibold ${stat.color}`}>{stat.value}</div>
                                </div>
                                <div className="rounded-md border border-border/50 bg-background/60 p-2"><stat.icon className="h-4 w-4 text-muted-foreground" /></div>
                            </CardHeader>
                            <CardContent><div className="flex items-center gap-1.5 text-xs text-muted-foreground"><Clock3 className="h-3.5 w-3.5" /> {stat.desc}</div></CardContent>
                        </Card>
                    ))}
                </div>
                <div className="grid gap-4 xl:grid-cols-[minmax(0,1.4fr)_minmax(360px,0.8fr)]">
                    <Card className="rounded-lg border-border/50 bg-card/65 shadow-sm h-72 flex flex-col">
                        <div className="p-4 border-b border-border/30">
                            <div className="text-sm font-semibold">Throughput Timeline</div>
                            <div className="text-xs text-muted-foreground">Queries per second and active connections</div>
                        </div>
                        <div className="flex-1 p-4 relative">
                            <div className="absolute inset-x-4 bottom-4 top-4 border-l border-b border-border/50 flex items-end">
                                <svg className="w-full h-full preserve-aspect-ratio-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <path d="M 0 80 Q 20 70, 40 85 T 80 40 T 100 20" fill="none" stroke="var(--primary)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                                    <path d="M 0 90 L 20 85 L 40 92 L 60 88 L 80 85 L 100 80" fill="none" stroke="#22c55e" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                                </svg>
                            </div>
                        </div>
                    </Card>
                    <Card className="rounded-lg border-border/50 bg-card/65 shadow-sm h-72 flex flex-col">
                        <div className="p-4 border-b border-border/30">
                            <div className="text-sm font-semibold">Active Queries</div>
                            <div className="text-xs text-muted-foreground">Non-idle requests currently reported by the database</div>
                        </div>
                        <div className="flex-1 overflow-auto">
                            <div className="grid grid-cols-[80px_100px_1fr] text-xs font-semibold bg-muted/35 p-2 px-4 border-b border-border/30">
                                <div>Time</div><div>State</div><div>Query</div>
                            </div>
                            {[1, 2, 3].map(i => (
                                <div key={i} className="grid grid-cols-[80px_100px_1fr] text-xs p-2 px-4 border-b border-border/20 items-center">
                                    <div className="font-mono text-muted-foreground">0.{i}s</div>
                                    <div><Badge variant="outline" className="text-[9px]">active</Badge></div>
                                    <div className="truncate font-mono">SELECT * FROM users WHERE status = 'active'</div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </motion.div>
    )
}