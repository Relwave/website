import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export function DownloadSection() {
  return (
    <section id="download" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to get started?
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          Download DBXplore for free and start exploring your databases today.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <Card className="p-6 hover:bg-accent/50 transition-colors cursor-pointer border-border/50">
            <a href="https://github.com/Yashh56/DBXplore/releases" target="_blank" rel="noopener noreferrer" className="block">
              <div className="text-3xl mb-2">🪟</div>
              <h3 className="font-semibold mb-1">Windows</h3>
              <p className="text-sm text-muted-foreground">.exe / .msi</p>
            </a>
          </Card>
          <Card className="p-6 hover:bg-accent/50 transition-colors cursor-pointer border-border/50">
            <a href="https://github.com/Yashh56/DBXplore/releases" target="_blank" rel="noopener noreferrer" className="block">
              <div className="text-3xl mb-2">🍎</div>
              <h3 className="font-semibold mb-1">macOS</h3>
              <p className="text-sm text-muted-foreground">.dmg</p>
            </a>
          </Card>
          <Card className="p-6 hover:bg-accent/50 transition-colors cursor-pointer border-border/50">
            <a href="https://github.com/Yashh56/DBXplore/releases" target="_blank" rel="noopener noreferrer" className="block">
              <div className="text-3xl mb-2">🐧</div>
              <h3 className="font-semibold mb-1">Linux</h3>
              <p className="text-sm text-muted-foreground">.deb / .AppImage</p>
            </a>
          </Card>
        </div>

        <Button variant="outline" size="lg" asChild>
          <a href="https://github.com/Yashh56/DBXplore/releases" target="_blank" rel="noopener noreferrer">
            View all releases
          </a>
        </Button>
      </div>
    </section>
  )
}
