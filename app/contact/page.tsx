'use client'
import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import {
  Mail,
  Twitter,
  MessageSquare,
  Heart,
  Bug,
  LifeBuoy,
  Send,
  Github
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ContactPage() {
  const contactMethods = [
    {
      title: 'General Inquiries',
      description: 'Have a question about the product or want to say hi?',
      icon: Mail,
      action: 'Email Us',
      href: 'mailto:opensourceyash@gmail.com',
      color: 'bg-blue-500/10 text-blue-500'
    },
    {
      title: 'Report a Bug',
      description: 'Found an issue? Report it on GitHub and help us improve.',
      icon: Bug,
      action: 'Open Issue',
      href: 'https://github.com/Relwave/relwave-app/issues',
      color: 'bg-rose-500/10 text-rose-500'
    },
    {
      title: 'Technical Support',
      description: 'Need help with setup or advanced configurations?',
      icon: LifeBuoy,
      action: 'Get Help',
      href: 'https://github.com/Relwave/relwave-app/discussions',
      color: 'bg-emerald-500/10 text-emerald-500'
    },
    {
      title: 'Sponsorship',
      description: 'Support our open-source mission and get featured.',
      icon: Heart,
      action: 'Sponsor Now',
      href: 'https://github.com/sponsors/Relwave',
      color: 'bg-pink-500/10 text-pink-500'
    }
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 pt-32 pb-24">
        <section className="px-6 mb-20 text-center">
          <div className="max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-6">Connect with Us</Badge>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
              We&apos;re here to <br />
              <span className="text-primary italic">help you build</span>
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Whether you&apos;re a single developer or a large team, we&apos;d love to
              hear your feedback and help you get the most out of Relwave.
            </p>
          </div>
        </section>

        <section className="px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, i) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl border border-border/60 bg-card hover:border-primary/40 transition-all hover:shadow-xl group"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${method.color}`}>
                  <method.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{method.title}</h3>
                <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                  {method.description}
                </p>
                <Button variant="outline" className="w-full rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-all" asChild>
                  <Link href={method.href}>{method.action}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="px-6 mt-32">
          <div className="max-w-4xl mx-auto rounded-[2.5rem] bg-foreground text-background p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Send className="w-32 h-32 -rotate-12" />
            </div>
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-5xl font-black mb-6">Stay in the loop</h2>
              <p className="text-background/60 mb-10 max-w-xl mx-auto leading-relaxed">
                Join our community on Discord and follow us on Twitter for the latest
                updates, features, and community spotlights.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="link" className="bg-transparent border-background/20 text-background rounded-full px-8 h-12">
                  <Link href="https://github.com/Relwave/relwave-app" target="_blank" className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    Star us on GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

