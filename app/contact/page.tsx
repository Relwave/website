import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Mail } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
    return (
        <ThemeProvider>
            <div className="min-h-screen bg-background flex flex-col">
                <Header />

                {/* Hero Section */}
                <section className="relative pt-32 pb-20 px-6 overflow-hidden flex-1">
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

                    {/* Subtle Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)] bg-size-[32px_32px] pointer-events-none" />

                    <div className="max-w-2xl mx-auto text-center relative">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 text-xs mb-8 px-3 py-1.5 rounded-full border border-border/40 bg-background/50 backdrop-blur-sm shadow-sm animate-fade-in-down">
                            <Mail className="w-3.5 h-3.5 text-primary" />
                            <span className="text-muted-foreground/80 font-medium">Get in Touch</span>
                        </div>

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
                                href="mailto:yashh5967@gmail.com"
                                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 font-medium"
                                data-umami-event="contact_email_click"
                            >
                                <Mail className="w-5 h-5" />
                                yashh5967@gmail.com
                            </Link>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </ThemeProvider>
    )
}
