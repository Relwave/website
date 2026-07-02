import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { Product } from '@/components/product'
import { CoreWorkflow } from '@/components/core-workflow'
import { FeatureGrid } from '@/components/feature-grid'
import { SupportedDatabases } from '@/components/supported-databases'
import { AdvancedFeatures } from '@/components/advanced-features'
import { ArchitectureSection } from '@/components/architecture-section'
import { FAQSection } from '@/components/faq-section'
import { DownloadSection } from '@/components/download-section'
import { CTASection } from '@/components/cta-section'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Header />
      <main>
        <HeroSection />

        <Product />

        <CoreWorkflow />

        <FeatureGrid />

        <ArchitectureSection />

        <SupportedDatabases />

        <AdvancedFeatures />

        <FAQSection />

        <DownloadSection />

        <CTASection />
      </main>
    </div>
  )
}
