import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { ScreenshotsSection } from '@/components/screenshots-section'
import { FeaturesSection } from '@/components/features-section'
import { DownloadSection } from '@/components/download-section'
import { Footer } from '@/components/footer'
import { Separator } from '@/components/ui/separator'

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* Background glow effect */}
        <div className="hero-glow animate-glow" />

        <Header />
        <HeroSection />
        <ScreenshotsSection />
        <Separator />
        <FeaturesSection />
        <Separator />
        <DownloadSection />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
