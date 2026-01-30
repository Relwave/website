import { Button } from '@/components/ui/button'
import { Download, Github, Database, Zap, Shield } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-28 px-6 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)] bg-size-[32px_32px] pointer-events-none" />

      {/* Animated Glow Orbs */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow delay-500 pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative">
        {/* Badge Section */}
        <div className="inline-flex items-center gap-2 text-xs mb-8 px-3 py-1.5 rounded-full border border-border/40 bg-background/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow animate-fade-in-down">
          <span className="px-2 py-0.5 font-semibold bg-primary/10 text-primary rounded-full text-[10px] uppercase tracking-wider">Beta</span>
          <span className="text-muted-foreground/30">•</span>
          <span className="text-muted-foreground/80 font-medium">Open Source</span>
          <span className="text-muted-foreground/30">•</span>
          <span className="text-muted-foreground/80 font-medium">Cross-Platform</span>
        </div>

        {/* Project Name */}
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-primary animate-fade-in-up delay-100">
          RelWave
        </h1>

        {/* Main Heading */}
        <p className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.05] animate-fade-in-up delay-200">
          <span className="bg-linear-to-b from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
            Explore Your Database,
          </span>
          <br />
          <span className="bg-linear-to-b from-muted-foreground/50 to-muted-foreground/30 bg-clip-text text-transparent">
            Like Never Before
          </span>
        </p>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-300">
          A modern database tool built with Tauri. Connect and visualize PostgreSQL, MySQL, and MariaDB with ease.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12 animate-fade-in-up delay-400">
          <Button
            size="lg"
            className="h-12 px-8 text-base font-medium shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
            asChild
          >
            <Link href="https://github.com/Relwave/relwave-app/releases" target="_blank" rel="noopener noreferrer" data-umami-event="download-button-click">
              <Download className="w-4 h-4 mr-2.5" />
              Download Now
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 px-8 text-base font-medium border-border/60 hover:bg-accent/50 transition-all hover:scale-[1.02]"
            asChild
          >
            <Link href="https://github.com/Relwave/relwave-app" target="_blank" rel="noopener noreferrer" data-umami-event="view-source-button-click">
              <Github className="w-4 h-4 mr-2.5" />
              View Source
            </Link>
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
          <div className="group flex items-center justify-center gap-2 text-sm text-muted-foreground/70 p-3 rounded-lg bg-background/30 border border-border/30 hover:border-primary/30 hover:bg-primary/5 hover:shadow-md transition-all hover:scale-[1.02] animate-fade-in-up delay-500">
            <Database className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors" />
            <span className="group-hover:text-foreground transition-colors">Multi-Database</span>
          </div>
          <div className="group flex items-center justify-center gap-2 text-sm text-muted-foreground/70 p-3 rounded-lg bg-background/30 border border-border/30 hover:border-primary/30 hover:bg-primary/5 hover:shadow-md transition-all hover:scale-[1.02] animate-fade-in-up delay-600">
            <Zap className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors" />
            <span className="group-hover:text-foreground transition-colors">Lightning Fast</span>
          </div>
          <div className="group flex items-center justify-center gap-2 text-sm text-muted-foreground/70 p-3 rounded-lg bg-background/30 border border-border/30 hover:border-primary/30 hover:bg-primary/5 hover:shadow-md transition-all hover:scale-[1.02] animate-fade-in-up delay-700">
            <Shield className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors" />
            <span className="group-hover:text-foreground transition-colors">Secure & Private</span>
          </div>
        </div>

        {/* Platform Info */}
        <p className="text-xs text-muted-foreground/50 font-medium tracking-wide animate-fade-in delay-800">
          Available for Windows & Linux
        </p>
      </div>
    </section>
  )
}