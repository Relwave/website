import {
  BarChart3,
  Code,
  Database,
  Download,
  GitBranch,
  Newspaper,
  Notebook,
  PartyPopper,
  Search,
  Table,
  Thermometer,
} from 'lucide-react'

const features = [
  {
    icon: <Database className="w-5 h-5" />,
    title: "Multi-Database",
    description: "Connect to PostgreSQL and MySQL with SSL/TLS support. SQLite and more databases coming soon.",
    size: "large"
  },
  {
    icon: <PartyPopper className="w-5 h-5" />,
    title: "Self Hosted",
    description: "No annoying server downtime. Everything is in your computer. Your data is yours.",
    size: "normal"
  },
  {
    icon: <GitBranch className="w-5 h-5" />,
    title: "ER Diagrams",
    description: "Interactive entity-relationship diagrams with auto-layout, minimap navigation, and relationship visualization.",
    size: "normal"
  },
  {
    icon: <Code className="w-5 h-5" />,
    title: "SQL Editor",
    description: "VS Code-style SQL editor with multi-tab support, syntax highlighting, query history, and keyboard shortcuts.",
    size: "large"
  },
  {
    icon: <Table className="w-5 h-5" />,
    title: "Query Builder",
    description: "Drag-and-drop interface to build complex queries. Support for JOINs, filters, GROUP BY, and ORDER BY clauses.",
    size: "normal"
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Charts",
    description: "Bar, line, pie charts from query results",
    size: "normal"
  },
  {
    icon: <Search className="w-5 h-5" />,
    title: "Schema Explorer",
    description: "Browse tables, columns, and metadata",
    size: "normal"
  },
  {
    icon: <Download className="w-5 h-5" />,
    title: "Export & Import",
    description: 'Export tables to CSV or JSON format. Bulk export entire databases with a single click.',
    size: "normal"
  },
  {
    icon: <Search className="w-5 h-5" />,
    title: "Smart Search",
    description: "Search across all table columns with paginated results. Case-insensitive matching for quick data discovery",
    size: "large"
  },
  {
    icon: <Thermometer className="w-5 h-5" />,
    title: "Customizable Theme",
    description: "Light and dark modes with multiple accent colors. Persistent preferences for a personalized experience.",
    size: "normal"
  },
  {
    icon: <Notebook className="w-5 h-5" />,
    title: "Data Operations",
    description: "Insert, edit, and delete rows directly. Foreign key dropdown support and type-aware cell formatting.",
    size: "normal"
  },
  {
    icon: <Newspaper className="w-5 h-5" />,
    title: "Migration Management",
    description: "Track schema changes with local and applied migrations. Rollback support and auto-apply for seamless versioning.",
    size: "large"
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-28 px-6 overflow-hidden">
      {/* Layered Background Effects */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)] bg-size-[32px_32px] pointer-events-none" />

      {/* Radial Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-6 tracking-wider uppercase border border-primary/20 animate-fade-in-up">
            Features
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5 leading-tight animate-fade-in-up delay-100">
            <span className="bg-linear-to-b from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              Everything you need
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Powerful tools wrapped in a clean, intuitive interface designed for modern workflows
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative rounded-2xl border border-border/40 bg-background/60 backdrop-blur-sm shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 hover:scale-[1.02] overflow-hidden animate-fade-in-up ${feature.size === 'large' ? 'lg:col-span-2' : ''
                }`}
              style={{
                animationDelay: `${300 + index * 50}ms`,
              }}
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Decorative Corner Accent */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all" />

              <div className={`relative p-6 h-full flex ${feature.size === 'large' ? 'flex-row items-center gap-6' : 'flex-col'}`}>
                {/* Icon Container */}
                <div className={`${feature.size === 'large' ? 'w-16 h-16' : 'w-12 h-12'} rounded-xl bg-linear-to-b from-primary/15 to-primary/5 flex items-center justify-center text-primary border border-primary/10 group-hover:border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm shrink-0 ${feature.size === 'large' ? '' : 'mb-4'}`}>
                  <div className={feature.size === 'large' ? 'scale-125' : ''}>
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className={`font-semibold mb-2 group-hover:text-primary transition-colors ${feature.size === 'large' ? 'text-xl' : 'text-lg'}`}>
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Arrow indicator for large cards */}
                {feature.size === 'large' && (
                  <div className="hidden lg:flex w-10 h-10 rounded-full border border-border/40 items-center justify-center text-muted-foreground/50 group-hover:border-primary/40 group-hover:text-primary transition-all shrink-0">
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}