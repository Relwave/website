import { Download, Database, Eye, Sparkles } from 'lucide-react'

const steps = [
    {
        icon: <Download className="w-6 h-6" />,
        step: "01",
        title: "Download & Install",
        description: "Get RelWave for your platform. Available for Windows and Linux with a simple one-click installation."
    },
    {
        icon: <Database className="w-6 h-6" />,
        step: "02",
        title: "Connect Your Database",
        description: "Add your PostgreSQL, MySQL, or MariaDB connection with secure SSL/TLS support."
    },
    {
        icon: <Eye className="w-6 h-6" />,
        step: "03",
        title: "Explore & Visualize",
        description: "Browse schemas, view tables, run queries, and visualize your data with ER diagrams."
    },
    {
        icon: <Sparkles className="w-6 h-6" />,
        step: "04",
        title: "Manage with Ease",
        description: "Edit data, manage migrations, and keep your database organized — all from one interface."
    }
]

export function HowItWorksSection() {
    return (
        <section id="how-it-works" className="relative py-24 px-6 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)] bg-size-[32px_32px] pointer-events-none" />

            <div className="max-w-5xl mx-auto relative">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 text-xs mb-6 px-3 py-1.5 rounded-full border border-border/40 bg-background/50 backdrop-blur-sm shadow-sm animate-fade-in-up">
                        <Sparkles className="w-3.5 h-3.5 text-primary" />
                        <span className="text-muted-foreground/80 font-medium">Simple & Intuitive</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 animate-fade-in-up delay-100">
                        <span className="bg-linear-to-b from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                            How It Works
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-200">
                        Get started with RelWave in just a few simple steps
                    </p>
                </div>

                {/* Cards Grid with Zigzag Connectors */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
                    {steps.map((step, index) => {
                        const isEven = index % 2 === 0
                        const isLast = index === steps.length - 1

                        return (
                            <div
                                key={index}
                                className={`relative animate-fade-in-up ${
                                    // Offset odd items to create zigzag
                                    !isEven ? 'md:mt-24' : ''
                                    }`}
                                style={{ animationDelay: `${300 + index * 150}ms` }}
                            >
                                {/* Card */}
                                <div className="group relative p-6 rounded-2xl border border-border/40 bg-background/50 backdrop-blur-sm hover:border-primary/30 hover:bg-primary/5 hover:shadow-xl transition-all hover:scale-[1.02]">
                                    {/* Step Number - Top Corner */}
                                    <div className={`absolute -top-4 ${isEven ? 'left-6' : 'right-6'} w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shadow-lg`}>
                                        {index + 1}
                                    </div>

                                    <div className="flex items-start gap-4 mt-2">
                                        {/* Icon */}
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                                            <div className="text-primary/80 group-hover:text-primary transition-colors">
                                                {step.icon}
                                            </div>
                                        </div>

                                        {/* Text Content */}
                                        <div>
                                            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Connector Arrow to Next Card */}
                                    {!isLast && (
                                        <>
                                            {/* Horizontal line going to center */}
                                            <div
                                                className={`hidden md:block absolute top-1/2 ${isEven ? '-right-6' : '-left-6'} w-6 h-0.5 bg-gradient-to-r ${isEven ? 'from-border/60 to-primary/40' : 'from-primary/40 to-border/60'}`}
                                            />

                                            {/* Vertical line going down (for even cards) or down-left (for odd cards) */}
                                            {isEven && (
                                                <div className="hidden md:block absolute -right-6 top-1/2 w-0.5 h-[calc(50%+3rem)] bg-gradient-to-b from-primary/40 to-border/60" />
                                            )}

                                            {/* Connector dot */}
                                            <div
                                                className={`hidden md:block absolute top-1/2 -translate-y-1/2 ${isEven ? '-right-8' : '-left-8'} w-3 h-3 rounded-full bg-primary/40 border-2 border-background`}
                                            />
                                        </>
                                    )}
                                </div>
                            </div>
                        )
                    })}

                    {/* Center vertical dashed line */}
                    <div className="hidden md:block absolute left-1/2 top-12 bottom-12 w-px border-l-2 border-dashed border-border/40 -translate-x-1/2" />
                </div>
            </div>
        </section>
    )
}
