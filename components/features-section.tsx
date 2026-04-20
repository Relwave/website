import {
  BarChart3,
  Code,
  Database,
  Download,
  FolderArchiveIcon,
  GitBranch,
  type LucideIcon,
  Newspaper,
  Notebook,
  PartyPopper,
  Search,
  Table,
  Thermometer,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'

type Feature = {
  icon: LucideIcon
  title: string
  description: string
  size: 'normal' | 'large'
}

const features: Feature[] = [
  {
    icon: Database,
    title: "Multi-Database",
    description: "Connect to PostgreSQL and MySQL with SSL/TLS support. SQLite and more databases coming soon.",
    size: "large"
  },
  {
    icon: PartyPopper,
    title: "Self Hosted",
    description: "No annoying server downtime. Everything is in your computer. Your data is yours.",
    size: "normal"
  },
  {
    icon: GitBranch,
    title: "Version Control",
    description: "Track schema changes with Git integration. View diffs, commit history, and rollback to previous versions.",
    size: "normal"
  },
  {
    icon: FolderArchiveIcon,
    title: "Project Management",
    description: "Organize connections, queries, and ER diagrams into projects. Save and share project configurations.",
    size: "normal"
  },
  {
    icon: GitBranch,
    title: "ER Diagrams",
    description: "Interactive entity-relationship diagrams with auto-layout, minimap navigation, and relationship visualization.",
    size: "normal"
  },
  {
    icon: Code,
    title: "SQL Editor",
    description: "VS Code-style SQL editor with multi-tab support, syntax highlighting, query history, and keyboard shortcuts.",
    size: "large"
  },
  {
    icon: Table,
    title: "Query Builder",
    description: "Drag-and-drop interface to build complex queries. Support for JOINs, filters, GROUP BY, and ORDER BY clauses.",
    size: "normal"
  },
  {
    icon: BarChart3,
    title: "Charts",
    description: "Bar, line, pie charts from query results",
    size: "normal"
  },
  {
    icon: Search,
    title: "Schema Explorer",
    description: "Browse tables, columns, and metadata",
    size: "normal"
  },
  {
    icon: Download,
    title: "Export & Import",
    description: 'Export tables to CSV or JSON format. Bulk export entire databases with a single click.',
    size: "normal"
  },
  {
    icon: Search,
    title: "Smart Search",
    description: "Search across all table columns with paginated results. Case-insensitive matching for quick data discovery",
    size: "large"
  },
  {
    icon: Thermometer,
    title: "Customizable Theme",
    description: "Light and dark modes with multiple accent colors. Persistent preferences for a personalized experience.",
    size: "normal"
  },
  {
    icon: Notebook,
    title: "Data Operations",
    description: "Insert, edit, and delete rows directly. Foreign key dropdown support and type-aware cell formatting.",
    size: "normal"
  },
  {
    icon: Newspaper,
    title: "Migration Management",
    description: "Track schema changes with local and applied migrations. Rollback support and auto-apply for seamless versioning.",
    size: "large"
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-6">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="text-start space-y-4">
          <Badge className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-6 tracking-wider uppercase border border-primary/20 animate-fade-in-up">
            Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Everything you need</h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Powerful tools wrapped in a clean, intuitive interface designed for modern workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <Card
                key={feature.title}
                className={cn(
                  'h-full justify-between border-border/60 transition-colors hover:border-primary/40',
                  feature.size === 'large' && 'md:col-span-2'
                )}
              >
                <CardHeader className="gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border bg-muted text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-sm leading-6">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}