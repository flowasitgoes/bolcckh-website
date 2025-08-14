import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  MissionHero,
  MissionMainContent,
  MissionVideo,
  MissionLifeTestimony,
  MissionImageGrid
} from '@/components/ui/mission'
import '@/styles/mission.css'

export const metadata: Metadata = {
  title: '宣教使命 | 高雄靈糧堂 - 生命見證與主崇信息',
  description: '高雄靈糧堂的宣教使命，包含生命見證、主崇信息精華、禱告蒙應允等，見證神的作為何等美好。',
  keywords: '高雄靈糧堂, 宣教使命, 生命見證, 主崇信息, 禱告蒙應允, 門訓見證, 神的作為',
  
  // Open Graph (社群分享)
  openGraph: {
    title: '宣教使命 | 高雄靈糧堂 - 生命見證與主崇信息',
    description: '高雄靈糧堂的宣教使命，包含生命見證、主崇信息精華、禱告蒙應允等，見證神的作為何等美好。',
    url: 'https://conflux-tech.com/mission',
    images: [
      {
        url: 'https://conflux-tech.com/wp-content/uploads/2025/08/0815-21-scaled.png',
        width: 1200,
        height: 630,
        alt: '高雄靈糧堂宣教使命',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: '宣教使命 | 高雄靈糧堂 - 生命見證與主崇信息',
    description: '高雄靈糧堂的宣教使命，包含生命見證、主崇信息精華、禱告蒙應允等，見證神的作為何等美好。',
    images: ['https://conflux-tech.com/wp-content/uploads/2025/08/0815-21-scaled.png'],
  },
}

export default function MissionPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div>
          <img src="/mission/C1/C1-bn.png" alt="宣教使命" />
        </div>
        <MissionHero />
        <MissionMainContent />
        <MissionVideo />
        <MissionLifeTestimony />
        <MissionImageGrid />
      </main>
      <Footer />
    </div>
  )
} 