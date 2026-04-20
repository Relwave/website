import { FeaturesSection } from '@/components/features-section'
import { Header } from '@/components/header'

const page = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <FeaturesSection />
        </div>
    )
}

export default page