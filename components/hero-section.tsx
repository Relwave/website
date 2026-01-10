import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DownloadIcon, GithubIcon } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6 gradient-bg">
      <div className="max-w-4xl mx-auto text-center">
        <div className="opacity-0 animate-fade-in">
          <Badge variant="secondary" className="mb-6">
            Open Source • Cross-Platform • Free
          </Badge>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in stagger-1">
          Explore Your Databases
          <br />
          <span className="text-muted-foreground">Like Never Before</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in stagger-2">
          A modern, powerful database visualizer built with Tauri.
          Connect, explore, and manage PostgreSQL and MySQL databases with ease.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in stagger-3">
          <Button size="lg" asChild>
            <a href="https://github.com/Yashh56/DBXplore/releases" target="_blank" rel="noopener noreferrer">
              <DownloadIcon className="w-4 h-4" />
              <span className="ml-2">Download for Windows</span>
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="https://github.com/Yashh56/DBXplore" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="w-4 h-4" />
              <span className="ml-2">View on GitHub</span>
            </a>
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mt-4 opacity-0 animate-fade-in stagger-4">
          Also available for macOS and Linux
        </p>
      </div>
    </section>
  )
}
