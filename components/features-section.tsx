import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  ChartBarIcon,
  CloudIcon,
  CodeIcon,
  DatabaseIcon,
  Download,
  EditIcon,
  GitGraph,
  LinkIcon,
  Newspaper,
  SearchIcon,
  TableIcon,
  Thermometer
} from 'lucide-react'

const features = [
  {
    icon: <DatabaseIcon className="w-5 h-5" />,
    title: "Multi-Database Support",
    description: "Connect to PostgreSQL and MySQL with SSL/TLS support. SQLite and more databases coming soon.",
    badge: "Core"
  },
  {
    icon: <LinkIcon className="w-5 h-5" />,
    title: "Connect via URL",
    description: "Paste connection URLs like postgres://user:pass@host:port/db and auto-parse to populate form fields instantly.",
    badge: "New"
  },
  {
    icon: <CodeIcon className="w-5 h-5" />,
    title: "SQL Workspace",
    description: "VS Code-style SQL editor with multi-tab support, syntax highlighting, query history, and keyboard shortcuts.",
    badge: "Editor"
  },
  {
    icon: <TableIcon className="w-5 h-5" />,
    title: "Visual Query Builder",
    description: "Drag-and-drop interface to build complex queries. Support for JOINs, filters, GROUP BY, and ORDER BY clauses.",
    badge: "Builder"
  },
  {
    icon: <GitGraph className="w-5 h-5" />,
    title: "ER Diagrams",
    description: "Interactive entity-relationship diagrams with auto-layout, minimap navigation, and relationship visualization.",
    badge: "Visual"
  },
  {
    icon: <ChartBarIcon className="w-5 h-5" />,
    title: "Chart Visualization",
    description: "Create Bar, Line, Pie, and Scatter charts from your data. Export as PNG or SVG with a single click.",
    badge: "Charts"
  },
  {
    icon: <EditIcon className="w-5 h-5" />,
    title: "Data Operations",
    description: "Insert, edit, and delete rows directly. Foreign key dropdown support and type-aware cell formatting.",
    badge: "CRUD"
  },
  {
    icon: <Newspaper className="w-5 h-5" />,
    title: "Migration Management",
    description: "Track schema changes with local and applied migrations. Rollback support and auto-apply for seamless versioning.",
    badge: "Schema"
  },
  {
    icon: <CloudIcon className="w-5 h-5" />,
    title: "Cloud Database Support",
    description: "Connect to Supabase, Railway, Neon, and other cloud providers with self-signed certificate handling.",
    badge: "New"
  },
  {
    icon: <Download className="w-5 h-5" />,
    title: "Export & Import",
    description: "Export tables to CSV or JSON format. Bulk export entire databases with a single click.",
    badge: "Data"
  },
  {
    icon: <SearchIcon className="w-5 h-5" />,
    title: "Smart Search",
    description: "Search across all table columns with paginated results. Case-insensitive matching for quick data discovery.",
    badge: "Search"
  },
  {
    icon: <Thermometer className="w-5 h-5" />,
    title: "Customizable Themes",
    description: "Light and dark modes with multiple accent colors. Persistent preferences for a personalized experience.",
    badge: "UI"
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in-up">
            Everything you need
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto opacity-0 animate-fade-in-up stagger-1">
            200+ features packed into a sleek, minimalistic interface.
            From simple queries to complex schema management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="group hover:bg-accent/50 transition-all duration-300 opacity-0 animate-fade-in-up border-border/50"
              style={{ animationDelay: `${0.1 * (index + 2)}s` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {feature.icon}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
