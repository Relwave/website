'use client'
import { motion } from 'framer-motion'

export function SupportedDatabases() {
  const databases = [
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'MariaDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg' },
    { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' }
  ]

  return (
    <section className="py-12 px-6 border-y border-border/40 bg-accent/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <p className="text-sm text-muted-foreground font-semibold uppercase tracking-widest mb-6">
          Supported Databases
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
          {databases.map((db, i) => (
            <motion.div 
              key={db.name} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 group cursor-default"
            >
              <img src={db.icon} alt={db.name} className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-110" />
              <span className="text-sm md:text-base font-bold tracking-wider">{db.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
