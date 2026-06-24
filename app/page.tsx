import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { Product } from '@/components/product'
import { FeatureGrid } from '@/components/feature-grid'
import { VersionTimeline } from '@/components/version-timeline'
import { CTASection } from '@/components/cta-section'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Header />
      <main>
        <HeroSection />
        <Product />
        <FeatureGrid />
        <VersionTimeline />
        <CTASection />
      </main>
    </div>
  )
}
