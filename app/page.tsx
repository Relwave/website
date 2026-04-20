import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { FeaturesSection } from '@/components/features-section'
import { RoadmapSection } from '@/components/roadmap-section'
import { DownloadSection } from '@/components/download-section'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
        <Header />
        <HeroSection />
        <HowItWorksSection />
        <RoadmapSection />
        <DownloadSection />
      </div>
  )
}
