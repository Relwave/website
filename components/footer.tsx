import { DatabaseIcon, Github } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
            <DatabaseIcon className="w-3 h-3 text-primary-foreground" />
          </div>
          <span className="font-medium">DBXplore</span>
        </div>

        <p className="text-sm text-muted-foreground">
          Open source database visualizer. Built with Tauri + React.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Yashh56/DBXplore"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
