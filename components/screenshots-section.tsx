import { Badge } from '@/components/ui/badge'

export function ScreenshotsSection() {
  return (
    <section id="screenshots" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See it in action
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A clean, intuitive interface designed for developers and database administrators.
          </p>
        </div>

        <div className="space-y-16">
          {/* Row 1: Easy Connection Setup - Image Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="overflow-hidden rounded-xl border border-border/50 shadow-lg">
              <img
                src="/dashboard.png"
                alt="Add Database"
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-4">
              <Badge variant="outline">Connect</Badge>
              <h3 className="text-2xl font-semibold">Easy Connection Setup</h3>
              <p className="text-muted-foreground leading-relaxed">
                Connect to PostgreSQL and MySQL in seconds. Paste a connection URL
                or fill in the details — test before saving with real-time feedback.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">PostgreSQL</span>
                <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">MySQL</span>
                <span className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground">SQLite · Soon</span>
                <span className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground">MongoDB · Soon</span>
              </div>
            </div>
          </div>

          {/* Row 2: ER Diagram - Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 lg:order-1">
              <Badge variant="outline">Visual</Badge>
              <h3 className="text-2xl font-semibold">Interactive ER Diagrams</h3>
              <p className="text-muted-foreground leading-relaxed">
                Visualize your database schema with beautiful entity-relationship diagrams.
                Auto-layout, pan, zoom, and explore table relationships at a glance.
              </p>
            </div>
            <div className="overflow-hidden rounded-xl border border-border/50 shadow-lg lg:order-2">
              <img
                src="/ERDiagram.png"
                alt="ER Diagram"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Row 3: SQL Workspace - Image Left */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="overflow-hidden rounded-xl border border-border/50 shadow-lg">
              <img
                src="/SQLWorkspace.png"
                alt="SQL Workspace"
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-4">
              <Badge variant="outline">Editor</Badge>
              <h3 className="text-2xl font-semibold">SQL Workspace</h3>
              <p className="text-muted-foreground leading-relaxed">
                A VS Code-style SQL editor with multi-tab support, query history,
                and real-time execution progress. Execute with Ctrl+Enter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
