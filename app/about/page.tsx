import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  AboutHero,
  AboutWelcome,
  AboutVision,
  AboutMission,
  AboutCross,
  AboutWorship,
  AboutSchedule
} from '@/components/ui/about'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero />
        <AboutWelcome />
        {/* <AboutVision />
        <AboutMission />
        <AboutCross />
        <AboutWorship />
        <AboutSchedule /> */}
      </main>
      <Footer />
    </div>
  )
} 