import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: '關於我們 | 高雄靈糧堂 - 認識我們的異象與使命',
  description: '認識高雄靈糧堂的異象、使命、核心價值與聚會時間，了解我們如何透過敬拜、禱告、小組生活來建立基督的身體。',
  keywords: '高雄靈糧堂, 關於我們, 教會異象, 教會使命, 聚會時間, 敬拜, 禱告, 小組生活, 基督教',
  
  // Open Graph (社群分享)
  openGraph: {
    title: '關於我們 | 高雄靈糧堂 - 認識我們的異象與使命',
    description: '認識高雄靈糧堂的異象、使命、核心價值與聚會時間，了解我們如何透過敬拜、禱告、小組生活來建立基督的身體。',
    url: 'https://conflux-tech.com/about',
    images: [
      {
        url: 'https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png',
        width: 1200,
        height: 630,
        alt: '高雄靈糧堂關於我們',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: '關於我們 | 高雄靈糧堂 - 認識我們的異象與使命',
    description: '認識高雄靈糧堂的異象、使命、核心價值與聚會時間，了解我們如何透過敬拜、禱告、小組生活來建立基督的身體。',
    images: ['https://conflux-tech.com/wp-content/uploads/2025/07/icon_工作區域-1_工作區域-1-2.png'],
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero />
        <AboutWelcome />
        <AboutVision />
        <AboutMission />
        <AboutCross />
        <AboutSchedule /> 
      </main>
      <Footer />
    </div>
  )
} 