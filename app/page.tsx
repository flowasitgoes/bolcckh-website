import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: '高雄靈糧堂 - 首頁 | 歡迎來到主的家',
  description: '高雄靈糧堂官方網站首頁，提供教會最新消息、聚會時間、服務項目、信仰資源等資訊，歡迎您來到主的家。',
  keywords: '高雄靈糧堂, 教會首頁, 基督教, 信仰, 聚會, 敬拜, 高雄教會, 靈糧堂',
  
  // Open Graph (社群分享)
  openGraph: {
    title: '高雄靈糧堂 - 首頁 | 歡迎來到主的家',
    description: '高雄靈糧堂官方網站首頁，提供教會最新消息、聚會時間、服務項目、信仰資源等資訊。',
    url: 'https://conflux-tech.com',
    images: [
      {
        url: 'https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png',
        width: 1200,
        height: 630,
        alt: '高雄靈糧堂首頁',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: '高雄靈糧堂 - 首頁 | 歡迎來到主的家',
    description: '高雄靈糧堂官方網站首頁，提供教會最新消息、聚會時間、服務項目、信仰資源等資訊。',
    images: ['https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png'],
  },
}

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
