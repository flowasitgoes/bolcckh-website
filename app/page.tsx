import { Header } from "@/components/header"
import { 
  HeroSection,
  ServicesSection,
  NewsSection,
  TestimonialSection,
  ArchiveSection,
  OnlineChannelSection,
  FindUsSection
} from "@/components/ui/home"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <NewsSection />
        <TestimonialSection />
        {/* <ArchiveSection /> */}
        {/* <OnlineChannelSection />  */}
        <FindUsSection />
      </main>
      <Footer />
    </div>
  )
}
