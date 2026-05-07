import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { ProductDemo } from '@/components/product-demo'
import { FeatureGrid } from '@/components/feature-grid'
import { VersionTimeline } from '@/components/version-timeline'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Header />
      <main>
        <HeroSection />
        <ProductDemo />
        <FeatureGrid />
        <VersionTimeline />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
