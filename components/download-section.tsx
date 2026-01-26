import { Button } from '@/components/ui/button'
import { ArrowRight, Download } from 'lucide-react'
import Link from 'next/link'

export function DownloadSection() {
  return (
    <section id="download" className="relative py-28 px-6 overflow-hidden">
      {/* Layered Background Effects */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)] bg-size-[32px_32px] pointer-events-none" />

      {/* Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-6 tracking-wider uppercase border border-primary/20">
            <Download className="w-3 h-3" />
            Download
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 leading-tight">
            <span className="bg-linear-to-b from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              Get Started Today
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Download RelWave and start exploring your databases in minutes
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-lg mx-auto mb-12">
          <Link
            href="https://github.com/Relwave/relwave-app/releases/tag/v0.1.0-beta.5"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-8 rounded-2xl border border-border/40 bg-background/60 backdrop-blur-sm shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:scale-[1.05] hover:-translate-y-1"
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 rounded-2xl bg-linear-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <div className="relative">
              <div className="w-14 h-14 mb-4 mx-auto transform group-hover:scale-110 transition-transform">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg" />
              </div>
              <p className="text-base font-semibold mb-2 group-hover:text-primary transition-colors">Windows</p>
              <p className="text-sm text-muted-foreground/70">.exe / .msi</p>
            </div>
          </Link>

          <Link
            href="https://github.com/Relwave/relwave-app/releases/tag/v0.1.0-beta.5"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-8 rounded-2xl border border-border/40 bg-background/60 backdrop-blur-sm shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:scale-[1.05] hover:-translate-y-1"
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 rounded-2xl bg-linear-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <div className="relative">
              <div className="w-14 h-14 mb-4 mx-auto transform group-hover:scale-110 transition-transform">

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />

              </div>
              <p className="text-base font-semibold mb-2 group-hover:text-primary transition-colors">Linux</p>
              <p className="text-sm text-muted-foreground/70">.deb / .AppImage</p>
            </div>
          </Link>
        </div >

        {/* CTA Button */}
        < div className="mb-8" >
          <Button
            size="lg"
            className="h-12 px-8 text-base font-medium shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
            asChild
          >
            <Link href="https://github.com/Relwave/relwave-app/releases/tag/v0.1.0-beta.5" target="_blank" rel="noopener noreferrer">
              <Download className="w-4 h-4 mr-2.5" />
              Download Now
            </Link>
          </Button>
        </div >

        {/* All Releases Link */}
        < div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border/30 bg-background/30 backdrop-blur-sm" >
          <Link
            href="https://github.com/Relwave/relwave-app/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            View all releases
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div >
      </div >
    </section >
  )
}