import {
    Sparkles,
    Database,
    Timer,
    MessageSquare,
    Laptop,
    ArrowRight,
} from 'lucide-react'
import Link from 'next/link'

const upcomingFeatures = [
    {
        icon: <Database className="w-5 h-5" />,
        title: "SQL Server & SQLite",
        description: "Expand database support with Microsoft SQL Server and lightweight SQLite connections.",
        status: "In Progress",
        progress: 60,
    },
    {
        icon: <Sparkles className="w-5 h-5" />,
        title: "Query Plan Visualizer",
        description: "Visualize and optimize your query execution plans with interactive diagrams.",
        status: "Planned",
        progress: 20,
    },
    {
        icon: <MessageSquare className="w-5 h-5" />,
        title: "AI-Powered Queries",
        description: "Generate SQL queries from natural language using AI assistance.",
        status: "Research",
        progress: 10,
    },
    {
        icon: <Timer className="w-5 h-5" />,
        title: "Scheduled Exports",
        description: "Automate data exports with customizable schedules and formats.",
        status: "Planned",
        progress: 15,
    },
    {
        icon: <Laptop className="w-5 h-5" />,
        title: "macOS Support",
        description: "Native macOS application with full feature parity.",
        status: "Coming Soon",
        progress: 40,
    },
]

const getStatusColor = (status: string) => {
    switch (status) {
        case "In Progress": return "bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30"
        case "Coming Soon": return "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30"
        case "Planned": return "bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-500/30"
        case "Research": return "bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30"
        default: return "bg-primary/20 text-primary border-primary/30"
    }
}

export function RoadmapSection() {
    return (
        <section id="roadmap" className="relative py-24 px-6 overflow-hidden">
            {/* Layered Background Effects */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)] bg-size-[32px_32px] pointer-events-none" />

            {/* Animated Glow */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none animate-pulse-glow delay-500" />

            <div className="max-w-5xl mx-auto relative">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-6 tracking-wider uppercase border border-primary/20 animate-fade-in-up">
                        <Sparkles className="w-3 h-3" />
                        Roadmap
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight animate-fade-in-up delay-100">
                        <span className="bg-linear-to-b from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                            Coming Soon
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                        Exciting features on the horizon to make your workflow even better
                    </p>
                </div>

                {/* Stacked Cards Layout */}
                <div className="space-y-4">
                    {upcomingFeatures.map((feature, index) => (
                        <div
                            key={feature.title}
                            className="group relative animate-fade-in-up"
                            style={{ animationDelay: `${300 + index * 100}ms` }}
                        >
                            <div className="relative p-6 rounded-2xl border border-border/40 bg-background/60 backdrop-blur-sm hover:border-primary/40 hover:shadow-xl transition-all duration-300 hover:scale-[1.01] overflow-hidden">
                                {/* Gradient on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Progress bar background */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-border/20">
                                    <div
                                        className="h-full bg-primary/40 transition-all duration-500 group-hover:bg-primary/60"
                                        style={{ width: `${feature.progress}%` }}
                                    />
                                </div>

                                <div className="relative flex items-center gap-6">
                                    {/* Icon */}
                                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                        {feature.icon}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-3 mb-1">
                                            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                                {feature.title}
                                            </h3>
                                            <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full border ${getStatusColor(feature.status)}`}>
                                                {feature.status}
                                            </span>
                                        </div>
                                        <p className="text-sm text-muted-foreground/80 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>

                                    {/* Progress Indicator */}
                                    <div className="hidden sm:flex flex-col items-end gap-1 shrink-0">
                                        <span className="text-2xl font-bold text-primary/80 group-hover:text-primary transition-colors">
                                            {feature.progress}%
                                        </span>
                                        <span className="text-xs text-muted-foreground">Progress</span>
                                    </div>

                                    {/* Arrow */}
                                    <div className="hidden md:flex w-10 h-10 rounded-full border border-border/40 items-center justify-center text-muted-foreground/40 group-hover:border-primary/40 group-hover:text-primary transition-all shrink-0">
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: '800ms' }}>
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl border border-border/40 bg-background/50 backdrop-blur-sm">
                        <p className="text-sm text-muted-foreground/70">
                            Have a feature request?
                        </p>
                        <Link
                            href="https://github.com/Relwave/relwave-app/issues"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all hover:scale-105"
                        >
                            Let us know on GitHub
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}