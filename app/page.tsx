import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { FeaturesSection } from '@/components/features-section'
import { RoadmapSection } from '@/components/roadmap-section'
import { DownloadSection } from '@/components/download-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        {/* <RoadmapSection /> */}
        <DownloadSection />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
