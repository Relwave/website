import { Header } from '@/components/header'
import { Badge } from '@/components/ui/badge'
import { Mail } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden flex-1">

                <div className="max-w-2xl mx-auto text-center relative">
                    {/* Badge */}
                    <Badge className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-6 tracking-wider uppercase border border-primary/20 animate-fade-in-up">
                        <Mail className="w-3.5 h-3.5 text-primary" />Get in Touch
                    </Badge>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-[1.05] animate-fade-in-up delay-100">
                        <span className="bg-linear-to-b from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                            Contact & Sponsor
                        </span>
                    </h1>

                    {/* Combined Contact & Sponsor Paragraph */}
                    <div className="p-8 rounded-2xl border border-border/40 bg-background/50 backdrop-blur-sm animate-fade-in-up delay-200">
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Have questions, feedback, or want to contribute? We&apos;d love to hear from you!
                            Whether you&apos;re looking to report a bug, request a feature, or support our open-source project
                            through sponsorship — feel free to reach out.
                        </p>

                        <Link
                            href="mailto:opensourceyash@gmail.com"
                            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 font-medium"
                            data-umami-event="contact_email_click"
                        >
                            <Mail className="w-5 h-5" />
                            opensourceyash@gmail.com
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
